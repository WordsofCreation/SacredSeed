const MOBILE_VIEWPORT_MAX = 1024;
const TABLET_VIEWPORT_MAX = 1180;

function queryMatches(query) {
  if (!window.matchMedia) {
    return false;
  }

  return window.matchMedia(query).matches;
}

function supportsTouchInput() {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0 ||
    queryMatches('(any-pointer: coarse)')
  );
}

function hasFinePrimaryPointer() {
  return queryMatches('(pointer: fine)') && queryMatches('(hover: hover)');
}

function isMobileUserAgentFallback() {
  const userAgent = navigator.userAgent || '';
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Tablet/i.test(userAgent);
}

export function detectMobileLayoutContext() {
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth || 1280;
  const touchInput = supportsTouchInput();
  const finePrimaryPointer = hasFinePrimaryPointer();

  const responsiveMobile = viewportWidth <= MOBILE_VIEWPORT_MAX;
  const tabletTouchLayout = viewportWidth <= TABLET_VIEWPORT_MAX && touchInput;

  if (responsiveMobile || tabletTouchLayout) {
    return true;
  }

  if (!finePrimaryPointer && touchInput) {
    return true;
  }

  return isMobileUserAgentFallback() && viewportWidth <= TABLET_VIEWPORT_MAX;
}

export function initializeDeviceLayoutClass() {
  const root = document.documentElement;

  const applyLayoutClass = () => {
    const isMobileLayout = detectMobileLayoutContext();
    root.classList.toggle('mobile-layout', isMobileLayout);
    root.classList.toggle('desktop-layout', !isMobileLayout);
  };

  applyLayoutClass();

  let rafId = 0;
  const onViewportChanged = () => {
    if (rafId) {
      cancelAnimationFrame(rafId);
    }

    rafId = requestAnimationFrame(() => {
      applyLayoutClass();
      rafId = 0;
    });
  };

  window.addEventListener('resize', onViewportChanged, { passive: true });
  window.addEventListener('orientationchange', onViewportChanged, { passive: true });

  return applyLayoutClass;
}
