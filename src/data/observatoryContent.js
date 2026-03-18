export const observatoryObjects = [
  {
    slug: 'sirius',
    x: 0.18,
    y: 0.58,
    magnitude: 1,
    prominence: 'Iconic',
    nakedEye: true,
    region: 'winter-meridian',
    storyLabel: 'Bright benchmark',
    scienceTags: ['spectroscopy', 'binary system'],
    whyItMatters:
      'Sirius is the ideal opening target for Observatory Mode because its brightness feels immediate, but its deeper story leads straight into spectra, distance, and binary-star physics.',
    lightReveals:
      'Its hydrogen-rich spectrum and the orbital history of Sirius B show how astronomers use light and motion together to infer temperature, mass, and evolutionary stage.'
  },
  {
    slug: 'betelgeuse',
    x: 0.43,
    y: 0.42,
    magnitude: 1.4,
    prominence: 'Headline star',
    nakedEye: true,
    region: 'orion-arc',
    storyLabel: 'Massive-star finale',
    scienceTags: ['stellar lifecycle', 'red supergiant'],
    whyItMatters:
      'Betelgeuse makes stellar evolution emotionally legible. Its color, instability, and scale show that stars are living physical systems, not fixed lights.',
    lightReveals:
      'Its cool reddish light and changing atmosphere reveal convection, mass loss, and the unstable outer layers of a massive star nearing its end.'
  },
  {
    slug: 'rigel',
    x: 0.5,
    y: 0.62,
    magnitude: 1.9,
    prominence: 'Color contrast anchor',
    nakedEye: true,
    region: 'orion-arc',
    storyLabel: 'Blue supergiant contrast',
    scienceTags: ['temperature contrast', 'luminous stars'],
    whyItMatters:
      'Rigel helps visitors compare hot blue starlight against Betelgeuse’s red glow, turning Orion into a lesson about stellar temperature and evolution.',
    lightReveals:
      'Its blue-white spectrum signals a hot, luminous atmosphere where strong radiation and high temperature dominate the look of the star.'
  },
  {
    slug: 'aldebaran',
    x: 0.62,
    y: 0.36,
    magnitude: 2.2,
    prominence: 'Eye-catching giant',
    nakedEye: true,
    region: 'winter-meridian',
    storyLabel: 'Orange guide star',
    scienceTags: ['giant stars', 'sky navigation'],
    whyItMatters:
      'Aldebaran sits at the intersection of sky memory and stellar evolution, helping observers move from pattern recognition into physical interpretation.',
    lightReveals:
      'Its orange light reflects a cooler giant-star surface, reminding us that vivid brightness can come from size as well as temperature.'
  },
  {
    slug: 'pleiades',
    x: 0.74,
    y: 0.26,
    magnitude: 2.8,
    prominence: 'Cluster favorite',
    nakedEye: true,
    region: 'taurus-ridge',
    storyLabel: 'Young stellar family',
    scienceTags: ['clusters', 'star formation'],
    whyItMatters:
      'The Pleiades changes the mood of exploration from isolated stars to a shared origin story, making the sky feel like a community of objects rather than disconnected points.',
    lightReveals:
      'Its blue members and reflected dust show youth, common origin, and how cluster studies let astronomers compare many stars under similar conditions.'
  },
  {
    slug: 'vega',
    x: 0.68,
    y: 0.66,
    magnitude: 1.2,
    prominence: 'Summer triangle anchor',
    nakedEye: true,
    region: 'summer-gateway',
    storyLabel: 'Calibration beacon',
    scienceTags: ['photometry', 'stellar standards'],
    whyItMatters:
      'Vega gives Observatory Mode a second seasonal mood: a crisp northern beacon that links navigation, color, and photometric measurement.',
    lightReveals:
      'Its blue-white light and long history as a brightness reference explain how careful comparison turns one star into a standard for many others.'
  },
  {
    slug: 'deneb',
    x: 0.82,
    y: 0.5,
    magnitude: 2,
    prominence: 'Far luminous marker',
    nakedEye: true,
    region: 'summer-gateway',
    storyLabel: 'Distance surprise',
    scienceTags: ['luminosity', 'distance scale'],
    whyItMatters:
      'Deneb helps explain why apparent brightness can hide extraordinary true power. It feels gentle to the eye yet is intrinsically immense.',
    lightReveals:
      'Deneb’s spectrum and luminosity class reveal a supergiant whose visible brightness understates its true output because of its great distance.'
  },
  {
    slug: 'altair',
    x: 0.9,
    y: 0.72,
    magnitude: 2.1,
    prominence: 'Fast-spinning traveler',
    nakedEye: true,
    region: 'summer-gateway',
    storyLabel: 'Navigation finish',
    scienceTags: ['rotation', 'navigation'],
    whyItMatters:
      'Altair completes the Summer Triangle and gives the observatory map a clean route for guided exploration across the warm-season sky.',
    lightReveals:
      'Its light helps astronomers study a bright nearby star shaped by fast rotation, which subtly changes the temperature pattern across its surface.'
  }
];

