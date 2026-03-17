import { renderAffiliateDisclosureBlock, renderAffiliateProductCard } from '../components/affiliate.js';
import { getAffiliateProduct } from '../config/affiliateConfig.js';

export function renderBestToolsBeginnerHomeApothecaryPage(rootElement) {
  const mortarAndPestle = getAffiliateProduct('mortarAndPestle');
  const digitalScale = getAffiliateProduct('digitalKitchenScale');
  const measuringTools = getAffiliateProduct('measuringSpoonsAndFunnels');
  const herbalJournal = getAffiliateProduct('herbalJournal');

  rootElement.innerHTML = `
    <article class="section-shell" aria-labelledby="best-tools-beginner-home-apothecary-title">
      <header class="section-header">
        <p class="eyebrow">Buyer Guide</p>
        <h1 id="best-tools-beginner-home-apothecary-title">Best Tools for a Beginner Home Apothecary</h1>
        <p>
          You do not need an elaborate herbal workshop to start learning well. A few reliable beginner apothecary tools can
          make your home practice easier to keep clean, easier to repeat, and easier to improve over time.
        </p>
      </header>
    </article>

    <section class="section-shell" aria-labelledby="beginner-needs-vs-waits-title">
      <h2 id="beginner-needs-vs-waits-title">What a beginner actually needs vs. what can wait</h2>
      <p>
        Start with tools that support your most common tasks: measuring, grinding, transferring, storing, and taking notes.
        Specialty gadgets can wait until you know your preferred preparations and workflow.
      </p>
      <ul>
        <li><strong>Start now:</strong> A small digital scale, mortar and pestle, measuring spoons, mini funnels, and one dedicated notebook.</li>
        <li><strong>Add later:</strong> Larger batching tools, advanced extraction equipment, or decorative storage systems.</li>
        <li><strong>Focus on habits:</strong> Clean tools, clear labels, and dated notes make your learning safer and more useful.</li>
      </ul>
    </section>

    <section class="section-shell" aria-labelledby="measuring-consistency-tools-title">
      <h2 id="measuring-consistency-tools-title">Measuring and consistency tools</h2>
      <p>
        Repeatable measurement is one of the most practical upgrades for herbalism tools for beginners. A digital kitchen
        scale helps you portion dried herbs accurately, while measuring spoons support quick daily use when precision to the
        gram is not required.
      </p>
      ${digitalScale ? renderAffiliateProductCard(digitalScale) : ''}
    </section>

    <section class="section-shell" aria-labelledby="grinding-preparation-tools-title">
      <h2 id="grinding-preparation-tools-title">Grinding and preparation tools</h2>
      <p>
        A mortar and pestle is one of the essential herbal tools for small batches. It is ideal for gently crushing seeds,
        roots, and aromatic leaves so your teas and blends extract more evenly.
      </p>
      ${mortarAndPestle ? renderAffiliateProductCard(mortarAndPestle) : ''}
    </section>

    <section class="section-shell" aria-labelledby="transfer-bottling-tools-title">
      <h2 id="transfer-bottling-tools-title">Transfer and bottling tools</h2>
      <p>
        Measuring spoons and small funnels keep your workspace cleaner and reduce waste when portioning dried herbs,
        transferring powders, or filling small bottles. These low-cost home apothecary tools make everyday prep far less
        messy.
      </p>
      ${measuringTools ? renderAffiliateProductCard(measuringTools) : ''}
    </section>

    <section class="section-shell" aria-labelledby="note-tracking-tools-title">
      <h2 id="note-tracking-tools-title">Note-taking and materia medica tracking tools</h2>
      <p>
        A dedicated journal helps track herb source, preparation style, dosage, and observations. Over time, your notebook
        becomes a personal materia medica that makes your learning more grounded and responsible.
      </p>
      ${herbalJournal ? renderAffiliateProductCard(herbalJournal) : ''}
      ${renderAffiliateDisclosureBlock({ compact: true })}
    </section>

    <section class="section-shell" aria-labelledby="build-without-overspending-title">
      <h2 id="build-without-overspending-title">How to build a practical apothecary toolkit without overspending</h2>
      <ol>
        <li>Choose tools tied to one weekly practice, like tea blends or simple infusions.</li>
        <li>Buy durable basics first, then upgrade only when current tools create a real bottleneck.</li>
        <li>Keep one clean prep area and avoid duplicates until your routine clearly demands them.</li>
        <li>Track usage for a month before expanding your tool set.</li>
      </ol>
    </section>

    <section class="section-shell" aria-labelledby="beginner-mistakes-avoid-title">
      <h2 id="beginner-mistakes-avoid-title">Beginner mistakes to avoid</h2>
      <ul>
        <li>Buying too many tools before building consistent herbal preparation habits.</li>
        <li>Skipping a scale and relying only on visual estimates for repeatable formulas.</li>
        <li>Using hard-to-clean tools that hold residue and affect flavor or quality.</li>
        <li>Neglecting notes, which makes successful batches hard to repeat later.</li>
        <li>Assuming more gear equals better learning instead of prioritizing clear technique.</li>
      </ul>
    </section>

    <section class="section-shell" aria-labelledby="continue-foundational-learning-title">
      <h2 id="continue-foundational-learning-title">Continue with foundational herbal education</h2>
      <p>Pair your essential herbal tools with these core SacredSeed learning resources:</p>
      <ul>
        <li><a href="#/articles/what-is-herbalism">What Herbalism Is</a></li>
        <li><a href="#/articles/how-to-start-learning-herbs-without-getting-overwhelmed">How to Start Learning Herbs Without Getting Overwhelmed</a></li>
        <li><a href="#/articles/tea-tincture-infusion-decoction-and-salve">Tea, Tincture, Infusion, Decoction, and Salve</a></li>
        <li><a href="#/articles/herbal-actions-explained-in-plain-english">Herbal Actions Explained in Plain English</a></li>
        <li><a href="#/articles/safety-first-contraindications-dosage-and-responsible-use">Safety First: Contraindications, Dosage, and Responsible Use</a></li>
        <li><a href="#/articles/how-to-read-an-herb-monograph">How to Read an Herb Monograph</a></li>
        <li><a href="#/buyer-guides/best-beginner-apothecary-kits">Best Beginner Apothecary Kits</a></li>
        <li><a href="#/buyer-guides/best-jars-and-storage-for-dried-herbs">Best Jars and Storage for Dried Herbs</a></li>
        <li><a href="#/buyer-guides/best-dropper-bottles-for-herbal-preparations">Best Dropper Bottles for Herbal Preparations</a></li>
      </ul>
    </section>
  `;
}
