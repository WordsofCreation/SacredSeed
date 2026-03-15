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

function renderMatchedConsiderations(herb, filters) {
  const matches = [
    ...(filters.medicinalActions ?? []).filter((action) => herb.medicinalActions?.includes(action)),
    ...(filters.bodySystems ?? []).filter((system) => herb.bodySystems?.includes(system)),
    ...(filters.preparations ?? []).filter((prep) => herb.preparations?.includes(prep)),
    ...(filters.herbalCategories ?? []).filter((category) => herb.herbalCategories?.includes(category)),
    ...(filters.safetyCategories ?? []).filter((category) => herb.safetyCategory === category)
  ];

  if (!matches.length) {
    return '';
  }

  return `
    <div class="chip-row">
      ${matches.slice(0, 6).map((match) => `<span class="chip">${escapeHtml(match)}</span>`).join('')}
    </div>
  `;
}

function renderHerbResultCard(herb, filters) {
  return `
    <article class="card herb-index-card">
      <img
        class="herb-index-image"
        src="${resolveHerbImage(herb, { variant: 'profile' })}"
        alt="${escapeHtml(herb.commonName)}"
        loading="lazy"
        decoding="async"
        data-materia-botanical="${escapeHtml(herb.botanicalName)}"
        data-image-fallback="profile" onerror="${fallbackOnErrorAttr('profile')}"
      />
      <div class="herb-index-content">
        <h3>${escapeHtml(herb.commonName)}</h3>
        <p class="botanical">${escapeHtml(herb.botanicalName)}</p>
        <p>${escapeHtml(herb.summary ?? 'Profile summary forthcoming.')}</p>
        ${renderMatchedConsiderations(herb, filters)}
        <a class="profile-link" href="#/herbs/${encodeURIComponent(herb.slug)}">Read herb profile →</a>
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

    <section class="home-section" aria-label="Filtered herb results">
      <div class="herb-index-grid">
        ${herbs.length
    ? herbs.map((herb) => renderHerbResultCard(herb, filters)).join('')
    : `
            <article class="card empty-state">
              <h2>No herbs matched those filters</h2>
              <p>Try removing one or more considerations to broaden your results.</p>
            </article>
          `}
      </div>
    </section>

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