export const constellationRegions = [
  {
    slug: 'orion-arc',
    name: 'Orion Arc',
    title: 'Orion: a theater of stellar contrast',
    note:
      'This region uses Orion’s best-known stars to teach temperature, stellar stages, and why bright winter patterns are powerful learning tools.',
    culturalNote:
      'Many cultures have recognized this striking seasonal figure, making Orion a reminder that sky patterns are scientific guides and human storytelling anchors.',
    objects: ['betelgeuse', 'rigel'],
    points: [
      [0.36, 0.3],
      [0.57, 0.26],
      [0.61, 0.7],
      [0.38, 0.73]
    ]
  },
  {
    slug: 'winter-meridian',
    name: 'Winter Meridian',
    title: 'Winter Meridian: bright stars for first-time observers',
    note:
      'Sirius and Aldebaran make this region ideal for learning how color, brightness, and constellation memory work together.',
    culturalNote:
      'These winter markers often become a first personal sky map for beginners because they are easy to spot and rich in comparison opportunities.',
    objects: ['sirius', 'aldebaran'],
    points: [
      [0.08, 0.46],
      [0.29, 0.33],
      [0.69, 0.29],
      [0.71, 0.62],
      [0.12, 0.72]
    ]
  },
  {
    slug: 'taurus-ridge',
    name: 'Taurus Ridge',
    title: 'Taurus Ridge: clusters, giants, and seasonal memory',
    note:
      'This sky ridge highlights how a bright orange star and a compact cluster can tell very different stories even when they appear nearby.',
    culturalNote:
      'The nearby cluster has been recognized across world sky traditions, showing how naked-eye observing naturally invites both wonder and interpretation.',
    objects: ['aldebaran', 'pleiades'],
    points: [
      [0.58, 0.18],
      [0.8, 0.16],
      [0.85, 0.38],
      [0.6, 0.43]
    ]
  },
  {
    slug: 'summer-gateway',
    name: 'Summer Gateway',
    title: 'Summer Gateway: follow the triangle into deeper understanding',
    note:
      'Vega, Deneb, and Altair create one of the most memorable seasonal routes in the northern sky and a graceful path into photometry and distance.',
    culturalNote:
      'Simple geometric patterns often act as educational doorways because they stay memorable even as the science beneath them deepens.',
    objects: ['vega', 'deneb', 'altair'],
    points: [
      [0.61, 0.45],
      [0.85, 0.39],
      [0.93, 0.79],
      [0.63, 0.78]
    ]
  }
];

