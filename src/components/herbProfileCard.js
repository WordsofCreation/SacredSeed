import { renderDisclaimerBlock, renderSourceAttributionBlock } from './complianceBlocks.js';
import { getComplianceContext } from '../services/complianceService.js';
import { fallbackOnErrorAttr, resolveHerbImage } from '../utils/imageAssets.js';

function asList(items, emptyText = 'Not yet documented.') {
  if (!items?.length) {
    return `<p class="muted">${emptyText}</p>`;
  }

  return `<ul class="subtle-list">${items.map((item) => `<li>${item}</li>`).join('')}</ul>`;
}

function renderTaxonomy(herb) {
  const taxonomyRows = [
    ['Status', herb.taxonomyStatus],
    ['Kingdom', herb.kingdom],
    ['Phylum', herb.phylum],
    ['Class', herb.class],
    ['Order', herb.order],
    ['Genus', herb.genus],
    ['Species', herb.species]
  ].filter(([, value]) => value);

  if (!taxonomyRows.length) {
    return '<p class="muted">Taxonomy verification will appear as secondary sources are available.</p>';
  }

  return `<dl class="taxonomy-list">${taxonomyRows
    .map(([term, value]) => `<div><dt>${term}</dt><dd>${value}</dd></div>`)
    .join('')}</dl>`;
}

function renderCompoundDetails(herb) {
  if (!herb.compoundDetails?.length) {
    return '<p class="muted">Detailed records are not yet available for this herb.</p>';
  }

  const featured = herb.compoundDetails.slice(0, 4);

  return `<div class="compound-list">${featured
    .map((compound) => {
      const meta = [compound.category, compound.molecularFormula].filter(Boolean).join(' · ');
      return `
        <article class="compound-item">
          <h4>${compound.name}</h4>
          ${meta ? `<p class="compound-meta">${meta}</p>` : ''}
          ${compound.summary ? `<p>${compound.summary}</p>` : ''}
        </article>
      `;
    })
    .join('')}</div>`;
}

function renderPreparations(preparations) {
  if (!preparations?.length) {
    return '<p class="muted">Preparation guidance will appear as medicinal datasets expand.</p>';
  }

  return `<div class="preparation-list">${preparations
    .map((prep) => {
      if (typeof prep === 'string') {
        return `<article class="compound-item"><h4>${prep}</h4></article>`;
      }

      const heading = [prep.type, prep.part ? `(${prep.part})` : null].filter(Boolean).join(' ');
      return `
        <article class="compound-item">
          <h4>${heading || 'Preparation note'}</h4>
          ${prep.guidance ? `<p>${prep.guidance}</p>` : ''}
        </article>
      `;
    })
    .join('')}</div>`;
}

function renderSafetySection(herb) {
  return `
    <div class="safety-panel">
      ${herb.safetySummary ? `<p>${herb.safetySummary}</p>` : '<p class="muted">Safety context is being expanded through medicinal reference layers.</p>'}
      ${asList(herb.safetyNotes, 'General safety notes are not yet documented.')}
      <div class="safety-grid">
        <div>
          <h4>Contraindications</h4>
          ${asList(herb.contraindications, 'No specific contraindications documented in this profile layer.')}
        </div>
        <div>
          <h4>Cautions</h4>
          ${asList(herb.cautions, 'No specific cautions documented in this profile layer.')}
        </div>
        <div>
          <h4>Interactions</h4>
          ${asList(herb.interactions, 'No major interactions documented in this profile layer.')}
        </div>
      </div>
      ${herb.pregnancyLactationNotes ? `<p class="meta-note"><strong>Pregnancy/Lactation:</strong> ${herb.pregnancyLactationNotes}</p>` : ''}
      ${herb.toxicityNotes ? `<p class="meta-note"><strong>Toxicity:</strong> ${herb.toxicityNotes}</p>` : ''}
    </div>
  `;
}

