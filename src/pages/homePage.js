import { renderContentCard, renderRelatedObjectCard, renderScienceInsightCard } from '../components/astronomyContent.js';
import { getHomepageFeaturedObject, getHomepageFeaturedPaths, getHomepageFeaturedTopics, getRotatingFeaturedMoment } from '../services/astronomyContentService.js';

export function renderHomePage(rootElement) {
  const featuredObject = getHomepageFeaturedObject();
  const featuredTopics = getHomepageFeaturedTopics();
  const featuredPaths = getHomepageFeaturedPaths();
  const today = getRotatingFeaturedMoment();

  rootElement.innerHTML = `
    <section class="home-hero card astronomy-home-hero">
      <div class="home-hero-grid">
        <div>
          <p class="eyebrow">Welcome to Heavens</p>
          <h2>A science discovery and research experience for the night sky</h2>
          <p class="home-lead">
            Heavens connects beautiful sky exploration with the science behind stars, constellations, and cosmic scale.
            Move from wonder to understanding through dedicated object pages, curated discovery prompts, and guided learning pathways.
          </p>
          <div class="hero-actions">
            <a class="primary-link" href="#/objects">Browse objects</a>
            <a class="secondary-link" href="#/discover">Open Discover</a>
            <a class="secondary-link" href="#/learn/start-here">Start here</a>
          </div>
        </div>
        <aside class="home-hero-art astronomy-hero-panel">
          <p class="label">Featured object of the day</p>
          <h3>${featuredObject.name}</h3>
          <p>${featuredObject.intro}</p>
          <p class="meta-note"><strong>${featuredObject.constellation}</strong> · ${featuredObject.distance} · ${featuredObject.spectralClass}</p>
          <a class="profile-link" href="#/objects/${encodeURIComponent(featuredObject.slug)}">Open object page →</a>
        </aside>
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
        <h2>A connected knowledge web for curiosity, literacy, and future research</h2>
      </div>
      <div class="card-grid three-up-grid">
        ${renderContentCard({ title: 'Wonder should lead somewhere', description: 'The site now bridges visual exploration with deeper scientific interpretation so users can move from noticing to understanding.', href: '#/discover', eyebrow: 'Mission' })}
        ${renderContentCard({ title: 'Learning should feel navigable', description: 'Object pages, topic pages, and learning pathways are tightly linked so the platform feels like an evolving knowledge architecture instead of isolated screens.', href: '#/learn', eyebrow: 'Architecture' })}
        ${renderContentCard({ title: 'Research can grow from a stable baseline', description: 'All discovery and reading panels are fed by local structured content first, while services are prepared for future live archive integrations.', href: '#/topics/how-astronomers-know', eyebrow: 'Future-ready' })}
      </div>
    </section>
  `;
}
