import { renderEditorialArticlesIndex } from '../components/editorialArticles.js';
import { getEditorialArticleSummaries, getStartHereArticle } from '../services/editorialArticleService.js';

export function renderEditorialArticlesPage(rootElement) {
  const articles = getEditorialArticleSummaries();
  const startHereArticle = getStartHereArticle();
  rootElement.innerHTML = renderEditorialArticlesIndex(articles, startHereArticle);
}
