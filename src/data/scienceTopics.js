export const scienceTopics = [
  {
    slug: 'understanding-starlight',
    title: 'Understanding starlight',
    intro:
      'Starlight is more than a beautiful glow. It carries information about temperature, motion, chemistry, magnetic activity, and even the environments surrounding stars.',
    summary:
      'Learn how brightness, color, and spectra turn distant points of light into scientific evidence.',
    sections: [
      {
        title: 'Color is a physical clue',
        body:
          'A star’s color is tied to its surface temperature. Blue-white stars are hotter, while orange and red stars are cooler. Even simple visual comparisons begin to tell a scientific story.'
      },
      {
        title: 'Spectra split light into evidence',
        body:
          'When astronomers disperse starlight into a spectrum, dark and bright lines appear. These patterns reveal which elements are present and under what physical conditions the light was produced.'
      },
      {
        title: 'Brightness depends on both power and distance',
        body:
          'A bright star in the sky may be intrinsically powerful, nearby, or both. Photometry and distance measurements help astronomers separate appearance from true luminosity.'
      }
    ],
    objectSlugs: ['sirius', 'vega'],
    relatedTopics: ['stellar-classification', 'distances-in-space']
  },
  {
    slug: 'stellar-classification',
    title: 'How stars are classified',
    intro:
      'Classification gives structure to the incredible diversity of stars. It helps astronomers compare objects consistently and connect visible properties to underlying physics.',
    summary:
      'From OBAFGKM spectral classes to luminosity classes, stellar classification organizes the night sky into meaningful categories.',
    sections: [
      {
        title: 'Spectral classes order stars by temperature',
        body:
          'The familiar OBAFGKM sequence runs from the hottest stars to the coolest. Spectral features change across the sequence because atoms, ions, and molecules behave differently at different temperatures.'
      },
      {
        title: 'Luminosity classes describe size and stage',
        body:
          'Roman numerals add another dimension, distinguishing dwarfs, giants, and supergiants. A star’s class is therefore not just about heat; it also tells us about structure and evolution.'
      },
      {
        title: 'Classification supports prediction',
        body:
          'Once a star is classified, astronomers can make informed estimates about mass, radius, luminosity, and lifespan. Classification is a practical shortcut into deeper physical understanding.'
      }
    ],
    objectSlugs: ['sirius', 'betelgeuse', 'vega'],
    relatedTopics: ['understanding-starlight', 'stellar-lifecycle']
  },
  {
    slug: 'stellar-lifecycle',
    title: 'The life cycle of stars',
    intro:
      'Stars are not static decorations. They are evolving physical systems whose histories depend strongly on mass.',
    summary:
      'Follow stars from birth in gas clouds to mature stability and eventually to giant phases, white dwarfs, neutron stars, or black holes.',
    sections: [
      {
        title: 'Birth in molecular clouds',
        body:
          'Gravity pulls cold gas and dust into denser regions until protostars form. Many stars emerge together, which is why clusters are such powerful windows into stellar origins.'
      },
      {
        title: 'Main-sequence stability',
        body:
          'For most of a star’s life, outward pressure from fusion balances inward gravity. This stage is long-lasting, but its duration depends strongly on mass.'
      },
      {
        title: 'Mass determines the ending',
        body:
          'Sun-like stars eventually shed outer layers and leave white dwarfs behind. More massive stars can become supergiants and explode as supernovae, enriching space with heavy elements.'
      }
    ],
    objectSlugs: ['betelgeuse', 'pleiades', 'sirius'],
    relatedTopics: ['stellar-classification', 'how-astronomers-know']
  },
  {
    slug: 'distances-in-space',
    title: 'Distances in space',
    intro:
      'Distance is one of the hardest facts to measure in astronomy, yet it is essential for interpreting everything else.',
    summary:
      'Explore light-years, parallax, standard candles, and why distance is the backbone of cosmic scale.',
    sections: [
      {
        title: 'Parallax starts close to home',
        body:
          'Nearby stars shift slightly against the distant background as Earth orbits the Sun. That tiny change is enough to calculate distance geometrically.'
      },
      {
        title: 'Distance unlocks luminosity',
        body:
          'Once astronomers know how far away a star is, they can infer how much light it truly emits. This separates appearance from intrinsic power.'
      },
      {
        title: 'The distance ladder extends outward',
        body:
          'Farther out, astronomers rely on calibrated methods such as variable stars and supernovae. Each rung of the ladder depends on the reliability of the ones below it.'
      }
    ],
    objectSlugs: ['sirius', 'vega', 'pleiades'],
    relatedTopics: ['understanding-starlight', 'how-astronomers-know']
  },
  {
    slug: 'constellations-and-sky-navigation',
    title: 'Constellations and sky navigation',
    intro:
      'Constellations are not physical star groups in most cases, but they remain indispensable tools for orientation, memory, and observation planning.',
    summary:
      'Learn how sky patterns guide observers toward scientifically interesting objects and seasonal observing habits.',
    sections: [
      {
        title: 'Patterns make the sky learnable',
        body:
          'Recognizable constellations turn a complex sky into a navigable map. They help beginners build confidence and help experienced observers move quickly to targets.'
      },
      {
        title: 'Asterisms and clusters are not the same',
        body:
          'Some patterns are chance alignments, while clusters are genuine physical groups of stars. Learning the difference sharpens both observing skill and astronomical understanding.'
      },
      {
        title: 'Navigation supports science',
        body:
          'Knowing the sky makes it easier to compare color, brightness, seasonal change, and object placement. Observation is often the first step toward asking stronger scientific questions.'
      }
    ],
    objectSlugs: ['betelgeuse', 'vega', 'pleiades'],
    relatedTopics: ['distances-in-space', 'understanding-starlight']
  },
  {
    slug: 'how-astronomers-know',
    title: 'How astronomers know what they know',
    intro:
      'Astronomy is an evidence science built from light, motion, timing, modeling, and careful comparison.',
    summary:
      'Understand how observation, instrumentation, and theory combine to transform distant objects into measurable knowledge.',
    sections: [
      {
        title: 'Observation becomes measurement',
        body:
          'Telescopes collect light, detectors quantify it, and analysis turns those measurements into physical constraints. Modern astronomy is deeply rooted in instrumentation.'
      },
      {
        title: 'Models are tested against evidence',
        body:
          'Astronomers do not simply describe objects; they build models and compare predictions with what telescopes record. Good models survive repeated observational tests.'
      },
      {
        title: 'Knowledge is cumulative',
        body:
          'Research papers, surveys, catalogs, and long-term observing programs let scientists connect many small results into robust explanations of the universe.'
      }
    ],
    objectSlugs: ['betelgeuse', 'sirius'],
    relatedTopics: ['understanding-starlight', 'distances-in-space']
  }
];
