import {
  bodySystemTaxonomy,
  medicinalActionTaxonomy,
  preparationTaxonomy,
  safetyCategoryTaxonomy
} from './medicinalTaxonomy.js';

/**
 * Structured local medicinal reference layer.
 *
 * Expansion note:
 * - Add additional batches with the same slug-keyed object format.
 * - Keep keys aligned with herbFallbacks to preserve unified merge behavior.
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
      }
    ],
    dosageNotes: [
      'Dosage varies by preparation, plant part, and practitioner context; use product-specific guidance.',
      'For therapeutic use, coordinate with a qualified herbal practitioner, especially when medications are involved.'
    ],
    medicinalSources: ['Curated SacredSeed monograph notes', 'Traditional Western herbal materia medica references'],
    safety: {
      safetySummary:
        'Generally well tolerated when prepared appropriately; most considerations involve medication overlap and individualized clinical context.',
      safetyNotes: ['Fresh plant hairs can irritate skin; gloves are recommended during handling.'],
      contraindications: ['Avoid unsupervised therapeutic use in active kidney disease unless guided by a clinician.'],
      cautions: ['Monitor hydration and electrolyte balance when combining with strong diuretic protocols.'],
      interactions: ['May potentiate the effects of diuretics and antihypertensive therapies.'],
      pregnancyLactationNotes:
        'Food-level culinary use is common in tradition, but concentrated medicinal dosing should be discussed with a qualified prenatal clinician.',
      toxicityNotes: 'No major toxicity profile is expected at customary doses when correctly prepared.',
      safetyCategories: [
        safetyCategoryTaxonomy.caution,
        safetyCategoryTaxonomy.interaction,
        safetyCategoryTaxonomy.pregnancy
      ]
    }
  },
  'achillea-millefolium': {
    medicinalActions: [medicinalActionTaxonomy.aromatic, medicinalActionTaxonomy.astringent, medicinalActionTaxonomy.diaphoretic],
    herbalCategories: ['Field first-aid herb', 'Digestive aromatic bitter'],
    bodySystems: [bodySystemTaxonomy.digestive, bodySystemTaxonomy.circulatory, bodySystemTaxonomy.integumentary],
    energetics: ['Warming', 'Drying'],
    traditionalUses: [
      'Traditionally used as a warm tea in early-stage seasonal discomfort patterns.',
      'Fresh or dried herb has a long history in topical wash and compress preparations.'
    ],
    preparations: [
      { type: preparationTaxonomy.infusion, part: 'Aerial parts', guidance: 'Steep covered 10-15 minutes to retain aromatics.' },
      { type: preparationTaxonomy.tincture, part: 'Flowering tops', guidance: 'Used for concentrated bitter-aromatic dosing.' },
      { type: preparationTaxonomy.topicalWash, part: 'Aerial parts', guidance: 'Use cooled infusion for topical applications.' }
    ],
    dosageNotes: ['Short-term use is typical; dose conservatively in sensitive constitutions.'],
    medicinalSources: ['Curated SacredSeed monograph notes'],
    safety: {
      safetySummary: 'Use caution with Asteraceae sensitivity and in pregnancy unless professionally advised.',
      safetyNotes: ['May trigger sensitivity in ragweed-family allergies.'],
      contraindications: [],
      cautions: ['Avoid prolonged high-dose use without practitioner guidance.'],
      interactions: ['Potential additive effect with anticoagulant therapy has been discussed in literature.'],
      pregnancyLactationNotes: 'Avoid concentrated use during pregnancy without individualized guidance.',
      toxicityNotes: null,
      safetyCategories: [safetyCategoryTaxonomy.caution, safetyCategoryTaxonomy.interaction, safetyCategoryTaxonomy.pregnancy]
    }
  },
  'mahonia-aquifolium': {
    medicinalActions: [medicinalActionTaxonomy.bitter, medicinalActionTaxonomy.alterative, medicinalActionTaxonomy.antimicrobial],
    herbalCategories: ['Root bitter tonic', 'Skin-focused alterative'],
    bodySystems: [bodySystemTaxonomy.digestive, bodySystemTaxonomy.hepatobiliary, bodySystemTaxonomy.integumentary],
    energetics: ['Cooling', 'Drying'],
    traditionalUses: [
      'Traditionally used as a root decoction for digestive and skin-associated constitutional patterns.',
      'Used in practitioner-supervised protocols where stronger bitters are indicated.'
    ],
    preparations: [
      { type: preparationTaxonomy.decoction, part: 'Root bark', guidance: 'Simmer gently 20-30 minutes for bitter extraction.' },
      { type: preparationTaxonomy.tincture, part: 'Root', guidance: 'Typically low-dose and practitioner-guided.' }
    ],
    dosageNotes: ['Use conservative dosing due to bitter alkaloid intensity.'],
    medicinalSources: ['Curated SacredSeed monograph notes'],
    safety: {
      safetySummary: 'Potent root medicine requiring medication-aware and pregnancy-aware supervision.',
      safetyNotes: ['Not generally used in pregnancy unless directed by a qualified clinician.'],
      contraindications: ['Avoid unsupervised use during pregnancy.'],
      cautions: ['Use caution in sensitive gastrointestinal constitutions.'],
      interactions: ['Review with medications involving hepatic metabolism.'],
      pregnancyLactationNotes: 'Avoid routine internal use during pregnancy and lactation unless supervised.',
      toxicityNotes: 'Use only properly identified root preparations at customary doses.',
      safetyCategories: [safetyCategoryTaxonomy.caution, safetyCategoryTaxonomy.interaction, safetyCategoryTaxonomy.pregnancy]
    }
  },
  'melissa-officinalis': {
    medicinalActions: [medicinalActionTaxonomy.nervine, medicinalActionTaxonomy.carminative, medicinalActionTaxonomy.aromatic],
    herbalCategories: ['Gentle calming herb', 'Digestive aromatic'],
    bodySystems: [bodySystemTaxonomy.nervous, bodySystemTaxonomy.digestive, bodySystemTaxonomy.immune],
    energetics: ['Cooling', 'Slightly drying'],
    traditionalUses: ['Used as a gentle evening tea for stress-related digestive tension and rest support.'],
    preparations: [
      { type: preparationTaxonomy.infusion, part: 'Leaf', guidance: 'Cover while steeping to preserve volatile oils.' },
      { type: preparationTaxonomy.tincture, part: 'Fresh leaf', guidance: 'Fresh extract preserves aromatic profile.' }
    ],
    dosageNotes: ['Often used in low-to-moderate repeated doses through the day.'],
    medicinalSources: ['Curated SacredSeed monograph notes'],
    safety: {
      safetySummary: 'Generally gentle; monitor sedation overlap in sensitive individuals.',
      safetyNotes: ['Observe response when combined with sedative therapies.'],
      contraindications: [],
      cautions: ['Use thyroid-aware supervision with prolonged concentrated use.'],
      interactions: ['Potential additive sedation with sedative medications.'],
      pregnancyLactationNotes: 'Tea-level use is common; concentrated dosing should be individualized.',
      toxicityNotes: null,
      safetyCategories: [safetyCategoryTaxonomy.caution, safetyCategoryTaxonomy.interaction]
    }
  },
  'sambucus-nigra': {
    medicinalActions: [medicinalActionTaxonomy.diaphoretic, medicinalActionTaxonomy.immuneSupportive, medicinalActionTaxonomy.antioxidant],
    herbalCategories: ['Seasonal immune herb', 'Warming berry protocol herb'],
    bodySystems: [bodySystemTaxonomy.immune, bodySystemTaxonomy.respiratory],
    energetics: ['Cooling flower / warming cooked berry context'],
    traditionalUses: ['Cooked elderberry preparations are a classic seasonal support approach in winter traditions.'],
    preparations: [
      { type: preparationTaxonomy.decoction, part: 'Berry', guidance: 'Simmer ripe dried berries before use.' },
      { type: preparationTaxonomy.syrup, part: 'Berry', guidance: 'Prepare from cooked decoction with stability-aware storage.' }
    ],
    dosageNotes: ['Use properly prepared ripe berry products only.'],
    medicinalSources: ['Curated SacredSeed monograph notes'],
    safety: {
      safetySummary: 'Use cooked ripe berries; avoid raw/unripe plant material.',
      safetyNotes: ['Unripe berries, leaves, and stems are not used for food-level preparations.'],
      contraindications: [],
      cautions: ['Use clinician guidance with autoimmune conditions or immune-modulating medications.'],
      interactions: ['Potential overlap with immune-modulating therapies.'],
      pregnancyLactationNotes: 'Food-level culinary use varies; medicinal doses should be individualized.',
      toxicityNotes: 'Improperly prepared material can cause gastrointestinal distress.',
      safetyCategories: [safetyCategoryTaxonomy.caution, safetyCategoryTaxonomy.interaction]
    }
  },
  'matricaria-chamomilla': {
    medicinalActions: [medicinalActionTaxonomy.carminative, medicinalActionTaxonomy.nervine, medicinalActionTaxonomy.antispasmodic],
    herbalCategories: ['Gentle digestive relaxant', 'Calming aromatic'],
    bodySystems: [bodySystemTaxonomy.digestive, bodySystemTaxonomy.nervous, bodySystemTaxonomy.integumentary],
    energetics: ['Cooling', 'Mildly drying'],
    traditionalUses: ['Used for digestive tension, evening calm, and topical soothing preparations.'],
    preparations: [
      { type: preparationTaxonomy.infusion, part: 'Flower', guidance: 'Steep covered for 8-12 minutes.' },
      { type: preparationTaxonomy.topicalCompress, part: 'Flower infusion', guidance: 'Apply cooled infusion as a compress.' }
    ],
    dosageNotes: ['Often used as 1-3 cups tea daily in gentle protocols.'],
    medicinalSources: ['Curated SacredSeed monograph notes'],
    safety: {
      safetySummary: 'Usually well tolerated; monitor ragweed-family sensitivity.',
      safetyNotes: ['Use caution in Asteraceae allergy patterns.'],
      contraindications: [],
      cautions: ['Observe additive sedation when used with sedative medications.'],
      interactions: ['Potential additive sedation with CNS depressants.'],
      pregnancyLactationNotes: 'Common tea herb, but concentrated extracts should be reviewed with care teams.',
      toxicityNotes: null,
      safetyCategories: [safetyCategoryTaxonomy.caution, safetyCategoryTaxonomy.interaction, safetyCategoryTaxonomy.pregnancy]
    }
  },
  'mentha-x-piperita': {
    medicinalActions: [medicinalActionTaxonomy.carminative, medicinalActionTaxonomy.antispasmodic, medicinalActionTaxonomy.aromatic],
    herbalCategories: ['Cooling digestive aromatic'],
    bodySystems: [bodySystemTaxonomy.digestive, bodySystemTaxonomy.respiratory, bodySystemTaxonomy.nervous],
    energetics: ['Cooling', 'Drying'],
    traditionalUses: ['Traditionally used for gas, fullness, and tension-associated digestive discomfort.'],
    preparations: [
      { type: preparationTaxonomy.infusion, part: 'Leaf', guidance: 'Short covered infusion preserves aromatics.' },
      { type: preparationTaxonomy.tincture, part: 'Leaf', guidance: 'Used for concentrated digestive support.' }
    ],
    dosageNotes: ['Essential oil products require professional dosing and dilution guidance.'],
    medicinalSources: ['Curated SacredSeed monograph notes'],
    safety: {
      safetySummary: 'Tea is generally well tolerated; concentrated oils require caution.',
      safetyNotes: ['Avoid undiluted essential oil internally.'],
      contraindications: ['Avoid concentrated essential oil in infants and very young children.'],
      cautions: ['May aggravate reflux in susceptible individuals.'],
      interactions: [],
      pregnancyLactationNotes: 'Tea-level use is common; concentrated products should be individualized.',
      toxicityNotes: 'Improper essential oil use increases adverse-effect risk.',
      safetyCategories: [safetyCategoryTaxonomy.caution, safetyCategoryTaxonomy.toxicity]
    }
  },
  'trifolium-pratense': {
    medicinalActions: [medicinalActionTaxonomy.alterative, medicinalActionTaxonomy.nutritive, medicinalActionTaxonomy.lymphatic],
    herbalCategories: ['Gentle alterative', 'Flowering tops tonic'],
    bodySystems: [bodySystemTaxonomy.lymphatic, bodySystemTaxonomy.integumentary, bodySystemTaxonomy.reproductive],
    energetics: ['Neutral', 'Moistening'],
    traditionalUses: ['Used in long-term skin and constitutional toning approaches in traditional Western practice.'],
    preparations: [
      { type: preparationTaxonomy.infusion, part: 'Flowering tops', guidance: 'Longer steep supports nutritive extraction.' },
      { type: preparationTaxonomy.tincture, part: 'Flowering tops', guidance: 'Used in low to moderate repeated doses.' }
    ],
    dosageNotes: ['Long-duration protocols should include medication-aware review.'],
    medicinalSources: ['Curated SacredSeed monograph notes'],
    safety: {
      safetySummary: 'Generally gentle; review with hormone-sensitive and anticoagulant contexts.',
      safetyNotes: ['Use individualized guidance for endocrine-sensitive conditions.'],
      contraindications: [],
      cautions: ['Professional review advised with anticoagulant therapies.'],
      interactions: ['Potential interaction considerations with anticoagulants and hormone-active medications.'],
      pregnancyLactationNotes: 'Use practitioner guidance for medicinal dosing in pregnancy and lactation.',
      toxicityNotes: null,
      safetyCategories: [safetyCategoryTaxonomy.caution, safetyCategoryTaxonomy.interaction, safetyCategoryTaxonomy.pregnancy]
    }
  },
  'taraxacum-officinale': {
    medicinalActions: [medicinalActionTaxonomy.bitter, medicinalActionTaxonomy.diuretic, medicinalActionTaxonomy.nutritive],
    herbalCategories: ['Bitter tonic food-herb', 'Liver-biliary support herb'],
    bodySystems: [bodySystemTaxonomy.digestive, bodySystemTaxonomy.hepatobiliary, bodySystemTaxonomy.urinary],
    energetics: ['Cooling', 'Drying (root)'],
    traditionalUses: ['Root and leaf are used differently in traditional protocols for digestion and elimination support.'],
    preparations: [
      { type: preparationTaxonomy.decoction, part: 'Root', guidance: 'Simmer root 15-20 minutes for bitter extraction.' },
      { type: preparationTaxonomy.infusion, part: 'Leaf', guidance: 'Use as a gentle diuretic and nutritive tea.' },
      { type: preparationTaxonomy.freshFood, part: 'Leaf', guidance: 'Young leaves used in culinary bitters.' }
    ],
    dosageNotes: ['Avoid strong bitter protocols in acute gallbladder obstruction contexts.'],
    medicinalSources: ['Curated SacredSeed monograph notes'],
    safety: {
      safetySummary: 'Generally food-safe; bitter effects require gallbladder-aware use.',
      safetyNotes: ['Monitor Asteraceae sensitivity and diuretic overlap.'],
      contraindications: ['Avoid unsupervised use in bile duct obstruction.'],
      cautions: ['Use conservative dosing in highly sensitive digestion.'],
      interactions: ['May add to effects of diuretic medications.'],
      pregnancyLactationNotes: 'Food-level use is common; medicinal dosing should be individualized.',
      toxicityNotes: null,
      safetyCategories: [safetyCategoryTaxonomy.caution, safetyCategoryTaxonomy.interaction]
    }
  },
  'plantago-major': {
    medicinalActions: [medicinalActionTaxonomy.demulcent, medicinalActionTaxonomy.vulnerary, medicinalActionTaxonomy.antiInflammatory],
    herbalCategories: ['Topical field herb', 'Mucosal soother'],
    bodySystems: [bodySystemTaxonomy.integumentary, bodySystemTaxonomy.digestive, bodySystemTaxonomy.respiratory],
    energetics: ['Cooling', 'Moistening'],
    traditionalUses: ['Fresh leaf is classically used topically; infusions and syrups support irritated tissues.'],
    preparations: [
      { type: preparationTaxonomy.freshPoultice, part: 'Fresh leaf', guidance: 'Apply clean bruised leaf topically in field contexts.' },
      { type: preparationTaxonomy.infusion, part: 'Leaf', guidance: 'Steep for demulcent support.' },
      { type: preparationTaxonomy.syrup, part: 'Leaf', guidance: 'Traditionally combined with honey for throat support.' }
    ],
    dosageNotes: ['Use only correctly identified plant material harvested from clean sites.'],
    medicinalSources: ['Curated SacredSeed monograph notes'],
    safety: {
      safetySummary: 'Generally well tolerated with clean and correctly identified material.',
      safetyNotes: ['Avoid harvesting from contaminated roadsides or sprayed lawns.'],
      contraindications: [],
      cautions: ['Monitor for rare individual hypersensitivity.'],
      interactions: [],
      pregnancyLactationNotes: 'Generally considered gentle; confirm medicinal plans with clinicians.',
      toxicityNotes: null,
      safetyCategories: [safetyCategoryTaxonomy.caution]
    }
  }
};
