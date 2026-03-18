import { renderExploreMore, renderRelatedObjectCard } from '../components/astronomyContent.js';
import { getAstronomyLearningPathBySlug } from '../services/astronomyContentService.js';

export function renderLearnPathPage(rootElement, slug) {
  const path = getAstronomyLearningPathBySlug(slug);

  if (!path) {
    rootElement.innerHTML = `
      <section class="card error-state">
        <p class="eyebrow">Pathway not found</p>
        <h2>This learning pathway is unavailable.</h2>
        <a class="primary-link" href="#/learn">Browse all pathways</a>
      </section>
    `;
    return null;
  }

  rootElement.innerHTML = `
    <section class="page-hero card">
      <p class="eyebrow">Learning pathway</p>
      <h1>${path.title}</h1>
      <p class="hero-subtitle">${path.intro}</p>
      <p class="meta-line"><strong>${path.difficulty}</strong> · ${path.estimatedDuration}</p>
    </section>

    <section class="section-shell">
      <div class="section-header">
        <h2>Progress through the pathway</h2>
      </div>
      <div class="pathway-sections">
        ${path.sections.map((section) => `
          <article class="card pathway-step-card">
            <h3>${section.title}</h3>
            <p>${section.body}</p>
            <div class="tag-row">
              ${section.resolvedLinks.map((link) => `<a class="tag-chip" href="${link.href}">${link.label}</a>`).join('')}
            </div>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="section-shell">
      <div class="section-header">
        <h2>Example objects in this pathway</h2>
      </div>
      <div class="card-grid three-up-grid">
        ${path.relatedObjectsDetailed.map((item) => renderRelatedObjectCard(item)).join('')}
      </div>
    </section>

    ${renderExploreMore({
      items: path.relatedTopicsDetailed.map((item) => ({ label: item.title, href: `#/topics/${encodeURIComponent(item.slug)}` }))
    })}
  `;

  return path;
}
