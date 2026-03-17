import {
  formulaCategoryTaxonomy,
  formulaTagTaxonomy,
  preparationTypeTaxonomy
} from './preparationTaxonomy.js';

export const preparationGuides = [
  {
    id: 'nettle-infusion',
    title: 'Nettle Infusion',
    preparationType: preparationTypeTaxonomy.infusions,
    preparationDescription:
      'A mineral-rich long infusion designed for daily nutritive support and gentle tissue restoration.',
    methodSteps: [
      'Place dried nettle leaf in a quart jar and cover with just-boiled water.',
      'Seal and steep 4-8 hours (or overnight) for a deep mineral extraction.',
      'Strain through a fine mesh and store refrigerated.'
    ],
    ingredientHerbs: [{ herbSlug: 'urtica-dioica', herbPart: 'Leaf', preparationForm: 'Dried cut herb' }],
    ingredientAmounts: ['1 ounce dried nettle leaf per 1 quart water'],
    dosageGuidance: 'Traditionally consumed as 1-3 cups daily, adjusted to constitution and practitioner guidance.',
    safetyNotes: 'Review use with renal conditions or concurrent diuretic medications.',
    duration: 'Preparation time: 8 hours passive steep',
    storageNotes: 'Refrigerate and use within 24-36 hours.',
    preparationTags: [formulaTagTaxonomy.nutritive, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'yarrow-tea',
    title: 'Yarrow Tea',
    preparationType: preparationTypeTaxonomy.teas,
    preparationDescription:
      'Aromatic short infusion used in traditional practice for seasonal wellness and digestive comfort.',
    methodSteps: [
      'Steep yarrow aerial parts in freshly boiled water for 10-15 minutes.',
      'Keep covered while steeping to retain aromatic compounds.',
      'Strain and serve warm.'
    ],
    ingredientHerbs: [{ herbName: 'Yarrow', botanicalName: 'Achillea millefolium', herbPart: 'Aerial parts' }],
    ingredientAmounts: ['1-2 teaspoons dried yarrow per 8 ounces water'],
    dosageGuidance: 'Commonly used as 1 cup up to 3 times daily for short-term protocols.',
    safetyNotes: 'Avoid in known Asteraceae sensitivity without professional guidance.',
    duration: 'Preparation time: 15 minutes',
    storageNotes: 'Best consumed fresh within the same day.',
    preparationTags: [formulaTagTaxonomy.aromatic]
  },
  {
    id: 'oregon-grape-decoction',
    title: 'Oregon Grape Decoction',
    preparationType: preparationTypeTaxonomy.decoctions,
    preparationDescription:
      'A traditional bitter root decoction used in practitioner-guided digestive and skin support protocols.',
    methodSteps: [
      'Combine Oregon grape root with cold water in a covered pot.',
      'Bring to a gentle simmer and decoct 20-30 minutes.',
      'Strain and cool before dosing.'
    ],
    ingredientHerbs: [{ herbName: 'Oregon Grape', botanicalName: 'Mahonia aquifolium', herbPart: 'Root' }],
    ingredientAmounts: ['1 tablespoon dried root per 12 ounces water'],
    dosageGuidance: 'Traditionally taken in small bitter doses before meals as advised by practitioners.',
    safetyNotes: 'Not typically used during pregnancy; monitor in sensitive digestive constitutions.',
    duration: 'Preparation time: 30 minutes',
    storageNotes: 'Refrigerate and use within 48 hours.',
    preparationTags: [formulaTagTaxonomy.bitter]
  },
  {
    id: 'peppermint-digestive-tea',
    title: 'Peppermint Digestive Tea',
    preparationType: preparationTypeTaxonomy.teas,
    preparationDescription:
      'A simple aromatic tea traditionally used after meals to ease occasional digestive tension.',
    methodSteps: [
      'Place dried peppermint leaf in a mug or teapot and add freshly boiled water.',
      'Cover and steep for 8-10 minutes to preserve volatile oils.',
      'Strain and sip warm after meals.'
    ],
    ingredientHerbs: [{ herbName: 'Peppermint', botanicalName: 'Mentha × piperita', herbPart: 'Leaf' }],
    ingredientAmounts: ['1 tablespoon dried peppermint leaf per 8 ounces water'],
    dosageGuidance: 'Traditionally enjoyed as 1 cup after meals, up to 3 cups daily.',
    safetyNotes: 'Use caution with active reflux symptoms, as mint may aggravate some individuals.',
    duration: 'Preparation time: 10 minutes',
    storageNotes: 'Best consumed fresh; refrigerate leftovers and use within 24 hours.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'ginger-honey-decoction',
    title: 'Ginger Honey Decoction',
    preparationType: preparationTypeTaxonomy.decoctions,
    preparationDescription:
      'A warming kitchen remedy that combines fresh ginger decoction with honey once cooled to sipping temperature.',
    methodSteps: [
      'Slice fresh ginger and add to cold water in a small pot.',
      'Bring to a gentle simmer and cook 15-20 minutes.',
      'Strain into a mug, cool briefly, then stir in honey to taste.'
    ],
    ingredientHerbs: [{ herbName: 'Ginger', botanicalName: 'Zingiber officinale', herbPart: 'Rhizome' }],
    ingredientAmounts: ['2 tablespoons sliced fresh ginger per 12 ounces water', '1-2 teaspoons honey (optional)'],
    dosageGuidance: 'Use as 1 warm cup as needed for occasional cold-weather discomfort.',
    safetyNotes: 'Review concentrated ginger use when taking anticoagulants or before surgery.',
    duration: 'Preparation time: 20 minutes',
    storageNotes: 'Refrigerate strained decoction up to 48 hours; add honey only when serving.',
    preparationTags: [formulaTagTaxonomy.warming, formulaTagTaxonomy.aromatic]
  },
  {
    id: 'marshmallow-cold-infusion',
    title: 'Marshmallow Root Cold Infusion',
    preparationType: preparationTypeTaxonomy.infusions,
    preparationDescription:
      'A soothing cold infusion prepared overnight to extract mucilage for throat and digestive demulcent support.',
    methodSteps: [
      'Add cut and sifted marshmallow root to a jar of cool water.',
      'Cover and steep 6-8 hours (or overnight), shaking once or twice.',
      'Strain through a fine mesh or cloth and sip cool or at room temperature.'
    ],
    ingredientHerbs: [{ herbName: 'Marshmallow', botanicalName: 'Althaea officinalis', herbPart: 'Root' }],
    ingredientAmounts: ['1 tablespoon dried marshmallow root per 12 ounces cool water'],
    dosageGuidance: 'Commonly consumed as 1 cup up to 2 times daily for short-term soothing support.',
    safetyNotes: 'Separate from oral medications by at least 2 hours due to potential absorption effects.',
    duration: 'Preparation time: 8 hours passive steep',
    storageNotes: 'Refrigerate and use within 24 hours.',
    preparationTags: [formulaTagTaxonomy.demulcent, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'holy-basil-citrus-tea',
    title: 'Holy Basil Citrus Tea',
    preparationType: preparationTypeTaxonomy.teas,
    preparationDescription:
      'A bright aromatic tea with tulsi and citrus peel that works well as an uplifting afternoon reset.',
    methodSteps: [
      'Combine holy basil leaf and a small strip of dried citrus peel in a teapot.',
      'Pour just-boiled water over the herbs and steep covered for 8-10 minutes.',
      'Strain, then add a squeeze of fresh lemon if desired.'
    ],
    ingredientHerbs: [
      { herbName: 'Holy Basil', botanicalName: 'Ocimum tenuiflorum', herbPart: 'Leaf' },
      { herbName: 'Orange Peel', botanicalName: 'Citrus sinensis', herbPart: 'Peel' }
    ],
    ingredientAmounts: ['1 tablespoon dried holy basil leaf', '1 teaspoon dried orange peel', '10 ounces hot water'],
    dosageGuidance: 'Traditionally enjoyed as 1 cup once or twice daily.',
    safetyNotes: 'Use practitioner guidance for concentrated tulsi use alongside blood-sugar medications.',
    duration: 'Preparation time: 10 minutes',
    storageNotes: 'Best served fresh; refrigerate leftovers and use within 24 hours.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'hibiscus-rosehip-cooler',
    title: 'Hibiscus Rosehip Cooler',
    preparationType: preparationTypeTaxonomy.infusions,
    preparationDescription:
      'A tart ruby infusion that can be chilled for warm-weather hydration and seasonal antioxidant support.',
    methodSteps: [
      'Add hibiscus and rosehip to a heat-safe jar and cover with hot water.',
      'Steep covered for 20 minutes, then strain thoroughly.',
      'Cool to room temperature and refrigerate; serve over ice if desired.'
    ],
    ingredientHerbs: [
      { herbName: 'Hibiscus', botanicalName: 'Hibiscus sabdariffa', herbPart: 'Calyx' },
      { herbName: 'Rosehip', botanicalName: 'Rosa canina', herbPart: 'Fruit' }
    ],
    ingredientAmounts: ['1 tablespoon hibiscus', '1 tablespoon rosehip', '16 ounces hot water'],
    dosageGuidance: 'Use as 1 cup up to 2 times daily as a refreshing herbal beverage.',
    safetyNotes: 'Review regular hibiscus intake with clinicians when using blood-pressure medication.',
    duration: 'Preparation time: 25 minutes including cooling',
    storageNotes: 'Refrigerate for up to 48 hours in a sealed glass jar.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.caffeineFree]
  }
];

export const formulas = [
  {
    id: 'nutritive-mineral-tea',
    title: 'Nutritive Mineral Tea',
    preparationType: preparationTypeTaxonomy.infusions,
    formulaCategory: formulaCategoryTaxonomy.nutritiveBlends,
    preparationDescription:
      'A foundational mineral-rich blend for long infusion protocols during demanding seasons.',
    ingredientHerbs: [
      { herbSlug: 'urtica-dioica', herbPart: 'Leaf' },
      { herbSlug: 'taraxacum-officinale', herbPart: 'Leaf' },
      { herbName: 'Oatstraw', botanicalName: 'Avena sativa', herbPart: 'Milky tops/straw' }
    ],
    ingredientAmounts: ['2 parts nettle leaf', '1 part dandelion leaf', '1 part oatstraw'],
    methodSteps: [
      'Blend dried herbs thoroughly.',
      'Use 1 ounce blend per quart boiling water.',
      'Infuse 4-8 hours and strain.'
    ],
    dosageGuidance: '1-2 cups daily as a food-like tonic infusion.',
    safetyNotes: 'Adjust dandelion content for highly sensitive digestion.',
    duration: 'Blend prep: 10 minutes; infusion: 8 hours',
    storageNotes: 'Prepared tea keeps 24-36 hours refrigerated.',
    preparationTags: [formulaTagTaxonomy.nutritive, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'calming-evening-tea',
    title: 'Calming Evening Tea',
    preparationType: preparationTypeTaxonomy.teas,
    formulaCategory: formulaCategoryTaxonomy.sleepSupport,
    preparationDescription:
      'A gentle evening aromatic tea blend to support transition into rest.',
    ingredientHerbs: [
      { herbSlug: 'matricaria-chamomilla', herbPart: 'Flower' },
      { herbName: 'Lemon Balm', botanicalName: 'Melissa officinalis', herbPart: 'Leaf' },
      { herbName: 'Linden', botanicalName: 'Tilia cordata', herbPart: 'Bract/flower' }
    ],
    ingredientAmounts: ['1 part chamomile', '1 part lemon balm', '1 part linden'],
    methodSteps: [
      'Steep 1 tablespoon tea blend in 10 ounces hot water for 12 minutes.',
      'Strain and sip warm in the evening.',
      'Optionally add a small amount of honey after cooling slightly.'
    ],
    dosageGuidance: '1 cup in the evening, or as professionally advised.',
    safetyNotes: 'Use care with sedative medications and ragweed-family sensitivities.',
    duration: 'Preparation time: 15 minutes',
    storageNotes: 'Serve fresh; aromatic profile declines with storage.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'seasonal-immune-support-tea',
    title: 'Seasonal Immune Support Tea',
    preparationType: preparationTypeTaxonomy.decoctions,
    formulaCategory: formulaCategoryTaxonomy.immuneSupport,
    preparationDescription:
      'A warming seasonal blend combining roots and aromatics for short-term winter support.',
    ingredientHerbs: [
      { herbName: 'Elderberry', botanicalName: 'Sambucus nigra', herbPart: 'Berry' },
      { herbName: 'Rosehip', botanicalName: 'Rosa canina', herbPart: 'Fruit' },
      { herbName: 'Ginger', botanicalName: 'Zingiber officinale', herbPart: 'Rhizome' }
    ],
    ingredientAmounts: ['2 parts elderberry', '1 part rosehip', '1/2 part ginger'],
    methodSteps: [
      'Simmer elderberry and rosehip 20 minutes.',
      'Add ginger for final 5 minutes.',
      'Strain and serve warm.'
    ],
    dosageGuidance: 'Use as 1 cup daily during acute seasonal windows.',
    safetyNotes: 'Use practitioner review in autoimmune disease or with immune-modulating medications.',
    duration: 'Preparation time: 30 minutes',
    storageNotes: 'Refrigerate up to 48 hours; reheat gently.',
    preparationTags: [formulaTagTaxonomy.warming, formulaTagTaxonomy.aromatic]
  },
  {
    id: 'digestive-bitters-tea',
    title: 'Digestive Bitters Tea',
    preparationType: preparationTypeTaxonomy.decoctions,
    formulaCategory: formulaCategoryTaxonomy.digestiveSupport,
    preparationDescription:
      'A balanced bitter formula that pairs roots with aromatics to support pre-meal digestive readiness.',
    ingredientHerbs: [
      { herbName: 'Dandelion', botanicalName: 'Taraxacum officinale', herbPart: 'Root' },
      { herbName: 'Burdock', botanicalName: 'Arctium lappa', herbPart: 'Root' },
      { herbName: 'Fennel', botanicalName: 'Foeniculum vulgare', herbPart: 'Seed' }
    ],
    ingredientAmounts: ['2 parts dandelion root', '1 part burdock root', '1/2 part fennel seed'],
    methodSteps: [
      'Decoct dandelion and burdock roots in covered water for 25 minutes.',
      'Add fennel in the final 5 minutes.',
      'Strain and serve warm before meals.'
    ],
    dosageGuidance: 'Traditionally used in 1/2 to 1 cup portions 15-20 minutes before meals.',
    safetyNotes: 'Use practitioner guidance with biliary obstruction or highly sensitive digestion.',
    duration: 'Preparation time: 30 minutes',
    storageNotes: 'Refrigerate for up to 48 hours.',
    preparationTags: [formulaTagTaxonomy.bitter, formulaTagTaxonomy.aromatic]
  },
  {
    id: 'respiratory-soothing-tea',
    title: 'Respiratory Soothing Tea',
    preparationType: preparationTypeTaxonomy.infusions,
    formulaCategory: formulaCategoryTaxonomy.respiratorySupport,
    preparationDescription:
      'A moistening and aromatic tea blend used traditionally for seasonal throat and chest comfort.',
    ingredientHerbs: [
      { herbName: 'Mullein', botanicalName: 'Verbascum thapsus', herbPart: 'Leaf' },
      { herbName: 'Thyme', botanicalName: 'Thymus vulgaris', herbPart: 'Leaf' },
      { herbName: 'Licorice', botanicalName: 'Glycyrrhiza glabra', herbPart: 'Root' }
    ],
    ingredientAmounts: ['2 parts mullein leaf', '1 part thyme leaf', '1/2 part licorice root'],
    methodSteps: [
      'Steep blend in just-boiled water for 15 minutes, covered.',
      'Strain carefully through fine cloth to remove mullein hairs.',
      'Sip warm, optionally with a small amount of honey.'
    ],
    dosageGuidance: '1 cup up to 2 times daily during short seasonal use windows.',
    safetyNotes: 'Licorice is not appropriate for everyone; avoid prolonged use with hypertension unless supervised.',
    duration: 'Preparation time: 15 minutes',
    storageNotes: 'Use same day for best aromatic quality.',
    preparationTags: [formulaTagTaxonomy.demulcent, formulaTagTaxonomy.aromatic]
  },
  {
    id: 'golden-spice-milk-tea',
    title: 'Golden Spice Milk Tea',
    preparationType: preparationTypeTaxonomy.decoctions,
    formulaCategory: formulaCategoryTaxonomy.calmingTeas,
    preparationDescription:
      'A cozy evening decoction of warming spices finished with milk for a grounded, kitchen-friendly ritual.',
    ingredientHerbs: [
      { herbName: 'Turmeric', botanicalName: 'Curcuma longa', herbPart: 'Rhizome' },
      { herbName: 'Cinnamon', botanicalName: 'Cinnamomum verum', herbPart: 'Bark' },
      { herbName: 'Cardamom', botanicalName: 'Elettaria cardamomum', herbPart: 'Seed' }
    ],
    ingredientAmounts: ['1 teaspoon turmeric powder', '1 small cinnamon stick', '2 crushed cardamom pods'],
    methodSteps: [
      'Simmer spices in 10 ounces of water for 10 minutes.',
      'Add 4 ounces milk or plant milk and warm gently for 2-3 more minutes.',
      'Strain and sweeten lightly if desired.'
    ],
    dosageGuidance: 'Enjoy as 1 warm cup in the evening or during cold weather.',
    safetyNotes: 'Review concentrated turmeric use with clinicians when taking anticoagulants or before surgery.',
    duration: 'Preparation time: 15 minutes',
    storageNotes: 'Best served immediately; refrigerate unused decoction base for 24 hours.',
    preparationTags: [formulaTagTaxonomy.warming, formulaTagTaxonomy.aromatic]
  },
  {
    id: 'focus-and-clarity-infusion',
    title: 'Focus and Clarity Infusion',
    preparationType: preparationTypeTaxonomy.infusions,
    formulaCategory: formulaCategoryTaxonomy.nutritiveBlends,
    preparationDescription:
      'An aromatic-nutritive daytime blend designed for gentle cognitive steadiness without caffeine.',
    ingredientHerbs: [
      { herbName: 'Lemon Balm', botanicalName: 'Melissa officinalis', herbPart: 'Leaf' },
      { herbName: 'Gotu Kola', botanicalName: 'Centella asiatica', herbPart: 'Aerial parts' },
      { herbName: 'Oatstraw', botanicalName: 'Avena sativa', herbPart: 'Milky tops/straw' }
    ],
    ingredientAmounts: ['1 part lemon balm', '1 part gotu kola', '2 parts oatstraw'],
    methodSteps: [
      'Blend dried herbs and add 1 tablespoon blend to 10 ounces hot water.',
      'Steep covered for 15 minutes.',
      'Strain and sip warm or at room temperature.'
    ],
    dosageGuidance: '1 cup in the morning or early afternoon, up to 2 cups daily.',
    safetyNotes: 'Use individualized guidance for gotu kola in pregnancy or with hepatic conditions.',
    duration: 'Preparation time: 15 minutes',
    storageNotes: 'Use same day for best taste and aromatic quality.',
    preparationTags: [formulaTagTaxonomy.nutritive, formulaTagTaxonomy.caffeineFree]
  }
];

export const remedyCollections = [
  {
    id: 'seasonal-wellness-basics',
    title: 'Seasonal Wellness Basics',
    description:
      'Core preparations for transitional weather support, emphasizing hydration, aromatics, and daily tonic use.',
    formulaCategory: formulaCategoryTaxonomy.seasonalWellness,
    featuredFormulaIds: ['seasonal-immune-support-tea', 'nutritive-mineral-tea'],
    preparationTags: [formulaTagTaxonomy.warming, formulaTagTaxonomy.nutritive]
  },
  {
    id: 'calm-and-restore',
    title: 'Calm and Restore Evening Collection',
    description:
      'Gentle evening-oriented options for nervous system decompression and sleep transition rituals.',
    formulaCategory: formulaCategoryTaxonomy.calmingTeas,
    featuredFormulaIds: ['calming-evening-tea', 'golden-spice-milk-tea'],
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'digestive-daily-support',
    title: 'Digestive Daily Support Collection',
    description:
      'Classic bitters and aromatic preparations that can be rotated around meals for digestive resilience.',
    formulaCategory: formulaCategoryTaxonomy.digestiveSupport,
    featuredFormulaIds: ['digestive-bitters-tea'],
    preparationTags: [formulaTagTaxonomy.bitter, formulaTagTaxonomy.aromatic]
  },
  {
    id: 'seasonal-respiratory-care',
    title: 'Seasonal Respiratory Care Collection',
    description:
      'Moistening and warming preparations often used during dry-air and seasonal respiratory discomfort.',
    formulaCategory: formulaCategoryTaxonomy.respiratorySupport,
    featuredFormulaIds: ['respiratory-soothing-tea', 'seasonal-immune-support-tea'],
    preparationTags: [formulaTagTaxonomy.demulcent, formulaTagTaxonomy.warming]
  },
  {
    id: 'daytime-focus-routines',
    title: 'Daytime Focus Routine Collection',
    description:
      'Caffeine-free daytime options that pair nutritive support with aromatic clarity.',
    formulaCategory: formulaCategoryTaxonomy.nutritiveBlends,
    featuredFormulaIds: ['focus-and-clarity-infusion', 'nutritive-mineral-tea'],
    preparationTags: [formulaTagTaxonomy.nutritive, formulaTagTaxonomy.caffeineFree]
  }
];
