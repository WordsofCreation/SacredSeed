/**
 * Beginner-focused learning pathways.
 *
 * Add future pathways by:
 * 1) Creating a unique slug and educational goal.
 * 2) Keeping the `sequence` array ordered for a guided journey.
 * 3) Referencing existing routes and herb slugs for modular reuse.
 */
export const learningPathwayDefinitions = [
  {
    slug: 'beginners-first-5-herbs',
    title: "Beginner's First 5 Herbs",
    intro:
      'A welcoming first route into SacredSeed for learners who want to build confidence with a small, practical herb set.',
    educationalGoal:
      'Understand five foundational herbs, how to read profile sections, and how to connect herbs to simple preparation choices.',
    difficulty: 'Beginner',
    estimatedDuration: '45-60 minutes',
    sequence: [
      {
        kind: 'site',
        title: 'How to use SacredSeed',
        description: 'Open the index and notice how actions, systems, categories, and safety framing are organized.',
        href: '#/materia-medica'
      },
      { kind: 'herb', herbSlug: 'matricaria-chamomilla' },
      { kind: 'herb', herbSlug: 'melissa-officinalis' },
      { kind: 'herb', herbSlug: 'urtica-dioica' },
      { kind: 'herb', herbSlug: 'thymus-vulgaris' },
      { kind: 'herb', herbSlug: 'hibiscus-sabdariffa' },
      {
        kind: 'site',
        title: 'Try a foundational blend',
        description: 'Review tea and infusion examples to connect herb profiles with practical preparation formats.',
        href: '#/preparations'
      }
    ],
    relatedLinks: [
      { label: 'All beginner pathways', href: '#/pathways' },
      { label: 'Browse collections', href: '#/collections' }
    ]
  },
  {
    slug: 'everyday-herbal-teas',
    title: 'Everyday Herbal Teas',
    intro:
      'Learn tea-friendly herbs through gentle, practical study that supports daily routines and flavor-based learning.',
    educationalGoal:
      'Compare aromatic, nutritive, and soothing tea herbs and match each herb to a clear preparation context.',
    difficulty: 'Beginner',
    estimatedDuration: '35-50 minutes',
    sequence: [
      { kind: 'herb', herbSlug: 'matricaria-chamomilla' },
      { kind: 'herb', herbSlug: 'melissa-officinalis' },
      { kind: 'herb', herbSlug: 'tilia-cordata' },
      { kind: 'herb', herbSlug: 'hibiscus-sabdariffa' },
      { kind: 'herb', herbSlug: 'rubus-idaeus' },
      {
        kind: 'site',
        title: 'Preparation library tea guides',
        description: 'Use the preparation library to reinforce infusion timing and blend structure.',
        href: '#/preparations'
      }
    ],
    relatedLinks: [
      { label: 'Tea-friendly collections', href: '#/collections/pacific-northwest-tea-herbs' },
      { label: 'Materia Medica filters', href: '#/materia-medica' }
    ]
  },
  {
    slug: 'gentle-herbs-daily-wellness',
    title: 'Gentle Herbs for Daily Wellness',
    intro:
      'A soft-entry pathway focused on herbs often used in food-level, tea-level, and long-view wellness routines.',
    educationalGoal:
      'Recognize gentle daily-use patterns, including nutritive support, stress support, and respiratory comfort context.',
    difficulty: 'Beginner',
    estimatedDuration: '40-55 minutes',
    sequence: [
      { kind: 'herb', herbSlug: 'urtica-dioica' },
      { kind: 'herb', herbSlug: 'avena-sativa' },
      { kind: 'herb', herbSlug: 'rubus-idaeus' },
      { kind: 'herb', herbSlug: 'verbascum-thapsus' },
      { kind: 'herb', herbSlug: 'calendula-officinalis' },
      {
        kind: 'site',
        title: 'Calm and restore collection',
        description: 'Continue with evening-support formulas and gentle preparation patterns.',
        href: '#/preparations'
      }
    ],
    relatedLinks: [
      { label: 'Nutritive herb collection', href: '#/collections/nutritive-herbs' },
      { label: 'Calming herb collection', href: '#/collections/calming-herbs' }
    ]
  },
  {
    slug: 'materia-medica-basics',
    title: 'Learning the Materia Medica Basics',
    intro:
      'A skill-building route that teaches how to interpret herb profile fields and use them for better herbal literacy.',
    educationalGoal:
      'Practice reading medicinal actions, body systems, preparations, categories, and safety notes with confidence.',
    difficulty: 'Beginner+',
    estimatedDuration: '50-70 minutes',
    sequence: [
      {
        kind: 'site',
        title: 'Start with the index taxonomy',
        description: 'Scan filters to understand SacredSeed taxonomy vocabulary and compare herbs by structure.',
        href: '#/materia-medica'
      },
      { kind: 'herb', herbSlug: 'taraxacum-officinale' },
      { kind: 'herb', herbSlug: 'foeniculum-vulgare' },
      { kind: 'herb', herbSlug: 'silybum-marianum' },
      { kind: 'herb', herbSlug: 'glycyrrhiza-glabra' },
      {
        kind: 'site',
        title: 'Cross-check with collections',
        description: 'Open a collection to see how grouped herbs reinforce taxonomy learning.',
        href: '#/collections'
      }
    ],
    relatedLinks: [
      { label: 'Preparation methods', href: '#/preparations' },
      { label: 'About SacredSeed methodology', href: '#/about' }
    ]
  },
  {
    slug: 'pacific-northwest-beginner-path',
    title: 'Pacific Northwest Beginner Herb Path',
    intro:
      'A place-based pathway for learners exploring herbs commonly studied in Pacific Northwest gardens and field contexts.',
    educationalGoal:
      'Develop regional literacy by pairing habitat-aware herbs with gentle preparations and cautious sourcing practices.',
    difficulty: 'Beginner',
    estimatedDuration: '40-60 minutes',
    sequence: [
      { kind: 'herb', herbSlug: 'urtica-dioica' },
      { kind: 'herb', herbSlug: 'achillea-millefolium' },
      { kind: 'herb', herbSlug: 'rosa-rugosa' },
      { kind: 'herb', herbSlug: 'verbascum-thapsus' },
      { kind: 'herb', herbSlug: 'rubus-idaeus' },
      {
        kind: 'site',
        title: 'Regional collection follow-up',
        description: 'Continue with regional tea collection context and preparation references.',
        href: '#/collections/pacific-northwest-tea-herbs'
      }
    ],
    relatedLinks: [
      { label: 'Pacific Northwest tea herbs', href: '#/collections/pacific-northwest-tea-herbs' },
      { label: 'Materia Medica index', href: '#/materia-medica' }
    ]
  }
];
