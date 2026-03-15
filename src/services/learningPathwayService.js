import { learningPathwayDefinitions } from '../data/learningPathways.js';
import { getMateriaMedicaCollection } from './materiaMedicaIndexService.js';

function byTitle(left, right) {
  return left.title.localeCompare(right.title);
}

function toPathwaySummary(pathway) {
  return {
    slug: pathway.slug,
    title: pathway.title,
    intro: pathway.intro,
    educationalGoal: pathway.educationalGoal,
    difficulty: pathway.difficulty,
    estimatedDuration: pathway.estimatedDuration,
    herbCount: pathway.herbs.length,
    featuredHerbs: pathway.herbs.slice(0, 3)
  };
}

function resolveSequenceStep(step, herbsBySlug) {
  if (step.kind !== 'herb') {
    return step;
  }

  const herb = herbsBySlug[step.herbSlug];
  if (!herb) {
    return {
      kind: 'site',
      title: 'Herb profile coming soon',
      description: `This pathway step references ${step.herbSlug}, which is not available in the current dataset yet.`,
      href: '#/materia-medica'
    };
  }

  return {
    ...step,
    title: herb.commonName,
    botanicalName: herb.botanicalName,
    description: herb.summary,
    href: `#/herbs/${encodeURIComponent(herb.slug)}`,
    herb
  };
}

export function getLearningPathways() {
  const herbs = getMateriaMedicaCollection();
  const herbsBySlug = Object.fromEntries(herbs.map((herb) => [herb.slug, herb]));

  return learningPathwayDefinitions
    .map((definition) => {
      const sequence = (definition.sequence ?? []).map((step) => resolveSequenceStep(step, herbsBySlug));
      const herbsInPath = sequence.filter((step) => step.kind === 'herb').map((step) => step.herb);

      const educationalThemes = [...new Set(herbsInPath.flatMap((herb) => herb.herbalCategories ?? []))];

      return {
        ...definition,
        sequence,
        herbs: herbsInPath,
        educationalThemes
      };
    })
    .sort(byTitle);
}

export function getLearningPathwayBySlug(slug) {
  return getLearningPathways().find((pathway) => pathway.slug === slug) ?? null;
}

export function getLearningPathwaySummaries() {
  return getLearningPathways().map(toPathwaySummary);
}

export function getFeaturedLearningPathways(limit = 3) {
  return getLearningPathwaySummaries().slice(0, limit);
}
