function asList(items) {
  if (!items?.length) {
    return '<p>Not yet documented.</p>';
  }

  return `<ul class="subtle-list">${items.map((item) => `<li>${item}</li>`).join('')}</ul>`;
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
        <p class="label" style="margin-top: 0.8rem;">Data Source</p>
        <p>${sourceMeta.source}</p>
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
          <h3>Safety Notes</h3>
          <p>${herb.safetyNotes}</p>
        </div>
      </section>
    </article>
  `;
}
