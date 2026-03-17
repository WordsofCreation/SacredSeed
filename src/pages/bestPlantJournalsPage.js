import { renderAffiliateDisclosureBlock, renderAffiliateProductCard } from '../components/affiliate.js';
import { getAffiliateProduct } from '../config/affiliateConfig.js';

export function renderBestPlantJournalsPage(rootElement) {
  const product = getAffiliateProduct('herbalJournal');

  rootElement.innerHTML = `
    <article class="section-shell" aria-labelledby="best-plant-journals-title">
      <header class="section-header">
        <p class="eyebrow">Buyer Guide</p>
        <h1 id="best-plant-journals-title">Best Plant Journals and Notebooks for Herbal Study</h1>
        <p>
          A thoughtful herbalism notebook can turn scattered study into a clear learning path. Journaling helps you
          document plant experiences, preparation outcomes, and safety context so your herbal practice grows with more
          confidence and consistency over time.
        </p>
      </header>
    </article>

    <section class="section-shell" aria-labelledby="journal-features-title">
      <h2 id="journal-features-title">What to look for in a good herbal study journal or notebook</h2>
      <p>
        The best herbal journal is one you can return to regularly. Focus on structure, durability, and enough space to
        track both core monograph data and your own observations.
      </p>
      <ul>
        <li><strong>Repeatable page layout:</strong> Look for a format that makes it easy to log botanical name, common name, actions, and safety notes.</li>
        <li><strong>Dedicated preparation space:</strong> Leave room for teas, infusions, tinctures, and preparation ratios with dates.</li>
        <li><strong>Observation-friendly design:</strong> Choose pages with enough writing space for taste, energetics, and personal response tracking.</li>
        <li><strong>Durable build:</strong> If you study in the kitchen, garden, or apothecary area, pick a notebook that can handle frequent use.</li>
        <li><strong>Index or tab potential:</strong> A notebook that supports indexing helps your materia medica notebook stay useful long term.</li>
      </ul>
    </section>

    <section class="section-shell" aria-labelledby="materia-medica-growth-title">
      <h2 id="materia-medica-growth-title">How journaling helps build a materia medica over time</h2>
      <p>
        A personal materia medica develops through repetition. When you record each herb in the same structure, you begin
        noticing patterns in taste, energetics, actions, and preparation outcomes. That pattern recognition is where much
        of practical herbal learning happens.
      </p>
      <p>
        Your notes can also bridge textbook monographs with lived learning: where you sourced the herb, how you prepared
        it, what changed between batches, and how your observations compare with your reference materials.
      </p>
      <ul>
        <li><strong>Herb monograph study:</strong> Capture definitions and key takeaways in your own words so concepts stick.</li>
        <li><strong>Preparation tracking:</strong> Log teas, infusions, and tinctures with date, ratio, and extraction details.</li>
        <li><strong>Energetics + actions:</strong> Record taste, temperature quality, and observed herbal actions for pattern review.</li>
        <li><strong>Safety continuity:</strong> Keep contraindications, dosage context, and sourcing quality in one searchable place.</li>
      </ul>
    </section>

    <section class="section-shell" aria-labelledby="recommended-herbal-journal-title">
      <h2 id="recommended-herbal-journal-title">Recommended herbal medicine journals and notebooks</h2>
      <p>
        If you want a ready-to-use starting point, browse these herbal medicine journals and notebooks selected for
        beginners, self-learners, and students building an organized home study routine.
      </p>
      ${product ? renderAffiliateProductCard(product) : ''}
      ${product ? `<p><a class="profile-link" href="${product.affiliateUrl}" target="_blank" rel="sponsored nofollow noopener noreferrer">Browse herbal journals on Amazon</a></p>` : ''}
      ${renderAffiliateDisclosureBlock({ compact: true })}
    </section>

    <section class="section-shell" aria-labelledby="beginner-record-title">
      <h2 id="beginner-record-title">What beginners should record in a plant journal</h2>
      <ul>
        <li><strong>Plant profile basics:</strong> Common name, botanical name, plant part used, and key actions.</li>
        <li><strong>Safety notes:</strong> Contraindications, dosage boundaries, and interaction cautions from trusted sources.</li>
        <li><strong>Sourcing details:</strong> Where the herb came from, quality notes, and whether it was fresh or dried.</li>
        <li><strong>Preparation log:</strong> Tea, infusion, or tincture method, proportions, extraction time, and preparation date.</li>
        <li><strong>Sensory and energetics notes:</strong> Taste, aroma, temperature quality, and other experiential observations.</li>
        <li><strong>Learning reflections:</strong> Questions, follow-up reading goals, and monograph comparison notes.</li>
      </ul>
    </section>

    <section class="section-shell" aria-labelledby="organize-notes-title">
      <h2 id="organize-notes-title">How to organize notes for herbs, preparations, and observations</h2>
      <ol>
        <li>Create one consistent herb profile template and use it every time to support easier review.</li>
        <li>Keep separate sections for monograph facts, preparation logs, and personal observations.</li>
        <li>Date every entry so you can track progression and compare different batches or sources.</li>
        <li>Use simple tags like “digestive,” “calming,” or “respiratory” to group herbs by action.</li>
        <li>Review your notes weekly and summarize one key takeaway per herb to reinforce retention.</li>
      </ol>
    </section>

    <section class="section-shell" aria-labelledby="journal-mistakes-title">
      <h2 id="journal-mistakes-title">Common journaling mistakes to avoid</h2>
      <ul>
        <li><strong>Recording only recipes:</strong> Include context and observations, not just ingredient lists.</li>
        <li><strong>Skipping safety details:</strong> Always document contraindications and dosage context as you study.</li>
        <li><strong>Inconsistent formats:</strong> Changing note structure each time makes comparison harder later.</li>
        <li><strong>No date tracking:</strong> Without dates, you lose timeline clarity for sourcing and preparation quality.</li>
        <li><strong>Overcomplicating the process:</strong> A simple, consistent herbalism notebook beats a perfect system you never use.</li>
      </ul>
    </section>

    <section class="section-shell" aria-labelledby="continue-herbal-education-title">
      <h2 id="continue-herbal-education-title">Continue your foundational herbal education</h2>
      <p>Deepen your study with these SacredSeed guides:</p>
      <ul>
        <li><a href="#/articles/what-is-herbalism">What Herbalism Is</a></li>
        <li><a href="#/articles/how-to-start-learning-herbs-without-getting-overwhelmed">How to Start Learning Herbs Without Getting Overwhelmed</a></li>
        <li><a href="#/articles/herbal-actions-explained-in-plain-english">Herbal Actions Explained in Plain English</a></li>
        <li><a href="#/articles/safety-first-contraindications-dosage-and-responsible-use">Safety First: Contraindications, Dosage, and Responsible Use</a></li>
        <li><a href="#/articles/how-to-read-an-herb-monograph">How to Read an Herb Monograph</a></li>
        <li><a href="#/buyer-guides/best-tools-for-a-beginner-home-apothecary">Best Tools for a Beginner Home Apothecary</a></li>
      </ul>
    </section>
  `;
}
