export const astronomyObjects = [
  {
    slug: 'sirius',
    name: 'Sirius',
    type: 'Main-sequence star system',
    constellation: 'Canis Major',
    distance: '8.6 light-years',
    spectralClass: 'A1V (Sirius A)',
    colorTemperature: 'Blue-white appearance with a surface temperature near 9,900 K.',
    intro:
      'Sirius is the brightest star in the night sky and one of the most recognizable guideposts for naked-eye observing. Its brilliance comes from a combination of proximity and intrinsic luminosity, making it an ideal introduction to the physics of stars.',
    description:
      'Sirius is actually a binary system containing the luminous star Sirius A and the white dwarf Sirius B. Together they offer a compact lesson in stellar evolution, orbital dynamics, and how astronomers extract physical meaning from starlight.',
    lightLearning:
      'Its spectrum reveals strong hydrogen absorption lines characteristic of hot A-type stars. Careful monitoring of its light and motion also helped astronomers confirm that an unseen companion was present long before Sirius B was directly imaged.',
    universeContext:
      'Sirius sits within our local stellar neighborhood, reminding us that even familiar bright stars can be part of multi-star systems. It links the story of present-day main-sequence stars with the future fate of Sun-like stars through its white dwarf companion.',
    astronomerInterest:
      'Astronomers care about Sirius because it is bright, nearby, and historically important. It serves as a benchmark for stellar models, calibrations of luminosity and temperature, and studies of binary-star mass measurements.',
    skyViewerNote:
      'In Sky Viewer, use Sirius as an anchor to sweep through Canis Major and trace the bright winter sky. Its strong blue-white color contrast is especially helpful for comparing stellar colors with nearby Betelgeuse and Procyon.',
    tags: ['bright-stars', 'spectroscopy', 'binary-systems', 'winter-sky'],
    relatedObjects: ['betelgeuse', 'procyon', 'vega'],
    relatedTopics: ['understanding-starlight', 'stellar-classification', 'distances-in-space'],
    furtherReading: [
      {
        title: 'Why binary stars matter',
        description: 'A primer on how orbital motion lets astronomers weigh stars and test stellar models.',
        href: '#/learn'
      },
      {
        title: 'Reading an A-type spectrum',
        description: 'Connect Sirius to the science of absorption lines and surface temperature.',
        href: '#/topics/understanding-starlight'
      }
    ],
    researchInspiration: [
      'How do the measured masses of Sirius A and Sirius B compare with theoretical predictions for stellar evolution?',
      'What can a nearby benchmark star teach us about the limits of using brightness alone to infer stellar properties?'
    ],
    relatedReadingTopics: ['stellar-classification', 'how-astronomers-know']
  },
  {
    slug: 'betelgeuse',
    name: 'Betelgeuse',
    type: 'Red supergiant star',
    constellation: 'Orion',
    distance: 'About 550 light-years',
    spectralClass: 'M1–M2 Ia-Iab',
    colorTemperature: 'Deep orange-red color with a comparatively cool surface near 3,500 K.',
    intro:
      'Betelgeuse is a huge evolved star nearing the final stages of massive-star evolution. Its swollen atmosphere, variable brightness, and striking color make it one of the most vivid examples of a star that has left the main sequence.',
    description:
      'This red supergiant marks the shoulder of Orion and shows how massive stars expand and cool as they exhaust hydrogen in their cores. Betelgeuse has become a public favorite because changes in its brightness invite people to watch stellar evolution in action.',
    lightLearning:
      'Its reddish light reveals a cooler photosphere than blue-white stars, while spectral signatures from molecules and atmospheric motion show that the outer layers are extended, turbulent, and unstable.',
    universeContext:
      'Betelgeuse represents a short but dramatic phase in the life of a massive star. It helps place our Sun in context: stars with much higher mass live faster, evolve differently, and can end their lives in supernova explosions.',
    astronomerInterest:
      'Astronomers study Betelgeuse to understand mass loss, convection in giant stars, and the late evolutionary stages that precede a core-collapse supernova. Its dimming episodes also offer a rare chance to test models against a well-known nearby target.',
    skyViewerNote:
      'Use Sky Viewer to compare Betelgeuse with Rigel in Orion: their color and brightness difference is an immediate lesson in stellar temperature and evolution.',
    tags: ['stellar-lifecycle', 'variable-stars', 'supergiants', 'winter-sky'],
    relatedObjects: ['rigel', 'sirius', 'aldebaran'],
    relatedTopics: ['stellar-lifecycle', 'stellar-classification', 'how-astronomers-know'],
    furtherReading: [
      {
        title: 'Watching a red supergiant change',
        description: 'A guide to interpreting brightness changes without jumping straight to supernova headlines.',
        href: '#/discover'
      },
      {
        title: 'Late stages of stellar evolution',
        description: 'Follow the physics that turns a hot massive star into a cool expanded supergiant.',
        href: '#/topics/stellar-lifecycle'
      }
    ],
    researchInspiration: [
      'What observational clues best distinguish surface dust, giant convection cells, and deeper structural change in Betelgeuse?',
      'How do nearby red supergiants refine our models of supernova progenitors?'
    ],
    relatedReadingTopics: ['stellar-lifecycle', 'constellations-and-sky-navigation']
  },
  {
    slug: 'vega',
    name: 'Vega',
    type: 'Main-sequence star',
    constellation: 'Lyra',
    distance: '25 light-years',
    spectralClass: 'A0V',
    colorTemperature: 'Bright blue-white star with a surface temperature around 9,600 K.',
    intro:
      'Vega is one of the great seasonal beacons of the northern sky and a historic reference point in photometry. Because it is bright, nearby, and comparatively well studied, it often acts as a standard against which other stars are measured.',
    description:
      'As the brightest star in Lyra and a vertex of the Summer Triangle, Vega is both visually striking and scientifically useful. It also hosts a dusty debris disk, linking bright stellar astronomy with the study of planetary-system architecture.',
    lightLearning:
      'Vega helps explain how astronomers calibrate brightness scales and compare stellar spectra. Its light has long been used as a practical standard, even as modern calibration systems have grown more precise.',
    universeContext:
      'Vega shows that ordinary-looking bright stars can sit inside more complex systems that include circumstellar dust and possible planetary building blocks. It connects stellar astrophysics to the broader study of planetary environments.',
    astronomerInterest:
      'Astronomers care about Vega because it anchors photometric history, offers a well-observed A-type spectrum, and provides a nearby laboratory for studying debris disks and system geometry.',
    skyViewerNote:
      'In Sky Viewer, trace Vega with Deneb and Altair to form the Summer Triangle, then branch into Lyra to connect bright-star navigation with constellation structure.',
    tags: ['bright-stars', 'photometry', 'debris-disks', 'summer-sky'],
    relatedObjects: ['altair', 'deneb', 'sirius'],
    relatedTopics: ['understanding-starlight', 'distances-in-space', 'constellations-and-sky-navigation'],
    furtherReading: [
      {
        title: 'How astronomers measure brightness',
        description: 'An approachable overview of magnitudes, calibration, and why standards matter.',
        href: '#/topics/understanding-starlight'
      }
    ],
    researchInspiration: [
      'How do debris disks around bright nearby stars inform theories of planetary system formation?',
      'What changes when a “standard star” is understood in more physical detail?'
    ],
    relatedReadingTopics: ['understanding-starlight', 'distances-in-space']
  },
  {
    slug: 'pleiades',
    name: 'Pleiades',
    type: 'Open star cluster',
    constellation: 'Taurus',
    distance: 'About 444 light-years',
    spectralClass: 'Dominated by young B-type stars',
    colorTemperature: 'The cluster is visually blue because it contains hot young stars and reflected dust.',
    intro:
      'The Pleiades is a nearby young cluster that lets us see many stars born from the same cloud at nearly the same time. Because the cluster is compact, bright, and easy to recognize, it is a natural gateway into stellar populations.',
    description:
      'Rather than a single star, the Pleiades is a family of youthful stars moving through space together. It helps astronomers compare stars of different masses while holding age and distance relatively constant.',
    lightLearning:
      'The cluster’s blue stars and reflection nebulosity reveal both youth and environment. Photometry of cluster members supports age estimates, while spectroscopy shows how mass affects stellar properties within a shared origin story.',
    universeContext:
      'Open clusters like the Pleiades are snapshots of star formation in the Milky Way. They show that stars commonly form in groups and gradually disperse into the galaxy over time.',
    astronomerInterest:
      'Astronomers use the Pleiades to test stellar evolution tracks, distance measurements, and the interplay between star formation and surrounding dust. It is one of the classic calibration clusters in astrophysics.',
    skyViewerNote:
      'Use Sky Viewer to zoom from Taurus into the compact cluster and notice how the Pleiades differ from looser star patterns nearby. It is a powerful way to learn what makes a true cluster distinct from a constellation asterism.',
    tags: ['star-clusters', 'star-formation', 'deep-sky', 'winter-sky'],
    relatedObjects: ['aldebaran', 'betelgeuse', 'rigel'],
    relatedTopics: ['stellar-lifecycle', 'distances-in-space', 'constellations-and-sky-navigation'],
    furtherReading: [
      {
        title: 'Why clusters are stellar laboratories',
        description: 'Learn how common age and distance make clusters scientifically valuable.',
        href: '#/learn'
      }
    ],
    researchInspiration: [
      'How do cluster ages sharpen our understanding of stellar lifetimes across different masses?',
      'What does the Pleiades reveal about how stars gradually drift apart after birth?'
    ],
    relatedReadingTopics: ['stellar-lifecycle', 'distances-in-space']
  }
];
