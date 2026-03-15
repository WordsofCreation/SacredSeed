/**
 * Foundational editorial article content for SacredSeed.
 *
 * Future article authoring notes:
 * 1) Add a unique `slug`, polished intro, and section blocks.
 * 2) Use `relatedHerbSlugs` / `relatedSeasonalCollectionSlugs` for auto-linking.
 * 3) Keep claims educational, safety-aware, and non-diagnostic.
 */
export const editorialArticleDefinitions = [
  {
    slug: 'how-to-start-learning-herbs',
    title: 'How to Start Learning Herbs',
    summary:
      'A practical orientation for beginning herbal study with clear next steps, responsible habits, and a sustainable learning rhythm.',
    intro:
      'Herbal learning is most effective when it is steady, grounded, and connected to real plants over time. This guide gives a beginner-friendly starting framework.',
    estimatedReadMinutes: 8,
    tags: ['Beginner', 'Study Methods'],
    sections: [
      {
        heading: 'Begin with five to ten foundational herbs',
        paragraphs: [
          'Start small. Choose a handful of herbs you can encounter repeatedly in tea, tincture, culinary, or field contexts. Repetition builds literacy faster than trying to memorize an entire materia medica at once.',
          'As you study each herb, note basic identity, traditional actions, safety framing, common preparations, and how the herb feels in lived practice.'
        ]
      },
      {
        heading: 'Use a layered study loop',
        paragraphs: [
          'A helpful rhythm is read → observe → prepare → reflect. Read profile information, observe the plant form or dried herb, prepare it in a simple format, and record your notes.',
          'Over time, this loop helps connect botanical knowledge with preparation skill and personal understanding without overreliance on abstract lists.'
        ]
      },
      {
        heading: 'Build safety habits from day one',
        paragraphs: [
          'Treat contraindications, medication interactions, and dosage guidance as core study material, not optional footnotes. Responsible herbalism pairs curiosity with caution.',
          'If you have a health condition, are pregnant or nursing, or use prescription medication, work with a qualified clinician for individualized guidance.'
        ]
      }
    ],
    relatedHerbSlugs: ['matricaria-chamomilla', 'urtica-dioica', 'melissa-officinalis'],
    relatedSeasonalCollectionSlugs: ['spring-herbs'],
    relatedRoutes: [
      { label: 'Beginner Learning Pathways', href: '#/pathways' },
      { label: 'Browse the Materia Medica', href: '#/materia-medica' }
    ],
    disclaimer:
      'This article is educational and does not provide individualized medical diagnosis or treatment recommendations.'
  },
  {
    slug: 'what-is-a-materia-medica',
    title: 'What Is a Materia Medica?',
    summary:
      'Understand the purpose of a materia medica and how to use it as a practical reference rather than a static encyclopedia.',
    intro:
      'A materia medica is a structured reference of medicinal substances—in this context, medicinal plants—used to support safe and thoughtful herbal study.',
    estimatedReadMinutes: 7,
    tags: ['Foundations', 'Materia Medica'],
    sections: [
      {
        heading: 'A living reference, not just a list',
        paragraphs: [
          'Traditional and contemporary materia medica texts describe plant identity, actions, preparations, and cautions. The best systems are designed to be revisited as knowledge evolves.',
          'In practice, a materia medica supports comparison: how one herb differs from another, which preparation forms are common, and where safety considerations overlap.'
        ]
      },
      {
        heading: 'Core fields to pay attention to',
        paragraphs: [
          'When reading any entry, focus on botanical identity, main actions, body-system context, preparation methods, and safety notes. These are the structural anchors that prevent superficial interpretation.',
          'Source transparency also matters. Knowing where data originates helps learners distinguish traditional use, modern research summaries, and editorial interpretation.'
        ]
      },
      {
        heading: 'How SacredSeed approaches materia medica design',
        paragraphs: [
          'SacredSeed uses a unified herb object and category taxonomy so each profile can be explored from multiple angles: thematic collections, pathways, and preparation-centered learning.',
          'This architecture keeps study flexible while preserving rigorous structure for long-term knowledge building.'
        ]
      }
    ],
    relatedHerbSlugs: ['taraxacum-officinale', 'foeniculum-vulgare'],
    relatedSeasonalCollectionSlugs: ['winter-tea-and-comfort-herbs'],
    relatedRoutes: [{ label: 'Open Materia Medica Index', href: '#/materia-medica' }],
    disclaimer:
      'Materia medica references support education and clinical reasoning, but they do not replace individualized care decisions.'
  },
  {
    slug: 'herbal-tea-vs-infusion-vs-decoction',
    title: 'Herbal Tea vs Infusion vs Decoction',
    summary:
      'Learn the practical differences between tea, infusion, and decoction so you can choose preparation methods with greater confidence.',
    intro:
      'These terms are often used interchangeably, but they point to different extraction styles. Understanding those differences improves both safety and effectiveness in daily practice.',
    estimatedReadMinutes: 6,
    tags: ['Preparations', 'Beginner'],
    sections: [
      {
        heading: 'Herbal tea: the broad everyday term',
        paragraphs: [
          'In common use, herbal tea usually means a hot-water extraction intended for immediate drinking. It is often gentle, short-steeped, and sensory-forward.',
          'Tea language is useful for accessibility, but precision becomes important when studying stronger or long-steeped preparations.'
        ]
      },
      {
        heading: 'Infusion: steeping soft plant material',
        paragraphs: [
          'Infusions typically involve leaves, flowers, and other softer plant parts steeped in hot water for a moderate to extended period.',
          'Long infusions are especially common for nutritive herbs, where sustained contact with water may extract a broader mineral profile.'
        ]
      },
      {
        heading: 'Decoction: simmering tougher materials',
        paragraphs: [
          'Decoctions are usually used for roots, bark, berries, or seeds that benefit from gentle simmering. The added heat and time support extraction of denser plant material.',
          'Decoctions can be stronger and more concentrated, so dosage and safety notes deserve extra attention.'
        ]
      }
    ],
    relatedHerbSlugs: ['urtica-dioica', 'mahonia-aquifolium', 'zingiber-officinale'],
    relatedSeasonalCollectionSlugs: ['summer-cooling-herbs', 'autumn-immune-support-herbs'],
    relatedRoutes: [{ label: 'Preparation Library', href: '#/preparations' }],
    disclaimer:
      'Preparation methods vary by tradition and practitioner; always adapt to herb-specific safety guidance.'
  },
  {
    slug: 'how-to-read-an-herb-profile',
    title: 'How to Read an Herb Profile',
    summary:
      'A field guide to understanding profile sections so you can turn information into practical herbal literacy.',
    intro:
      'A strong herb profile contains more than benefits. It organizes identity, preparation context, and safety framing so learners can make careful, informed decisions.',
    estimatedReadMinutes: 7,
    tags: ['Beginner', 'Profile Literacy'],
    sections: [
      {
        heading: 'Start with identity and context',
        paragraphs: [
          'Read the common and botanical names together, then scan family and distribution context. Correct plant identity is the foundation of safe practice.',
          'Synonyms and related species notes help prevent confusion when names vary across traditions or suppliers.'
        ]
      },
      {
        heading: 'Interpret actions and systems as patterns',
        paragraphs: [
          'Medicinal actions and body-system tags are best read as patterns, not promises. They indicate how an herb is often discussed, not guaranteed outcomes.',
          'Compare multiple herbs in the same category to understand nuance: warming vs cooling, moistening vs drying, gentle vs stimulating.'
        ]
      },
      {
        heading: 'Never skip safety and source notes',
        paragraphs: [
          'Safety summaries, contraindications, and interaction flags should be read before preparation decisions. Build this into your workflow every time.',
          'Finally, review source attribution so you can weigh traditional references, modern data, and editorial synthesis appropriately.'
        ]
      }
    ],
    relatedHerbSlugs: ['echinacea-purpurea', 'glycyrrhiza-glabra', 'calendula-officinalis'],
    relatedSeasonalCollectionSlugs: ['spring-herbs'],
    relatedRoutes: [
      { label: 'Materia Medica Index', href: '#/materia-medica' },
      { label: 'What Is a Materia Medica?', href: '#/articles/what-is-a-materia-medica' }
    ],
    disclaimer:
      'Profile interpretation supports education and should be paired with qualified advice for individual care needs.'
  },
  {
    slug: 'building-a-simple-home-herbal-practice',
    title: 'Building a Simple Home Herbal Practice',
    summary:
      'Create a calm, realistic home herbal routine with a small toolkit, clear boundaries, and sustainable study habits.',
    intro:
      'A home practice does not need to be complex. The most resilient routines are simple, seasonal, and rooted in herbs you understand well.',
    estimatedReadMinutes: 9,
    tags: ['Home Practice', 'Beginner+'],
    sections: [
      {
        heading: 'Choose a focused starter toolkit',
        paragraphs: [
          'Begin with a few tea-friendly and kitchen-friendly herbs, a notebook, jars, a kettle, and basic measuring tools. Simplicity improves consistency.',
          'Store herbs clearly with date labels and source notes so your practice remains organized and traceable.'
        ]
      },
      {
        heading: 'Work seasonally and intentionally',
        paragraphs: [
          'Seasonal shifts are an ideal way to structure your routine: mineral and bitter support in spring, cooling hydration in summer, resilience habits in autumn, and restorative teas in winter.',
          'Use one or two formulas at a time and evaluate response carefully before adding complexity.'
        ]
      },
      {
        heading: 'Define your boundaries of care',
        paragraphs: [
          'A home herbal practice supports everyday wellness literacy, not emergency care. Know when to refer to licensed medical professionals.',
          'When in doubt, choose gentler preparations, lower doses, and better documentation rather than experimentation without guidance.'
        ]
      }
    ],
    relatedHerbSlugs: ['thymus-vulgaris', 'avena-sativa', 'sambucus-nigra'],
    relatedSeasonalCollectionSlugs: ['autumn-immune-support-herbs', 'winter-tea-and-comfort-herbs'],
    relatedRoutes: [
      { label: 'Seasonal Collections', href: '#/seasons' },
      { label: 'Learning Pathways', href: '#/pathways' }
    ],
    disclaimer:
      'Home herbal routines are educational wellness practices and should not replace professional diagnosis or treatment.'
  }
];
