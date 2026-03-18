import { renderExploreMore, renderObserveNext, renderRelatedObjectCard } from '../components/astronomyContent.js';
import { getScienceTopicBySlug } from '../services/astronomyContentService.js';

export function renderScienceTopicPage(rootElement, slug) {
  const topic = getScienceTopicBySlug(slug);

  if (!topic) {
    rootElement.innerHTML = `
      <section class="card error-state">
        <p class="eyebrow">Topic not found</p>
        <h2>We couldn’t load that science topic.</h2>
        <a class="primary-link" href="#/learn">Visit Learn</a>
      </section>
    `;
    return null;
  }

  rootElement.innerHTML = `
    <section class="page-hero card">
      <p class="eyebrow">Science topic</p>
      <h1>${topic.title}</h1>
      <p class="hero-subtitle">${topic.intro}</p>
    </section>

    <section class="section-shell longform-page">
      <div class="section-header">
        <h2>Core ideas</h2>
        <p>${topic.summary}</p>
      </div>
      <div class="reading-stack">
        ${topic.sections.map((section) => `
          <article class="card reading-section">
            <h3>${section.title}</h3>
            <p>${section.body}</p>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="section-shell">
      <div class="section-header">
        <h2>Example objects</h2>
        <p>These objects make the science more concrete.</p>
      </div>
      <div class="card-grid three-up-grid">
        ${topic.objects.map((item) => renderRelatedObjectCard(item)).join('')}
      </div>
    </section>

    ${renderObserveNext({
      items: topic.objects.map((item) => ({ label: item.name, href: `#/objects/${encodeURIComponent(item.slug)}` }))
    })}

    ${renderExploreMore({
      items: topic.relatedTopics.map((related) => ({ label: related.replaceAll('-', ' '), href: `#/topics/${encodeURIComponent(related)}` }))
    })}
  `;

  return topic;
}
