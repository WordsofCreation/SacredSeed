import { renderRelatedContentBlock } from '../components/relatedContent.js';
import { getEditorialArticleBySlug } from '../services/editorialArticleService.js';
import { getHerbRelatedContent } from '../services/relatedContentService.js';
import { getMateriaMedicaCollection } from '../services/materiaMedicaIndexService.js';

function toFallbackSections(article) {
  const herbs = getMateriaMedicaCollection();
  const matchingHerbs = herbs.filter((herb) => (article.relatedHerbSlugs ?? []).includes(herb.slug));
  const firstHerb = matchingHerbs[0];

  if (!firstHerb) {
    return [];
  }

  const related = getHerbRelatedContent(firstHerb, 3);

  return [
    { title: 'Relevant herbs', items: matchingHerbs.slice(0, 4).map((herb) => ({ label: herb.commonName, href: `#/herbs/${encodeURIComponent(herb.slug)}`, summary: herb.summary })) },
    { title: 'Related collections', items: related.relatedCollections },
    { title: 'Related preparations', items: related.relatedPreparations }
  ];
}

export function renderEditorialArticlePage(rootElement, slug) {
  const article = getEditorialArticleBySlug(slug);

  if (!article) {
    rootElement.innerHTML = `
      <section class="card error">
        <h2>Editorial article not found</h2>
        <p>The requested educational article is unavailable in the current SacredSeed editorial library.</p>
        <a class="back-link" href="#/search">Back to search</a>
      </section>
    `;
    return null;
  }

  rootElement.innerHTML = `
    <section class="section-shell materia-intro">
      <div class="section-header">
        <p class="eyebrow">Editorial Article</p>
        <h1>${article.title}</h1>
        <p>${article.summary}</p>
      </div>
      <p>${article.body}</p>
      <div class="hero-actions">
        <a class="secondary-link" href="#/search">Knowledge Search</a>
        <a class="secondary-link" href="#/materia-medica">Materia Medica</a>
      </div>
    </section>
    ${renderRelatedContentBlock({
      title: 'Related study connections',
      sections: toFallbackSections(article)
    })}
  `;

  return article;
}
