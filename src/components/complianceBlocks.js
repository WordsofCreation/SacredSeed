function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export function renderDisclaimerBlock({ title = 'Educational & Medical Notice', educationalUseNotice, medicalDisclaimer, disclaimers = [] }) {
  return `
    <section class="compliance-card disclaimer-card" aria-label="${escapeHtml(title)}">
      <p class="label">${escapeHtml(title)}</p>
      <p>${escapeHtml(educationalUseNotice)}</p>
      <p>${escapeHtml(medicalDisclaimer)}</p>
      ${disclaimers.length ? `<ul class="subtle-list">${disclaimers.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>` : ''}
    </section>
  `;
}

export function renderSourceAttributionBlock({ title = 'Sources & Attribution', sourceAttribution = [], showLicenseNotes = true }) {
  if (!sourceAttribution.length) {
    return '';
  }

  return `
    <section class="compliance-card attribution-card" aria-label="${escapeHtml(title)}">
      <p class="label">${escapeHtml(title)}</p>
      <div class="source-badges">${sourceAttribution.map((source) => `<span class="source-badge">${escapeHtml(source.name)}</span>`).join('')}</div>
      <div class="source-list">
        ${sourceAttribution
          .map(
            (source) => `
              <details>
                <summary>${escapeHtml(source.name)} · ${escapeHtml(source.category)}</summary>
                <p>${escapeHtml(source.attribution)}</p>
                ${showLicenseNotes && source.license ? `<p class="meta-note"><strong>License:</strong> ${escapeHtml(source.license.label)}${source.license.note ? ` — ${escapeHtml(source.license.note)}` : ''}</p>` : ''}
                ${showLicenseNotes && source.license?.url ? `<p class="meta-note"><a href="${escapeHtml(source.license.url)}" target="_blank" rel="noreferrer">View provider terms</a></p>` : ''}
              </details>
            `
          )
          .join('')}
      </div>
    </section>
  `;
}
