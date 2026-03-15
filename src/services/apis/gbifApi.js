const GBIF_BASE_URL = 'https://api.gbif.org/v1';

/**
 * Secondary botanical source: GBIF species and occurrence APIs.
 */
export async function fetchGbifSpeciesMatch(botanicalName) {
  const query = new URLSearchParams({ name: botanicalName });
  const response = await fetch(`${GBIF_BASE_URL}/species/match?${query.toString()}`);

  if (!response.ok) {
    throw new Error(`GBIF species match request failed with ${response.status}`);
  }

  return response.json();
}

export async function fetchGbifOccurrenceSummary(taxonKey) {
  if (!taxonKey) {
    return null;
  }

  const query = new URLSearchParams({
    taxonKey: String(taxonKey),
    limit: '0',
    facet: 'country',
    facetLimit: '8'
  });

  const response = await fetch(`${GBIF_BASE_URL}/occurrence/search?${query.toString()}`);

  if (!response.ok) {
    throw new Error(`GBIF occurrence request failed with ${response.status}`);
  }

  return response.json();
}
