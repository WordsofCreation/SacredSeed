const pillars = [
  {
    title: 'Why Heavens exists',
    body:
      'Heavens is designed to help people move from admiration to understanding. The platform treats astronomy as both an aesthetic experience and a science of evidence, interpretation, and long-term curiosity.'
  },
  {
    title: 'What the platform now includes',
    body:
      'This phase adds dedicated object pages, a Discover hub, science topic pages, guided learning pathways, and a stronger web of internal links so each visit can lead naturally into deeper study.'
  },
  {
    title: 'Local-first content architecture',
    body:
      'Objects, learning pathways, discovery modules, and related reading panels are powered by structured local content. That keeps the experience stable on GitHub Pages while creating clean seams for future research integrations.'
  },
  {
    title: 'How research integrations fit later',
    body:
      'Future integrations with archives, bibliographic services, or live astronomical feeds should attach at the service layer, enriching existing cards and panels without becoming a hard dependency for browsing the site.'
  },
  {
    title: 'Design principles',
    body:
      'Heavens aims to be premium, calm, accessible, and readable. Long-form pages are written for clarity, internal links are intentional, and the interface respects the difference between delightful exploration and visual clutter.'
  }
];

export function renderAboutPage(rootElement) {
  rootElement.innerHTML = `
    <section class="card about-page">
      <div class="section-header">
        <p class="eyebrow">About Heavens</p>
        <h1>An astronomy platform built for discovery, literacy, and future research depth</h1>
        <p>
          Heavens is a polished static astronomy experience that combines visual exploration with scientific context.
          The platform is intentionally modular so object pages, learning systems, and future data integrations can grow together
          without sacrificing elegance, speed, or GitHub Pages compatibility.
        </p>
      </div>

      <div class="about-grid">
        ${pillars
          .map(
            (pillar) => `
              <article class="card about-card">
                <h3>${pillar.title}</h3>
                <p>${pillar.body}</p>
              </article>
            `
          )
          .join('')}
      </div>
    </section>
  `;
}
