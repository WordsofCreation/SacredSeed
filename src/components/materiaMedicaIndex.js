import { renderDisclaimerBlock, renderSourceAttributionBlock } from './complianceBlocks.js';
import { getComplianceContext } from '../services/complianceService.js';

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

    <section class="card empty-state" aria-live="polite">
      <h3>Herb cards are hidden on this page</h3>
      <p>
        Use the filter dropdowns above to narrow your study set without rendering the full herb list below.
      </p>
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
