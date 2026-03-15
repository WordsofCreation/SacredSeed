import { getMateriaMedicaCollection } from './materiaMedicaIndexService.js';
import { getHerbCollections } from './herbCollectionService.js';
import { getLearningPathways } from './learningPathwayService.js';
import { getFormulaCollection, getPreparationGuides, getRemedyCollections } from './preparationLibraryService.js';
import { getEditorialArticles } from './editorialArticleService.js';
import { getRegionalGuides } from './regionalGuideService.js';

function normalizeList(values) {
  return (values ?? []).filter(Boolean);
}

function dedupe(values) {
  return [...new Set(values.filter(Boolean))];
}

export function getContentCatalog() {
  const herbs = getMateriaMedicaCollection();
  const collections = getHerbCollections();
  const pathways = getLearningPathways();
  const guides = getPreparationGuides();
  const formulas = getFormulaCollection();
  const remedyCollections = getRemedyCollections(formulas);
  const articles = getEditorialArticles();
  const regionalGuides = getRegionalGuides();

  return {
    herbs,
    collections,
    pathways,
    preparationGuides: guides,
    formulas,
    remedyCollections,
    articles,
    regionalGuides
  };
}

/**
 * Unified search records used by site-wide discovery.
 *
 * To add a new content type, append a new mapping here with:
 * - unique `id`
 * - `contentType`
 * - `title`, `summary`, and metadata arrays (`categories`, `regions`, `tags`, etc.)
 */
export function getUnifiedSearchRecords() {
  const catalog = getContentCatalog();

  const herbRecords = catalog.herbs.map((herb) => ({
    id: `herb:${herb.slug}`,
    slug: herb.slug,
    href: `#/herbs/${encodeURIComponent(herb.slug)}`,
    contentType: 'herb',
    title: herb.commonName,
    subtitle: herb.botanicalName,
    summary: herb.summary,
    categories: normalizeList(herb.herbalCategories),
    regions: normalizeList(herb.regionTags),
    preparationTypes: normalizeList(herb.preparations),
    tags: dedupe([...normalizeList(herb.medicinalActions), ...normalizeList(herb.bodySystems)]),
    keywords: dedupe([
      herb.commonName,
      herb.botanicalName,
      ...normalizeList(herb.synonyms),
      ...normalizeList(herb.medicinalActions),
      ...normalizeList(herb.herbalCategories)
    ])
  }));

  const collectionRecords = catalog.collections.map((collection) => ({
    id: `collection:${collection.slug}`,
    slug: collection.slug,
    href: `#/collections/${encodeURIComponent(collection.slug)}`,
    contentType: 'collection',
    title: collection.title,
    summary: collection.shortIntro,
    categories: normalizeList(collection.rules?.categoriesAny),
    regions: normalizeList(collection.rules?.regionsAny),
    preparationTypes: [],
    tags: dedupe([...normalizeList(collection.contextTags), ...normalizeList(collection.rules?.categoriesAll)]),
    keywords: dedupe([
      collection.title,
      collection.shortIntro,
      ...normalizeList(collection.contextTags)
    ])
  }));

  const regionalGuideRecords = catalog.regionalGuides.map((guide) => ({
    id: `regionalGuide:${guide.slug}`,
    slug: guide.slug,
    href: '#/collections/pacific-northwest-tea-herbs',
    contentType: 'regionalGuide',
    title: guide.title,
    summary: guide.summary,
    categories: normalizeList(guide.focusAreas),
    regions: [guide.region],
    preparationTypes: [],
    tags: normalizeList(guide.relatedTags),
    keywords: dedupe([guide.title, guide.summary, ...guide.searchKeywords])
  }));

  const guideRecords = catalog.preparationGuides.map((guide) => ({
    id: `preparation:${guide.id}`,
    slug: guide.id,
    href: '#/preparations',
    contentType: 'preparation',
    title: guide.title,
    summary: guide.preparationDescription,
    categories: [],
    regions: [],
    preparationTypes: [guide.preparationType],
    tags: normalizeList(guide.preparationTags),
    keywords: dedupe([
      guide.title,
      guide.preparationType,
      ...normalizeList(guide.preparationTags),
      ...guide.ingredientHerbs.flatMap((ingredient) => [ingredient.commonName, ingredient.botanicalName])
    ])
  }));

  const formulaRecords = catalog.formulas.map((formula) => ({
    id: `formula:${formula.id}`,
    slug: formula.id,
    href: '#/preparations',
    contentType: 'formula',
    title: formula.title,
    summary: formula.preparationDescription,
    categories: formula.formulaCategory ? [formula.formulaCategory] : [],
    regions: [],
    preparationTypes: [formula.preparationType],
    tags: normalizeList(formula.preparationTags),
    keywords: dedupe([
      formula.title,
      formula.preparationType,
      formula.formulaCategory,
      ...normalizeList(formula.preparationTags),
      ...formula.ingredientHerbs.flatMap((ingredient) => [ingredient.commonName, ingredient.botanicalName])
    ])
  }));

  const pathwayRecords = catalog.pathways.map((pathway) => ({
    id: `pathway:${pathway.slug}`,
    slug: pathway.slug,
    href: `#/pathways/${encodeURIComponent(pathway.slug)}`,
    contentType: 'pathway',
    title: pathway.title,
    summary: pathway.intro,
    categories: normalizeList(pathway.educationalThemes),
    regions: [],
    preparationTypes: [],
    tags: dedupe([pathway.difficulty, pathway.estimatedDuration]),
    keywords: dedupe([pathway.title, pathway.intro, pathway.educationalGoal])
  }));

  const articleRecords = catalog.articles.map((article) => ({
    id: `article:${article.slug}`,
    slug: article.slug,
    href: `#/articles/${encodeURIComponent(article.slug)}`,
    contentType: 'article',
    title: article.title,
    summary: article.summary,
    categories: normalizeList(article.relatedCategories),
    regions: [],
    preparationTypes: [],
    tags: normalizeList(article.relatedTags),
    keywords: dedupe([article.title, article.summary, ...article.searchKeywords])
  }));

  return [
    ...herbRecords,
    ...collectionRecords,
    ...regionalGuideRecords,
    ...guideRecords,
    ...formulaRecords,
    ...pathwayRecords,
    ...articleRecords
  ];
}
