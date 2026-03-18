import { buildBaseSchema, buildSiteSchema, getSiteSeoConfig } from './seo.js';
import { getCanonicalPageUrl } from '../config/siteConfig.js';
import { withAssetVersion } from './assetVersion.js';

const site = getSiteSeoConfig();

export function getMateriaMedicaSeo() {
  const title = 'SacredSeed Materia Medica Index | Herbal Profiles and Search';
  const description =
    'Browse SacredSeed\'s searchable materia medica index with herbal profiles, medicinal actions, body-system filters, and safety context.';

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: '#/materia-medica',
    schemaEntries: [
      buildSiteSchema(),
      buildBaseSchema({
        pageType: 'CollectionPage',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl('/materia-medica')
      })
    ]
  };
}

export function getHerbProfileSeo(herb) {
  const title = `${herb.commonName} (${herb.botanicalName}) | SacredSeed Herb Profile`;
  const description =
    herb.summary ||
    herb.description ||
    `${herb.commonName} materia medica profile with taxonomy, preparations, chemistry, and safety context.`;

  return {
    title,
    description,
    pageType: 'article',
    canonicalPath: `#/herbs/${encodeURIComponent(herb.slug)}`,
    image: withAssetVersion(herb.image || site.defaultImage),
    schemaEntries: [
      buildBaseSchema({
        pageType: 'Article',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl(`/herbs/${encodeURIComponent(herb.slug)}`)
      })
    ]
  };
}

export function getPreparationLibrarySeo() {
  const title = 'SacredSeed Preparations | Herbal Guides, Formulas, and Remedies';
  const description =
    'Explore SacredSeed preparation guides, tea formulas, and remedy collections for practical herbal learning and responsible usage context.';

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: '#/preparations',
    schemaEntries: [
      buildBaseSchema({
        pageType: 'CollectionPage',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl('/preparations')
      })
    ]
  };
}

export function getCollectionsSeo() {
  const title = 'SacredSeed Herb Collections | Guided Botanical Learning Paths';
  const description =
    'Discover SacredSeed featured herb collections organized by themes like calming, digestive, nutritive, aromatic, immune support, and Pacific Northwest tea study.';

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: '#/collections',
    schemaEntries: [
      buildBaseSchema({
        pageType: 'CollectionPage',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl('/collections')
      })
    ]
  };
}

export function getCollectionDetailSeo(collection) {
  const title = `${collection.title} | SacredSeed Herb Collection`;
  const description = collection.shortIntro || collection.educationalSummary;

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: `#/collections/${encodeURIComponent(collection.slug)}`,
    schemaEntries: [
      buildBaseSchema({
        pageType: 'CollectionPage',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl(`/collections/${encodeURIComponent(collection.slug)}`)
      })
    ]
  };
}

export function getLearningPathwaysSeo() {
  const title = 'SacredSeed Beginner Learning Pathways | Guided Herbal Study';
  const description =
    'Start with SacredSeed beginner learning pathways featuring curated herb sequences, preparation links, and approachable materia medica education.';

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: '#/pathways',
    schemaEntries: [
      buildBaseSchema({
        pageType: 'CollectionPage',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl('/pathways')
      })
    ]
  };
}

export function getLearningPathwayDetailSeo(pathway) {
  const title = `${pathway.title} | SacredSeed Beginner Herbal Pathway`;
  const description = pathway.intro || pathway.educationalGoal;

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: `#/pathways/${encodeURIComponent(pathway.slug)}`,
    schemaEntries: [
      buildBaseSchema({
        pageType: 'CollectionPage',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl(`/pathways/${encodeURIComponent(pathway.slug)}`)
      })
    ]
  };
}

export function getSeasonalCollectionsSeo() {
  const title = 'SacredSeed Seasonal Herbal Collections | Spring to Winter Learning';
  const description =
    'Browse SacredSeed seasonal herbal collections for spring, summer, autumn, and winter with curated herbs, preparations, and educational guidance.';

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: '#/seasons',
    schemaEntries: [
      buildBaseSchema({
        pageType: 'CollectionPage',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl('/seasons')
      })
    ]
  };
}

export function getSeasonalCollectionDetailSeo(collection) {
  const title = `${collection.title} | SacredSeed Seasonal Collection`;
  const description = collection.shortIntro || collection.educationalOverview;

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: `#/seasons/${encodeURIComponent(collection.slug)}`,
    schemaEntries: [
      buildBaseSchema({
        pageType: 'CollectionPage',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl(`/seasons/${encodeURIComponent(collection.slug)}`)
      })
    ]
  };
}

