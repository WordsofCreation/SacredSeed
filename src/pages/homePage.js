import { renderFeatureCard, renderTrustItem } from '../components/homePageSections.js';
import { getFeaturedCollectionSummaries } from '../services/herbCollectionService.js';
import { getFeaturedLearningPathways } from '../services/learningPathwayService.js';
import { getSeasonalCollectionSummaries, getFeaturedSeasonalCollection } from '../services/seasonalCollectionService.js';
import { getEditorialArticleSummaries, getStartHereArticle } from '../services/editorialArticleService.js';
import { fallbackOnErrorAttr, resolveHerbImage } from '../utils/imageAssets.js';
import { fetchTaxonByBotanicalName } from '../services/apis/inaturalistApi.js';


function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}


const homeCardImageCache = new Map();

async function hydrateHomeCardLeadImages(rootElement) {
  const imageNodes = Array.from(rootElement.querySelectorAll('[data-home-card-botanical]'));

  await Promise.all(
    imageNodes.map(async (imageNode) => {
      const botanicalName = imageNode.dataset.homeCardBotanical;
      if (!botanicalName) {
        return;
      }

      const cachedImage = homeCardImageCache.get(botanicalName);
      if (cachedImage === null) {
        return;
      }

      if (typeof cachedImage === 'string' && cachedImage) {
        imageNode.src = cachedImage;
        return;
      }

      try {
        const taxon = await fetchTaxonByBotanicalName(botanicalName);
        const apiImage = taxon?.default_photo?.medium_url?.trim?.() || '';

        if (!apiImage) {
          homeCardImageCache.set(botanicalName, null);
          return;
        }

        homeCardImageCache.set(botanicalName, apiImage);
        imageNode.src = apiImage;
      } catch {
        homeCardImageCache.set(botanicalName, null);
      }
    })
  );
}

