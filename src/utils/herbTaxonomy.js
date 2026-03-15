function toArray(value) {
  if (!value) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}

export function normalizeTaxonomyLabel(value) {
  return String(value ?? '')
    .trim()
    .replace(/\s+/g, ' ');
}

export function normalizeTaxonomyList(values) {
  return [...new Set(toArray(values).map(normalizeTaxonomyLabel).filter(Boolean))];
}

export function collectTaxonomyOptions(herbs, field) {
  return herbs
    .flatMap((herb) => normalizeTaxonomyList(herb[field]))
    .sort((left, right) => left.localeCompare(right));
}