export const observatoryJourneys = [
  {
    slug: 'brightest-stars',
    title: 'Start with the brightest stars',
    summary:
      'A welcoming first route that uses the sky’s most attention-grabbing stars to explain how brightness, color, and distance interact.',
    duration: '8 min',
    objectSlugs: ['sirius', 'betelgeuse', 'vega'],
    primaryTopicSlug: 'understanding-starlight',
    steps: [
      'Begin with Sirius to separate apparent brightness from the deeper question of intrinsic luminosity.',
      'Compare Sirius with Betelgeuse to feel how color signals temperature and evolutionary stage.',
      'Finish on Vega to learn how astronomers turn repeated comparison into reliable measurement.'
    ]
  },
  {
    slug: 'stars-by-color',
    title: 'Explore stars by color',
    summary:
      'Trace a visual path from blue-white stars to orange-red giants and learn why color is one of astronomy’s most intuitive clues.',
    duration: '7 min',
    objectSlugs: ['rigel', 'sirius', 'aldebaran', 'betelgeuse'],
    primaryTopicSlug: 'stellar-classification',
    steps: [
      'Open Rigel and Sirius to meet the blue-white end of the temperature story.',
      'Move to Aldebaran to notice how a cooler giant can still look commanding in the sky.',
      'End with Betelgeuse to connect red light with expanded stellar atmospheres and late evolution.'
    ]
  },
  {
    slug: 'follow-the-light',
    title: 'Follow the light',
    summary:
      'A storytelling sequence about how photons become evidence, connecting eyes, instruments, spectra, and knowledge.',
    duration: '10 min',
    objectSlugs: ['sirius', 'vega', 'deneb'],
    primaryTopicSlug: 'how-astronomers-know',
    steps: [
      'Notice the light as your eyes receive it: brightness, color, and pattern are the first layer of information.',
      'Learn how instruments spread that light into spectra, letting astronomers read temperature and chemistry.',
      'Use Deneb to see how distance changes interpretation, proving that raw appearance is only the beginning.'
    ]
  },
  {
    slug: 'naked-eye-favorites',
    title: 'Find naked-eye favorites',
    summary:
      'A gentle observatory mode filtered for objects that feel rewarding without optical aid, ideal for newcomers and mobile visitors.',
    duration: '6 min',
    objectSlugs: ['sirius', 'pleiades', 'vega', 'altair'],
    primaryTopicSlug: 'constellations-and-sky-navigation',
    steps: [
      'Use Sirius as a bright southern anchor.',
      'Shift to the Pleiades to distinguish a true cluster from a simple pattern.',
      'Complete the route with Vega and Altair to build seasonal wayfinding confidence.'
    ]
  },
  {
    slug: 'life-of-a-massive-star',
    title: 'Follow the life of a massive star',
    summary:
      'A more dramatic guided journey focused on how mass changes a star’s life, appearance, and ending.',
    duration: '9 min',
    objectSlugs: ['pleiades', 'rigel', 'betelgeuse'],
    primaryTopicSlug: 'stellar-lifecycle',
    steps: [
      'Start with the youthful story of clustered star birth.',
      'Visit Rigel to see a massive hot star in a luminous phase.',
      'Finish at Betelgeuse to understand how mass leads to swollen red supergiants and explosive futures.'
    ]
  }
];

export const scienceStoryPanels = [
  {
    slug: 'eyes-and-light',
    eyebrow: 'What your eyes are seeing',
    title: 'The sky begins as human perception, not raw data',
    body:
      'Your eyes compress enormous physical differences into a simple visual scene. Observatory Mode keeps that wonder intact, then gently reveals what astronomers add: calibration, spectra, and comparison.',
    accent: 'Perception'
  },
  {
    slug: 'measurements',
    eyebrow: 'What astronomers measure',
    title: 'Brightness, position, timing, and spectra turn wonder into evidence',
    body:
      'Astronomers rarely learn from a single glance. They measure how bright an object is, how its light is distributed by wavelength, how it moves, and how it changes over time.',
    accent: 'Measurement'
  },
  {
    slug: 'light-knowledge',
    eyebrow: 'How light becomes knowledge',
    title: 'Photons carry temperature, chemistry, distance clues, and motion',
    body:
      'A star does not send us a label. It sends light. From that light astronomers infer composition, classify stars, estimate motion, and place objects into larger cosmic stories.',
    accent: 'Interpretation'
  },
  {
    slug: 'star-colors',
    eyebrow: 'Why stars have different colors',
    title: 'Color is the approachable surface of deep stellar physics',
    body:
      'Blue-white stars are hotter; orange and red stars are cooler. But size, stage, and distance complicate the picture, which is why comparison matters as much as first impression.',
    accent: 'Color'
  },
  {
    slug: 'distance-meaning',
    eyebrow: 'What distance means in astronomy',
    title: 'Distance is the quiet fact that reshapes almost everything else',
    body:
      'Knowing how far away a star is changes a bright point of light into a physically meaningful object. Distance lets astronomers estimate luminosity, scale, and place in the galaxy.',
    accent: 'Scale'
  }
];
