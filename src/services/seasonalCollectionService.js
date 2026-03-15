import { seasonalCollectionDefinitions } from '../data/seasonalCollections.js';
import { formulas, preparationGuides, remedyCollections } from '../data/preparationLibrary.js';
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

function matchesRules(herb, rules = {}) {
  const herbCategories = toSet(herb.herbalCategories);
  const herbRegions = toSet(herb.regionTags);

  const categoriesAll = normalizeTaxonomyList(rules.categoriesAll);
  const categoriesAny = normalizeTaxonomyList(rules.categoriesAny);
  const regionsAll = normalizeTaxonomyList(rules.regionsAll);
  const regionsAny = normalizeTaxonomyList(rules.regionsAny);

  return includesAll(herbCategories, categoriesAll)
    && includesAny(herbCategories, categoriesAny)
    && includesAll(herbRegions, regionsAll)
    && includesAny(herbRegions, regionsAny);
}

function pickSeasonalHerbs(allHerbs, definition) {
  const bySlug = Object.fromEntries(allHerbs.map((herb) => [herb.slug, herb]));
  const featured = (definition.featuredHerbSlugs ?? []).map((slug) => bySlug[slug]).filter(Boolean);
  const matched = allHerbs.filter((herb) => matchesRules(herb, definition.rules));

  return [...new Map([...featured, ...matched].map((herb) => [herb.slug, herb])).values()].sort(byName);
}

function resolvePreparationReferences(preparationIds = []) {
  const preparationIndex = new Map(
    [...preparationGuides, ...formulas, ...remedyCollections].map((item) => [item.id, item])
  );

  return preparationIds
    .map((id) => preparationIndex.get(id))
    .filter(Boolean)
    .map((item) => ({
      id: item.id,
      title: item.title,
      preparationType: item.preparationType ?? item.formulaCategory ?? 'Preparation',
      href: '#/preparations'
    }));
}

function toSeasonSummary(collection) {
  return {
    slug: collection.slug,
    season: collection.season,
    title: collection.title,
    shortIntro: collection.shortIntro,
    herbCount: collection.herbs.length,
    featuredHerbs: collection.herbs.slice(0, 3)
  };
}

export function getSeasonalCollections() {
  const allHerbs = getMateriaMedicaCollection();

  return seasonalCollectionDefinitions
    .map((definition) => ({
      ...definition,
      herbs: pickSeasonalHerbs(allHerbs, definition),
      preparations: resolvePreparationReferences(definition.preparationIds)
    }))
    .filter((collection) => collection.herbs.length > 0);
}

export function getSeasonalCollectionSummaries() {
  return getSeasonalCollections().map(toSeasonSummary);
}

export function getSeasonalCollectionBySlug(slug) {
  return getSeasonalCollections().find((collection) => collection.slug === slug) ?? null;
}

export function getFeaturedSeasonalCollection() {
  return getSeasonalCollections()[0] ?? null;
}
