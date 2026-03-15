import { herbCollectionDefinitions } from '../data/herbCollections.js';
import { getMateriaMedicaCollection } from './materiaMedicaIndexService.js';
import { normalizeTaxonomyList } from '../utils/herbTaxonomy.js';

function toSet(values) {
  return new Set(normalizeTaxonomyList(values));
}

function byName(left, right) {
  return left.commonName.localeCompare(right.commonName);
}

function includesAll(baseSet, values) {
  return values.every((value) => baseSet.has(value));
}

function includesAny(baseSet, values) {
  return !values.length || values.some((value) => baseSet.has(value));
}

function matchesCollectionRules(herb, rules = {}) {
  const herbCategories = toSet(herb.herbalCategories);
  const herbRegions = toSet(herb.regionTags);

  const categoriesAll = normalizeTaxonomyList(rules.categoriesAll);
  const categoriesAny = normalizeTaxonomyList(rules.categoriesAny);
  const regionsAll = normalizeTaxonomyList(rules.regionsAll);
  const regionsAny = normalizeTaxonomyList(rules.regionsAny);

  const categoriesAllMatch = includesAll(herbCategories, categoriesAll);
  const categoriesAnyMatch = includesAny(herbCategories, categoriesAny);
  const regionsAllMatch = includesAll(herbRegions, regionsAll);
  const regionsAnyMatch = includesAny(herbRegions, regionsAny);

  return categoriesAllMatch && categoriesAnyMatch && regionsAllMatch && regionsAnyMatch;
}

function pickCollectionHerbs(allHerbs, definition) {
  const bySlug = Object.fromEntries(allHerbs.map((herb) => [herb.slug, herb]));
  const ruleMatches = allHerbs.filter((herb) => matchesCollectionRules(herb, definition.rules));
  const featured = (definition.featuredHerbSlugs ?? []).map((slug) => bySlug[slug]).filter(Boolean);

  return [...new Map([...featured, ...ruleMatches].map((herb) => [herb.slug, herb])).values()].sort(byName);
}

function toCollectionSummary(collection) {
  return {
    slug: collection.slug,
    title: collection.title,
    shortIntro: collection.shortIntro,
    educationalSummary: collection.educationalSummary,
    contextTags: collection.contextTags,
    herbCount: collection.herbs.length,
    featuredHerbs: collection.herbs.slice(0, 3)
  };
}

export function getHerbCollections() {
  const allHerbs = getMateriaMedicaCollection();

  return herbCollectionDefinitions
    .map((definition) => ({
      ...definition,
      herbs: pickCollectionHerbs(allHerbs, definition)
    }))
    .filter((collection) => collection.herbs.length > 0);
}

export function getFeaturedCollectionSummaries() {
  return getHerbCollections().map(toCollectionSummary);
}

export function getHerbCollectionBySlug(slug) {
  return getHerbCollections().find((collection) => collection.slug === slug) ?? null;
}
