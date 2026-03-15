import {
  bodySystemTaxonomy,
  medicinalActionTaxonomy,
  preparationTaxonomy,
  safetyCategoryTaxonomy
} from './medicinalTaxonomy.js';

/**
 * Structured local medicinal reference layer.
 *
 * This dataset intentionally remains local/curated for now and can be replaced
 * or expanded by future external materia medica connectors.
 */
export const medicinalProfiles = {
  'urtica-dioica': {
    medicinalActions: [
      medicinalActionTaxonomy.nutritive,
      medicinalActionTaxonomy.diuretic,
      medicinalActionTaxonomy.antiInflammatory,
      medicinalActionTaxonomy.astringent,
      medicinalActionTaxonomy.trophorestorative
    ],
    herbalCategories: ['Mineral-rich tonic', 'Urinary tract support herb', 'Spring restorative herb'],
    bodySystems: [
      bodySystemTaxonomy.urinary,
      bodySystemTaxonomy.musculoskeletal,
      bodySystemTaxonomy.immune,
      bodySystemTaxonomy.integumentary,
      bodySystemTaxonomy.reproductive
    ],
    energetics: ['Cooling to neutral', 'Drying (seed/root context dependent)', 'Mildly tonifying'],
    traditionalUses: [
      'Used as a nutrient-dense spring tonic in European and North American folk traditions.',
      'Traditionally prepared as leaf infusions for urinary elimination support.',
      'Leaf and aerial parts have a long history in seasonal respiratory comfort traditions.',
      'Root preparations are traditionally discussed in men\'s urinary wellness contexts.'
    ],
    preparations: [
      {
        type: preparationTaxonomy.infusion,
        part: 'Leaf',
        guidance: 'Steep dried leaf in hot water for mineral-rich daily support.'
      },
      {
        type: preparationTaxonomy.tincture,
        part: 'Leaf or root',
        guidance: 'Used when a concentrated extract is preferred for short-term protocols.'
      },
      {
        type: preparationTaxonomy.freshFood,
        part: 'Young leaf',
        guidance: 'Cook well to neutralize stinging hairs before culinary use.'
      },
      {
        type: preparationTaxonomy.juice,
        part: 'Fresh aerial parts',
        guidance: 'Traditionally used in small amounts as a seasonal restorative.'
      }
    ],
    dosageNotes: [
      'Dosage varies by preparation, plant part, and practitioner context; use product-specific guidance.',
      'Long-term use is often approached as a food-like tonic rather than high-intensity dosing.',
      'For therapeutic use, coordinate with a qualified herbal practitioner, especially when medications are involved.'
    ],
    medicinalSources: ['Curated SacredSeed monograph notes', 'Traditional Western herbal materia medica references'],
    safety: {
      safetySummary:
        'Generally well tolerated when prepared appropriately; most considerations involve medication overlap and individualized clinical context.',
      safetyNotes: [
        'Fresh plant hairs can irritate skin; gloves are recommended during handling.',
        'Dried leaf infusions and cooked preparations are generally preferred for routine use.'
      ],
      contraindications: [
        'Avoid unsupervised therapeutic use in active kidney disease unless guided by a clinician.'
      ],
      cautions: [
        'Monitor hydration and electrolyte balance when combining with strong diuretic protocols.',
        'Use conservative intake if prone to digestive sensitivity from high-mineral herbs.'
      ],
      interactions: [
        'May potentiate the effects of diuretics.',
        'Use medication-aware supervision with antihypertensive or glucose-lowering therapies.'
      ],
      pregnancyLactationNotes:
        'Food-level culinary use is common in tradition, but concentrated medicinal dosing should be discussed with a qualified prenatal clinician.',
      toxicityNotes:
        'No major toxicity profile is expected at customary doses; excessive or inappropriate concentrated use may increase adverse-effect risk.',
      safetyCategories: [
        safetyCategoryTaxonomy.caution,
        safetyCategoryTaxonomy.interaction,
        safetyCategoryTaxonomy.pregnancy,
        safetyCategoryTaxonomy.toxicity
      ]
    }
  }
};
