/**
 * Converts API-specific shapes into SacredSeed's internal herb profile contract.
 */
export function normalizeInaturalistTaxon(taxon, fallback) {
  if (!taxon && !fallback) {
    return null;
  }

  const defaultName = fallback?.botanicalName ?? 'Unknown species';

  return {
    commonName: taxon?.preferred_common_name ?? fallback?.commonName ?? 'Unknown common name',
    botanicalName: taxon?.name ?? defaultName,
    // iNaturalist's taxon payload doesn't reliably expose family names in this endpoint.
    // Keep fallback value stable until GBIF/extended taxonomy APIs are wired in phase 2.
    family: fallback?.family ?? 'Unknown family',
    synonyms: fallback?.synonyms ?? [],
    description: taxon?.wikipedia_summary ?? fallback?.description ?? 'No description available yet.',
    distribution: fallback?.distribution ?? 'Distribution data will be enriched in phase 2 datasets.',
    habitat: fallback?.habitat ?? 'Habitat details will be expanded in future data integrations.',
    medicinalProperties: fallback?.medicinalProperties ?? [],
    preparations: fallback?.preparations ?? [],
    safetyNotes: fallback?.safetyNotes ?? 'Safety and contraindication guidance pending additional datasets.',
    image: taxon?.default_photo?.medium_url ?? fallback?.image ?? ''
  };
}
