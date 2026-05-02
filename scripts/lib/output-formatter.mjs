import { writeFileSync, mkdirSync } from 'fs';
import { resolve } from 'path';

const SEP = '─'.repeat(62);

export function formatOutput(spotInfo, validatedLocation, scoredImages) {
  // ── Spot info ────────────────────────────────────────────────
  console.log(`\n${SEP}`);
  console.log('✅  SPOT DATA');
  console.log(SEP);

  console.log(`\n📍  ${spotInfo.fullName}`);
  console.log(`    Address : ${spotInfo.address}`);
  if (spotInfo.addressJa) console.log(`    住所    : ${spotInfo.addressJa}`);
  console.log(`    Coords  : ${spotInfo.lat}°N, ${spotInfo.lng}°E  [confidence: ${spotInfo.coordinateConfidence ?? '?'}]`);

  // Location validation
  if (!validatedLocation.validated) {
    console.log(`    OSM     : ⚪ ${validatedLocation.reason}`);
  } else if (validatedLocation.accurate) {
    console.log(`    OSM     : ✅ Matches (offset ${validatedLocation.distanceKm} km)`);
    console.log(`              ${validatedLocation.osmAddress}`);
  } else {
    console.log(`    OSM     : ⚠️  MISMATCH — ${validatedLocation.distanceKm} km from Claude coords`);
    console.log(`              OSM address : ${validatedLocation.osmAddress}`);
    console.log(`              OSM coords  : ${validatedLocation.osmLat}, ${validatedLocation.osmLng}`);
    console.log(`              ⚠️  Consider using OSM coordinates in the TS snippet below`);
  }

  console.log(`\n🏷️   Features:`);
  spotInfo.features.forEach((f, i) => console.log(`    ${i + 1}. ${f}`));

  console.log(`\n🔍  Photo search keywords:`);
  spotInfo.photoKeywords.forEach((k, i) => console.log(`    ${i + 1}. "${k}"`));

  console.log(`\n📷  Ideal photo type:`);
  console.log(`    ${spotInfo.bestPhotoType}`);

  if (spotInfo.negativeKeywords?.length) {
    console.log(`\n🚫  Negative keywords: ${spotInfo.negativeKeywords.join(' | ')}`);
  }

  console.log(`\n🌐  Official URL: ${spotInfo.officialUrl || '(not specified)'}`);

  // ── Image results ────────────────────────────────────────────
  console.log(`\n${SEP}`);
  console.log(`🖼️   WIKIMEDIA COMMONS IMAGES  (${scoredImages.length} after scoring)`);
  console.log(SEP);

  if (!scoredImages.length) {
    console.log('\n    No free-license images found for these keywords.');
    console.log('    Try adjusting photoKeywords in your input JSON and re-running.');
  } else {
    scoredImages.forEach((img, i) => {
      console.log(`\n[${i + 1}] Score: ${img.score}/100`);
      console.log(`    ${img.displayUrl}`);
      console.log(`    Credit : ${img.credit}`);
      console.log(`    Size   : ${img.width}×${img.height}px`);
      if (img.matchedKeywords.length)
        console.log(`    Hits   : ${img.matchedKeywords.slice(0, 4).join(', ')}`);
      console.log(`    Page   : ${img.pageUrl}`);
    });
  }

  // ── TypeScript snippet ───────────────────────────────────────
  const coords =
    validatedLocation.validated && !validatedLocation.accurate
      ? { lat: validatedLocation.osmLat, lng: validatedLocation.osmLng }
      : { lat: spotInfo.lat, lng: spotInfo.lng };

  const tsSnippet = buildTsSnippet(spotInfo, coords, scoredImages[0] ?? null);

  console.log(`\n${SEP}`);
  console.log('📋  TYPESCRIPT SNIPPET  (paste into src/data/destinations.ts)');
  console.log(SEP);
  console.log(tsSnippet);

  // ── Save JSON ────────────────────────────────────────────────
  const slug = spotInfo.slug || 'unknown';
  const outputDir = resolve(process.cwd(), 'scripts/output');
  const outputPath = resolve(outputDir, `${slug}-${Date.now()}.json`);
  try {
    mkdirSync(outputDir, { recursive: true });
    writeFileSync(
      outputPath,
      JSON.stringify(
        { generatedAt: new Date().toISOString(), spotInfo, validatedLocation, topImages: scoredImages, tsSnippet },
        null,
        2
      )
    );
    console.log(`\n💾  Full output saved: ${outputPath}`);
  } catch {
    // non-fatal
  }
}

function buildTsSnippet(spotInfo, coords, topImage) {
  const esc = s => (s ?? '').replace(/"/g, '\\"');
  const imageUrl = topImage
    ? topImage.displayUrl
    : 'https://commons.wikimedia.org/wiki/Special:FilePath/REPLACE.jpg';
  const imageComment = topImage
    ? `// ${topImage.credit}`
    : '// TODO: paste Wikimedia Commons image URL + add credit';

  const features = (spotInfo.features ?? [])
    .slice(0, 5)
    .map(f => `    "${esc(f)}",`)
    .join('\n');

  return `
// Photo keywords : ${(spotInfo.photoKeywords ?? []).join(' | ')}
// Official URL   : ${spotInfo.officialUrl || 'TODO'}
// Coordinates    : ${coords.lat}°N, ${coords.lng}°E
{
  slug: "${spotInfo.slug}",
  name: "${esc(spotInfo.name)}",
  prefecture: "${esc(spotInfo.prefecture)}",
  tagline: "${esc(spotInfo.tagline)}",
  description: "${esc(spotInfo.description)}",
  image: "${imageUrl}",
  ${imageComment}
  highlights: [
${features}
  ],
  bestTime: "${esc(spotInfo.bestTime)}",
  travelTime: "${esc(spotInfo.travelTime)}",
  featured: false,
},`;
}
