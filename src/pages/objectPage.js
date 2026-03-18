import { renderExploreMore, renderKeyFactPanel, renderObserveNext, renderQaCallout, renderRelatedObjectCard, renderResearchCards, renderScienceInsightCard } from '../components/astronomyContent.js';
import { getAstronomyObjectBySlug } from '../services/astronomyContentService.js';

function renderSection(title, body) {
  return `
    <section class="card reading-section">
      <h2>${title}</h2>
      <p>${body}</p>
    </section>
  `;
}

export function renderObjectPage(rootElement, slug) {
  const object = getAstronomyObjectBySlug(slug);

  if (!object) {
    rootElement.innerHTML = `
      <section class="card error-state">
        <p class="eyebrow">Object not found</p>
        <h2>We couldn’t find that object page.</h2>
        <p>Try the Discover or Learn sections to continue exploring Heavens.</p>
        <a class="primary-link" href="#/discover">Go to Discover</a>
      </section>
    `;
    return null;
  }

  const facts = [
    { label: 'Object type', value: object.type },
    { label: 'Constellation', value: object.constellation },
    { label: 'Approximate distance', value: object.distance },
    { label: 'Spectral class', value: object.spectralClass || 'Not applicable' },
    { label: 'Color / temperature', value: object.colorTemperature }
  ];

  rootElement.innerHTML = `
    <section class="page-hero object-hero card">
      <p class="eyebrow">Dedicated object page</p>
      <h1>${object.name}</h1>
      <p class="hero-subtitle">${object.description}</p>
      <div class="tag-row">
        ${(object.tags || []).map((tag) => `<span class="tag-chip static-tag">${tag.replaceAll('-', ' ')}</span>`).join('')}
      </div>
    </section>

    ${renderKeyFactPanel(facts)}

    ${renderSection('Introduction', object.intro)}
    ${renderSection('What We Learn from Its Light', object.lightLearning)}
    ${renderSection('How It Fits in the Universe', object.universeContext)}
    ${renderSection('Why Astronomers Care About It', object.astronomerInterest)}

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
        href: '#/discover',
        hrefLabel: 'Open Sky Viewer guidance →'
      }
    ])}
  `;

  return object;
}
