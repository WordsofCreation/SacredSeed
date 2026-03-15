import { renderHerbProfilePage } from './pages/herbProfilePage.js';
import { renderMateriaMedicaIndexPage } from './pages/materiaMedicaIndexPage.js';
import { renderPreparationLibraryPage } from './pages/preparationLibraryPage.js';

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

  renderMateriaMedicaIndexPage(app);
}

window.addEventListener('hashchange', renderRoute);
renderRoute();
