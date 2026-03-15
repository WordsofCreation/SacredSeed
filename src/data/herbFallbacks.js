import { herbBatch2 } from './herbBatch2.js';
import { herbCategoryAssignments } from './herbCategoryAssignments.js';
import { herbBatchStarter } from './herbStarterBatch.js';
import { herbBatch3 } from './herbBatch3.js';
import { herbBatch4 } from './herbBatch4.js';
import { herbBatch5 } from './herbBatch5.js';
import { herbBatch6 } from './herbBatch6.js';

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
 * - herbalCategories
 */
const fallbackBatches = [herbBatchStarter, herbBatch2, herbBatch3, herbBatch4, herbBatch5, herbBatch6];

function withCategoryTags(herb) {
  const herbalCategories = herbCategoryAssignments[herb.slug] ?? herb.herbalCategories ?? [];

  return {
    ...herb,
    herbalCategories
  };
}

export const herbFallbacks = Object.fromEntries(
  fallbackBatches
    .flat()
    .map(withCategoryTags)
    .map((herb) => [herb.slug, herb])
);
