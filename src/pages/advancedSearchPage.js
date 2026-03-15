import { renderAdvancedSearch } from '../components/advancedSearch.js';
import { createDefaultSearchFilters, runSiteSearch } from '../services/siteSearchService.js';

export function renderAdvancedSearchPage(rootElement) {
  let filters = createDefaultSearchFilters();

  function paint() {
    const searchOutcome = runSiteSearch(filters);
    rootElement.innerHTML = renderAdvancedSearch({ filters, searchOutcome });

    rootElement.querySelector('#site-search-query')?.addEventListener('input', (event) => {
      filters = { ...filters, query: event.target.value };
      paint();
    });

    rootElement.querySelector('#site-search-type')?.addEventListener('change', (event) => {
      filters = { ...filters, contentType: event.target.value };
      paint();
    });

    rootElement.querySelector('[data-reset-site-search]')?.addEventListener('click', () => {
      filters = createDefaultSearchFilters();
      paint();
    });
  }

  paint();
}
