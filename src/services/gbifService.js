import { fetchGbifOccurrenceSummary, fetchGbifSpeciesMatch } from './apis/gbifApi.js';

function isAcceptedSpeciesMatch(match) {
  return Boolean(match?.usageKey && match?.matchType !== 'NONE');
}

export async function fetchGbifProfileByBotanicalName(botanicalName) {
  try {
    const speciesMatch = await fetchGbifSpeciesMatch(botanicalName);

    if (!isAcceptedSpeciesMatch(speciesMatch)) {
      return {
        speciesMatch: null,
        occurrenceSummary: null,
        available: false,
        error: 'No confident GBIF species match found.'
      };
    }

    const occurrenceSummary = await fetchGbifOccurrenceSummary(
      speciesMatch.speciesKey ?? speciesMatch.usageKey
    );

    return {
      speciesMatch,
      occurrenceSummary,
      available: true,
      error: null
    };
  } catch (error) {
    return {
      speciesMatch: null,
      occurrenceSummary: null,
      available: false,
      error: error.message
    };
  }
}
