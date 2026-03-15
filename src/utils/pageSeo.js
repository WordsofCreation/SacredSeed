import { buildBaseSchema, buildSiteSchema, getSiteSeoConfig } from './seo.js';
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
        canonicalUrl: new URL('/#/materia-medica', window.location.origin).toString()
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
        canonicalUrl: new URL(`/#/herbs/${encodeURIComponent(herb.slug)}`, window.location.origin).toString()
      })
      // Future extension: add herb-specific JSON-LD (e.g., MedicalEntity/DefinedTerm) once content model is finalized.
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
        canonicalUrl: new URL('/#/preparations', window.location.origin).toString()
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
        canonicalUrl: new URL('/#/collections', window.location.origin).toString()
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
        canonicalUrl: new URL(`/#/collections/${encodeURIComponent(collection.slug)}`, window.location.origin).toString()
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
        canonicalUrl: new URL('/#/about', window.location.origin).toString()
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
        canonicalUrl: new URL('/#/privacy-policy', window.location.origin).toString()
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
        canonicalUrl: new URL('/#/terms-of-use', window.location.origin).toString()
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
        canonicalUrl: `${window.location.origin}${window.location.pathname}${window.location.search}`
      })
    ]
  };
}
