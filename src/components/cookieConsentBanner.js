const STORAGE_KEY = 'sacredseed-cookie-consent-v1';

function saveConsent(value) {
  window.localStorage.setItem(STORAGE_KEY, value);
}

function getStoredConsent() {
  return window.localStorage.getItem(STORAGE_KEY);
}

export function initializeCookieConsentBanner() {
  const storedChoice = getStoredConsent();
  if (storedChoice) {
    return;
  }

  const banner = document.createElement('aside');
  banner.className = 'cookie-banner';
  banner.setAttribute('role', 'status');
  banner.setAttribute('aria-live', 'polite');
  banner.innerHTML = `
    <p class="cookie-banner-title">Privacy & data notice</p>
    <p class="cookie-banner-copy">
      SacredSeed may use minimal analytics and third-party data services to improve educational quality and reliability.
      You can review details in our <a href="#/privacy-policy">Privacy Policy</a>.
    </p>
    <div class="cookie-banner-actions">
      <button type="button" data-consent="accepted">Accept</button>
      <button type="button" data-consent="dismissed" class="secondary">Dismiss</button>
    </div>
  `;

  banner.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const choice = target.dataset.consent;
    if (!choice) {
      return;
    }

    saveConsent(choice);
    banner.remove();
  });

  document.body.appendChild(banner);
}

export function getCookieConsentState() {
  return getStoredConsent();
}
