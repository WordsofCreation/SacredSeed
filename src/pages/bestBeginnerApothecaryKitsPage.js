import { renderAffiliateDisclosureBlock, renderAffiliateProductCard } from '../components/affiliate.js';
import { getAffiliateProduct } from '../config/affiliateConfig.js';

export function renderBestBeginnerApothecaryKitsPage(rootElement) {
  const product = getAffiliateProduct('herbalStarterKit');

  rootElement.innerHTML = `
    <article class="section-shell" aria-labelledby="best-beginner-apothecary-kits-title">
      <header class="section-header">
        <p class="eyebrow">Buyer Guide</p>
        <h1 id="best-beginner-apothecary-kits-title">Best Beginner Apothecary Kits for Starting a Home Herbal Practice</h1>
        <p>
          A beginner apothecary kit is a practical starter setup that helps you organize basic herbal tools in one place.
          For new herbal learners, a simple home apothecary kit can reduce decision fatigue, support safe preparation habits,
          and make it easier to begin with teas, infusions, and labeled dried herb storage.
        </p>
      </header>
    </article>

    <section class="section-shell" aria-labelledby="beginner-apothecary-kit-criteria-title">
      <h2 id="beginner-apothecary-kit-criteria-title">What to look for in a beginner apothecary kit</h2>
      <ul>
        <li><strong>Food-safe storage:</strong> Look for clean glass jars with secure lids for dried herbs and simple blends.</li>
        <li><strong>Labeling system:</strong> Refillable labels and a marker help track herb name, date, and source.</li>
        <li><strong>Measuring basics:</strong> Measuring spoons and a small digital scale improve consistency.</li>
        <li><strong>Straining tools:</strong> Fine-mesh strainers and reusable filters support cleaner teas and infusions.</li>
        <li><strong>Simple liquid handling:</strong> Droppers, funnels, and amber bottles help with small tincture and infusion projects.</li>
        <li><strong>Beginner scope:</strong> The best herbal apothecary starter kit supports a few core workflows without pushing unnecessary extras.</li>
      </ul>
      <p class="meta-note">
        For most people, the right beginner herbalism supplies are the ones you will use every week, not the largest bundle.
      </p>
    </section>

    <section class="section-shell" aria-labelledby="essential-tools-title">
      <h2 id="essential-tools-title">Which tools matter most for teas, infusions, dried herbs, and storage</h2>
      <p>
        Start with daily-use tools first. For teas and infusions, prioritize a kettle, steeping vessel, fine strainer, and
        measuring spoons. For dried herbs, choose airtight jars, clear labels, and a dark, cool storage location to preserve
        aroma and quality. For simple liquid preparations, add a funnel, dropper bottles, and a notebook to track batches.
      </p>
      <p>
        This small toolkit is enough to begin practicing without clutter. As your confidence grows, you can expand deliberately
        based on what you actually make at home.
      </p>
    </section>

    <section class="section-shell" aria-labelledby="recommended-beginner-apothecary-kit-title">
      <h2 id="recommended-beginner-apothecary-kit-title">Recommended beginner apothecary kit</h2>
      <p>
        If you want a practical starting point, explore our curated Amazon options for a beginner apothecary kit and home
        apothecary kit essentials.
      </p>
      ${product ? renderAffiliateProductCard(product) : ''}
      ${product ? `<p><a class="profile-link" href="${product.affiliateUrl}" target="_blank" rel="sponsored nofollow noopener noreferrer">Browse beginner apothecary kit options on Amazon</a></p>` : ''}
      ${renderAffiliateDisclosureBlock({ compact: true })}
    </section>

    <section class="section-shell" aria-labelledby="start-without-overbuying-title">
      <h2 id="start-without-overbuying-title">How to start a home apothecary without overbuying</h2>
      <ol>
        <li>Pick 3 to 5 versatile herbs you are actively studying instead of purchasing dozens at once.</li>
        <li>Use one shelf or one box as your starter apothecary zone to keep tools visible and organized.</li>
        <li>Track what you actually use for 4 to 6 weeks before adding more containers or specialty tools.</li>
        <li>Upgrade only when a real bottleneck appears, such as needing more jar space or more precise measuring.</li>
        <li>Build around repeatable habits: labeling, dating, and documenting each preparation.</li>
      </ol>
    </section>

    <section class="section-shell" aria-labelledby="beginner-mistakes-title">
      <h2 id="beginner-mistakes-title">Beginner mistakes to avoid</h2>
      <ul>
        <li>Buying large kits before learning which preparations you actually enjoy making.</li>
        <li>Storing herbs in humid, bright areas that reduce freshness and shelf life.</li>
        <li>Skipping labels and dates, which makes quality and identification harder over time.</li>
        <li>Using inconsistent measurements that make results difficult to repeat.</li>
        <li>Collecting tools faster than knowledge instead of grounding decisions in foundational herbal education.</li>
      </ul>
    </section>

    <section class="section-shell" aria-labelledby="continue-herbal-foundation-title">
      <h2 id="continue-herbal-foundation-title">Continue building your herbal foundation</h2>
      <p>Deepen your beginner skills with these SacredSeed guides:</p>
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
