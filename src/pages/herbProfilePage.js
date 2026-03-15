import { renderHerbProfileCard } from '../components/herbProfileCard.js';
import { getHerbProfile } from '../services/herbProfileService.js';

export async function renderHerbProfilePage(rootElement, slug) {
  rootElement.innerHTML = '<p class="status">Loading herb profile...</p>';

  try {
    const { herb, sourceMeta } = await getHerbProfile(slug);
    rootElement.innerHTML = `
      <p><a class="back-link" href="#/materia-medica">← Back to Materia Medica index</a></p>
      ${renderHerbProfileCard(herb, sourceMeta)}
    `;
  } catch (error) {
    rootElement.innerHTML = `
      <p class="error">Unable to load the herb profile at this time. ${error.message}</p>
      <p><a class="back-link" href="#/materia-medica">Return to index</a></p>
    `;
  }
}
