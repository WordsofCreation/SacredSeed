import { herbBatchStarter } from './herbStarterBatch.js';

/**
 * Curated fallback monographs keep SacredSeed resilient if upstream APIs fail
 * or omit medicinally relevant details.
 *
 * The same unified herb object fields used in profile pages are also consumed by
 * the Materia Medica index via index-focused keys:
 * - slug
 * - summary
 * - medicinalActions
 * - bodySystems
 * - safetyCategory
 * - safetySummary
 */
export const herbFallbacks = Object.fromEntries(herbBatchStarter.map((herb) => [herb.slug, herb]));
