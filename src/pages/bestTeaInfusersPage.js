import { renderAffiliateDisclosureBlock, renderAffiliateProductCard } from '../components/affiliate.js';
import { getAffiliateProduct } from '../config/affiliateConfig.js';

export function renderBestTeaInfusersPage(rootElement) {
  const product = getAffiliateProduct('teaInfuserBasket');

  rootElement.innerHTML = `
    <article class="section-shell" aria-labelledby="best-tea-infusers-title">
      <header class="section-header">
        <p class="eyebrow">Buyer Guide</p>
        <h1 id="best-tea-infusers-title">Best Tea Infusers for Herbal Tea and Loose-Leaf Blends</h1>
        <p>
          A good tea infuser helps loose herbs open fully, improves flavor, and makes daily herbal tea routines easier to keep.
          If you brew chamomile, peppermint, nettle, or custom loose-leaf blends at home, the right infuser can noticeably
          improve both extraction and cleanup.
        </p>
      </header>
    </article>

    <section class="section-shell" aria-labelledby="tea-infuser-criteria-title">
      <h2 id="tea-infuser-criteria-title">What to look for in a tea infuser</h2>
      <ul>
        <li><strong>Basket size:</strong> Choose an infuser with enough room for herbs to expand during steeping.</li>
        <li><strong>Mesh quality:</strong> Fine mesh reduces sediment while still allowing circulation.</li>
        <li><strong>Material quality:</strong> Food-grade stainless steel is durable, neutral in flavor, and easy to sanitize.</li>
        <li><strong>Ease of cleaning:</strong> Wide openings and fewer hard-to-reach seams make daily use more practical.</li>
        <li><strong>Fit and stability:</strong> A stable basket that fits common mug sizes prevents spills and frustration.</li>
      </ul>
      <p class="meta-note">
        For herbal beginners, a larger basket-style infuser is usually easier than novelty shapes or tightly packed tea balls.
      </p>
    </section>

    <section class="section-shell" aria-labelledby="loose-herbs-vs-bags-title">
      <h2 id="loose-herbs-vs-bags-title">Why infusers matter more for loose herbs than tea bags</h2>
      <p>
        Loose-leaf herbal material often includes flowers, leaves, roots, and aromatic particles that need space and water
        movement to steep well. Small or cramped infusers can under-extract herbs, resulting in weak tea and wasted material.
      </p>
      <p>
        Tea bags are convenient, but loose herbs give you more control over quality, freshness, and blend customization.
        A dependable herbal tea infuser helps bridge that gap by making loose-leaf brewing almost as simple as bagged tea.
      </p>
    </section>

    <section class="section-shell" aria-labelledby="recommended-tea-infuser-title">
      <h2 id="recommended-tea-infuser-title">Recommended tea infuser</h2>
      <p>
        If you want a quick starting point, use our curated Amazon list for the best tea infuser options for loose-leaf tea
        and daily herbal brewing.
      </p>
      ${product ? renderAffiliateProductCard(product) : ''}
      ${renderAffiliateDisclosureBlock({ compact: true })}
    </section>

    <section class="section-shell" aria-labelledby="beginner-brewing-tips-title">
      <h2 id="beginner-brewing-tips-title">Beginner brewing tips for better herbal tea</h2>
      <ol>
        <li>Warm your mug or teapot first to keep steeping temperature more consistent.</li>
        <li>Use enough herb volume so the infusion tastes full rather than diluted.</li>
        <li>Cover while steeping to retain volatile aromatic compounds.</li>
        <li>Start with a timer and adjust strength over time based on taste and herb type.</li>
        <li>Rinse and dry your infuser promptly to preserve flavor and long-term durability.</li>
      </ol>
    </section>

    <section class="section-shell" aria-labelledby="continue-learning-title">
      <h2 id="continue-learning-title">Continue your herbal foundation</h2>
      <p>Build confidence with these beginner-friendly guides:</p>
      <ul>
        <li><a href="#/articles/what-is-herbalism">What Herbalism Is</a></li>
        <li><a href="#/articles/how-to-start-learning-herbs-without-getting-overwhelmed">How to Start Learning Herbs Without Getting Overwhelmed</a></li>
        <li><a href="#/articles/tea-tincture-infusion-decoction-and-salve">Tea, Tincture, Infusion, Decoction, and Salve</a></li>
      </ul>
    </section>
  `;
}