export function getEditorialArticlesSeo() {
  const title = 'SacredSeed Editorial Articles | Foundational Herbal Learning';
  const description =
    'Read SacredSeed editorial articles on materia medica literacy, preparation methods, and beginner-friendly home herbal practice.';

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: '#/articles',
    schemaEntries: [
      buildBaseSchema({
        pageType: 'CollectionPage',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl('/articles')
      })
    ]
  };
}


function buildEditorialReviewSchema(article, canonicalUrl) {
  const review = article.reviewSchema;

  if (!review?.productName) {
    return [];
  }

  const productUrl = review.productUrl || canonicalUrl;
  const product = {
    '@type': 'Product',
    name: review.productName,
    description: review.description || article.summary || article.intro,
    url: productUrl,
    brand: review.brand
      ? {
        '@type': 'Brand',
        name: review.brand
      }
      : undefined,
    sku: review.sku,
    category: review.category,
    offers: review.price || review.availability
      ? {
        '@type': 'Offer',
        url: productUrl,
        priceCurrency: review.priceCurrency || 'USD',
        price: review.price,
        availability: review.availability,
        itemCondition: review.itemCondition || 'https://schema.org/NewCondition'
      }
      : undefined
  };

  Object.keys(product).forEach((key) => product[key] === undefined && delete product[key]);
  if (product.offers) {
    Object.keys(product.offers).forEach((key) => product.offers[key] === undefined && delete product.offers[key]);
  }

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Review',
      headline: article.title,
      name: article.title,
      description: article.summary || article.intro,
      url: canonicalUrl,
      author: {
        '@type': 'Organization',
        name: 'SacredSeed'
      },
      publisher: {
        '@type': 'Organization',
        name: 'SacredSeed'
      },
      itemReviewed: product,
      reviewBody: article.summary || article.intro
    },
    {
      '@context': 'https://schema.org',
      ...product
    }
  ];
}

export function getEditorialArticleSeo(article) {
  const title = `${article.title} | SacredSeed Editorial Guide`;
  const description = article.summary || article.intro;
  const canonicalUrl = getCanonicalPageUrl(`/articles/${encodeURIComponent(article.slug)}`);
  const schemaEntries = [
    buildBaseSchema({
      pageType: 'Article',
      title,
      description,
      canonicalUrl
    }),
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description,
      url: canonicalUrl,
      author: {
        '@type': 'Organization',
        name: 'SacredSeed'
      },
      publisher: {
        '@type': 'Organization',
        name: 'SacredSeed'
      },
      isPartOf: {
        '@type': 'WebSite',
        name: site.siteName,
        url: getCanonicalPageUrl('/')
      }
    }
  ];

  if (article.review?.itemReviewed) {
    const product = article.review.itemReviewed;
    const productSchema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      description: product.description || description,
      brand: product.brand
        ? {
          '@type': 'Brand',
          name: product.brand
        }
        : undefined,
      category: product.category,
      sku: product.sku,
      size: product.size,
      url: product.url,
      aggregateRating: product.aggregateRating
        ? {
          '@type': 'AggregateRating',
          ratingValue: product.aggregateRating.ratingValue,
          ratingCount: product.aggregateRating.ratingCount,
          bestRating: product.aggregateRating.bestRating
        }
        : undefined,
      offers: product.offers
        ? {
          '@type': 'Offer',
          url: product.url,
          availability: product.offers.availability,
          seller: product.offers.seller
            ? {
              '@type': 'Organization',
              name: product.offers.seller
            }
            : undefined
        }
        : undefined,
      additionalProperty: product.ingredients?.length
        ? [
          {
            '@type': 'PropertyValue',
            name: 'Ingredients',
            value: product.ingredients.join(', ')
          }
        ]
        : undefined
    };

    schemaEntries.push(productSchema);
    schemaEntries.push({
      '@context': 'https://schema.org',
      '@type': 'Review',
      name: article.title,
      reviewBody: article.summary || article.intro,
      reviewRating: article.review.reviewRating
        ? {
          '@type': 'Rating',
          ratingValue: article.review.reviewRating,
          bestRating: article.review.bestRating ?? 5
        }
        : undefined,
      itemReviewed: {
        '@type': 'Product',
        name: product.name,
        sku: product.sku,
        url: product.url,
        brand: product.brand
          ? {
            '@type': 'Brand',
            name: product.brand
          }
          : undefined
      },
      author: {
        '@type': 'Organization',
        name: 'SacredSeed'
      },
      publisher: {
        '@type': 'Organization',
        name: 'SacredSeed'
      },
      isPartOf: {
        '@type': 'Article',
        headline: title,
        url: canonicalUrl
      }
    });
  }

  return {
    title,
    description,
    pageType: 'article',
    canonicalPath: `#/articles/${encodeURIComponent(article.slug)}`,
    schemaEntries: [
      buildBaseSchema({
        pageType: 'Article',
        title,
        description,
        canonicalUrl
      }),
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        url: canonicalUrl,
        author: {
          '@type': 'Organization',
          name: 'SacredSeed'
        },
        publisher: {
          '@type': 'Organization',
          name: 'SacredSeed'
        },
        isPartOf: {
          '@type': 'WebSite',
          name: site.siteName,
          url: getCanonicalPageUrl('/')
        }
      },
      ...buildEditorialReviewSchema(article, canonicalUrl)
    ]
  };
}



