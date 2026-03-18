import {
  renderExploreMore,
  renderObserveNext,
  renderQaCallout,
  renderRelatedObjectCard,
  renderResearchCards,
  renderScienceInsightCard
} from '../components/astronomyContent.js';
import { getAstronomyObjectBySlug } from '../services/astronomyContentService.js';
import { getObservatoryObjectBySlug, getScienceStoryPanels } from '../services/observatoryService.js';

function renderSection(title, body) {
  return `
    <section class="card reading-section">
      <h2>${title}</h2>
      <p>${body}</p>
    </section>
  `;
}

function renderObjectFocusExperience(object, observatoryObject) {
  const focus = observatoryObject || object;
  return `
    <section class="card object-focus-experience">
      <div>
        <p class="eyebrow">Object focus experience</p>
        <h2>${object.name} in Observatory Mode</h2>
        <p>${focus.whyItMatters || object.intro}</p>
      </div>
      <div class="object-focus-grid">
        <article class="object-focus-card">
          <p class="label">Focus markers</p>
          <div class="focus-indicators">
            <span class="focus-badge">${focus.prominence || 'Featured target'}</span>
            <span class="focus-badge">${focus.storyLabel || object.type}</span>
            <span class="focus-badge">${object.constellation}</span>
          </div>
          <div class="temperature-bar" aria-hidden="true"><span style="width:78%"></span></div>
          <p class="meta-note">${object.colorTemperature}</p>
        </article>
        <article class="object-focus-card">
          <p class="label">What its light reveals</p>
          <p>${focus.lightReveals || object.lightLearning}</p>
          <a class="profile-link" href="#/observatory/${encodeURIComponent(object.slug)}">Focus this object in Observatory Mode →</a>
        </article>
        <article class="object-focus-card">
          <p class="label">Related science topics</p>
          <div class="tag-row">
            ${object.relatedTopicsDetailed.map((item) => `<a class="tag-chip" href="#/topics/${encodeURIComponent(item.slug)}">${item.title}</a>`).join('')}
          </div>
        </article>
      </div>
    </section>
  `;
}

export function renderObjectPage(rootElement, slug) {
  const object = getAstronomyObjectBySlug(slug);
  const observatoryObject = getObservatoryObjectBySlug(slug);
  const storyPanels = getScienceStoryPanels().slice(0, 3);

  if (!object) {
    rootElement.innerHTML = `
      <section class="card error-state">
        <p class="eyebrow">Object not found</p>
        <h2>We couldn’t find that object page.</h2>
        <p>Try Observatory Mode, Discover, or Learn to continue exploring Heavens.</p>
        <a class="primary-link" href="#/observatory">Go to Observatory Mode</a>
      </section>
    `;
    return null;
  }

  rootElement.innerHTML = `
    <section class="page-hero object-hero card">
      <p class="eyebrow">Dedicated object page</p>
      <h1>${object.name}</h1>
      <p class="hero-subtitle">${object.description}</p>
      <div class="tag-row">
        ${(object.tags || []).map((tag) => `<span class="tag-chip static-tag">${tag.replaceAll('-', ' ')}</span>`).join('')}
      </div>
      <div class="hero-actions">
        <a class="primary-link" href="#/observatory/${encodeURIComponent(object.slug)}">Open in Observatory Mode</a>
        <a class="secondary-link" href="#/discover">Return to Discover</a>
      </div>
    </section>

    ${renderObjectFocusExperience(object, observatoryObject)}

    <section class="card key-facts-panel object-premium-facts">
      <h2>Profile markers</h2>
      <div class="key-facts-grid object-key-facts-grid">
        <div><dt>Object type</dt><dd>${object.type}</dd></div>
        <div><dt>Constellation</dt><dd>${object.constellation}</dd></div>
        <div><dt>Approximate distance</dt><dd>${object.distance}</dd></div>
        <div><dt>Spectral class</dt><dd>${object.spectralClass || 'Not applicable'}</dd></div>
        <div><dt>Color / temperature</dt><dd>${object.colorTemperature}</dd></div>
      </div>
    </section>

    ${renderSection('Introduction', object.intro)}
    ${renderSection('What We Learn from Its Light', object.lightLearning)}
    ${renderSection('How It Fits in the Universe', object.universeContext)}
    ${renderSection('Why Astronomers Care About It', object.astronomerInterest)}

    <section class="section-shell">
      <div class="section-header">
        <h2>Science storytelling modules</h2>
        <p>These panels connect this object’s visual impression to the broader scientific ideas it helps teach.</p>
      </div>
      <div class="card-grid three-up-grid">
        ${storyPanels.map((item) => renderScienceInsightCard({ eyebrow: item.eyebrow, title: item.title, body: item.body, href: `#/topics/${encodeURIComponent(object.relatedTopicsDetailed[0]?.slug || 'understanding-starlight')}`, hrefLabel: 'Follow the science →' })).join('')}
      </div>
    </section>

    <section class="section-shell">
      <div class="section-header">
        <h2>Related objects</h2>
        <p>Compare this target with neighboring ideas in the Heavens knowledge web.</p>
      </div>
      <div class="card-grid three-up-grid">
        ${object.relatedObjectsDetailed.map((item) => renderRelatedObjectCard(item)).join('')}
      </div>
    </section>

    <section class="section-shell">
      <div class="section-header">
        <h2>Related reading and research panels</h2>
        <p>Curated locally now, designed so future live archive or ADS integrations can slot in later.</p>
      </div>
      <div class="card-grid three-up-grid">
        ${object.furtherReading.map((item) => renderScienceInsightCard({ eyebrow: 'Further reading', title: item.title, body: item.description, href: item.href, hrefLabel: 'Read next →' })).join('')}
        ${object.researchInspiration.map((item) => renderScienceInsightCard({ eyebrow: 'Research inspiration', title: 'A question worth asking', body: item, href: '#/topics/how-astronomers-know', hrefLabel: 'Research context →' })).join('')}
        ${object.relatedReadingDetailed.map((item) => renderScienceInsightCard({ eyebrow: 'Related astronomy topic', title: item.title, body: item.summary, href: `#/topics/${encodeURIComponent(item.slug)}` })).join('')}
      </div>
    </section>

    ${renderQaCallout({
      question: `What would change in our understanding of ${object.name} if we only knew its brightness but not its distance?`,
      answer: 'Without distance, astronomers could describe appearance but not true luminosity. Many of the most important physical comparisons depend on scale as much as on what the eye sees.',
      href: '#/topics/distances-in-space'
    })}

    ${renderObserveNext({
      items: object.relatedObjectsDetailed.map((item) => ({ label: item.name, href: `#/objects/${encodeURIComponent(item.slug)}` }))
    })}

    ${renderExploreMore({
      items: object.relatedTopicsDetailed.map((item) => ({ label: item.title, href: `#/topics/${encodeURIComponent(item.slug)}` }))
    })}

    ${renderResearchCards('Explore in the Sky Viewer', [
      {
        eyebrow: 'Sky Viewer route',
        title: `Open ${object.name} in context`,
        description: object.skyViewerNote,
        href: `#/observatory/${encodeURIComponent(object.slug)}`,
        hrefLabel: 'Open Observatory Mode →'
      }
    ])}
  `;

  return object;
}
