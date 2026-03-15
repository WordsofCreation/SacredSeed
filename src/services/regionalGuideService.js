import { regionalGuideDefinitions } from '../data/regionalGuides.js';

function normalizeList(values) {
  return (values ?? []).filter(Boolean);
}

export function getRegionalGuides() {
  return regionalGuideDefinitions.map((guide) => ({
    ...guide,
    type: 'regionalGuide',
    focusAreas: normalizeList(guide.focusAreas),
    relatedHerbSlugs: normalizeList(guide.relatedHerbSlugs),
    relatedCollectionSlugs: normalizeList(guide.relatedCollectionSlugs),
    relatedPreparationIds: normalizeList(guide.relatedPreparationIds),
    relatedPathwaySlugs: normalizeList(guide.relatedPathwaySlugs),
    relatedTags: normalizeList(guide.relatedTags),
    searchKeywords: normalizeList(guide.searchKeywords)
  }));
}

export function getRegionalGuideBySlug(slug) {
  return getRegionalGuides().find((guide) => guide.slug === slug) ?? null;
}
