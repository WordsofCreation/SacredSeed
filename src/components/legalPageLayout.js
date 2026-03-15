export function renderLegalPageLayout({
  title,
  subtitle,
  sections = [],
  updatedLabel = 'Last updated: January 2026'
}) {
  const sectionMarkup = sections
    .map(
      ({ heading, body }) => `
        <section class="legal-section">
          <h3>${heading}</h3>
          ${body}
        </section>
      `
    )
    .join('');

  return `
    <article class="card legal-page">
      <p class="eyebrow legal-eyebrow">SacredSeed Legal</p>
      <h2>${title}</h2>
      <p class="legal-subtitle">${subtitle}</p>
      <p class="meta-note legal-updated">${updatedLabel}</p>
      <div class="legal-content">
        ${sectionMarkup}
      </div>
    </article>
  `;
}
