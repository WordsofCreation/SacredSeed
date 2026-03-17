import { renderAffiliateDisclosureBlock, renderAffiliateProductCard } from '../components/affiliate.js';
import { getAffiliateProduct } from '../config/affiliateConfig.js';

export function renderBestHerbDryersPage(rootElement) {
  const product = getAffiliateProduct('herbDryer');

  rootElement.innerHTML = `
    <article class="section-shell" aria-labelledby="best-herb-dryers-title">
      <header class="section-header">
        <p class="eyebrow">Buyer Guide</p>
        <h1 id="best-herb-dryers-title">Best Herb Dryers for Drying and Storing Medicinal Herbs</h1>
        <p>
          Drying herbs well is one of the best ways to protect the quality of your materia medica at home. Whether you are
          harvesting garden herbs, building a tea cabinet, or starting a simple home apothecary, an herb drying rack or dryer
          with steady airflow can help you preserve aroma, color, and usefulness for future preparations.
        </p>
      </header>
    </article>

    <section class="section-shell" aria-labelledby="herb-dryer-criteria-title">
      <h2 id="herb-dryer-criteria-title">What to look for in the best herb dryer</h2>
      <ul>
        <li><strong>Airflow:</strong> Prioritize herb drying tools that move air gently and consistently across all trays or layers.</li>
        <li><strong>Clean materials:</strong> Choose food-safe surfaces that are easy to wipe down between batches.</li>
        <li><strong>Low-heat control:</strong> Gentle drying temperatures help protect delicate aromatic compounds.</li>
        <li><strong>Tray or rack spacing:</strong> Herbs should be spread thinly, not crowded, to reduce moisture pockets.</li>
        <li><strong>Mold prevention:</strong> Design features like ventilation and easy monitoring help prevent spoilage.</li>
      </ul>
      <p class="meta-note">
        The best way to dry herbs is usually slow, clean, and airflow-focused rather than hot and fast.
      </p>
    </section>

    <section class="section-shell" aria-labelledby="why-drying-quality-matters-title">
      <h2 id="why-drying-quality-matters-title">Why drying quality affects storage, aroma, and usefulness</h2>
      <p>
        Incomplete drying can lead to hidden moisture that invites mold during storage. Overheating can flatten fragrance and
        reduce the vibrant qualities you want in herbal tea, infused oils, and beginner materia medica study samples.
      </p>
      <p>
        Proper drying helps herbs stay crisp, fragrant, and easier to identify over time. For people drying herbs for tea,
        tincture projects, and long-term jars, technique matters as much as the tool itself.
      </p>
    </section>

    <section class="section-shell" aria-labelledby="recommended-herb-dryer-title">
      <h2 id="recommended-herb-dryer-title">Recommended herb dryer and drying rack options</h2>
      <p>
        If you want a practical starting point, browse our curated Amazon list for the best herb dryer options and herb drying
        rack setups for small-batch home use.
      </p>
      ${product ? renderAffiliateProductCard(product) : ''}
      ${renderAffiliateDisclosureBlock({ compact: true })}
    </section>

    <section class="section-shell" aria-labelledby="beginner-drying-tips-title">
      <h2 id="beginner-drying-tips-title">Beginner tips for drying herbs well</h2>
      <ol>
        <li>Harvest healthy plant material and remove bruised or wet leaves before drying.</li>
        <li>Rinse only when necessary, then dry surface moisture fully before placing herbs on racks.</li>
        <li>Keep batches separated and labeled so you can track dry times and quality.</li>
        <li>Check herbs daily; rotate trays or bundles to improve even airflow.</li>
        <li>Store only when herbs are fully dry, then use airtight jars away from light and humidity.</li>
      </ol>
    </section>

    <section class="section-shell" aria-labelledby="herb-drying-mistakes-title">
      <h2 id="herb-drying-mistakes-title">Common mistakes when drying herbs</h2>
      <ul>
        <li>Drying thick piles of herbs instead of spreading thin, breathable layers.</li>
        <li>Using high heat that scorches leaves or drives off volatile compounds too quickly.</li>
        <li>Skipping cleaning between batches, which can transfer dust, residue, or old plant material.</li>
        <li>Sealing jars before herbs are fully dry, increasing risk of condensation and mold.</li>
        <li>Ignoring scent and appearance changes that signal quality loss during storage.</li>
      </ul>
    </section>

    <section class="section-shell" aria-labelledby="continue-herbal-education-title">
      <h2 id="continue-herbal-education-title">Continue your herbal education foundation</h2>
      <p>Build confidence with these SacredSeed core guides:</p>
      <ul>
        <li><a href="#/articles/what-is-herbalism">What Herbalism Is</a></li>
        <li><a href="#/articles/how-to-start-learning-herbs-without-getting-overwhelmed">How to Start Learning Herbs Without Getting Overwhelmed</a></li>
        <li><a href="#/articles/tea-tincture-infusion-decoction-and-salve">Tea, Tincture, Infusion, Decoction, and Salve</a></li>
        <li><a href="#/articles/safety-first-contraindications-dosage-and-responsible-use">Safety First: Contraindications, Dosage, and Responsible Use</a></li>
        <li><a href="#/articles/how-to-read-an-herb-monograph">How to Read an Herb Monograph</a></li>
      </ul>
    </section>
  `;
}
