import { searchableContentTypes } from '../services/siteSearchService.js';

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function renderTypeLabel(type) {
  return searchableContentTypes.find((entry) => entry.value === type)?.label ?? type;
}

function renderResultCard(item) {
  return `
    <article class="card search-result-card">
      <p class="label">${escapeHtml(renderTypeLabel(item.contentType))}</p>
      <h3>${escapeHtml(item.title)}</h3>
      ${item.subtitle ? `<p class="botanical">${escapeHtml(item.subtitle)}</p>` : ''}
      <p>${escapeHtml(item.summary ?? 'Summary forthcoming.')}</p>
      ${item.categories?.length ? `<p class="meta-note"><strong>Categories:</strong> ${item.categories.slice(0, 3).map(escapeHtml).join(', ')}</p>` : ''}
      ${item.regions?.length ? `<p class="meta-note"><strong>Regions:</strong> ${item.regions.slice(0, 2).map(escapeHtml).join(', ')}</p>` : ''}
      ${item.preparationTypes?.length ? `<p class="meta-note"><strong>Preparation types:</strong> ${item.preparationTypes.slice(0, 2).map(escapeHtml).join(', ')}</p>` : ''}
      <a class="profile-link" href="${escapeHtml(item.href)}">Open ${escapeHtml(renderTypeLabel(item.contentType).toLowerCase())} →</a>
    </article>
  `;
}

export function renderAdvancedSearch({ filters, searchOutcome }) {
  return `
    <section class="card materia-intro">
      <div class="section-header">
        <p class="eyebrow">Site-wide Search</p>
        <h1>SacredSeed Knowledge Search</h1>
        <p>Search herbs, collections, regional guides, preparations, formulas, pathways, and editorial articles from one calm interface.</p>
      </div>
    </section>

    <section class="card filter-panel">
      <div class="search-row">
        <label for="site-search-query">Search SacredSeed</label>
        <input id="site-search-query" type="search" value="${escapeHtml(filters.query)}" placeholder="Try: nettle, Pacific Northwest, infusion, beginner pathway" />
      </div>
      <div class="search-row">
        <label for="site-search-type">Content type</label>
        <select id="site-search-type">
          ${searchableContentTypes.map((entry) => `<option value="${escapeHtml(entry.value)}" ${entry.value === filters.contentType ? 'selected' : ''}>${escapeHtml(entry.label)}</option>`).join('')}
        </select>
      </div>
      <div class="filter-actions">
        <p class="result-count">${searchOutcome.total} results</p>
        <button type="button" data-reset-site-search>Reset</button>
      </div>
    </section>

    ${searchOutcome.total ? `
      <section class="search-groups">
        ${Object.entries(searchOutcome.grouped)
          .map(([contentType, items]) => `
            <section class="search-group section-shell" aria-label="${escapeHtml(renderTypeLabel(contentType))}">
              <h2>${escapeHtml(renderTypeLabel(contentType))}</h2>
              <div class="search-result-grid">
                ${items.slice(0, 8).map(renderResultCard).join('')}
              </div>
            </section>
          `)
          .join('')}
      </section>
    ` : `
      <section class="card empty-state">
        <h3>No results yet</h3>
        <p>Try a broader keyword or switch to "All content" to discover more of the SacredSeed knowledge library.</p>
      </section>
    `}
  `;
}
