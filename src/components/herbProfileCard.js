function asList(items) {
  if (!items?.length) {
    return '<p>Not yet documented.</p>';
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

export function renderHerbProfileCard(herb, sourceMeta) {
  return `
    <article class="herb-profile">
      <aside class="card">
        ${herb.image ? `<img class="hero-image" src="${herb.image}" alt="${herb.commonName}" />` : ''}
        <p class="label">Common Name</p>
        <h2 class="title">${herb.commonName}</h2>
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
          <h3>Medicinal Properties</h3>
          ${asList(herb.medicinalProperties)}
        </div>
        <div>
          <h3>Preparations</h3>
          ${asList(herb.preparations)}
        </div>
        <div>
          <h3>Plant Chemistry</h3>
          ${herb.activeCompounds?.length ? `<p><strong>Active compounds:</strong> ${herb.activeCompounds.slice(0, 6).join(', ')}.</p>` : '<p class="muted">Chemistry data is pending source enrichment.</p>'}
          ${herb.chemistryNotes ? `<p class="meta-note" style="margin-top: 0.35rem;">${herb.chemistryNotes}</p>` : ''}
          ${renderCompoundDetails(herb)}
          ${herb.chemistrySources?.length ? `<p class="meta-note" style="margin-top: 0.35rem;">Chemistry sources: ${herb.chemistrySources.join(', ')}.</p>` : ''}
        </div>
        <div>
          <h3>Safety Notes</h3>
          <p>${herb.safetyNotes}</p>
        </div>
      </section>
    </article>
  `;
}
