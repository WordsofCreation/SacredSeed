function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function renderActionLinks(actions) {
  return `
    <div class="home-card-actions">
      ${actions
        .map(
          (action) => `
            <a class="${action.variant === 'secondary' ? 'secondary-link' : 'primary-link'}" href="${escapeHtml(action.href)}">
              ${escapeHtml(action.label)}
            </a>
          `
        )
        .join('')}
    </div>
  `;
}

export function renderFeatureCard(feature) {
  return `
    <article class="card home-feature-card">
      <p class="label">${escapeHtml(feature.eyebrow)}</p>
      <h3>${escapeHtml(feature.title)}</h3>
      <p>${escapeHtml(feature.description)}</p>
      ${renderActionLinks(feature.actions)}
    </article>
  `;
}

export function renderTrustItem(item) {
  return `
    <article class="card trust-item">
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.body)}</p>
    </article>
  `;
}
