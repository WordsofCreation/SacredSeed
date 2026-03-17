import { renderAffiliateDisclosureBlock, renderAffiliateProductCard } from '../components/affiliate.js';
import { getAffiliateProduct } from '../config/affiliateConfig.js';

export function renderBestTeaStrainersPage(rootElement) {
  const product = getAffiliateProduct('teaStrainerFineMesh');

  rootElement.innerHTML = `
    <article class="section-shell" aria-labelledby="best-tea-strainers-title">
      <header class="section-header">
        <p class="eyebrow">Buyer Guide</p>
        <h1 id="best-tea-strainers-title">Best Tea Strainers for Loose Herbal Tea</h1>
        <p>
          A dependable tea strainer makes loose-herb tea easier to enjoy every day by reducing sediment and improving cleanup.
          If you brew cut-and-sifted herbs often, a fine-mesh strainer can be one of the simplest upgrades for a calmer tea routine.
        </p>
      </header>
    </article>

    <section class="section-shell" aria-labelledby="tea-strainer-criteria-title">
      <h2 id="tea-strainer-criteria-title">What to look for in a loose herbal tea strainer</h2>
      <ul>
        <li><strong>Fine mesh:</strong> Helps catch small particles from roots, flowers, and powdered edges in loose blends.</li>
        <li><strong>Stable handle:</strong> A longer, balanced handle sits securely over mugs and small teapots.</li>
        <li><strong>Durable material:</strong> Stainless steel resists staining, holds shape, and cleans quickly.</li>
        <li><strong>Easy rinsing:</strong> Smooth seams and open basket geometry make daily cleanup faster.</li>
      </ul>
    </section>

    <section class="section-shell" aria-labelledby="recommended-tea-strainers-title">
      <h2 id="recommended-tea-strainers-title">Recommended tea strainers</h2>
      <p>
        For beginners, prioritize a practical fine-mesh model that is easy to rinse between cups and comfortable to use daily.
      </p>
      ${product ? renderAffiliateProductCard(product) : ''}
      ${renderAffiliateDisclosureBlock({ compact: true })}
    </section>

    <section class="section-shell" aria-labelledby="continue-learning-tea-strainer-title">
      <h2 id="continue-learning-tea-strainer-title">Continue your herbal preparation foundation</h2>
      <ul>
        <li><a href="#/buyer-guides/best-tea-infusers">Best Tea Infusers for Herbal Tea and Loose-Leaf Blends</a></li>
        <li><a href="#/articles/tea-tincture-infusion-decoction-and-salve">Tea, Tincture, Infusion, Decoction, and Salve</a></li>
        <li><a href="#/articles/how-to-start-learning-herbs-without-getting-overwhelmed">How to Start Learning Herbs Without Getting Overwhelmed</a></li>
      </ul>
    </section>
  `;
}
