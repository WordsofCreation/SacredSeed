/**
 * Shared medicinal/safety taxonomy helpers.
 *
 * Future integration point:
 * - Map controlled terms from external materia medica datasets into these labels.
 */
export const medicinalActionTaxonomy = {
  nutritive: 'Nutritive',
  diuretic: 'Diuretic',
  antiInflammatory: 'Anti-inflammatory',
  astringent: 'Astringent',
  trophorestorative: 'Trophorestorative',
  aromatic: 'Aromatic',
  diaphoretic: 'Diaphoretic',
  bitter: 'Bitter',
  alterative: 'Alterative',
  antimicrobial: 'Antimicrobial',
  nervine: 'Nervine',
  carminative: 'Carminative',
  antispasmodic: 'Antispasmodic',
  immuneSupportive: 'Immune supportive',
  antioxidant: 'Antioxidant',
  lymphatic: 'Lymphatic',
  demulcent: 'Demulcent',
  vulnerary: 'Vulnerary'
};

export const bodySystemTaxonomy = {
  urinary: 'Urinary system',
  musculoskeletal: 'Musculoskeletal system',
  immune: 'Immune system',
  integumentary: 'Skin and connective tissue',
  reproductive: 'Reproductive system',
  digestive: 'Digestive system',
  circulatory: 'Circulatory system',
  hepatobiliary: 'Hepatobiliary system',
  nervous: 'Nervous system',
  respiratory: 'Respiratory system',
  lymphatic: 'Lymphatic system'
};

export const preparationTaxonomy = {
  infusion: 'Infusion',
  decoction: 'Decoction',
  tincture: 'Tincture',
  freshFood: 'Fresh/cooked food herb',
  juice: 'Fresh expressed juice',
  topicalWash: 'Topical wash',
  syrup: 'Syrup',
  topicalCompress: 'Topical compress',
  freshPoultice: 'Fresh poultice'
};

export const safetyCategoryTaxonomy = {
  caution: 'Use with clinical caution',
  contraindication: 'Contraindication consideration',
  interaction: 'Potential interaction',
  pregnancy: 'Pregnancy/lactation consideration',
  toxicity: 'Toxicity profile'
};
