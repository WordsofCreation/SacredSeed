import { renderAffiliateDisclosureBlock, renderAffiliateProductGrid } from './affiliate.js';
import { getAffiliateProduct } from '../config/affiliateConfig.js';

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function renderGroupedRecommendationSection(section) {
  const products = (section.productKeys ?? []).map((key) => getAffiliateProduct(key)).filter(Boolean);

  if (!products.length) {
    return '';
  }

  return `
    <section class="section-shell buyer-guide-group" aria-labelledby="group-${escapeHtml(section.slug)}">
      <h2 id="group-${escapeHtml(section.slug)}">${escapeHtml(section.title)}</h2>
      <p>${escapeHtml(section.summary)}</p>
      ${renderAffiliateProductGrid(products)}
    </section>
  `;
}

function renderLinkList(list = []) {
  return `
    <ul>
      ${list
        .map(
          (item) =>
            `<li><a href="${escapeHtml(item.href)}">${escapeHtml(item.title)}</a></li>`
        )
        .join('')}
    </ul>
  `;
}

export function renderBuyerIntentTemplatesPage(hubContent = {}) {
  const sections = hubContent.sections ?? [];

  return `
    <article class="section-shell" aria-labelledby="buyer-intent-title">
      <header class="section-header">
        <p class="eyebrow">Recommended Resources</p>
        <h1 id="buyer-intent-title">Recommended Tools & Supplies</h1>
        <p>
          These tools support herbal learning, tea making, storage, and home apothecary practice. We prioritize items that
          make daily routines cleaner, more consistent, and easier to sustain for beginners.
        </p>
      </header>
      ${renderAffiliateDisclosureBlock({ compact: true })}
    </article>

    ${sections.map(renderGroupedRecommendationSection).join('')}

    <section class="section-shell" aria-labelledby="buyer-guide-links-title">
      <h2 id="buyer-guide-links-title">Explore detailed buyer guides</h2>
      <p>Looking for deeper comparisons? Visit these focused guides:</p>
      ${renderLinkList(hubContent.buyerGuideLinks)}
    </section>

    <section class="section-shell" aria-labelledby="foundational-learning-links-title">
      <h2 id="foundational-learning-links-title">Keep education first</h2>
      <p>
        If you're still building foundations, start with these educational articles before purchasing new supplies.
      </p>
      ${renderLinkList(hubContent.foundationalLinks)}
    </section>
  `;
}
