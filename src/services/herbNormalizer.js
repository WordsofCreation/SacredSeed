function withFallback(value, fallbackValue) {
  return value ?? fallbackValue;
}

/**
 * Converts API-specific shapes into SacredSeed's internal herb profile contract.
 */
export function normalizeInaturalistTaxon(taxon, fallback) {
  if (!taxon && !fallback) {
    return null;
  }

  const defaultName = fallback?.botanicalName ?? 'Unknown species';

  return {
    commonName: withFallback(taxon?.preferred_common_name, fallback?.commonName ?? 'Unknown common name'),
    botanicalName: withFallback(taxon?.name, defaultName),
    // iNaturalist's taxon payload doesn't reliably expose family names in this endpoint.
    // Keep fallback value stable until GBIF/extended taxonomy APIs are wired in phase 2.
    family: fallback?.family ?? 'Unknown family',
    synonyms: fallback?.synonyms ?? [],
    description: withFallback(
      taxon?.wikipedia_summary,
      fallback?.description ?? 'No description available yet.'
    ),
    distribution:
      fallback?.distribution ?? 'Distribution data will be enriched in phase 2 datasets.',
    habitat:
      fallback?.habitat ?? 'Habitat details will be expanded in future data integrations.',
    medicinalProperties: fallback?.medicinalProperties ?? [],
    preparations: fallback?.preparations ?? [],
    safetyNotes:
      fallback?.safetyNotes ??
      'Safety and contraindication guidance pending additional datasets.',
    image: withFallback(taxon?.default_photo?.medium_url, fallback?.image ?? ''),
    taxonomyStatus: null,
    kingdom: null,
    phylum: null,
    class: null,
    order: null,
    genus: null,
    species: null,
    nativeRange: null,
    occurrenceNotes: null,
    activeCompounds: fallback?.activeCompounds ?? [],
    phytochemicals: fallback?.activeCompounds ?? [],
    compoundDetails: [],
    compoundNames: fallback?.activeCompounds ?? [],
    compoundSummaries: [],
    chemistryNotes: fallback?.chemistryNotes ?? null,
    chemistrySources: fallback?.chemistrySources ?? [],
    dataSources: []
  };
}

export function normalizeGbifData(speciesMatch, occurrenceSummary) {
  if (!speciesMatch) {
    return null;
  }

  const countryFacets = occurrenceSummary?.facets?.find((facet) => facet.field === 'COUNTRY')?.counts ?? [];
  const topCountries = countryFacets.slice(0, 5).map((item) => item.name).filter(Boolean);
  const occurrenceCount = occurrenceSummary?.count ?? null;

  return {
    family: speciesMatch.family ?? null,
    taxonomyStatus: speciesMatch.status ?? null,
    kingdom: speciesMatch.kingdom ?? null,
    phylum: speciesMatch.phylum ?? null,
    class: speciesMatch.class ?? null,
    order: speciesMatch.order ?? null,
    genus: speciesMatch.genus ?? null,
    species: speciesMatch.species ?? speciesMatch.canonicalName ?? null,
    nativeRange: topCountries.length
      ? `GBIF occurrence records are concentrated in: ${topCountries.join(', ')}.`
      : null,
    distribution: topCountries.length
      ? `Observed globally in GBIF records, with frequent reports from ${topCountries.join(', ')}.`
      : null,
    occurrenceNotes: occurrenceCount
      ? `GBIF currently indexes approximately ${occurrenceCount.toLocaleString()} occurrence records for this taxon.`
      : 'GBIF occurrence records are currently limited for this taxon.',
    dataSources: ['GBIF']
  };
}

export function normalizePubchemData(pubchemProfile) {
  if (!pubchemProfile?.compounds?.length) {
    return null;
  }

  const activeCompounds = pubchemProfile.compounds.map((compound) => compound.name).filter(Boolean);
  const compoundSummaries = pubchemProfile.compounds
    .map((compound) => ({
      name: compound.name,
      summary: compound.summary,
      relevance: compound.relevance
    }))
    .filter((item) => item.summary || item.relevance);

  return {
    activeCompounds,
    phytochemicals: activeCompounds,
    compoundDetails: pubchemProfile.compounds.map((compound) => ({
      name: compound.name,
      molecularFormula: compound.molecularFormula,
      molecularWeight: compound.molecularWeight,
      category: compound.category,
      summary: compound.summary,
      iupacName: compound.iupacName,
      cid: compound.cid
    })),
    compoundNames: activeCompounds,
    compoundSummaries,
    chemistryNotes: pubchemProfile.strategy?.usedCuratedFallback
      ? 'Chemistry includes PubChem-supported compound records with curated herb-to-compound mapping fallback.'
      : 'Chemistry includes compounds discoverable through direct PubChem herb-name lookups.',
    chemistrySources: ['PubChem'],
    dataSources: ['PubChem']
  };
}
