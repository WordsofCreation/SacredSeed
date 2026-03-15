import { renderRelatedContentBlock } from './relatedContent.js';
import { fallbackOnErrorAttr, resolveHerbImage } from '../utils/imageAssets.js';

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function renderHerbMiniCard(herb) {
  return `
    <article class="card herb-index-card">
      <img class="herb-index-image" src="${resolveHerbImage(herb)}" alt="${escapeHtml(herb.commonName)}" onerror="${fallbackOnErrorAttr('card')}" />
      <div class="herb-index-content">
        <h3>${escapeHtml(herb.commonName)}</h3>
        <p class="botanical">${escapeHtml(herb.botanicalName)}</p>
        <p>${escapeHtml(herb.summary ?? 'Profile summary forthcoming.')}</p>
        <a class="profile-link" href="#/herbs/${encodeURIComponent(herb.slug)}">Read herb profile →</a>
      </div>
    </article>
  `;
}

function renderPathwayStep(step, index) {
  if (step.kind === 'herb') {
    return `
      <li class="card pathway-step">
        <p class="label">Step ${index + 1} · Herb Study</p>
        <h3>${escapeHtml(step.title)}</h3>
        <p class="botanical">${escapeHtml(step.botanicalName)}</p>
        <p>${escapeHtml(step.description ?? 'Explore this herb profile to continue the pathway.')}</p>
        <a class="profile-link" href="${escapeHtml(step.href)}">Open herb profile →</a>
      </li>
    `;
  }

  return `
    <li class="card pathway-step pathway-step-site">
      <p class="label">Step ${index + 1} · Guided Reading</p>
      <h3>${escapeHtml(step.title)}</h3>
      <p>${escapeHtml(step.description ?? 'Continue to the next SacredSeed learning module.')}</p>
      <a class="profile-link" href="${escapeHtml(step.href)}">Continue →</a>
    </li>
  `;
}

export function renderLearningPathwaysIndex(pathways) {
  return `
    <section class="section-shell materia-intro" aria-labelledby="pathways-title">
      <div class="section-header">
        <p class="eyebrow">Beginner Learning Pathways</p>
        <h1 id="pathways-title">Start here: guided herbal learning journeys</h1>
        <p>
          These pathways organize herbs, preparations, and SacredSeed pages into beginner-friendly study sequences.
          Each route is educational, safety-aware, and designed to make your first steps into materia medica easier.
        </p>
      </div>
      <p class="meta-note">
        Educational use only. Pathways support herbal literacy and are not individualized medical treatment guidance.
      </p>
    </section>

    <section class="home-section" aria-label="Learning pathway list">
      <div class="collection-grid">
        ${pathways
          .map(
            (pathway) => `
              <article class="card collection-card pathway-card">
                <p class="label">Learning Pathway</p>
                <h2>${escapeHtml(pathway.title)}</h2>
                <p>${escapeHtml(pathway.intro)}</p>
                <p class="meta-line"><strong>Goal:</strong> ${escapeHtml(pathway.educationalGoal)}</p>
                <div class="chip-row">
                  <span class="chip">${escapeHtml(pathway.difficulty ?? 'Beginner')}</span>
                  <span class="chip">${escapeHtml(pathway.estimatedDuration ?? 'Self-paced')}</span>
                  <span class="chip">${pathway.herbCount} herb profiles</span>
                </div>
                ${pathway.featuredHerbs?.length ? `<p class="meta-note"><strong>Includes:</strong> ${pathway.featuredHerbs.map((herb) => escapeHtml(herb.commonName)).join(', ')}.</p>` : ''}
                <a class="profile-link" href="#/pathways/${encodeURIComponent(pathway.slug)}">Open pathway →</a>
              </article>
            `
          )
          .join('')}
      </div>
    </section>
  `;
}

export function renderLearningPathwayDetail(pathway, relatedContent = {}) {
  return `
    <section class="section-shell materia-intro" aria-labelledby="pathway-title">
      <div class="section-header">
        <p class="eyebrow">Guided Beginner Pathway</p>
        <h1 id="pathway-title">${escapeHtml(pathway.title)}</h1>
        <p>${escapeHtml(pathway.intro)}</p>
      </div>
      <p><strong>Educational goal:</strong> ${escapeHtml(pathway.educationalGoal)}</p>
      <div class="chip-row">
        <span class="chip">${escapeHtml(pathway.difficulty ?? 'Beginner')}</span>
        <span class="chip">${escapeHtml(pathway.estimatedDuration ?? 'Self-paced')}</span>
        <span class="chip">${pathway.herbs.length} herbs in sequence</span>
      </div>
      <div class="hero-actions">
        <a class="secondary-link" href="#/pathways">All pathways</a>
        <a class="secondary-link" href="#/materia-medica">Materia Medica index</a>
      </div>
    </section>

    <section class="home-section" aria-labelledby="pathway-steps-title">
      <div class="section-header section-shell">
        <h2 id="pathway-steps-title">Step-by-step learning sequence</h2>
        <p>Follow the sequence in order, then revisit any step to deepen your understanding.</p>
      </div>
      <ol class="pathway-step-list">
        ${pathway.sequence.map((step, index) => renderPathwayStep(step, index)).join('')}
      </ol>
    </section>

    ${pathway.herbs?.length ? `
      <section class="home-section" aria-labelledby="pathway-herbs-title">
        <div class="section-header section-shell">
          <h2 id="pathway-herbs-title">Herbs included in this pathway</h2>
          <p>Use these profile cards to jump directly to each herb in your study route.</p>
        </div>
        <div class="herb-index-grid">
          ${pathway.herbs.map(renderHerbMiniCard).join('')}
        </div>
      </section>
    ` : ''}

    ${renderRelatedContentBlock({
      title: 'Continue learning',
      sections: [
        { title: 'Related articles', items: relatedContent.relatedArticles ?? [] },
        { title: 'Related collections', items: relatedContent.relatedCollections ?? [] },
        { title: 'Next pathways', items: relatedContent.relatedPathways ?? [] }
      ]
    })}

    ${pathway.relatedLinks?.length ? `
      <section class="section-shell" aria-label="Related learning routes">
        <h2>Continue your learning</h2>
        <div class="hero-actions">
          ${pathway.relatedLinks
            .map((route) => `<a class="secondary-link" href="${escapeHtml(route.href)}">${escapeHtml(route.label)}</a>`)
            .join('')}
        </div>
      </section>
    ` : ''}
  `;
}
