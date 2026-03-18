import { fallbackOnErrorAttr, resolveHerbImage } from '../utils/imageAssets.js';

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function renderHerbCard(herb) {
  return `
    <article class="card herb-index-card">
      <img class="herb-index-image" src="${resolveHerbImage(herb)}" alt="${escapeHtml(herb.commonName)}" data-image-fallback="card" onerror="${fallbackOnErrorAttr('card')}" />
      <div class="herb-index-content">
        <h3>${escapeHtml(herb.commonName)}</h3>
        <p class="botanical">${escapeHtml(herb.botanicalName)}</p>
        <p>${escapeHtml(herb.summary ?? 'Profile summary forthcoming.')}</p>
        <a class="profile-link" href="#/herbs/${encodeURIComponent(herb.slug)}">Read herb profile →</a>
      </div>
    </article>
  `;
}

export function renderSeasonalCollectionsIndex(collections) {
  return `
    <section class="section-shell materia-intro" aria-labelledby="seasonal-title">
      <div class="section-header">
        <p class="eyebrow">Seasonal Herbal Collections</p>
        <h1 id="seasonal-title">Explore herbs through seasonal rhythm</h1>
        <p>
          SacredSeed seasonal collections combine curated herbs, preparation references, and educational context
          so learners can study herbalism through time, climate transitions, and practical routines.
        </p>
      </div>
      <p class="meta-note">Educational use only. Seasonal pages support study and are not treatment protocols.</p>
    </section>

    <section class="home-section" aria-label="Seasonal collection list">
      <div class="collection-grid">
        ${collections
    .map(
      (collection) => `
              <article class="card collection-card seasonal-collection-card">
                <p class="label">${escapeHtml(collection.season)} Collection</p>
                <h2>${escapeHtml(collection.title)}</h2>
                <p>${escapeHtml(collection.shortIntro)}</p>
                <p class="meta-line"><strong>${collection.herbCount}</strong> herbs in this seasonal set.</p>
                ${collection.featuredHerbs?.length ? `<p class="meta-note"><strong>Includes:</strong> ${collection.featuredHerbs.map((herb) => escapeHtml(herb.commonName)).join(', ')}.</p>` : ''}
                <a class="profile-link" href="#/seasons/${encodeURIComponent(collection.slug)}">Open seasonal guide →</a>
              </article>
            `
    )
    .join('')}
      </div>
    </section>
  `;
}

export function renderSeasonalCollectionDetail(collection) {
  return `
    <section class="section-shell materia-intro" aria-labelledby="season-title">
      <div class="section-header">
        <p class="eyebrow">${escapeHtml(collection.season)} Herbal Study</p>
        <h1 id="season-title">${escapeHtml(collection.title)}</h1>
        <p>${escapeHtml(collection.shortIntro)}</p>
      </div>
      <p>${escapeHtml(collection.educationalOverview)}</p>
      ${collection.sourceNote ? `<p class="meta-note"><strong>Note:</strong> ${escapeHtml(collection.sourceNote)}</p>` : ''}
      <div class="hero-actions">
        <a class="secondary-link" href="#/seasons">All seasonal collections</a>
        <a class="secondary-link" href="#/preparations">Preparation library</a>
      </div>
    </section>

    ${collection.preparations?.length ? `
      <section class="section-shell" aria-labelledby="season-prep-title">
        <h2 id="season-prep-title">Relevant preparations and formulas</h2>
        <div class="chip-row">
          ${collection.preparations.map((item) => `<a class="chip chip-link" href="${escapeHtml(item.href)}">${escapeHtml(item.title)}</a>`).join('')}
        </div>
      </section>
    ` : ''}

    ${collection.herbConsiderations?.length ? `
      <section class="section-shell collection-notes" aria-labelledby="season-considerations-title">
        <h2 id="season-considerations-title">Seasonal herb considerations</h2>
        <ul class="subtle-list">
          ${collection.herbConsiderations.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
        </ul>
      </section>
    ` : ''}

    ${collection.regionalNotes?.length ? `
      <section class="section-shell collection-notes" aria-labelledby="season-regional-title">
        <h2 id="season-regional-title">Regional context</h2>
        <ul class="subtle-list">
          ${collection.regionalNotes.map((note) => `<li>${escapeHtml(note)}</li>`).join('')}
        </ul>
      </section>
    ` : ''}

    <section class="home-section" aria-labelledby="season-herbs-title">
      <div class="section-header section-shell">
        <h2 id="season-herbs-title">Herbs in this seasonal collection</h2>
        <p>Open each herb profile for deeper study of actions, preparations, and safety framing.</p>
      </div>
      <div class="herb-index-grid">
        ${collection.herbs.map(renderHerbCard).join('')}
      </div>
    </section>

    ${collection.relatedRoutes?.length ? `
      <section class="section-shell" aria-label="Related seasonal routes">
        <h2>Continue your seasonal learning</h2>
        <div class="hero-actions">
          ${collection.relatedRoutes.map((route) => `<a class="secondary-link" href="${escapeHtml(route.href)}">${escapeHtml(route.label)}</a>`).join('')}
        </div>
      </section>
    ` : ''}
  `;
}
