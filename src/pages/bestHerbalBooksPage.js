import { renderAffiliateDisclosureBlock, renderAffiliateProductCard } from '../components/affiliate.js';
import { getAffiliateProduct } from '../config/affiliateConfig.js';

export function renderBestHerbalBooksPage(rootElement) {
  const product = getAffiliateProduct('herbalReferenceBook');

  rootElement.innerHTML = `
    <article class="section-shell" aria-labelledby="best-herbal-books-title">
      <header class="section-header">
        <p class="eyebrow">Buyer Guide</p>
        <h1 id="best-herbal-books-title">Best Herbal Books for Beginners</h1>
        <p>
          The best herbal books for beginners do more than list plants. They help you build a steady learning process,
          understand safe preparation methods, and connect herbal traditions to practical everyday study.
        </p>
      </header>
    </article>

    <section class="section-shell" aria-labelledby="beginner-book-criteria-title">
      <h2 id="beginner-book-criteria-title">What makes a good beginner herbalism book</h2>
      <p>
        Beginner herbalism books should be clear, well-organized, and realistic about safety. As you compare options,
        focus on books that cover both foundational concepts and step-by-step application.
      </p>
      <ul>
        <li><strong>Plant identification basics:</strong> Books should teach how to distinguish plants responsibly and avoid dangerous confusion.</li>
        <li><strong>Preparation methods:</strong> Look for practical guidance on tea, infusion, decoction, tincture, and topical preparations.</li>
        <li><strong>Safety and contraindications:</strong> Trustworthy references include dosage context, cautions, and interaction awareness.</li>
        <li><strong>Materia medica structure:</strong> Entries should explain actions, parts used, energetics, and preparation considerations in a consistent format.</li>
        <li><strong>Beginner-friendly language:</strong> Explanations should be approachable without oversimplifying important clinical and safety details.</li>
      </ul>
    </section>

    <section class="section-shell" aria-labelledby="books-vs-scattered-reading-title">
      <h2 id="books-vs-scattered-reading-title">Why books build stronger herbal foundations than scattered online reading</h2>
      <p>
        Online articles can be useful, but they are often fragmented. A well-edited herbal text gives you a coherent path,
        so definitions, safety notes, and preparation guidance reinforce each other instead of competing for attention.
      </p>
      <p>
        Books also make it easier to return to core concepts over time. Re-reading chapters on herb actions, tissue states,
        and preparation strategy helps beginners develop pattern recognition that random browsing rarely supports.
      </p>
    </section>

    <section class="section-shell" aria-labelledby="recommended-herbal-books-title">
      <h2 id="recommended-herbal-books-title">Recommended beginner herbal books</h2>
      <p>
        If you want a practical starting point, explore our curated Amazon list of the best herbal books for learning herbs,
        foundational materia medica, and safe home practice.
      </p>
      ${product ? renderAffiliateProductCard(product) : ''}
      ${renderAffiliateDisclosureBlock({ compact: true })}
    </section>

    <section class="section-shell" aria-labelledby="study-without-overwhelm-title">
      <h2 id="study-without-overwhelm-title">How to study herbs from books without getting overwhelmed</h2>
      <ol>
        <li>Start with one primary text and one supporting reference rather than collecting many books at once.</li>
        <li>Study a small set of common herbs first and track notes on actions, safety, and preparation methods.</li>
        <li>Create weekly study blocks: one reading session, one materia medica review, and one preparation practice.</li>
        <li>Use a simple notebook format for each herb: identification, parts used, actions, contraindications, and preparations.</li>
        <li>Revisit foundational chapters regularly so your understanding deepens before expanding to advanced protocols.</li>
      </ol>
    </section>

    <section class="section-shell" aria-labelledby="continue-herbal-education-title">
      <h2 id="continue-herbal-education-title">Continue your foundational herbal education</h2>
      <p>Build your beginner foundation with these SacredSeed guides:</p>
      <ul>
        <li><a href="#/articles/what-is-herbalism">What Herbalism Is</a></li>
        <li><a href="#/articles/how-to-start-learning-herbs-without-getting-overwhelmed">How to Start Learning Herbs Without Getting Overwhelmed</a></li>
        <li><a href="#/articles/herbal-actions-explained-in-plain-english">Herbal Actions Explained in Plain English</a></li>
        <li><a href="#/articles/safety-first-contraindications-dosage-and-responsible-use">Safety First: Contraindications, Dosage, and Responsible Use</a></li>
        <li><a href="#/articles/how-to-read-an-herb-monograph">How to Read an Herb Monograph</a></li>
      </ul>
    </section>
  `;
}
