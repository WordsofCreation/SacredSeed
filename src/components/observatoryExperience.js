function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function drawSky(canvas, stars, regions, activeSlug) {
  const context = canvas.getContext('2d');
  if (!context) {
    return;
  }

  const ratio = window.devicePixelRatio || 1;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  canvas.width = Math.round(width * ratio);
  canvas.height = Math.round(height * ratio);
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  context.clearRect(0, 0, width, height);

  const background = context.createLinearGradient(0, 0, 0, height);
  background.addColorStop(0, 'rgba(9, 16, 36, 0.98)');
  background.addColorStop(1, 'rgba(5, 10, 24, 0.98)');
  context.fillStyle = background;
  context.fillRect(0, 0, width, height);

  for (let i = 0; i < 80; i += 1) {
    const seedX = ((i * 97) % 100) / 100;
    const seedY = ((i * 53) % 100) / 100;
    const radius = (i % 3) + 0.6;
    const alpha = 0.18 + ((i * 13) % 10) / 50;
    context.beginPath();
    context.fillStyle = `rgba(255,255,255,${alpha})`;
    context.arc(seedX * width, seedY * height, radius, 0, Math.PI * 2);
    context.fill();
  }

  regions.forEach((region) => {
    if (!region.points?.length) {
      return;
    }
    context.beginPath();
    region.points.forEach(([x, y], index) => {
      const px = x * width;
      const py = y * height;
      if (index === 0) {
        context.moveTo(px, py);
      } else {
        context.lineTo(px, py);
      }
    });
    context.closePath();
    context.fillStyle = 'rgba(126, 182, 255, 0.05)';
    context.strokeStyle = 'rgba(126, 182, 255, 0.14)';
    context.lineWidth = 1;
    context.fill();
    context.stroke();
  });

  stars.forEach((star) => {
    const x = star.x * width;
    const y = star.y * height;
    const radius = Math.max(2.8, 6 - (star.magnitude || 2));
    const isActive = star.slug === activeSlug;
    const glow = context.createRadialGradient(x, y, 0, x, y, isActive ? radius * 5 : radius * 3.5);
    glow.addColorStop(0, isActive ? 'rgba(255, 211, 106, 0.95)' : 'rgba(126, 182, 255, 0.9)');
    glow.addColorStop(1, 'rgba(126, 182, 255, 0)');
    context.beginPath();
    context.fillStyle = glow;
    context.arc(x, y, isActive ? radius * 5 : radius * 3.5, 0, Math.PI * 2);
    context.fill();

    context.beginPath();
    context.fillStyle = isActive ? '#ffe39a' : '#f5fbff';
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill();
  });
}

