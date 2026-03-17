import { fetchTaxonByBotanicalName } from './apis/inaturalistApi.js';
import { fetchWikipediaPageSummary } from './apis/wikipediaApi.js';

const herbImageCache = new Map();
const pendingImageRequests = new Map();

function normalizeBotanicalName(botanicalName) {
  return String(botanicalName ?? '').trim();
}

async function fetchFromINaturalist(botanicalName) {
  const taxon = await fetchTaxonByBotanicalName(botanicalName);
  return taxon?.default_photo?.medium_url?.trim?.() || '';
}

async function fetchFromWikipedia(botanicalName) {
  const summary = await fetchWikipediaPageSummary(botanicalName);
  return summary?.thumbnail?.source?.trim?.() || '';
}

export async function fetchHerbImageByBotanicalName(botanicalName) {
  const normalizedName = normalizeBotanicalName(botanicalName);
  if (!normalizedName) {
    return '';
  }

  const cached = herbImageCache.get(normalizedName);
  if (cached) {
    return cached;
  }

  const pending = pendingImageRequests.get(normalizedName);
  if (pending) {
    return pending;
  }

  const request = (async () => {
    try {
      const inaturalistImage = await fetchFromINaturalist(normalizedName);
      if (inaturalistImage) {
        herbImageCache.set(normalizedName, inaturalistImage);
        return inaturalistImage;
      }
    } catch {
      // fall through to secondary source
    }

    try {
      const wikipediaImage = await fetchFromWikipedia(normalizedName);
      if (wikipediaImage) {
        herbImageCache.set(normalizedName, wikipediaImage);
        return wikipediaImage;
      }
    } catch {
      // ignore source errors and keep local placeholder
    }

    return '';
  })();

  pendingImageRequests.set(normalizedName, request);

  const resolvedImage = await request;
  pendingImageRequests.delete(normalizedName);
  return resolvedImage;
}
