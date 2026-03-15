import { herbFallbacks } from '../data/herbFallbacks.js';
import { fetchTaxonByBotanicalName } from './apis/inaturalistApi.js';
import { fetchGbifProfileByBotanicalName } from './gbifService.js';
import { mergeHerbData } from './herbMerge.js';
import { normalizeGbifData, normalizeInaturalistTaxon } from './herbNormalizer.js';

/**
 * Source registry for phase 2.
 *
 * Existing primary source remains iNaturalist; GBIF is layered in as secondary enrichment.
 * Future source connection points:
 * - PubChemService: molecular constituents + phytochemistry
 * - PlantNetService: visual recognition confidence + image metadata
 */
export async function getHerbProfile(slug) {
  const fallback = herbFallbacks[slug];
  if (!fallback) {
    throw new Error(`Unknown herb slug: ${slug}`);
  }

  const [inaturalistResult, gbifResult] = await Promise.allSettled([
    fetchTaxonByBotanicalName(fallback.botanicalName),
    fetchGbifProfileByBotanicalName(fallback.botanicalName)
  ]);

  const inaturalistTaxon = inaturalistResult.status === 'fulfilled' ? inaturalistResult.value : null;
  const gbifProfile = gbifResult.status === 'fulfilled' ? gbifResult.value : null;

  const baseHerb = normalizeInaturalistTaxon(inaturalistTaxon, fallback);
  const gbifHerb = normalizeGbifData(gbifProfile?.speciesMatch, gbifProfile?.occurrenceSummary);
  const herb = mergeHerbData(baseHerb, gbifHerb);

  if (inaturalistTaxon) {
    herb.dataSources = [...new Set([...(herb.dataSources ?? []), 'iNaturalist'])];
  } else if (!herb.dataSources?.length) {
    herb.dataSources = ['Fallback dataset'];
  }

  return {
    herb,
    sourceMeta: {
      usedApi: Boolean(inaturalistTaxon || gbifProfile?.available),
      source: inaturalistTaxon && gbifProfile?.available
        ? 'iNaturalist + GBIF (with curated fallback support)'
        : inaturalistTaxon
          ? 'iNaturalist (with curated fallback support)'
          : gbifProfile?.available
            ? 'GBIF (with curated fallback support)'
            : 'Fallback dataset',
      gbif: {
        available: Boolean(gbifProfile?.available),
        note: gbifProfile?.error ?? null
      }
    }
  };
}
