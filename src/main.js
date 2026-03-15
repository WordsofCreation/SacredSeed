import { initializeCookieConsentBanner } from './components/cookieConsentBanner.js';
import { renderMateriaMedicaIndexPage } from './pages/materiaMedicaIndexPage.js';
import { renderHerbProfilePage } from './pages/herbProfilePage.js';
import { renderPreparationLibraryPage } from './pages/preparationLibraryPage.js';
import { renderAboutPage } from './pages/aboutPage.js';
import { renderPrivacyPolicyPage } from './pages/privacyPolicyPage.js';
import { renderTermsOfUsePage } from './pages/termsOfUsePage.js';

const app = document.getElementById('app');

function getRouteParts() {
  const hash = window.location.hash || '#/materia-medica';
  return hash.replace(/^#\//, '').split('/').filter(Boolean);
}

function renderRoute() {
  if (!app) {
    return;
  }

  const [section, slug] = getRouteParts();

  if (section === 'herbs' && slug) {
    renderHerbProfilePage(app, decodeURIComponent(slug));
    return;
  }

  if (section === 'preparations') {
    renderPreparationLibraryPage(app);
    return;
  }

  if (section === 'about') {
    renderAboutPage(app);
    return;
  }

  if (section === 'privacy-policy') {
    renderPrivacyPolicyPage(app);
    return;
  }

  if (section === 'terms-of-use') {
    renderTermsOfUsePage(app);
    return;
  }

  renderMateriaMedicaIndexPage(app);
}

window.addEventListener('hashchange', renderRoute);
renderRoute();
initializeCookieConsentBanner();
