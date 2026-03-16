import { renderEditorialArticlesIndex } from '../components/editorialArticles.js';
import {
  getEditorialArticleSummaries,
  getEditorialStartHereLinks,
  getStartHereArticle
} from '../services/editorialArticleService.js';

export function renderEditorialArticlesPage(rootElement) {
  const articles = getEditorialArticleSummaries();
  const startHereArticle = getStartHereArticle();
  const startHereLinks = getEditorialStartHereLinks();
  rootElement.innerHTML = renderEditorialArticlesIndex(articles, startHereArticle, startHereLinks);
}
