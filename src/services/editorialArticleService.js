import { editorialArticleDefinitions } from '../data/editorialArticles.js';
import { getMateriaMedicaCollection } from './materiaMedicaIndexService.js';
import { getSeasonalCollectionSummaries } from './seasonalCollectionService.js';

function resolveRelatedHerbs(herbSlugs = [], herbsBySlug) {
  return herbSlugs
    .map((slug) => herbsBySlug.get(slug))
    .filter(Boolean)
    .map((herb) => ({
      slug: herb.slug,
      commonName: herb.commonName,
      botanicalName: herb.botanicalName,
      href: `#/herbs/${encodeURIComponent(herb.slug)}`
    }));
}

function resolveRelatedSeasonalCollections(slugs = [], collectionBySlug) {
  return slugs
    .map((slug) => collectionBySlug.get(slug))
    .filter(Boolean)
    .map((collection) => ({
      slug: collection.slug,
      title: collection.title,
      season: collection.season,
      href: `#/seasons/${encodeURIComponent(collection.slug)}`
    }));
}

function normalizeArticle(article, context) {
  return {
    ...article,
    tags: article.tags ?? [],
    sections: article.sections ?? [],
    relatedRoutes: article.relatedRoutes ?? [],
    relatedHerbs: resolveRelatedHerbs(article.relatedHerbSlugs, context.herbsBySlug),
    relatedSeasonalCollections: resolveRelatedSeasonalCollections(
      article.relatedSeasonalCollectionSlugs,
      context.seasonalCollectionsBySlug
    )
  };
}

function toSummary(article) {
  return {
    slug: article.slug,
    title: article.title,
    summary: article.summary,
    intro: article.intro,
    estimatedReadMinutes: article.estimatedReadMinutes,
    tags: article.tags,
    relatedHerbs: article.relatedHerbs.slice(0, 2)
  };
}

function buildContext() {
  const herbs = getMateriaMedicaCollection();
  const seasonal = getSeasonalCollectionSummaries();

  return {
    herbsBySlug: new Map(herbs.map((herb) => [herb.slug, herb])),
    seasonalCollectionsBySlug: new Map(seasonal.map((item) => [item.slug, item]))
  };
}

export function getEditorialArticles() {
  const context = buildContext();

  return editorialArticleDefinitions.map((article) => normalizeArticle(article, context));
}

export function getEditorialArticleSummaries() {
  return getEditorialArticles().map(toSummary);
}

export function getEditorialArticleBySlug(slug) {
  return getEditorialArticles().find((article) => article.slug === slug) ?? null;
}

export function getStartHereArticle() {
  return getEditorialArticles().find((article) => article.slug === 'what-is-herbalism') ?? null;
}

export function getEditorialStartHereLinks() {
  const preferredOrder = [
    'what-is-herbalism',
    'how-to-start-learning-herbs-without-getting-overwhelmed'
  ];
  const bySlug = new Map(getEditorialArticles().map((article) => [article.slug, article]));

  return preferredOrder
    .map((slug) => bySlug.get(slug))
    .filter(Boolean)
    .map((article) => ({ slug: article.slug, title: article.title }));
}
