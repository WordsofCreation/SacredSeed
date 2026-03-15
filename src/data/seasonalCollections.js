import { herbCategoryTaxonomy } from './herbCategories.js';

/**
 * Seasonal educational collections.
 *
 * Add future collections by creating a new object with:
 * - `slug`, `season`, `title`, and introductory copy
 * - taxonomy-first `rules` for scalable matching
 * - optional curated `featuredHerbSlugs` for editorial intent
 * - optional `preparationIds`, `regionalNotes`, and related route links
 */
export const seasonalCollectionDefinitions = [
  {
    slug: 'spring-herbs',
    season: 'Spring',
    title: 'Spring Herbs',
    shortIntro:
      'Fresh, mineral-forward, and gently mobilizing herbs traditionally studied during spring transitions.',
    educationalOverview:
      'Spring collections often emphasize bitter greens, nutritive leaves, and circulation-aware herbs. This page helps learners connect seasonal emergence with gentle foundational preparation strategies.',
    preparationIds: ['nettle-infusion', 'yarrow-tea', 'nutritive-mineral-tea'],
    regionalNotes: [
      'In the Pacific Northwest, spring field learning often starts with nettle, yarrow, and dandelion observations.',
      'Prioritize respectful identification and harvesting practices when studying spring herbs in the field.'
    ],
    sourceNote:
      'Seasonal context reflects traditional educational patterns and should be adapted to local climate, constitution, and professional guidance.',
    relatedRoutes: [
      { label: 'Beginner Pathways', href: '#/pathways' },
      { label: 'How to Read an Herb Profile', href: '#/articles/how-to-read-an-herb-profile' }
    ],
    rules: {
      categoriesAny: [herbCategoryTaxonomy.nutritiveHerbs, herbCategoryTaxonomy.digestiveHerbs]
    },
    featuredHerbSlugs: ['urtica-dioica', 'taraxacum-officinale', 'trifolium-pratense']
  },
  {
    slug: 'summer-cooling-herbs',
    season: 'Summer',
    title: 'Summer Cooling Herbs',
    shortIntro:
      'Aromatic, moistening, and cooling-leaning herbs often used in warm-weather hydration and comfort routines.',
    educationalOverview:
      'Summer study commonly focuses on heat-balancing teas, aromatic digestive herbs, and gentle demulcent support. Compare flavor, energetics, and preparation style to understand why certain herbs are favored in warmer months.',
    preparationIds: ['yarrow-tea', 'calming-evening-tea'],
    sourceNote:
      'Educational energetics language is descriptive and traditional; it is not a substitute for individualized medical care.',
    relatedRoutes: [
      { label: 'Preparation Library', href: '#/preparations' },
      { label: 'Herbal Tea vs Infusion vs Decoction', href: '#/articles/herbal-tea-vs-infusion-vs-decoction' }
    ],
    rules: {
      categoriesAny: [herbCategoryTaxonomy.aromaticHerbs, herbCategoryTaxonomy.teaFriendlyHerbs]
    },
    featuredHerbSlugs: ['mentha-x-piperita', 'hibiscus-sabdariffa', 'melissa-officinalis']
  },
  {
    slug: 'autumn-immune-support-herbs',
    season: 'Autumn',
    title: 'Autumn Immune Support Herbs',
    shortIntro:
      'A transitional-season collection focused on respiratory resilience, mucosal support, and preparedness habits.',
    educationalOverview:
      'Autumn routines often include immune-focused berries, roots, and aromatics. This collection supports learning about seasonal timing, short-duration formulas, and responsible safety framing as weather patterns shift.',
    preparationIds: ['seasonal-immune-support-tea', 'oregon-grape-decoction'],
    sourceNote:
      'Immune-support language here is educational and non-diagnostic; seek clinical care for persistent or severe symptoms.',
    relatedRoutes: [
      { label: 'Immune Support Herb Collection', href: '#/collections/immune-support-herbs' },
      { label: 'Building a Simple Home Herbal Practice', href: '#/articles/building-a-simple-home-herbal-practice' }
    ],
    rules: {
      categoriesAny: [herbCategoryTaxonomy.immuneSupportHerbs, herbCategoryTaxonomy.respiratorySupportHerbs]
    },
    featuredHerbSlugs: ['sambucus-nigra', 'echinacea-purpurea', 'thymus-vulgaris']
  },
  {
    slug: 'winter-tea-and-comfort-herbs',
    season: 'Winter',
    title: 'Winter Tea and Comfort Herbs',
    shortIntro:
      'Warming and restorative herbs for winter tea rituals, evening tonics, and comfort-focused daily practice.',
    educationalOverview:
      'Winter herbal study often emphasizes warming aromatics, soothing demulcents, and nervine support. Explore how infusion, decoction, and blend strategy can support seasonal rhythm, hydration, and reflective practice.',
    preparationIds: ['calming-evening-tea', 'nutritive-mineral-tea', 'seasonal-wellness-basics'],
    sourceNote:
      'Comfort-oriented seasonal routines are for general educational support and should not replace medical treatment when needed.',
    relatedRoutes: [
      { label: 'Gentle Herbs for Daily Wellness Pathway', href: '#/pathways/gentle-herbs-daily-wellness' },
      { label: 'What Is a Materia Medica?', href: '#/articles/what-is-a-materia-medica' }
    ],
    rules: {
      categoriesAny: [herbCategoryTaxonomy.calmingHerbs, herbCategoryTaxonomy.teaFriendlyHerbs]
    },
    featuredHerbSlugs: ['zingiber-officinale', 'matricaria-chamomilla', 'tilia-cordata']
  }
];
