export const astronomyLearningPaths = [
  {
    slug: 'start-here',
    title: 'Start here: a beginner route into Heavens',
    intro:
      'This guided route gives first-time visitors a clear arc: learn to look, learn to compare, and learn how evidence becomes astronomy.',
    estimatedDuration: '45–60 minutes',
    difficulty: 'Beginner',
    sections: [
      {
        title: 'Step 1 · Meet a bright benchmark star',
        body: 'Begin with Sirius to see how one familiar object can open up color, brightness, spectra, and binary systems.',
        links: ['sirius', 'understanding-starlight']
      },
      {
        title: 'Step 2 · Learn how stars differ',
        body: 'Compare Sirius with Betelgeuse and Vega to understand temperature, classification, and why appearance can mislead.',
        links: ['betelgeuse', 'vega', 'stellar-classification']
      },
      {
        title: 'Step 3 · See how astronomers build confidence',
        body: 'Finish with the methods page to connect observation, measurement, and research into one coherent picture.',
        links: ['how-astronomers-know']
      }
    ],
    relatedObjects: ['sirius', 'betelgeuse', 'vega'],
    relatedTopics: ['understanding-starlight', 'stellar-classification', 'how-astronomers-know']
  },
  {
    slug: 'reading-starlight',
    title: 'Understanding starlight',
    intro:
      'A focused pathway on how astronomers extract information from the light that reaches our telescopes.',
    estimatedDuration: '30–40 minutes',
    difficulty: 'Beginner',
    sections: [
      {
        title: 'Color, brightness, and spectra',
        body: 'Start with the most direct observational clues and learn why they are scientifically useful.',
        links: ['understanding-starlight', 'sirius', 'vega']
      },
      {
        title: 'Distance changes the interpretation',
        body: 'Brightness without distance can be misleading. Add scale to your interpretation of stars.',
        links: ['distances-in-space', 'sirius']
      }
    ],
    relatedObjects: ['sirius', 'vega'],
    relatedTopics: ['understanding-starlight', 'distances-in-space']
  },
  {
    slug: 'life-of-stars',
    title: 'The life cycle of stars',
    intro:
      'This pathway follows stars from formation to late evolutionary stages and links each concept to visible examples.',
    estimatedDuration: '35–45 minutes',
    difficulty: 'Beginner to intermediate',
    sections: [
      {
        title: 'Stars are born in groups',
        body: 'Use the Pleiades to understand why clusters matter for the science of star formation.',
        links: ['pleiades', 'stellar-lifecycle']
      },
      {
        title: 'Some stars age quietly, others dramatically',
        body: 'Compare Sun-like futures with the more explosive pathways of massive stars.',
        links: ['betelgeuse', 'stellar-lifecycle']
      }
    ],
    relatedObjects: ['pleiades', 'betelgeuse', 'sirius'],
    relatedTopics: ['stellar-lifecycle', 'stellar-classification']
  },
  {
    slug: 'finding-your-way',
    title: 'Constellations and sky navigation',
    intro:
      'Build observing confidence by learning the sky as a navigable map rather than a random field of lights.',
    estimatedDuration: '25–35 minutes',
    difficulty: 'Beginner',
    sections: [
      {
        title: 'Seasonal anchors',
        body: 'Use Orion and the Summer Triangle to develop repeatable navigation habits across the year.',
        links: ['constellations-and-sky-navigation', 'betelgeuse', 'vega']
      },
      {
        title: 'Objects worth visiting next',
        body: 'Move from orientation into discovery by hopping from bright anchors to deeper learning objects.',
        links: ['pleiades', 'distances-in-space']
      }
    ],
    relatedObjects: ['betelgeuse', 'vega', 'pleiades'],
    relatedTopics: ['constellations-and-sky-navigation', 'distances-in-space']
  }
];
