/**
 * Validates coordinates against Nominatim (OpenStreetMap geocoding).
 * No API key required. Rate limit: 1 req/sec — we only make 1 call per run.
 * ToS: https://operations.osmfoundation.org/policies/nominatim/
 */
export async function validateLocation(spotInfo) {
  // Use short name — Nominatim handles complex multilingual strings poorly
  const query = spotInfo.name || (spotInfo.fullName ?? '').split(/[,(]/)[0].trim();
  if (!query) return { validated: false, reason: 'No spot name provided' };

  try {
    const url = new URL('https://nominatim.openstreetmap.org/search');
    url.searchParams.set('q', query);
    url.searchParams.set('format', 'json');
    url.searchParams.set('limit', '3');
    url.searchParams.set('countrycodes', 'jp');

    const res = await fetch(url.toString(), {
      headers: {
        'User-Agent': 'KyushuTourismSite/1.0 (https://realkyushu.com)',
        'Accept-Language': 'en',
      },
    });

    if (!res.ok) throw new Error(`Nominatim HTTP ${res.status}`);

    const results = await res.json();
    if (!results.length) {
      return {
        validated: false,
        reason: 'Not found on OpenStreetMap',
        claudeLat: spotInfo.lat,
        claudeLng: spotInfo.lng,
      };
    }

    const top = results[0];
    const osmLat = parseFloat(top.lat);
    const osmLng = parseFloat(top.lon);
    const osmAddress = top.display_name;

    // 1 degree ≈ 111 km (rough haversine)
    const distanceKm =
      Math.sqrt((osmLat - spotInfo.lat) ** 2 + (osmLng - spotInfo.lng) ** 2) * 111;

    return {
      validated: true,
      accurate: distanceKm < 5,
      distanceKm: Math.round(distanceKm * 10) / 10,
      osmLat,
      osmLng,
      osmAddress,
      claudeLat: spotInfo.lat,
      claudeLng: spotInfo.lng,
    };
  } catch (err) {
    return { validated: false, reason: err.message };
  }
}
