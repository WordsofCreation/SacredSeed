import { renderHerbProfileCard } from '../components/herbProfileCard.js';
import { getHerbProfile } from '../services/herbProfileService.js';

export async function renderStingingNettlePage(rootElement) {
  rootElement.innerHTML = '<p class="status">Loading monograph for Stinging Nettle...</p>';

  try {
    const { herb, sourceMeta } = await getHerbProfile('urtica-dioica');
    rootElement.innerHTML = renderHerbProfileCard(herb, sourceMeta);
  } catch (error) {
    rootElement.innerHTML = `<p class="error">Unable to load the herb profile at this time. ${error.message}</p>`;
  }
}
