/**
 * Editorial learning articles.
 *
 * Future extension:
 * - Add `searchKeywords` for nuanced discoverability terms.
 * - Use `relatedHerbSlugs` and `featuredConnections` to pin intentional links.
 */
export const editorialArticleDefinitions = [
  {
    slug: 'how-to-read-herb-profiles',
    title: 'How to Read Herb Profiles with Clinical Clarity',
    summary:
      'A practical guide for understanding taxonomy, actions, body systems, preparation options, and safety framing inside SacredSeed profiles.',
    body:
      'This educational article explains how to interpret profile structure and compare herbs responsibly. It focuses on practical reading patterns rather than therapeutic claims.',
    relatedHerbSlugs: ['urtica-dioica', 'matricaria-chamomilla', 'taraxacum-officinale'],
    relatedCollectionSlugs: ['nutritive-herbs', 'calming-herbs'],
    relatedPreparationIds: ['nettle-infusion', 'calming-evening-tea'],
    relatedPathwaySlugs: ['materia-medica-basics'],
    relatedCategories: ['Foundational literacy', 'Beginner herbal study'],
    relatedTags: ['profile navigation', 'materia medica basics'],
    searchKeywords: ['read profile', 'how to study herbs', 'taxonomy basics']
  },
  {
    slug: 'seasonal-herbal-routines-for-beginners',
    title: 'Seasonal Herbal Routines for Beginners',
    summary:
      'Learn how to pair gentle nutritive herbs, aromatic teas, and simple formulas across seasonal transitions.',
    body:
      'This beginner article highlights rhythm, consistency, and safety-first preparation choices for everyday learning. It connects herbal actions to practical routines.',
    relatedHerbSlugs: ['urtica-dioica', 'sambucus-nigra', 'melissa-officinalis', 'rosa-rugosa'],
    relatedCollectionSlugs: ['immune-support-herbs', 'pacific-northwest-tea-herbs'],
    relatedPreparationIds: ['seasonal-immune-support-tea', 'nutritive-mineral-tea'],
    relatedPathwaySlugs: ['gentle-herbs-daily-wellness', 'everyday-herbal-teas'],
    relatedCategories: ['Seasonal wellness', 'Tea traditions'],
    relatedTags: ['beginner routines', 'seasonal support'],
    searchKeywords: ['winter tea', 'seasonal routines', 'beginner herbal routine']
  }
];
