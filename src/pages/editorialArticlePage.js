import { renderEditorialArticleDetail } from '../components/editorialArticles.js';
import { getEditorialArticleBySlug } from '../services/editorialArticleService.js';

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

  rootElement.innerHTML = renderEditorialArticleDetail(article);

  return article;
}
