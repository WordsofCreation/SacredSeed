function isPresent(value) {
  if (value == null) {
    return false;
  }

  if (typeof value === 'string') {
    return value.trim().length > 0;
  }

  if (Array.isArray(value)) {
    return value.length > 0;
  }

  return true;
}

export function mergeHerbData(baseHerb, ...sourceHerbs) {
  const merged = { ...baseHerb };
  const dataSources = new Set(baseHerb?.dataSources ?? []);

  for (const source of sourceHerbs) {
    if (!source) {
      continue;
    }

    for (const [key, value] of Object.entries(source)) {
      if (key === 'dataSources') {
        value?.forEach((sourceName) => dataSources.add(sourceName));
        continue;
      }

      if (isPresent(value)) {
        merged[key] = value;
      }
    }
  }

  merged.dataSources = Array.from(dataSources);
  return merged;
}
