import { renderPreparationLibrary } from '../components/preparationLibrary.js';
import {
  applyPreparationFilters,
  createDefaultPreparationFilters,
  getFormulaCollection,
  getPreparationGuides,
  getPreparationLibraryTaxonomy,
  getRemedyCollections
} from '../services/preparationLibraryService.js';

function readCheckedValues(rootElement, field) {
  return [...rootElement.querySelectorAll(`input[name="${field}"]:checked`)].map((input) => input.value);
}

export function renderPreparationLibraryPage(rootElement) {
  const allGuides = getPreparationGuides();
  const allFormulas = getFormulaCollection();
  let filters = createDefaultPreparationFilters();

  function paint() {
    const filteredGuides = applyPreparationFilters(allGuides, filters);
    const filteredFormulas = applyPreparationFilters(allFormulas, filters);
    const filteredCollections = getRemedyCollections(filteredFormulas);
    const taxonomy = getPreparationLibraryTaxonomy(allGuides, allFormulas);

    rootElement.innerHTML = renderPreparationLibrary({
      guides: filteredGuides,
      formulas: filteredFormulas,
      collections: filteredCollections,
      taxonomy,
      filters
    });

    const searchInput = rootElement.querySelector('#preparation-search');
    if (searchInput) {
      searchInput.addEventListener('input', (event) => {
        filters = { ...filters, query: event.target.value };
        paint();
      });
    }

    ['preparationTypes', 'formulaCategories', 'preparationTags'].forEach((field) => {
      rootElement.querySelectorAll(`input[name="${field}"]`).forEach((input) => {
        input.addEventListener('change', () => {
          filters = { ...filters, [field]: readCheckedValues(rootElement, field) };
          paint();
        });
      });
    });

    rootElement.querySelectorAll('[data-reset-preparation-filters]').forEach((button) => {
      button.addEventListener('click', () => {
        filters = createDefaultPreparationFilters();
        paint();
      });
    });
  }

  paint();
}
