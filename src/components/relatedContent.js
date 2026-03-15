function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function renderLinkList(title, items) {
  if (!items?.length) {
    return '';
  }

  return `
    <article class="card related-card">
      <h3>${escapeHtml(title)}</h3>
      <ul class="subtle-list">
        ${items
          .map((item) => `<li><a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>${item.summary ? `<p class="meta-note">${escapeHtml(item.summary)}</p>` : ''}</li>`)
          .join('')}
      </ul>
    </article>
  `;
}

export function renderRelatedContentBlock({ title = 'Related content', sections = [] }) {
  const populated = sections.filter((section) => section.items?.length);
  if (!populated.length) {
    return '';
  }

  return `
    <section class="related-content-shell" aria-label="${escapeHtml(title)}">
      <div class="section-header section-shell">
        <h2>${escapeHtml(title)}</h2>
      </div>
      <div class="related-grid">
        ${populated.map((section) => renderLinkList(section.title, section.items)).join('')}
      </div>
    </section>
  `;
}
