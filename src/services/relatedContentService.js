import { getContentCatalog } from './contentCatalogService.js';

function overlapScore(base = [], candidate = []) {
  const left = new Set((base ?? []).filter(Boolean).map((value) => String(value).toLowerCase()));
  if (!left.size) {
    return 0;
  }

  return (candidate ?? []).filter((value) => left.has(String(value).toLowerCase())).length;
}

function toLink(item, fallbackHref = '#/home') {
  return {
    label: item.title ?? item.commonName ?? 'Untitled',
    href: item.href ?? fallbackHref,
    summary: item.summary ?? item.shortIntro ?? item.preparationDescription ?? item.intro ?? ''
  };
}

function rank(items, scorer, linkMapper = toLink) {
  return items
    .map((item) => ({ ...linkMapper(item), score: scorer(item) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.label.localeCompare(b.label));
}

export function getHerbRelatedContent(herb, limit = 3) {
  const catalog = getContentCatalog();

  const relatedHerbs = rank(
    catalog.herbs.filter((candidate) => candidate.slug !== herb.slug),
    (candidate) => overlapScore(herb.herbalCategories, candidate.herbalCategories) * 3
      + overlapScore(herb.medicinalActions, candidate.medicinalActions) * 2
      + overlapScore(herb.preparations, candidate.preparations),
    (item) => toLink(item, `#/herbs/${encodeURIComponent(item.slug)}`)
  ).slice(0, limit);

  const relatedCollections = rank(catalog.collections, (collection) => {
    const collectionHerbSlugs = collection.herbs.map((entry) => entry.slug);
    return collectionHerbSlugs.includes(herb.slug)
      ? 6
      : overlapScore(herb.herbalCategories, [...(collection.rules?.categoriesAny ?? []), ...(collection.rules?.categoriesAll ?? [])]) * 2;
  }, (item) => toLink(item, `#/collections/${encodeURIComponent(item.slug)}`)).slice(0, limit);

  const relatedPreparations = rank([...catalog.preparationGuides, ...catalog.formulas], (item) => {
    const ingredientSlugs = item.ingredientHerbs.map((ingredient) => ingredient.herbSlug).filter(Boolean);
    return ingredientSlugs.includes(herb.slug) ? 5 : overlapScore(herb.preparations, [item.preparationType]);
  }, (item) => toLink(item, '#/preparations')).slice(0, limit);

  const relatedArticles = rank(catalog.articles, (article) => {
    const direct = (article.relatedHerbSlugs ?? []).includes(herb.slug) ? 5 : 0;
    const category = overlapScore(herb.herbalCategories, article.relatedCategories) * 2;
    return direct + category;
  }, (item) => toLink(item, `#/articles/${encodeURIComponent(item.slug)}`)).slice(0, limit);

  const relatedPathways = rank(catalog.pathways, (pathway) => {
    const pathwayHerbSlugs = pathway.herbs.map((entry) => entry.slug);
    return pathwayHerbSlugs.includes(herb.slug) ? 4 : overlapScore(herb.herbalCategories, pathway.educationalThemes);
  }, (item) => toLink(item, `#/pathways/${encodeURIComponent(item.slug)}`)).slice(0, limit);

  return { relatedHerbs, relatedCollections, relatedPreparations, relatedArticles, relatedPathways };
}

export function getCollectionRelatedContent(collection, limit = 3) {
  const catalog = getContentCatalog();
  const slugs = new Set(collection.herbs.map((herb) => herb.slug));

  const relatedCollections = rank(
    catalog.collections.filter((entry) => entry.slug !== collection.slug),
    (candidate) => {
      const overlap = candidate.herbs.filter((herb) => slugs.has(herb.slug)).length;
      const categoryScore = overlapScore(
        [...(collection.rules?.categoriesAny ?? []), ...(collection.rules?.categoriesAll ?? [])],
        [...(candidate.rules?.categoriesAny ?? []), ...(candidate.rules?.categoriesAll ?? [])]
      );
      return overlap * 2 + categoryScore * 2;
    },
    (item) => toLink(item, `#/collections/${encodeURIComponent(item.slug)}`)
  ).slice(0, limit);

  return { relatedCollections };
}

export function getPathwayRelatedContent(pathway, limit = 3) {
  const catalog = getContentCatalog();
  const herbSlugs = new Set(pathway.herbs.map((herb) => herb.slug));

  const relatedArticles = rank(catalog.articles, (article) => {
    const directOverlap = (article.relatedHerbSlugs ?? []).filter((slug) => herbSlugs.has(slug)).length;
    return directOverlap * 2 + overlapScore(pathway.educationalThemes, article.relatedCategories);
  }, (item) => toLink(item, `#/articles/${encodeURIComponent(item.slug)}`)).slice(0, limit);

  const relatedCollections = rank(catalog.collections, (collection) => {
    const overlap = collection.herbs.filter((herb) => herbSlugs.has(herb.slug)).length;
    return overlap * 2;
  }, (item) => toLink(item, `#/collections/${encodeURIComponent(item.slug)}`)).slice(0, limit);

  const relatedPathways = rank(
    catalog.pathways.filter((entry) => entry.slug !== pathway.slug),
    (candidate) => overlapScore(pathway.herbs.map((herb) => herb.slug), candidate.herbs.map((herb) => herb.slug)) * 2
      + overlapScore(pathway.educationalThemes, candidate.educationalThemes),
    (item) => toLink(item, `#/pathways/${encodeURIComponent(item.slug)}`)
  ).slice(0, limit);

  return { relatedArticles, relatedCollections, relatedPathways };
}
