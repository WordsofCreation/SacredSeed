import { editorialArticleDefinitions } from '../data/editorialArticles.js';

function normalizeList(values) {
  return (values ?? []).filter(Boolean);
}

export function getEditorialArticles() {
  return editorialArticleDefinitions.map((article) => ({
    ...article,
    type: 'article',
    searchKeywords: normalizeList(article.searchKeywords),
    relatedHerbSlugs: normalizeList(article.relatedHerbSlugs),
    relatedCollectionSlugs: normalizeList(article.relatedCollectionSlugs),
    relatedPreparationIds: normalizeList(article.relatedPreparationIds),
    relatedPathwaySlugs: normalizeList(article.relatedPathwaySlugs),
    relatedCategories: normalizeList(article.relatedCategories),
    relatedTags: normalizeList(article.relatedTags)
  }));
}

export function getEditorialArticleBySlug(slug) {
  return getEditorialArticles().find((article) => article.slug === slug) ?? null;
}
