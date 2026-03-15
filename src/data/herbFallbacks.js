/**
 * Curated fallback monographs keep SacredSeed resilient if upstream APIs fail
 * or omit medicinally relevant details.
 */
export const herbFallbacks = {
  'urtica-dioica': {
    commonName: 'Stinging Nettle',
    botanicalName: 'Urtica dioica',
    family: 'Urticaceae',
    synonyms: ['Common Nettle', 'Greater Nettle'],
    description:
      'A perennial flowering herb with opposite serrated leaves and stinging trichomes; traditionally recognized as both food and medicine.',
    distribution:
      'Widely distributed across Europe, Asia, North Africa, and naturalized in many temperate regions globally.',
    habitat:
      'Nitrogen-rich soils, hedgerows, woodland edges, riverbanks, and disturbed ground.',
    medicinalProperties: [
      'Nutritive tonic rich in minerals and chlorophyll',
      'Traditionally used to support urinary tract health',
      'Historically used for seasonal allergy support and inflammatory discomfort'
    ],
    preparations: ['Infusion (leaf)', 'Fresh juice', 'Cooked food herb', 'Root tincture'],
    safetyNotes:
      'Fresh plant hairs may irritate skin. Use caution with diuretic therapies, antihypertensive agents, and where renal pathology requires physician supervision.',
    chemistryNotes:
      'Nettle chemistry contains flavonoids, phenolic acids, and phytosterols, with composition varying by plant part and extraction method.',
    chemistrySources: ['Curated fallback monograph'],
    activeCompounds: ['Quercetin', 'Rutin', 'Caffeic acid', 'Beta-sitosterol'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Urtica_dioica_001.jpg/640px-Urtica_dioica_001.jpg'
  }
};
