const DEFAULT_CANONICAL_BASE_URL = 'https://wordsofcreation.github.io/SacredSeed';

let canonicalBaseUrlOverride = null;

export const SITE_CONFIG = {
  canonicalBaseUrl: DEFAULT_CANONICAL_BASE_URL
};

function readCanonicalBaseUrlFromMeta() {
  if (typeof document === 'undefined') {
    return null;
  }

  const canonicalMetaTag = document.querySelector('meta[name="sacredseed-canonical-base-url"]');
  if (!canonicalMetaTag) {
    return null;
  }

  return canonicalMetaTag.content || null;
}

function readCanonicalBaseUrlFromEnv() {
  if (typeof process === 'undefined' || !process.env) {
    return null;
  }

  return process.env.SACREDSEED_CANONICAL_BASE_URL || null;
}

function resolveCanonicalBaseUrl() {
  const configured = canonicalBaseUrlOverride || readCanonicalBaseUrlFromEnv() || readCanonicalBaseUrlFromMeta() || SITE_CONFIG.canonicalBaseUrl;
  return configured.replace(/\/$/, '');
}

export function setCanonicalBaseUrl(baseUrl) {
  if (!baseUrl || typeof baseUrl !== 'string') {
    canonicalBaseUrlOverride = null;
    return;
  }

  canonicalBaseUrlOverride = baseUrl;
}

export function getCanonicalBaseUrl() {
  return resolveCanonicalBaseUrl();
}

export function getCanonicalPageUrl(pathname = '/') {
  const base = getCanonicalBaseUrl();
  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`;

  if (normalizedPath === '/') {
    return `${base}/`;
  }

  return `${base}${normalizedPath}`;
}
