/**
 * Searches Wikimedia Commons for freely-licensed photos.
 * No API key required.
 * Rate limit: polite 300ms delay between requests.
 * Only returns CC0, CC BY, CC BY-SA, or public domain images.
 */

const COMMONS_API = 'https://commons.wikimedia.org/w/api.php';
const UA = 'KyushuTourismSite/1.0 (https://realkyushu.com)';

// Wikimedia returns varied license strings — match by prefix/substring
const FREE_LICENSE_PATTERNS = ['CC0', 'CC BY', 'CC-BY', 'Public domain', 'PD-', 'FAL'];

const isLatinKeyword = k => !/[　-鿿゠-ヿ぀-ゟ]/.test(k);

export async function searchImages(photoKeywords = []) {
  // Shorten keyword phrases to 3 words max — Wikimedia full-text search
  // performs poorly on long phrases that don't match file names exactly.
  const terms = photoKeywords
    .filter(isLatinKeyword)
    .slice(0, 3)
    .map(k => k.split(/\s+/).slice(0, 3).join(' '));

  const results = [];
  for (const term of terms) {
    const images = await searchCommons(term);
    results.push(...images);
    await delay(300);
  }

  return results;
}

async function searchCommons(searchTerm) {
  try {
    // Step 1: full-text search in File namespace
    const searchUrl = new URL(COMMONS_API);
    searchUrl.searchParams.set('action', 'query');
    searchUrl.searchParams.set('list', 'search');
    searchUrl.searchParams.set('srsearch', searchTerm);
    searchUrl.searchParams.set('srnamespace', '6'); // File:
    searchUrl.searchParams.set('srlimit', '10');
    searchUrl.searchParams.set('format', 'json');
    searchUrl.searchParams.set('origin', '*');

    const searchRes = await fetch(searchUrl.toString(), { headers: { 'User-Agent': UA } });
    const searchData = await searchRes.json();

    const titles = (searchData.query?.search ?? [])
      .filter(r => /\.(jpe?g|png|webp)$/i.test(r.title))
      .map(r => r.title)
      .slice(0, 8);

    if (!titles.length) return [];

    // Step 2: fetch image info + metadata for those files
    const infoUrl = new URL(COMMONS_API);
    infoUrl.searchParams.set('action', 'query');
    infoUrl.searchParams.set('titles', titles.join('|'));
    infoUrl.searchParams.set('prop', 'imageinfo');
    infoUrl.searchParams.set('iiprop', 'url|size|extmetadata');
    infoUrl.searchParams.set('iiurlwidth', '1200');
    infoUrl.searchParams.set('format', 'json');
    infoUrl.searchParams.set('origin', '*');

    const infoRes = await fetch(infoUrl.toString(), { headers: { 'User-Agent': UA } });
    const infoData = await infoRes.json();

    const images = [];
    for (const page of Object.values(infoData.query?.pages ?? {})) {
      const info = page.imageinfo?.[0];
      if (!info?.url) continue;

      const meta = info.extmetadata ?? {};
      const license = meta.LicenseShortName?.value ?? '';
      if (!isFreeLicense(license)) continue;

      const author = (meta.Artist?.value ?? 'Unknown').replace(/<[^>]+>/g, '').trim();
      const description = (meta.ImageDescription?.value ?? '').replace(/<[^>]+>/g, '').trim();
      const filename = page.title.replace(/^File:/, '').replace(/\.[^.]+$/, '');

      images.push({
        source: 'wikimedia',
        id: String(page.pageid),
        url: info.url,
        displayUrl: info.thumburl ?? info.url,
        thumbnailUrl: info.thumburl ?? info.url,
        width: info.width ?? 0,
        height: info.height ?? 0,
        title: filename,
        description,
        tags: [],
        photographer: author,
        photographerUrl: `https://commons.wikimedia.org/wiki/${encodeURIComponent(page.title)}`,
        pageUrl: `https://commons.wikimedia.org/wiki/${encodeURIComponent(page.title)}`,
        searchTerm,
        license,
        credit: `${author} / Wikimedia Commons (${license})`,
      });
    }

    return images;
  } catch (err) {
    console.warn(`  ⚠  Wikimedia Commons search for "${searchTerm}": ${err.message}`);
    return [];
  }
}

function isFreeLicense(license) {
  if (!license) return false;
  const l = license.toUpperCase();
  return FREE_LICENSE_PATTERNS.some(p => l.includes(p.toUpperCase()));
}

const delay = ms => new Promise(r => setTimeout(r, ms));
