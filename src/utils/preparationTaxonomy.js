function toArray(value) {
  if (!value) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}

export function normalizePreparationValue(value, fallback = 'Not specified') {
  const normalized = String(value ?? '')
    .trim()
    .replace(/\s+/g, ' ');

  return normalized || fallback;
}

export function normalizePreparationList(values) {
  return [...new Set(toArray(values).map((value) => normalizePreparationValue(value, '')).filter(Boolean))];
}

export function collectPreparationOptions(items, field) {
  return items
    .flatMap((item) => normalizePreparationList(item[field]))
    .sort((left, right) => left.localeCompare(right));
}
