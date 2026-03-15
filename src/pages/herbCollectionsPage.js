import { renderHerbCollectionsIndex } from '../components/herbCollections.js';
import { getFeaturedCollectionSummaries } from '../services/herbCollectionService.js';

export function renderHerbCollectionsPage(rootElement) {
  const collections = getFeaturedCollectionSummaries();
  rootElement.innerHTML = renderHerbCollectionsIndex(collections);
}
