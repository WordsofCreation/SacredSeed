export const SITE_CONFIG = {
  canonicalBaseUrl: 'https://wordsofcreation.github.io/SacredSeed'
};

export function getCanonicalBaseUrl() {
  return SITE_CONFIG.canonicalBaseUrl.replace(/\/$/, '');
}

export function getCanonicalPageUrl(pathname = '/') {
  const base = getCanonicalBaseUrl();
  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`;

  if (normalizedPath === '/') {
    return `${base}/`;
  }

  return `${base}${normalizedPath}`;
}
