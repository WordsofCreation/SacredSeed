import { renderMateriaMedicaIndex } from '../components/materiaMedicaIndex.js';
import {
  applyMateriaMedicaFilters,
  createDefaultMateriaFilters,
  getMateriaMedicaCollection,
  getMateriaMedicaTaxonomy
} from '../services/materiaMedicaIndexService.js';
import { fetchTaxonByBotanicalName } from '../services/apis/inaturalistApi.js';

const materiaImageCache = new Map();
const materiaImageRequests = new Map();
const MAX_IMAGE_LOOKUPS_PER_PAINT = 24;
const IMAGE_LOOKUP_CONCURRENCY = 4;

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function fetchMateriaImage(botanicalName, { retries = 2 } = {}) {
  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      const taxon = await fetchTaxonByBotanicalName(botanicalName);
      return taxon?.default_photo?.medium_url?.trim?.() || '';
    } catch (error) {
      const status = Number(error?.status || 0);
      const isLastAttempt = attempt >= retries;
      const isRetryable = status === 429 || status >= 500 || !status;

      if (!isRetryable || isLastAttempt) {
        return '';
      }

      await delay(300 * (attempt + 1));
    }
  }

  return '';
}

async function resolveMateriaImage(botanicalName) {
  const cachedImage = materiaImageCache.get(botanicalName);
  if (typeof cachedImage === 'string') {
    return cachedImage;
  }

  if (materiaImageRequests.has(botanicalName)) {
    return materiaImageRequests.get(botanicalName);
  }

  const request = fetchMateriaImage(botanicalName)
    .then((imageUrl) => {
      materiaImageCache.set(botanicalName, imageUrl);
      return imageUrl;
    })
    .finally(() => {
      materiaImageRequests.delete(botanicalName);
    });

  materiaImageRequests.set(botanicalName, request);
  return request;
}

async function hydrateMateriaMedicaImages(rootElement) {
  const imageNodes = Array.from(rootElement.querySelectorAll('[data-materia-botanical]'));
  const nodesToHydrate = imageNodes.slice(0, MAX_IMAGE_LOOKUPS_PER_PAINT);

  let cursor = 0;

  async function worker() {
    while (cursor < nodesToHydrate.length) {
      const index = cursor;
      cursor += 1;

      const imageNode = nodesToHydrate[index];
      const botanicalName = imageNode?.dataset?.materiaBotanical;
      if (!botanicalName) {
        continue;
      }

      const imageUrl = await resolveMateriaImage(botanicalName);
      if (imageUrl && imageNode.isConnected) {
        imageNode.src = imageUrl;
      }
    }
  }

  await Promise.all(Array.from({ length: IMAGE_LOOKUP_CONCURRENCY }, () => worker()));
}

function readCheckedValues(rootElement, field) {
  return [...rootElement.querySelectorAll(`input[name="${field}"]:checked`)].map((input) => input.value);
}

export function renderMateriaMedicaIndexPage(rootElement) {
  const allHerbs = getMateriaMedicaCollection();
  const taxonomy = getMateriaMedicaTaxonomy(allHerbs);
  let filters = createDefaultMateriaFilters();

  function paint() {
    const results = applyMateriaMedicaFilters(allHerbs, filters);
    rootElement.innerHTML = renderMateriaMedicaIndex({ herbs: results, taxonomy, filters });

    const searchInput = rootElement.querySelector('#herb-search');
    if (searchInput) {
      searchInput.addEventListener('input', (event) => {
        filters = { ...filters, query: event.target.value };
        paint();
      });
    }

    ['herbNames', 'medicinalActions', 'bodySystems', 'preparations', 'herbalCategories', 'safetyCategories'].forEach((field) => {
      rootElement.querySelectorAll(`input[name="${field}"]`).forEach((input) => {
        input.addEventListener('change', () => {
          filters = { ...filters, [field]: readCheckedValues(rootElement, field) };
          paint();
        });
      });
    });

    rootElement.querySelectorAll('[data-reset-filters]').forEach((button) => {
      button.addEventListener('click', () => {
        filters = createDefaultMateriaFilters();
        paint();
      });
    });

    hydrateMateriaMedicaImages(rootElement);
  }

  paint();
}
