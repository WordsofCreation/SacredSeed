import { renderLearningPathwayDetail } from '../components/learningPathways.js';
import { getLearningPathwayBySlug } from '../services/learningPathwayService.js';

export function renderLearningPathwayPage(rootElement, slug) {
  const pathway = getLearningPathwayBySlug(slug);

  if (!pathway) {
    rootElement.innerHTML = `
      <section class="card error">
        <h2>Learning pathway not found</h2>
        <p>The requested beginner pathway is not available in the current SacredSeed guide set.</p>
        <a class="back-link" href="#/pathways">Back to learning pathways</a>
      </section>
    `;
    return null;
  }

  rootElement.innerHTML = renderLearningPathwayDetail(pathway);
  return pathway;
}
