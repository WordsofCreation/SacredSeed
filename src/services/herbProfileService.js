import { herbFallbacks } from '../data/herbFallbacks.js';
import { fetchTaxonByBotanicalName } from './apis/inaturalistApi.js';
import { fetchGbifProfileByBotanicalName } from './gbifService.js';
import { mergeHerbData } from './herbMerge.js';
import {
  normalizeGbifData,
  normalizeInaturalistTaxon,
  normalizePubchemData
} from './herbNormalizer.js';
import { fetchPubchemProfileForHerb } from './pubchemService.js';
import { getNormalizedMedicinalProfile } from './medicinalProfileService.js';

/**
 * Source registry for phase 2.
 *
 * Existing primary source remains iNaturalist; GBIF is layered in as secondary enrichment.
 * Future source connection points:
 * - MedicinalActionService: evidence-graded actions/mechanisms
 * - SafetyTaxonomyService: interactions, contraindications, and dosing cautions
 */
export async function getHerbProfile(slug) {
  const fallback = herbFallbacks[slug];
  if (!fallback) {
    throw new Error(`Unknown herb slug: ${slug}`);
  }

  const [inaturalistResult, gbifResult, pubchemResult] = await Promise.allSettled([
    fetchTaxonByBotanicalName(fallback.botanicalName),
    fetchGbifProfileByBotanicalName(fallback.botanicalName),
    fetchPubchemProfileForHerb({
      slug,
      botanicalName: fallback.botanicalName,
      commonName: fallback.commonName
    })
  ]);

  const inaturalistTaxon = inaturalistResult.status === 'fulfilled' ? inaturalistResult.value : null;
  const gbifProfile = gbifResult.status === 'fulfilled' ? gbifResult.value : null;
  const pubchemProfile = pubchemResult.status === 'fulfilled' ? pubchemResult.value : null;

  const baseHerb = normalizeInaturalistTaxon(inaturalistTaxon, fallback);
  const gbifHerb = normalizeGbifData(gbifProfile?.speciesMatch, gbifProfile?.occurrenceSummary);
  const pubchemHerb = normalizePubchemData(pubchemProfile);
  const medicinalHerb = getNormalizedMedicinalProfile(slug);
  const herb = mergeHerbData(baseHerb, gbifHerb, pubchemHerb, medicinalHerb);

  if (inaturalistTaxon) {
    herb.dataSources = [...new Set([...(herb.dataSources ?? []), 'iNaturalist'])];
  } else if (!herb.dataSources?.length) {
    herb.dataSources = ['Fallback dataset'];
  }

  return {
    herb,
    sourceMeta: {
      usedApi: Boolean(inaturalistTaxon || gbifProfile?.available || pubchemProfile?.available),
      source: inaturalistTaxon && gbifProfile?.available
        ? 'iNaturalist + GBIF + PubChem (with curated fallback support)'
        : inaturalistTaxon
          ? 'iNaturalist + PubChem (with curated fallback support)'
          : gbifProfile?.available
            ? 'GBIF + PubChem (with curated fallback support)'
            : pubchemProfile?.available
              ? 'PubChem (with curated fallback support)'
              : 'Fallback dataset',
      gbif: {
        available: Boolean(gbifProfile?.available),
        note: gbifProfile?.error ?? null
      },
      pubchem: {
        available: Boolean(pubchemProfile?.available),
        note: pubchemProfile?.error ?? null,
        usedCuratedFallback: Boolean(pubchemProfile?.strategy?.usedCuratedFallback)
      }
    }
  };
}
