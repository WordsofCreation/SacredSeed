import {
  renderContentCard,
  renderRelatedObjectCard,
  renderScienceInsightCard
} from '../components/astronomyContent.js';
import {
  getHomepageFeaturedObject,
  getHomepageFeaturedPaths,
  getHomepageFeaturedTopics,
  getRotatingFeaturedMoment
} from '../services/astronomyContentService.js';
import { getObservatoryJourneys, getScienceStoryPanels, getTonightJourney } from '../services/observatoryService.js';

export function renderHomePage(rootElement) {
  const featuredObject = getHomepageFeaturedObject();
  const featuredTopics = getHomepageFeaturedTopics();
  const featuredPaths = getHomepageFeaturedPaths();
  const today = getRotatingFeaturedMoment();
  const tonightJourney = getTonightJourney();
  const observatoryJourneys = getObservatoryJourneys().slice(0, 3);
  const storyPanels = getScienceStoryPanels().slice(0, 3);

  rootElement.innerHTML = `
    <section class="home-hero card astronomy-home-hero observatory-home-hero">
      <div class="home-hero-grid observatory-home-grid">
        <div>
          <p class="eyebrow">Welcome to Heavens</p>
          <h2>A modern observatory for the web — wonder first, science immediately after</h2>
          <p class="home-lead">
            Heavens now combines immersive sky exploration, object discovery, guided learning, and approachable astronomy storytelling.
            Move from a premium observatory-style sky interface into rich object profiles, constellation routes, and science panels that explain what starlight really reveals.
          </p>
          <div class="hero-actions">
            <a class="primary-link" href="#/observatory">Enter Observatory Mode</a>
            <a class="secondary-link" href="#/objects">Browse objects</a>
            <a class="secondary-link" href="#/learn/start-here">Start here</a>
          </div>
        </div>
        <aside class="home-hero-art astronomy-hero-panel observatory-home-aside">
          <p class="label">Featured object of the night</p>
          <h3>${featuredObject.name}</h3>
          <p>${featuredObject.intro}</p>
          <p class="meta-note"><strong>${featuredObject.constellation}</strong> · ${featuredObject.distance} · ${featuredObject.spectralClass}</p>
          <div class="hero-actions compact-actions">
            <a class="profile-link" href="#/observatory/${encodeURIComponent(featuredObject.slug)}">Focus in Observatory Mode →</a>
            <a class="profile-link" href="#/objects/${encodeURIComponent(featuredObject.slug)}">Open object page →</a>
          </div>
        </aside>
      </div>
    </section>

    <section class="home-section section-shell home-observatory-strip">
      <div class="section-header">
        <p class="eyebrow">Observatory invitation</p>
        <h2>Explore the sky, understand starlight, and discover how astronomers read the universe</h2>
        <p>${tonightJourney.summary}</p>
      </div>
      <div class="card-grid three-up-grid">
        ${renderContentCard({ eyebrow: 'Enter Observatory Mode', title: 'A cinematic sky interface', description: 'A lightweight stylized starfield, elegant overlays, and focused object discovery make the experience feel like standing beneath a curated observatory sky.', href: '#/observatory', hrefLabel: 'Open observatory →' })}
        ${renderContentCard({ eyebrow: 'Tonight’s Journey', title: tonightJourney.title, description: tonightJourney.steps[0], href: `#/observatory/${encodeURIComponent(tonightJourney.objectsDetailed[0].slug)}`, hrefLabel: 'Begin tonight’s route →' })}
        ${renderContentCard({ eyebrow: 'Understand starlight', title: 'Light becomes knowledge', description: 'Follow how color, spectra, distance, and timing turn a beautiful point of light into evidence about chemistry, temperature, and evolution.', href: '#/topics/understanding-starlight', hrefLabel: 'Read the science →' })}
      </div>
    </section>

    <section class="home-section section-shell">
      <div class="section-header">
        <p class="eyebrow">Guided journeys</p>
        <h2>Curated routes that make the sky feel welcoming instead of overwhelming</h2>
      </div>
      <div class="card-grid three-up-grid">
        ${observatoryJourneys.map((journey) => renderContentCard({ eyebrow: `Observatory journey · ${journey.duration}`, title: journey.title, description: journey.summary, href: `#/observatory/${encodeURIComponent(journey.objectsDetailed[0].slug)}`, hrefLabel: 'Open this route →' })).join('')}
      </div>
    </section>

    <section class="home-section section-shell">
      <div class="section-header">
        <p class="eyebrow">Science storytelling</p>
        <h2>Short panels built for curiosity, not textbook fatigue</h2>
      </div>
      <div class="card-grid three-up-grid">
        ${storyPanels.map((panel) => renderScienceInsightCard({ eyebrow: panel.eyebrow, title: panel.title, body: panel.body, href: '#/discover', hrefLabel: 'See it in context →' })).join('')}
      </div>
    </section>

    <section class="home-section section-shell">
      <div class="section-header">
        <p class="eyebrow">Begin learning astronomy</p>
        <h2>Start with a guided route that builds confidence quickly</h2>
      </div>
      <div class="card-grid three-up-grid">
        ${featuredPaths.map((path) => renderContentCard({ eyebrow: `${path.difficulty} · ${path.estimatedDuration}`, title: path.title, description: path.intro, href: `#/learn/${encodeURIComponent(path.slug)}`, hrefLabel: 'Begin pathway →' })).join('')}
      </div>
    </section>

    <section class="home-section section-shell">
      <div class="section-header">
        <p class="eyebrow">Explore by science topic</p>
        <h2>Build understanding around the ideas that organize astronomy</h2>
      </div>
      <div class="card-grid three-up-grid">
        ${featuredTopics.map((topic) => renderScienceInsightCard({ eyebrow: 'Science topic', title: topic.title, body: topic.summary, href: `#/topics/${encodeURIComponent(topic.slug)}` })).join('')}
      </div>
    </section>

    <section class="home-section section-shell">
      <div class="section-header">
        <p class="eyebrow">Discover the sky</p>
        <h2>Today in the Heavens</h2>
        <p>${today.description}</p>
      </div>
      <div class="card-grid two-up-grid">
        ${renderContentCard({ eyebrow: 'Rotating feature', title: today.title, description: 'A lightweight editorial rotation keeps the homepage feeling alive while staying static-friendly for GitHub Pages.', href: today.href, hrefLabel: 'Follow today’s route →' })}
        ${renderRelatedObjectCard(featuredObject)}
      </div>
    </section>

    <section class="home-section section-shell why-heavens-section">
      <div class="section-header">
        <p class="eyebrow">Why Heavens exists</p>
        <h2>A connected knowledge web for curiosity, literacy, and future observatory features</h2>
      </div>
      <div class="card-grid three-up-grid">
        ${renderContentCard({ title: 'Wonder should lead somewhere', description: 'The site bridges visual exploration with scientific interpretation so a moment of awe naturally becomes a moment of understanding.', href: '#/observatory', eyebrow: 'Mission' })}
        ${renderContentCard({ title: 'Learning should feel navigable', description: 'Object pages, topic pages, constellation regions, and learning pathways now form a connected observatory architecture instead of isolated screens.', href: '#/learn', eyebrow: 'Architecture' })}
        ${renderContentCard({ title: 'Static-first can still feel immersive', description: 'Canvas, semantic HTML, modular JavaScript, and local data power a premium experience without giving up GitHub Pages compatibility.', href: '#/about', eyebrow: 'Future-ready' })}
      </div>
    </section>
  `;
}
