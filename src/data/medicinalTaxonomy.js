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
  trophorestorative: 'Trophorestorative'
};

export const bodySystemTaxonomy = {
  urinary: 'Urinary system',
  musculoskeletal: 'Musculoskeletal system',
  immune: 'Immune system',
  integumentary: 'Skin and connective tissue',
  reproductive: 'Reproductive system'
};

export const preparationTaxonomy = {
  infusion: 'Infusion',
  decoction: 'Decoction',
  tincture: 'Tincture',
  freshFood: 'Fresh/cooked food herb',
  juice: 'Fresh expressed juice'
};

export const safetyCategoryTaxonomy = {
  caution: 'Use with clinical caution',
  contraindication: 'Contraindication consideration',
  interaction: 'Potential interaction',
  pregnancy: 'Pregnancy/lactation consideration',
  toxicity: 'Toxicity profile'
};
