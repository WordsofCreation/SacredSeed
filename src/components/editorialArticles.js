import { renderAffiliateDisclosureBlock, renderAffiliateProductGrid } from './affiliate.js';
import { getAffiliateProduct } from '../config/affiliateConfig.js';
import { fallbackOnErrorAttr, getPlaceholderImagePath } from '../utils/imageAssets.js';

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function toAnchorId(value) {
  return String(value ?? '')
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/g, '-')
    .replaceAll(/^-|-$/g, '') || 'section';
}

function renderArticleSection(section) {
  const anchorId = `section-${toAnchorId(section.heading)}`;
  const paragraphs = (section.paragraphs ?? []).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('');
  const bullets = section.bullets?.length
    ? `
      <ul>
        ${section.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join('')}
      </ul>`
    : '';
  const cta = section.cta
    ? `
      <p><a href="${escapeHtml(section.cta.href)}" target="_blank" rel="sponsored nofollow noopener noreferrer">${escapeHtml(section.cta.label)}</a></p>`
    : '';

  return `
    <section class="article-section" aria-labelledby="${anchorId}">
      <h2 id="${anchorId}">${escapeHtml(section.heading)}</h2>
      ${paragraphs}
      ${bullets}
      ${cta}
    </section>
  `;
}

export function renderEditorialArticlesIndex(articles, startHereArticle, startHereLinks = []) {
  return `
    <section class="section-shell materia-intro" aria-labelledby="articles-title">
      <div class="section-header">
        <p class="eyebrow">Editorial Learning Library</p>
        <h1 id="articles-title">Foundational herbal education articles</h1>
        <p>
          Read carefully structured editorial guides covering materia medica literacy, preparation methods,
          and practical pathways for responsible home herbal study.
        </p>
      </div>
      ${startHereArticle ? `<p class="meta-note"><strong>Start here:</strong> <a href="#/articles/${encodeURIComponent(startHereArticle.slug)}">${escapeHtml(startHereArticle.title)}</a>.</p>` : ''}
      ${startHereLinks.length > 1 ? `<p class="meta-note"><strong>Then read:</strong> ${startHereLinks.slice(1).map((article) => `<a href="#/articles/${encodeURIComponent(article.slug)}">${escapeHtml(article.title)}</a>`).join(' · ')}.</p>` : ''}
    </section>

    <section class="home-section" aria-label="Editorial article list">
      <div class="collection-grid">
        ${articles
    .map(
      (article) => `
              <article class="card collection-card editorial-card">
                <p class="label">Editorial Article · ${article.estimatedReadMinutes ?? 'Self-paced'} min read</p>
                <h2>${escapeHtml(article.title)}</h2>
                <p>${escapeHtml(article.summary ?? article.intro)}</p>
                ${article.tags?.length ? `<div class="chip-row">${article.tags.map((tag) => `<span class="chip">${escapeHtml(tag)}</span>`).join('')}</div>` : ''}
                ${article.relatedHerbs?.length ? `<p class="meta-note"><strong>Related herbs:</strong> ${article.relatedHerbs.map((item) => escapeHtml(item.commonName)).join(', ')}.</p>` : ''}
                <a class="profile-link" href="#/articles/${encodeURIComponent(article.slug)}">Read article →</a>
              </article>
            `
    )
    .join('')}
      </div>
    </section>
  `;
}

export function renderEditorialArticleDetail(article) {
  const affiliateProducts = (article.affiliateProductKeys ?? []).map((key) => getAffiliateProduct(key)).filter(Boolean);
  const articleImage = article.image?.trim() || '';
  const articleImageAlt = article.imageAlt?.trim() || `${article.title} hero image`;
  const articleImageCaption = article.imageCaption?.trim() || '';
  const articleImageUploadPath = article.imageUploadPath?.trim() || '';

  return `
    <article class="section-shell editorial-article" aria-labelledby="article-title">
      <header class="section-header">
        <p class="eyebrow">Editorial Guide · ${article.estimatedReadMinutes ?? 'Self-paced'} min read</p>
        <h1 id="article-title">${escapeHtml(article.title)}</h1>
        <p>${escapeHtml(article.intro)}</p>
      </header>
      ${articleImage ? `
        <figure class="editorial-article-media">
          <img
            class="editorial-article-image"
            src="${escapeHtml(articleImage)}"
            alt="${escapeHtml(articleImageAlt)}"
            loading="lazy"
            decoding="async"
            data-image-fallback="hero"
            onerror="${fallbackOnErrorAttr('hero')}"
          />
          <figcaption class="meta-note editorial-article-image-note">
            ${articleImageCaption ? escapeHtml(articleImageCaption) : 'Article image placeholder active until the final image is uploaded.'}
            ${articleImageUploadPath ? ` Upload the final image to ${escapeHtml(articleImageUploadPath)} to replace the placeholder automatically.` : ''}
          </figcaption>
        </figure>
      ` : `
        <figure class="editorial-article-media">
          <img
            class="editorial-article-image"
            src="${getPlaceholderImagePath('hero')}"
            alt="${escapeHtml(articleImageAlt)}"
            loading="lazy"
            decoding="async"
          />
        </figure>
      `}
      ${affiliateProducts.length ? renderAffiliateDisclosureBlock({ compact: true, className: 'article-affiliate-disclosure' }) : ''}
      ${article.tags?.length ? `<div class="chip-row">${article.tags.map((tag) => `<span class="chip">${escapeHtml(tag)}</span>`).join('')}</div>` : ''}
      <div class="article-content">
        ${article.sections.map(renderArticleSection).join('')}
      </div>
      ${affiliateProducts.length ? renderAffiliateProductGrid(affiliateProducts) : ''}
      ${article.disclaimer ? `<p class="meta-note article-disclaimer"><strong>Educational disclaimer:</strong> ${escapeHtml(article.disclaimer)}</p>` : ''}
      <div class="hero-actions">
        <a class="secondary-link" href="#/articles">All editorial articles</a>
        <a class="secondary-link" href="#/pathways">Learning pathways</a>
      </div>
    </article>

    ${article.relatedHerbs?.length ? `
      <section class="section-shell" aria-labelledby="article-related-herbs-title">
        <h2 id="article-related-herbs-title">Related herbs</h2>
        <div class="chip-row">
          ${article.relatedHerbs.map((herb) => `<a class="chip chip-link" href="${escapeHtml(herb.href)}">${escapeHtml(herb.commonName)}</a>`).join('')}
        </div>
      </section>
    ` : ''}

    ${article.relatedSeasonalCollections?.length ? `
      <section class="section-shell" aria-labelledby="article-related-seasons-title">
        <h2 id="article-related-seasons-title">Related seasonal collections</h2>
        <div class="chip-row">
          ${article.relatedSeasonalCollections.map((collection) => `<a class="chip chip-link" href="${escapeHtml(collection.href)}">${escapeHtml(collection.season)} · ${escapeHtml(collection.title)}</a>`).join('')}
        </div>
      </section>
    ` : ''}

    ${article.relatedRoutes?.length ? `
      <section class="section-shell" aria-label="Related reading routes">
        <h2>Continue reading</h2>
        <div class="hero-actions">
          ${article.relatedRoutes.map((route) => `<a class="secondary-link" href="${escapeHtml(route.href)}">${escapeHtml(route.label)}</a>`).join('')}
        </div>
      </section>
    ` : ''}
  `;
}
