/**
 * Curated herb batch 2.
 *
 * Expansion note:
 * - Keep entries aligned to SacredSeed's unified herb object contract.
 * - Future batches can follow this same array format and be merged in herbFallbacks.js.
 */
export const herbBatch2 = [
  {
    slug: 'scutellaria-lateriflora',
    commonName: 'Skullcap',
    botanicalName: 'Scutellaria lateriflora',
    family: 'Lamiaceae',
    synonyms: ['Mad-Dog Skullcap', 'Blue Skullcap'],
    description:
      'A North American mint-family herb with small blue flowers, traditionally used for tension and rest support.',
    summary:
      'A gentle nervine often used in stress-responsive formulations and evening tea blends.',
    distribution:
      'Native to North America, commonly found in eastern and central regions and cultivated in herbal gardens.',
    habitat: 'Moist meadows, stream banks, and damp woodland edges.',
    medicinalProperties: [
      'Traditionally used as a calming nervine in periods of nervous overactivity',
      'Commonly included in evening formulas with digestive or stress overlap',
      'Used in practitioner-guided protocols for tension-associated discomfort'
    ],
    medicinalActions: ['Nervine', 'Mild Sedative', 'Antispasmodic'],
    bodySystems: ['Nervous', 'Musculoskeletal'],
    preparations: ['Infusion', 'Tincture'],
    safetyCategory: 'General Caution',
    safetySummary: 'Generally well tolerated; monitor additive sedation with calming medications.',
    safetyNotes:
      'Use medication-aware guidance when combining with sedative therapies. Identity verification is important for quality sourcing.',
    chemistryNotes: 'Contains flavonoids including baicalin-related compounds and volatile constituents.',
    chemistrySources: ['Curated fallback monograph'],
    activeCompounds: ['Baicalin', 'Wogonin', 'Scutellarin'],
    sourceAttribution: ['Curated fallback monograph', 'Traditional North American herbal references'],
    regionTags: ['North America', 'Cultivated medicinal gardens'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Scutellaria_lateriflora.jpg/640px-Scutellaria_lateriflora.jpg'
  },
  {
    slug: 'calendula-officinalis',
    commonName: 'Calendula',
    botanicalName: 'Calendula officinalis',
    family: 'Asteraceae',
    synonyms: ['Pot Marigold'],
    description:
      'A bright orange-yellow flowering annual widely cultivated for topical skin support and gentle lymphatic formulas.',
    summary:
      'A classic skin-supportive and lymphatic herb used internally and externally in gentle preparations.',
    distribution:
      'Cultivated globally in temperate zones and naturalized in some Mediterranean-like climates.',
    habitat: 'Cultivated gardens, sunny beds, and well-drained soils.',
    medicinalProperties: [
      'Traditionally used topically for minor skin irritation and tissue repair support',
      'Historically used as a gentle lymphatic alterative in constitutional formulas',
      'Commonly prepared as oils, salves, and teas'
    ],
    medicinalActions: ['Vulnerary', 'Lymphatic', 'Anti-inflammatory'],
    bodySystems: ['Integumentary', 'Lymphatic', 'Digestive'],
    preparations: ['Infusion', 'Tincture', 'Topical oil infusion', 'Salve'],
    safetyCategory: 'Generally Well Tolerated',
    safetySummary: 'Typically well tolerated; caution in known Asteraceae sensitivity.',
    safetyNotes:
      'Use caution with ragweed-family allergies. Topical preparations should be patch-tested for sensitive skin.',
    chemistryNotes: 'Contains triterpenoids, flavonoids, and carotenoid pigments.',
    chemistrySources: ['Curated fallback monograph'],
    activeCompounds: ['Faradiol esters', 'Quercetin glycosides', 'Lutein'],
    sourceAttribution: ['Curated fallback monograph'],
    regionTags: ['Cultivated', 'Temperate gardens'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Calendula_officinalis_flowers.jpg/640px-Calendula_officinalis_flowers.jpg'
  },
  {
    slug: 'althaea-officinalis',
    commonName: 'Marshmallow',
    botanicalName: 'Althaea officinalis',
    family: 'Malvaceae',
    synonyms: ['White Mallow'],
    description:
      'A soft-leaved perennial known for mucilage-rich root and leaf preparations used to soothe irritated tissues.',
    summary:
      'A demulcent herb for digestive, respiratory, and urinary mucosal comfort.',
    distribution: 'Native to Europe, western Asia, and North Africa; cultivated widely in temperate herb gardens.',
    habitat: 'Moist meadows, marsh margins, and cultivated beds with rich soil.',
    medicinalProperties: [
      'Traditionally used to soothe dry or irritated mucosal tissue',
      'Commonly included in throat and digestive demulcent formulas',
      'Root cold infusions are widely used in traditional practice'
    ],
    medicinalActions: ['Demulcent', 'Emollient', 'Anti-inflammatory'],
    bodySystems: ['Digestive', 'Respiratory', 'Urinary'],
    preparations: ['Cold infusion (root)', 'Infusion (leaf)', 'Syrup'],
    safetyCategory: 'Generally Well Tolerated',
    safetySummary: 'Generally well tolerated; spacing from oral medications is often advised.',
    safetyNotes:
      'Demulcent mucilage may alter timing of oral medication absorption; separate dosing windows when clinically relevant.',
    chemistryNotes: 'Mucilage polysaccharides, flavonoids, and phenolic acids are primary constituents.',
    chemistrySources: ['Curated fallback monograph'],
    activeCompounds: ['Mucilage polysaccharides', 'Pectin', 'Kaempferol derivatives'],
    sourceAttribution: ['Curated fallback monograph'],
    regionTags: ['Temperate regions', 'Moist meadows'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Althaea_officinalis0.jpg/640px-Althaea_officinalis0.jpg'
  },
  {
    slug: 'ocimum-tenuiflorum',
    commonName: 'Tulsi',
    botanicalName: 'Ocimum tenuiflorum',
    family: 'Lamiaceae',
    synonyms: ['Holy Basil', 'Ocimum sanctum'],
    description:
      'An aromatic basil relative revered in South Asian traditions and used in daily wellness and respiratory formulas.',
    summary:
      'A warming aromatic adaptogenic herb used for stress resilience and seasonal respiratory comfort.',
    distribution:
      'Native to the Indian subcontinent and cultivated globally in subtropical and warm temperate regions.',
    habitat: 'Cultivated household gardens, warm open fields, and well-drained soils.',
    medicinalProperties: [
      'Traditionally used as a daily tonic herb in Ayurveda-informed practice',
      'Commonly included in stress-support and respiratory comfort teas',
      'Aromatic leaves are used fresh or dried in infusions and tinctures'
    ],
    medicinalActions: ['Adaptogenic (traditional)', 'Aromatic', 'Immune supportive'],
    bodySystems: ['Nervous', 'Immune', 'Respiratory'],
    preparations: ['Infusion', 'Tincture', 'Fresh leaf tea'],
    safetyCategory: 'General Caution',
    safetySummary: 'Generally well tolerated in tea amounts; concentrated extracts require individualized guidance.',
    safetyNotes:
      'Use medication-aware review for anticoagulants, glucose-lowering therapies, or fertility-sensitive contexts.',
    chemistryNotes: 'Contains eugenol, rosmarinic acid, and aromatic terpenes.',
    chemistrySources: ['Curated fallback monograph'],
    activeCompounds: ['Eugenol', 'Rosmarinic acid', 'Ursolic acid'],
    sourceAttribution: ['Curated fallback monograph', 'Traditional Ayurvedic materia medica references'],
    regionTags: ['South Asia', 'Cultivated'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Ocimum_tenuiflorum2.jpg/640px-Ocimum_tenuiflorum2.jpg'
  },
  {
    slug: 'lavandula-angustifolia',
    commonName: 'Lavender',
    botanicalName: 'Lavandula angustifolia',
    family: 'Lamiaceae',
    synonyms: ['English Lavender'],
    description:
      'A fragrant Mediterranean shrub with purple flowering spikes, widely used for relaxation and aromatic skin support.',
    summary:
      'A calming aromatic herb used in teas, baths, and topical preparations.',
    distribution:
      'Native to the Mediterranean basin and widely cultivated across temperate climates including the Pacific Northwest.',
    habitat: 'Dry sunny slopes, rocky soils, and cultivated garden borders.',
    medicinalProperties: [
      'Traditionally used for mild nervous tension and rest support',
      'Aromatic flowers are included in digestive and mood-balancing blends',
      'Topical and bath preparations are used for gentle skin and stress support'
    ],
    medicinalActions: ['Aromatic', 'Nervine', 'Carminative'],
    bodySystems: ['Nervous', 'Digestive', 'Integumentary'],
    preparations: ['Infusion', 'Tincture', 'Bath infusion', 'Topical oil'],
    safetyCategory: 'General Caution',
    safetySummary: 'Tea-level use is generally gentle; concentrated essential oil requires careful dilution.',
    safetyNotes:
      'Avoid internal use of concentrated essential oil without professional supervision. Patch-test topical use in sensitive skin.',
    chemistryNotes: 'Primary aromatic constituents include linalool and linalyl acetate.',
    chemistrySources: ['Curated fallback monograph'],
    activeCompounds: ['Linalool', 'Linalyl acetate', 'Rosmarinic acid'],
    sourceAttribution: ['Curated fallback monograph'],
    regionTags: ['Mediterranean', 'Pacific Northwest cultivation'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Lavandula_angustifolia_001.JPG/640px-Lavandula_angustifolia_001.JPG'
  },
  {
    slug: 'rosa-rugosa',
    commonName: 'Rose',
    botanicalName: 'Rosa rugosa',
    family: 'Rosaceae',
    synonyms: ['Beach Rose'],
    description:
      'A fragrant rose species valued for petals and hips in calming, heart-supportive, and nutritive formulas.',
    summary:
      'A gentle aromatic astringent used in emotional support blends, skin care, and vitamin-rich hip preparations.',
    distribution:
      'Native to eastern Asia and widely naturalized in coastal temperate regions, including parts of the Pacific Northwest.',
    habitat: 'Coastal dunes, hedgerows, and cultivated gardens.',
    medicinalProperties: [
      'Petals traditionally used in gentle calming and uplifting blends',
      'Rose hips are used as nutritive antioxidant fruit material',
      'Topical rose waters and oils are common in skin-soothing care'
    ],
    medicinalActions: ['Astringent', 'Aromatic', 'Nutritive'],
    bodySystems: ['Nervous', 'Integumentary', 'Digestive'],
    preparations: ['Infusion (petal)', 'Syrup (hips)', 'Glycerite', 'Hydrosol'],
    safetyCategory: 'Generally Well Tolerated',
    safetySummary: 'Generally well tolerated when correctly identified and cleanly sourced.',
    safetyNotes:
      'Avoid heavily sprayed ornamental roses. Review concentrated products in highly sensitive constitutions.',
    chemistryNotes: 'Rose constituents include tannins, flavonoids, and vitamin C-rich hip chemistry.',
    chemistrySources: ['Curated fallback monograph'],
    activeCompounds: ['Ellagitannins', 'Quercetin', 'Ascorbic acid'],
    sourceAttribution: ['Curated fallback monograph'],
    regionTags: ['Pacific Northwest', 'Coastal temperate regions'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Rosa_rugosa_flowers.jpg/640px-Rosa_rugosa_flowers.jpg'
  },
  {
    slug: 'zingiber-officinale',
    commonName: 'Ginger',
    botanicalName: 'Zingiber officinale',
    family: 'Zingiberaceae',
    synonyms: ['Common Ginger'],
    description:
      'A warming rhizome herb used globally as both medicine and food for digestive and circulatory support.',
    summary:
      'A warming digestive stimulant and anti-nausea herb used in teas, decoctions, and culinary medicine.',
    distribution: 'Native to tropical Asia and cultivated worldwide in tropical and subtropical agricultural systems.',
    habitat: 'Cultivated beds in warm, humid environments with rich, well-drained soil.',
    medicinalProperties: [
      'Traditionally used for nausea and post-meal digestive discomfort',
      'Warming circulatory influence is valued in cold-pattern formulas',
      'Commonly included in respiratory and seasonal decoctions'
    ],
    medicinalActions: ['Carminative', 'Warming stimulant', 'Antiemetic'],
    bodySystems: ['Digestive', 'Circulatory', 'Respiratory'],
    preparations: ['Decoction', 'Fresh tea', 'Tincture', 'Culinary use'],
    preparationReferences: ['seasonal-immune-support-tea'],
    safetyCategory: 'General Caution',
    safetySummary: 'Generally safe in culinary amounts; monitor concentrated dosing with anticoagulant use.',
    safetyNotes:
      'Use caution with active reflux, anticoagulants, and high-dose use in pregnancy unless professionally guided.',
    chemistryNotes: 'Contains gingerols and shogaols with warming pungent activity.',
    chemistrySources: ['Curated fallback monograph'],
    activeCompounds: ['[6]-Gingerol', 'Shogaols', 'Zingerone'],
    sourceAttribution: ['Curated fallback monograph'],
    regionTags: ['Global cultivation', 'Tropical Asia'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Koeh-146.jpg/640px-Koeh-146.jpg'
  },
  {
    slug: 'foeniculum-vulgare',
    commonName: 'Fennel',
    botanicalName: 'Foeniculum vulgare',
    family: 'Apiaceae',
    synonyms: ['Sweet Fennel'],
    description:
      'An aromatic umbellifer herb with sweet seeds traditionally used for digestion and mild respiratory support.',
    summary:
      'A gentle aromatic carminative frequently used after meals and in family digestive teas.',
    distribution:
      'Native to the Mediterranean and naturalized in many coastal and temperate regions globally.',
    habitat: 'Dry open fields, roadsides, coastal margins, and cultivated gardens.',
    medicinalProperties: [
      'Traditionally used for gas, bloating, and digestive stagnation',
      'Mild aromatic expectorant profile is used in cough-support blends',
      'Seeds are common in tea and culinary digestive formulas'
    ],
    medicinalActions: ['Carminative', 'Aromatic', 'Mild expectorant'],
    bodySystems: ['Digestive', 'Respiratory'],
    preparations: ['Infusion (seed)', 'Decoction (seed)', 'Tincture'],
    safetyCategory: 'General Caution',
    safetySummary: 'Generally gentle in food-level use; concentrated extracts need endocrine-aware review.',
    safetyNotes:
      'Use care in hormone-sensitive conditions and with concentrated essential oil products.',
    chemistryNotes: 'Seed chemistry includes anethole and fenchone dominant aromatic compounds.',
    chemistrySources: ['Curated fallback monograph'],
    activeCompounds: ['Anethole', 'Fenchone', 'Estragole'],
    sourceAttribution: ['Curated fallback monograph'],
    regionTags: ['Mediterranean', 'Temperate coastal regions'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Foeniculum_vulgare_seeds.jpg/640px-Foeniculum_vulgare_seeds.jpg'
  },
  {
    slug: 'echinacea-purpurea',
    commonName: 'Echinacea',
    botanicalName: 'Echinacea purpurea',
    family: 'Asteraceae',
    synonyms: ['Purple Coneflower'],
    description:
      'A North American prairie perennial widely used in short-term seasonal immune support traditions.',
    summary:
      'A well-known immune-support herb used in acute seasonal protocols and topical formulas.',
    distribution:
      'Native to central and eastern North America; widely cultivated in medicinal gardens worldwide.',
    habitat: 'Prairies, open meadows, and cultivated gardens with full sun.',
    medicinalProperties: [
      'Traditionally used for short-duration immune support in seasonal protocols',
      'Root and aerial parts are used in tinctures and teas',
      'Topical forms are used in minor skin support preparations'
    ],
    medicinalActions: ['Immune supportive', 'Lymphatic', 'Anti-inflammatory'],
    bodySystems: ['Immune', 'Lymphatic', 'Respiratory'],
    preparations: ['Tincture', 'Infusion', 'Topical wash'],
    safetyCategory: 'General Caution',
    safetySummary: 'Often used short term; monitor for Asteraceae sensitivity and immune-condition context.',
    safetyNotes:
      'Use professional review in autoimmune conditions or with immune-modulating therapy. Watch for Asteraceae allergy responses.',
    chemistryNotes: 'Contains alkylamides, caffeic acid derivatives, and polysaccharides.',
    chemistrySources: ['Curated fallback monograph'],
    activeCompounds: ['Alkylamides', 'Chicoric acid', 'Echinacoside'],
    sourceAttribution: ['Curated fallback monograph'],
    regionTags: ['North America', 'Cultivated medicinal gardens'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Echinacea_purpurea_flowers.jpg/640px-Echinacea_purpurea_flowers.jpg'
  },
  {
    slug: 'avena-sativa',
    commonName: 'Oatstraw',
    botanicalName: 'Avena sativa',
    family: 'Poaceae',
    synonyms: ['Milky Oat Tops', 'Common Oat'],
    description:
      'A cereal grass used medicinally as straw and milky tops for nutritive nervous system support.',
    summary:
      'A gentle nutritive tonic used in long infusions for nervous system resilience and mineral support.',
    distribution:
      'Cultivated globally as a cereal crop, with medicinal use concentrated in temperate herbal traditions.',
    habitat: 'Cultivated grain fields, farm edges, and managed agricultural landscapes.',
    medicinalProperties: [
      'Traditionally used as a rebuilding nervous system tonic',
      'Long infusions provide mineral-rich support in recovery-oriented formulas',
      'Often combined with nettle and red clover in nutritive blends'
    ],
    medicinalActions: ['Nutritive', 'Nervine', 'Trophorestorative'],
    bodySystems: ['Nervous', 'Musculoskeletal', 'Immune'],
    preparations: ['Long infusion (straw)', 'Tincture (milky tops)'],
    preparationReferences: ['nutritive-mineral-tea'],
    safetyCategory: 'Generally Well Tolerated',
    safetySummary: 'Generally gentle and food-like; source quality and individual grain sensitivity remain relevant.',
    safetyNotes:
      'Select gluten-aware sourcing where contamination is a concern. Medication interactions are typically minimal at tea doses.',
    chemistryNotes: 'Rich in silica, minerals, beta-glucans, and avenanthramides.',
    chemistrySources: ['Curated fallback monograph'],
    activeCompounds: ['Avenanthramides', 'Beta-glucans', 'Silica'],
    sourceAttribution: ['Curated fallback monograph'],
    regionTags: ['Temperate agriculture', 'Pacific Northwest cultivation'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Avena_sativa_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-018.jpg/640px-Avena_sativa_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-018.jpg'
  }
];
