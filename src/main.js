import { renderHerbProfilePage } from './pages/herbProfilePage.js';
import { renderMateriaMedicaIndexPage } from './pages/materiaMedicaIndexPage.js';

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

  renderMateriaMedicaIndexPage(app);
}

window.addEventListener('hashchange', renderRoute);
renderRoute();
