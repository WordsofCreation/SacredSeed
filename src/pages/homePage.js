import { renderFeatureCard, renderTrustItem } from '../components/homePageSections.js';
import { getFeaturedCollectionSummaries } from '../services/herbCollectionService.js';
import { getFeaturedLearningPathways } from '../services/learningPathwayService.js';

const featureAreas = [
  {
    eyebrow: 'Materia Medica',
    title: 'Explore structured herb monographs',
    description:
      'Search by medicinal action, body system, preparation type, and safety category to find entries relevant to study or practice.',
    actions: [
      { label: 'Browse the Materia Medica', href: '#/materia-medica' },
      { label: 'Start a beginner pathway', href: '#/pathways', variant: 'secondary' }
    ]
  },
  {
    eyebrow: 'Pacific Northwest Field Guide',
    title: 'Regional plant literacy with ecological context',
    description:
      'Our regional layer is expanding to support place-based study across Pacific Northwest landscapes, habitats, and seasonal observation.',
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


function renderFeaturedCollectionCard(collection) {
  const preview = collection.featuredHerbs?.map((herb) => herb.commonName).join(', ');

  return `
    <article class="card collection-card">
      <p class="label">Featured Collection</p>
      <h3>${collection.title}</h3>
      <p>${collection.shortIntro}</p>
      <p class="meta-line"><strong>${collection.herbCount}</strong> herbs in this guide.</p>
      ${preview ? `<p class="meta-note"><strong>Includes:</strong> ${preview}.</p>` : ''}
      <a class="profile-link" href="#/collections/${encodeURIComponent(collection.slug)}">Open collection →</a>
    </article>
  `;
}


function renderFeaturedPathwayCard(pathway) {
  const preview = pathway.featuredHerbs?.map((herb) => herb.commonName).join(', ');

  return `
    <article class="card collection-card pathway-card">
      <p class="label">Start Here Pathway</p>
      <h3>${pathway.title}</h3>
      <p>${pathway.intro}</p>
      <p class="meta-line"><strong>${pathway.herbCount}</strong> herbs · ${pathway.estimatedDuration}</p>
      ${preview ? `<p class="meta-note"><strong>Includes:</strong> ${preview}.</p>` : ''}
      <a class="profile-link" href="#/pathways/${encodeURIComponent(pathway.slug)}">Begin pathway →</a>
    </article>
  `;
}

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
  const featuredCollections = getFeaturedCollectionSummaries().slice(0, 3);
  const featuredPathways = getFeaturedLearningPathways(3);

  rootElement.innerHTML = `
    <section class="home-hero card">
      <div class="home-hero-grid">
        <div>
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
        </div>
        <aside class="home-hero-art" aria-label="SacredSeed logo artwork">
          <img
            class="home-hero-logo"
            src="assets/images/raw/site/logos/sacred_seed_clean.png"
            alt="SacredSeed logo with botanical accents"
          />
          <p class="home-hero-caption">Botanical knowledge architecture for modern herbal study.</p>
        </aside>
      </div>
    </section>

    <section class="home-section section-shell" aria-labelledby="explore-library-title">
      <div class="home-section-heading section-header">
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
    </section>



    <section class="home-section section-shell" aria-labelledby="beginner-pathways-title">
      <div class="home-section-heading section-header">
        <p class="eyebrow">Start Here for Beginners</p>
        <h3 id="beginner-pathways-title">Guided learning pathways for first-time herbal study</h3>
        <p>
          Follow curated step-by-step pathways that connect herb profiles, collections, and preparation pages in a clear educational sequence.
        </p>
      </div>
      <div class="collection-grid">
        ${featuredPathways.map((pathway) => renderFeaturedPathwayCard(pathway)).join('')}
      </div>
      <div class="hero-actions">
        <a class="primary-link" href="#/pathways">Explore all beginner pathways</a>
      </div>
    </section>

    <section class="home-section section-shell" aria-labelledby="featured-collections-title">
      <div class="home-section-heading section-header">
        <p class="eyebrow">Guided Collections</p>
        <h3 id="featured-collections-title">Curated pathways into the herb library</h3>
        <p>
          Explore SacredSeed through editorial collection guides designed for thematic learning, regional context,
          and preparation-oriented study.
        </p>
      </div>
      <div class="collection-grid">
        ${featuredCollections.map((collection) => renderFeaturedCollectionCard(collection)).join('')}
      </div>
      <div class="hero-actions">
        <a class="primary-link" href="#/collections">Browse all collections</a>
      </div>
    </section>

    <section class="home-section home-highlight" aria-labelledby="spotlight-title">
      <div class="spotlight-grid">
        <div class="home-section-heading">
          <p class="eyebrow">Seasonal Spotlight</p>
          <h3 id="spotlight-title">Featured herb: Stinging Nettle</h3>
          <p>
            A nutrient-dense spring ally commonly studied for mineral support and tonic preparation traditions.
            Explore the full monograph for chemistry context, actions, and safety framing.
          </p>
        </div>
        <a class="primary-link" href="#/herbs/urtica-dioica">Read the Stinging Nettle profile</a>
      </div>
    </section>

    <section class="home-section section-shell" aria-labelledby="trust-title">
      <div class="home-section-heading section-header">
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
