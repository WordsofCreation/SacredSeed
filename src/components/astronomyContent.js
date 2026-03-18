function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function renderLinkPill(href, label) {
  return `<a class="tag-chip" href="${escapeHtml(href)}">${escapeHtml(label)}</a>`;
}

export function renderKeyFactPanel(facts) {
  return `
    <section class="card key-facts-panel">
      <h2>Key facts</h2>
      <dl class="key-facts-grid">
        ${facts.map((fact) => `
          <div>
            <dt>${escapeHtml(fact.label)}</dt>
            <dd>${escapeHtml(fact.value)}</dd>
          </div>
        `).join('')}
      </dl>
    </section>
  `;
}

export function renderScienceInsightCard({ eyebrow = 'Science insight', title, body, href, hrefLabel = 'Explore more →' }) {
  return `
    <article class="card science-insight-card">
      <p class="label">${escapeHtml(eyebrow)}</p>
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(body)}</p>
      ${href ? `<a class="profile-link" href="${escapeHtml(href)}">${escapeHtml(hrefLabel)}</a>` : ''}
    </article>
  `;
}

export function renderRelatedObjectCard(object) {
  return `
    <article class="card related-object-card">
      <p class="label">${escapeHtml(object.type)}</p>
      <h3>${escapeHtml(object.name)}</h3>
      <p>${escapeHtml(object.constellation)} · ${escapeHtml(object.distance)}</p>
      <p>${escapeHtml(object.intro)}</p>
      <a class="profile-link" href="#/objects/${encodeURIComponent(object.slug)}">Open object page →</a>
    </article>
  `;
}

export function renderContentCard({ eyebrow, title, description, href, hrefLabel = 'Explore →' }) {
  return `
    <article class="card science-content-card">
      ${eyebrow ? `<p class="label">${escapeHtml(eyebrow)}</p>` : ''}
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(description)}</p>
      ${href ? `<a class="profile-link" href="${escapeHtml(href)}">${escapeHtml(hrefLabel)}</a>` : ''}
    </article>
  `;
}

export function renderQaCallout({ question, answer, href, hrefLabel = 'Follow the science →' }) {
  return `
    <aside class="card qa-callout">
      <p class="label">Cosmic question</p>
      <h3>${escapeHtml(question)}</h3>
      <p>${escapeHtml(answer)}</p>
      ${href ? `<a class="profile-link" href="${escapeHtml(href)}">${escapeHtml(hrefLabel)}</a>` : ''}
    </aside>
  `;
}

export function renderObserveNext({ title = 'Observe this next', items = [] }) {
  if (!items.length) {
    return '';
  }

  return `
    <section class="card observe-next-panel">
      <h2>${escapeHtml(title)}</h2>
      <div class="tag-row">
        ${items.map((item) => renderLinkPill(item.href, item.label)).join('')}
      </div>
    </section>
  `;
}

export function renderExploreMore({ title = 'If you liked this, explore…', items = [] }) {
  if (!items.length) {
    return '';
  }

  return `
    <section class="card explore-more-panel">
      <h2>${escapeHtml(title)}</h2>
      <div class="tag-row">
        ${items.map((item) => renderLinkPill(item.href, item.label)).join('')}
      </div>
    </section>
  `;
}

export function renderResearchCards(title, items) {
  if (!items?.length) {
    return '';
  }

  return `
    <section class="section-shell research-panel">
      <div class="section-header">
        <h2>${escapeHtml(title)}</h2>
      </div>
      <div class="card-grid two-up-grid">
        ${items
          .map((item) => renderContentCard(item))
          .join('')}
      </div>
    </section>
  `;
}
