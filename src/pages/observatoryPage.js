import { renderScienceInsightCard } from '../components/astronomyContent.js';
import { initializeObservatoryExperience } from '../components/observatoryExperience.js';
import { getObservatoryExperience } from '../services/observatoryService.js';

function escapeAttribute(value) {
  return String(value ?? '').replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll("'", '&#39;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function renderStarButton(item) {
  return `
    <button class="observatory-object-pill" type="button" data-star-button="${escapeAttribute(item.slug)}" aria-pressed="false">
      <span class="observatory-object-pill__name">${item.name}</span>
      <span class="observatory-object-pill__meta">${item.storyLabel}</span>
    </button>
  `;
}

export function renderObservatoryPage(rootElement, slug) {
  const experience = getObservatoryExperience(slug);

  rootElement.innerHTML = `
    <section class="observatory-shell" data-observatory-root
      data-selected-slug="${escapeAttribute(experience.selectedObject?.slug || '')}"
      data-selected-region="${escapeAttribute(experience.regions[0]?.slug || '')}"
      data-stars='${escapeAttribute(JSON.stringify(experience.objects))}'
      data-regions='${escapeAttribute(JSON.stringify(experience.regions))}'>
      <section class="observatory-hero card">
        <div class="observatory-hero-copy">
          <p class="eyebrow">Observatory Mode</p>
          <h1>A modern observatory for the web</h1>
          <p class="hero-subtitle">Enter a curated night-sky experience designed for wonder, orientation, and approachable science. Observatory Mode layers a stylized sky canvas, focused object discovery, constellation regions, and guided storytelling without trying to become a heavy planetarium.</p>
          <div class="hero-actions">
            <a class="primary-link" href="#/observatory/${encodeURIComponent(experience.selectedObject?.slug || 'sirius')}">Resume tonight’s focus</a>
            <a class="secondary-link" href="#/discover">Open Discover hub</a>
            <a class="secondary-link" href="#/learn/start-here">Begin the learning route</a>
          </div>
        </div>
        <aside class="observatory-tonight card">
          <p class="label">Tonight’s Journey</p>
          <h2>${experience.tonightJourney.title}</h2>
          <p>${experience.tonightJourney.summary}</p>
          <p class="meta-note">${experience.tonightJourney.duration} · ${(experience.tonightJourney.objectsDetailed || []).map((item) => item.name).join(' · ')}</p>
        </aside>
      </section>

      <section class="observatory-stage card">
        <div class="observatory-stage-header">
          <div>
            <p class="eyebrow">Interactive sky exploration</p>
            <h2>Move through a curated sky of bright anchors and memorable objects</h2>
          </div>
          <p class="observatory-stage-note">Select a star, constellation region, or guided route. The sky layer stays lightweight and educational, with responsive canvas drawing and static local data.</p>
        </div>
        <div class="observatory-viewport">
          <div class="observatory-canvas-wrap">
            <canvas class="observatory-canvas" data-sky-canvas aria-label="Stylized star map showing highlighted astronomy objects"></canvas>
            <div class="observatory-hotspot-layer" aria-hidden="true">
              ${experience.objects.map((item) => `
                <button
                  class="observatory-hotspot"
                  type="button"
                  style="left:${item.x * 100}%; top:${item.y * 100}%;"
                  data-star-button="${escapeAttribute(item.slug)}"
                  tabindex="-1"
                >
                  <span>${item.name}</span>
                </button>`).join('')}
            </div>
          </div>
          <div class="observatory-sidebar">
            <article class="card observatory-focus-panel" data-focus-panel></article>
            <article class="card observatory-region-panel" data-region-panel></article>
          </div>
        </div>
      </section>

      <section class="section-shell observatory-controls-section">
        <div class="section-header">
          <p class="eyebrow">Object discovery</p>
          <h2>Featured targets for elegant, approachable sky learning</h2>
          <p>Each highlighted object is chosen because it teaches something memorable quickly: stellar color, distance, evolution, calibration, or navigation.</p>
        </div>
        <div class="observatory-object-grid">
          ${experience.objects.map((item) => renderStarButton(item)).join('')}
        </div>
      </section>

      <section class="section-shell">
        <div class="section-header">
          <p class="eyebrow">Constellations and sky regions</p>
          <h2>Learn the sky as a set of meaningful neighborhoods</h2>
          <p>These regions are stylized on purpose: clear enough to teach orientation, light enough to keep the experience calm and fast.</p>
        </div>
        <div class="card-grid two-up-grid">
          ${experience.regions.map((region) => `
            <article class="card science-content-card observatory-region-card">
              <p class="label">${region.name}</p>
              <h3>${region.title}</h3>
              <p>${region.note}</p>
              <p class="meta-note">${region.objectsDetailed.map((item) => item.name).join(' · ')}</p>
              <button class="observatory-region-button" type="button" data-region-button="${escapeAttribute(region.slug)}" aria-pressed="false">Focus region</button>
            </article>`).join('')}
        </div>
      </section>

      <section class="section-shell">
        <div class="section-header">
          <p class="eyebrow">Guided discovery layer</p>
          <h2>Start with curiosity, then follow a route that teaches as it moves</h2>
          <p>Guided journeys are modeled as reusable local content modules, so new observatory experiences can be added without changing the rendering architecture.</p>
        </div>
        <div class="observatory-journey-grid">
          <div class="journey-selector-list">
            ${experience.journeys.map((journey, index) => `
              <button
                class="card observatory-journey-button"
                type="button"
                data-journey-button
                data-journey-title="${escapeAttribute(journey.title)}"
                data-journey-summary="${escapeAttribute(journey.summary)}"
                data-journey-steps="${escapeAttribute(journey.steps.join('|'))}"
                data-journey-objects="${escapeAttribute(journey.objectsDetailed.map((item) => `${item.slug}::${item.name}`).join('|'))}"
                data-journey-topic-href="#/topics/${encodeURIComponent(journey.primaryTopic?.slug || 'understanding-starlight')}"
                aria-pressed="${index === 0 ? 'true' : 'false'}"
              >
                <p class="label">${journey.duration}</p>
                <h3>${journey.title}</h3>
                <p>${journey.summary}</p>
              </button>`).join('')}
          </div>
          <article class="card observatory-journey-panel" data-journey-panel></article>
        </div>
      </section>

      <section class="section-shell">
        <div class="section-header">
          <p class="eyebrow">Science storytelling</p>
          <h2>Wonder first, explanation immediately after</h2>
          <p>These concise modules integrate educational interpretation into the observatory experience so learning feels like part of exploration, not a detour away from it.</p>
        </div>
        <div class="card-grid three-up-grid">
          ${experience.sciencePanels.map((panel) => renderScienceInsightCard({ eyebrow: panel.eyebrow, title: panel.title, body: panel.body, href: `#/topics/${encodeURIComponent(experience.selectedObject?.relatedTopicsDetailed?.[0]?.slug || 'understanding-starlight')}`, hrefLabel: `${panel.accent} → science context` })).join('')}
        </div>
      </section>
    </section>
  `;

  initializeObservatoryExperience(rootElement);
  return experience.selectedObject;
}
