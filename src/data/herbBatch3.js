/**
 * Curated herb batch 3.
 *
 * Expansion note:
 * - Keep all entries aligned to SacredSeed's unified herb object contract.
 * - Future batches should be added as separate files and merged in herbFallbacks.js.
 */
export const herbBatch3 = [
  {
    slug: 'verbascum-thapsus',
    commonName: 'Mullein',
    botanicalName: 'Verbascum thapsus',
    family: 'Scrophulariaceae',
    synonyms: ['Common Mullein', 'Great Mullein'],
    description:
      'A biennial herb with woolly leaves and a tall flowering spike, traditionally used for respiratory comfort and ear oil preparations.',
    summary:
      'A soothing respiratory demulcent and expectorant herb commonly prepared as tea, tincture, and infused oil.',
    distribution:
      'Native to Europe, North Africa, and Asia; now naturalized throughout North America and other temperate regions.',
    habitat: 'Dry disturbed soils, roadsides, meadows, and open sunny slopes.',
    medicinalProperties: [
      'Leaf infusions are traditionally used for dry, irritated respiratory tissues',
      'Flowers are used in gentle oil preparations for topical ear comfort contexts',
      'Historically combined with demulcent and aromatic herbs in seasonal formulas'
    ],
    medicinalActions: ['Demulcent', 'Expectorant', 'Mild anti-inflammatory'],
    bodySystems: ['Respiratory', 'Integumentary'],
    preparations: ['Infusion (leaf)', 'Tincture', 'Infused oil (flower)'],
    safetyCategory: 'Generally Well Tolerated',
    safetySummary: 'Generally gentle; leaf teas should be carefully strained to remove irritating hairs.',
    safetyNotes:
      'Fine leaf hairs may irritate the throat if not strained through a fine filter. Use clean, properly identified material.',
    chemistryNotes: 'Contains mucilage, saponins, and iridoid glycosides including verbascoside-related compounds.',
    chemistrySources: ['Curated fallback monograph'],
    activeCompounds: ['Mucilage polysaccharides', 'Verbascoside', 'Saponins'],
    sourceAttribution: ['Curated fallback monograph'],
    regionTags: ['Temperate regions', 'Pacific Northwest', 'Disturbed soils'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Verbascum_thapsus_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-281.jpg/640px-Verbascum_thapsus_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-281.jpg'
  },
  {
    slug: 'withania-somnifera',
    commonName: 'Ashwagandha',
    botanicalName: 'Withania somnifera',
    family: 'Solanaceae',
    synonyms: ['Winter Cherry', 'Indian Ginseng'],
    description:
      'A small shrub used in Ayurvedic herbal traditions, especially for stress adaptation and constitutional rebuilding.',
    summary:
      'A restorative adaptogenic herb used for stress resilience, energy balance, and long-view tonic support.',
    distribution:
      'Native to parts of South Asia, North Africa, and the Middle East; cultivated in dry subtropical regions globally.',
    habitat: 'Dry stony soils, cultivated fields, and warm subtropical environments.',
    medicinalProperties: [
      'Traditionally used as a restorative herb for stress-responsive fatigue patterns',
      'Commonly included in nightly tonics supporting rest and resilience',
      'Used in practitioner-guided endocrine and constitutional support formulas'
    ],
    medicinalActions: ['Adaptogen', 'Nervine tonic', 'Restorative'],
    bodySystems: ['Nervous', 'Endocrine', 'Immune'],
    preparations: ['Powdered root', 'Decoction', 'Tincture'],
    safetyCategory: 'General Caution',
    safetySummary: 'Use medication-aware guidance in thyroid, sedative, or immunomodulating treatment contexts.',
    safetyNotes:
      'Use professional guidance with thyroid-active medications, sedatives, and immune-modulating therapies. Avoid use in pregnancy unless practitioner directed.',
    chemistryNotes: 'Primary constituents include withanolides and sitoindosides.',
    chemistrySources: ['Curated fallback monograph'],
    activeCompounds: ['Withaferin A', 'Withanolide D', 'Sitoindosides'],
    sourceAttribution: ['Curated fallback monograph', 'Traditional Ayurvedic herbal references'],
    regionTags: ['South Asia', 'Dry subtropics', 'Cultivated medicinal farms'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Withania_somnifera_002.JPG/640px-Withania_somnifera_002.JPG'
  },
  {
    slug: 'arctium-lappa',
    commonName: 'Burdock',
    botanicalName: 'Arctium lappa',
    family: 'Asteraceae',
    synonyms: ['Great Burdock'],
    description:
      'A biennial root herb traditionally used for skin, lymphatic, and digestive constitutional support.',
    summary:
      'A classic alterative root and food herb used in long-view skin and metabolic support traditions.',
    distribution: 'Native to Eurasia and widely naturalized in temperate regions, including North America.',
    habitat: 'Disturbed soils, field edges, roadsides, and cultivated garden beds.',
    medicinalProperties: [
      'Root is traditionally used in gradual constitutional skin-support formulas',
      'Often included in digestive and lymphatic-focused alterative blends',
      'Also used as a food-level root in Japanese and macrobiotic traditions'
    ],
    medicinalActions: ['Alterative', 'Mild bitter', 'Nutritive'],
    bodySystems: ['Integumentary', 'Digestive', 'Lymphatic'],
    preparations: ['Decoction (root)', 'Tincture', 'Food preparation'],
    safetyCategory: 'General Caution',
    safetySummary: 'Generally gentle food-level herb; monitor use in Asteraceae sensitivity and blood-sugar management plans.',
    safetyNotes:
      'Use caution with known Asteraceae sensitivity and glucose-lowering medications in concentrated extract contexts.',
    chemistryNotes: 'Contains inulin, lignans, and polyphenolic constituents.',
    chemistrySources: ['Curated fallback monograph'],
    activeCompounds: ['Inulin', 'Arctiin', 'Chlorogenic acid'],
    sourceAttribution: ['Curated fallback monograph'],
    regionTags: ['Temperate regions', 'North America', 'Eurasia'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Arctium_lappa_001.JPG/640px-Arctium_lappa_001.JPG'
  },
  {
    slug: 'silybum-marianum',
    commonName: 'Milk Thistle',
    botanicalName: 'Silybum marianum',
    family: 'Asteraceae',
    synonyms: ['Blessed Milk Thistle'],
    description:
      'A spiny flowering herb best known for seed compounds used in liver-focused herbal support.',
    summary:
      'A hepatoprotective seed herb used in practitioner-guided liver and detoxification support programs.',
    distribution: 'Native to the Mediterranean and naturalized in dry temperate and subtropical regions globally.',
    habitat: 'Dry fields, roadsides, and sunny disturbed landscapes.',
    medicinalProperties: [
      'Seed extracts are traditionally used in liver-supportive protocols',
      'Often discussed for oxidative stress balance and hepatic recovery support',
      'Included in formulas where long-term liver resilience is a goal'
    ],
    medicinalActions: ['Hepatoprotective', 'Antioxidant', 'Alterative'],
    bodySystems: ['Hepatobiliary', 'Digestive'],
    preparations: ['Standardized extract', 'Ground seed', 'Tincture'],
    safetyCategory: 'General Caution',
    safetySummary: 'Generally well tolerated; concentrated extracts should be medication-reviewed.',
    safetyNotes:
      'Review concentrated use with medications metabolized by hepatic pathways. Caution in Asteraceae sensitivity.',
    chemistryNotes: 'Seed chemistry includes the flavonolignan complex silymarin.',
    chemistrySources: ['Curated fallback monograph'],
    activeCompounds: ['Silybin', 'Silydianin', 'Silychristin'],
    sourceAttribution: ['Curated fallback monograph'],
    regionTags: ['Mediterranean', 'Dry temperate zones'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Silybum_marianum_001.JPG/640px-Silybum_marianum_001.JPG'
  },
  {
    slug: 'hibiscus-sabdariffa',
    commonName: 'Hibiscus',
    botanicalName: 'Hibiscus sabdariffa',
    family: 'Malvaceae',
    synonyms: ['Roselle'],
    description:
      'A tart crimson calyx herb used in refreshing teas for cardiovascular and metabolic wellness traditions.',
    summary:
      'A tangy antioxidant-rich tea herb used for hydration, cardiovascular support, and summer formulas.',
    distribution: 'Cultivated in tropical and subtropical regions across Africa, Asia, and the Americas.',
    habitat: 'Warm cultivated fields and subtropical garden environments.',
    medicinalProperties: [
      'Traditionally used in cooling tea preparations for circulation and heat patterns',
      'Commonly included in tart nutritive beverage blends',
      'Used in cardiovascular wellness traditions with lifestyle support'
    ],
    medicinalActions: ['Refrigerant', 'Antioxidant', 'Mild diuretic'],
    bodySystems: ['Cardiovascular', 'Urinary', 'Digestive'],
    preparations: ['Infusion (calyx)', 'Syrup', 'Iced tea decoction'],
    safetyCategory: 'General Caution',
    safetySummary: 'Tea-level use is typically gentle; monitor concentrated use alongside blood-pressure and glucose therapies.',
    safetyNotes:
      'Review concentrated intake with antihypertensive or glucose-lowering medications. Use care in very low blood-pressure constitutions.',
    chemistryNotes: 'Rich in anthocyanins, organic acids, and polyphenols.',
    chemistrySources: ['Curated fallback monograph'],
    activeCompounds: ['Delphinidin derivatives', 'Hibiscus acid', 'Protocatechuic acid'],
    sourceAttribution: ['Curated fallback monograph'],
    regionTags: ['Tropical cultivation', 'Subtropical gardens'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Roselle_Hibiscus_sabdariffa.jpg/640px-Roselle_Hibiscus_sabdariffa.jpg'
  },
  {
    slug: 'thymus-vulgaris',
    commonName: 'Thyme',
    botanicalName: 'Thymus vulgaris',
    family: 'Lamiaceae',
    synonyms: ['Garden Thyme'],
    description:
      'A fragrant Mediterranean culinary herb with antimicrobial and respiratory traditional uses.',
    summary:
      'A warming aromatic herb used for digestion, seasonal respiratory support, and culinary-medicinal preparations.',
    distribution: 'Native to the Mediterranean and cultivated worldwide in temperate gardens.',
    habitat: 'Dry sunny slopes, rocky soils, and cultivated herb beds.',
    medicinalProperties: [
      'Traditionally used in steam and tea formulas for upper respiratory comfort',
      'Aromatic oils support post-meal digestive ease in culinary doses',
      'Commonly used as a food-level antimicrobial kitchen herb'
    ],
    medicinalActions: ['Aromatic', 'Antimicrobial', 'Expectorant'],
    bodySystems: ['Respiratory', 'Digestive', 'Immune'],
    preparations: ['Infusion', 'Steam inhalation', 'Culinary use'],
    safetyCategory: 'General Caution',
    safetySummary: 'Culinary use is broadly safe; concentrated essential oil use requires careful dilution.',
    safetyNotes:
      'Avoid internal use of concentrated essential oil without professional supervision. Patch-test topical essential-oil products.',
    chemistryNotes: 'Volatile oils include thymol and carvacrol.',
    chemistrySources: ['Curated fallback monograph'],
    activeCompounds: ['Thymol', 'Carvacrol', 'Rosmarinic acid'],
    sourceAttribution: ['Curated fallback monograph'],
    regionTags: ['Mediterranean', 'Cultivated gardens', 'Pacific Northwest cultivation'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Thymus_vulgaris.jpeg/640px-Thymus_vulgaris.jpeg'
  },
  {
    slug: 'salvia-officinalis',
    commonName: 'Sage',
    botanicalName: 'Salvia officinalis',
    family: 'Lamiaceae',
    synonyms: ['Garden Sage'],
    description:
      'A resinous aromatic herb used for digestive tone, throat comfort, and culinary-medical crossover practice.',
    summary:
      'A classical aromatic astringent herb used in tea, gargle, and culinary formulations.',
    distribution: 'Native to the Mediterranean and cultivated globally in temperate climates.',
    habitat: 'Dry sunny gardens, rocky slopes, and Mediterranean-style landscapes.',
    medicinalProperties: [
      'Traditionally used as a warm gargle herb for throat and oral tissue support',
      'Bitter-aromatic profile supports post-meal digestive tone',
      'Used in women\'s health traditions with practitioner guidance'
    ],
    medicinalActions: ['Astringent', 'Aromatic bitter', 'Antimicrobial'],
    bodySystems: ['Digestive', 'Respiratory', 'Oral'],
    preparations: ['Infusion', 'Gargle', 'Tincture'],
    safetyCategory: 'General Caution',
    safetySummary: 'Tea-level use is generally safe; high-dose or essential oil preparations require professional caution.',
    safetyNotes:
      'Avoid high-dose prolonged use and concentrated essential oil internal use. Traditionally limited during lactation in concentrated forms.',
    chemistryNotes: 'Contains rosmarinic acid and volatile oils including thujone-related constituents.',
    chemistrySources: ['Curated fallback monograph'],
    activeCompounds: ['Rosmarinic acid', 'Carnosic acid', 'Thujone'],
    sourceAttribution: ['Curated fallback monograph'],
    regionTags: ['Mediterranean', 'Cultivated gardens'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Salvia_officinalis_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-128.jpg/640px-Salvia_officinalis_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-128.jpg'
  },
  {
    slug: 'glycyrrhiza-glabra',
    commonName: 'Licorice',
    botanicalName: 'Glycyrrhiza glabra',
    family: 'Fabaceae',
    synonyms: ['Liquorice'],
    description:
      'A sweet demulcent root widely used in Western, Chinese, and Ayurvedic traditions as a harmonizing formula herb.',
    summary:
      'A sweet moistening adaptogenic-demulcent root used for respiratory, digestive, and adrenal-supportive formulas.',
    distribution: 'Native to parts of Eurasia and cultivated in dry temperate to subtropical agricultural regions.',
    habitat: 'Cultivated fields with deep fertile soils and warm seasonal climates.',
    medicinalProperties: [
      'Traditionally used to soothe irritated mucosal tissue in respiratory and digestive formulas',
      'Often employed as a harmonizing herb to moderate stronger formulas',
      'Discussed in endocrine and stress-related constitutional support traditions'
    ],
    medicinalActions: ['Demulcent', 'Adaptogenic', 'Anti-inflammatory'],
    bodySystems: ['Respiratory', 'Digestive', 'Endocrine'],
    preparations: ['Decoction', 'Powder', 'Tincture'],
    safetyCategory: 'Moderate Caution',
    safetySummary: 'Not appropriate for long high-dose use in hypertension, edema, or certain cardiac and renal conditions.',
    safetyNotes:
      'Glycyrrhizin-containing licorice can raise blood pressure and affect potassium balance with prolonged high-dose use. Prefer practitioner guidance for long-term protocols.',
    chemistryNotes: 'Contains triterpenoid saponins including glycyrrhizin and multiple flavonoids.',
    chemistrySources: ['Curated fallback monograph'],
    activeCompounds: ['Glycyrrhizin', 'Liquiritigenin', 'Glabridin'],
    sourceAttribution: ['Curated fallback monograph'],
    regionTags: ['Eurasia', 'Cultivated medicinal farms'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Glycyrrhiza_glabra_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-065.jpg/640px-Glycyrrhiza_glabra_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-065.jpg'
  },
  {
    slug: 'rubus-idaeus',
    commonName: 'Raspberry Leaf',
    botanicalName: 'Rubus idaeus',
    family: 'Rosaceae',
    synonyms: ['Red Raspberry Leaf'],
    description:
      'Astringent leaf from red raspberry traditionally used in nutritive women\'s wellness and digestive tea blends.',
    summary:
      'A gentle astringent nutritive leaf herb used in mineral tea blends and reproductive wellness education.',
    distribution: 'Native to Europe and northern Asia; related species cultivated and naturalized across North America.',
    habitat: 'Woodland edges, hedgerows, montane clearings, and cultivated berry gardens.',
    medicinalProperties: [
      'Traditionally used as a uterine-toning herb in practitioner-guided reproductive support',
      'Frequently included in balanced mineral and astringent tea formulas',
      'Used as a mild digestive astringent in loose-stool patterns'
    ],
    medicinalActions: ['Astringent', 'Nutritive', 'Uterine tonic (traditional)'],
    bodySystems: ['Digestive', 'Reproductive'],
    preparations: ['Infusion', 'Tincture', 'Tea blend'],
    safetyCategory: 'General Caution',
    safetySummary: 'Generally tea-friendly; concentrated use during pregnancy should follow practitioner guidance.',
    safetyNotes:
      'Commonly used in pregnancy tea traditions but timing and concentration are practitioner-guided. Monitor individual sensitivity.',
    chemistryNotes: 'Leaf constituents include tannins, flavonoids, and mineral content.',
    chemistrySources: ['Curated fallback monograph'],
    activeCompounds: ['Ellagitannins', 'Fragarine (traditional attribution)', 'Quercetin'],
    sourceAttribution: ['Curated fallback monograph'],
    regionTags: ['Temperate woodlands', 'Pacific Northwest', 'Cultivated gardens'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Rubus_idaeus_leaf.jpg/640px-Rubus_idaeus_leaf.jpg'
  },
  {
    slug: 'tilia-cordata',
    commonName: 'Linden',
    botanicalName: 'Tilia cordata',
    family: 'Malvaceae',
    synonyms: ['Lime Blossom', 'Littleleaf Linden'],
    description:
      'A fragrant flowering tree whose bracts and blossoms are used in gentle calming and seasonal tea traditions.',
    summary:
      'A gentle calming diaphoretic flower herb often used in evening and seasonal comfort teas.',
    distribution: 'Native to Europe and western Asia; cultivated widely in temperate landscapes.',
    habitat: 'Temperate deciduous forests, urban plantings, and cultivated parkland.',
    medicinalProperties: [
      'Traditionally used in relaxing evening teas with aromatic nervines',
      'Frequently included in seasonal formulas for warming diaphoretic support',
      'Mucilage content contributes to throat-soothing tea blends'
    ],
    medicinalActions: ['Nervine', 'Diaphoretic', 'Demulcent'],
    bodySystems: ['Nervous', 'Respiratory'],
    preparations: ['Infusion', 'Tea blend', 'Tincture'],
    preparationReferences: ['calming-evening-tea'],
    safetyCategory: 'Generally Well Tolerated',
    safetySummary: 'Generally gentle and tea-friendly for most users when cleanly sourced.',
    safetyNotes: 'Use cleanly dried flowers and avoid contaminated urban harvest sources.',
    chemistryNotes: 'Contains flavonoids, mucilage, and volatile aromatic constituents.',
    chemistrySources: ['Curated fallback monograph'],
    activeCompounds: ['Quercetin derivatives', 'Mucilage polysaccharides', 'Farnesol'],
    sourceAttribution: ['Curated fallback monograph'],
    regionTags: ['Temperate regions', 'Cultivated urban forests'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Tilia_cordata_flowers.jpg/640px-Tilia_cordata_flowers.jpg'
  }
];