export function initializeObservatoryExperience(root) {
  const shell = root.querySelector('[data-observatory-root]');
  if (!shell) {
    return;
  }

  const canvas = shell.querySelector('[data-sky-canvas]');
  const starButtons = Array.from(shell.querySelectorAll('[data-star-button]'));
  const regionButtons = Array.from(shell.querySelectorAll('[data-region-button]'));
  const journeyButtons = Array.from(shell.querySelectorAll('[data-journey-button]'));
  const focusPanel = shell.querySelector('[data-focus-panel]');
  const regionPanel = shell.querySelector('[data-region-panel]');
  const journeyPanel = shell.querySelector('[data-journey-panel]');
  const stars = JSON.parse(shell.getAttribute('data-stars') || '[]');
  const regions = JSON.parse(shell.getAttribute('data-regions') || '[]');

  if (!canvas || !focusPanel || !regionPanel || !journeyPanel || !stars.length) {
    return;
  }

  const starMap = Object.fromEntries(stars.map((item) => [item.slug, item]));
  const regionMap = Object.fromEntries(regions.map((item) => [item.slug, item]));
  const reducedMotion = prefersReducedMotion();
  let activeSlug = shell.getAttribute('data-selected-slug') || stars[0].slug;
  let activeRegionSlug = shell.getAttribute('data-selected-region') || regions[0]?.slug || '';

  function syncCanvas() {
    drawSky(canvas, stars, regions, activeSlug);
  }

  function renderFocus(slug, shouldUpdateHash = true) {
    const star = starMap[slug];
    if (!star) {
      return;
    }

    activeSlug = slug;
    focusPanel.innerHTML = `
      <p class="label">Object focus</p>
      <h3>${star.name}</h3>
      <p class="observatory-focus-summary">${star.whyItMatters}</p>
      <div class="object-metric-grid">
        <div><span>Type</span><strong>${star.type}</strong></div>
        <div><span>Constellation</span><strong>${star.constellation}</strong></div>
        <div><span>Distance</span><strong>${star.distance}</strong></div>
        <div><span>Spectral class</span><strong>${star.spectralClass || 'Not applicable'}</strong></div>
      </div>
      <div class="focus-indicators">
        <span class="focus-badge">${star.prominence}</span>
        ${star.nakedEye ? '<span class="focus-badge">Naked-eye favorite</span>' : ''}
        <span class="focus-badge">${star.storyLabel}</span>
      </div>
      <div class="temperature-bar" aria-hidden="true"><span style="width:${Math.min(100, Math.max(24, 24 + (12 - (star.magnitude || 2)) * 6))}%"></span></div>
      <p class="meta-note">${star.colorTemperature}</p>
      <p>${star.lightReveals}</p>
      <div class="hero-actions">
        <a class="primary-link" href="#/objects/${encodeURIComponent(star.slug)}">Open full object profile</a>
        <a class="secondary-link" href="#/topics/${encodeURIComponent((star.relatedTopicsDetailed?.[0] || {}).slug || 'understanding-starlight')}">Related science topic</a>
      </div>
    `;

    starButtons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.starButton === slug));
    });

    syncCanvas();

    if (shouldUpdateHash) {
      const nextHash = `#/observatory/${encodeURIComponent(slug)}`;
      if (window.location.hash !== nextHash) {
        window.history.replaceState(null, '', nextHash);
      }
    }
  }

  function renderRegion(slug) {
    const region = regionMap[slug];
    if (!region) {
      return;
    }

    activeRegionSlug = slug;
    regionPanel.innerHTML = `
      <p class="label">Sky region</p>
      <h3>${region.title}</h3>
      <p>${region.note}</p>
      <p class="meta-note">${region.culturalNote}</p>
      <div class="tag-row">
        ${(region.objectsDetailed || []).map((item) => `<button class="tag-chip region-object-button" type="button" data-region-object="${item.slug}">${item.name}</button>`).join('')}
      </div>
    `;

    regionButtons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.regionButton === slug));
    });

    regionPanel.querySelectorAll('[data-region-object]').forEach((button) => {
      button.addEventListener('click', () => renderFocus(button.getAttribute('data-region-object')));
    });
  }

  function renderJourney(button) {
    const { journeyTitle, journeySummary, journeySteps = '', journeyObjects = '', journeyTopicHref = '#/learn' } = button.dataset;
    journeyButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    journeyPanel.innerHTML = `
      <p class="label">Guided discovery</p>
      <h3>${journeyTitle}</h3>
      <p>${journeySummary}</p>
      <ol class="journey-step-list">
        ${journeySteps.split('|').map((step) => `<li>${step}</li>`).join('')}
      </ol>
      <div class="tag-row">
        ${journeyObjects.split('|').filter(Boolean).map((item) => {
          const [slug, name] = item.split('::');
          return `<button class="tag-chip region-object-button" type="button" data-journey-object="${slug}">${name}</button>`;
        }).join('')}
      </div>
      <a class="profile-link" href="${journeyTopicHref}">Read the science thread →</a>
    `;

    journeyPanel.querySelectorAll('[data-journey-object]').forEach((item) => {
      item.addEventListener('click', () => renderFocus(item.getAttribute('data-journey-object')));
    });
  }

  starButtons.forEach((button) => {
    button.addEventListener('click', () => renderFocus(button.dataset.starButton));
    button.addEventListener('mouseenter', () => {
      if (!reducedMotion) {
        renderFocus(button.dataset.starButton, false);
      }
    });
  });

  regionButtons.forEach((button) => {
    button.addEventListener('click', () => renderRegion(button.dataset.regionButton));
  });

  journeyButtons.forEach((button) => {
    button.addEventListener('click', () => renderJourney(button));
  });

  const resizeObserver = new ResizeObserver(() => syncCanvas());
  resizeObserver.observe(canvas);
  window.addEventListener('resize', syncCanvas, { passive: true });

  renderFocus(activeSlug, false);
  renderRegion(activeRegionSlug);
  if (journeyButtons[0]) {
    renderJourney(journeyButtons[0]);
  }
}
