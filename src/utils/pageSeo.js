import { buildBaseSchema, buildSiteSchema, getSiteSeoConfig } from './seo.js';
import { getCanonicalPageUrl } from '../config/siteConfig.js';
import { withAssetVersion } from './assetVersion.js';

const site = getSiteSeoConfig();

export function getMateriaMedicaSeo() {
  const title = 'SacredSeed Materia Medica Index | Herbal Profiles and Search';
  const description =
    'Browse SacredSeed\'s searchable materia medica index with herbal profiles, medicinal actions, body-system filters, and safety context.';

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: '#/materia-medica',
    schemaEntries: [
      buildSiteSchema(),
      buildBaseSchema({
        pageType: 'CollectionPage',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl('/materia-medica')
      })
    ]
  };
}

export function getHerbProfileSeo(herb) {
  const title = `${herb.commonName} (${herb.botanicalName}) | SacredSeed Herb Profile`;
  const description =
    herb.summary ||
    herb.description ||
    `${herb.commonName} materia medica profile with taxonomy, preparations, chemistry, and safety context.`;

  return {
    title,
    description,
    pageType: 'article',
    canonicalPath: `#/herbs/${encodeURIComponent(herb.slug)}`,
    image: withAssetVersion(herb.image || site.defaultImage),
    schemaEntries: [
      buildBaseSchema({
        pageType: 'Article',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl(`/herbs/${encodeURIComponent(herb.slug)}`)
      })
    ]
  };
}

export function getPreparationLibrarySeo() {
  const title = 'SacredSeed Preparations | Herbal Guides, Formulas, and Remedies';
  const description =
    'Explore SacredSeed preparation guides, tea formulas, and remedy collections for practical herbal learning and responsible usage context.';

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: '#/preparations',
    schemaEntries: [
      buildBaseSchema({
        pageType: 'CollectionPage',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl('/preparations')
      })
    ]
  };
}

export function getCollectionsSeo() {
  const title = 'SacredSeed Herb Collections | Guided Botanical Learning Paths';
  const description =
    'Discover SacredSeed featured herb collections organized by themes like calming, digestive, nutritive, aromatic, immune support, and Pacific Northwest tea study.';

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: '#/collections',
    schemaEntries: [
      buildBaseSchema({
        pageType: 'CollectionPage',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl('/collections')
      })
    ]
  };
}

export function getCollectionDetailSeo(collection) {
  const title = `${collection.title} | SacredSeed Herb Collection`;
  const description = collection.shortIntro || collection.educationalSummary;

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: `#/collections/${encodeURIComponent(collection.slug)}`,
    schemaEntries: [
      buildBaseSchema({
        pageType: 'CollectionPage',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl(`/collections/${encodeURIComponent(collection.slug)}`)
      })
    ]
  };
}

export function getLearningPathwaysSeo() {
  const title = 'SacredSeed Beginner Learning Pathways | Guided Herbal Study';
  const description =
    'Start with SacredSeed beginner learning pathways featuring curated herb sequences, preparation links, and approachable materia medica education.';

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: '#/pathways',
    schemaEntries: [
      buildBaseSchema({
        pageType: 'CollectionPage',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl('/pathways')
      })
    ]
  };
}

export function getLearningPathwayDetailSeo(pathway) {
  const title = `${pathway.title} | SacredSeed Beginner Herbal Pathway`;
  const description = pathway.intro || pathway.educationalGoal;

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: `#/pathways/${encodeURIComponent(pathway.slug)}`,
    schemaEntries: [
      buildBaseSchema({
        pageType: 'CollectionPage',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl(`/pathways/${encodeURIComponent(pathway.slug)}`)
      })
    ]
  };
}

export function getSeasonalCollectionsSeo() {
  const title = 'SacredSeed Seasonal Herbal Collections | Spring to Winter Learning';
  const description =
    'Browse SacredSeed seasonal herbal collections for spring, summer, autumn, and winter with curated herbs, preparations, and educational guidance.';

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: '#/seasons',
    schemaEntries: [
      buildBaseSchema({
        pageType: 'CollectionPage',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl('/seasons')
      })
    ]
  };
}

