import { renderContentCard, renderExploreMore } from '../components/astronomyContent.js';
import { getAstronomyLearningPaths } from '../services/astronomyContentService.js';

export function renderLearnPage(rootElement) {
  const paths = getAstronomyLearningPaths();

  rootElement.innerHTML = `
    <section class="page-hero card">
      <p class="eyebrow">Learn</p>
      <h1>Guided astronomy learning pathways</h1>
      <p class="hero-subtitle">Move through astronomy progressively with approachable, well-structured pathways that connect core science ideas to specific stars and observing habits.</p>
    </section>

    <section class="section-shell">
      <div class="section-header">
        <h2>Choose your pathway</h2>
        <p>These pathways are written to be self-guided, visually calm, and easy to continue across sessions.</p>
      </div>
      <div class="card-grid two-up-grid">
        ${paths.map((path) => renderContentCard({ eyebrow: `${path.difficulty} · ${path.estimatedDuration}`, title: path.title, description: path.intro, href: `#/learn/${encodeURIComponent(path.slug)}`, hrefLabel: 'Begin pathway →' })).join('')}
      </div>
    </section>

    ${renderExploreMore({
      title: 'Suggested foundations',
      items: [
        { label: 'Understanding starlight', href: '#/topics/understanding-starlight' },
        { label: 'How stars are classified', href: '#/topics/stellar-classification' },
        { label: 'The life cycle of stars', href: '#/topics/stellar-lifecycle' }
      ]
    })}
  `;
}
