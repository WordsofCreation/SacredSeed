/**
 * Curated fallback monographs keep SacredSeed resilient if upstream APIs fail
 * or omit medicinally relevant details.
 *
 * The same unified herb object fields used in profile pages are also consumed by
 * the Materia Medica index via index-focused keys:
 * - slug
 * - summary
 * - medicinalActions
 * - bodySystems
 * - safetyCategory
 * - safetySummary
 */
export const herbFallbacks = {
  'urtica-dioica': {
    slug: 'urtica-dioica',
    commonName: 'Stinging Nettle',
    botanicalName: 'Urtica dioica',
    family: 'Urticaceae',
    synonyms: ['Common Nettle', 'Greater Nettle'],
    description:
      'A perennial flowering herb with opposite serrated leaves and stinging trichomes; traditionally recognized as both food and medicine.',
    summary:
      'A mineral-rich tonic herb used for nutritive support, urinary wellness, and seasonal inflammatory balance.',
    distribution:
      'Widely distributed across Europe, Asia, North Africa, and naturalized in many temperate regions globally.',
    habitat:
      'Nitrogen-rich soils, hedgerows, woodland edges, riverbanks, and disturbed ground.',
    medicinalProperties: [
      'Nutritive tonic rich in minerals and chlorophyll',
      'Traditionally used to support urinary tract health',
      'Historically used for seasonal allergy support and inflammatory discomfort'
    ],
    medicinalActions: ['Nutritive', 'Diuretic', 'Anti-inflammatory'],
    bodySystems: ['Urinary', 'Musculoskeletal', 'Immune'],
    preparations: ['Infusion (leaf)', 'Fresh juice', 'Cooked food herb', 'Root tincture'],
    safetyCategory: 'Moderate Caution',
    safetySummary:
      'Fresh plant hairs can irritate skin; review use alongside diuretic and blood-pressure therapies.',
    safetyNotes:
      'Fresh plant hairs may irritate skin. Use caution with diuretic therapies, antihypertensive agents, and where renal pathology requires physician supervision.',
    chemistryNotes:
      'Nettle chemistry contains flavonoids, phenolic acids, and phytosterols, with composition varying by plant part and extraction method.',
    chemistrySources: ['Curated fallback monograph'],
    activeCompounds: ['Quercetin', 'Rutin', 'Caffeic acid', 'Beta-sitosterol'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Urtica_dioica_001.jpg/640px-Urtica_dioica_001.jpg'
  },
  'matricaria-chamomilla': {
    slug: 'matricaria-chamomilla',
    commonName: 'German Chamomile',
    botanicalName: 'Matricaria chamomilla',
    family: 'Asteraceae',
    synonyms: ['Chamomilla', 'Wild Chamomile'],
    description:
      'An aromatic annual herb with daisy-like flowers valued in traditional European and Middle Eastern herbal practice.',
    summary:
      'A gentle aromatic known for digestive ease, relaxation support, and skin-soothing preparations.',
    distribution:
      'Native to Europe and Western Asia, now cultivated and naturalized in temperate regions worldwide.',
    habitat: 'Sunny meadows, field margins, and cultivated herb gardens.',
    medicinalProperties: [
      'Traditionally used for mild digestive tension and bloating',
      'Historically used as a calming herb for rest and nervous irritability',
      'Used topically for minor skin irritation and soothing compresses'
    ],
    medicinalActions: ['Carminative', 'Mild Sedative', 'Antispasmodic'],
    bodySystems: ['Digestive', 'Nervous', 'Integumentary'],
    preparations: ['Infusion', 'Glycerite', 'Topical compress'],
    safetyCategory: 'Generally Well Tolerated',
    safetySummary:
      'Usually well tolerated; caution in individuals with known sensitivity to Asteraceae species.',
    safetyNotes:
      'Use caution in those with ragweed-family allergies. Professional guidance is advised during pregnancy or when combining with sedative medications.',
    chemistryNotes:
      'Contains volatile oils and flavonoids including apigenin derivatives commonly discussed in chamomile literature.',
    chemistrySources: ['Curated fallback monograph'],
    activeCompounds: ['Apigenin', 'Bisabolol', 'Chamazulene'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Matricaria_chamomilla_120804.jpg/640px-Matricaria_chamomilla_120804.jpg'
  },
  'taraxacum-officinale': {
    slug: 'taraxacum-officinale',
    commonName: 'Dandelion',
    botanicalName: 'Taraxacum officinale',
    family: 'Asteraceae',
    synonyms: ['Lion’s Tooth', 'Blowball'],
    description:
      'A perennial herb with deeply toothed basal leaves and bright yellow composite flowers, common in disturbed habitats.',
    summary:
      'A classic bitter and nutritive herb used for digestive stimulation and gentle liver-biliary support.',
    distribution:
      'Native to Eurasia and now widespread throughout temperate regions globally.',
    habitat: 'Lawns, meadows, roadsides, and open disturbed soils.',
    medicinalProperties: [
      'Traditional bitter tonic to stimulate digestion',
      'Leaf used as a gentle diuretic food-medicine',
      'Root preparations historically associated with liver and biliary support'
    ],
    medicinalActions: ['Bitter Tonic', 'Cholagogue', 'Diuretic'],
    bodySystems: ['Digestive', 'Hepatobiliary', 'Urinary'],
    preparations: ['Infusion (leaf)', 'Decoction (root)', 'Tincture', 'Food herb'],
    safetyCategory: 'General Caution',
    safetySummary:
      'Generally food-safe, though bitter and biliary effects warrant caution in obstructive gallbladder conditions.',
    safetyNotes:
      'Use caution with known bile duct obstruction, active gallbladder disease, or Asteraceae allergy. Monitor with diuretic therapies.',
    chemistryNotes:
      'Contains sesquiterpene lactones, triterpenes, and phenolic compounds; profile differs by root versus leaf.',
    chemistrySources: ['Curated fallback monograph'],
    activeCompounds: ['Taraxasterol', 'Chicoric acid', 'Luteolin'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/TaraxacumOfficinaleSeed.jpg/640px-TaraxacumOfficinaleSeed.jpg'
  }
};
