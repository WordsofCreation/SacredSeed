import { renderAffiliateDisclosureBlock, renderAffiliateProductCard } from '../components/affiliate.js';
import { getAffiliateProduct } from '../config/affiliateConfig.js';

export function renderBestDropperBottlesPage(rootElement) {
  const product = getAffiliateProduct('amberDropperBottles');

  rootElement.innerHTML = `
    <article class="section-shell" aria-labelledby="best-dropper-bottles-title">
      <header class="section-header">
        <p class="eyebrow">Buyer Guide</p>
        <h1 id="best-dropper-bottles-title">Best Dropper Bottles for Herbal Preparations</h1>
        <p>
          Good dropper bottles make herbal work cleaner, safer, and more consistent. If you make tinctures, infused oils,
          extracts, or other small-batch remedies at home, choosing the right amber dropper bottles helps protect your
          preparations from light, supports accurate dispensing, and makes day-to-day apothecary routines easier.
        </p>
      </header>
    </article>

    <section class="section-shell" aria-labelledby="dropper-bottle-criteria-title">
      <h2 id="dropper-bottle-criteria-title">What to look for in a good amber dropper bottle</h2>
      <ul>
        <li><strong>Right size options:</strong> Keep 1 oz bottles for daily tinctures and smaller bottles for concentrated extracts.</li>
        <li><strong>Consistent dropper fit:</strong> Bulb and pipette should seal well and dispense smoothly without sticking.</li>
        <li><strong>Leak resistance:</strong> Caps should close securely so bottles travel safely and store without residue.</li>
        <li><strong>Cleanability:</strong> Glass and droppers should be easy to sanitize and dry between batches.</li>
        <li><strong>Label-friendly shape:</strong> Pick bottles with enough smooth surface for readable labels and dates.</li>
      </ul>
      <p class="meta-note">
        Beginners usually do best with a simple mix of 1 oz and 2 oz tincture bottles for flexible home apothecary use.
      </p>
    </section>

    <section class="section-shell" aria-labelledby="why-amber-glass-title">
      <h2 id="why-amber-glass-title">Why amber glass matters for tinctures, oils, and light-sensitive preparations</h2>
      <p>
        Amber glass reduces light exposure that can gradually degrade sensitive compounds in herbal extracts and infused oils.
        Even if a formula starts strong, repeated light contact can reduce aroma quality and long-term stability.
      </p>
      <p>
        For many home herbalists, amber tincture bottles are the easiest default choice: they protect better than clear glass,
        look consistent on the shelf, and encourage better storage habits for alcohol-based and oil-based preparations.
      </p>
    </section>

    <section class="section-shell" aria-labelledby="recommended-dropper-bottles-title">
      <h2 id="recommended-dropper-bottles-title">Recommended amber dropper bottles</h2>
      <p>
        If you want a practical starting point, browse our curated Amazon list of amber dropper bottles for herbal
        preparations, including options appropriate for tinctures, infused oils, and extract bottling workflows.
      </p>
      ${product ? renderAffiliateProductCard(product) : ''}
      ${renderAffiliateDisclosureBlock({ compact: true })}
    </section>

    <section class="section-shell" aria-labelledby="beginner-apothecary-dropper-use-title">
      <h2 id="beginner-apothecary-dropper-use-title">How beginners can use dropper bottles in a simple home apothecary</h2>
      <ol>
        <li>Start with a small core set: one calming tincture, one digestive tincture, and one daily-support formula.</li>
        <li>Bottle only what you will use in the near term, and keep larger bulk supply stored separately.</li>
        <li>Use dedicated droppers for each formula rather than swapping tops between bottles.</li>
        <li>Record preparation date, herb blend, menstruum, and dosage notes in your apothecary journal.</li>
        <li>Store finished bottles in a cool, dark cabinet where they are easy to access but protected from heat and sun.</li>
      </ol>
    </section>

    <section class="section-shell" aria-labelledby="dropper-bottle-care-title">
      <h2 id="dropper-bottle-care-title">Cleaning, labeling, and storage tips</h2>
      <ul>
        <li>Wash bottles and droppers promptly after emptying to prevent residue buildup.</li>
        <li>Allow all parts to dry fully before refilling to avoid unwanted moisture in preparations.</li>
        <li>Label every bottle with formula name, date made, and expected shelf-life window.</li>
        <li>Keep oil-based and alcohol-based preparations clearly separated and visibly marked.</li>
        <li>Review labels monthly so older batches are used first and expired batches are removed.</li>
      </ul>
    </section>

    <section class="section-shell" aria-labelledby="dropper-bottle-mistakes-title">
      <h2 id="dropper-bottle-mistakes-title">Common mistakes to avoid</h2>
      <ul>
        <li>Using clear bottles in bright spaces for formulas that are sensitive to light.</li>
        <li>Filling bottles to the very top, which can increase mess and reduce dropper performance.</li>
        <li>Skipping labels and assuming you will remember formula details later.</li>
        <li>Reusing droppers without thorough cleaning between different preparations.</li>
        <li>Storing bottles near windows, stoves, or heaters where temperature swings are frequent.</li>
      </ul>
    </section>

    <section class="section-shell" aria-labelledby="dropper-bottle-foundations-title">
      <h2 id="dropper-bottle-foundations-title">Build your herbal foundation next</h2>
      <p>Pair your bottling setup with these core SacredSeed learning guides:</p>
      <ul>
        <li><a href="#/articles/what-is-herbalism">What Herbalism Is</a></li>
        <li><a href="#/articles/how-to-start-learning-herbs-without-getting-overwhelmed">How to Start Learning Herbs Without Getting Overwhelmed</a></li>
        <li><a href="#/articles/tea-tincture-infusion-decoction-and-salve">Tea, Tincture, Infusion, Decoction, and Salve</a></li>
        <li><a href="#/articles/safety-first-contraindications-dosage-and-responsible-use">Safety First: Contraindications, Dosage, and Responsible Use</a></li>
        <li><a href="#/articles/how-to-read-an-herb-monograph">How to Read an Herb Monograph</a></li>
        <li><a href="#/buyer-guides/best-beginner-apothecary-kits">Best Beginner Apothecary Kits</a></li>
        <li><a href="#/buyer-guides/best-jars-and-storage-for-dried-herbs">Best Jars and Storage for Dried Herbs</a></li>
      </ul>
    </section>
  `;
}
