import { renderHerbProfileCard } from '../components/herbProfileCard.js';
import { renderRelatedContentBlock } from '../components/relatedContent.js';
import { getHerbProfile } from '../services/herbProfileService.js';
import { getHerbRelatedContent } from '../services/relatedContentService.js';
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
    const related = getHerbRelatedContent(herb, 3);

    rootElement.innerHTML = `
      <p><a class="back-link" href="#/materia-medica">← Back to Materia Medica index</a></p>
      ${renderHerbProfileCard(herb, sourceMeta)}
      ${renderRelatedContentBlock({
        title: 'Related herbal knowledge',
        sections: [
          { title: 'Related herbs', items: related.relatedHerbs },
          { title: 'Related collections', items: related.relatedCollections },
          { title: 'Related preparations', items: related.relatedPreparations },
          { title: 'Related articles', items: related.relatedArticles },
          { title: 'Beginner pathways', items: related.relatedPathways }
        ]
      })}
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
