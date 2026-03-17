const defaultAmazonTag = 'sacredseed-20';

function encodeQuery(params = {}) {
  return Object.entries(params)
    .filter(([, value]) => value !== undefined && value !== null && value !== '')
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
    .join('&');
}

export const amazonAffiliateConfig = {
  storefrontBaseUrl: 'https://www.amazon.com',
  tag: defaultAmazonTag,
  disclosureShort:
    'This page contains affiliate links. As an Amazon Associate, we earn from qualifying purchases.',
  disclosureFullIntro:
    'SacredSeed may include affiliate links in selected buyer-intent guides. If you choose to purchase through these links, we may earn a commission at no additional cost to you.'
};

export const affiliateProductCatalog = {
  herbalStarterKit: {
    key: 'herbalStarterKit',
    title: 'Beginner Apothecary Kit',
    description:
      'A beginner-friendly starter kit for building a simple home apothecary with jars, labels, and everyday herbal prep tools.',
    image:
      'https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Dried herbs and tea tools arranged on a kitchen table',
    ctaLabel: 'View on Amazon',
    whyWeRecommend:
      'A starter kit helps new herbal learners set up an organized, repeatable workflow for tea blends and simple home remedies.',
    affiliateUrl:
      'https://www.amazon.com/s?k=beginner+apothecary+kit&crid=1LPQ6XW6MEQN3&sprefix=beginner+apoth%2Caps%2C552&linkCode=ll2&tag=sacredseed-20&linkId=8443a8d9c6557cfe8cca2d5412d07485&language=en_US&ref_=as_li_ss_tl',
    note: 'Price and availability may change. Verify product details before purchasing.'
  },
  teaInfuserBasket: {
    key: 'teaInfuserBasket',
    title: 'Best Tea Infuser',
    description:
      'Great for loose-leaf tea and herbal infusions, with enough room for botanicals to expand and steep evenly.',
    image:
      'https://images.unsplash.com/photo-1594631661960-66f6cb10f1ad?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Loose leaf tea infuser basket over a ceramic mug',
    ctaLabel: 'View on Amazon',
    whyWeRecommend:
      'A quality infuser can improve extraction and flavor for daily herbal preparations without creating extra cleanup friction.',
    affiliateUrl:
      'https://www.amazon.com/s?k=best+tea+infuser&crid=F2F3SIVYR0HU&sprefix=best+tea+in%2Caps%2C286&linkCode=ll2&tag=sacredseed-20&linkId=2c6d4f08f6ecbe94bf0c222343ffcb22&language=en_US&ref_=as_li_ss_tl',
    note: 'Look for food-grade stainless steel and easy-clean mesh.'
  },
  herbDryer: {
    key: 'herbDryer',
    title: 'Best Herb Dryer',
    description:
      'Supports consistent drying for herbs you want to store for future formulas, teas, and materia medica projects.',
    image:
      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Drying herbs arranged on racks in a home apothecary setting',
    ctaLabel: 'View on Amazon',
    whyWeRecommend:
      'A dedicated herb dryer helps preserve aroma and potency while making storage prep more efficient for beginners.',
    affiliateUrl:
      'https://www.amazon.com/s?k=Best+herb+dryer&crid=320D7OBQF4WGS&sprefix=best+herb+dryer%2Caps%2C411&linkCode=ll2&tag=sacredseed-20&linkId=401e203df07a6ebba5b1d414dfb19879&language=en_US&ref_=as_li_ss_tl',
    note: 'Compare airflow, tray spacing, and cleaning ease before choosing a model.'
  },
  herbalReferenceBook: {
    key: 'herbalReferenceBook',
    title: 'Best Herbal Books',
    description:
      'Beginner-friendly herbal books that support safe learning with approachable language and practical preparation guidance.',
    image:
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Open herbal reference book beside dried flowers',
    ctaLabel: 'View on Amazon',
    whyWeRecommend:
      'A reliable book is one of the best tools for building foundational herbal confidence before trying new plants or methods.',
    affiliateUrl:
      'https://www.amazon.com/s?k=best+herbal+books&crid=10Y9OU0MPJJSA&sprefix=best+herbal+books%2Caps%2C531&linkCode=ll2&tag=sacredseed-20&linkId=7f172003a125cb6ec29bd71ffaf968bc&language=en_US&ref_=as_li_ss_tl',
    note: 'Prioritize editions with clear contraindications and sourcing transparency.'
  }
};

export function buildAmazonAffiliateUrl(amazonPath, extraQuery = {}) {
  const path = amazonPath?.startsWith('/') ? amazonPath : `/${amazonPath ?? ''}`;
  const query = encodeQuery({ tag: amazonAffiliateConfig.tag, ...extraQuery });
  return `${amazonAffiliateConfig.storefrontBaseUrl}${path}${query ? `?${query}` : ''}`;
}

export function getAffiliateProduct(key) {
  const product = affiliateProductCatalog[key];
  if (!product) {
    return null;
  }

  return {
    ...product,
    affiliateUrl: product.affiliateUrl || buildAmazonAffiliateUrl(product.amazonPath)
  };
}
