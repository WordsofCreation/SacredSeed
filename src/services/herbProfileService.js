import { herbFallbacks } from '../data/herbFallbacks.js';
import { normalizeInaturalistTaxon } from './herbNormalizer.js';
import { fetchTaxonByBotanicalName } from './apis/inaturalistApi.js';

/**
 * Source registry for phase 1.
 *
 * Phase 2: expand this orchestration layer to combine additional services:
 * - GBIFService
 * - PubChemService
 * - PlantNetService
 * - MedicinalActionsService
 * - RegionalMateriaMedicaService
 */
export async function getHerbProfile(slug) {
  const fallback = herbFallbacks[slug];
  if (!fallback) {
    throw new Error(`Unknown herb slug: ${slug}`);
  }

  try {
    const taxon = await fetchTaxonByBotanicalName(fallback.botanicalName);

    return {
      herb: normalizeInaturalistTaxon(taxon, fallback),
      sourceMeta: {
        usedApi: Boolean(taxon),
        source: taxon ? 'iNaturalist' : 'Fallback dataset'
      }
    };
  } catch {
    return {
      herb: normalizeInaturalistTaxon(null, fallback),
      sourceMeta: {
        usedApi: false,
        source: 'Fallback dataset'
      }
    };
  }
}
