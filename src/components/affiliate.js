import { amazonAffiliateConfig } from '../config/affiliateConfig.js';

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export function renderAffiliateDisclosureBlock({ compact = false, className = '' } = {}) {
  const title = compact ? 'Affiliate disclosure' : 'Affiliate transparency';

  return `
    <aside class="affiliate-disclosure ${compact ? 'affiliate-disclosure-compact' : ''} ${className}" aria-label="Affiliate disclosure">
      <p class="affiliate-disclosure-title">${title}</p>
      <p>${escapeHtml(amazonAffiliateConfig.disclosureShort)}</p>
      <p><a href="#/affiliate-disclosure">Read full affiliate disclosure →</a></p>
    </aside>
  `;
}

export function renderAffiliateProductCard(product) {
  if (!product) {
    return '';
  }

  return `
    <article class="affiliate-product-card" aria-label="Product recommendation: ${escapeHtml(product.title)}">
      <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.imageAlt || product.title)}" loading="lazy" decoding="async" />
      <div class="affiliate-product-content">
        <p class="label">Recommended tool</p>
        <h3>${escapeHtml(product.title)}</h3>
        <p>${escapeHtml(product.description)}</p>
        ${product.whyWeRecommend ? `<p class="meta-note"><strong>Why we recommend it:</strong> ${escapeHtml(product.whyWeRecommend)}</p>` : ''}
        <a class="profile-link affiliate-cta" href="${escapeHtml(product.affiliateUrl)}" target="_blank" rel="sponsored nofollow noopener noreferrer">${escapeHtml(product.ctaLabel || 'View on Amazon')}</a>
        <p class="affiliate-note">${escapeHtml(product.note || amazonAffiliateConfig.disclosureShort)}</p>
      </div>
    </article>
  `;
}

export function renderAffiliateProductGrid(products = []) {
  if (!products.length) {
    return '';
  }

  return `
    <section class="affiliate-products" aria-label="Affiliate product recommendations">
      <div class="affiliate-product-grid">
        ${products.map(renderAffiliateProductCard).join('')}
      </div>
    </section>
  `;
}