export function getSeasonalCollectionDetailSeo(collection) {
  const title = `${collection.title} | SacredSeed Seasonal Collection`;
  const description = collection.shortIntro || collection.educationalOverview;

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: `#/seasons/${encodeURIComponent(collection.slug)}`,
    schemaEntries: [
      buildBaseSchema({
        pageType: 'CollectionPage',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl(`/seasons/${encodeURIComponent(collection.slug)}`)
      })
    ]
  };
}

export function getEditorialArticlesSeo() {
  const title = 'SacredSeed Editorial Articles | Foundational Herbal Learning';
  const description =
    'Read SacredSeed editorial articles on materia medica literacy, preparation methods, and beginner-friendly home herbal practice.';

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: '#/articles',
    schemaEntries: [
      buildBaseSchema({
        pageType: 'CollectionPage',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl('/articles')
      })
    ]
  };
}

export function getEditorialArticleSeo(article) {
  const title = `${article.title} | SacredSeed Editorial Guide`;
  const description = article.summary || article.intro;
  const canonicalUrl = getCanonicalPageUrl(`/articles/${encodeURIComponent(article.slug)}`);

  return {
    title,
    description,
    pageType: 'article',
    canonicalPath: `#/articles/${encodeURIComponent(article.slug)}`,
    schemaEntries: [
      buildBaseSchema({
        pageType: 'Article',
        title,
        description,
        canonicalUrl
      }),
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        url: canonicalUrl,
        author: {
          '@type': 'Organization',
          name: 'SacredSeed'
        },
        publisher: {
          '@type': 'Organization',
          name: 'SacredSeed'
        },
        isPartOf: {
          '@type': 'WebSite',
          name: site.siteName,
          url: getCanonicalPageUrl('/')
        }
      }
    ]
  };
}


export function getSearchSeo() {
  const title = 'SacredSeed Search | Find Herbs, Preparations, and Editorial Guides';
  const description =
    'Use SacredSeed search to quickly find herb profiles, preparation guides, and editorial articles across the botanical knowledge library.';

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: '#/search',
    schemaEntries: [
      buildBaseSchema({
        pageType: 'SearchResultsPage',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl('/search')
      })
    ]
  };
}

export function getAboutSeo() {
  const title = 'About SacredSeed | Botanical Education and Data Transparency';
  const description =
    'Learn SacredSeed\'s mission, methodology, and commitment to scholarly herbal education with transparent attribution and safety-aware communication.';

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: '#/about',
    schemaEntries: [
      buildBaseSchema({
        pageType: 'AboutPage',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl('/about')
      })
    ]
  };
}

export function getPrivacySeo() {
  const title = 'Privacy Policy | SacredSeed';
  const description =
    'Review SacredSeed privacy practices, including analytics, cookie usage, data minimization principles, and contact guidance for privacy concerns.';

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: '#/privacy-policy',
    noindex: true,
    schemaEntries: [
      buildBaseSchema({
        pageType: 'WebPage',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl('/privacy-policy')
      })
    ]
  };
}

export function getTermsSeo() {
  const title = 'Terms of Use | SacredSeed';
  const description =
    'Read SacredSeed terms of use for educational scope, content limitations, acceptable use, and updates to platform policies.';

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: '#/terms-of-use',
    noindex: true,
    schemaEntries: [
      buildBaseSchema({
        pageType: 'WebPage',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl('/terms-of-use')
      })
    ]
  };
}

export function getNotFoundSeo() {
  const title = 'Page Not Found | SacredSeed';
  const description = 'The requested SacredSeed page could not be found.';

  return {
    title,
    description,
    pageType: 'website',
    noindex: true,
    schemaEntries: [
      buildBaseSchema({
        pageType: 'WebPage',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl(window.location.pathname || '/')
      })
    ]
  };
}
