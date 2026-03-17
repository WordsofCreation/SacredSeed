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
  teaStrainerFineMesh: {
    key: 'teaStrainerFineMesh',
    title: 'Fine Mesh Tea Strainers',
    description:
      'Fine mesh strainers make daily loose-herb brewing practical while keeping your cup cleaner and easier to drink.',
    image:
      'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Fine mesh tea strainer resting above a cup of herbal tea',
    ctaLabel: 'View on Amazon',
    whyWeRecommend:
      'Useful for quick infusions and daily routines when you want reliable straining without specialty gear.',
    affiliateUrl:
      'https://www.amazon.com/s?k=tea+strainers+fine+mesh&crid=3VWMUV8MZIMBN&sprefix=tea+strainers%2Caps%2C708&linkCode=ll2&tag=sacredseed-20&linkId=7243c95ae8d19f734e3a7ed08ea605f7&language=en_US&ref_=as_li_ss_tl',
    note: 'Choose food-safe mesh and a shape that fits your most-used mugs or teapots.'
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
  glassHerbJars: {
    key: 'glassHerbJars',
    title: 'Glass Jars for Dried Herbs',
    description:
      'Clear glass jars support clean storage for dried herbs and tea blends while making apothecary labeling and rotation easier.',
    image:
      'https://images.unsplash.com/photo-1452251889946-8ff5ea7b27ab?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Labeled glass jars filled with dried herbs on a shelf',
    ctaLabel: 'View on Amazon',
    whyWeRecommend:
      'Jars help keep dried herbs organized and accessible for safe daily use and recipe planning.',
    affiliateUrl:
      'https://www.amazon.com/s?k=glass+jars+for+dried+herbs&crid=3R06XEDOQ5DPY&sprefix=glass+jars+for+dried+herbs%2Caps%2C867&linkCode=ll2&tag=sacredseed-20&linkId=b249f54d4e2b5274795adb821fc5b8b0&language=en_US&ref_=as_li_ss_tl',
    note: 'Use airtight lids and label each jar with plant name and harvest date.'
  },
  amberDropperBottles: {
    key: 'amberDropperBottles',
    title: 'Amber Dropper Bottles',
    description:
      'Amber bottles help protect tinctures, infused oils, and extracts from light exposure while supporting precise drop-by-drop use.',
    image:
      'https://images.unsplash.com/photo-1615486363974-9b15c2d16f9f?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Small amber dropper bottles arranged on a wooden apothecary table',
    ctaLabel: 'View on Amazon',
    whyWeRecommend:
      'A practical option for light-sensitive herbal preparations that need clean dispensing and storage.',
    affiliateUrl:
      'https://www.amazon.com/s?k=amber+dropper+bottles&crid=3T90W3IOQ3WWO&sprefix=amber+dropper%2Caps%2C2011&linkCode=ll2&tag=sacredseed-20&linkId=18ebddcc74645c61b5245d6a79a27bf8&language=en_US&ref_=as_li_ss_tl',
    note: 'Pair with waterproof labels and batch notes for safer long-term tracking.'
  },
  digitalKitchenScale: {
    key: 'digitalKitchenScale',
    title: 'Digital Kitchen Scale',
    description:
      'A small digital scale improves consistency when measuring dried herbs for teas, formulas, and home apothecary recipes.',
    image:
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Digital kitchen scale with dried herbs in a bowl',
    ctaLabel: 'View on Amazon',
    whyWeRecommend:
      'Weight-based measuring supports accuracy and repeatability as your herbal practice becomes more intentional.',
    affiliateUrl:
      'https://www.amazon.com/s?k=digital+kitchen+scale&crid=ADHIHGFSHX9K&sprefix=digitial+%2Caps%2C896&linkCode=ll2&tag=sacredseed-20&linkId=366a61ebecb4ccde0d60be37201adfaf&language=en_US&ref_=as_li_ss_tl',
    note: 'Look for gram-level precision and a tare function for easy container resets.'
  },
  measuringSpoonsAndFunnels: {
    key: 'measuringSpoonsAndFunnels',
    title: 'Measuring Spoons and Small Funnels',
    description:
      'Simple measuring spoons and mini funnels help with portioning dried herbs and transferring powders or liquids without waste.',
    image:
      'https://images.unsplash.com/photo-1506368083636-6defb67639a7?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Measuring spoons and small funnels arranged for kitchen prep',
    ctaLabel: 'View on Amazon',
    whyWeRecommend:
      'These low-cost basics reduce spills and make everyday tea and tincture prep cleaner and faster.',
    affiliateUrl:
      'https://www.amazon.com/s?k=measuring+spools+and+small+funnels&crid=F6L9VY5SDZ9L&sprefix=measuring+spools+and+small+funnels%2Caps%2C1009&linkCode=ll2&tag=sacredseed-20&linkId=2cba007e1d4430cff92e78d34609df11&language=en_US&ref_=as_li_ss_tl',
    note: 'Stainless steel options are usually easier to sanitize and keep odor-neutral.'
  },
  mortarAndPestle: {
    key: 'mortarAndPestle',
    title: 'Mortar and Pestles',
    description:
      'A mortar and pestle supports traditional hands-on preparation for grinding small amounts of dried herbs and seeds.',
    image:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Stone mortar and pestle with herbs and spices nearby',
    ctaLabel: 'View on Amazon',
    whyWeRecommend:
      'Great for small-batch blending when you want tactile control over texture and aroma release.',
    affiliateUrl:
      'https://www.amazon.com/s?k=mortar+pestles&crid=1J416EWQRFX40&sprefix=mortar+pestle%2Caps%2C998&linkCode=ll2&tag=sacredseed-20&linkId=7d51f07363cbc0469558cbb6d2314f3b&language=en_US&ref_=as_li_ss_tl',
    note: 'Choose a stable material and size suited to the small batches you typically prepare.'
  },
  herbStorageContainers: {
    key: 'herbStorageContainers',
    title: 'Herb Storage Containers',
    description:
      'Dedicated herb containers help protect freshness, support better organization, and keep your dried stock easy to identify.',
    image:
      'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Herb storage containers labeled and stacked in a pantry',
    ctaLabel: 'View on Amazon',
    whyWeRecommend:
      'Consistent containers create a cleaner workflow and reduce confusion in home apothecary storage.',
    affiliateUrl:
      'https://www.amazon.com/s?k=herb+storage+containers&crid=2OTAOPT9P7L8Q&sprefix=Herb+storage%2Caps%2C786&linkCode=ll2&tag=sacredseed-20&linkId=3593a0677bf07d5f4fbd9d5146a17238&language=en_US&ref_=as_li_ss_tl',
    note: 'Prioritize airtight seals and light control when storing delicate aromatic plants.'
  },
  herbalJournal: {
    key: 'herbalJournal',
    title: 'Herbal Medicine Journals or Notebooks',
    description:
      'A dedicated notebook helps track observations, materia medica notes, and preparation outcomes as your learning deepens.',
    image:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Open notebook and pen beside dried herbs for study notes',
    ctaLabel: 'View on Amazon',
    whyWeRecommend:
      'Written notes improve pattern recognition and support safer long-term herbal learning habits.',
    affiliateUrl:
      'https://www.amazon.com/s?k=herbal+medicine+journals+or+notebooks&crid=7D58G6MBW7OD&sprefix=herbal+medicine+journals+or+notebooks%2Caps%2C1355&linkCode=ll2&tag=sacredseed-20&linkId=6d85324244621c41dc9529eac85e52f2&language=en_US&ref_=as_li_ss_tl',
    note: 'Include date, herb source, preparation method, and response notes for each entry.'
  },
  apothecaryShelves: {
    key: 'apothecaryShelves',
    title: 'Apothecary Shelves and Organizers',
    description:
      'Shelves and organizers make it easier to maintain a clean, functional, and visually calm herbal workspace.',
    image:
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Organized apothecary shelves with jars and bottles',
    ctaLabel: 'View on Amazon',
    whyWeRecommend:
      'A well-organized workspace supports consistency, safer storage habits, and less daily prep friction.',
    affiliateUrl:
      'https://www.amazon.com/s?k=apothecary+shelves+%2F+organizers&crid=20INETNBNMSZ9&sprefix=apothecary+shelves+%2F+organizers%2Caps%2C425&linkCode=ll2&tag=sacredseed-20&linkId=48fd6afa8417f208643414e194d88b2a&language=en_US&ref_=as_li_ss_tl',
    note: 'Choose layouts that keep labels visible and frequently used tools within easy reach.'
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
