function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function renderCheckboxGroup(field, label, options, selectedValues) {
  return `
    <fieldset class="filter-group">
      <legend>${escapeHtml(label)}</legend>
      <div class="filter-options">
        ${options
          .map(
            (option) => `
              <label class="filter-option">
                <input type="checkbox" name="${escapeHtml(field)}" value="${escapeHtml(option)}" ${selectedValues.includes(option) ? 'checked' : ''} />
                <span>${escapeHtml(option)}</span>
              </label>
            `
          )
          .join('')}
      </div>
    </fieldset>
  `;
}

function renderIngredientList(ingredients, amounts) {
  return `
    <ul class="subtle-list">
      ${ingredients
        .map((ingredient, index) => {
          const amount = amounts[index] ? `${escapeHtml(amounts[index])} — ` : '';
          const herbLink = ingredient.herbSlug
            ? `<a href="#/herbs/${encodeURIComponent(ingredient.herbSlug)}">${escapeHtml(ingredient.commonName)}</a>`
            : escapeHtml(ingredient.commonName);

          return `<li>${amount}${herbLink} <em>(${escapeHtml(ingredient.botanicalName)})</em>, ${escapeHtml(ingredient.herbPart)}</li>`;
        })
        .join('')}
    </ul>
  `;
}

function renderPreparationCard(item, typeLabel = 'Preparation Guide') {
  return `
    <article class="card preparation-card">
      <p class="label">${escapeHtml(typeLabel)} · ${escapeHtml(item.preparationType)}</p>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.preparationDescription)}</p>
      ${item.formulaCategory ? `<p class="meta-line"><strong>Category:</strong> ${escapeHtml(item.formulaCategory)}</p>` : ''}
      <p class="meta-line"><strong>Ingredients</strong></p>
      ${renderIngredientList(item.ingredientHerbs, item.ingredientAmounts)}
      <p class="meta-line"><strong>Method</strong></p>
      <ol class="subtle-list">
        ${item.methodSteps.map((step) => `<li>${escapeHtml(step)}</li>`).join('')}
      </ol>
      <p class="meta-line"><strong>Dosage:</strong> ${escapeHtml(item.dosageGuidance)}</p>
      <p class="meta-line"><strong>Safety:</strong> ${escapeHtml(item.safetyNotes)}</p>
      <p class="meta-line"><strong>Duration:</strong> ${escapeHtml(item.duration)}</p>
      <p class="meta-line"><strong>Storage:</strong> ${escapeHtml(item.storageNotes)}</p>
      <p class="chip-row">${item.preparationTags.map((tag) => `<span class="chip">${escapeHtml(tag)}</span>`).join('')}</p>
    </article>
  `;
}

function renderCollectionCard(collection) {
  return `
    <article class="card preparation-card">
      <p class="label">Remedy Collection · ${escapeHtml(collection.formulaCategory)}</p>
      <h3>${escapeHtml(collection.title)}</h3>
      <p>${escapeHtml(collection.description)}</p>
      <p class="meta-line"><strong>Included formulas:</strong> ${collection.formulaCount}</p>
      <ul class="subtle-list">
        ${collection.featuredFormulas.map((formula) => `<li>${escapeHtml(formula.title)} (${escapeHtml(formula.preparationType)})</li>`).join('')}
      </ul>
      <p class="chip-row">${collection.preparationTags.map((tag) => `<span class="chip">${escapeHtml(tag)}</span>`).join('')}</p>
    </article>
  `;
}

export function renderPreparationLibrary({ guides, formulas, collections, taxonomy, filters }) {
  const allCount = guides.length + formulas.length;

  return `
    <section class="card materia-intro">
      <div class="section-header">
      <h1>SacredSeed Preparations</h1>
      <p>
        Explore structured preparation guides, tea formulas, and remedy collections built on SacredSeed's unified herb object architecture.
        This library is designed for clinical clarity, scholarship, and practical household application.
      </p>
      <p class="meta-line">
        Looking for plant monographs? Return to the <a href="#/materia-medica">Materia Medica Index</a>.
      </p>
      </div>
    </section>

    <section class="card filter-panel">
      <div class="search-row">
        <label for="preparation-search">Search preparations, formulas, or herbs</label>
        <input id="preparation-search" name="query" type="search" value="${escapeHtml(filters.query)}" placeholder="e.g., infusion, calming, chamomile" />
      </div>

      ${renderCheckboxGroup('preparationTypes', 'Preparation types', taxonomy.preparationTypes, filters.preparationTypes)}
      ${renderCheckboxGroup('formulaCategories', 'Formula categories', taxonomy.formulaCategories, filters.formulaCategories)}
      ${renderCheckboxGroup('preparationTags', 'Preparation tags', taxonomy.preparationTags, filters.preparationTags)}

      <div class="filter-actions">
        <p class="result-count">${allCount} guides/formulas currently matched</p>
        <button type="button" data-reset-preparation-filters>Reset filters</button>
      </div>
    </section>

    <section class="preparation-section section-shell">
      <div class="preparation-section-intro section-header">
      <h3>Preparation Guides</h3>
      <p class="muted">Single-herb preparation references for foundational techniques such as infusions, teas, and decoctions.</p>
      </div>
      <div class="preparation-grid">${guides.map((guide) => renderPreparationCard(guide)).join('')}</div>
    </section>

    <section class="preparation-section section-shell">
      <div class="preparation-section-intro section-header">
      <h3>Tea Formulas</h3>
      <p class="muted">Multi-herb formulas categorized by therapeutic intent and preparation style.</p>
      </div>
      <div class="preparation-grid">${formulas.map((formula) => renderPreparationCard(formula, 'Formula')).join('')}</div>
    </section>

    <section class="preparation-section section-shell">
      <div class="preparation-section-intro section-header">
      <h3>Remedy Collections</h3>
      <p class="muted">Curated groupings for seasonal protocols and educational pathways. Future recipe and protocol modules can connect here.</p>
      </div>
      <div class="preparation-grid">${collections.map(renderCollectionCard).join('')}</div>
    </section>
  `;
}
