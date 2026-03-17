import { initializeCookieConsentBanner } from './components/cookieConsentBanner.js';
import { renderMateriaMedicaIndexPage } from './pages/materiaMedicaIndexPage.js';
import { renderHerbProfilePage } from './pages/herbProfilePage.js';
import { renderPreparationLibraryPage } from './pages/preparationLibraryPage.js';
import { renderAboutPage } from './pages/aboutPage.js';
import { renderAdvancedSearchPage } from './pages/advancedSearchPage.js';
import { renderEditorialArticlePage } from './pages/editorialArticlePage.js';
import { renderPrivacyPolicyPage } from './pages/privacyPolicyPage.js';
import { renderTermsOfUsePage } from './pages/termsOfUsePage.js';
import { renderAffiliateDisclosurePage } from './pages/affiliateDisclosurePage.js';
import { renderBuyerIntentTemplatePage } from './pages/buyerIntentTemplatesPage.js';
import { renderHomePage } from './pages/homePage.js';
import { renderHerbCollectionsPage } from './pages/herbCollectionsPage.js';
import { renderHerbCollectionPage } from './pages/herbCollectionPage.js';
import { renderLearningPathwaysPage } from './pages/learningPathwaysPage.js';
import { renderLearningPathwayPage } from './pages/learningPathwayPage.js';
import { renderSeasonalCollectionsPage } from './pages/seasonalCollectionsPage.js';
import { renderSeasonalCollectionPage } from './pages/seasonalCollectionPage.js';
import { renderEditorialArticlesPage } from './pages/editorialArticlesPage.js';
import { applyPageSeo } from './utils/seo.js';
import { initializeImageFallbackHandling } from './utils/imageAssets.js';
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
  getAffiliateDisclosureSeo,
  getBuyerIntentTemplatesSeo,
  getSearchSeo
} from './utils/pageSeo.js';

const app = document.getElementById('app');

function syncActiveNav() {
  const [section] = getRouteParts();
  const normalized = section || 'home';
  const navLinks = document.querySelectorAll('.site-nav a');

  navLinks.forEach((link) => {
    const target = (link.getAttribute('href') || '').replace(/^#\//, '').split('/')[0] || 'home';
    if (target === normalized) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

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
    syncActiveNav();
    return;
  }

  if (section === 'herbs' && slug) {
    await renderHerbProfilePage(app, decodeURIComponent(slug));
    return;
  }

  if (section === 'search') {
    renderAdvancedSearchPage(app);
    applyPageSeo(getSearchSeo());
    syncActiveNav();
    return;
  }

  if (section === 'preparations') {
    renderPreparationLibraryPage(app);
    applyPageSeo(getPreparationLibrarySeo());
    syncActiveNav();
    return;
  }

  if (section === 'collections' && !slug) {
    renderHerbCollectionsPage(app);
    applyPageSeo(getCollectionsSeo());
    syncActiveNav();
    return;
  }

  if (section === 'collections' && slug) {
    const collection = renderHerbCollectionPage(app, decodeURIComponent(slug));
    if (collection) {
      applyPageSeo(getCollectionDetailSeo(collection));
    } else {
      applyPageSeo(getNotFoundSeo());
    }
    syncActiveNav();
    return;
  }

  if (section === 'pathways' && !slug) {
    renderLearningPathwaysPage(app);
    applyPageSeo(getLearningPathwaysSeo());
    syncActiveNav();
    return;
  }

  if (section === 'pathways' && slug) {
    const pathway = renderLearningPathwayPage(app, decodeURIComponent(slug));
    if (pathway) {
      applyPageSeo(getLearningPathwayDetailSeo(pathway));
    } else {
      applyPageSeo(getNotFoundSeo());
    }
    syncActiveNav();
    return;
  }

  if (section === 'seasons' && !slug) {
    renderSeasonalCollectionsPage(app);
    applyPageSeo(getSeasonalCollectionsSeo());
    syncActiveNav();
    return;
  }

  if (section === 'seasons' && slug) {
    const collection = renderSeasonalCollectionPage(app, decodeURIComponent(slug));
    if (collection) {
      applyPageSeo(getSeasonalCollectionDetailSeo(collection));
    } else {
      applyPageSeo(getNotFoundSeo());
    }
    syncActiveNav();
    return;
  }

  if (section === 'articles' && !slug) {
    renderEditorialArticlesPage(app);
    applyPageSeo(getEditorialArticlesSeo());
    syncActiveNav();
    return;
  }

  if (section === 'articles' && slug) {
    const article = renderEditorialArticlePage(app, decodeURIComponent(slug));
    if (article) {
      applyPageSeo(getEditorialArticleSeo(article));
    } else {
      applyPageSeo(getNotFoundSeo());
    }
    syncActiveNav();
    return;
  }

  if (section === 'about') {
    renderAboutPage(app);
    applyPageSeo(getAboutSeo());
    syncActiveNav();
    return;
  }

  if (section === 'privacy-policy') {
    renderPrivacyPolicyPage(app);
    applyPageSeo(getPrivacySeo());
    syncActiveNav();
    return;
  }

  if (section === 'terms-of-use') {
    renderTermsOfUsePage(app);
    applyPageSeo(getTermsSeo());
    syncActiveNav();
    return;
  }

  if (section === 'affiliate-disclosure') {
    renderAffiliateDisclosurePage(app);
    applyPageSeo(getAffiliateDisclosureSeo());
    syncActiveNav();
    return;
  }


  if (section === 'buyer-guides') {
    renderBuyerIntentTemplatePage(app);
    applyPageSeo(getBuyerIntentTemplatesSeo());
    syncActiveNav();
    return;
  }

  if (section === 'materia-medica') {
    renderMateriaMedicaIndexPage(app);
    applyPageSeo(getMateriaMedicaSeo());
    syncActiveNav();
    return;
  }

  app.innerHTML = '<section class="card"><h2>Page not found</h2><p>The requested section is unavailable.</p></section>';
  applyPageSeo(getNotFoundSeo());
  syncActiveNav();
}

window.addEventListener('hashchange', () => {
  renderRoute();
});

initializeImageFallbackHandling();
renderRoute();
initializeCookieConsentBanner();
