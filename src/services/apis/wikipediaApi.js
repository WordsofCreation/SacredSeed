const WIKIPEDIA_REST_BASE_URL = 'https://en.wikipedia.org/api/rest_v1/page/summary';

export async function fetchWikipediaPageSummary(title) {
  const trimmedTitle = String(title ?? '').trim();
  if (!trimmedTitle) {
    return null;
  }

  const response = await fetch(`${WIKIPEDIA_REST_BASE_URL}/${encodeURIComponent(trimmedTitle)}`);

  if (!response.ok) {
    return null;
  }

  return response.json();
}
