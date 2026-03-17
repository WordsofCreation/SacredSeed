import {
  renderAffiliateDisclosureBlock,
  renderAffiliateProductGrid
} from '../components/affiliate.js';
import { getAffiliateProduct } from '../config/affiliateConfig.js';

export function renderBestHerbStorageJarsPage(rootElement) {
  const products = [
    getAffiliateProduct('glassHerbJars'),
    getAffiliateProduct('herbStorageContainers'),
    getAffiliateProduct('apothecaryShelves')
  ].filter(Boolean);

  rootElement.innerHTML = `
    <article class="section-shell" aria-labelledby="best-jars-storage-title">
      <header class="section-header">
        <p class="eyebrow">Buyer Guide</p>
        <h1 id="best-jars-storage-title">Best Jars and Storage for Dried Herbs</h1>
        <p>
          Good herb storage is one of the easiest upgrades you can make in a home apothecary. Whether you are saving tea herbs,
          stocking culinary blends, or building a beginner materia medica shelf, the right jars and containers help you protect
          freshness, reduce waste, and keep your herbal practice calm and easy to maintain.
        </p>
      </header>
    </article>

    <section class="section-shell" aria-labelledby="herb-storage-criteria-title">
      <h2 id="herb-storage-criteria-title">What to look for in herb jars and storage containers</h2>
      <ul>
        <li><strong>Airtight seals:</strong> Tight lids limit moisture and air exposure that can dull aroma over time.</li>
        <li><strong>Light protection:</strong> Keep jars out of direct sun, or choose darker containers for light-sensitive herbs.</li>
        <li><strong>Food-safe, cleanable materials:</strong> Select jars and lids that are easy to wash and dry between refills.</li>
        <li><strong>Clear labeling space:</strong> You should be able to mark herb name, date, and source without guesswork.</li>
        <li><strong>Easy daily access:</strong> Pick sizes and shapes that fit your shelf and match how often you reach for each herb.</li>
      </ul>
      <p class="meta-note">
        Everyday jars support daily use, while larger long-term containers can hold backup stock that you rotate in as needed.
      </p>
    </section>

    <section class="section-shell" aria-labelledby="storage-impact-title">
      <h2 id="storage-impact-title">Why storage affects freshness, aroma, potency, and organization</h2>
      <p>
        Dried herbs are still sensitive to humidity, heat, and light. Poor storage can flatten aroma, fade color, and reduce the
        sensory quality you rely on when blending teas or making infusions. Better containers help protect the character of your herbs.
      </p>
      <p>
        Organized storage also improves safety and consistency. When labels are visible and herbs are grouped clearly, you are less
        likely to mix up similar plants, lose track of dates, or forget what needs to be used first.
      </p>
    </section>

    <section class="section-shell" aria-labelledby="recommended-herb-storage-title">
      <h2 id="recommended-herb-storage-title">Recommended jars and storage solutions</h2>
      <p>
        Use these practical options to build a simple system: everyday glass jars for herbs you use often, dedicated herb storage
        containers for backup supply, and apothecary shelves or organizers that keep your labels visible and easy to scan.
      </p>
      ${renderAffiliateProductGrid(products)}
      ${renderAffiliateDisclosureBlock({ compact: true })}
    </section>

    <section class="section-shell" aria-labelledby="beginner-shelf-setup-title">
      <h2 id="beginner-shelf-setup-title">How beginners can organize a simple home herbal shelf</h2>
      <ol>
        <li>Start with 8 to 12 core herbs you actually use for tea and foundational preparations.</li>
        <li>Store daily herbs in small labeled jars at eye level for quick, clean access.</li>
        <li>Keep refill stock in larger sealed containers in a cool, dark cabinet.</li>
        <li>Group herbs by use (daily tea, digestion, calming, respiratory) to reduce decision fatigue.</li>
        <li>Set a monthly check-in to relabel, rotate older jars forward, and wipe shelves.</li>
      </ol>
    </section>

    <section class="section-shell" aria-labelledby="herb-storage-mistakes-title">
      <h2 id="herb-storage-mistakes-title">Common herb storage mistakes to avoid</h2>
      <ul>
        <li>Using loose lids or frequently opened bags for long-term storage.</li>
        <li>Storing jars near the stove, kettle, or sunny windows where heat and moisture fluctuate.</li>
        <li>Skipping labels, then relying on memory for herb identity and age.</li>
        <li>Refilling jars without cleaning and fully drying them first.</li>
        <li>Buying too many herbs at once without a rotation plan.</li>
      </ul>
    </section>

    <section class="section-shell" aria-labelledby="herbal-foundation-links-title">
      <h2 id="herbal-foundation-links-title">Build your herbal foundation next</h2>
      <p>Pair your storage setup with these core SacredSeed guides:</p>
      <ul>
        <li><a href="#/articles/what-is-herbalism">What Herbalism Is</a></li>
        <li><a href="#/articles/how-to-start-learning-herbs-without-getting-overwhelmed">How to Start Learning Herbs Without Getting Overwhelmed</a></li>
        <li><a href="#/articles/tea-tincture-infusion-decoction-and-salve">Tea, Tincture, Infusion, Decoction, and Salve</a></li>
        <li><a href="#/articles/safety-first-contraindications-dosage-and-responsible-use">Safety First: Contraindications, Dosage, and Responsible Use</a></li>
        <li><a href="#/articles/how-to-read-an-herb-monograph">How to Read an Herb Monograph</a></li>
        <li><a href="#/buyer-guides/best-beginner-apothecary-kits">Best Beginner Apothecary Kits</a></li>
        <li><a href="#/buyer-guides/best-herb-dryers">Best Herb Dryers</a></li>
      </ul>
    </section>
  `;
}
