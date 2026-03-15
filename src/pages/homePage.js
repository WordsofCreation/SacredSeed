import { renderFeatureCard, renderTrustItem } from '../components/homePageSections.js';

const featureAreas = [
  {
    eyebrow: 'Materia Medica',
    title: 'Explore structured herb monographs',
    description:
      'Search by medicinal action, body system, preparation type, and safety category to find entries relevant to study or practice.',
    actions: [
      { label: 'Browse the Materia Medica', href: '#/materia-medica' },
      { label: 'View a full herb profile', href: '#/herbs/urtica-dioica', variant: 'secondary' }
    ]
  },
  {
    eyebrow: 'Pacific Northwest Field Guide',
    title: 'Regional plant literacy, with practical context',
    description:
      'A dedicated regional guide is being expanded for Pacific Northwest landscapes. Start with our current herbs while regional pathways are curated.',
    actions: [
      { label: 'Start with regional-ready herbs', href: '#/materia-medica' },
      { label: 'Read our educational mission', href: '#/about', variant: 'secondary' }
    ]
  },
  {
    eyebrow: 'Preparations & Remedies',
    title: 'Move from plant knowledge to practical preparations',
    description:
      'Study foundational preparation guides, tea formulas, and remedy collections designed for clear educational use and modular growth.',
    actions: [
      { label: 'Open Preparation Library', href: '#/preparations' },
      { label: 'Explore remedy collections', href: '#/preparations', variant: 'secondary' }
    ]
  }
];

const trustPrinciples = [
  {
    title: 'Careful sourcing and attribution',
    body:
      'SacredSeed is built to keep source attribution visible and structured so learners can distinguish editorial interpretation from provider-origin data.'
  },
  {
    title: 'Educational clarity without hype',
    body:
      'We prioritize balanced herbal education, safety-aware language, and practical context for both beginners and serious herbal learners.'
  },
  {
    title: 'Transparent legal and safety framing',
    body:
      'Our About, Privacy Policy, and Terms of Use are integrated into the platform so users can learn with clear expectations and responsible guardrails.'
  }
];

export function renderHomePage(rootElement) {
  rootElement.innerHTML = `
    <section class="home-hero card">
      <p class="eyebrow">Welcome to SacredSeed</p>
      <h2>A modern herbal reference platform rooted in botanical scholarship</h2>
      <p class="home-lead">
        SacredSeed helps practitioners, students, and curious learners navigate medicinal plants with trusted context,
        thoughtful structure, and practical educational pathways.
      </p>
      <p class="home-quote">"Where careful plant knowledge meets everyday herbal learning."</p>
      <div class="hero-actions">
        <a class="primary-link" href="#/materia-medica">Begin with the Materia Medica</a>
        <a class="secondary-link" href="#/about">Learn about our mission</a>
      </div>
    </section>

    <section class="home-section" aria-labelledby="explore-library-title">
      <div class="home-section-heading">
        <p class="eyebrow">Explore the Herbal Library</p>
        <h3 id="explore-library-title">Start where you need to learn next</h3>
        <p>
          Choose a path into SacredSeed based on how you study: individual herb monographs, regional field knowledge,
          or preparation-focused herbal practice.
        </p>
      </div>
      <div class="home-feature-grid">
        ${featureAreas.map((feature) => renderFeatureCard(feature)).join('')}
      </div>
      <!-- Future featured content slots can be inserted here for seasonal herbs, spotlight formulas, or new educational essays. -->
    </section>

    <section class="home-section home-highlight" aria-labelledby="spotlight-title">
      <div class="home-section-heading">
        <p class="eyebrow">Seasonal Spotlight</p>
        <h3 id="spotlight-title">Featured herb: Stinging Nettle</h3>
        <p>
          A nutrient-dense spring ally commonly studied for mineral support and tonic preparation traditions.
          Explore the full monograph for chemistry context, actions, and safety framing.
        </p>
      </div>
      <a class="primary-link" href="#/herbs/urtica-dioica">Read the Stinging Nettle profile</a>
    </section>

    <section class="home-section" aria-labelledby="trust-title">
      <div class="home-section-heading">
        <p class="eyebrow">Education, Trust, and Transparency</p>
        <h3 id="trust-title">Designed for responsible herbal learning</h3>
      </div>
      <div class="home-trust-grid">
        ${trustPrinciples.map((item) => renderTrustItem(item)).join('')}
      </div>
      <div class="hero-actions">
        <a class="secondary-link" href="#/about">About SacredSeed</a>
        <a class="secondary-link" href="#/privacy-policy">Privacy Policy</a>
        <a class="secondary-link" href="#/terms-of-use">Terms of Use</a>
      </div>
    </section>
  `;
}