export function getAffiliateDisclosureSeo() {
  const title = 'Affiliate Disclosure | SacredSeed';
  const description =
    "Read SacredSeed's full Amazon Associates affiliate disclosure, including how recommendations are selected and labeled.";

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: '#/affiliate-disclosure',
    schemaEntries: [
      buildBaseSchema({
        pageType: 'WebPage',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl('/affiliate-disclosure')
      })
    ]
  };
}


export function getBuyerIntentTemplatesSeo() {
  const title = 'Recommended Herbal Tools & Supplies | SacredSeed';
  const description =
    'Educational herbal tools and supplies hub with grouped Amazon recommendations for tea brewing, storage, apothecary practice, and study.';

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: '#/buyer-guides',
    schemaEntries: [
      buildBaseSchema({
        pageType: 'CollectionPage',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl('/buyer-guides')
      })
    ]
  };
}



export function getBestBeginnerApothecaryKitsSeo() {
  const title = 'Best Beginner Apothecary Kits for Starting a Home Herbal Practice | SacredSeed';
  const description =
    'Explore beginner apothecary kit recommendations, home apothecary setup tips, and beginner herbalism supplies for a simple, useful starter practice.';

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: '#/buyer-guides/best-beginner-apothecary-kits',
    schemaEntries: [
      buildBaseSchema({
        pageType: 'Article',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl('/buyer-guides/best-beginner-apothecary-kits')
      })
    ]
  };
}

export function getBestTeaInfusersSeo() {
  const title = 'Best Tea Infusers for Herbal Tea and Loose-Leaf Blends | SacredSeed';
  const description =
    'Discover the best tea infuser options for loose-leaf tea and herbal blends, plus beginner tips for cleaner, better home brewing.';

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: '#/buyer-guides/best-tea-infusers',
    schemaEntries: [
      buildBaseSchema({
        pageType: 'Article',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl('/buyer-guides/best-tea-infusers')
      })
    ]
  };
}


export function getBestTeaStrainersSeo() {
  const title = 'Best Tea Strainers for Loose Herbal Tea | SacredSeed';
  const description =
    'Explore practical fine-mesh tea strainers for loose herbal tea with beginner-friendly guidance for cleaner brews and easier cleanup.';

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: '#/buyer-guides/best-tea-strainers-for-loose-herbal-tea',
    schemaEntries: [
      buildBaseSchema({
        pageType: 'Article',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl('/buyer-guides/best-tea-strainers-for-loose-herbal-tea')
      })
    ]
  };
}

export function getBestHerbDryersSeo() {
  const title = 'Best Herb Dryers for Drying and Storing Medicinal Herbs | SacredSeed';
  const description =
    'Find the best herb dryer and herb drying rack options with beginner guidance on airflow, mold prevention, and drying herbs for tea and storage.';

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: '#/buyer-guides/best-herb-dryers',
    schemaEntries: [
      buildBaseSchema({
        pageType: 'Article',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl('/buyer-guides/best-herb-dryers')
      })
    ]
  };
}

