import { renderHerbCollectionDetail } from '../components/herbCollections.js';
import { getHerbCollectionBySlug } from '../services/herbCollectionService.js';
import { getCollectionRelatedContent } from '../services/relatedContentService.js';

export function renderHerbCollectionPage(rootElement, slug) {
  const collection = getHerbCollectionBySlug(slug);

  if (!collection) {
    rootElement.innerHTML = `
      <section class="card error">
        <h2>Collection not found</h2>
        <p>The requested collection could not be located in the current SacredSeed guide set.</p>
        <a class="back-link" href="#/collections">Back to collections</a>
      </section>
    `;
    return null;
  }

  const related = getCollectionRelatedContent(collection);
  rootElement.innerHTML = renderHerbCollectionDetail(collection, related);
  return collection;
}
