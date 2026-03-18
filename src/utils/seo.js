import { getCanonicalBaseUrl, getCanonicalPageUrl } from '../config/siteConfig.js';

const SITE_SEO = {
  siteName: 'SacredSeed',
  baseTitle: 'SacredSeed | Professional Herbal Knowledge Platform',
  defaultTitle: 'SacredSeed Materia Medica | Professional Herbal Reference',
  defaultDescription:
    'SacredSeed is a professional herbal medicine learning platform with materia medica profiles, preparation guidance, and transparent sourcing.',
  defaultImage: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=1200&q=80',
  basePath: '/',
  organization: {
    name: 'SacredSeed',
    url: '/',
    description:
      'SacredSeed is a refined educational herbal reference platform for materia medica, preparations, and transparent botanical sourcing.'
  }
};

function normalizeCanonicalPath(pathname = '/') {
  if (!pathname) {
    return '/';
  }

  if (pathname.startsWith('#/')) {
    return pathname.slice(1);
  }

  if (pathname === '#') {
    return '/';
  }

  return pathname.startsWith('/') ? pathname : `/${pathname}`;
}

function buildAbsoluteUrl(pathname = '/') {
  return getCanonicalPageUrl(normalizeCanonicalPath(pathname));
}

function getCanonicalUrl(canonicalPath) {
  if (canonicalPath) {
    return buildAbsoluteUrl(canonicalPath);
  }

  return buildAbsoluteUrl(window.location.pathname || '/');
}

function upsertMetaTag(selector, attributeName, attributeValue, content) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, attributeValue);
    document.head.append(element);
  }

  element.setAttribute('content', content);
}

function upsertLinkTag(selector, rel, href) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.append(element);
  }

  element.setAttribute('href', href);
}

function upsertRobotsMeta(noindex = false) {
  const directives = noindex ? 'noindex, nofollow' : 'index, follow';
  upsertMetaTag('meta[name="robots"]', 'name', 'robots', directives);
}

function removeStructuredDataScripts() {
  document.head.querySelectorAll('script[data-seo-schema="true"]').forEach((node) => node.remove());
}

function injectStructuredData(schemaEntries = []) {
  removeStructuredDataScripts();

  schemaEntries.forEach((entry) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.seoSchema = 'true';
    script.textContent = JSON.stringify(entry);
    document.head.append(script);
  });
}

export function buildBaseSchema({
  pageType = 'WebPage',
  title,
  description,
  canonicalUrl
}) {
  return {
    '@context': 'https://schema.org',
    '@type': pageType,
    name: title,
    description,
    url: canonicalUrl,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_SEO.siteName,
      url: buildAbsoluteUrl(SITE_SEO.basePath)
    }
  };
}

export function buildSiteSchema() {
  const websiteUrl = buildAbsoluteUrl(SITE_SEO.basePath);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${websiteUrl}#website`,
        name: SITE_SEO.siteName,
        url: websiteUrl,
        description: SITE_SEO.defaultDescription,
        inLanguage: 'en'
      },
      {
        '@type': 'Organization',
        '@id': `${websiteUrl}#organization`,
        name: SITE_SEO.organization.name,
        url: websiteUrl,
        description: SITE_SEO.organization.description
      }
    ]
  };
}

export function applyPageSeo({
  title,
  description,
  pageType = 'website',
  canonicalPath,
  image,
  noindex = false,
  schemaEntries = []
}) {
  const resolvedTitle = title || SITE_SEO.defaultTitle;
  const resolvedDescription = description || SITE_SEO.defaultDescription;
  const resolvedImage = image || SITE_SEO.defaultImage;
  const canonicalUrl = getCanonicalUrl(canonicalPath);

  document.title = resolvedTitle;

  upsertMetaTag('meta[name="description"]', 'name', 'description', resolvedDescription);
  upsertMetaTag('meta[property="og:title"]', 'property', 'og:title', resolvedTitle);
  upsertMetaTag('meta[property="og:description"]', 'property', 'og:description', resolvedDescription);
  upsertMetaTag('meta[property="og:type"]', 'property', 'og:type', pageType);
  upsertMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
  upsertMetaTag('meta[property="og:image"]', 'property', 'og:image', resolvedImage);
  upsertMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', SITE_SEO.siteName);
  upsertMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
  upsertMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', resolvedTitle);
  upsertMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', resolvedDescription);
  upsertMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', resolvedImage);

  upsertLinkTag('link[rel="canonical"]', 'canonical', canonicalUrl);
  upsertRobotsMeta(noindex);

  injectStructuredData(schemaEntries);

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    canonicalUrl
  };
}

export function getSiteSeoConfig() {
  return SITE_SEO;
}
