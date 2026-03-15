import { renderDisclaimerBlock, renderSourceAttributionBlock } from './complianceBlocks.js';
import { getComplianceContext } from '../services/complianceService.js';
import { fallbackOnErrorAttr, resolveHerbImage } from '../utils/imageAssets.js';

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function renderFilterDropdown(field, label, options, selectedValues) {
  const selectedText = selectedValues.length
    ? `${selectedValues.length} selected`
    : `All ${label.toLowerCase()}`;

  return `
    <details class="filter-dropdown">
      <summary>
        <span>${escapeHtml(label)}</span>
        <span class="filter-dropdown-meta">${escapeHtml(selectedText)}</span>
      </summary>
      <fieldset class="filter-group">
        <legend class="visually-hidden">${escapeHtml(label)}</legend>
        <div class="filter-options">
          ${options
            .map(
              (option) => `
                <label class="filter-option">
                  <input
                    type="checkbox"
                    name="${field}"
                    value="${escapeHtml(option)}"
                    ${selectedValues.includes(option) ? 'checked' : ''}
                  />
                  <span>${escapeHtml(option)}</span>
                </label>
              `
            )
            .join('')}
        </div>
      </fieldset>
    </details>
  `;
}

function renderHerbCard(herb) {
  return `
    <article class="herb-index-card card">
      <img
        class="herb-index-image"
        src="${escapeHtml(resolveHerbImage(herb, { variant: 'card' }))}"
        alt="${escapeHtml(herb.commonName)}"
        onerror="${escapeHtml(fallbackOnErrorAttr('card'))}"
      />
      <div class="herb-index-content">
        <h3>${escapeHtml(herb.commonName)}</h3>
        <p class="botanical"><em>${escapeHtml(herb.botanicalName)}</em></p>
        <p>${escapeHtml(herb.summary)}</p>
        <p class="chip-row">
          ${herb.medicinalActions.slice(0, 3).map((action) => `<span class="chip">${escapeHtml(action)}</span>`).join('')}
        </p>
        <p class="meta-line"><strong>Systems:</strong> ${herb.bodySystems.join(', ') || 'Not yet documented'}</p>
        <p class="meta-line"><strong>Preparations:</strong> ${herb.preparations.join(', ') || 'Not yet documented'}</p>
        <p class="meta-line"><strong>Categories:</strong> ${herb.herbalCategories.join(', ') || 'Not yet categorized'}</p>
        <p class="meta-line"><strong>Safety:</strong> ${escapeHtml(herb.safetyCategory)}</p>
        ${herb.safetySummary ? `<p class="meta-note">${escapeHtml(herb.safetySummary)}</p>` : ''}
        <a class="profile-link" href="#/herbs/${encodeURIComponent(herb.slug)}">View full profile</a>
      </div>
    </article>
  `;
}

export function renderMateriaMedicaIndex({ herbs, taxonomy, filters }) {
  const selectedCount = herbs.length;
  const compliance = getComplianceContext('materiaMedica');

  return `
    <section class="card materia-intro" aria-labelledby="materia-medica-heading">
      <div class="section-header">
      <h1 id="materia-medica-heading">SacredSeed Materia Medica</h1>
      <p>
        Explore our growing professional herbal library using searchable, taxonomy-based filters.
        Each entry is structured through SacredSeed's unified herb object architecture to support
        scholarly consistency as the materia medica expands.
      </p>
      </div>
    </section>

    <section class="card filter-panel">
      <div class="search-row">
        <label for="herb-search">Search by common or botanical name</label>
        <input id="herb-search" name="query" type="search" value="${escapeHtml(filters.query)}" placeholder="e.g., nettle, Urtica dioica" />
      </div>

      <div class="filter-dropdown-grid">
        ${renderFilterDropdown('herbNames', 'Herbs', taxonomy.herbNames, filters.herbNames)}
        ${renderFilterDropdown('medicinalActions', 'Medicinal actions', taxonomy.medicinalActions, filters.medicinalActions)}
        ${renderFilterDropdown('bodySystems', 'Body systems', taxonomy.bodySystems, filters.bodySystems)}
        ${renderFilterDropdown('preparations', 'Preparation types', taxonomy.preparations, filters.preparations)}
        ${renderFilterDropdown('herbalCategories', 'Herbal categories', taxonomy.herbalCategories, filters.herbalCategories)}
        ${renderFilterDropdown('safetyCategories', 'Safety categories', taxonomy.safetyCategories, filters.safetyCategories)}
      </div>

      <div class="filter-actions">
        <p class="result-count">${selectedCount} ${selectedCount === 1 ? 'herb' : 'herbs'} found</p>
        <button type="button" data-reset-filters>Reset filters</button>
      </div>
    </section>

    ${herbs.length
      ? `<section class="herb-index-grid">${herbs.map(renderHerbCard).join('')}</section>`
      : `
        <section class="card empty-state">
          <h3>No herbs match your current filters</h3>
          <p>Try broadening your search terms or clear the active filters to explore the full index.</p>
          <button type="button" data-reset-filters>Reset filters</button>
        </section>
      `}

    <section class="compliance-stack">
      ${renderDisclaimerBlock({
        title: 'Materia Medica Use Notice',
        educationalUseNotice: compliance.educationalUseNotice,
        medicalDisclaimer: compliance.medicalDisclaimer,
        disclaimers: compliance.disclaimers
      })}
      ${renderSourceAttributionBlock({
        title: 'Platform Attribution Framework',
        sourceAttribution: [
          {
            name: 'Profile-level source disclosures',
            category: 'architecture',
            attribution:
              'Detailed source and license notes are shown within each herb profile, formula, regional guide, or educational page using a shared compliance component.'
          }
        ],
        showLicenseNotes: false
      })}
    </section>
  `;
}