export function getBestHerbStorageJarsSeo() {
  const title = 'Best Jars and Storage for Dried Herbs | SacredSeed';
  const description =
    'Explore the best jars for dried herbs, herb storage containers, and apothecary storage ideas with beginner-friendly guidance on freshness and organization.';

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: '#/buyer-guides/best-jars-and-storage-for-dried-herbs',
    schemaEntries: [
      buildBaseSchema({
        pageType: 'Article',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl('/buyer-guides/best-jars-and-storage-for-dried-herbs')
      })
    ]
  };
}
export function getBestToolsBeginnerHomeApothecarySeo() {
  const title = 'Best Tools for a Beginner Home Apothecary | SacredSeed';
  const description =
    'Discover beginner apothecary tools for measuring, grinding, transferring, and tracking herbal preparations in a practical home setup.';

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: '#/buyer-guides/best-tools-for-a-beginner-home-apothecary',
    schemaEntries: [
      buildBaseSchema({
        pageType: 'Article',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl('/buyer-guides/best-tools-for-a-beginner-home-apothecary')
      })
    ]
  };
}

export function getHowToBuildSimpleHomeApothecaryShelfSeo() {
  const title = 'How to Build a Simple Home Apothecary Shelf | SacredSeed';
  const description =
    'Learn how to build a home apothecary shelf with beginner-friendly herbal storage, apothecary organization ideas, and simple labeling practices.';

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: '#/buyer-guides/how-to-build-a-simple-home-apothecary-shelf',
    schemaEntries: [
      buildBaseSchema({
        pageType: 'Article',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl('/buyer-guides/how-to-build-a-simple-home-apothecary-shelf')
      })
    ]
  };
}

export function getBestDropperBottlesSeo() {
  const title = 'Best Dropper Bottles for Herbal Preparations | SacredSeed';
  const description =
    'Find the best dropper bottles for herbal preparations with beginner guidance on amber glass, leak resistance, labeling, and safe tincture storage.';

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: '#/buyer-guides/best-dropper-bottles-for-herbal-preparations',
    schemaEntries: [
      buildBaseSchema({
        pageType: 'Article',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl('/buyer-guides/best-dropper-bottles-for-herbal-preparations')
      })
    ]
  };
}

export function getBestHerbalBooksSeo() {
  const title = 'Best Herbal Books for Beginners | SacredSeed';
  const description =
    'Explore the best herbal books for beginners with guidance on safety, materia medica learning, and practical study strategies for new herbalists.';

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: '#/buyer-guides/best-herbal-books',
    schemaEntries: [
      buildBaseSchema({
        pageType: 'Article',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl('/buyer-guides/best-herbal-books')
      })
    ]
  };
}

export function getBestPlantJournalsSeo() {
  const title = 'Best Plant Journals and Notebooks for Herbal Study | SacredSeed';
  const description =
    'Find the best herbal journal and herbalism notebook options, plus beginner guidance for building a strong materia medica notebook practice.';

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: '#/buyer-guides/best-plant-journals-and-notebooks-for-herbal-study',
    schemaEntries: [
      buildBaseSchema({
        pageType: 'Article',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl('/buyer-guides/best-plant-journals-and-notebooks-for-herbal-study')
      })
    ]
  };
}

export function getSearchSeo() {
  const title = 'SacredSeed Search | Find Herbs, Preparations, and Editorial Guides';
  const description =
    'Use SacredSeed search to quickly find herb profiles, preparation guides, and editorial articles across the botanical knowledge library.';

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: '#/search',
    schemaEntries: [
      buildBaseSchema({
        pageType: 'SearchResultsPage',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl('/search')
      })
    ]
  };
}

export function getAboutSeo() {
  const title = 'About SacredSeed | Botanical Education and Data Transparency';
  const description =
    'Learn SacredSeed\'s mission, methodology, and commitment to scholarly herbal education with transparent attribution and safety-aware communication.';

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: '#/about',
    schemaEntries: [
      buildBaseSchema({
        pageType: 'AboutPage',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl('/about')
      })
    ]
  };
}

export function getPrivacySeo() {
  const title = 'Privacy Policy | SacredSeed';
  const description =
    'Review SacredSeed privacy practices, including analytics, cookie usage, data minimization principles, and contact guidance for privacy concerns.';

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: '#/privacy-policy',
    noindex: true,
    schemaEntries: [
      buildBaseSchema({
        pageType: 'WebPage',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl('/privacy-policy')
      })
    ]
  };
}

