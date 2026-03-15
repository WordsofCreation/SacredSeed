export const dataSources = {
  inaturalist: {
    id: 'inaturalist',
    name: 'iNaturalist',
    category: 'taxonomy-distribution',
    attribution: 'Taxonomic naming and image context informed by iNaturalist records when available.',
    license: {
      label: 'Provider terms and contributor licensing',
      note: 'Images and observations are governed by contributor-selected licenses and platform terms.',
      url: 'https://www.inaturalist.org/pages/terms'
    },
    usageConstraints: [
      'Always preserve attribution for observation/media data when surfaced to end users.',
      'Validate media license compatibility before using assets in commercial contexts.'
    ],
    complianceNotes:
      'Source may require per-record attribution. Keep a path for image-credit rendering in future media components.'
  },
  gbif: {
    id: 'gbif',
    name: 'GBIF',
    category: 'taxonomy-distribution',
    attribution: 'Species taxonomy and distribution summaries may be enriched via GBIF occurrence datasets.',
    license: {
      label: 'CC BY 4.0 (GBIF-mediated data policy applies)',
      note: 'Occurrence datasets can include source-specific terms in addition to GBIF standards.',
      url: 'https://www.gbif.org/terms'
    },
    usageConstraints: [
      'Include attribution for publishers and datasets where required by source records.',
      'Retain citation trails for exports or reports built from occurrence data.'
    ],
    complianceNotes:
      'If SacredSeed introduces downloadable reports, attach dataset-level citation metadata by record source.'
  },
  pubchem: {
    id: 'pubchem',
    name: 'PubChem',
    category: 'chemistry',
    attribution: 'Plant chemistry references may include compound identity and summary context derived from PubChem.',
    license: {
      label: 'Public domain (NIH/NLM data policy)',
      note: 'PubChem data is generally public domain; still preserve source attribution for transparency.',
      url: 'https://pubchem.ncbi.nlm.nih.gov/docs/disclaimer'
    },
    usageConstraints: [
      'Do not present compound listings as direct clinical efficacy claims.',
      'Keep chemistry presentation paired with educational-use language.'
    ],
    complianceNotes:
      'Chemistry enrichment can be API-intensive; future rate-limit handling should use provider-specific caching windows.'
  },
  curatedSacredseed: {
    id: 'curatedSacredseed',
    name: 'SacredSeed Curated Monographs',
    category: 'editorial',
    attribution: 'Traditional-use and preparation notes include editorial synthesis from internal monograph drafting.',
    license: {
      label: 'SacredSeed editorial content',
      note: 'Original site copy and synthesis remain proprietary unless otherwise stated.'
    },
    usageConstraints: ['External republication requires permission unless explicit reuse terms are published.'],
    complianceNotes:
      'Keep provenance notes for each editorial update to support future peer-review or contributor workflows.'
  },
  fallbackDataset: {
    id: 'fallbackDataset',
    name: 'Fallback Dataset',
    category: 'system',
    attribution: 'Baseline profile information shown when external API enrichment is unavailable.',
    license: {
      label: 'Internal operational dataset',
      note: 'Used for continuity and graceful service degradation.'
    },
    usageConstraints: ['Treat fallback content as provisional until externally validated where possible.'],
    complianceNotes:
      'Track stale records so fallback-only profiles can be prioritized for enrichment.'
  }
};

export const sourceNameMap = {
  iNaturalist: 'inaturalist',
  GBIF: 'gbif',
  PubChem: 'pubchem',
  'Curated SacredSeed monograph notes': 'curatedSacredseed',
  'Traditional Western herbal materia medica references': 'curatedSacredseed',
  'Curated fallback monograph': 'curatedSacredseed',
  'SacredSeed Medicinal Layer': 'curatedSacredseed',
  'Fallback dataset': 'fallbackDataset'
};

export const medicalDisclaimer =
  'SacredSeed provides educational botanical information only and does not provide medical diagnosis, treatment, or personalized medical advice. Always consult a qualified healthcare professional before using herbs, especially with medications, pregnancy, lactation, or chronic health conditions.';

export const educationalUseNotice =
  'Content is designed for educational reference, scholarly exploration, and practitioner-informed learning.';

export const disclaimerType = {
  herbProfile: 'herbProfile',
  formula: 'formula',
  safety: 'safety',
  educational: 'educational',
  regionalGuide: 'regionalGuide',
  materiaMedica: 'materiaMedica'
};

export const disclaimerContent = {
  [disclaimerType.herbProfile]:
    'Herb profiles summarize historical and contemporary reference material. They should not be used as stand-alone treatment plans.',
  [disclaimerType.formula]:
    'Formula and remedy content is educational. Individual suitability, dosing, and interactions require professional evaluation.',
  [disclaimerType.safety]:
    'Safety sections are reference-oriented and may not capture all contraindications or interactions for every individual case.',
  [disclaimerType.educational]:
    'Educational articles are informational and may simplify complex evidence. Consult primary sources for clinical decision-making.',
  [disclaimerType.regionalGuide]:
    'Regional growing and identification notes are educational references and should be verified with local expert guidance.',
  [disclaimerType.materiaMedica]:
    'The materia medica index is a discovery layer. Clinical interpretation should rely on trained professional judgment and primary references.'
};

export const complianceByPageType = {
  herbProfile: {
    disclaimers: [disclaimerType.herbProfile, disclaimerType.safety],
    showLicenseNotes: true
  },
  materiaMedica: {
    disclaimers: [disclaimerType.materiaMedica],
    showLicenseNotes: false
  },
  formula: {
    disclaimers: [disclaimerType.formula, disclaimerType.safety],
    showLicenseNotes: true
  },
  regionalGuide: {
    disclaimers: [disclaimerType.regionalGuide, disclaimerType.educational],
    showLicenseNotes: true
  },
  educational: {
    disclaimers: [disclaimerType.educational],
    showLicenseNotes: true
  },
  about: {
    disclaimers: [disclaimerType.educational],
    showLicenseNotes: true
  }
};

/**
 * Internal implementation note:
 * Keep provider-specific operational constraints here (limits, paid tiers, attribution thresholds)
 * so future admin dashboards can read from a single registry without surfacing backend complexity in UI.
 */
export const complianceNotes = {
  apiUsage: [
    'Review provider terms before enabling high-volume caching or export features.',
    'Introduce provider-level request budgeting when multi-herb sync jobs are added.',
    'Some providers may require commercial licenses once traffic or monetization crosses policy thresholds.'
  ]
};
