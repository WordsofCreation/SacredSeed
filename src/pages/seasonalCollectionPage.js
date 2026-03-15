import { renderSeasonalCollectionDetail } from '../components/seasonalCollections.js';
import { getSeasonalCollectionBySlug } from '../services/seasonalCollectionService.js';

export function renderSeasonalCollectionPage(rootElement, slug) {
  const collection = getSeasonalCollectionBySlug(slug);

  if (!collection) {
    rootElement.innerHTML = `
      <section class="card error">
        <h2>Seasonal collection not found</h2>
        <p>The requested seasonal guide is not available in the current SacredSeed collection library.</p>
        <a class="back-link" href="#/seasons">Back to seasonal collections</a>
      </section>
    `;
    return null;
  }

  rootElement.innerHTML = renderSeasonalCollectionDetail(collection);
  return collection;
}
