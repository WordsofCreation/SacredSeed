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
    'Disclosure: As an Amazon Associate, SacredSeed may earn from qualifying purchases. We only recommend products that support practical, safety-focused herbal learning.',
  disclosureFullIntro:
    'SacredSeed may include affiliate links in selected buyer-intent guides. If you choose to purchase through these links, we may earn a commission at no additional cost to you.'
};

export const affiliateProductCatalog = {
  herbalStarterKit: {
    key: 'herbalStarterKit',
    title: 'Beginner Herbalist Tool Set',
    description: 'A practical starter bundle with measuring tools, labels, and steeping essentials for home materia medica study.',
    image:
      'https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Dried herbs and tea tools arranged on a kitchen table',
    ctaLabel: 'View on Amazon',
    whyWeRecommend:
      'Useful for learners who want one organized setup for teas, jars, and note-friendly preparation routines.',
    amazonPath: '/dp/B0C2V6LQ2R',
    note: 'Price and availability may change. Verify product details before purchasing.'
  },
  teaInfuserBasket: {
    key: 'teaInfuserBasket',
    title: 'Extra-Fine Mesh Tea Infuser Basket',
    description: 'A roomy infuser basket that allows loose herbs to expand properly for balanced extraction.',
    image:
      'https://images.unsplash.com/photo-1594631661960-66f6cb10f1ad?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Loose leaf tea infuser basket over a ceramic mug',
    ctaLabel: 'Check current options',
    whyWeRecommend:
      'The wider basket format often performs better than tea balls for fluffy nervines and aromatic leaf blends.',
    amazonPath: '/dp/B07Y95MWRQ',
    note: 'Look for food-grade stainless steel and easy-clean mesh.'
  },
  amberGlassJarSet: {
    key: 'amberGlassJarSet',
    title: 'Amber Glass Herb Storage Jars',
    description: 'Light-protective jars for storing dried herbs and preserving volatile aromatic compounds.',
    image:
      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Amber jars lined on a shelf with dried botanicals',
    ctaLabel: 'Compare jar sets',
    whyWeRecommend:
      'Amber glass supports long-term quality for dried herbs when paired with labels and cool, dry storage.',
    amazonPath: '/dp/B08VJ7T4VB',
    note: 'Choose airtight lids and sizes that fit your common bulk herb quantities.'
  },
  herbalReferenceBook: {
    key: 'herbalReferenceBook',
    title: 'Comprehensive Herbal Reference Book',
    description: 'A well-organized herbal text that supports plant monograph reading and preparation literacy.',
    image:
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Open herbal reference book beside dried flowers',
    ctaLabel: 'Browse book editions',
    whyWeRecommend:
      'Strong references improve judgment by combining traditional context, safety notes, and preparation detail.',
    amazonPath: '/dp/1603425789',
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
    affiliateUrl: buildAmazonAffiliateUrl(product.amazonPath)
  };
}
