import { herbFallbacks } from '../data/herbFallbacks.js';
import {
  collectTaxonomyOptions,
  normalizeTaxonomyLabel,
  normalizeTaxonomyList
} from '../utils/herbTaxonomy.js';

function toIndexHerb(fallbackHerb, slug) {
  return {
    ...fallbackHerb,
    slug,
    commonName: fallbackHerb.commonName ?? 'Unnamed herb',
    botanicalName: fallbackHerb.botanicalName ?? 'Botanical name pending',
    summary: fallbackHerb.summary ?? fallbackHerb.description ?? 'Summary forthcoming.',
    medicinalActions: normalizeTaxonomyList(fallbackHerb.medicinalActions),
    bodySystems: normalizeTaxonomyList(fallbackHerb.bodySystems),
    preparations: normalizeTaxonomyList(fallbackHerb.preparations),
    herbalCategories: normalizeTaxonomyList(fallbackHerb.herbalCategories),
    safetyCategory: normalizeTaxonomyLabel(fallbackHerb.safetyCategory) || 'Unclassified',
    safetySummary: fallbackHerb.safetySummary ?? fallbackHerb.safetyNotes ?? null
  };
}

export function getMateriaMedicaCollection() {
  return Object.entries(herbFallbacks).map(([slug, herb]) => toIndexHerb(herb, slug));
}

export function getMateriaMedicaTaxonomy(herbs) {
  return {
    medicinalActions: [...new Set(collectTaxonomyOptions(herbs, 'medicinalActions'))],
    bodySystems: [...new Set(collectTaxonomyOptions(herbs, 'bodySystems'))],
    preparations: [...new Set(collectTaxonomyOptions(herbs, 'preparations'))],
    herbalCategories: [...new Set(collectTaxonomyOptions(herbs, 'herbalCategories'))],
    safetyCategories: [...new Set(collectTaxonomyOptions(herbs, 'safetyCategory'))]
  };
}

export function applyMateriaMedicaFilters(herbs, filters) {
  const query = (filters.query ?? '').trim().toLowerCase();

  return herbs.filter((herb) => {
    const searchableText = `${herb.commonName} ${herb.botanicalName}`.toLowerCase();
    const queryMatch = !query || searchableText.includes(query);

    const actionsMatch = !filters.medicinalActions.length
      || filters.medicinalActions.every((action) => herb.medicinalActions.includes(action));
    const systemsMatch = !filters.bodySystems.length
      || filters.bodySystems.every((system) => herb.bodySystems.includes(system));
    const preparationsMatch = !filters.preparations.length
      || filters.preparations.every((prep) => herb.preparations.includes(prep));
    const categoriesMatch = !filters.herbalCategories.length
      || filters.herbalCategories.every((category) => herb.herbalCategories.includes(category));
    const safetyMatch = !filters.safetyCategories.length
      || filters.safetyCategories.includes(herb.safetyCategory);

    return queryMatch
      && actionsMatch
      && systemsMatch
      && preparationsMatch
      && categoriesMatch
      && safetyMatch;
  });
}

export function createDefaultMateriaFilters() {
  return {
    query: '',
    medicinalActions: [],
    bodySystems: [],
    preparations: [],
    herbalCategories: [],
    safetyCategories: []
  };
}