export function renderHerbProfileCard(herb, sourceMeta) {
  const compliance = getComplianceContext('herbProfile', { herb, sourceMeta });

  return `
    <article class="herb-profile">
      <aside class="card">
        <img class="hero-image" src="${resolveHerbImage(herb, { variant: 'profile' })}" alt="${herb.commonName}" onerror="${fallbackOnErrorAttr('profile')}" />
        <p class="label">Common Name</p>
        <h1 class="title">${herb.commonName}</h1>
        <p class="label">Botanical Name</p>
        <p><em>${herb.botanicalName}</em></p>
        <p class="label">Family</p>
        <p>${herb.family}</p>
        <p class="label">Synonyms</p>
        ${asList(herb.synonyms)}

        <p class="label" style="margin-top: 0.8rem;">Taxonomy Verification</p>
        ${renderTaxonomy(herb)}

        <p class="label" style="margin-top: 0.8rem;">Data Source</p>
        <p>${sourceMeta.source}</p>
        ${herb.dataSources?.length ? `<p class="meta-note">Referenced datasets: ${herb.dataSources.join(', ')}.</p>` : ''}
        ${sourceMeta.gbif?.available ? '' : '<p class="meta-note">GBIF enrichment temporarily unavailable; curated profile details shown.</p>'}
        ${sourceMeta.pubchem?.available ? '' : '<p class="meta-note">PubChem chemistry enrichment is limited; curated chemistry context is shown when possible.</p>'}
      </aside>

      <section class="card grid">
        <div>
          <h3>Description</h3>
          <p>${herb.description}</p>
        </div>
        <div>
          <h3>Distribution</h3>
          <p>${herb.distribution}</p>
        </div>
        <div>
          <h3>Native Range & Occurrence</h3>
          <p>${herb.nativeRange ?? herb.habitat}</p>
          ${herb.occurrenceNotes ? `<p class="meta-note" style="margin-top: 0.35rem;">${herb.occurrenceNotes}</p>` : ''}
        </div>
        <div>
          <h3>Habitat</h3>
          <p>${herb.habitat}</p>
        </div>
        <div>
          <h3>Medicinal Actions</h3>
          ${asList(herb.medicinalActions, 'Medicinal action taxonomy has not yet been mapped for this herb.')}
          ${herb.herbalCategories?.length ? `<p class="meta-note"><strong>Categories:</strong> ${herb.herbalCategories.join(', ')}.</p>` : ''}
          ${herb.bodySystems?.length ? `<p class="meta-note"><strong>Body systems:</strong> ${herb.bodySystems.join(', ')}.</p>` : ''}
          ${herb.energetics?.length ? `<p class="meta-note"><strong>Energetics:</strong> ${herb.energetics.join(', ')}.</p>` : ''}
        </div>
        <div>
          <h3>Traditional Uses</h3>
          ${asList(herb.traditionalUses, 'Traditional use notes are still being expanded for this herb.')}
        </div>
        <div>
          <h3>Preparations</h3>
          ${renderPreparations(herb.preparations)}
          ${asList(herb.dosageNotes, 'Dosage notes are not yet available in this profile layer.')}
        </div>
        <div>
          <h3>Plant Chemistry</h3>
          ${herb.activeCompounds?.length ? `<p><strong>Active compounds:</strong> ${herb.activeCompounds.slice(0, 6).join(', ')}.</p>` : '<p class="muted">Chemistry data is pending source enrichment.</p>'}
          ${herb.chemistryNotes ? `<p class="meta-note" style="margin-top: 0.35rem;">${herb.chemistryNotes}</p>` : ''}
          ${renderCompoundDetails(herb)}
        </div>
        <div class="full-width">
          <h3>Safety</h3>
          ${renderSafetySection(herb)}
        </div>
        <div class="full-width">
          ${renderSourceAttributionBlock(compliance)}
          ${renderDisclaimerBlock(compliance)}
        </div>
      </section>
    </article>
  `;
}
