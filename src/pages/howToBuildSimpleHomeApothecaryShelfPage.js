import { renderAffiliateDisclosureBlock, renderAffiliateProductCard, renderAffiliateProductGrid } from '../components/affiliate.js';
import { getAffiliateProduct } from '../config/affiliateConfig.js';

export function renderHowToBuildSimpleHomeApothecaryShelfPage(rootElement) {
  const glassHerbJars = getAffiliateProduct('glassHerbJars');
  const herbStorageContainers = getAffiliateProduct('herbStorageContainers');
  const apothecaryShelves = getAffiliateProduct('apothecaryShelves');
  const amberDropperBottles = getAffiliateProduct('amberDropperBottles');

  rootElement.innerHTML = `
    <article class="section-shell" aria-labelledby="simple-home-apothecary-shelf-title">
      <header class="section-header">
        <p class="eyebrow">Buyer Guide</p>
        <h1 id="simple-home-apothecary-shelf-title">How to Build a Simple Home Apothecary Shelf</h1>
        <p>
          A home apothecary shelf is a small, organized space for storing dried herbs, tinctures, and everyday preparation
          supplies. When your shelf is simple and clearly labeled, you can work more safely, find what you need faster, and
          build better herbal habits without feeling overwhelmed.
        </p>
      </header>
    </article>

    <section class="section-shell" aria-labelledby="beginner-actually-needs-title">
      <h2 id="beginner-actually-needs-title">What a beginner actually needs on an apothecary shelf</h2>
      <p>
        Start with one modest shelf that supports your most common preparations. You can always expand later once your daily
        routine is consistent.
      </p>
      <ul>
        <li><strong>Dried herb basics:</strong> A handful of herbs you use often for teas and infusions.</li>
        <li><strong>Liquid prep basics:</strong> A small set of amber dropper bottles for tinctures and extracts.</li>
        <li><strong>Core supplies:</strong> Labels, a marker, a small scoop or funnel, and a simple cleaning cloth.</li>
        <li><strong>Practical limit:</strong> Choose only what fits comfortably and keeps labels visible.</li>
      </ul>
    </section>

    <section class="section-shell" aria-labelledby="jars-containers-bottling-basics-title">
      <h2 id="jars-containers-bottling-basics-title">Jars, containers, and bottling basics</h2>
      <p>
        Separate your storage by preparation type: dried herbs in sealed jars or containers, and liquid preparations in
        amber bottles that reduce light exposure. This simple split improves shelf life, labeling clarity, and cleanup.
      </p>
      ${renderAffiliateProductGrid([glassHerbJars, herbStorageContainers, amberDropperBottles].filter(Boolean))}
      ${renderAffiliateDisclosureBlock({ compact: true })}
    </section>

    <section class="section-shell" aria-labelledby="shelving-organization-ideas-title">
      <h2 id="shelving-organization-ideas-title">Shelving and apothecary organization ideas</h2>
      <p>
        The best herbal storage shelf is easy to reach, easy to clean, and not overcrowded. Use vertical spacing for jars,
        keep your most-used herbs at eye level, and place occasional-use items on upper or lower shelves.
      </p>
      ${apothecaryShelves ? renderAffiliateProductCard(apothecaryShelves) : ''}
      <ul>
        <li>Reserve one zone for dried herbs, one for tinctures, and one for tools.</li>
        <li>Keep airflow around containers instead of packing items tightly together.</li>
        <li>Avoid direct sun, steam-heavy areas, and heat sources near your shelf.</li>
      </ul>
    </section>

    <section class="section-shell" aria-labelledby="label-organize-clearly-title">
      <h2 id="label-organize-clearly-title">How to label and organize herbs clearly</h2>
      <p>Use a repeatable label format so every jar and bottle is instantly understandable:</p>
      <ol>
        <li><strong>Common name + Latin name</strong> (if known)</li>
        <li><strong>Plant part</strong> (leaf, root, flower, bark, seed)</li>
        <li><strong>Date added</strong> and optional source</li>
        <li><strong>Preparation type</strong> (dried herb, tincture, infused oil, etc.)</li>
      </ol>
      <p>
        Group labels by color or shelf section if needed, but prioritize readability over decorative design.
      </p>
    </section>

    <section class="section-shell" aria-labelledby="keep-clean-accessible-title">
      <h2 id="keep-clean-accessible-title">How to keep herbs, tinctures, and supplies clean and easy to access</h2>
      <ul>
        <li>Wipe shelf surfaces weekly and clean spills immediately.</li>
        <li>Return each item to the same spot after use to maintain flow.</li>
        <li>Rotate older stock forward and avoid keeping expired materials.</li>
        <li>Store loose tools in one container so prep stays tidy and quick.</li>
      </ul>
      <p>
        If your shelf becomes crowded, pause buying and simplify first. A smaller, cleaner setup is usually more effective
        than a large, cluttered one.
      </p>
    </section>

    <section class="section-shell" aria-labelledby="mistakes-to-avoid-title">
      <h2 id="mistakes-to-avoid-title">Common apothecary shelf mistakes to avoid</h2>
      <ul>
        <li>Buying too many jars and tools before building a steady herbal routine.</li>
        <li>Using unsealed containers that let moisture and aroma escape.</li>
        <li>Skipping labels or dates, which makes quality control difficult.</li>
        <li>Storing liquid preparations in clear bottles exposed to bright light.</li>
        <li>Mixing dried herb, tincture, and tool zones into one crowded area.</li>
      </ul>
    </section>

    <section class="section-shell" aria-labelledby="continue-foundational-learning-title">
      <h2 id="continue-foundational-learning-title">Continue with foundational herbal education</h2>
      <p>
        If you are learning how to build a home apothecary, these guides help you strengthen safety and preparation
        fundamentals before expanding your shelf.
      </p>
      <ul>
        <li><a href="#/articles/what-is-herbalism">What Herbalism Is</a></li>
        <li><a href="#/articles/how-to-start-learning-herbs-without-getting-overwhelmed">How to Start Learning Herbs Without Getting Overwhelmed</a></li>
        <li><a href="#/articles/tea-tincture-infusion-decoction-and-salve">Tea, Tincture, Infusion, Decoction, and Salve</a></li>
        <li><a href="#/articles/safety-first-contraindications-dosage-and-responsible-use">Safety First: Contraindications, Dosage, and Responsible Use</a></li>
        <li><a href="#/articles/how-to-read-an-herb-monograph">How to Read an Herb Monograph</a></li>
        <li><a href="#/buyer-guides/best-beginner-apothecary-kits">Best Beginner Apothecary Kits</a></li>
        <li><a href="#/buyer-guides/best-jars-and-storage-for-dried-herbs">Best Jars and Storage for Dried Herbs</a></li>
        <li><a href="#/buyer-guides/best-dropper-bottles-for-herbal-preparations">Best Dropper Bottles for Herbal Preparations</a></li>
        <li><a href="#/buyer-guides/best-tools-for-a-beginner-home-apothecary">Best Tools for a Beginner Home Apothecary</a></li>
      </ul>
    </section>
  `;
}
