import { initializeCookieConsentBanner } from './components/cookieConsentBanner.js';
import { renderMateriaMedicaIndexPage } from './pages/materiaMedicaIndexPage.js';
import { renderHerbProfilePage } from './pages/herbProfilePage.js';
import { renderPreparationLibraryPage } from './pages/preparationLibraryPage.js';
import { renderAboutPage } from './pages/aboutPage.js';
import { renderAdvancedSearchPage } from './pages/advancedSearchPage.js';
import { renderEditorialArticlePage } from './pages/editorialArticlePage.js';
import { renderPrivacyPolicyPage } from './pages/privacyPolicyPage.js';
import { renderTermsOfUsePage } from './pages/termsOfUsePage.js';
import { renderHomePage } from './pages/homePage.js';
import { renderHerbCollectionsPage } from './pages/herbCollectionsPage.js';
import { renderHerbCollectionPage } from './pages/herbCollectionPage.js';
import { renderLearningPathwaysPage } from './pages/learningPathwaysPage.js';
import { renderLearningPathwayPage } from './pages/learningPathwayPage.js';
import { renderSeasonalCollectionsPage } from './pages/seasonalCollectionsPage.js';
import { renderSeasonalCollectionPage } from './pages/seasonalCollectionPage.js';
import { renderEditorialArticlesPage } from './pages/editorialArticlesPage.js';
import { applyPageSeo } from './utils/seo.js';
import {
  getAboutSeo,
  getMateriaMedicaSeo,
  getNotFoundSeo,
  getPreparationLibrarySeo,
  getCollectionsSeo,
  getCollectionDetailSeo,
  getLearningPathwaysSeo,
  getLearningPathwayDetailSeo,
  getSeasonalCollectionsSeo,
  getSeasonalCollectionDetailSeo,
  getEditorialArticlesSeo,
  getEditorialArticleSeo,
  getPrivacySeo,
  getTermsSeo,
  getSearchSeo
} from './utils/pageSeo.js';

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

  if (section === 'search') {
    renderAdvancedSearchPage(app);
    applyPageSeo(getSearchSeo());
    return;
  }

  if (section === 'preparations') {
    renderPreparationLibraryPage(app);
    applyPageSeo(getPreparationLibrarySeo());
    return;
  }

  if (section === 'collections' && !slug) {
    renderHerbCollectionsPage(app);
    applyPageSeo(getCollectionsSeo());
    return;
  }

  if (section === 'collections' && slug) {
    const collection = renderHerbCollectionPage(app, decodeURIComponent(slug));
    if (collection) {
      applyPageSeo(getCollectionDetailSeo(collection));
    } else {
      applyPageSeo(getNotFoundSeo());
    }
    return;
  }

  if (section === 'pathways' && !slug) {
    renderLearningPathwaysPage(app);
    applyPageSeo(getLearningPathwaysSeo());
    return;
  }

  if (section === 'pathways' && slug) {
    const pathway = renderLearningPathwayPage(app, decodeURIComponent(slug));
    if (pathway) {
      applyPageSeo(getLearningPathwayDetailSeo(pathway));
    } else {
      applyPageSeo(getNotFoundSeo());
    }
    return;
  }

  if (section === 'seasons' && !slug) {
    renderSeasonalCollectionsPage(app);
    applyPageSeo(getSeasonalCollectionsSeo());
    return;
  }

  if (section === 'seasons' && slug) {
    const collection = renderSeasonalCollectionPage(app, decodeURIComponent(slug));
    if (collection) {
      applyPageSeo(getSeasonalCollectionDetailSeo(collection));
    } else {
      applyPageSeo(getNotFoundSeo());
    }
    return;
  }

  if (section === 'articles' && !slug) {
    renderEditorialArticlesPage(app);
    applyPageSeo(getEditorialArticlesSeo());
    return;
  }

  if (section === 'articles' && slug) {
    const article = renderEditorialArticlePage(app, decodeURIComponent(slug));
    if (article) {
      applyPageSeo(getEditorialArticleSeo(article));
    } else {
      applyPageSeo(getNotFoundSeo());
    }
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

  if (section === 'materia-medica') {
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
