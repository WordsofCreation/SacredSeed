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

const PROFILE_CACHE_TTL_MS = 1000 * 60 * 30;
const SOURCE_TIMEOUT_MS = 3500;
const MEMORY_PROFILE_CACHE = new Map();

function getCacheKey(slug) {
  return `sacredseed.herbProfile.${slug}`;
}

function readBrowserCache(slug) {
  if (typeof window === 'undefined' || !window.localStorage) {
    return null;
  }

  try {
    const rawValue = window.localStorage.getItem(getCacheKey(slug));
    if (!rawValue) {
      return null;
    }

    const parsed = JSON.parse(rawValue);
    if (Date.now() - parsed.cachedAt > PROFILE_CACHE_TTL_MS) {
      window.localStorage.removeItem(getCacheKey(slug));
      return null;
    }

    return parsed.data;
  } catch {
    return null;
  }
}

function writeBrowserCache(slug, data) {
  if (typeof window === 'undefined' || !window.localStorage) {
    return;
  }

  try {
    window.localStorage.setItem(
      getCacheKey(slug),
      JSON.stringify({ cachedAt: Date.now(), data })
    );
  } catch {
    // Ignore storage write failures (private mode, quota, etc.).
  }
}

function readMemoryCache(slug) {
  const cached = MEMORY_PROFILE_CACHE.get(slug);
  if (!cached) {
    return null;
  }

  if (Date.now() - cached.cachedAt > PROFILE_CACHE_TTL_MS) {
    MEMORY_PROFILE_CACHE.delete(slug);
    return null;
  }

  return cached.data;
}

function writeMemoryCache(slug, data) {
  MEMORY_PROFILE_CACHE.set(slug, {
    cachedAt: Date.now(),
    data
  });
}

function withTimeout(promise, label) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(`${label} timed out after ${SOURCE_TIMEOUT_MS}ms`));
    }, SOURCE_TIMEOUT_MS);
  });

  return Promise.race([promise, timeoutPromise]);
}

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

  const memoryCached = readMemoryCache(slug);
  if (memoryCached) {
    return memoryCached;
  }

  const browserCached = readBrowserCache(slug);
  if (browserCached) {
    writeMemoryCache(slug, browserCached);
    return browserCached;
  }

  const [inaturalistResult, gbifResult, pubchemResult] = await Promise.allSettled([
    withTimeout(fetchTaxonByBotanicalName(fallback.botanicalName), 'iNaturalist'),
    withTimeout(fetchGbifProfileByBotanicalName(fallback.botanicalName), 'GBIF'),
    withTimeout(
      fetchPubchemProfileForHerb({
        slug,
        botanicalName: fallback.botanicalName,
        commonName: fallback.commonName
      }),
      'PubChem'
    )
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

  const response = {
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

  writeMemoryCache(slug, response);
  writeBrowserCache(slug, response);

  return response;
}
