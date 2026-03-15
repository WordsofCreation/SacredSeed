import { herbCategoryTaxonomy } from './herbCategories.js';

/**
 * Slug-to-category mapping for the materia medica index and herb profile educational tags.
 *
 * Batch expansion note:
 * - Add the herb slug here and map one or more taxonomy labels.
 * - Keep labels sourced from herbCategoryTaxonomy for consistency.
 */
export const herbCategoryAssignments = {
  'urtica-dioica': [
    herbCategoryTaxonomy.nutritiveHerbs,
    herbCategoryTaxonomy.teaFriendlyHerbs,
    herbCategoryTaxonomy.regionalPnw
  ],
  'achillea-millefolium': [
    herbCategoryTaxonomy.aromaticHerbs,
    herbCategoryTaxonomy.digestiveHerbs,
    herbCategoryTaxonomy.skinSupportHerbs,
    herbCategoryTaxonomy.regionalPnw,
    herbCategoryTaxonomy.teaFriendlyHerbs
  ],
  'mahonia-aquifolium': [
    herbCategoryTaxonomy.bitterHerbs,
    herbCategoryTaxonomy.skinSupportHerbs,
    herbCategoryTaxonomy.digestiveHerbs,
    herbCategoryTaxonomy.regionalPnw
  ],
  'melissa-officinalis': [
    herbCategoryTaxonomy.calmingHerbs,
    herbCategoryTaxonomy.digestiveHerbs,
    herbCategoryTaxonomy.aromaticHerbs,
    herbCategoryTaxonomy.teaFriendlyHerbs
  ],
  'sambucus-nigra': [
    herbCategoryTaxonomy.immuneSupportHerbs,
    herbCategoryTaxonomy.respiratorySupportHerbs,
    herbCategoryTaxonomy.teaFriendlyHerbs
  ],
  'matricaria-chamomilla': [
    herbCategoryTaxonomy.calmingHerbs,
    herbCategoryTaxonomy.digestiveHerbs,
    herbCategoryTaxonomy.aromaticHerbs,
    herbCategoryTaxonomy.skinSupportHerbs,
    herbCategoryTaxonomy.teaFriendlyHerbs
  ],
  'mentha-x-piperita': [
    herbCategoryTaxonomy.digestiveHerbs,
    herbCategoryTaxonomy.aromaticHerbs,
    herbCategoryTaxonomy.respiratorySupportHerbs,
    herbCategoryTaxonomy.teaFriendlyHerbs
  ],
  'trifolium-pratense': [
    herbCategoryTaxonomy.nutritiveHerbs,
    herbCategoryTaxonomy.skinSupportHerbs,
    herbCategoryTaxonomy.teaFriendlyHerbs
  ],
  'taraxacum-officinale': [
    herbCategoryTaxonomy.nutritiveHerbs,
    herbCategoryTaxonomy.bitterHerbs,
    herbCategoryTaxonomy.digestiveHerbs,
    herbCategoryTaxonomy.teaFriendlyHerbs
  ],
  'plantago-major': [
    herbCategoryTaxonomy.skinSupportHerbs,
    herbCategoryTaxonomy.respiratorySupportHerbs,
    herbCategoryTaxonomy.digestiveHerbs,
    herbCategoryTaxonomy.regionalPnw
  ],
  'scutellaria-lateriflora': [
    herbCategoryTaxonomy.calmingHerbs,
    herbCategoryTaxonomy.teaFriendlyHerbs
  ],
  'calendula-officinalis': [
    herbCategoryTaxonomy.skinSupportHerbs,
    herbCategoryTaxonomy.teaFriendlyHerbs,
    herbCategoryTaxonomy.immuneSupportHerbs
  ],
  'althaea-officinalis': [
    herbCategoryTaxonomy.digestiveHerbs,
    herbCategoryTaxonomy.respiratorySupportHerbs,
    herbCategoryTaxonomy.skinSupportHerbs,
    herbCategoryTaxonomy.teaFriendlyHerbs
  ],
  'ocimum-tenuiflorum': [
    herbCategoryTaxonomy.calmingHerbs,
    herbCategoryTaxonomy.aromaticHerbs,
    herbCategoryTaxonomy.immuneSupportHerbs,
    herbCategoryTaxonomy.respiratorySupportHerbs,
    herbCategoryTaxonomy.teaFriendlyHerbs
  ],
  'lavandula-angustifolia': [
    herbCategoryTaxonomy.calmingHerbs,
    herbCategoryTaxonomy.aromaticHerbs,
    herbCategoryTaxonomy.skinSupportHerbs,
    herbCategoryTaxonomy.teaFriendlyHerbs,
    herbCategoryTaxonomy.regionalPnw
  ],
  'rosa-rugosa': [
    herbCategoryTaxonomy.calmingHerbs,
    herbCategoryTaxonomy.aromaticHerbs,
    herbCategoryTaxonomy.skinSupportHerbs,
    herbCategoryTaxonomy.teaFriendlyHerbs,
    herbCategoryTaxonomy.regionalPnw
  ],
  'zingiber-officinale': [
    herbCategoryTaxonomy.digestiveHerbs,
    herbCategoryTaxonomy.immuneSupportHerbs,
    herbCategoryTaxonomy.respiratorySupportHerbs,
    herbCategoryTaxonomy.aromaticHerbs,
    herbCategoryTaxonomy.teaFriendlyHerbs
  ],
  'foeniculum-vulgare': [
    herbCategoryTaxonomy.digestiveHerbs,
    herbCategoryTaxonomy.aromaticHerbs,
    herbCategoryTaxonomy.respiratorySupportHerbs,
    herbCategoryTaxonomy.teaFriendlyHerbs
  ],
  'echinacea-purpurea': [
    herbCategoryTaxonomy.immuneSupportHerbs,
    herbCategoryTaxonomy.respiratorySupportHerbs,
    herbCategoryTaxonomy.teaFriendlyHerbs
  ],
  'avena-sativa': [
    herbCategoryTaxonomy.nutritiveHerbs,
    herbCategoryTaxonomy.calmingHerbs,
    herbCategoryTaxonomy.teaFriendlyHerbs,
    herbCategoryTaxonomy.regionalPnw
  ],
  'verbascum-thapsus': [
    herbCategoryTaxonomy.respiratorySupportHerbs,
    herbCategoryTaxonomy.skinSupportHerbs,
    herbCategoryTaxonomy.teaFriendlyHerbs,
    herbCategoryTaxonomy.regionalPnw
  ],
  'withania-somnifera': [
    herbCategoryTaxonomy.calmingHerbs,
    herbCategoryTaxonomy.immuneSupportHerbs
  ],
  'arctium-lappa': [
    herbCategoryTaxonomy.digestiveHerbs,
    herbCategoryTaxonomy.skinSupportHerbs,
    herbCategoryTaxonomy.nutritiveHerbs
  ],
  'silybum-marianum': [
    herbCategoryTaxonomy.digestiveHerbs,
    herbCategoryTaxonomy.bitterHerbs
  ],
  'hibiscus-sabdariffa': [
    herbCategoryTaxonomy.nutritiveHerbs,
    herbCategoryTaxonomy.teaFriendlyHerbs
  ],
  'thymus-vulgaris': [
    herbCategoryTaxonomy.aromaticHerbs,
    herbCategoryTaxonomy.respiratorySupportHerbs,
    herbCategoryTaxonomy.digestiveHerbs,
    herbCategoryTaxonomy.teaFriendlyHerbs
  ],
  'salvia-officinalis': [
    herbCategoryTaxonomy.aromaticHerbs,
    herbCategoryTaxonomy.digestiveHerbs,
    herbCategoryTaxonomy.respiratorySupportHerbs,
    herbCategoryTaxonomy.teaFriendlyHerbs
  ],
  'glycyrrhiza-glabra': [
    herbCategoryTaxonomy.digestiveHerbs,
    herbCategoryTaxonomy.respiratorySupportHerbs,
    herbCategoryTaxonomy.immuneSupportHerbs
  ],
  'rubus-idaeus': [
    herbCategoryTaxonomy.nutritiveHerbs,
    herbCategoryTaxonomy.teaFriendlyHerbs,
    herbCategoryTaxonomy.regionalPnw
  ],
  'tilia-cordata': [
    herbCategoryTaxonomy.calmingHerbs,
    herbCategoryTaxonomy.respiratorySupportHerbs,
    herbCategoryTaxonomy.teaFriendlyHerbs
  ]
};
