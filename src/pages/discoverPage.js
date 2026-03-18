import { renderContentCard, renderQaCallout, renderScienceInsightCard } from '../components/astronomyContent.js';
import { getDiscoverModules, getRotatingFeaturedMoment, getTodayInTheHeavens } from '../services/astronomyContentService.js';
import { getObservatoryJourneys, getScienceStoryPanels } from '../services/observatoryService.js';

export function renderDiscoverPage(rootElement) {
  const modules = getDiscoverModules();
  const featuredMoment = getRotatingFeaturedMoment();
  const today = getTodayInTheHeavens();
  const journeys = getObservatoryJourneys().slice(0, 4);
  const storyPanels = getScienceStoryPanels().slice(0, 4);

  rootElement.innerHTML = `
    <section class="page-hero card">
      <p class="eyebrow">Discover</p>
      <h1>Science-driven exploration for curious skywatchers</h1>
      <p class="hero-subtitle">Discover now works as the editorial bridge around Observatory Mode: guided sky prompts, science storytelling, object-driven questions, and reusable modules that keep the immersive experience welcoming.</p>
      <div class="hero-actions">
        <a class="primary-link" href="#/observatory">Open Observatory Mode</a>
        <a class="secondary-link" href="#/learn">Browse learning routes</a>
      </div>
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
        <p>Each module is locally curated and designed to complement the immersive sky layer with science, story, and memorable entry points.</p>
      </div>
      <div class="card-grid three-up-grid">
        ${modules.map((item) => renderContentCard({ eyebrow: item.eyebrow, title: item.title, description: item.description, href: item.href })).join('')}
      </div>
    </section>

    <section class="section-shell">
      <div class="section-header">
        <h2>Guided observatory journeys</h2>
        <p>Reusable routes make the site feel intelligent and welcoming, with clear starts for brightness, color, naked-eye observing, and stellar life cycles.</p>
      </div>
      <div class="card-grid two-up-grid">
        ${journeys.map((journey) => renderContentCard({ eyebrow: `Journey · ${journey.duration}`, title: journey.title, description: journey.summary, href: `#/observatory/${encodeURIComponent(journey.objectsDetailed[0].slug)}`, hrefLabel: 'Open in Observatory Mode →' })).join('')}
      </div>
    </section>

    <section class="section-shell">
      <div class="section-header">
        <h2>Science storytelling panels</h2>
        <p>Elegant, concise explanations designed to live inside the experience instead of feeling like separate textbook blocks.</p>
      </div>
      <div class="card-grid two-up-grid">
        ${storyPanels.map((item) => renderScienceInsightCard({ eyebrow: item.eyebrow, title: item.title, body: item.body, href: '#/observatory', hrefLabel: 'See in observatory context →' })).join('')}
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
