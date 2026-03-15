import { medicinalProfiles } from '../data/medicinalProfiles.js';

function asArray(value) {
  if (!value) {
    return [];
  }

  if (Array.isArray(value)) {
    return value.filter(Boolean);
  }

  return [value].filter(Boolean);
}

function normalizePreparation(preparation) {
  if (!preparation) {
    return null;
  }

  if (typeof preparation === 'string') {
    return {
      type: preparation,
      part: null,
      guidance: null
    };
  }

  return {
    type: preparation.type ?? null,
    part: preparation.part ?? null,
    guidance: preparation.guidance ?? null
  };
}

/**
 * Normalizes medicinal and safety entries into SacredSeed's unified herb contract.
 *
 * Future connection point:
 * - Replace or blend this with external medicinal/safety APIs while preserving
 *   this normalized output shape for UI stability.
 */
export function getNormalizedMedicinalProfile(slug) {
  const profile = medicinalProfiles[slug];
  if (!profile) {
    return null;
  }

  return {
    medicinalActions: asArray(profile.medicinalActions),
    traditionalUses: asArray(profile.traditionalUses),
    bodySystems: asArray(profile.bodySystems),
    energetics: asArray(profile.energetics),
    herbalCategories: asArray(profile.herbalCategories),
    preparations: asArray(profile.preparations).map(normalizePreparation).filter(Boolean),
    dosageNotes: asArray(profile.dosageNotes),
    safetySummary: profile.safety?.safetySummary ?? null,
    safetyNotes: asArray(profile.safety?.safetyNotes),
    contraindications: asArray(profile.safety?.contraindications),
    cautions: asArray(profile.safety?.cautions),
    interactions: asArray(profile.safety?.interactions),
    pregnancyLactationNotes: profile.safety?.pregnancyLactationNotes ?? null,
    toxicityNotes: profile.safety?.toxicityNotes ?? null,
    medicinalSources: asArray(profile.medicinalSources),
    dataSources: ['SacredSeed Medicinal Layer']
  };
}
