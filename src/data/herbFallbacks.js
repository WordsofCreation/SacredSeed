import { herbBatch2 } from './herbBatch2.js';
import { herbCategoryAssignments } from './herbCategoryAssignments.js';
import { herbBatchStarter } from './herbStarterBatch.js';
import { herbBatch3 } from './herbBatch3.js';
import { herbBatch4 } from './herbBatch4.js';
import { herbBatch5 } from './herbBatch5.js';
import { herbBatch6 } from './herbBatch6.js';
import { herbBatch7 } from './herbBatch7.js';
import { herbBatch8 } from './herbBatch8.js';
import { herbBatch9 } from './herbBatch9.js';
import { herbBatch10 } from './herbBatch10.js';
import { herbBatch11 } from './herbBatch11.js';
import { herbBatch12 } from './herbBatch12.js';
import { herbBatch13 } from './herbBatch13.js';
import { herbBatch14 } from './herbBatch14.js';
import { herbBatch15 } from './herbBatch15.js';
import { herbBatch16 } from './herbBatch16.js';
import { herbBatch17 } from './herbBatch17.js';
import { herbBatch18 } from './herbBatch18.js';
import { herbBatch19 } from './herbBatch19.js';
import { herbBatch20 } from './herbBatch20.js';
import { herbBatch21 } from './herbBatch21.js';
import { herbBatch22 } from './herbBatch22.js';
import { herbBatch23 } from './herbBatch23.js';

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
const fallbackBatches = [herbBatchStarter, herbBatch2, herbBatch3, herbBatch4, herbBatch5, herbBatch6, herbBatch7, herbBatch8, herbBatch9, herbBatch10, herbBatch11, herbBatch12, herbBatch13, herbBatch14, herbBatch15, herbBatch16, herbBatch17, herbBatch18, herbBatch19, herbBatch20, herbBatch21, herbBatch22, herbBatch23];

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
