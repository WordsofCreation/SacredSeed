import { initializeCookieConsentBanner } from './components/cookieConsentBanner.js';
import { renderMateriaMedicaIndexPage } from './pages/materiaMedicaIndexPage.js';
import { renderHerbProfilePage } from './pages/herbProfilePage.js';
import { renderPreparationLibraryPage } from './pages/preparationLibraryPage.js';
import { renderAboutPage } from './pages/aboutPage.js';
import { renderPrivacyPolicyPage } from './pages/privacyPolicyPage.js';
import { renderTermsOfUsePage } from './pages/termsOfUsePage.js';
import { renderHomePage } from './pages/homePage.js';

const app = document.getElementById('app');

function getRouteParts() {
  const hash = window.location.hash || '#/home';
  return hash.replace(/^#\//, '').split('/').filter(Boolean);
}

async function renderRoute() {
  if (!app) {
    return;
  }

  const [section, slug] = getRouteParts();


  if (section === 'home' || !section) {
    renderHomePage(app);
    return;
  }

  if (section === 'herbs' && slug) {
    await renderHerbProfilePage(app, decodeURIComponent(slug));
    return;
  }

  if (section === 'preparations') {
    renderPreparationLibraryPage(app);
    applyPageSeo(getPreparationLibrarySeo());
    return;
  }

  if (section === 'about') {
    renderAboutPage(app);
    applyPageSeo(getAboutSeo());
    return;
  }

  if (section === 'privacy-policy') {
    renderPrivacyPolicyPage(app);
    applyPageSeo(getPrivacySeo());
    return;
  }

  if (section === 'terms-of-use') {
    renderTermsOfUsePage(app);
    applyPageSeo(getTermsSeo());
    return;
  }

  if (!section || section === 'materia-medica') {
    renderMateriaMedicaIndexPage(app);
    applyPageSeo(getMateriaMedicaSeo());
    return;
  }

  app.innerHTML = '<section class="card"><h2>Page not found</h2><p>The requested section is unavailable.</p></section>';
  applyPageSeo(getNotFoundSeo());
}

window.addEventListener('hashchange', () => {
  renderRoute();
});

renderRoute();
initializeCookieConsentBanner();
