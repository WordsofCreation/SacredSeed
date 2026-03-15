import { renderMateriaMedicaIndex } from '../components/materiaMedicaIndex.js';
import {
  applyMateriaMedicaFilters,
  createDefaultMateriaFilters,
  getMateriaMedicaCollection,
  getMateriaMedicaTaxonomy
} from '../services/materiaMedicaIndexService.js';

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
  }

  paint();
}
