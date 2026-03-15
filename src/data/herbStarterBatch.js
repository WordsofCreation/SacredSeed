/**
 * Starter herb batch (Batch 1) for SacredSeed's scalable materia medica seed data.
 *
 * Batch expansion note:
 * - Add future batches as additional arrays (e.g. herbBatch2Digestive, herbBatch3Adaptogens)
 * - Merge them in herbFallbacks.js without changing profile or index architecture.
 */
export const herbBatchStarter = [
  {
    slug: 'urtica-dioica',
    commonName: 'Stinging Nettle',
    botanicalName: 'Urtica dioica',
    family: 'Urticaceae',
    synonyms: ['Common Nettle', 'Greater Nettle'],
    description:
      'A perennial flowering herb with opposite serrated leaves and stinging trichomes; traditionally recognized as both food and medicine.',
    summary:
      'A mineral-rich tonic herb used for nutritive support, urinary wellness, and seasonal inflammatory balance.',
    distribution:
      'Widely distributed across Europe, Asia, North Africa, and naturalized in many temperate regions globally.',
    habitat:
      'Nitrogen-rich soils, hedgerows, woodland edges, riverbanks, and disturbed ground.',
    medicinalProperties: [
      'Nutritive tonic rich in minerals and chlorophyll',
      'Traditionally used to support urinary tract health',
      'Historically used for seasonal allergy support and inflammatory discomfort'
    ],
    medicinalActions: ['Nutritive', 'Diuretic', 'Anti-inflammatory'],
    bodySystems: ['Urinary', 'Musculoskeletal', 'Immune'],
    preparations: ['Infusion (leaf)', 'Fresh juice', 'Cooked food herb', 'Root tincture'],
    preparationReferences: ['nettle-infusion', 'nutritive-mineral-tea'],
    regionTags: ['Pacific Northwest', 'Temperate regions', 'Disturbed soils'],
    safetyCategory: 'Moderate Caution',
    safetySummary:
      'Fresh plant hairs can irritate skin; review use alongside diuretic and blood-pressure therapies.',
    safetyNotes:
      'Fresh plant hairs may irritate skin. Use caution with diuretic therapies, antihypertensive agents, and where renal pathology requires physician supervision.',
    chemistryNotes:
      'Nettle chemistry contains flavonoids, phenolic acids, and phytosterols, with composition varying by plant part and extraction method.',
    chemistrySources: ['Curated fallback monograph'],
    activeCompounds: ['Quercetin', 'Rutin', 'Caffeic acid', 'Beta-sitosterol'],
    sourceAttribution: ['Curated fallback monograph', 'Traditional Western herbal materia medica references'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Urtica_dioica_001.jpg/640px-Urtica_dioica_001.jpg'
  },
  {
    slug: 'achillea-millefolium',
    commonName: 'Yarrow',
    botanicalName: 'Achillea millefolium',
    family: 'Asteraceae',
    synonyms: ['Common Yarrow', 'Milfoil'],
    description:
      'Aromatic perennial with finely divided leaves and flat-topped flower clusters used in traditional first-aid and digestive herbalism.',
    summary:
      'A classic aromatic bitter used for digestive comfort, seasonal support, and topical field applications.',
    distribution:
      'Native across temperate regions of the Northern Hemisphere and widespread in meadows and roadsides.',
    habitat: 'Open grasslands, dry meadows, roadsides, and coastal clearings.',
    medicinalProperties: [
      'Traditionally used as a warming aromatic diaphoretic in acute seasonal protocols',
      'Historically used topically as a vulnerable-skin and minor wound herb',
      'Bitter-aromatic profile supports digestive tone in small doses'
    ],
    medicinalActions: ['Aromatic Bitter', 'Diaphoretic', 'Astringent'],
    bodySystems: ['Digestive', 'Circulatory', 'Integumentary'],
    preparations: ['Tea (aerial parts)', 'Tincture', 'Topical wash'],
    preparationReferences: ['yarrow-tea'],
    regionTags: ['Pacific Northwest', 'Mountain meadows', 'Temperate grasslands'],
    safetyCategory: 'General Caution',
    safetySummary:
      'Use caution with Asteraceae sensitivity and during pregnancy unless professionally guided.',
    safetyNotes:
      'Potential sensitivity in ragweed-family allergies. Concentrated internal use in pregnancy should be practitioner-supervised.',
    chemistryNotes: 'Contains sesquiterpene lactones, flavonoids, and volatile oils.',
    chemistrySources: ['Curated fallback monograph'],
    activeCompounds: ['Achilleine', 'Apigenin', 'Camphor'],
    sourceAttribution: ['Curated fallback monograph'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Achillea_millefolium_flowers.jpg/640px-Achillea_millefolium_flowers.jpg'
  },
  {
    slug: 'mahonia-aquifolium',
    commonName: 'Oregon Grape',
    botanicalName: 'Mahonia aquifolium',
    family: 'Berberidaceae',
    synonyms: ['Berberis aquifolium'],
    description:
      'Evergreen shrub native to western North America with yellow flowers and blue berries; root bark is the primary medicinal part.',
    summary:
      'A bitter antimicrobial and hepatic-supportive root used in practitioner-guided digestive and skin protocols.',
    distribution:
      'Native to western North America, especially the Pacific Northwest and northern California foothills.',
    habitat: 'Dry to moist coniferous forests, woodland edges, and rocky slopes.',
    medicinalProperties: [
      'Root bark traditionally used for bitter digestive stimulation',
      'Historically used in skin-focused protocols with constitutional assessment',
      'Often discussed in hepatic-biliary support traditions'
    ],
    medicinalActions: ['Bitter', 'Alterative', 'Antimicrobial'],
    bodySystems: ['Digestive', 'Hepatobiliary', 'Integumentary'],
    preparations: ['Decoction (root)', 'Tincture', 'Topical wash'],
    preparationReferences: ['oregon-grape-decoction'],
    regionTags: ['Pacific Northwest', 'Western North America', 'Forest understory'],
    safetyCategory: 'Moderate Caution',
    safetySummary:
      'Root preparations are potent bitters and are typically avoided in pregnancy without clinical oversight.',
    safetyNotes:
      'Avoid unsupervised use during pregnancy. Review use with medications metabolized through liver pathways.',
    chemistryNotes: 'Rich in protoberberine alkaloids, including berberine-related constituents.',
    chemistrySources: ['Curated fallback monograph'],
    activeCompounds: ['Berberine', 'Jatrorrhizine', 'Palmatine'],
    sourceAttribution: ['Curated fallback monograph'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Mahonia_aquifolium_berries.jpg/640px-Mahonia_aquifolium_berries.jpg'
  },
  {
    slug: 'melissa-officinalis',
    commonName: 'Lemon Balm',
    botanicalName: 'Melissa officinalis',
    family: 'Lamiaceae',
    synonyms: ['Balm', 'Sweet Balm'],
    description:
      'A lemon-scented mint-family perennial used for calm digestive and nervous system support.',
    summary:
      'A gentle aromatic nervine and digestive carminative often used in stress-related digestive tension.',
    distribution:
      'Native to southern Europe and western Asia; widely cultivated and naturalized in temperate climates.',
    habitat: 'Garden margins, sunny woodland edges, and moist, well-drained soils.',
    medicinalProperties: [
      'Traditionally used for nervous tension with digestive overlap',
      'Aromatic profile supports gas and post-meal discomfort',
      'Commonly included in gentle evening tea blends'
    ],
    medicinalActions: ['Nervine', 'Carminative', 'Antiviral (traditional topical context)'],
    bodySystems: ['Nervous', 'Digestive', 'Immune'],
    preparations: ['Infusion', 'Fresh tincture', 'Glycerite'],
    preparationReferences: ['calming-evening-tea'],
    regionTags: ['Cultivated gardens', 'Temperate regions'],
    safetyCategory: 'Generally Well Tolerated',
    safetySummary: 'Generally well tolerated; monitor for excessive sedation with sedative medications.',
    safetyNotes:
      'Use care with sedative medications and hypothyroid management plans when using concentrated extracts long term.',
    chemistryNotes: 'Contains rosmarinic acid and aromatic terpenes including citral-related compounds.',
    chemistrySources: ['Curated fallback monograph'],
    activeCompounds: ['Rosmarinic acid', 'Citral', 'Geraniol'],
    sourceAttribution: ['Curated fallback monograph'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Melissa_officinalis_flowering.jpg/640px-Melissa_officinalis_flowering.jpg'
  },
  {
    slug: 'sambucus-nigra',
    commonName: 'Elderberry',
    botanicalName: 'Sambucus nigra',
    family: 'Adoxaceae',
    synonyms: ['Black Elder'],
    description:
      'A deciduous shrub with cream flower umbels and dark berries used in seasonal immune support traditions.',
    summary:
      'A classic seasonal berry used for short-term immune support and warming syrups or decoctions.',
    distribution:
      'Native to Europe and parts of western Asia; related elder species occur across North America.',
    habitat: 'Moist hedgerows, woodland margins, riparian corridors, and disturbed edges.',
    medicinalProperties: [
      'Berries traditionally used in seasonal respiratory support protocols',
      'Flowers used in diaphoretic and soothing teas',
      'Often prepared as syrups and decoctions during winter months'
    ],
    medicinalActions: ['Immune supportive', 'Diaphoretic', 'Antioxidant'],
    bodySystems: ['Immune', 'Respiratory'],
    preparations: ['Decoction/syrup (cooked berry)', 'Infusion (flower)', 'Tincture'],
    preparationReferences: ['seasonal-immune-support-tea'],
    regionTags: ['Temperate hedgerows', 'Riparian zones'],
    safetyCategory: 'General Caution',
    safetySummary: 'Raw berries and other plant parts can cause gastrointestinal upset; use properly prepared material.',
    safetyNotes:
      'Use cooked ripe berries only. Leaves, stems, and unripe berries are not used as food-level preparations.',
    chemistryNotes: 'Anthocyanin-rich berry profile with flavonoid and phenolic constituents.',
    chemistrySources: ['Curated fallback monograph'],
    activeCompounds: ['Cyanidin glycosides', 'Quercetin', 'Rutin'],
    sourceAttribution: ['Curated fallback monograph'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Sambucus_nigra_berries.jpg/640px-Sambucus_nigra_berries.jpg'
  },
  {
    slug: 'matricaria-chamomilla',
    commonName: 'German Chamomile',
    botanicalName: 'Matricaria chamomilla',
    family: 'Asteraceae',
    synonyms: ['Chamomilla', 'Wild Chamomile'],
    description:
      'An aromatic annual herb with daisy-like flowers valued in traditional European and Middle Eastern herbal practice.',
    summary:
      'A gentle aromatic known for digestive ease, relaxation support, and skin-soothing preparations.',
    distribution:
      'Native to Europe and Western Asia, now cultivated and naturalized in temperate regions worldwide.',
    habitat: 'Sunny meadows, field margins, and cultivated herb gardens.',
    medicinalProperties: [
      'Traditionally used for mild digestive tension and bloating',
      'Historically used as a calming herb for rest and nervous irritability',
      'Used topically for minor skin irritation and soothing compresses'
    ],
    medicinalActions: ['Carminative', 'Mild Sedative', 'Antispasmodic'],
    bodySystems: ['Digestive', 'Nervous', 'Integumentary'],
    preparations: ['Infusion', 'Glycerite', 'Topical compress'],
    preparationReferences: ['calming-evening-tea'],
    regionTags: ['Temperate gardens', 'Field margins'],
    safetyCategory: 'Generally Well Tolerated',
    safetySummary:
      'Usually well tolerated; caution in individuals with known sensitivity to Asteraceae species.',
    safetyNotes:
      'Use caution in those with ragweed-family allergies. Professional guidance is advised during pregnancy or when combining with sedative medications.',
    chemistryNotes:
      'Contains volatile oils and flavonoids including apigenin derivatives commonly discussed in chamomile literature.',
    chemistrySources: ['Curated fallback monograph'],
    activeCompounds: ['Apigenin', 'Bisabolol', 'Chamazulene'],
    sourceAttribution: ['Curated fallback monograph'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Matricaria_chamomilla_120804.jpg/640px-Matricaria_chamomilla_120804.jpg'
  },
  {
    slug: 'mentha-x-piperita',
    commonName: 'Peppermint',
    botanicalName: 'Mentha × piperita',
    family: 'Lamiaceae',
    synonyms: ['Mentha piperita'],
    description:
      'A cultivated mint hybrid with cooling aromatic leaves used widely in digestive and respiratory support traditions.',
    summary:
      'A cooling aromatic carminative for digestive discomfort and mild tension headaches in topical contexts.',
    distribution:
      'Cultivated globally in temperate regions and occasionally naturalized near gardens and moist sites.',
    habitat: 'Moist cultivated beds, stream edges, and rich garden soils.',
    medicinalProperties: [
      'Traditionally used as a carminative for post-meal fullness and gas',
      'Aromatic oils are used in inhalation and topical comfort preparations',
      'Cooling profile is often used in summer digestive formulas'
    ],
    medicinalActions: ['Carminative', 'Antispasmodic', 'Aromatic'],
    bodySystems: ['Digestive', 'Nervous', 'Respiratory'],
    preparations: ['Infusion', 'Tincture', 'Diluted essential oil topical applications'],
    regionTags: ['Cultivated', 'Temperate regions'],
    safetyCategory: 'General Caution',
    safetySummary: 'Concentrated essential oil requires careful dilution and age-appropriate use.',
    safetyNotes:
      'Avoid undiluted essential oil internally. Use caution in reflux-prone individuals and around very young children.',
    chemistryNotes: 'Dominant volatile constituents include menthol and menthone.',
    chemistrySources: ['Curated fallback monograph'],
    activeCompounds: ['Menthol', 'Menthone', 'Rosmarinic acid'],
    sourceAttribution: ['Curated fallback monograph'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Mentha_x_piperita_001.JPG/640px-Mentha_x_piperita_001.JPG'
  },
  {
    slug: 'trifolium-pratense',
    commonName: 'Red Clover',
    botanicalName: 'Trifolium pratense',
    family: 'Fabaceae',
    synonyms: ['Meadow Clover'],
    description:
      'A common meadow legume with pink flower heads traditionally prepared as teas and extracts.',
    summary:
      'A gentle alterative and nutritive flower herb used in skin and endocrine-supportive traditions.',
    distribution:
      'Native to Europe, western Asia, and northwest Africa; now widely naturalized in temperate regions.',
    habitat: 'Meadows, pasture edges, roadsides, and open disturbed soils.',
    medicinalProperties: [
      'Traditionally used as a lymphatic and skin-supportive herb',
      'Flowering tops used as mild nutritive teas',
      'Historically discussed in endocrine transition support traditions'
    ],
    medicinalActions: ['Alterative', 'Lymphatic', 'Nutritive'],
    bodySystems: ['Lymphatic', 'Integumentary', 'Reproductive'],
    preparations: ['Infusion (flowering tops)', 'Tincture', 'Capsule extracts'],
    regionTags: ['Temperate meadows', 'Pasturelands'],
    safetyCategory: 'Moderate Caution',
    safetySummary: 'Use medication-aware guidance where anticoagulants or hormone-sensitive conditions are present.',
    safetyNotes:
      'Review use in anticoagulant therapy and hormone-sensitive conditions with qualified clinicians.',
    chemistryNotes: 'Contains isoflavones and flavonoids with variable concentrations across preparations.',
    chemistrySources: ['Curated fallback monograph'],
    activeCompounds: ['Formononetin', 'Biochanin A', 'Genistein'],
    sourceAttribution: ['Curated fallback monograph'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Trifolium_pratense_flowers.jpg/640px-Trifolium_pratense_flowers.jpg'
  },
  {
    slug: 'taraxacum-officinale',
    commonName: 'Dandelion',
    botanicalName: 'Taraxacum officinale',
    family: 'Asteraceae',
    synonyms: ['Lion’s Tooth', 'Blowball'],
    description:
      'A perennial herb with deeply toothed basal leaves and bright yellow composite flowers, common in disturbed habitats.',
    summary:
      'A classic bitter and nutritive herb used for digestive stimulation and gentle liver-biliary support.',
    distribution:
      'Native to Eurasia and now widespread throughout temperate regions globally.',
    habitat: 'Lawns, meadows, roadsides, and open disturbed soils.',
    medicinalProperties: [
      'Traditional bitter tonic to stimulate digestion',
      'Leaf used as a gentle diuretic food-medicine',
      'Root preparations historically associated with liver and biliary support'
    ],
    medicinalActions: ['Bitter Tonic', 'Cholagogue', 'Diuretic'],
    bodySystems: ['Digestive', 'Hepatobiliary', 'Urinary'],
    preparations: ['Infusion (leaf)', 'Decoction (root)', 'Tincture', 'Food herb'],
    preparationReferences: ['nutritive-mineral-tea'],
    regionTags: ['Temperate regions', 'Urban edges', 'Meadows'],
    safetyCategory: 'General Caution',
    safetySummary:
      'Generally food-safe, though bitter and biliary effects warrant caution in obstructive gallbladder conditions.',
    safetyNotes:
      'Use caution with known bile duct obstruction, active gallbladder disease, or Asteraceae allergy. Monitor with diuretic therapies.',
    chemistryNotes:
      'Contains sesquiterpene lactones, triterpenes, and phenolic compounds; profile differs by root versus leaf.',
    chemistrySources: ['Curated fallback monograph'],
    activeCompounds: ['Taraxasterol', 'Chicoric acid', 'Luteolin'],
    sourceAttribution: ['Curated fallback monograph'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/TaraxacumOfficinaleSeed.jpg/640px-TaraxacumOfficinaleSeed.jpg'
  },
  {
    slug: 'plantago-major',
    commonName: 'Plantain',
    botanicalName: 'Plantago major',
    family: 'Plantaginaceae',
    synonyms: ['Broadleaf Plantain', 'Common Plantain'],
    description:
      'A resilient low-growing herb with broad ribbed leaves, widely used as a fresh topical and demulcent support plant.',
    summary:
      'A versatile vulnerable-skin and mucosal support herb used both topically and internally in gentle preparations.',
    distribution:
      'Native to Eurasia and now cosmopolitan across temperate and subtropical regions.',
    habitat: 'Paths, lawns, compacted soils, garden edges, and disturbed urban spaces.',
    medicinalProperties: [
      'Fresh leaf traditionally used as a topical field poultice',
      'Demulcent preparations support irritated tissues in digestive and respiratory contexts',
      'Historically included in skin-repair and minor wound-care formulas'
    ],
    medicinalActions: ['Demulcent', 'Vulnerary', 'Anti-inflammatory'],
    bodySystems: ['Integumentary', 'Respiratory', 'Digestive'],
    preparations: ['Fresh poultice', 'Infusion', 'Syrup'],
    regionTags: ['Urban ecology', 'Temperate regions', 'Disturbed soils'],
    safetyCategory: 'Generally Well Tolerated',
    safetySummary: 'Generally well tolerated when clean, correctly identified plant material is used.',
    safetyNotes:
      'Harvest from clean environments only. Internal use should account for individual sensitivities and contaminants from roadside sites.',
    chemistryNotes: 'Contains mucilage, iridoid glycosides, and phenolic acids.',
    chemistrySources: ['Curated fallback monograph'],
    activeCompounds: ['Aucubin', 'Allantoin', 'Plantamajoside'],
    sourceAttribution: ['Curated fallback monograph'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Plantago_major_002.JPG/640px-Plantago_major_002.JPG'
  }
];
