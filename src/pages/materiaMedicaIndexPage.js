import { renderMateriaMedicaIndex } from '../components/materiaMedicaIndex.js';
import {
  applyMateriaMedicaFilters,
  createDefaultMateriaFilters,
  getMateriaMedicaCollection,
  getMateriaMedicaTaxonomy
} from '../services/materiaMedicaIndexService.js';
import { fetchTaxonByBotanicalName } from '../services/apis/inaturalistApi.js';


const materiaImageCache = new Map();

async function hydrateMateriaMedicaImages(rootElement) {
  const imageNodes = Array.from(rootElement.querySelectorAll('[data-materia-botanical]'));

  await Promise.all(
    imageNodes.map(async (imageNode) => {
      const botanicalName = imageNode.dataset.materiaBotanical;
      if (!botanicalName) {
        return;
      }

      const cachedImage = materiaImageCache.get(botanicalName);
      if (cachedImage === null) {
        return;
      }

      if (typeof cachedImage === 'string' && cachedImage) {
        imageNode.src = cachedImage;
        return;
      }

      try {
        const taxon = await fetchTaxonByBotanicalName(botanicalName);
        const apiImage = taxon?.default_photo?.medium_url?.trim?.() || '';

        if (!apiImage) {
          materiaImageCache.set(botanicalName, null);
          return;
        }

        materiaImageCache.set(botanicalName, apiImage);
        imageNode.src = apiImage;
      } catch {
        materiaImageCache.set(botanicalName, null);
      }
    })
  );
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
