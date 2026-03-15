import { renderLearningPathwaysIndex } from '../components/learningPathways.js';
import { getLearningPathwaySummaries } from '../services/learningPathwayService.js';

export function renderLearningPathwaysPage(rootElement) {
  const pathways = getLearningPathwaySummaries();
  rootElement.innerHTML = renderLearningPathwaysIndex(pathways);
}
