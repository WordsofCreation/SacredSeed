import { renderSeasonalCollectionsIndex } from '../components/seasonalCollections.js';
import { getSeasonalCollectionSummaries } from '../services/seasonalCollectionService.js';

export function renderSeasonalCollectionsPage(rootElement) {
  const collections = getSeasonalCollectionSummaries();
  rootElement.innerHTML = renderSeasonalCollectionsIndex(collections);
}
