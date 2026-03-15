const ASSET_VERSION = window.__SACREDSEED_ASSET_VERSION__ || 'dev';


function isExternalAssetUrl(assetUrl) {
  if (!/^https?:\/\//i.test(assetUrl)) {
    return false;
  }

  try {
    const parsed = new URL(assetUrl);
    return parsed.origin !== window.location.origin;
  } catch {
    return false;
  }
}

export { ASSET_VERSION };

export function withAssetVersion(assetUrl) {
  if (!assetUrl || /^data:/i.test(assetUrl) || isExternalAssetUrl(assetUrl)) {
    return assetUrl;
  }

  if (typeof window.__sacredseedAssetUrl === 'function') {
    return window.__sacredseedAssetUrl(assetUrl);
  }

  const [base, hash = ''] = String(assetUrl).split('#');
  const separator = base.includes('?') ? '&' : '?';
  const versioned = `${base}${separator}v=${encodeURIComponent(ASSET_VERSION)}`;
  return hash ? `${versioned}#${hash}` : versioned;
}
