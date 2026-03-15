import { herbCategoryTaxonomy } from './herbCategories.js';

/**
 * Featured educational collections for guided browsing.
 *
 * How to add a new collection:
 * 1) Add a unique slug and editorial copy.
 * 2) Use `rules` for taxonomy/region matching when possible.
 * 3) Optionally pin specific herbs with `featuredHerbSlugs`.
 * 4) Add optional preparation notes or learning links.
 */
export const herbCollectionDefinitions = [
  {
    slug: 'calming-herbs',
    title: 'Calming Herbs',
    shortIntro: 'A gentle starting point for herbs traditionally used in rest, tension, and nervous-system support practices.',
    educationalSummary:
      'Calming herbs often combine aromatic, nervine, and soothing qualities. This collection is designed for educational study of evening teas, daily tonic use, and supportive stress-era routines.',
    preparationNotes: [
      'Infusions and evening tea blends are common introductory formats.',
      'Many calming herbs are paired with aromatic digestive herbs for broader comfort support.'
    ],
    contextTags: ['Nervous-system focus', 'Tea-friendly study path'],
    relatedRoutes: [
      { label: 'Preparation Library', href: '#/preparations' },
      { label: 'Materia Medica Index', href: '#/materia-medica' }
    ],
    rules: {
      categoriesAny: [herbCategoryTaxonomy.calmingHerbs]
    },
    featuredHerbSlugs: ['matricaria-chamomilla', 'scutellaria-lateriflora']
  },
  {
    slug: 'digestive-herbs',
    title: 'Digestive Herbs',
    shortIntro: 'Explore bitter, aromatic, and soothing herbs traditionally used to support digestive comfort and meal-time resilience.',
    educationalSummary:
      'Digestive traditions span bitters, carminatives, and mucilaginous plants. This guide groups herbs often discussed for appetite signaling, post-meal ease, and gut-focused constitutional protocols.',
    preparationNotes: [
      'Bitters are commonly prepared as tinctures or decoctions.',
      'Carminative herbs are often used as post-meal teas.'
    ],
    contextTags: ['Digestive education', 'Bitter and aromatic materia medica'],
    relatedRoutes: [
      { label: 'Digestive-support preparations', href: '#/preparations' },
      { label: 'Browse all herbs', href: '#/materia-medica' }
    ],
    rules: {
      categoriesAny: [herbCategoryTaxonomy.digestiveHerbs]
    },
    featuredHerbSlugs: ['taraxacum-officinale', 'mentha-x-piperita']
  },
  {
    slug: 'nutritive-herbs',
    title: 'Nutritive Herbs',
    shortIntro: 'Mineral-rich and food-like herbs for foundational nourishment and long-view tonic study.',
    educationalSummary:
      'Nutritive herbs are frequently woven into daily routines and seasonal rebuilding programs. They are often prepared as infusions, broths, and food-level additions rather than short-term intensive formulas.',
    preparationNotes: [
      'Long infusions and food-level preparations are frequent learning formats.',
      'Nutritive herbs are often combined with digestive aromatics to improve tolerance.'
    ],
    contextTags: ['Tonic herbalism', 'Foundational nourishment'],
    relatedRoutes: [
      { label: 'Nutritive tea formulas', href: '#/preparations' },
      { label: 'Materia Medica Index', href: '#/materia-medica' }
    ],
    rules: {
      categoriesAny: [herbCategoryTaxonomy.nutritiveHerbs]
    },
    featuredHerbSlugs: ['urtica-dioica', 'avena-sativa']
  },
  {
    slug: 'pacific-northwest-tea-herbs',
    title: 'Pacific Northwest Tea Herbs',
    shortIntro: 'A place-based collection highlighting tea-friendly herbs with Pacific Northwest relevance.',
    educationalSummary:
      'This regional educational set supports field-to-cup literacy by combining regional context with gentle preparation methods. It is useful for local seasonal observation and introductory tea formulation study.',
    preparationNotes: [
      'Focus on infusion-friendly herbs with approachable safety framing.',
      'Use regional context to connect habitat, season, and respectful harvesting practices.'
    ],
    contextTags: ['Pacific Northwest relevance', 'Tea-focused preparations'],
    relatedRoutes: [
      { label: 'Regional-ready herb index', href: '#/materia-medica' },
      { label: 'Tea preparations', href: '#/preparations' }
    ],
    rules: {
      categoriesAll: [herbCategoryTaxonomy.regionalPnw, herbCategoryTaxonomy.teaFriendlyHerbs]
    },
    featuredHerbSlugs: ['urtica-dioica', 'achillea-millefolium', 'rosa-rugosa']
  },
  {
    slug: 'immune-support-herbs',
    title: 'Immune Support Herbs',
    shortIntro: 'Seasonal and constitutional herbs often studied for immune resilience and respiratory context.',
    educationalSummary:
      'Immune-support herbs are generally discussed in timing-sensitive use patterns, especially around seasonal transitions. This collection emphasizes educational context, preparation form, and cautious claim language.',
    preparationNotes: [
      'Short-duration seasonal formulas are common in this category.',
      'Berry syrups, teas, and tinctures are frequent preparation styles.'
    ],
    contextTags: ['Seasonal wellness study', 'Respiratory support context'],
    relatedRoutes: [
      { label: 'Seasonal formulas', href: '#/preparations' },
      { label: 'Browse all immune-related herbs', href: '#/materia-medica' }
    ],
    rules: {
      categoriesAny: [herbCategoryTaxonomy.immuneSupportHerbs]
    },
    featuredHerbSlugs: ['sambucus-nigra', 'echinacea-purpurea']
  },
  {
    slug: 'aromatic-herbs',
    title: 'Aromatic Herbs',
    shortIntro: 'Fragrant herbs that bridge sensory medicine, digestive support, and uplifting tea traditions.',
    educationalSummary:
      'Aromatic herbs provide immediate sensory cues and are often selected for both flavor and function. This guide helps learners compare volatile-rich plants across digestive, calming, and respiratory contexts.',
    preparationNotes: [
      'Infusions preserve aromatic character for tea-based study.',
      'Concentrated extracts can require stronger dilution and safety considerations.'
    ],
    contextTags: ['Aromatic materia medica', 'Cross-system study collection'],
    relatedRoutes: [
      { label: 'Preparation methods', href: '#/preparations' },
      { label: 'Materia Medica filters', href: '#/materia-medica' }
    ],
    rules: {
      categoriesAny: [herbCategoryTaxonomy.aromaticHerbs]
    },
    featuredHerbSlugs: ['melissa-officinalis', 'lavandula-angustifolia', 'foeniculum-vulgare']
  }
];
