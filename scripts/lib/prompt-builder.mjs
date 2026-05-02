export function buildPrompt(spotName) {
  return `You are a Japanese tourism expert. Generate precise structured data for a travel website targeting English-speaking tourists visiting Kyushu, Japan.

Spot: ${spotName}

Return ONLY a valid JSON object — no markdown fences, no explanation:

{
  "fullName": "Complete official name with prefecture and city, e.g. 'Dazaifu Tenmangu Shrine (太宰府天満宮), Dazaifu City, Fukuoka Prefecture'",
  "address": "Full English address including postal code and Japan, e.g. '4-7-1 Sazaifu, Dazaifu, Fukuoka 818-0117, Japan'",
  "addressJa": "完全な日本語住所（〒郵便番号 都道府県市区町村番地）",
  "lat": 33.5134,
  "lng": 130.5353,
  "coordinateConfidence": "high|medium|low",
  "features": [
    "Specific feature 1 with concrete details (numbers, history, seasonal events)",
    "Specific feature 2",
    "Specific feature 3",
    "Specific feature 4",
    "Specific feature 5"
  ],
  "photoKeywords": [
    "Most specific English phrase for Wikimedia Commons search, e.g. 'Dazaifu Tenmangu shrine gate plum blossom'",
    "Second English phrase focusing on a unique visual element",
    "Third English phrase",
    "Japanese phrase for Wikimedia, e.g. '太宰府天満宮 梅'",
    "Broader English fallback phrase"
  ],
  "negativeKeywords": [
    "illustration",
    "map",
    "logo",
    "cartoon"
  ],
  "bestPhotoType": "Concrete description of the ideal photo, e.g. 'Wide-angle shot of the main vermilion torii gate with plum blossoms in foreground, from the stone-paved approach at eye level, late February'",
  "officialUrl": "https://actual-official-website.or.jp/",
  "slug": "url-friendly-lowercase-hyphenated-slug",
  "name": "Short English display name",
  "prefecture": "Prefecture Name in English, e.g. 'Fukuoka Prefecture'",
  "tagline": "Compelling tagline under 60 characters",
  "description": "2-3 sentence description highlighting unique appeal for English-speaking tourists",
  "bestTime": "Best months or season with specific reason",
  "travelTime": "Travel time from nearest Shinkansen hub, e.g. '30 min from Hakata by Kagoshima Line'",
  "category": "shrine|temple|park|castle|onsen|food|nature|beach|museum|festival|island|viewpoint"
}`;
}

export function buildTemplateJson(spotName) {
  return {
    _instructions: 'Paste Claude\'s JSON response here (replace all fields). Then run: node scripts/generate-spot.mjs --process <slug>',
    _input: spotName,
    fullName: '',
    address: '',
    addressJa: '',
    lat: 0,
    lng: 0,
    coordinateConfidence: 'medium',
    features: [],
    photoKeywords: [],
    negativeKeywords: ['illustration', 'map', 'logo', 'cartoon'],
    bestPhotoType: '',
    officialUrl: '',
    slug: '',
    name: '',
    prefecture: '',
    tagline: '',
    description: '',
    bestTime: '',
    travelTime: '',
    category: '',
  };
}
