import { renderRelatedObjectCard } from '../components/astronomyContent.js';
import { getAstronomyObjects } from '../services/astronomyContentService.js';

export function renderObjectsIndexPage(rootElement) {
  const objects = getAstronomyObjects();

  rootElement.innerHTML = `
    <section class="page-hero card">
      <p class="eyebrow">Object directory</p>
      <h1>Dedicated astronomy object pages</h1>
      <p class="hero-subtitle">Explore visually recognizable stars and deep-sky objects through premium, readable pages built from structured local data.</p>
    </section>

    <section class="section-shell">
      <div class="section-header">
        <h2>Browse objects</h2>
      </div>
      <div class="card-grid three-up-grid">
        ${objects.map((item) => renderRelatedObjectCard(item)).join('')}
      </div>
    </section>
  `;
}
