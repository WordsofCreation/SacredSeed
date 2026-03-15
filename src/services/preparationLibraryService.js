import { herbFallbacks } from '../data/herbFallbacks.js';
import { formulas, preparationGuides, remedyCollections } from '../data/preparationLibrary.js';
import {
  collectPreparationOptions,
  normalizePreparationList,
  normalizePreparationValue
} from '../utils/preparationTaxonomy.js';

function normalizeIngredientReference(reference) {
  const herb = reference?.herbSlug ? herbFallbacks[reference.herbSlug] : null;

  return {
    herbSlug: reference?.herbSlug ?? null,
    commonName: herb?.commonName ?? normalizePreparationValue(reference?.herbName, 'Unknown herb'),
    botanicalName: herb?.botanicalName ?? normalizePreparationValue(reference?.botanicalName, 'Botanical name pending'),
    herbPart: normalizePreparationValue(reference?.herbPart, 'Part not specified'),
    preparationForm: normalizePreparationValue(reference?.preparationForm, 'Form not specified')
  };
}

function normalizePreparationRecord(item) {
  return {
    id: item.id,
    title: normalizePreparationValue(item.title, 'Untitled preparation'),
    preparationType: normalizePreparationValue(item.preparationType),
    formulaCategory: item.formulaCategory ? normalizePreparationValue(item.formulaCategory) : null,
    preparationDescription: normalizePreparationValue(item.preparationDescription),
    methodSteps: normalizePreparationList(item.methodSteps),
    ingredientHerbs: (item.ingredientHerbs ?? []).map(normalizeIngredientReference),
    ingredientAmounts: normalizePreparationList(item.ingredientAmounts),
    dosageGuidance: normalizePreparationValue(item.dosageGuidance),
    safetyNotes: normalizePreparationValue(item.safetyNotes),
    duration: normalizePreparationValue(item.duration),
    storageNotes: normalizePreparationValue(item.storageNotes),
    preparationTags: normalizePreparationList(item.preparationTags)
  };
}

function normalizeRemedyCollection(collection, indexedFormulas) {
  const linkedFormulas = (collection.featuredFormulaIds ?? [])
    .map((formulaId) => indexedFormulas.get(formulaId))
    .filter(Boolean);

  return {
    id: collection.id,
    title: normalizePreparationValue(collection.title, 'Untitled collection'),
    description: normalizePreparationValue(collection.description),
    formulaCategory: normalizePreparationValue(collection.formulaCategory),
    preparationTags: normalizePreparationList(collection.preparationTags),
    formulaCount: linkedFormulas.length,
    featuredFormulas: linkedFormulas
  };
}

export function getPreparationGuides() {
  return preparationGuides.map(normalizePreparationRecord);
}

export function getFormulaCollection() {
  return formulas.map(normalizePreparationRecord);
}

export function getRemedyCollections(formulaCollection = getFormulaCollection()) {
  const indexed = new Map(formulaCollection.map((formula) => [formula.id, formula]));
  return remedyCollections.map((collection) => normalizeRemedyCollection(collection, indexed));
}

export function getPreparationLibraryTaxonomy(guides, formulaCollection) {
  return {
    preparationTypes: [...new Set(collectPreparationOptions([...guides, ...formulaCollection], 'preparationType'))],
    formulaCategories: [...new Set(collectPreparationOptions(formulaCollection, 'formulaCategory'))],
    preparationTags: [...new Set(collectPreparationOptions([...guides, ...formulaCollection], 'preparationTags'))]
  };
}

export function createDefaultPreparationFilters() {
  return {
    query: '',
    preparationTypes: [],
    formulaCategories: [],
    preparationTags: []
  };
}

function searchableText(item) {
  const herbTerms = item.ingredientHerbs
    .flatMap((ingredient) => [ingredient.commonName, ingredient.botanicalName])
    .join(' ');

  return `${item.title} ${item.preparationDescription} ${item.preparationType} ${item.formulaCategory ?? ''} ${herbTerms}`
    .toLowerCase();
}

export function applyPreparationFilters(items, filters) {
  const query = (filters.query ?? '').trim().toLowerCase();

  return items.filter((item) => {
    const queryMatch = !query || searchableText(item).includes(query);
    const typeMatch = !filters.preparationTypes.length
      || filters.preparationTypes.includes(item.preparationType);
    const categoryMatch = !filters.formulaCategories.length
      || (item.formulaCategory && filters.formulaCategories.includes(item.formulaCategory));
    const tagMatch = !filters.preparationTags.length
      || filters.preparationTags.every((tag) => item.preparationTags.includes(tag));

    return queryMatch && typeMatch && categoryMatch && tagMatch;
  });
}

export function groupFormulasByCategory(formulaCollection) {
  return formulaCollection.reduce((groups, formula) => {
    const key = formula.formulaCategory ?? 'Uncategorized';
    if (!groups[key]) {
      groups[key] = [];
    }

    groups[key].push(formula);
    return groups;
  }, {});
}