const featureAreas = [
  {
    eyebrow: 'Materia Medica',
    title: 'Explore structured herb monographs',
    description:
      'Search by medicinal action, body system, preparation type, and safety category to find entries relevant to study or practice.',
    actions: [
      { label: 'Browse the Materia Medica', href: '#/materia-medica' },
      { label: 'Site-wide knowledge search', href: '#/search', variant: 'secondary' }
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
  const leadHerb = collection.featuredHerbs?.[0] ?? null;

  return `
    <article class="card collection-card">
      ${leadHerb ? `<img class="collection-card-image" src="${resolveHerbImage(leadHerb, { variant: 'card' })}" alt="${escapeHtml(leadHerb.commonName)} illustration" loading="lazy" decoding="async" data-home-card-botanical="${escapeHtml(leadHerb.botanicalName)}" data-image-fallback="card" onerror="${fallbackOnErrorAttr('card')}" />` : ''}
      <p class="label">Featured Collection</p>
      <h3>${collection.title}</h3>
      <p>${collection.shortIntro}</p>
      <p class="meta-line"><strong>${collection.herbCount}</strong> herbs in this guide.</p>
      ${preview ? `<p class="meta-note"><strong>Includes:</strong> ${preview}.</p>` : ''}
      <a class="profile-link" href="#/collections/${encodeURIComponent(collection.slug)}">Open collection →</a>
    </article>
  `;
}


function selectUniqueLeadHerbs(items) {
  const usedBotanicalNames = new Set();

  return items.map((item) => {
    const candidates = item.featuredHerbs ?? [];
    const uniqueCandidate = candidates.find((herb) => {
      const botanicalName = herb?.botanicalName;
      return botanicalName && !usedBotanicalNames.has(botanicalName);
    });

    const leadHerb = uniqueCandidate ?? candidates[0] ?? null;
    if (leadHerb?.botanicalName) {
      usedBotanicalNames.add(leadHerb.botanicalName);
    }

    return {
      item,
      leadHerb
    };
  });
}

function renderFeaturedPathwayCard(pathway, leadHerb = null) {
  const preview = pathway.featuredHerbs?.map((herb) => herb.commonName).join(', ');
  const resolvedLeadHerb = leadHerb ?? pathway.featuredHerbs?.[0] ?? null;

  return `
    <article class="card collection-card pathway-card">
      ${resolvedLeadHerb ? `<img class="collection-card-image" src="${resolveHerbImage(resolvedLeadHerb, { variant: 'card' })}" alt="${escapeHtml(resolvedLeadHerb.commonName)} illustration" loading="lazy" decoding="async" data-home-card-botanical="${escapeHtml(resolvedLeadHerb.botanicalName)}" data-image-fallback="card" onerror="${fallbackOnErrorAttr('card')}" />` : ''}
      <p class="label">Start Here Pathway</p>
      <h3>${pathway.title}</h3>
      <p>${pathway.intro}</p>
      <p class="meta-line"><strong>${pathway.herbCount}</strong> herbs · ${pathway.estimatedDuration}</p>
      ${preview ? `<p class="meta-note"><strong>Includes:</strong> ${preview}.</p>` : ''}
      <a class="profile-link" href="#/pathways/${encodeURIComponent(pathway.slug)}">Begin pathway →</a>
    </article>
  `;
}

function renderSeasonalCard(collection) {
  const leadHerb = collection.featuredHerbs?.[0] ?? null;

  return `
    <article class="card collection-card seasonal-collection-card">
      ${leadHerb ? `<img class="collection-card-image" src="${resolveHerbImage(leadHerb, { variant: 'card' })}" alt="${escapeHtml(leadHerb.commonName)} illustration" loading="lazy" decoding="async" data-home-card-botanical="${escapeHtml(leadHerb.botanicalName)}" data-image-fallback="card" onerror="${fallbackOnErrorAttr('card')}" />` : ''}
      <p class="label">${collection.season} Collection</p>
      <h3>${collection.title}</h3>
      <p>${collection.shortIntro}</p>
      <p class="meta-line"><strong>${collection.herbCount}</strong> herbs in this seasonal guide.</p>
      <a class="profile-link" href="#/seasons/${encodeURIComponent(collection.slug)}">Explore season →</a>
    </article>
  `;
}

function renderArticleCard(article) {
  return `
    <article class="card collection-card editorial-card">
      <p class="label">Editorial Guide · ${article.estimatedReadMinutes ?? 'Self-paced'} min</p>
      <h3>${article.title}</h3>
      <p>${article.summary ?? article.intro}</p>
      <a class="profile-link" href="#/articles/${encodeURIComponent(article.slug)}">Read article →</a>
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
  const featuredPathwayCards = selectUniqueLeadHerbs(featuredPathways);
  const seasonalCollections = getSeasonalCollectionSummaries().slice(0, 4);
  const featuredSeason = getFeaturedSeasonalCollection();
  const editorialArticles = getEditorialArticleSummaries().slice(0, 3);
  const startHereArticle = getStartHereArticle();

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
            <a class="secondary-link" href="#/search">Search the knowledge library</a>
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
        ${featuredPathwayCards.map(({ item, leadHerb }) => renderFeaturedPathwayCard(item, leadHerb)).join('')}
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

    <section class="home-section section-shell" aria-labelledby="seasonal-collections-title">
      <div class="home-section-heading section-header">
        <p class="eyebrow">Seasonal Learning</p>
        <h3 id="seasonal-collections-title">Study herbs through spring, summer, autumn, and winter</h3>
        <p>
          Seasonal collections pair herb profiles, preparation links, and educational context so SacredSeed can be explored as a living year-round botanical platform.
        </p>
      </div>
      <div class="collection-grid">
        ${seasonalCollections.map((collection) => renderSeasonalCard(collection)).join('')}
      </div>
      <div class="hero-actions">
        <a class="primary-link" href="#/seasons">Browse all seasonal collections</a>
      </div>
    </section>

    <section class="home-section section-shell" aria-labelledby="editorial-library-title">
      <div class="home-section-heading section-header">
        <p class="eyebrow">Editorial Education</p>
        <h3 id="editorial-library-title">Foundational reading for practical herbal literacy</h3>
        <p>
          Explore structured editorial guides on materia medica learning, profile interpretation, preparation methods, and beginner home practice.
        </p>
      </div>
      ${startHereArticle ? `<p class="meta-note"><strong>Start here:</strong> <a href="#/articles/${encodeURIComponent(startHereArticle.slug)}">${startHereArticle.title}</a>.</p>` : ''}
      <div class="collection-grid">
        ${editorialArticles.map((article) => renderArticleCard(article)).join('')}
      </div>
      <div class="hero-actions">
        <a class="primary-link" href="#/articles">Read all editorial articles</a>
      </div>
    </section>

    <section class="home-section home-highlight" aria-labelledby="spotlight-title">
      <div class="spotlight-grid">
        <div class="home-section-heading">
          <p class="eyebrow">Seasonal Spotlight</p>
          <h3 id="spotlight-title">${featuredSeason ? `Featured season: ${featuredSeason.title}` : 'Featured herb: Stinging Nettle'}</h3>
          <p>
            ${featuredSeason
    ? `${featuredSeason.shortIntro} Open the full seasonal collection for curated herbs, preparation ideas, and educational context.`
    : 'A nutrient-dense spring ally commonly studied for mineral support and tonic preparation traditions. Explore the full monograph for chemistry context, actions, and safety framing.'}
          </p>
        </div>
        <a class="primary-link" href="${featuredSeason ? `#/seasons/${encodeURIComponent(featuredSeason.slug)}` : '#/herbs/urtica-dioica'}">${featuredSeason ? 'Open seasonal collection' : 'Read the Stinging Nettle profile'}</a>
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

  hydrateHomeCardLeadImages(rootElement);
}
