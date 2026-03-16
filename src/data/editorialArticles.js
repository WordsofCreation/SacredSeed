/**
 * Editorial learning articles.
 *
 * Notes:
 * - Keep tone educational and non-diagnostic.
 * - Use tags, keywords, and related routes to improve internal discovery and SEO.
 */
export const editorialArticleDefinitions = [
  {
    slug: 'what-is-herbalism',
    title: 'What Is Herbalism? A Beginner’s Introduction to Herbal Medicine',
    summary:
      'Discover what herbalism is, how herbs are traditionally used, why preparation methods matter, and what beginners should know before starting their herbal education.',
    intro:
      'Herbalism is the study and practical use of plants in support of human well-being. It is more than a list of remedies: it is a relationship-based practice that combines observation, preparation skill, tradition, ecology, and safety awareness.',
    estimatedReadMinutes: 10,
    tags: [
      'what is herbalism',
      'herbalism for beginners',
      'herbal medicine basics',
      'beginner herbal education',
      'learning herbalism',
      'what do herbalists do'
    ],
    relatedCategories: ['Foundational literacy', 'Beginner herbal study', 'Herbal medicine basics'],
    relatedTags: ['intro to herbalism', 'preparation literacy', 'safety-first learning'],
    searchKeywords: [
      'what is herbalism',
      'herbalism for beginners',
      'herbal medicine basics',
      'learning herbalism',
      'beginner herbal education',
      'what do herbalists do'
    ],
    sections: [
      {
        heading: 'Herbalism Is More Than Natural Remedies',
        paragraphs: [
          'Many people first encounter herbalism through the phrase “natural remedies.” While remedies are part of the field, herbalism is much broader and includes identification, preparation methods, cultivation, sensory observation, and historical context.',
          'A thoughtful herbal approach asks not only what a plant is traditionally used for, but also which part is used, how it is prepared, what cautions apply, and whether the source is traditional, evidence-supported, or speculative.'
        ]
      },
      {
        heading: 'A Practice Rooted in Relationship',
        paragraphs: [
          'Herbalism is a relationship-based practice between people, plants, place, and lineage. Beginners learn by observing plants closely: scent, taste, growth habits, seasonality, and preparation differences.',
          'Depth matters. Learning a small set of gentle herbs well often builds stronger judgment than rushing through large lists of one-line claims.'
        ]
      },
      {
        heading: 'Herbalism and Herbal Medicine: What’s the Difference?',
        paragraphs: [
          'In daily conversation, herbalism and herbal medicine are often used interchangeably. A useful distinction is that herbal medicine usually refers specifically to health-supporting applications, while herbalism also includes craft, ecology, food traditions, and materia medica literacy.',
          'For beginners, this distinction helps frame herbal learning as a long-term discipline rather than quick symptom matching.'
        ]
      },
      {
        heading: 'What Herbalists Actually Study',
        paragraphs: [
          'Beginner herbal education usually includes botanical identification, Latin naming, materia medica structure, preparation methods, and safety fundamentals such as contraindications and dosage awareness.',
          'Responsible study also includes context: where knowledge comes from, which tradition it belongs to, and what limits apply when translating traditional knowledge into modern wellness settings.'
        ]
      },
      {
        heading: 'Preparation Is Part of the Knowledge',
        paragraphs: [
          'A plant cannot be separated from its preparation. A tea is different from a tincture, and a topical infused oil is different from internal use. Preparation changes concentration, extraction, and practical application.',
          'Beginners should understand core preparation categories early: tea, infusion, decoction, tincture, syrup, vinegar or oxymel, infused oil, salve, compress, and poultice.'
        ]
      },
      {
        heading: 'Tradition, Respect, and Responsible Learning',
        paragraphs: [
          'Herbal knowledge comes from living traditions, including Western folk herbalism, Ayurveda, Traditional Chinese Medicine, and Indigenous plant knowledge systems. These systems are not interchangeable and should be studied with respect for origin and language.',
          'A responsible beginner keeps curiosity high and certainty modest: distinguish traditional use from modern research, and both from unsupported claims.'
        ]
      },
      {
        heading: 'How Beginners Can Start Without Overwhelm',
        paragraphs: [
          'Start with five to ten gentle herbs and learn them through direct experience: taste, aroma, preparation, and careful note-taking. Build a personal materia medica notebook over time.',
          'Progress comes from consistency. Slow, grounded learning creates better safety judgment and stronger herbal fluency than trying to memorize everything at once.'
        ]
      },
      {
        heading: 'Key Takeaway',
        paragraphs: [
          'Herbalism is a disciplined, relationship-centered study of plants and people. It invites beginners to learn carefully, prepare responsibly, and treat both tradition and safety as foundational—not optional.'
        ]
      }
    ],
    disclaimer:
      'This article is for educational purposes only and is not medical advice. Consult a qualified professional for diagnosis, treatment decisions, pregnancy and breastfeeding questions, potential drug-herb interactions, and serious or persistent symptoms.',
    relatedHerbSlugs: [
      'matricaria-chamomilla',
      'urtica-dioica',
      'mentha-x-piperita',
      'melissa-officinalis',
      'zingiber-officinale',
      'calendula-officinalis',
      'rosa-rugosa'
    ],
    relatedSeasonalCollectionSlugs: ['spring-herbs', 'winter-tea-and-comfort-herbs'],
    relatedRoutes: [
      { label: 'How to Read Herb Profiles with Clinical Clarity', href: '#/articles/how-to-read-herb-profiles' },
      { label: 'Browse all editorial articles', href: '#/articles' },
      { label: 'Explore herbal learning pathways', href: '#/pathways' },
      { label: 'Study herbal preparations', href: '#/preparations' },
      { label: 'Browse herb collections', href: '#/collections' }
    ]
  },
  {
    slug: 'how-to-read-herb-profiles',
    title: 'How to Read Herb Profiles with Clinical Clarity',
    summary:
      'A practical guide for understanding taxonomy, actions, body systems, preparation options, and safety framing inside SacredSeed profiles.',
    intro:
      'Use this guide to read herb profiles responsibly, compare preparation options, and prioritize safety-first interpretation over one-line remedy shortcuts.',
    estimatedReadMinutes: 6,
    tags: ['materia medica basics', 'profile navigation', 'beginner herbal study'],
    relatedCategories: ['Foundational literacy', 'Beginner herbal study'],
    relatedTags: ['profile navigation', 'materia medica basics'],
    searchKeywords: ['read profile', 'how to study herbs', 'taxonomy basics'],
    sections: [
      {
        heading: 'Start with Identification and Scope',
        paragraphs: [
          'Check common and Latin names first. Confirm plant part and preparation context before interpreting any traditional action.'
        ]
      },
      {
        heading: 'Read Actions and Body Systems Together',
        paragraphs: [
          'Actions are descriptors, not diagnoses. Pair them with body-system context and preparation details to avoid overgeneralizing.'
        ]
      },
      {
        heading: 'Always Read Safety Before Application',
        paragraphs: [
          'Review contraindications, tolerability notes, and escalation boundaries before considering practical use.'
        ]
      }
    ],
    disclaimer:
      'Educational use only. Seek qualified care for diagnosis, medication interactions, and persistent symptoms.',
    relatedHerbSlugs: ['urtica-dioica', 'matricaria-chamomilla', 'taraxacum-officinale'],
    relatedSeasonalCollectionSlugs: ['spring-herbs'],
    relatedRoutes: [
      { label: 'What Is Herbalism?', href: '#/articles/what-is-herbalism' },
      { label: 'Learning pathways', href: '#/pathways' }
    ]
  }
];
