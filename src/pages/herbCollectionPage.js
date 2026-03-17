import { renderHerbCollectionDetail } from '../components/herbCollections.js';
import { getHerbCollectionBySlug } from '../services/herbCollectionService.js';
import { getCollectionRelatedContent } from '../services/relatedContentService.js';
import { fetchHerbImageByBotanicalName } from '../services/herbImageService.js';

const collectionImageCache = new Map();

async function hydrateCollectionImages(rootElement) {
  const imageNodes = Array.from(rootElement.querySelectorAll('[data-collection-botanical]'));

  await Promise.all(
    imageNodes.map(async (imageNode) => {
      const botanicalName = imageNode.dataset.collectionBotanical;
      if (!botanicalName) {
        return;
      }

      const cachedImage = collectionImageCache.get(botanicalName);
      if (typeof cachedImage === 'string' && cachedImage) {
        imageNode.src = cachedImage;
        return;
      }

      try {
        const image = await fetchHerbImageByBotanicalName(botanicalName);

        if (!image) {
          return;
        }

        collectionImageCache.set(botanicalName, image);
        imageNode.src = image;
      } catch {
        // keep fallback placeholder for this render
      }
    })
  );
}

export function renderHerbCollectionPage(rootElement, slug) {
  const collection = getHerbCollectionBySlug(slug);

  if (!collection) {
    rootElement.innerHTML = `
      <section class="card error">
        <h2>Collection not found</h2>
        <p>The requested collection could not be located in the current SacredSeed guide set.</p>
        <a class="back-link" href="#/collections">Back to collections</a>
      </section>
    `;
    return null;
  }

  const related = getCollectionRelatedContent(collection);
  rootElement.innerHTML = renderHerbCollectionDetail(collection, related);
  hydrateCollectionImages(rootElement);
  return collection;
}
