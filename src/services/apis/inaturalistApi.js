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
  const query = new URLSearchParams({
    q: botanicalName,
    rank: 'species',
    per_page: '1'
  });

  const response = await fetch(`${INATURALIST_BASE_URL}/taxa?${query.toString()}`);

  if (!response.ok) {
    throw new Error(`iNaturalist request failed with ${response.status}`);
  }

  const payload = await response.json();
  return payload?.results?.[0] ?? null;
}
