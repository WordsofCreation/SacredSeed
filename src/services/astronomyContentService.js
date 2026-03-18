import { astronomyObjects } from '../data/astronomyObjects.js';
import { astronomyLearningPaths } from '../data/astronomyLearningPaths.js';
import { discoveryModules, todayInTheHeavens } from '../data/discoveryContent.js';
import { scienceTopics } from '../data/scienceTopics.js';

function sortByName(left, right) {
  return (left.name || left.title).localeCompare(right.name || right.title);
}

function getObjectMap() {
  return Object.fromEntries(astronomyObjects.map((item) => [item.slug, item]));
}

function getTopicMap() {
  return Object.fromEntries(scienceTopics.map((item) => [item.slug, item]));
}

function normalizeLink(slug, objectMap, topicMap) {
  if (objectMap[slug]) {
    return {
      kind: 'object',
      label: objectMap[slug].name,
      href: `#/objects/${encodeURIComponent(slug)}`
    };
  }

  if (topicMap[slug]) {
    return {
      kind: 'topic',
      label: topicMap[slug].title,
      href: `#/topics/${encodeURIComponent(slug)}`
    };
  }

  return null;
}

export function getAstronomyObjects() {
  return [...astronomyObjects].sort(sortByName);
}

export function getAstronomyObjectBySlug(slug) {
  const objectMap = getObjectMap();
  const item = objectMap[slug];
  if (!item) {
    return null;
  }

  const topicMap = getTopicMap();

  return {
    ...item,
    relatedObjectsDetailed: (item.relatedObjects || []).map((relatedSlug) => objectMap[relatedSlug]).filter(Boolean),
    relatedTopicsDetailed: (item.relatedTopics || []).map((topicSlug) => topicMap[topicSlug]).filter(Boolean),
    relatedReadingDetailed: (item.relatedReadingTopics || []).map((topicSlug) => topicMap[topicSlug]).filter(Boolean)
  };
}

export function getScienceTopics() {
  const objectMap = getObjectMap();

  return scienceTopics
    .map((topic) => ({
      ...topic,
      objects: (topic.objectSlugs || []).map((slug) => objectMap[slug]).filter(Boolean)
    }))
    .sort((left, right) => left.title.localeCompare(right.title));
}

export function getScienceTopicBySlug(slug) {
  return getScienceTopics().find((item) => item.slug === slug) ?? null;
}

export function getDiscoverModules() {
  return Object.values(discoveryModules);
}

export function getTodayInTheHeavens() {
  return todayInTheHeavens.map((item, index) => ({
    ...item,
    dayIndex: index
  }));
}

export function getRotatingFeaturedMoment() {
  const items = getTodayInTheHeavens();
  const day = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
  return items[day % items.length];
}

export function getAstronomyLearningPaths() {
  const objectMap = getObjectMap();
  const topicMap = getTopicMap();

  return astronomyLearningPaths.map((path) => ({
    ...path,
    relatedObjectsDetailed: (path.relatedObjects || []).map((slug) => objectMap[slug]).filter(Boolean),
    relatedTopicsDetailed: (path.relatedTopics || []).map((slug) => topicMap[slug]).filter(Boolean),
    sections: (path.sections || []).map((section) => ({
      ...section,
      resolvedLinks: (section.links || []).map((slug) => normalizeLink(slug, objectMap, topicMap)).filter(Boolean)
    }))
  }));
}

export function getAstronomyLearningPathBySlug(slug) {
  return getAstronomyLearningPaths().find((item) => item.slug === slug) ?? null;
}

export function getHomepageFeaturedObject() {
  return getAstronomyObjectBySlug('sirius');
}

export function getHomepageFeaturedTopics(limit = 3) {
  return getScienceTopics().slice(0, limit);
}

export function getHomepageFeaturedPaths(limit = 3) {
  return getAstronomyLearningPaths().slice(0, limit);
}
