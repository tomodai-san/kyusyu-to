/**
 * Scores image candidates on:
 *   - Keyword match in title/description/tags (0–50 pts)
 *   - Japan/Kyushu context bonus (0–10 pts)
 *   - Resolution quality (0–20 pts)
 *   - Landscape aspect ratio (0–10 pts)
 *   - Primary search term bonus (0–10 pts)
 *   - Negative keyword penalty (−15 per hit, filtered out)
 *
 * Phase 2 (not yet implemented):
 *   - Geotag EXIF proximity scoring
 *   - Google Vision AI landmark detection
 *   - OpenAI CLIP semantic similarity
 */
export function scoreImages(images, spotInfo) {
  if (!images.length) return [];

  const keywords = spotInfo.photoKeywords.map(k => k.toLowerCase());
  const negative = (spotInfo.negativeKeywords ?? []).map(k => k.toLowerCase());
  const spotNameLower = (spotInfo.name ?? '').toLowerCase();
  const prefectureLower = (spotInfo.prefecture ?? '')
    .toLowerCase()
    .replace(' prefecture', '');
  const primaryTerm = (keywords[0] ?? '').toLowerCase();

  const scored = images.map(img => {
    const haystack = [img.title, img.description, img.searchTerm, ...img.tags]
      .join(' ')
      .toLowerCase();

    let score = 0;
    const matchedKeywords = [];
    const matchedNegative = [];

    // Keyword match (max 50 pts)
    for (const kw of keywords) {
      const words = kw.split(/\s+/).filter(w => w.length > 2);
      if (haystack.includes(kw)) {
        score += 10;
        matchedKeywords.push(kw);
      } else {
        const hits = words.filter(w => haystack.includes(w));
        if (hits.length >= 2) {
          score += 5;
          matchedKeywords.push(hits.join('+'));
        } else if (hits.length === 1) {
          score += 2;
        }
      }
    }

    // Context bonus (max 10 pts)
    if (spotNameLower && haystack.includes(spotNameLower)) score += 5;
    if (prefectureLower && haystack.includes(prefectureLower)) score += 3;
    if (haystack.includes('kyushu')) score += 3;
    else if (haystack.includes('japan')) score += 1;

    // Resolution (max 20 pts)
    const mp = (img.width * img.height) / 1_000_000;
    score += mp >= 10 ? 20 : mp >= 5 ? 15 : mp >= 2 ? 10 : 5;

    // Aspect ratio (max 10 pts): prefer 16:9 landscape
    const ratio = img.width / img.height;
    if (ratio >= 1.5 && ratio <= 2.2) score += 10;
    else if (ratio >= 1.0) score += 4;

    // Primary search term bonus (max 10 pts)
    if (img.searchTerm.toLowerCase() === primaryTerm) score += 10;

    // Negative keyword penalty
    for (const neg of negative) {
      if (haystack.includes(neg)) {
        score -= 15;
        matchedNegative.push(neg);
      }
    }

    return {
      ...img,
      score: Math.max(0, Math.min(100, score)),
      matchedKeywords,
      matchedNegative,
    };
  });

  // Deduplicate, remove images hit by negative keywords, sort desc
  const seen = new Set();
  return scored
    .filter(img => {
      if (seen.has(img.id) || img.matchedNegative.length > 0) return false;
      seen.add(img.id);
      return true;
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}
