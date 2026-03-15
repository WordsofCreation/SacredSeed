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
        ${herb.herbalCategories?.length ? `<div class="chip-row">${herb.herbalCategories.slice(0, 3).map((category) => `<span class="chip">${escapeHtml(category)}</span>`).join('')}</div>` : ''}
        <a class="profile-link" href="#/herbs/${encodeURIComponent(herb.slug)}">Read herb profile →</a>
      </div>
    </article>
  `;
}

export function renderHerbCollectionsIndex(collections) {
  return `
    <section class="section-shell materia-intro" aria-labelledby="collections-title">
      <div class="section-header">
        <p class="eyebrow">Featured Educational Collections</p>
        <h1 id="collections-title">Explore herbs through guided themes</h1>
        <p>
          These editorial collections help you navigate SacredSeed by learning pathway, plant function,
          and regional context while linking directly back to full materia medica profiles.
        </p>
      </div>
      <p class="meta-note">
        Educational use only. Collection pages are for study and navigation, not medical diagnosis or treatment guidance.
      </p>
    </section>

    <section class="home-section" aria-label="Collection list">
      <div class="collection-grid">
        ${collections
          .map(
            (collection) => `
              <article class="card collection-card">
                <p class="label">Herb Collection</p>
                <h2>${escapeHtml(collection.title)}</h2>
                <p>${escapeHtml(collection.shortIntro)}</p>
                <p class="meta-line"><strong>${collection.herbCount}</strong> herbs in this guide.</p>
                ${collection.contextTags?.length ? `<div class="chip-row">${collection.contextTags.map((tag) => `<span class="chip">${escapeHtml(tag)}</span>`).join('')}</div>` : ''}
                ${collection.featuredHerbs?.length ? `<p class="meta-note"><strong>Includes:</strong> ${collection.featuredHerbs.map((herb) => escapeHtml(herb.commonName)).join(', ')}.</p>` : ''}
                <a class="profile-link" href="#/collections/${encodeURIComponent(collection.slug)}">Open collection guide →</a>
              </article>
            `
          )
          .join('')}
      </div>
    </section>
  `;
}

export function renderHerbCollectionDetail(collection, relatedContent = { relatedCollections: [] }) {
  return `
    <section class="section-shell materia-intro" aria-labelledby="collection-title">
      <div class="section-header">
        <p class="eyebrow">Educational Herb Collection</p>
        <h1 id="collection-title">${escapeHtml(collection.title)}</h1>
        <p>${escapeHtml(collection.shortIntro)}</p>
      </div>
      <p>${escapeHtml(collection.educationalSummary)}</p>
      ${collection.contextTags?.length ? `<div class="chip-row">${collection.contextTags.map((tag) => `<span class="chip">${escapeHtml(tag)}</span>`).join('')}</div>` : ''}
      <div class="hero-actions">
        <a class="secondary-link" href="#/collections">All collections</a>
        <a class="secondary-link" href="#/materia-medica">Materia Medica index</a>
      </div>
    </section>

    ${collection.preparationNotes?.length ? `
      <section class="section-shell collection-notes" aria-labelledby="collection-notes-title">
        <h2 id="collection-notes-title">Preparation and study notes</h2>
        <ul class="subtle-list">
          ${collection.preparationNotes.map((note) => `<li>${escapeHtml(note)}</li>`).join('')}
        </ul>
      </section>
    ` : ''}

    <section class="home-section" aria-labelledby="collection-herbs-title">
      <div class="section-header section-shell">
        <h2 id="collection-herbs-title">Herbs in this collection</h2>
        <p>Use these profiles to continue deeper study of botany, actions, preparations, and safety context.</p>
      </div>
      <div class="herb-index-grid">
        ${collection.herbs.map(renderHerbMiniCard).join('')}
      </div>
    </section>


    ${renderRelatedContentBlock({
      title: 'Related collection links',
      sections: [
        { title: 'Related collections', items: relatedContent.relatedCollections ?? [] }
      ]
    })}


    ${collection.relatedRoutes?.length ? `
      <section class="section-shell" aria-label="Related learning routes">
        <h2>Continue your study pathway</h2>
        <div class="hero-actions">
          ${collection.relatedRoutes
            .map((route) => `<a class="secondary-link" href="${escapeHtml(route.href)}">${escapeHtml(route.label)}</a>`)
            .join('')}
        </div>
      </section>
    ` : ''}
  `;
}
