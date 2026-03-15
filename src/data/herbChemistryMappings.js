/**
 * Curated chemistry hints for resilient phytochemical lookups.
 * Keep this intentionally small and explicit so it can scale herb-by-herb.
 */
export const herbChemistryMappings = {
  'urtica-dioica': {
    compounds: [
      {
        name: 'Quercetin',
        category: 'Flavonoid',
        relevance: 'Traditionally associated with antioxidant and seasonal support discussions.'
      },
      {
        name: 'Rutin',
        category: 'Flavonoid glycoside',
        relevance: 'Commonly cited in nettle phytochemical overviews for vascular and antioxidant context.'
      },
      {
        name: 'Caffeic acid',
        category: 'Phenolic acid',
        relevance: 'Frequently referenced among nettle phenolic constituents.'
      },
      {
        name: 'Beta-sitosterol',
        category: 'Phytosterol',
        relevance: 'Discussed in root-focused phytochemistry literature.'
      }
    ]
  }
};
