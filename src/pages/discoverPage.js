import { renderContentCard, renderQaCallout } from '../components/astronomyContent.js';
import { getDiscoverModules, getRotatingFeaturedMoment, getTodayInTheHeavens } from '../services/astronomyContentService.js';

export function renderDiscoverPage(rootElement) {
  const modules = getDiscoverModules();
  const featuredMoment = getRotatingFeaturedMoment();
  const today = getTodayInTheHeavens();

  rootElement.innerHTML = `
    <section class="page-hero card">
      <p class="eyebrow">Discover</p>
      <h1>Science-driven exploration for curious skywatchers</h1>
      <p class="hero-subtitle">Discover turns Heavens into a research-minded hub: featured objects, spectral clues, stellar evolution stories, and curated prompts for deeper study.</p>
    </section>

    ${renderQaCallout({
      question: featuredMoment.title,
      answer: featuredMoment.description,
      href: featuredMoment.href,
      hrefLabel: 'Begin today’s route →'
    })}

    <section class="section-shell">
      <div class="section-header">
        <h2>Discovery modules</h2>
        <p>Each module is locally curated now and structured for future live data enhancements later.</p>
      </div>
      <div class="card-grid three-up-grid">
        ${modules.map((item) => renderContentCard({ eyebrow: item.eyebrow, title: item.title, description: item.description, href: item.href })).join('')}
      </div>
    </section>

    <section class="section-shell">
      <div class="section-header">
        <h2>Today in the Heavens</h2>
        <p>A rotating editorial layer that creates fresh entry points while keeping the site static and GitHub Pages friendly.</p>
      </div>
      <div class="card-grid three-up-grid">
        ${today.map((item) => renderContentCard({ eyebrow: 'Today in the Heavens', title: item.title, description: item.description, href: item.href, hrefLabel: 'Explore prompt →' })).join('')}
      </div>
    </section>
  `;
}
