const IMAGE_BASE = '/assets/images';

const PLACEHOLDER_BY_VARIANT = {
  hero: `${IMAGE_BASE}/site/placeholders/herb-fallback-profile.svg`,
  profile: `${IMAGE_BASE}/site/placeholders/herb-fallback-profile.svg`,
  card: `${IMAGE_BASE}/site/placeholders/herb-fallback-card.svg`,
  thumbnail: `${IMAGE_BASE}/site/placeholders/herb-fallback-card.svg`
};

const ABSOLUTE_URL = /^https?:\/\//i;

function sanitizeSegment(value) {
  return String(value ?? '')
    .trim()
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/g, '-')
    .replaceAll(/^-+|-+$/g, '');
}

export function buildImagePath({ category, slug, variant = 'hero', extension = 'jpg' }) {
  const safeCategory = sanitizeSegment(category);
  const safeSlug = sanitizeSegment(slug);
  const safeVariant = sanitizeSegment(variant);
  const safeExtension = sanitizeSegment(extension);

  if (!safeCategory || !safeSlug) {
    return '';
  }

  return `${IMAGE_BASE}/${safeCategory}/${safeSlug}-${safeVariant}.${safeExtension}`;
}

export function getPlaceholderImagePath(variant = 'hero') {
  return PLACEHOLDER_BY_VARIANT[variant] || PLACEHOLDER_BY_VARIANT.hero;
}

export function resolveHerbImage(herb, { variant = 'hero' } = {}) {
  const providedImage = herb?.image?.trim?.() || '';

  if (providedImage) {
    if (ABSOLUTE_URL.test(providedImage) || providedImage.startsWith('/')) {
      return providedImage;
    }

    return `/${providedImage.replace(/^\/+/, '')}`;
  }

  if (herb?.slug) {
    return buildImagePath({ category: 'herbs', slug: herb.slug, variant }) || getPlaceholderImagePath(variant);
  }

  return getPlaceholderImagePath(variant);
}

export function fallbackOnErrorAttr(variant = 'hero') {
  const fallback = getPlaceholderImagePath(variant);
  return `this.onerror=null;this.src='${fallback}'`;
}
