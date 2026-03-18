import { getAstronomyObjectBySlug, getScienceTopicBySlug } from './astronomyContentService.js';
import {
  constellationRegions,
  observatoryJourneys,
  observatoryObjects,
  scienceStoryPanels
} from '../data/observatoryContent.js';

function createObjectMap() {
  return Object.fromEntries(observatoryObjects.map((item) => [item.slug, item]));
}

export function getObservatoryObjects() {
  const uiMap = createObjectMap();

  return observatoryObjects
    .map((item) => {
      const base = getAstronomyObjectBySlug(item.slug);
      return base ? { ...base, ...item } : null;
    })
    .filter(Boolean)
    .sort((left, right) => left.name.localeCompare(right.name));
}

export function getObservatoryObjectBySlug(slug) {
  const object = getAstronomyObjectBySlug(slug);
  const ui = createObjectMap()[slug];

  return object && ui ? { ...object, ...ui } : null;
}

export function getConstellationRegions() {
  return constellationRegions.map((region) => ({
    ...region,
    objectsDetailed: region.objects.map((slug) => getObservatoryObjectBySlug(slug)).filter(Boolean)
  }));
}

export function getObservatoryJourneys() {
  return observatoryJourneys.map((journey) => ({
    ...journey,
    objectsDetailed: journey.objectSlugs.map((slug) => getObservatoryObjectBySlug(slug)).filter(Boolean),
    primaryTopic: getScienceTopicBySlug(journey.primaryTopicSlug)
  }));
}

export function getTonightJourney() {
  const journeys = getObservatoryJourneys();
  const index = Math.floor(Date.now() / (1000 * 60 * 60 * 24)) % journeys.length;
  return journeys[index];
}

export function getScienceStoryPanels() {
  return [...scienceStoryPanels];
}

export function getObservatoryExperience(selectedSlug) {
  const objects = getObservatoryObjects();
  const selectedObject = getObservatoryObjectBySlug(selectedSlug) || getTonightJourney()?.objectsDetailed?.[0] || objects[0] || null;
  const regions = getConstellationRegions();
  const journeys = getObservatoryJourneys();

  return {
    objects,
    regions,
    journeys,
    tonightJourney: getTonightJourney(),
    selectedObject,
    sciencePanels: getScienceStoryPanels()
  };
}
