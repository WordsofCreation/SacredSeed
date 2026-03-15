import {
  complianceByPageType,
  dataSources,
  disclaimerContent,
  educationalUseNotice,
  medicalDisclaimer,
  sourceNameMap
} from '../data/complianceRegistry.js';

function normalizeSourceName(source) {
  const key = sourceNameMap[source] ?? sourceNameMap[source?.trim?.()];
  return key ? dataSources[key] : null;
}

export function buildSourceAttribution({ herb, sourceMeta }) {
  const names = new Set([...(herb?.dataSources ?? []), ...(herb?.chemistrySources ?? []), ...(herb?.medicinalSources ?? [])]);

  if (sourceMeta?.source?.includes('iNaturalist')) {
    names.add('iNaturalist');
  }

  const entries = [...names]
    .map((name) => normalizeSourceName(name))
    .filter(Boolean)
    .reduce((acc, source) => {
      if (!acc.find((item) => item.id === source.id)) {
        acc.push(source);
      }
      return acc;
    }, []);

  return entries;
}

export function getComplianceContext(pageType, { herb, sourceMeta } = {}) {
  const config = complianceByPageType[pageType] ?? complianceByPageType.educational;
  const sourceAttribution = buildSourceAttribution({ herb, sourceMeta });
  const disclaimers = config.disclaimers.map((type) => disclaimerContent[type]).filter(Boolean);

  return {
    educationalUseNotice,
    medicalDisclaimer,
    disclaimers,
    sourceAttribution,
    showLicenseNotes: config.showLicenseNotes
  };
}
