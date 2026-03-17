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

export function renderBuyerIntentTemplatesPage(templates = []) {
  return `
    <article class="section-shell" aria-labelledby="buyer-intent-title">
      <header class="section-header">
        <p class="eyebrow">Buyer-Intent Templates</p>
        <h1 id="buyer-intent-title">Amazon affiliate recommendation page templates</h1>
        <p>
          Use these static templates when creating intentional recommendation pages. Keep recommendations limited,
          useful, and educational with clear disclosures and practical selection criteria.
        </p>
      </header>
      ${renderAffiliateDisclosureBlock({ compact: true })}
    </article>

    ${templates
      .map((template) => {
        const products = (template.productKeys ?? []).map((key) => getAffiliateProduct(key)).filter(Boolean);

        return `
          <section class="section-shell buyer-intent-template" aria-labelledby="template-${escapeHtml(template.slug)}">
            <h2 id="template-${escapeHtml(template.slug)}">${escapeHtml(template.title)}</h2>
            <p>${escapeHtml(template.summary)}</p>
            <p class="meta-note"><strong>Template guidance:</strong> ${escapeHtml(template.intentNote)}</p>
            ${renderAffiliateProductGrid(products)}
          </section>
        `;
      })
      .join('')}
  `;
}
