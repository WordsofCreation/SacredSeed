import { getUnifiedSearchRecords } from './contentCatalogService.js';

export const searchableContentTypes = [
  { value: 'all', label: 'All content' },
  { value: 'herb', label: 'Herbs' },
  { value: 'collection', label: 'Collections' },
  { value: 'regionalGuide', label: 'Regional guides' },
  { value: 'preparation', label: 'Preparations' },
  { value: 'formula', label: 'Formulas & remedies' },
  { value: 'pathway', label: 'Beginner pathways' },
  { value: 'article', label: 'Editorial articles' }
];

export function createDefaultSearchFilters() {
  return {
    query: '',
    contentType: 'all'
  };
}

function scoreMatch(record, query) {
  if (!query) {
    return 1;
  }

  const q = query.toLowerCase();
  const title = (record.title ?? '').toLowerCase();
  const subtitle = (record.subtitle ?? '').toLowerCase();
  const summary = (record.summary ?? '').toLowerCase();
  const keywords = (record.keywords ?? []).join(' ').toLowerCase();
  const categories = (record.categories ?? []).join(' ').toLowerCase();
  const regions = (record.regions ?? []).join(' ').toLowerCase();
  const preparations = (record.preparationTypes ?? []).join(' ').toLowerCase();

  let score = 0;
  if (title.includes(q)) score += 8;
  if (subtitle.includes(q)) score += 6;
  if (keywords.includes(q)) score += 4;
  if (categories.includes(q)) score += 3;
  if (regions.includes(q)) score += 3;
  if (preparations.includes(q)) score += 3;
  if (summary.includes(q)) score += 2;

  return score;
}

export function runSiteSearch(filters) {
  const records = getUnifiedSearchRecords();
  const query = (filters.query ?? '').trim();

  const matched = records
    .filter((record) => filters.contentType === 'all' || record.contentType === filters.contentType)
    .map((record) => ({ ...record, score: scoreMatch(record, query) }))
    .filter((record) => !query || record.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));

  const grouped = matched.reduce((groups, item) => {
    if (!groups[item.contentType]) {
      groups[item.contentType] = [];
    }
    groups[item.contentType].push(item);
    return groups;
  }, {});

  return {
    results: matched,
    grouped,
    total: matched.length,
    query
  };
}
