import { renderHerbProfileCard } from '../components/herbProfileCard.js';
import { getHerbProfile } from '../services/herbProfileService.js';
import { getHerbProfileSeo, getNotFoundSeo } from '../utils/pageSeo.js';
import { applyPageSeo } from '../utils/seo.js';

export async function renderHerbProfilePage(rootElement, slug) {
  rootElement.innerHTML = '<p class="status">Loading herb profile...</p>';

  applyPageSeo({
    title: 'Loading Herb Profile | SacredSeed',
    description: 'Loading SacredSeed herb profile details.',
    pageType: 'article',
    noindex: true,
    canonicalPath: `#/herbs/${encodeURIComponent(slug)}`
  });

  try {
    const { herb, sourceMeta } = await getHerbProfile(slug);
    rootElement.innerHTML = `
      <p><a class="back-link" href="#/materia-medica">← Back to Materia Medica index</a></p>
      ${renderHerbProfileCard(herb, sourceMeta)}
    `;

    applyPageSeo(getHerbProfileSeo(herb));
  } catch (error) {
    rootElement.innerHTML = `
      <p class="error">Unable to load the herb profile at this time. ${error.message}</p>
      <p><a class="back-link" href="#/materia-medica">Return to index</a></p>
    `;

    applyPageSeo({
      ...getNotFoundSeo(),
      title: 'Herb Profile Unavailable | SacredSeed',
      description: 'The requested SacredSeed herb profile is unavailable or does not exist.'
    });
  }
}