export function getTermsSeo() {
  const title = 'Terms of Use | SacredSeed';
  const description =
    'Read SacredSeed terms of use for educational scope, content limitations, acceptable use, and updates to platform policies.';

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: '#/terms-of-use',
    noindex: true,
    schemaEntries: [
      buildBaseSchema({
        pageType: 'WebPage',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl('/terms-of-use')
      })
    ]
  };
}

export function getNotFoundSeo() {
  const title = 'Page Not Found | SacredSeed';
  const description = 'The requested SacredSeed page could not be found.';

  return {
    title,
    description,
    pageType: 'website',
    noindex: true,
    schemaEntries: [
      buildBaseSchema({
        pageType: 'WebPage',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl(window.location.pathname || '/')
      })
    ]
  };
}

export function getHomeSeo() {
  const title = 'Heavens | Science Discovery and Research Experience';
  const description =
    'Heavens is a premium static astronomy platform with dedicated object pages, discovery modules, guided learning pathways, and connected science topics.';

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: '#/home',
    schemaEntries: [
      buildSiteSchema(),
      buildBaseSchema({
        pageType: 'WebSite',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl('/')
      })
    ]
  };
}

export function getObjectsSeo() {
  const title = 'Astronomy Object Pages | Heavens';
  const description = 'Browse dedicated astronomy object pages built from local structured data and connected to learning and discovery content.';

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: '#/objects',
    schemaEntries: [
      buildBaseSchema({
        pageType: 'CollectionPage',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl('/objects')
      })
    ]
  };
}

export function getObjectSeo(object) {
  const title = `${object.name} | Heavens Object Page`;
  const description = object.intro || object.description;

  return {
    title,
    description,
    pageType: 'article',
    canonicalPath: `#/objects/${encodeURIComponent(object.slug)}`,
    schemaEntries: [
      buildBaseSchema({
        pageType: 'Article',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl(`/objects/${encodeURIComponent(object.slug)}`)
      })
    ]
  };
}

export function getObservatorySeo(object) {
  const title = object ? `${object.name} | Heavens Observatory Mode` : 'Observatory Mode | Heavens';
  const description = object
    ? `Explore ${object.name} in Heavens Observatory Mode with a stylized sky interface, guided discovery, and science storytelling.`
    : 'Enter Heavens Observatory Mode for immersive sky exploration, guided journeys, constellation regions, and approachable science storytelling.';

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: object ? `#/observatory/${encodeURIComponent(object.slug)}` : '#/observatory',
    schemaEntries: [
      buildSiteSchema(),
      buildBaseSchema({
        pageType: 'CollectionPage',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl(object ? `/observatory/${encodeURIComponent(object.slug)}` : '/observatory')
      })
    ]
  };
}

export function getDiscoverSeo() {
  const title = 'Discover | Heavens Science Exploration Hub';
  const description = 'Explore featured stars, spectral spotlights, stellar lifecycle stories, cosmic questions, and research-inspired astronomy modules.';

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: '#/discover',
    schemaEntries: [
      buildBaseSchema({
        pageType: 'CollectionPage',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl('/discover')
      })
    ]
  };
}

export function getLearnSeo() {
  const title = 'Learn Astronomy | Heavens Guided Pathways';
  const description = 'Progress through astronomy with self-guided learning pathways on starlight, stellar classification, stellar lifecycles, distance, and sky navigation.';

  return {
    title,
    description,
    pageType: 'website',
    canonicalPath: '#/learn',
    schemaEntries: [
      buildBaseSchema({
        pageType: 'CollectionPage',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl('/learn')
      })
    ]
  };
}

export function getLearnPathSeo(path) {
  const title = `${path.title} | Heavens Learning Pathway`;
  const description = path.intro;

  return {
    title,
    description,
    pageType: 'article',
    canonicalPath: `#/learn/${encodeURIComponent(path.slug)}`,
    schemaEntries: [
      buildBaseSchema({
        pageType: 'Article',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl(`/learn/${encodeURIComponent(path.slug)}`)
      })
    ]
  };
}

export function getScienceTopicSeo(topic) {
  const title = `${topic.title} | Heavens Science Topic`;
  const description = topic.summary || topic.intro;

  return {
    title,
    description,
    pageType: 'article',
    canonicalPath: `#/topics/${encodeURIComponent(topic.slug)}`,
    schemaEntries: [
      buildBaseSchema({
        pageType: 'Article',
        title,
        description,
        canonicalUrl: getCanonicalPageUrl(`/topics/${encodeURIComponent(topic.slug)}`)
      })
    ]
  };
}
