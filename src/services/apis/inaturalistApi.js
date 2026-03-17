const INATURALIST_BASE_URL = 'https://api.inaturalist.org/v1';

/**
 * Primary botanical source (phase 1): iNaturalist taxa API.
 *
 * Future API expansion hooks should be orchestrated in herbProfileService:
 * - GBIF for occurrence/distribution granularity
 * - PubChem for chemical profile data
 * - PlantNet for visual recognition and image enrichment
 * - Regional and medicinal action datasets for clinical context
 */
export async function fetchTaxonByBotanicalName(botanicalName) {
  const searchTerms = [
    botanicalName,
    String(botanicalName ?? '').replaceAll(' x ', ' × '),
    String(botanicalName ?? '').replaceAll(' × ', ' x ')
  ].filter(Boolean);

  for (const term of new Set(searchTerms)) {
    const query = new URLSearchParams({
      q: term,
      per_page: '10'
    });

    const response = await fetch(`${INATURALIST_BASE_URL}/taxa?${query.toString()}`);

    if (!response.ok) {
      throw new Error(`iNaturalist request failed with ${response.status}`);
    }

    const payload = await response.json();
    const results = payload?.results ?? [];
    const normalizedBotanical = String(botanicalName ?? '').trim().toLowerCase();

    const exactNameMatch = results.find((result) => String(result?.name ?? '').trim().toLowerCase() === normalizedBotanical);
    if (exactNameMatch?.default_photo?.medium_url) {
      return exactNameMatch;
    }

    const firstWithImage = results.find((result) => result?.default_photo?.medium_url);
    if (firstWithImage) {
      return firstWithImage;
    }
  }

  return null;
}
