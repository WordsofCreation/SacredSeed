import { renderMateriaMedicaIndex } from '../components/materiaMedicaIndex.js';
import {
  applyMateriaMedicaFilters,
  createDefaultMateriaFilters,
  getMateriaMedicaCollection,
  getMateriaMedicaTaxonomy
} from '../services/materiaMedicaIndexService.js';
import { fetchHerbImageByBotanicalName } from '../services/herbImageService.js';


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
      if (typeof cachedImage === 'string' && cachedImage) {
        imageNode.src = cachedImage;
        return;
      }

      try {
        const image = await fetchHerbImageByBotanicalName(botanicalName);

        if (!image) {
          return;
        }

        materiaImageCache.set(botanicalName, image);
        imageNode.src = image;
      } catch {
        // keep fallback placeholder for this render
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
