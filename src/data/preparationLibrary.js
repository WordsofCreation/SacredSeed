import {
  formulaCategoryTaxonomy,
  formulaTagTaxonomy,
  preparationTypeTaxonomy
} from './preparationTaxonomy.js';

export const preparationGuides = [
  {
    id: 'nettle-infusion',
    title: 'Nettle Infusion',
    preparationType: preparationTypeTaxonomy.infusions,
    preparationDescription:
      'A mineral-rich long infusion designed for daily nutritive support and gentle tissue restoration.',
    methodSteps: [
      'Place dried nettle leaf in a quart jar and cover with just-boiled water.',
      'Seal and steep 4-8 hours (or overnight) for a deep mineral extraction.',
      'Strain through a fine mesh and store refrigerated.'
    ],
    ingredientHerbs: [{ herbSlug: 'urtica-dioica', herbPart: 'Leaf', preparationForm: 'Dried cut herb' }],
    ingredientAmounts: ['1 ounce dried nettle leaf per 1 quart water'],
    dosageGuidance: 'Traditionally consumed as 1-3 cups daily, adjusted to constitution and practitioner guidance.',
    safetyNotes: 'Review use with renal conditions or concurrent diuretic medications.',
    duration: 'Preparation time: 8 hours passive steep',
    storageNotes: 'Refrigerate and use within 24-36 hours.',
    preparationTags: [formulaTagTaxonomy.nutritive, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'yarrow-tea',
    title: 'Yarrow Tea',
    preparationType: preparationTypeTaxonomy.teas,
    preparationDescription:
      'Aromatic short infusion used in traditional practice for seasonal wellness and digestive comfort.',
    methodSteps: [
      'Steep yarrow aerial parts in freshly boiled water for 10-15 minutes.',
      'Keep covered while steeping to retain aromatic compounds.',
      'Strain and serve warm.'
    ],
    ingredientHerbs: [{ herbName: 'Yarrow', botanicalName: 'Achillea millefolium', herbPart: 'Aerial parts' }],
    ingredientAmounts: ['1-2 teaspoons dried yarrow per 8 ounces water'],
    dosageGuidance: 'Commonly used as 1 cup up to 3 times daily for short-term protocols.',
    safetyNotes: 'Avoid in known Asteraceae sensitivity without professional guidance.',
    duration: 'Preparation time: 15 minutes',
    storageNotes: 'Best consumed fresh within the same day.',
    preparationTags: [formulaTagTaxonomy.aromatic]
  },
  {
    id: 'oregon-grape-decoction',
    title: 'Oregon Grape Decoction',
    preparationType: preparationTypeTaxonomy.decoctions,
    preparationDescription:
      'A traditional bitter root decoction used in practitioner-guided digestive and skin support protocols.',
    methodSteps: [
      'Combine Oregon grape root with cold water in a covered pot.',
      'Bring to a gentle simmer and decoct 20-30 minutes.',
      'Strain and cool before dosing.'
    ],
    ingredientHerbs: [{ herbName: 'Oregon Grape', botanicalName: 'Mahonia aquifolium', herbPart: 'Root' }],
    ingredientAmounts: ['1 tablespoon dried root per 12 ounces water'],
    dosageGuidance: 'Traditionally taken in small bitter doses before meals as advised by practitioners.',
    safetyNotes: 'Not typically used during pregnancy; monitor in sensitive digestive constitutions.',
    duration: 'Preparation time: 30 minutes',
    storageNotes: 'Refrigerate and use within 48 hours.',
    preparationTags: [formulaTagTaxonomy.bitter]
  },
  {
    id: 'peppermint-digestive-tea',
    title: 'Peppermint Digestive Tea',
    preparationType: preparationTypeTaxonomy.teas,
    preparationDescription:
      'A simple aromatic tea traditionally used after meals to ease occasional digestive tension.',
    methodSteps: [
      'Place dried peppermint leaf in a mug or teapot and add freshly boiled water.',
      'Cover and steep for 8-10 minutes to preserve volatile oils.',
      'Strain and sip warm after meals.'
    ],
    ingredientHerbs: [{ herbName: 'Peppermint', botanicalName: 'Mentha × piperita', herbPart: 'Leaf' }],
    ingredientAmounts: ['1 tablespoon dried peppermint leaf per 8 ounces water'],
    dosageGuidance: 'Traditionally enjoyed as 1 cup after meals, up to 3 cups daily.',
    safetyNotes: 'Use caution with active reflux symptoms, as mint may aggravate some individuals.',
    duration: 'Preparation time: 10 minutes',
    storageNotes: 'Best consumed fresh; refrigerate leftovers and use within 24 hours.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'ginger-honey-decoction',
    title: 'Ginger Honey Decoction',
    preparationType: preparationTypeTaxonomy.decoctions,
    preparationDescription:
      'A warming kitchen remedy that combines fresh ginger decoction with honey once cooled to sipping temperature.',
    methodSteps: [
      'Slice fresh ginger and add to cold water in a small pot.',
      'Bring to a gentle simmer and cook 15-20 minutes.',
      'Strain into a mug, cool briefly, then stir in honey to taste.'
    ],
    ingredientHerbs: [{ herbName: 'Ginger', botanicalName: 'Zingiber officinale', herbPart: 'Rhizome' }],
    ingredientAmounts: ['2 tablespoons sliced fresh ginger per 12 ounces water', '1-2 teaspoons honey (optional)'],
    dosageGuidance: 'Use as 1 warm cup as needed for occasional cold-weather discomfort.',
    safetyNotes: 'Review concentrated ginger use when taking anticoagulants or before surgery.',
    duration: 'Preparation time: 20 minutes',
    storageNotes: 'Refrigerate strained decoction up to 48 hours; add honey only when serving.',
    preparationTags: [formulaTagTaxonomy.warming, formulaTagTaxonomy.aromatic]
  },
  {
    id: 'marshmallow-cold-infusion',
    title: 'Marshmallow Root Cold Infusion',
    preparationType: preparationTypeTaxonomy.infusions,
    preparationDescription:
      'A soothing cold infusion prepared overnight to extract mucilage for throat and digestive demulcent support.',
    methodSteps: [
      'Add cut and sifted marshmallow root to a jar of cool water.',
      'Cover and steep 6-8 hours (or overnight), shaking once or twice.',
      'Strain through a fine mesh or cloth and sip cool or at room temperature.'
    ],
    ingredientHerbs: [{ herbName: 'Marshmallow', botanicalName: 'Althaea officinalis', herbPart: 'Root' }],
    ingredientAmounts: ['1 tablespoon dried marshmallow root per 12 ounces cool water'],
    dosageGuidance: 'Commonly consumed as 1 cup up to 2 times daily for short-term soothing support.',
    safetyNotes: 'Separate from oral medications by at least 2 hours due to potential absorption effects.',
    duration: 'Preparation time: 8 hours passive steep',
    storageNotes: 'Refrigerate and use within 24 hours.',
    preparationTags: [formulaTagTaxonomy.demulcent, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'holy-basil-citrus-tea',
    title: 'Holy Basil Citrus Tea',
    preparationType: preparationTypeTaxonomy.teas,
    preparationDescription:
      'A bright aromatic tea with tulsi and citrus peel that works well as an uplifting afternoon reset.',
    methodSteps: [
      'Combine holy basil leaf and a small strip of dried citrus peel in a teapot.',
      'Pour just-boiled water over the herbs and steep covered for 8-10 minutes.',
      'Strain, then add a squeeze of fresh lemon if desired.'
    ],
    ingredientHerbs: [
      { herbName: 'Holy Basil', botanicalName: 'Ocimum tenuiflorum', herbPart: 'Leaf' },
      { herbName: 'Orange Peel', botanicalName: 'Citrus sinensis', herbPart: 'Peel' }
    ],
    ingredientAmounts: ['1 tablespoon dried holy basil leaf', '1 teaspoon dried orange peel', '10 ounces hot water'],
    dosageGuidance: 'Traditionally enjoyed as 1 cup once or twice daily.',
    safetyNotes: 'Use practitioner guidance for concentrated tulsi use alongside blood-sugar medications.',
    duration: 'Preparation time: 10 minutes',
    storageNotes: 'Best served fresh; refrigerate leftovers and use within 24 hours.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'hibiscus-rosehip-cooler',
    title: 'Hibiscus Rosehip Cooler',
    preparationType: preparationTypeTaxonomy.infusions,
    preparationDescription:
      'A tart ruby infusion that can be chilled for warm-weather hydration and seasonal antioxidant support.',
    methodSteps: [
      'Add hibiscus and rosehip to a heat-safe jar and cover with hot water.',
      'Steep covered for 20 minutes, then strain thoroughly.',
      'Cool to room temperature and refrigerate; serve over ice if desired.'
    ],
    ingredientHerbs: [
      { herbName: 'Hibiscus', botanicalName: 'Hibiscus sabdariffa', herbPart: 'Calyx' },
      { herbName: 'Rosehip', botanicalName: 'Rosa canina', herbPart: 'Fruit' }
    ],
    ingredientAmounts: ['1 tablespoon hibiscus', '1 tablespoon rosehip', '16 ounces hot water'],
    dosageGuidance: 'Use as 1 cup up to 2 times daily as a refreshing herbal beverage.',
    safetyNotes: 'Review regular hibiscus intake with clinicians when using blood-pressure medication.',
    duration: 'Preparation time: 25 minutes including cooling',
    storageNotes: 'Refrigerate for up to 48 hours in a sealed glass jar.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'cinnamon-clove-winter-decoction',
    title: 'Cinnamon Clove Winter Decoction',
    preparationType: preparationTypeTaxonomy.decoctions,
    preparationDescription:
      'A fragrant warming decoction of culinary spices traditionally used during cold, damp weather routines.',
    methodSteps: [
      'Add cinnamon stick and cloves to cold water in a small covered saucepan.',
      'Bring to a gentle simmer and decoct for 15-20 minutes.',
      'Strain, cool slightly, and serve plain or with a small amount of honey.'
    ],
    ingredientHerbs: [
      { herbName: 'Cinnamon', botanicalName: 'Cinnamomum verum', herbPart: 'Bark' },
      { herbName: 'Clove', botanicalName: 'Syzygium aromaticum', herbPart: 'Flower bud' }
    ],
    ingredientAmounts: ['1 small cinnamon stick', '3-4 whole cloves', '12 ounces water'],
    dosageGuidance: 'Traditionally prepared as 1 warm cup once daily for short seasonal use windows.',
    safetyNotes: 'Use caution with concentrated cinnamon or clove in people taking anticoagulants or with gastric irritation.',
    duration: 'Preparation time: 20 minutes',
    storageNotes: 'Best consumed fresh; refrigerate leftovers and use within 24 hours.',
    preparationTags: [formulaTagTaxonomy.warming, formulaTagTaxonomy.aromatic, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'astragalus-root-decoction',
    title: 'Astragalus Root Decoction',
    preparationType: preparationTypeTaxonomy.decoctions,
    preparationDescription:
      'A classic long-simmer decoction used in traditional practice as a food-like tonic in recovery and resilience seasons.',
    methodSteps: [
      'Place sliced astragalus root in a pot with cold water.',
      'Bring to a low simmer and decoct gently for 30-40 minutes.',
      'Strain and serve warm, or reserve as a broth base.'
    ],
    ingredientHerbs: [{ herbName: 'Astragalus', botanicalName: 'Astragalus membranaceus', herbPart: 'Root' }],
    ingredientAmounts: ['1 ounce sliced dried astragalus root', '1 quart water'],
    dosageGuidance: 'Commonly used as 1 cup daily or added to soups during convalescent periods.',
    safetyNotes: 'Use practitioner review with autoimmune conditions or immunosuppressive therapies.',
    duration: 'Preparation time: 40 minutes',
    storageNotes: 'Refrigerate strained decoction and use within 48 hours.',
    preparationTags: [formulaTagTaxonomy.nutritive, formulaTagTaxonomy.warming]
  },
  {
    id: 'licorice-cinnamon-throat-decoction',
    title: 'Licorice Cinnamon Throat Decoction',
    preparationType: preparationTypeTaxonomy.decoctions,
    preparationDescription:
      'A sweet-spiced root decoction traditionally sipped for temporary dry throat discomfort during seasonal stress.',
    methodSteps: [
      'Combine licorice root and cinnamon in cool water and cover.',
      'Bring to a gentle simmer for 20 minutes.',
      'Strain, cool to sipping temperature, and enjoy warm.'
    ],
    ingredientHerbs: [
      { herbName: 'Licorice', botanicalName: 'Glycyrrhiza glabra', herbPart: 'Root' },
      { herbName: 'Cinnamon', botanicalName: 'Cinnamomum verum', herbPart: 'Bark' }
    ],
    ingredientAmounts: ['1 tablespoon cut licorice root', '1/2 small cinnamon stick', '14 ounces water'],
    dosageGuidance: 'Typically used as 1/2 to 1 cup once or twice daily for short durations.',
    safetyNotes: 'Avoid prolonged or high-dose licorice in hypertension, kidney disease, or during pregnancy unless supervised.',
    duration: 'Preparation time: 25 minutes',
    storageNotes: 'Refrigerate and use within 36-48 hours.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.warming]
  },
  {
    id: 'elderberry-spice-syrup',
    title: 'Elderberry Spice Syrup',
    preparationType: preparationTypeTaxonomy.syrups,
    preparationDescription:
      'A kitchen-style syrup that combines elderberry decoction with warming spices and honey for seasonal use.',
    methodSteps: [
      'Simmer dried elderberries, cinnamon, and ginger in water for 30-35 minutes until volume reduces by about half.',
      'Strain well and allow the liquid to cool until warm rather than hot.',
      'Whisk in honey, bottle, and refrigerate immediately.'
    ],
    ingredientHerbs: [
      { herbName: 'Elderberry', botanicalName: 'Sambucus nigra', herbPart: 'Berry' },
      { herbName: 'Cinnamon', botanicalName: 'Cinnamomum verum', herbPart: 'Bark' },
      { herbName: 'Ginger', botanicalName: 'Zingiber officinale', herbPart: 'Rhizome' }
    ],
    ingredientAmounts: ['1 cup dried elderberry', '1 cinnamon stick', '1 tablespoon sliced ginger', '3 cups water', '1 cup honey'],
    dosageGuidance: 'Commonly used as 1 teaspoon to 1 tablespoon as needed during seasonal exposure windows.',
    safetyNotes: 'Use caution with blood sugar concerns and avoid giving honey-containing syrups to children under one year old.',
    duration: 'Preparation time: 45 minutes',
    storageNotes: 'Refrigerate and use within 3-4 weeks; discard if odor or texture changes.',
    preparationTags: [formulaTagTaxonomy.warming, formulaTagTaxonomy.aromatic]
  },
  {
    id: 'calendula-infused-oil',
    title: 'Calendula Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription:
      'A gentle topical infusion prepared with dried calendula petals in oil for skin-soothing applications.',
    methodSteps: [
      'Fill a dry glass jar halfway with dried calendula flowers and fully cover with olive oil.',
      'Cap and infuse in a warm, dark place for 2-4 weeks, shaking every 1-2 days.',
      'Strain through layered cheesecloth and bottle in amber glass.'
    ],
    ingredientHerbs: [{ herbName: 'Calendula', botanicalName: 'Calendula officinalis', herbPart: 'Flower' }],
    ingredientAmounts: ['1 part dried calendula flowers', '4-5 parts olive oil (by volume)'],
    dosageGuidance: 'Apply a small amount topically to intact skin up to 2-3 times daily.',
    safetyNotes: 'External use only unless professionally directed; discontinue with any skin irritation.',
    duration: 'Preparation time: 2-4 weeks infusion',
    storageNotes: 'Store in a cool, dark cabinet and use within 9-12 months.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'arnica-infused-oil',
    title: 'Arnica Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription:
      'A traditional external-use oil made with dried arnica flowers for post-activity body care and massage blends.',
    methodSteps: [
      'Fill a dry jar one-third to halfway with dried arnica flowers and cover completely with carrier oil.',
      'Infuse in a dark cabinet for 3-4 weeks, shaking the jar every day or two.',
      'Strain through fine cloth, bottle, and label clearly for external use only.'
    ],
    ingredientHerbs: [{ herbName: 'Arnica', botanicalName: 'Arnica montana', herbPart: 'Flower' }],
    ingredientAmounts: ['1 part dried arnica flowers', '4-5 parts olive or sunflower oil'],
    dosageGuidance: 'Apply topically in a thin layer to intact skin as needed after exertion.',
    safetyNotes: 'External use only; do not apply to broken skin or use internally.',
    duration: 'Preparation time: 3-4 weeks infusion',
    storageNotes: 'Store away from heat and light and use within 9-12 months.',
    preparationTags: [formulaTagTaxonomy.warming, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'st-johns-wort-infused-oil',
    title: "St. John\'s Wort Infused Oil",
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription:
      'A bright red traditional oil created from flowering tops and used externally for nerve-rich tissue comfort.',
    methodSteps: [
      'Pack fresh wilted St. John\'s wort flowering tops loosely into a clean, dry jar.',
      'Cover fully with olive oil and ensure all plant material stays submerged.',
      'Infuse 3-6 weeks in a warm location, then strain and bottle in amber glass.'
    ],
    ingredientHerbs: [{ herbName: "St. John\'s Wort", botanicalName: 'Hypericum perforatum', herbPart: 'Flowering tops' }],
    ingredientAmounts: ['1 part fresh wilted flowering tops', '2-3 parts olive oil'],
    dosageGuidance: 'Massage a small amount onto intact skin up to twice daily.',
    safetyNotes: 'External use only; exposed skin may become photosensitive in some individuals.',
    duration: 'Preparation time: 3-6 weeks infusion',
    storageNotes: 'Keep tightly sealed in a dark place and use within 1 year.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.warming]
  },
  {
    id: 'plantain-infused-oil',
    title: 'Plantain Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A soothing leaf infusion often prepared for dry, weather-exposed skin care routines.',
    methodSteps: [
      'Dry plantain leaves thoroughly until crisp to minimize moisture content.',
      'Cover leaves with olive oil in a dry jar and infuse for 2-4 weeks, shaking regularly.',
      'Strain, bottle, and label with herb, date, and intended external use.'
    ],
    ingredientHerbs: [{ herbName: 'Plantain', botanicalName: 'Plantago major', herbPart: 'Leaf' }],
    ingredientAmounts: ['1 part dried plantain leaf', '4 parts olive oil'],
    dosageGuidance: 'Apply to intact skin 1-3 times daily as needed.',
    safetyNotes: 'Discontinue if irritation occurs; external use only.',
    duration: 'Preparation time: 2-4 weeks infusion',
    storageNotes: 'Store in a cool dark cabinet and use within 9-12 months.',
    preparationTags: [formulaTagTaxonomy.nutritive, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'lavender-infused-oil',
    title: 'Lavender Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A fragrant topical oil used in evening self-care and gentle skin-softening preparations.',
    methodSteps: [
      'Place dried lavender flowers in a clean glass jar and cover fully with carrier oil.',
      'Infuse for 2-3 weeks in a warm, dark spot, shaking the jar every couple of days.',
      'Strain carefully to remove all flower debris and bottle in amber glass.'
    ],
    ingredientHerbs: [{ herbName: 'Lavender', botanicalName: 'Lavandula angustifolia', herbPart: 'Flower' }],
    ingredientAmounts: ['1 part dried lavender flowers', '5 parts jojoba or olive oil'],
    dosageGuidance: 'Use a few drops topically for massage or dry skin support.',
    safetyNotes: 'External use only; patch-test on sensitive skin.',
    duration: 'Preparation time: 2-3 weeks infusion',
    storageNotes: 'Store capped away from heat and use within 9 months.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'chickweed-infused-oil',
    title: 'Chickweed Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A cooling leafy oil traditionally prepared for temporarily itchy, dry skin states.',
    methodSteps: [
      'Allow fresh chickweed to wilt 12-24 hours before use to reduce moisture.',
      'Place wilted herb in a jar, cover fully with oil, and infuse 2-3 weeks with regular agitation.',
      'Strain thoroughly and bottle only clear, moisture-free oil.'
    ],
    ingredientHerbs: [{ herbName: 'Chickweed', botanicalName: 'Stellaria media', herbPart: 'Aerial parts' }],
    ingredientAmounts: ['1 part fresh wilted chickweed', '2-3 parts olive oil'],
    dosageGuidance: 'Apply externally to intact skin up to 2 times daily.',
    safetyNotes: 'External use only; avoid introducing moisture to prevent rancidity.',
    duration: 'Preparation time: 2-3 weeks infusion',
    storageNotes: 'Use within 6-9 months and discard if cloudiness or odor develops.',
    preparationTags: [formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'rose-infused-oil',
    title: 'Rose Petal Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A floral skin oil prepared with dried petals for complexion and body oil blends.',
    methodSteps: [
      'Add fully dried rose petals to a sanitized dry jar.',
      'Cover with jojoba or almond oil and infuse in a dark place for 2-4 weeks.',
      'Strain through fine cloth and store in dark glass dropper bottles.'
    ],
    ingredientHerbs: [{ herbName: 'Rose', botanicalName: 'Rosa damascena', herbPart: 'Petal' }],
    ingredientAmounts: ['1 part dried rose petals', '5 parts jojoba or almond oil'],
    dosageGuidance: 'Apply several drops to clean, intact skin as desired.',
    safetyNotes: 'External use only; confirm no sensitivity to rose family plants.',
    duration: 'Preparation time: 2-4 weeks infusion',
    storageNotes: 'Store cool and dark and use within 9-12 months.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'chamomile-infused-oil',
    title: 'Chamomile Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A mild aromatic oil frequently used in calming massage and bedtime body oil preparations.',
    methodSteps: [
      'Place dried chamomile flowers into a clean, dry infusion jar.',
      'Cover completely with oil and infuse for 2-3 weeks, shaking every day or two.',
      'Strain and rebottle in amber glass to protect aroma and quality.'
    ],
    ingredientHerbs: [{ herbName: 'Chamomile', botanicalName: 'Matricaria chamomilla', herbPart: 'Flower' }],
    ingredientAmounts: ['1 part dried chamomile flowers', '4-5 parts olive or sunflower oil'],
    dosageGuidance: 'Massage a small amount onto intact skin once or twice daily as needed.',
    safetyNotes: 'External use only; avoid if known Asteraceae sensitivity occurs on skin.',
    duration: 'Preparation time: 2-3 weeks infusion',
    storageNotes: 'Store in a dark cabinet and use within 9 months.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'comfrey-leaf-infused-oil',
    title: 'Comfrey Leaf Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A traditional external-use leaf oil prepared for short-term tissue-soothing applications.',
    methodSteps: [
      'Dry comfrey leaf completely until brittle before combining with oil.',
      'Infuse dried leaf in olive oil for 3-4 weeks in a dark location.',
      'Strain very well and label for external use only.'
    ],
    ingredientHerbs: [{ herbName: 'Comfrey', botanicalName: 'Symphytum officinale', herbPart: 'Leaf' }],
    ingredientAmounts: ['1 part dried comfrey leaf', '4 parts olive oil'],
    dosageGuidance: 'Apply sparingly to intact skin for short-term external care.',
    safetyNotes: 'External use only; avoid broken skin and prolonged continuous use.',
    duration: 'Preparation time: 3-4 weeks infusion',
    storageNotes: 'Store cool, dark, and dry; use within 9 months.',
    preparationTags: [formulaTagTaxonomy.nutritive, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'mullein-ear-oil',
    title: 'Mullein Garlic Ear Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription:
      'A folk-style infused oil using mullein flower and garlic, traditionally warmed and used externally around ear care routines.',
    methodSteps: [
      'Add dried mullein flowers and lightly crushed garlic to a dry jar and cover with oil.',
      'Infuse gently for 1-2 weeks in a warm dark area, then strain with extra care.',
      'Bottle and label clearly with date and external-use instructions.'
    ],
    ingredientHerbs: [
      { herbName: 'Mullein', botanicalName: 'Verbascum thapsus', herbPart: 'Flower' },
      { herbName: 'Garlic', botanicalName: 'Allium sativum', herbPart: 'Bulb' }
    ],
    ingredientAmounts: ['1 tablespoon dried mullein flowers', '1 small crushed garlic clove', '1/2 cup olive oil'],
    dosageGuidance: 'For external topical use only unless directed by a qualified practitioner.',
    safetyNotes: 'Do not use with suspected eardrum perforation; seek medical guidance for ear pain.',
    duration: 'Preparation time: 1-2 weeks infusion',
    storageNotes: 'Refrigerate and use within 1 month due to fresh garlic content.',
    preparationTags: [formulaTagTaxonomy.warming]
  },
  {
    id: 'lemon-balm-infused-oil',
    title: 'Lemon Balm Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A light aromatic oil traditionally prepared for relaxing chest and neck massage.',
    methodSteps: [
      'Use fully dried lemon balm leaf and place in a clean jar.',
      'Cover with oil and infuse for 2-3 weeks in a warm cabinet, shaking regularly.',
      'Strain and transfer to dark glass bottles.'
    ],
    ingredientHerbs: [{ herbName: 'Lemon Balm', botanicalName: 'Melissa officinalis', herbPart: 'Leaf' }],
    ingredientAmounts: ['1 part dried lemon balm', '5 parts olive oil'],
    dosageGuidance: 'Apply topically in a small amount once or twice daily as desired.',
    safetyNotes: 'External use only; patch-test if you have very sensitive skin.',
    duration: 'Preparation time: 2-3 weeks infusion',
    storageNotes: 'Store in cool darkness and use within 9 months.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'thyme-infused-oil',
    title: 'Thyme Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A strong aromatic oil used in diluted chest rub and steam-room body oil blends.',
    methodSteps: [
      'Place dried thyme aerial parts into a clean, dry jar.',
      'Cover with carrier oil and infuse for 2-3 weeks with frequent agitation.',
      'Strain and optionally blend 1:1 with plain oil before skin application.'
    ],
    ingredientHerbs: [{ herbName: 'Thyme', botanicalName: 'Thymus vulgaris', herbPart: 'Aerial parts' }],
    ingredientAmounts: ['1 part dried thyme', '5 parts olive oil'],
    dosageGuidance: 'Use sparingly and diluted on intact skin for topical aromatic support.',
    safetyNotes: 'External use only; may irritate sensitive skin if used undiluted.',
    duration: 'Preparation time: 2-3 weeks infusion',
    storageNotes: 'Store away from heat and sunlight; use within 9 months.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.warming]
  },
  {
    id: 'rosemary-infused-oil',
    title: 'Rosemary Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A stimulating scalp and muscle massage oil made from dried rosemary tops.',
    methodSteps: [
      'Add dried rosemary to a jar and cover fully with olive or grapeseed oil.',
      'Infuse for 2-4 weeks in a warm, dark location with periodic shaking.',
      'Strain and bottle; label for topical use.'
    ],
    ingredientHerbs: [{ herbName: 'Rosemary', botanicalName: 'Salvia rosmarinus', herbPart: 'Leaf' }],
    ingredientAmounts: ['1 part dried rosemary', '4-5 parts olive or grapeseed oil'],
    dosageGuidance: 'Massage into scalp or sore muscles in small amounts as needed.',
    safetyNotes: 'External use only; avoid contact with eyes and irritated skin.',
    duration: 'Preparation time: 2-4 weeks infusion',
    storageNotes: 'Keep tightly capped and use within 9-12 months.',
    preparationTags: [formulaTagTaxonomy.warming, formulaTagTaxonomy.aromatic]
  },
  {
    id: 'sage-infused-oil',
    title: 'Sage Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'An aromatic topical oil commonly prepared for massage blends during cool, damp weather.',
    methodSteps: [
      'Place dried sage leaf into a dry glass jar and cover with oil.',
      'Infuse for 2-3 weeks, shaking often to encourage even extraction.',
      'Strain, bottle, and label with date and herb name.'
    ],
    ingredientHerbs: [{ herbName: 'Sage', botanicalName: 'Salvia officinalis', herbPart: 'Leaf' }],
    ingredientAmounts: ['1 part dried sage leaf', '5 parts olive oil'],
    dosageGuidance: 'Apply externally in a diluted blend once daily or as needed.',
    safetyNotes: 'External use only; avoid on broken skin.',
    duration: 'Preparation time: 2-3 weeks infusion',
    storageNotes: 'Store cool and dark; use within 9 months.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.warming]
  },
  {
    id: 'yarrow-infused-oil',
    title: 'Yarrow Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A traditional wound-care adjunct oil for intact skin and massage after outdoor activity.',
    methodSteps: [
      'Fill a jar with dried yarrow flowering tops and cover fully with oil.',
      'Infuse 3 weeks in a dark location while shaking every 1-2 days.',
      'Strain thoroughly through fine cloth and bottle.'
    ],
    ingredientHerbs: [{ herbName: 'Yarrow', botanicalName: 'Achillea millefolium', herbPart: 'Flowering tops' }],
    ingredientAmounts: ['1 part dried yarrow', '4 parts olive oil'],
    dosageGuidance: 'Apply externally to intact skin up to twice daily.',
    safetyNotes: 'External use only; avoid with known Asteraceae skin sensitivity.',
    duration: 'Preparation time: 3 weeks infusion',
    storageNotes: 'Store in amber glass and use within 9-12 months.',
    preparationTags: [formulaTagTaxonomy.aromatic]
  },
  {
    id: 'violet-leaf-infused-oil',
    title: 'Violet Leaf Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A cooling spring herb oil prepared from dried violet leaf for gentle topical use.',
    methodSteps: [
      'Dry violet leaves fully, then crumble loosely into an infusion jar.',
      'Cover with carrier oil and infuse for 2-3 weeks in a dark cupboard.',
      'Strain and store in sterilized amber bottles.'
    ],
    ingredientHerbs: [{ herbName: 'Violet', botanicalName: 'Viola odorata', herbPart: 'Leaf' }],
    ingredientAmounts: ['1 part dried violet leaf', '5 parts sunflower or olive oil'],
    dosageGuidance: 'Use externally in a thin layer on intact skin as needed.',
    safetyNotes: 'External use only; discontinue if irritation appears.',
    duration: 'Preparation time: 2-3 weeks infusion',
    storageNotes: 'Store away from direct light and use within 9 months.',
    preparationTags: [formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'hellichrysum-infused-oil',
    title: 'Helichrysum Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A floral topical infusion often included in restorative facial and body oils.',
    methodSteps: [
      'Place dried helichrysum flowers into a clean jar.',
      'Cover fully with jojoba or olive oil and infuse for 3-4 weeks.',
      'Strain and bottle in small amber dropper bottles.'
    ],
    ingredientHerbs: [{ herbName: 'Helichrysum', botanicalName: 'Helichrysum italicum', herbPart: 'Flower' }],
    ingredientAmounts: ['1 part dried helichrysum flowers', '5 parts jojoba oil'],
    dosageGuidance: 'Apply several drops externally once daily or as desired.',
    safetyNotes: 'External use only; patch-test before regular use.',
    duration: 'Preparation time: 3-4 weeks infusion',
    storageNotes: 'Store in dark glass; use within 9-12 months.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'holy-basil-infused-oil',
    title: 'Holy Basil Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'An aromatic tulsi oil prepared for chest, neck, and shoulder massage during stress-heavy periods.',
    methodSteps: [
      'Add dried holy basil aerial parts to a dry jar and cover with oil.',
      'Infuse 2-3 weeks, shaking often to keep plant material submerged.',
      'Strain and bottle in light-protected containers.'
    ],
    ingredientHerbs: [{ herbName: 'Holy Basil', botanicalName: 'Ocimum tenuiflorum', herbPart: 'Aerial parts' }],
    ingredientAmounts: ['1 part dried tulsi', '5 parts sesame or olive oil'],
    dosageGuidance: 'Massage externally in small amounts up to twice daily.',
    safetyNotes: 'External use only; avoid if skin is irritated or freshly shaved.',
    duration: 'Preparation time: 2-3 weeks infusion',
    storageNotes: 'Store cool and dark; use within 9 months.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.warming]
  },
  {
    id: 'ginger-infused-oil',
    title: 'Ginger Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A warming topical oil often used in winter massage blends and abdominal comfort routines.',
    methodSteps: [
      'Use dried ginger slices or powdered ginger and combine with oil in a dry jar.',
      'Infuse for 10-14 days in a warm cabinet, shaking daily.',
      'Strain to clarity and bottle for external use.'
    ],
    ingredientHerbs: [{ herbName: 'Ginger', botanicalName: 'Zingiber officinale', herbPart: 'Rhizome' }],
    ingredientAmounts: ['1 part dried sliced ginger', '6 parts sesame or olive oil'],
    dosageGuidance: 'Apply externally in a thin layer for warming topical support.',
    safetyNotes: 'External use only; may feel hot on sensitive skin.',
    duration: 'Preparation time: 10-14 days infusion',
    storageNotes: 'Store capped away from heat; use within 6-9 months.',
    preparationTags: [formulaTagTaxonomy.warming]
  },
  {
    id: 'peppermint-infused-oil',
    title: 'Peppermint Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A cooling aromatic oil typically used in diluted temple, neck, and foot massage blends.',
    methodSteps: [
      'Fill a jar with dried peppermint leaf and cover completely with carrier oil.',
      'Infuse for 2-3 weeks while shaking every 1-2 days.',
      'Strain thoroughly and blend with plain oil if a milder profile is desired.'
    ],
    ingredientHerbs: [{ herbName: 'Peppermint', botanicalName: 'Mentha × piperita', herbPart: 'Leaf' }],
    ingredientAmounts: ['1 part dried peppermint leaf', '5 parts jojoba or olive oil'],
    dosageGuidance: 'Apply externally in very small amounts, avoiding eyes and mucosa.',
    safetyNotes: 'External use only; avoid use on infants and very young children.',
    duration: 'Preparation time: 2-3 weeks infusion',
    storageNotes: 'Store in dark glass and use within 9 months.',
    preparationTags: [formulaTagTaxonomy.aromatic]
  },

  {
    id: 'mullein-infused-oil',
    title: 'Mullein Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A gentle floral oil commonly prepared for external ear and neck comfort routines.',
    methodSteps: [
      'Place fully dried mullein flowers in a dry glass jar and cover completely with olive oil.',
      'Infuse in a warm, dark cabinet for 2-3 weeks, shaking every day or two.',
      'Strain through fine cloth and store in labeled amber bottles.'
    ],
    ingredientHerbs: [{ herbName: 'Mullein', botanicalName: 'Verbascum thapsus', herbPart: 'Flower' }],
    ingredientAmounts: ['1 part dried mullein flowers', '5 parts olive oil'],
    dosageGuidance: 'Apply externally in small amounts to intact skin as needed.',
    safetyNotes: 'External use only; ensure flowers are fully strained to remove tiny hairs.',
    duration: 'Preparation time: 2-3 weeks infusion',
    storageNotes: 'Store cool and dark; use within 9 months.',
    preparationTags: [formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'lemon-peel-infused-oil',
    title: 'Lemon Peel Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A bright citrus topical oil used in uplifting massage blends.',
    methodSteps: [
      'Combine thoroughly dried lemon peel with carrier oil in a clean jar.',
      'Infuse 10-14 days in a dark cabinet, shaking daily.',
      'Strain and bottle away from direct light.'
    ],
    ingredientHerbs: [{ herbName: 'Lemon', botanicalName: 'Citrus limon', herbPart: 'Peel' }],
    ingredientAmounts: ['1 part dried lemon peel', '6 parts jojoba or olive oil'],
    dosageGuidance: 'Use externally in small diluted amounts during massage.',
    safetyNotes: 'External use only; avoid sun exposure on recently applied areas.',
    duration: 'Preparation time: 10-14 days infusion',
    storageNotes: 'Store sealed in dark glass and use within 6-9 months.',
    preparationTags: [formulaTagTaxonomy.aromatic]
  },
  {
    id: 'fennel-seed-infused-oil',
    title: 'Fennel Seed Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A mild aromatic oil traditionally used for gentle abdominal massage.',
    methodSteps: [
      'Lightly crush dried fennel seed and place in a dry jar.',
      'Cover with oil and infuse for 2 weeks, shaking daily.',
      'Strain and bottle for external use.'
    ],
    ingredientHerbs: [{ herbName: 'Fennel', botanicalName: 'Foeniculum vulgare', herbPart: 'Seed' }],
    ingredientAmounts: ['1 part crushed dried fennel seed', '6 parts sunflower oil'],
    dosageGuidance: 'Apply externally in a thin layer as needed.',
    safetyNotes: 'External use only; discontinue with skin sensitivity.',
    duration: 'Preparation time: 2 weeks infusion',
    storageNotes: 'Store in a cool cupboard and use within 9 months.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'rosemary-lavender-infused-oil',
    title: 'Rosemary Lavender Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A classic aromatic blend for scalp, neck, and shoulder massage rituals.',
    methodSteps: [
      'Add dried rosemary and lavender to a dry jar and cover with oil.',
      'Infuse for 2-3 weeks, shaking regularly.',
      'Strain thoroughly and bottle in amber glass.'
    ],
    ingredientHerbs: [
      { herbName: 'Rosemary', botanicalName: 'Salvia rosmarinus', herbPart: 'Leaf' },
      { herbName: 'Lavender', botanicalName: 'Lavandula angustifolia', herbPart: 'Flower' }
    ],
    ingredientAmounts: ['1 part dried rosemary', '1 part dried lavender', '8 parts olive oil'],
    dosageGuidance: 'Massage externally in small amounts up to once daily.',
    safetyNotes: 'External use only; avoid eyes and mucous membranes.',
    duration: 'Preparation time: 2-3 weeks infusion',
    storageNotes: 'Store dark and cool; use within 9-12 months.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.warming]
  },
  {
    id: 'bay-laurel-infused-oil',
    title: 'Bay Laurel Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A warming culinary-herb oil often used in topical winter body-care blends.',
    methodSteps: [
      'Crumble dried bay leaves and combine with oil in a dry jar.',
      'Infuse for 2-3 weeks in a warm cupboard, shaking often.',
      'Strain and bottle for external use.'
    ],
    ingredientHerbs: [{ herbName: 'Bay Laurel', botanicalName: 'Laurus nobilis', herbPart: 'Leaf' }],
    ingredientAmounts: ['1 part dried bay leaf', '6 parts olive oil'],
    dosageGuidance: 'Use externally in small quantities for massage.',
    safetyNotes: 'External use only; patch-test before frequent use.',
    duration: 'Preparation time: 2-3 weeks infusion',
    storageNotes: 'Store away from heat and use within 9 months.',
    preparationTags: [formulaTagTaxonomy.warming]
  },
  {
    id: 'cayenne-infused-oil',
    title: 'Cayenne Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A strongly warming topical infusion used in very diluted body oils.',
    methodSteps: [
      'Add dried cayenne flakes to carrier oil in a clean dry jar.',
      'Infuse 7-10 days, shaking daily.',
      'Strain carefully and clearly label for external diluted use.'
    ],
    ingredientHerbs: [{ herbName: 'Cayenne', botanicalName: 'Capsicum annuum', herbPart: 'Fruit' }],
    ingredientAmounts: ['1 part dried cayenne flakes', '10 parts olive oil'],
    dosageGuidance: 'Use externally only in highly diluted amounts.',
    safetyNotes: 'External use only; avoid sensitive skin, eyes, and broken skin.',
    duration: 'Preparation time: 7-10 days infusion',
    storageNotes: 'Store capped in dark glass; use within 6 months.',
    preparationTags: [formulaTagTaxonomy.warming]
  },
  {
    id: 'eucalyptus-infused-oil',
    title: 'Eucalyptus Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'An aromatic topical oil prepared for chest and shoulder massage blends.',
    methodSteps: [
      'Place dried eucalyptus leaf in a dry jar and cover fully with oil.',
      'Infuse for 2 weeks while shaking every 1-2 days.',
      'Strain and bottle in dark glass containers.'
    ],
    ingredientHerbs: [{ herbName: 'Eucalyptus', botanicalName: 'Eucalyptus globulus', herbPart: 'Leaf' }],
    ingredientAmounts: ['1 part dried eucalyptus leaf', '6 parts olive oil'],
    dosageGuidance: 'Apply externally in small diluted amounts.',
    safetyNotes: 'External use only; keep away from face of young children.',
    duration: 'Preparation time: 2 weeks infusion',
    storageNotes: 'Store cool and dark; use within 9 months.',
    preparationTags: [formulaTagTaxonomy.aromatic]
  },
  {
    id: 'juniper-berry-infused-oil',
    title: 'Juniper Berry Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A resinous aromatic oil often included in post-activity massage formulas.',
    methodSteps: [
      'Lightly crush dried juniper berries and place in a clean jar.',
      'Cover with carrier oil and infuse 2-3 weeks, shaking regularly.',
      'Strain well and bottle.'
    ],
    ingredientHerbs: [{ herbName: 'Juniper', botanicalName: 'Juniperus communis', herbPart: 'Berry' }],
    ingredientAmounts: ['1 part lightly crushed dried juniper berry', '6 parts olive oil'],
    dosageGuidance: 'Use externally in modest amounts for massage.',
    safetyNotes: 'External use only; avoid prolonged use on sensitive skin.',
    duration: 'Preparation time: 2-3 weeks infusion',
    storageNotes: 'Store in amber glass and use within 9 months.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.warming]
  },
  {
    id: 'motherwort-infused-oil',
    title: 'Motherwort Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A bitter-aromatic topical preparation for evening chest and shoulder routines.',
    methodSteps: [
      'Fill a jar halfway with dried motherwort aerial parts.',
      'Cover completely with oil and infuse for 2-3 weeks.',
      'Strain and bottle in dark containers.'
    ],
    ingredientHerbs: [{ herbName: 'Motherwort', botanicalName: 'Leonurus cardiaca', herbPart: 'Aerial parts' }],
    ingredientAmounts: ['1 part dried motherwort', '5 parts olive oil'],
    dosageGuidance: 'Apply externally in small amounts as desired.',
    safetyNotes: 'External use only; discontinue with irritation.',
    duration: 'Preparation time: 2-3 weeks infusion',
    storageNotes: 'Store away from sunlight and use within 9 months.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'mugwort-infused-oil',
    title: 'Mugwort Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A traditional aromatic oil for topical grounding and massage routines.',
    methodSteps: [
      'Add dried mugwort leaf to a dry jar and cover with oil.',
      'Infuse 2-3 weeks, shaking every couple of days.',
      'Strain and bottle clearly for external use.'
    ],
    ingredientHerbs: [{ herbName: 'Mugwort', botanicalName: 'Artemisia vulgaris', herbPart: 'Leaf' }],
    ingredientAmounts: ['1 part dried mugwort leaf', '5 parts sunflower oil'],
    dosageGuidance: 'Use externally in small topical amounts.',
    safetyNotes: 'External use only; avoid with known Asteraceae sensitivity.',
    duration: 'Preparation time: 2-3 weeks infusion',
    storageNotes: 'Store cool and dark; use within 9 months.',
    preparationTags: [formulaTagTaxonomy.aromatic]
  },
  {
    id: 'red-clover-infused-oil',
    title: 'Red Clover Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A mild floral topical oil for softening skin-care applications.',
    methodSteps: [
      'Use fully dried red clover blossoms in a clean, dry jar.',
      'Cover with carrier oil and infuse for 2-3 weeks.',
      'Strain through cloth and bottle.'
    ],
    ingredientHerbs: [{ herbName: 'Red Clover', botanicalName: 'Trifolium pratense', herbPart: 'Flower' }],
    ingredientAmounts: ['1 part dried red clover blossoms', '5 parts olive oil'],
    dosageGuidance: 'Apply externally to intact skin as needed.',
    safetyNotes: 'External use only; stop use with any irritation.',
    duration: 'Preparation time: 2-3 weeks infusion',
    storageNotes: 'Store in dark glass and use within 9 months.',
    preparationTags: [formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'linden-blossom-infused-oil',
    title: 'Linden Blossom Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A soft floral infusion often used in evening neck and shoulder massage oils.',
    methodSteps: [
      'Place dried linden blossoms in a dry jar and cover completely with oil.',
      'Infuse for 2-3 weeks in a dark location, shaking frequently.',
      'Strain and bottle in amber glass.'
    ],
    ingredientHerbs: [{ herbName: 'Linden', botanicalName: 'Tilia cordata', herbPart: 'Flower' }],
    ingredientAmounts: ['1 part dried linden blossoms', '5 parts sunflower oil'],
    dosageGuidance: 'Apply externally in light amounts as needed.',
    safetyNotes: 'External use only; patch-test before routine use.',
    duration: 'Preparation time: 2-3 weeks infusion',
    storageNotes: 'Store capped and cool; use within 9 months.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'hyssop-infused-oil',
    title: 'Hyssop Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A robust aromatic oil frequently prepared for chest and upper-back massage.',
    methodSteps: [
      'Combine dried hyssop aerial parts with carrier oil in a dry jar.',
      'Infuse for 2 weeks while shaking every day or two.',
      'Strain and decant into dark glass bottles.'
    ],
    ingredientHerbs: [{ herbName: 'Hyssop', botanicalName: 'Hyssopus officinalis', herbPart: 'Aerial parts' }],
    ingredientAmounts: ['1 part dried hyssop', '6 parts olive oil'],
    dosageGuidance: 'Use externally in small amounts.',
    safetyNotes: 'External use only; avoid if skin feels overstimulated.',
    duration: 'Preparation time: 2 weeks infusion',
    storageNotes: 'Store away from heat and light; use within 9 months.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.warming]
  },
  {
    id: 'chamomile-lavender-infused-oil',
    title: 'Chamomile Lavender Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A calming floral blend often used in bedtime body-care routines.',
    methodSteps: [
      'Mix dried chamomile and lavender in a dry jar and cover with oil.',
      'Infuse for 2-3 weeks, shaking often.',
      'Strain and bottle in dark glass.'
    ],
    ingredientHerbs: [
      { herbName: 'Chamomile', botanicalName: 'Matricaria chamomilla', herbPart: 'Flower' },
      { herbName: 'Lavender', botanicalName: 'Lavandula angustifolia', herbPart: 'Flower' }
    ],
    ingredientAmounts: ['1 part dried chamomile', '1 part dried lavender', '8 parts jojoba oil'],
    dosageGuidance: 'Apply externally in a thin layer before rest.',
    safetyNotes: 'External use only; discontinue if irritation occurs.',
    duration: 'Preparation time: 2-3 weeks infusion',
    storageNotes: 'Store in amber glass and use within 9-12 months.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'chili-ginger-infused-oil',
    title: 'Chili Ginger Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A potent warming blend for highly diluted topical winter massage preparations.',
    methodSteps: [
      'Add dried chili and dried ginger to a clean jar and cover with oil.',
      'Infuse 7-10 days, shaking daily.',
      'Strain very well and label for diluted external use.'
    ],
    ingredientHerbs: [
      { herbName: 'Chili', botanicalName: 'Capsicum annuum', herbPart: 'Fruit' },
      { herbName: 'Ginger', botanicalName: 'Zingiber officinale', herbPart: 'Rhizome' }
    ],
    ingredientAmounts: ['1/2 part dried chili flakes', '1 part dried ginger', '10 parts sesame oil'],
    dosageGuidance: 'Apply externally only when diluted into plain carrier oil.',
    safetyNotes: 'External use only; avoid face, sensitive tissue, and broken skin.',
    duration: 'Preparation time: 7-10 days infusion',
    storageNotes: 'Store dark and cool; use within 6 months.',
    preparationTags: [formulaTagTaxonomy.warming]
  },
  {
    id: 'pine-needle-infused-oil',
    title: 'Pine Needle Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A forest-aromatic oil used externally in brisk chest and shoulder massage blends.',
    methodSteps: [
      'Chop dried pine needles and place in a dry jar with carrier oil.',
      'Infuse 2 weeks, shaking regularly.',
      'Strain and bottle in dark glass.'
    ],
    ingredientHerbs: [{ herbName: 'Pine', botanicalName: 'Pinus sylvestris', herbPart: 'Needle' }],
    ingredientAmounts: ['1 part dried chopped pine needles', '6 parts olive oil'],
    dosageGuidance: 'Use externally in modest quantities.',
    safetyNotes: 'External use only; patch-test before broader use.',
    duration: 'Preparation time: 2 weeks infusion',
    storageNotes: 'Store in a cool cabinet and use within 9 months.',
    preparationTags: [formulaTagTaxonomy.aromatic]
  },
  {
    id: 'spruce-tip-infused-oil',
    title: 'Spruce Tip Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'An evergreen-infused topical oil with a crisp aromatic profile.',
    methodSteps: [
      'Use dried spruce tips in a clean jar and cover completely with oil.',
      'Infuse for 10-14 days while shaking daily.',
      'Strain and store in amber bottles.'
    ],
    ingredientHerbs: [{ herbName: 'Spruce', botanicalName: 'Picea abies', herbPart: 'Tip' }],
    ingredientAmounts: ['1 part dried spruce tips', '6 parts olive oil'],
    dosageGuidance: 'Apply externally as part of massage blends.',
    safetyNotes: 'External use only; discontinue with any skin reaction.',
    duration: 'Preparation time: 10-14 days infusion',
    storageNotes: 'Store in dark glass and use within 9 months.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'orange-peel-infused-oil',
    title: 'Orange Peel Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A bright citrus oil for uplifting topical blends and massage oils.',
    methodSteps: [
      'Dry orange peels thoroughly and place in a clean jar with oil.',
      'Infuse for 10-14 days in a dark cabinet.',
      'Strain and bottle, labeling for external use.'
    ],
    ingredientHerbs: [{ herbName: 'Orange', botanicalName: 'Citrus sinensis', herbPart: 'Peel' }],
    ingredientAmounts: ['1 part dried orange peel', '6 parts jojoba oil'],
    dosageGuidance: 'Use externally in small diluted amounts.',
    safetyNotes: 'External use only; avoid strong sun exposure after use.',
    duration: 'Preparation time: 10-14 days infusion',
    storageNotes: 'Store away from light and use within 6-9 months.',
    preparationTags: [formulaTagTaxonomy.aromatic]
  },
  {
    id: 'vetiver-root-infused-oil',
    title: 'Vetiver Root Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A deep earthy aromatic infusion often used in grounding evening body oils.',
    methodSteps: [
      'Place dried vetiver root in a dry jar and cover with oil.',
      'Infuse for 2-3 weeks with regular shaking.',
      'Strain and bottle in small amber jars.'
    ],
    ingredientHerbs: [{ herbName: 'Vetiver', botanicalName: 'Chrysopogon zizanioides', herbPart: 'Root' }],
    ingredientAmounts: ['1 part dried vetiver root', '6 parts sesame oil'],
    dosageGuidance: 'Apply externally in a light layer as desired.',
    safetyNotes: 'External use only; patch-test first.',
    duration: 'Preparation time: 2-3 weeks infusion',
    storageNotes: 'Store cool and dark; use within 9-12 months.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.warming]
  },
  {
    id: 'oatstraw-infused-oil',
    title: 'Oatstraw Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A soothing topical infusion prepared from dried oatstraw for gentle skin support.',
    methodSteps: [
      'Add dried oatstraw to a clean jar and cover completely with oil.',
      'Infuse for 2-3 weeks in a dark place, shaking frequently.',
      'Strain and bottle in sterilized amber glass.'
    ],
    ingredientHerbs: [{ herbName: 'Oat', botanicalName: 'Avena sativa', herbPart: 'Straw' }],
    ingredientAmounts: ['1 part dried oatstraw', '5 parts olive oil'],
    dosageGuidance: 'Apply externally to intact skin as needed.',
    safetyNotes: 'External use only; discontinue use if irritation occurs.',
    duration: 'Preparation time: 2-3 weeks infusion',
    storageNotes: 'Store in a cool dark cabinet and use within 9 months.',
    preparationTags: [formulaTagTaxonomy.nutritive, formulaTagTaxonomy.caffeineFree]
  },

  {
    id: 'marshmallow-root-infused-oil',
    title: 'Marshmallow Root Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A softening root infusion commonly used for dry-skin massage blends.',
    methodSteps: [
      'Place dried marshmallow root in a clean dry jar and cover fully with oil.',
      'Infuse in a dark cabinet for 3-4 weeks, shaking several times weekly.',
      'Strain through muslin and bottle in amber glass.'
    ],
    ingredientHerbs: [{ herbName: 'Marshmallow', botanicalName: 'Althaea officinalis', herbPart: 'Root' }],
    ingredientAmounts: ['1 part dried marshmallow root', '6 parts sunflower oil'],
    dosageGuidance: 'Apply externally to intact skin in small amounts as needed.',
    safetyNotes: 'External use only; discontinue if irritation appears.',
    duration: 'Preparation time: 3-4 weeks infusion',
    storageNotes: 'Store cool and dark; use within 9-12 months.',
    preparationTags: [formulaTagTaxonomy.caffeineFree, formulaTagTaxonomy.nutritive]
  },
  {
    id: 'cleavers-infused-oil',
    title: 'Cleavers Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A light green spring herb infusion for gentle topical body care.',
    methodSteps: [
      'Use fully dried cleavers aerial parts and cover with oil in a sterile jar.',
      'Infuse for 2-3 weeks away from sunlight, shaking every 1-2 days.',
      'Strain well and transfer to labeled amber bottles.'
    ],
    ingredientHerbs: [{ herbName: 'Cleavers', botanicalName: 'Galium aparine', herbPart: 'Aerial parts' }],
    ingredientAmounts: ['1 part dried cleavers', '5 parts grapeseed oil'],
    dosageGuidance: 'Massage externally in a thin layer once or twice daily.',
    safetyNotes: 'External use only; patch-test first on sensitive skin.',
    duration: 'Preparation time: 2-3 weeks infusion',
    storageNotes: 'Use within 6-9 months and keep away from direct heat.',
    preparationTags: [formulaTagTaxonomy.caffeineFree, formulaTagTaxonomy.aromatic]
  },
  {
    id: 'meadowsweet-infused-oil',
    title: 'Meadowsweet Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A floral topical infusion with a sweet aromatic profile for massage blends.',
    methodSteps: [
      'Add dried meadowsweet flowering tops to a clean jar and cover with oil.',
      'Infuse for 2-3 weeks in a warm dark cabinet, shaking often.',
      'Strain and bottle for external applications.'
    ],
    ingredientHerbs: [{ herbName: 'Meadowsweet', botanicalName: 'Filipendula ulmaria', herbPart: 'Flowering tops' }],
    ingredientAmounts: ['1 part dried meadowsweet', '6 parts almond oil'],
    dosageGuidance: 'Apply externally in small amounts to intact skin.',
    safetyNotes: 'External use only; avoid use with known topical sensitivity.',
    duration: 'Preparation time: 2-3 weeks infusion',
    storageNotes: 'Store in dark glass; use within 9 months.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'rosemary-nettle-infused-oil',
    title: 'Rosemary Nettle Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A classic scalp and body oil blend combining mineral-rich nettle with aromatic rosemary.',
    methodSteps: [
      'Combine dried nettle leaf and dried rosemary in a sterilized jar.',
      'Cover with oil and infuse 2-4 weeks, shaking regularly.',
      'Strain and bottle, labeling for topical use.'
    ],
    ingredientHerbs: [
      { herbName: 'Nettle', botanicalName: 'Urtica dioica', herbPart: 'Leaf' },
      { herbName: 'Rosemary', botanicalName: 'Rosmarinus officinalis', herbPart: 'Leaf' }
    ],
    ingredientAmounts: ['1/2 part dried nettle leaf', '1/2 part dried rosemary', '6 parts olive oil'],
    dosageGuidance: 'Use externally as a massage oil in small amounts.',
    safetyNotes: 'External use only; avoid contact with eyes.',
    duration: 'Preparation time: 2-4 weeks infusion',
    storageNotes: 'Store tightly capped away from light; use within 9-12 months.',
    preparationTags: [formulaTagTaxonomy.nutritive, formulaTagTaxonomy.aromatic]
  },
  {
    id: 'frankincense-herb-infused-oil',
    title: 'Frankincense Herb Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A resin-herb infusion with a warm balsamic aroma for ritual and body oil blends.',
    methodSteps: [
      'Lightly crush frankincense tears and combine with dried calendula in a jar.',
      'Cover with oil and infuse gently for 2-3 weeks in a dark place.',
      'Strain through fine cloth and bottle in amber glass.'
    ],
    ingredientHerbs: [
      { herbName: 'Frankincense', botanicalName: 'Boswellia sacra', herbPart: 'Resin' },
      { herbName: 'Calendula', botanicalName: 'Calendula officinalis', herbPart: 'Flower' }
    ],
    ingredientAmounts: ['1 part frankincense resin', '1 part dried calendula', '8 parts jojoba oil'],
    dosageGuidance: 'Apply externally in small amounts as desired.',
    safetyNotes: 'External use only; patch-test before regular use.',
    duration: 'Preparation time: 2-3 weeks infusion',
    storageNotes: 'Store cool and dark; use within 12 months.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.warming]
  },
  {
    id: 'myrrh-herb-infused-oil',
    title: 'Myrrh Herb Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A rich resinous topical oil prepared for aromatic external blends.',
    methodSteps: [
      'Combine crushed myrrh resin with dried chamomile in a glass jar.',
      'Cover with oil and infuse in a warm place for 2-3 weeks.',
      'Strain thoroughly and bottle for external use.'
    ],
    ingredientHerbs: [
      { herbName: 'Myrrh', botanicalName: 'Commiphora myrrha', herbPart: 'Resin' },
      { herbName: 'Chamomile', botanicalName: 'Matricaria chamomilla', herbPart: 'Flower' }
    ],
    ingredientAmounts: ['1 part crushed myrrh resin', '1 part dried chamomile', '8 parts sesame oil'],
    dosageGuidance: 'Use externally in very small amounts on intact skin.',
    safetyNotes: 'External use only; avoid mucous membranes and discontinue if irritation occurs.',
    duration: 'Preparation time: 2-3 weeks infusion',
    storageNotes: 'Store in dark bottles and use within 9-12 months.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.warming]
  },
  {
    id: 'elderflower-infused-oil',
    title: 'Elderflower Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A delicate floral oil used in lightweight facial and body preparations.',
    methodSteps: [
      'Place dried elderflowers in a dry sterilized jar and cover with oil.',
      'Infuse for 10-14 days in a dark cabinet, shaking daily.',
      'Strain and bottle in clean amber glass.'
    ],
    ingredientHerbs: [{ herbName: 'Elder', botanicalName: 'Sambucus nigra', herbPart: 'Flower' }],
    ingredientAmounts: ['1 part dried elderflower', '6 parts apricot kernel oil'],
    dosageGuidance: 'Apply externally in a thin layer as needed.',
    safetyNotes: 'External use only; patch-test for sensitive skin.',
    duration: 'Preparation time: 10-14 days infusion',
    storageNotes: 'Store cool and dark and use within 6-9 months.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'blue-lotus-infused-oil',
    title: 'Blue Lotus Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'An aromatic floral infusion traditionally used in evening self-massage rituals.',
    methodSteps: [
      'Add dried blue lotus petals to a clean jar and fully cover with oil.',
      'Infuse 2-3 weeks away from direct light, shaking frequently.',
      'Strain carefully and bottle in amber glass.'
    ],
    ingredientHerbs: [{ herbName: 'Blue Lotus', botanicalName: 'Nymphaea caerulea', herbPart: 'Flower' }],
    ingredientAmounts: ['1 part dried blue lotus petals', '6 parts jojoba oil'],
    dosageGuidance: 'Apply externally in small amounts to intact skin.',
    safetyNotes: 'External use only unless supervised by a qualified practitioner.',
    duration: 'Preparation time: 2-3 weeks infusion',
    storageNotes: 'Store in dark glass and use within 9 months.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'hibiscus-infused-oil',
    title: 'Hibiscus Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A colorful floral oil often used in hair and scalp massage routines.',
    methodSteps: [
      'Combine dried hibiscus petals in a dry jar and cover completely with oil.',
      'Infuse for 2-3 weeks in a dark warm place with regular shaking.',
      'Strain through fine mesh and bottle.'
    ],
    ingredientHerbs: [{ herbName: 'Hibiscus', botanicalName: 'Hibiscus sabdariffa', herbPart: 'Calyx' }],
    ingredientAmounts: ['1 part dried hibiscus', '5 parts coconut or sesame oil'],
    dosageGuidance: 'Massage externally in small amounts 1-2 times daily as desired.',
    safetyNotes: 'External use only; stop use if scalp or skin irritation develops.',
    duration: 'Preparation time: 2-3 weeks infusion',
    storageNotes: 'Store tightly capped away from light; use within 9 months.',
    preparationTags: [formulaTagTaxonomy.nutritive, formulaTagTaxonomy.aromatic]
  },
  {
    id: 'holy-basil-rose-infused-oil',
    title: 'Holy Basil Rose Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A fragrant floral-herbal blend for calming topical body oil formulas.',
    methodSteps: [
      'Mix dried holy basil and dried rose petals in a clean jar.',
      'Cover with oil and infuse for 2-4 weeks, shaking every couple of days.',
      'Strain and bottle in amber glass for external use.'
    ],
    ingredientHerbs: [
      { herbName: 'Holy Basil', botanicalName: 'Ocimum tenuiflorum', herbPart: 'Leaf' },
      { herbName: 'Rose', botanicalName: 'Rosa damascena', herbPart: 'Petal' }
    ],
    ingredientAmounts: ['1/2 part dried holy basil', '1/2 part dried rose petals', '6 parts sweet almond oil'],
    dosageGuidance: 'Apply externally to intact skin in light amounts.',
    safetyNotes: 'External use only; avoid broken skin.',
    duration: 'Preparation time: 2-4 weeks infusion',
    storageNotes: 'Store cool and away from light; use within 9-12 months.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'angelica-root-infused-oil',
    title: 'Angelica Root Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A warming aromatic root infusion used in grounding massage blends.',
    methodSteps: [
      'Add dried angelica root to a dry jar and cover fully with oil.',
      'Infuse 3-4 weeks in a dark cabinet with occasional shaking.',
      'Strain and bottle, labeling as external-use only.'
    ],
    ingredientHerbs: [{ herbName: 'Angelica', botanicalName: 'Angelica archangelica', herbPart: 'Root' }],
    ingredientAmounts: ['1 part dried angelica root', '6 parts olive oil'],
    dosageGuidance: 'Apply externally in small amounts to intact skin.',
    safetyNotes: 'External use only; avoid sun exposure on treated skin for several hours.',
    duration: 'Preparation time: 3-4 weeks infusion',
    storageNotes: 'Store in dark glass and use within 9-12 months.',
    preparationTags: [formulaTagTaxonomy.warming, formulaTagTaxonomy.aromatic]
  },
  {
    id: 'burdock-root-infused-oil',
    title: 'Burdock Root Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'An earthy root infusion commonly included in scalp and skin massage preparations.',
    methodSteps: [
      'Fill a jar one-third with dried burdock root and cover with oil.',
      'Infuse for 3-4 weeks with regular shaking in a dark location.',
      'Strain and bottle in sterilized amber glass.'
    ],
    ingredientHerbs: [{ herbName: 'Burdock', botanicalName: 'Arctium lappa', herbPart: 'Root' }],
    ingredientAmounts: ['1 part dried burdock root', '6 parts sunflower oil'],
    dosageGuidance: 'Use externally in a light layer on intact skin or scalp.',
    safetyNotes: 'External use only; avoid use with known plant allergy.',
    duration: 'Preparation time: 3-4 weeks infusion',
    storageNotes: 'Store cool and dry; use within 9-12 months.',
    preparationTags: [formulaTagTaxonomy.nutritive, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'dandelion-flower-infused-oil',
    title: 'Dandelion Flower Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A sunny floral infusion often prepared for warming external body oils.',
    methodSteps: [
      'Wilt freshly harvested dandelion flowers until surface moisture is gone.',
      'Place in a jar, cover with oil, and infuse 2-3 weeks in a warm dark place.',
      'Strain and bottle in amber glass.'
    ],
    ingredientHerbs: [{ herbName: 'Dandelion', botanicalName: 'Taraxacum officinale', herbPart: 'Flower' }],
    ingredientAmounts: ['1 part wilted dandelion flowers', '3-4 parts olive oil'],
    dosageGuidance: 'Apply topically to intact skin in small amounts.',
    safetyNotes: 'External use only; avoid using flowers with residual moisture to prevent spoilage.',
    duration: 'Preparation time: 2-3 weeks infusion',
    storageNotes: 'Store away from heat and use within 6-9 months.',
    preparationTags: [formulaTagTaxonomy.warming, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'cinnamon-bark-infused-oil',
    title: 'Cinnamon Bark Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A strongly warming aromatic infusion used in very diluted topical formulas.',
    methodSteps: [
      'Add broken dried cinnamon bark to a clean jar and cover with oil.',
      'Infuse for 7-10 days, checking aroma daily.',
      'Strain thoroughly and bottle for external dilution use.'
    ],
    ingredientHerbs: [{ herbName: 'Cinnamon', botanicalName: 'Cinnamomum verum', herbPart: 'Bark' }],
    ingredientAmounts: ['1 part dried cinnamon bark', '8 parts sesame oil'],
    dosageGuidance: 'Use externally in highly diluted amounts only.',
    safetyNotes: 'External use only; may irritate sensitive skin and should be patch-tested carefully.',
    duration: 'Preparation time: 7-10 days infusion',
    storageNotes: 'Store tightly sealed away from light; use within 6-9 months.',
    preparationTags: [formulaTagTaxonomy.warming, formulaTagTaxonomy.aromatic]
  },
  {
    id: 'cardamom-infused-oil',
    title: 'Cardamom Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A sweet-spiced aromatic oil suitable for warming massage blends.',
    methodSteps: [
      'Lightly crush cardamom pods and place in a dry jar with oil.',
      'Infuse for 10-14 days in a dark cabinet, shaking daily.',
      'Strain and bottle in amber glass.'
    ],
    ingredientHerbs: [{ herbName: 'Cardamom', botanicalName: 'Elettaria cardamomum', herbPart: 'Seed' }],
    ingredientAmounts: ['1 part crushed cardamom pods', '7 parts almond oil'],
    dosageGuidance: 'Apply externally in small quantities on intact skin.',
    safetyNotes: 'External use only; discontinue with irritation.',
    duration: 'Preparation time: 10-14 days infusion',
    storageNotes: 'Store cool and dark and use within 9 months.',
    preparationTags: [formulaTagTaxonomy.warming, formulaTagTaxonomy.aromatic]
  },
  {
    id: 'coriander-seed-infused-oil',
    title: 'Coriander Seed Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A mild kitchen-spice infusion for aromatic body oil formulations.',
    methodSteps: [
      'Lightly crush coriander seed and combine with oil in a clean jar.',
      'Infuse for 10-14 days away from heat and direct sun.',
      'Strain through fine cloth and bottle.'
    ],
    ingredientHerbs: [{ herbName: 'Coriander', botanicalName: 'Coriandrum sativum', herbPart: 'Seed' }],
    ingredientAmounts: ['1 part crushed coriander seed', '7 parts sunflower oil'],
    dosageGuidance: 'Use externally in thin layers as needed.',
    safetyNotes: 'External use only; patch-test first if skin is reactive.',
    duration: 'Preparation time: 10-14 days infusion',
    storageNotes: 'Keep in a dark cupboard and use within 9 months.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'star-anise-infused-oil',
    title: 'Star Anise Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A sweet aromatic topical oil with a distinctive warming profile.',
    methodSteps: [
      'Break star anise pods slightly and cover with oil in a dry jar.',
      'Infuse 10-14 days in a dark location, shaking often.',
      'Strain and bottle for external use only.'
    ],
    ingredientHerbs: [{ herbName: 'Star Anise', botanicalName: 'Illicium verum', herbPart: 'Fruit' }],
    ingredientAmounts: ['1 part broken star anise', '8 parts jojoba oil'],
    dosageGuidance: 'Apply externally in small diluted quantities.',
    safetyNotes: 'External use only; keep away from eyes and mucous membranes.',
    duration: 'Preparation time: 10-14 days infusion',
    storageNotes: 'Store tightly sealed and use within 6-9 months.',
    preparationTags: [formulaTagTaxonomy.warming, formulaTagTaxonomy.aromatic]
  },
  {
    id: 'clary-sage-infused-oil',
    title: 'Clary Sage Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'An aromatic leafy-floral infusion used in calming evening body oil blends.',
    methodSteps: [
      'Place dried clary sage aerial parts in a sterile jar and cover with oil.',
      'Infuse for 2-3 weeks in a dark cabinet with periodic shaking.',
      'Strain and bottle in amber glass.'
    ],
    ingredientHerbs: [{ herbName: 'Clary Sage', botanicalName: 'Salvia sclarea', herbPart: 'Aerial parts' }],
    ingredientAmounts: ['1 part dried clary sage', '6 parts olive oil'],
    dosageGuidance: 'Apply topically in a light layer on intact skin.',
    safetyNotes: 'External use only; avoid use if irritation occurs.',
    duration: 'Preparation time: 2-3 weeks infusion',
    storageNotes: 'Store cool and dark; use within 9-12 months.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'safflower-petal-infused-oil',
    title: 'Safflower Petal Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A lightweight floral infusion suitable for gentle cosmetic body oils.',
    methodSteps: [
      'Add dried safflower petals to a dry jar and cover with oil.',
      'Infuse for 2 weeks in a dark place, shaking frequently.',
      'Strain and bottle in sterilized glass.'
    ],
    ingredientHerbs: [{ herbName: 'Safflower', botanicalName: 'Carthamus tinctorius', herbPart: 'Petal' }],
    ingredientAmounts: ['1 part dried safflower petals', '6 parts grapeseed oil'],
    dosageGuidance: 'Use externally in small amounts on intact skin.',
    safetyNotes: 'External use only; discontinue if irritation develops.',
    duration: 'Preparation time: 2 weeks infusion',
    storageNotes: 'Store away from light; use within 6-9 months.',
    preparationTags: [formulaTagTaxonomy.caffeineFree, formulaTagTaxonomy.aromatic]
  },
  {
    id: 'lotus-rose-infused-oil',
    title: 'Lotus Rose Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A floral aromatic blend prepared for luxurious topical massage oils.',
    methodSteps: [
      'Combine dried lotus petals and dried rose petals in a clean jar.',
      'Cover with oil and infuse for 2-3 weeks with regular shaking.',
      'Strain and bottle in amber glass.'
    ],
    ingredientHerbs: [
      { herbName: 'Lotus', botanicalName: 'Nelumbo nucifera', herbPart: 'Petal' },
      { herbName: 'Rose', botanicalName: 'Rosa damascena', herbPart: 'Petal' }
    ],
    ingredientAmounts: ['1/2 part dried lotus petals', '1/2 part dried rose petals', '6 parts jojoba oil'],
    dosageGuidance: 'Apply externally in a thin layer as desired.',
    safetyNotes: 'External use only; avoid broken skin.',
    duration: 'Preparation time: 2-3 weeks infusion',
    storageNotes: 'Store in dark glass and use within 9 months.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'parsley-seed-infused-oil',
    title: 'Parsley Seed Infused Oil',
    preparationType: preparationTypeTaxonomy.infusedOils,
    preparationDescription: 'A bright herbal-seed infusion for aromatic topical blends.',
    methodSteps: [
      'Lightly crush dried parsley seed and place in a clean jar with oil.',
      'Infuse for 10-14 days in a dark cabinet, shaking daily.',
      'Strain and bottle, labeling for external use.'
    ],
    ingredientHerbs: [{ herbName: 'Parsley', botanicalName: 'Petroselinum crispum', herbPart: 'Seed' }],
    ingredientAmounts: ['1 part crushed parsley seed', '7 parts sunflower oil'],
    dosageGuidance: 'Use externally in small quantities on intact skin.',
    safetyNotes: 'External use only; avoid use before extended direct sun exposure.',
    duration: 'Preparation time: 10-14 days infusion',
    storageNotes: 'Store cool and dark; use within 9 months.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.warming]
  },

  {
    id: 'echinacea-fresh-root-tincture',
    title: 'Echinacea Fresh Root Tincture',
    preparationType: preparationTypeTaxonomy.tinctures,
    preparationDescription:
      'A traditional fresh-plant tincture approach for short-term immune-focused protocols under practitioner guidance.',
    methodSteps: [
      'Finely chop fresh echinacea root and place into a clean glass jar.',
      'Cover completely with 50-60% alcohol, leaving at least 1 inch liquid above the plant material.',
      'Macerate 2-4 weeks, shaking daily, then press and bottle in labeled amber dropper bottles.'
    ],
    ingredientHerbs: [{ herbName: 'Echinacea', botanicalName: 'Echinacea purpurea', herbPart: 'Root' }],
    ingredientAmounts: ['1 part fresh chopped root', '2 parts 50-60% alcohol by volume'],
    dosageGuidance: 'Often used in short-term dosing windows; follow qualified practitioner recommendations.',
    safetyNotes: 'Use caution with autoimmune conditions, immunosuppressant therapy, or known Asteraceae allergy.',
    duration: 'Preparation time: 2-4 weeks maceration',
    storageNotes: 'Store tightly capped away from heat and light; alcohol tinctures remain stable for several years.',
    preparationTags: [formulaTagTaxonomy.aromatic]
  },
  {
    id: 'fire-cider-oxymel',
    title: 'Fire Cider Oxymel',
    preparationType: preparationTypeTaxonomy.oxymels,
    preparationDescription:
      'A classic vinegar-honey kitchen preparation featuring pungent roots and aromatics for seasonal resilience rituals.',
    methodSteps: [
      'Fill a clean jar halfway with chopped onion, garlic, ginger, horseradish, and optional chili.',
      'Cover fully with raw apple cider vinegar, cap with non-reactive lid, and macerate 3-4 weeks with regular shaking.',
      'Strain, then combine the infused vinegar with honey to taste (about 2:1 vinegar-to-honey) and bottle.'
    ],
    ingredientHerbs: [
      { herbName: 'Ginger', botanicalName: 'Zingiber officinale', herbPart: 'Rhizome' },
      { herbName: 'Garlic', botanicalName: 'Allium sativum', herbPart: 'Bulb' },
      { herbName: 'Horseradish', botanicalName: 'Armoracia rusticana', herbPart: 'Root' }
    ],
    ingredientAmounts: [
      '1/4 cup chopped ginger',
      '1/4 cup chopped garlic',
      '1/4 cup chopped horseradish',
      '2 cups apple cider vinegar',
      '1/2-1 cup honey'
    ],
    dosageGuidance: 'Traditionally used as 1 teaspoon to 1 tablespoon once or twice daily during seasonal transitions.',
    safetyNotes: 'May aggravate reflux or gastritis in sensitive individuals; review with clinicians when managing blood sugar concerns.',
    duration: 'Preparation time: 3-4 weeks maceration',
    storageNotes: 'Store refrigerated or in a cool pantry and use within 3-6 months.',
    preparationTags: [formulaTagTaxonomy.warming, formulaTagTaxonomy.aromatic]
  },
  {
    id: 'plantain-comfrey-poultice',
    title: 'Plantain Comfrey Poultice',
    preparationType: preparationTypeTaxonomy.poultices,
    preparationDescription:
      'A fresh-leaf external poultice used in folk practice for minor bumps, stings, and temporary skin irritation support.',
    methodSteps: [
      'Rinse fresh plantain and comfrey leaves thoroughly and pat dry.',
      'Bruise or finely chop leaves into a moist mash, adding a small splash of warm water if needed.',
      'Apply to intact skin, cover with clean cloth, and replace every 2-4 hours as needed.'
    ],
    ingredientHerbs: [
      { herbName: 'Plantain', botanicalName: 'Plantago major', herbPart: 'Leaf' },
      { herbName: 'Comfrey', botanicalName: 'Symphytum officinale', herbPart: 'Leaf' }
    ],
    ingredientAmounts: ['1 handful fresh plantain leaf', '1 handful fresh comfrey leaf'],
    dosageGuidance: 'For external use only; apply short-term to intact skin and reassess frequently.',
    safetyNotes: 'Do not use on deep, puncture, or infected wounds; discontinue with irritation and avoid internal comfrey use.',
    duration: 'Preparation time: 10 minutes',
    storageNotes: 'Prepare fresh each time; discard unused mash after application window.',
    preparationTags: [formulaTagTaxonomy.nutritive, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'lavender-lemon-balm-sleep-syrup',
    title: 'Lavender Lemon Balm Sleep Syrup',
    preparationType: preparationTypeTaxonomy.syrups,
    preparationDescription:
      'A gentle evening syrup combining aromatic herbs with honey for bedtime wind-down support.',
    methodSteps: [
      'Simmer lemon balm and chamomile in water for 15 minutes with the pot covered.',
      'Remove from heat, add lavender, and steep another 10 minutes before straining.',
      'Cool to warm and whisk in honey, then bottle and refrigerate.'
    ],
    ingredientHerbs: [
      { herbName: 'Lemon Balm', botanicalName: 'Melissa officinalis', herbPart: 'Leaf' },
      { herbName: 'Lavender', botanicalName: 'Lavandula angustifolia', herbPart: 'Flower' },
      { herbName: 'Chamomile', botanicalName: 'Matricaria chamomilla', herbPart: 'Flower' }
    ],
    ingredientAmounts: ['2 tablespoons lemon balm', '1 tablespoon chamomile', '1 teaspoon lavender', '2 cups water', '3/4 cup honey'],
    dosageGuidance: 'Commonly used as 1-2 teaspoons 30-60 minutes before bedtime.',
    safetyNotes: 'Contains honey; avoid for infants under one year old and use caution with sedative medications.',
    duration: 'Preparation time: 30 minutes',
    storageNotes: 'Refrigerate and use within 3 weeks; discard if bubbling, odor, or mold develops.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.caffeineFree]
  }
];

export const formulas = [
  {
    id: 'nutritive-mineral-tea',
    title: 'Nutritive Mineral Tea',
    preparationType: preparationTypeTaxonomy.infusions,
    formulaCategory: formulaCategoryTaxonomy.nutritiveBlends,
    preparationDescription:
      'A foundational mineral-rich blend for long infusion protocols during demanding seasons.',
    ingredientHerbs: [
      { herbSlug: 'urtica-dioica', herbPart: 'Leaf' },
      { herbSlug: 'taraxacum-officinale', herbPart: 'Leaf' },
      { herbName: 'Oatstraw', botanicalName: 'Avena sativa', herbPart: 'Milky tops/straw' }
    ],
    ingredientAmounts: ['2 parts nettle leaf', '1 part dandelion leaf', '1 part oatstraw'],
    methodSteps: [
      'Blend dried herbs thoroughly.',
      'Use 1 ounce blend per quart boiling water.',
      'Infuse 4-8 hours and strain.'
    ],
    dosageGuidance: '1-2 cups daily as a food-like tonic infusion.',
    safetyNotes: 'Adjust dandelion content for highly sensitive digestion.',
    duration: 'Blend prep: 10 minutes; infusion: 8 hours',
    storageNotes: 'Prepared tea keeps 24-36 hours refrigerated.',
    preparationTags: [formulaTagTaxonomy.nutritive, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'calming-evening-tea',
    title: 'Calming Evening Tea',
    preparationType: preparationTypeTaxonomy.teas,
    formulaCategory: formulaCategoryTaxonomy.sleepSupport,
    preparationDescription:
      'A gentle evening aromatic tea blend to support transition into rest.',
    ingredientHerbs: [
      { herbSlug: 'matricaria-chamomilla', herbPart: 'Flower' },
      { herbName: 'Lemon Balm', botanicalName: 'Melissa officinalis', herbPart: 'Leaf' },
      { herbName: 'Linden', botanicalName: 'Tilia cordata', herbPart: 'Bract/flower' }
    ],
    ingredientAmounts: ['1 part chamomile', '1 part lemon balm', '1 part linden'],
    methodSteps: [
      'Steep 1 tablespoon tea blend in 10 ounces hot water for 12 minutes.',
      'Strain and sip warm in the evening.',
      'Optionally add a small amount of honey after cooling slightly.'
    ],
    dosageGuidance: '1 cup in the evening, or as professionally advised.',
    safetyNotes: 'Use care with sedative medications and ragweed-family sensitivities.',
    duration: 'Preparation time: 15 minutes',
    storageNotes: 'Serve fresh; aromatic profile declines with storage.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'seasonal-immune-support-tea',
    title: 'Seasonal Immune Support Tea',
    preparationType: preparationTypeTaxonomy.decoctions,
    formulaCategory: formulaCategoryTaxonomy.immuneSupport,
    preparationDescription:
      'A warming seasonal blend combining roots and aromatics for short-term winter support.',
    ingredientHerbs: [
      { herbName: 'Elderberry', botanicalName: 'Sambucus nigra', herbPart: 'Berry' },
      { herbName: 'Rosehip', botanicalName: 'Rosa canina', herbPart: 'Fruit' },
      { herbName: 'Ginger', botanicalName: 'Zingiber officinale', herbPart: 'Rhizome' }
    ],
    ingredientAmounts: ['2 parts elderberry', '1 part rosehip', '1/2 part ginger'],
    methodSteps: [
      'Simmer elderberry and rosehip 20 minutes.',
      'Add ginger for final 5 minutes.',
      'Strain and serve warm.'
    ],
    dosageGuidance: 'Use as 1 cup daily during acute seasonal windows.',
    safetyNotes: 'Use practitioner review in autoimmune disease or with immune-modulating medications.',
    duration: 'Preparation time: 30 minutes',
    storageNotes: 'Refrigerate up to 48 hours; reheat gently.',
    preparationTags: [formulaTagTaxonomy.warming, formulaTagTaxonomy.aromatic]
  },
  {
    id: 'digestive-bitters-tea',
    title: 'Digestive Bitters Tea',
    preparationType: preparationTypeTaxonomy.decoctions,
    formulaCategory: formulaCategoryTaxonomy.digestiveSupport,
    preparationDescription:
      'A balanced bitter formula that pairs roots with aromatics to support pre-meal digestive readiness.',
    ingredientHerbs: [
      { herbName: 'Dandelion', botanicalName: 'Taraxacum officinale', herbPart: 'Root' },
      { herbName: 'Burdock', botanicalName: 'Arctium lappa', herbPart: 'Root' },
      { herbName: 'Fennel', botanicalName: 'Foeniculum vulgare', herbPart: 'Seed' }
    ],
    ingredientAmounts: ['2 parts dandelion root', '1 part burdock root', '1/2 part fennel seed'],
    methodSteps: [
      'Decoct dandelion and burdock roots in covered water for 25 minutes.',
      'Add fennel in the final 5 minutes.',
      'Strain and serve warm before meals.'
    ],
    dosageGuidance: 'Traditionally used in 1/2 to 1 cup portions 15-20 minutes before meals.',
    safetyNotes: 'Use practitioner guidance with biliary obstruction or highly sensitive digestion.',
    duration: 'Preparation time: 30 minutes',
    storageNotes: 'Refrigerate for up to 48 hours.',
    preparationTags: [formulaTagTaxonomy.bitter, formulaTagTaxonomy.aromatic]
  },
  {
    id: 'respiratory-soothing-tea',
    title: 'Respiratory Soothing Tea',
    preparationType: preparationTypeTaxonomy.infusions,
    formulaCategory: formulaCategoryTaxonomy.respiratorySupport,
    preparationDescription:
      'A moistening and aromatic tea blend used traditionally for seasonal throat and chest comfort.',
    ingredientHerbs: [
      { herbName: 'Mullein', botanicalName: 'Verbascum thapsus', herbPart: 'Leaf' },
      { herbName: 'Thyme', botanicalName: 'Thymus vulgaris', herbPart: 'Leaf' },
      { herbName: 'Licorice', botanicalName: 'Glycyrrhiza glabra', herbPart: 'Root' }
    ],
    ingredientAmounts: ['2 parts mullein leaf', '1 part thyme leaf', '1/2 part licorice root'],
    methodSteps: [
      'Steep blend in just-boiled water for 15 minutes, covered.',
      'Strain carefully through fine cloth to remove mullein hairs.',
      'Sip warm, optionally with a small amount of honey.'
    ],
    dosageGuidance: '1 cup up to 2 times daily during short seasonal use windows.',
    safetyNotes: 'Licorice is not appropriate for everyone; avoid prolonged use with hypertension unless supervised.',
    duration: 'Preparation time: 15 minutes',
    storageNotes: 'Use same day for best aromatic quality.',
    preparationTags: [formulaTagTaxonomy.demulcent, formulaTagTaxonomy.aromatic]
  },
  {
    id: 'golden-spice-milk-tea',
    title: 'Golden Spice Milk Tea',
    preparationType: preparationTypeTaxonomy.decoctions,
    formulaCategory: formulaCategoryTaxonomy.calmingTeas,
    preparationDescription:
      'A cozy evening decoction of warming spices finished with milk for a grounded, kitchen-friendly ritual.',
    ingredientHerbs: [
      { herbName: 'Turmeric', botanicalName: 'Curcuma longa', herbPart: 'Rhizome' },
      { herbName: 'Cinnamon', botanicalName: 'Cinnamomum verum', herbPart: 'Bark' },
      { herbName: 'Cardamom', botanicalName: 'Elettaria cardamomum', herbPart: 'Seed' }
    ],
    ingredientAmounts: ['1 teaspoon turmeric powder', '1 small cinnamon stick', '2 crushed cardamom pods'],
    methodSteps: [
      'Simmer spices in 10 ounces of water for 10 minutes.',
      'Add 4 ounces milk or plant milk and warm gently for 2-3 more minutes.',
      'Strain and sweeten lightly if desired.'
    ],
    dosageGuidance: 'Enjoy as 1 warm cup in the evening or during cold weather.',
    safetyNotes: 'Review concentrated turmeric use with clinicians when taking anticoagulants or before surgery.',
    duration: 'Preparation time: 15 minutes',
    storageNotes: 'Best served immediately; refrigerate unused decoction base for 24 hours.',
    preparationTags: [formulaTagTaxonomy.warming, formulaTagTaxonomy.aromatic]
  },
  {
    id: 'burdock-dandelion-root-decoction',
    title: 'Burdock Dandelion Root Decoction',
    preparationType: preparationTypeTaxonomy.decoctions,
    formulaCategory: formulaCategoryTaxonomy.digestiveSupport,
    preparationDescription:
      'A classic bitter-root decoction traditionally used before meals to support sluggish digestion and elimination rhythms.',
    ingredientHerbs: [
      { herbName: 'Burdock', botanicalName: 'Arctium lappa', herbPart: 'Root' },
      { herbName: 'Dandelion', botanicalName: 'Taraxacum officinale', herbPart: 'Root' }
    ],
    ingredientAmounts: ['1 tablespoon burdock root', '1 tablespoon dandelion root', '16 ounces water'],
    methodSteps: [
      'Combine roots and cold water in a covered saucepan.',
      'Bring to a gentle simmer and decoct for 25-30 minutes.',
      'Strain and sip warm in small portions.'
    ],
    dosageGuidance: 'Traditionally used as 1/2 cup before meals, up to 2 times daily for short protocols.',
    safetyNotes: 'Review with clinicians when taking diuretics, glucose-lowering medications, or with active gallbladder symptoms.',
    duration: 'Preparation time: 30 minutes',
    storageNotes: 'Refrigerate and use within 48 hours.',
    preparationTags: [formulaTagTaxonomy.bitter]
  },
  {
    id: 'reishi-cinnamon-decoction',
    title: 'Reishi Cinnamon Decoction',
    preparationType: preparationTypeTaxonomy.decoctions,
    formulaCategory: formulaCategoryTaxonomy.immuneSupport,
    preparationDescription:
      'A long-simmer mushroom and bark decoction used in traditional wellness routines for grounded resilience.',
    ingredientHerbs: [
      { herbName: 'Reishi', botanicalName: 'Ganoderma lucidum', herbPart: 'Fruiting body' },
      { herbName: 'Cinnamon', botanicalName: 'Cinnamomum verum', herbPart: 'Bark' }
    ],
    ingredientAmounts: ['6-8 grams sliced reishi', '1 small cinnamon stick', '3 cups water'],
    methodSteps: [
      'Add reishi and cinnamon to cool water.',
      'Simmer gently for 45-60 minutes with a lid partially on.',
      'Strain and drink warm or use as a broth base.'
    ],
    dosageGuidance: 'Use 1/2 to 1 cup daily in practitioner-guided immune support plans.',
    safetyNotes: 'Use caution with anticoagulants and before surgery; discontinue if digestive upset occurs.',
    duration: 'Preparation time: 60 minutes',
    storageNotes: 'Refrigerate up to 3 days.',
    preparationTags: [formulaTagTaxonomy.warming]
  },
  {
    id: 'chaga-cacao-decoction',
    title: 'Chaga Cacao Decoction',
    preparationType: preparationTypeTaxonomy.decoctions,
    formulaCategory: formulaCategoryTaxonomy.seasonalWellness,
    preparationDescription:
      'A rich, earthy decoction that combines chaga extraction with roasted cacao for a caffeine-light daily ritual.',
    ingredientHerbs: [
      { herbName: 'Chaga', botanicalName: 'Inonotus obliquus', herbPart: 'Sclerotium' },
      { herbName: 'Cacao', botanicalName: 'Theobroma cacao', herbPart: 'Bean' }
    ],
    ingredientAmounts: ['1 tablespoon chaga chunks', '1 tablespoon cacao nibs', '2 cups water'],
    methodSteps: [
      'Simmer chaga in water for 35 minutes.',
      'Add cacao nibs and continue simmering for 10 minutes.',
      'Strain and serve plain or with milk.'
    ],
    dosageGuidance: 'Enjoy as 1 cup once daily.',
    safetyNotes: 'Monitor use with kidney concerns, oxalate sensitivity, or anticoagulant therapy.',
    duration: 'Preparation time: 45 minutes',
    storageNotes: 'Refrigerate and use within 48 hours.',
    preparationTags: [formulaTagTaxonomy.nutritive, formulaTagTaxonomy.warming]
  },
  {
    id: 'turmeric-black-pepper-decoction',
    title: 'Turmeric Black Pepper Decoction',
    preparationType: preparationTypeTaxonomy.decoctions,
    formulaCategory: formulaCategoryTaxonomy.seasonalWellness,
    preparationDescription:
      'A bright, spicy kitchen decoction traditionally used for post-exertion recovery and cold-weather stiffness.',
    ingredientHerbs: [
      { herbName: 'Turmeric', botanicalName: 'Curcuma longa', herbPart: 'Rhizome' },
      { herbName: 'Black Pepper', botanicalName: 'Piper nigrum', herbPart: 'Fruit' }
    ],
    ingredientAmounts: ['1 tablespoon sliced fresh turmeric', '4-5 whole black peppercorns', '14 ounces water'],
    methodSteps: [
      'Place turmeric and peppercorns in cool water.',
      'Bring to a gentle simmer for 20 minutes.',
      'Strain and add lemon or honey if desired.'
    ],
    dosageGuidance: 'Traditionally used as 1 warm cup once daily in short seasonal windows.',
    safetyNotes: 'Use caution with reflux, anticoagulants, gallbladder obstruction, or pre-surgical care.',
    duration: 'Preparation time: 20 minutes',
    storageNotes: 'Best fresh; refrigerate leftovers for up to 24 hours.',
    preparationTags: [formulaTagTaxonomy.warming, formulaTagTaxonomy.aromatic]
  },
  {
    id: 'schisandra-rosehip-decoction',
    title: 'Schisandra Rosehip Decoction',
    preparationType: preparationTypeTaxonomy.decoctions,
    formulaCategory: formulaCategoryTaxonomy.immuneSupport,
    preparationDescription:
      'A tart-fruity berry decoction used in traditional tonic programs for endurance and seasonal support.',
    ingredientHerbs: [
      { herbName: 'Schisandra', botanicalName: 'Schisandra chinensis', herbPart: 'Berry' },
      { herbName: 'Rosehip', botanicalName: 'Rosa canina', herbPart: 'Fruit' }
    ],
    ingredientAmounts: ['1 tablespoon dried schisandra berries', '1 tablespoon dried rosehips', '2 cups water'],
    methodSteps: [
      'Lightly crush berries and rosehips and add to water.',
      'Simmer covered for 20-25 minutes.',
      'Strain and cool slightly before drinking.'
    ],
    dosageGuidance: 'Take 1 cup daily or split into two servings.',
    safetyNotes: 'Consult clinicians with reflux disorders, pregnancy, or when taking multiple prescription medications.',
    duration: 'Preparation time: 25 minutes',
    storageNotes: 'Refrigerate and consume within 36 hours.',
    preparationTags: [formulaTagTaxonomy.aromatic]
  },
  {
    id: 'hawthorn-berry-heart-tonic-decoction',
    title: 'Hawthorn Berry Heart Tonic Decoction',
    preparationType: preparationTypeTaxonomy.decoctions,
    formulaCategory: formulaCategoryTaxonomy.nutritiveBlends,
    preparationDescription:
      'A traditional berry decoction commonly used as a long-term tonic beverage for circulatory vitality.',
    ingredientHerbs: [{ herbName: 'Hawthorn', botanicalName: 'Crataegus monogyna', herbPart: 'Berry' }],
    ingredientAmounts: ['2 tablespoons dried hawthorn berries', '2 cups water'],
    methodSteps: [
      'Lightly crush berries and soak in water for 20 minutes.',
      'Simmer gently for 30 minutes with lid on.',
      'Strain and sip warm.'
    ],
    dosageGuidance: 'Traditionally consumed as 1 cup daily for longer-term routines.',
    safetyNotes: 'Coordinate with clinicians if using heart or blood pressure medications.',
    duration: 'Preparation time: 50 minutes including soak',
    storageNotes: 'Refrigerate for up to 2 days.',
    preparationTags: [formulaTagTaxonomy.nutritive]
  },
  {
    id: 'elecampane-thyme-decoction',
    title: 'Elecampane Thyme Decoction',
    preparationType: preparationTypeTaxonomy.decoctions,
    formulaCategory: formulaCategoryTaxonomy.respiratorySupport,
    preparationDescription:
      'A pungent root-and-leaf decoction used in traditional respiratory routines during damp, congested seasons.',
    ingredientHerbs: [
      { herbName: 'Elecampane', botanicalName: 'Inula helenium', herbPart: 'Root' },
      { herbName: 'Thyme', botanicalName: 'Thymus vulgaris', herbPart: 'Leaf' }
    ],
    ingredientAmounts: ['1 teaspoon elecampane root', '1 teaspoon thyme leaf', '12 ounces water'],
    methodSteps: [
      'Simmer elecampane root in water for 15 minutes.',
      'Add thyme and simmer 5 more minutes.',
      'Strain and serve warm.'
    ],
    dosageGuidance: 'Use 1/2 cup once or twice daily for short durations.',
    safetyNotes: 'Avoid with Asteraceae sensitivity and use caution during pregnancy.',
    duration: 'Preparation time: 20 minutes',
    storageNotes: 'Use same day or refrigerate up to 24 hours.',
    preparationTags: [formulaTagTaxonomy.warming, formulaTagTaxonomy.aromatic]
  },
  {
    id: 'coriander-fennel-cumin-decoction',
    title: 'Coriander Fennel Cumin Decoction',
    preparationType: preparationTypeTaxonomy.decoctions,
    formulaCategory: formulaCategoryTaxonomy.digestiveSupport,
    preparationDescription:
      'A kitchen spice decoction inspired by traditional CCF blends for post-meal comfort and bloating support.',
    ingredientHerbs: [
      { herbName: 'Coriander', botanicalName: 'Coriandrum sativum', herbPart: 'Seed' },
      { herbName: 'Fennel', botanicalName: 'Foeniculum vulgare', herbPart: 'Seed' },
      { herbName: 'Cumin', botanicalName: 'Cuminum cyminum', herbPart: 'Seed' }
    ],
    ingredientAmounts: ['1 teaspoon coriander seed', '1 teaspoon fennel seed', '1 teaspoon cumin seed', '16 ounces water'],
    methodSteps: [
      'Lightly crush seeds and place in cool water.',
      'Simmer for 12-15 minutes.',
      'Strain and drink warm between or after meals.'
    ],
    dosageGuidance: 'Up to 1 cup twice daily as needed for occasional digestive discomfort.',
    safetyNotes: 'Use caution with seed allergies or when using herbs that influence blood sugar.',
    duration: 'Preparation time: 15 minutes',
    storageNotes: 'Refrigerate and use within 24 hours.',
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.warming]
  },
  {
    id: 'sarsaparilla-nettle-decoction',
    title: 'Sarsaparilla Nettle Decoction',
    preparationType: preparationTypeTaxonomy.decoctions,
    formulaCategory: formulaCategoryTaxonomy.nutritiveBlends,
    preparationDescription:
      'A mineral-forward root and leaf decoction used in traditional spring cleaning and rebuilding routines.',
    ingredientHerbs: [
      { herbName: 'Sarsaparilla', botanicalName: 'Smilax ornata', herbPart: 'Root' },
      { herbName: 'Nettle', botanicalName: 'Urtica dioica', herbPart: 'Leaf' }
    ],
    ingredientAmounts: ['1 tablespoon sarsaparilla root', '1 tablespoon nettle leaf', '3 cups water'],
    methodSteps: [
      'Simmer sarsaparilla root in water for 25 minutes.',
      'Add nettle during the last 5 minutes.',
      'Strain and serve warm or chilled.'
    ],
    dosageGuidance: 'Commonly taken as 1 cup daily for 1-2 week routines.',
    safetyNotes: 'Review use with renal disease, diuretics, or autoimmune conditions.',
    duration: 'Preparation time: 30 minutes',
    storageNotes: 'Refrigerate and use within 48 hours.',
    preparationTags: [formulaTagTaxonomy.nutritive]
  },
  {
    id: 'devils-claw-ginger-decoction',
    title: 'Devil\'s Claw Ginger Decoction',
    preparationType: preparationTypeTaxonomy.decoctions,
    formulaCategory: formulaCategoryTaxonomy.seasonalWellness,
    preparationDescription:
      'A deeply bitter-warming decoction traditionally used for occasional joint discomfort in cold, damp weather.',
    ingredientHerbs: [
      { herbName: 'Devil\'s Claw', botanicalName: 'Harpagophytum procumbens', herbPart: 'Root' },
      { herbName: 'Ginger', botanicalName: 'Zingiber officinale', herbPart: 'Rhizome' }
    ],
    ingredientAmounts: ['1 teaspoon devil\'s claw root', '1 teaspoon sliced fresh ginger', '12 ounces water'],
    methodSteps: [
      'Add herbs to cold water and bring slowly to a simmer.',
      'Decoct gently for 20-25 minutes.',
      'Strain and drink while warm.'
    ],
    dosageGuidance: 'Use 1/2 to 1 cup once daily for short-term use only.',
    safetyNotes: 'Avoid with peptic ulcers, gallstones, pregnancy, and certain cardiovascular medications without guidance.',
    duration: 'Preparation time: 25 minutes',
    storageNotes: 'Refrigerate and use within 24-36 hours.',
    preparationTags: [formulaTagTaxonomy.bitter, formulaTagTaxonomy.warming]
  },
  {
    id: 'chamomile-oatstraw-rooted-decoction',
    title: 'Chamomile Oatstraw Rooted Decoction',
    preparationType: preparationTypeTaxonomy.decoctions,
    formulaCategory: formulaCategoryTaxonomy.sleepSupport,
    preparationDescription:
      'A gentle evening decoction that balances aromatic calm with nourishing grain support for bedtime routines.',
    ingredientHerbs: [
      { herbName: 'Chamomile', botanicalName: 'Matricaria chamomilla', herbPart: 'Flower' },
      { herbName: 'Oatstraw', botanicalName: 'Avena sativa', herbPart: 'Straw' }
    ],
    ingredientAmounts: ['1 tablespoon oatstraw', '2 teaspoons chamomile flowers', '14 ounces water'],
    methodSteps: [
      'Simmer oatstraw in water for 15 minutes.',
      'Turn off heat, add chamomile, and cover for 5 minutes.',
      'Strain and sip 30-60 minutes before bed.'
    ],
    dosageGuidance: '1 cup in the evening as part of a wind-down ritual.',
    safetyNotes: 'Avoid chamomile with Asteraceae allergy and use caution with sedative medications.',
    duration: 'Preparation time: 20 minutes',
    storageNotes: 'Best prepared fresh in the evening.',
    preparationTags: [formulaTagTaxonomy.caffeineFree, formulaTagTaxonomy.nutritive]
  },
  {
    id: 'roasted-dandelion-chicory-decoction',
    title: 'Roasted Dandelion Chicory Decoction',
    preparationType: preparationTypeTaxonomy.decoctions,
    formulaCategory: formulaCategoryTaxonomy.digestiveSupport,
    preparationDescription:
      'A coffee-style bitter decoction made from roasted roots for morning digestive activation without caffeine.',
    ingredientHerbs: [
      { herbName: 'Dandelion', botanicalName: 'Taraxacum officinale', herbPart: 'Root' },
      { herbName: 'Chicory', botanicalName: 'Cichorium intybus', herbPart: 'Root' }
    ],
    ingredientAmounts: ['1 tablespoon roasted dandelion root', '1 tablespoon roasted chicory root', '12 ounces water'],
    methodSteps: [
      'Combine roasted roots with water and bring to a simmer.',
      'Decoct for 15 minutes on low heat.',
      'Strain and serve plain or with milk.'
    ],
    dosageGuidance: 'Use as 1 morning cup or occasional substitute for coffee.',
    safetyNotes: 'Use caution in ragweed allergy and with active bile duct obstruction.',
    duration: 'Preparation time: 15 minutes',
    storageNotes: 'Refrigerate for 24 hours if needed.',
    preparationTags: [formulaTagTaxonomy.bitter, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'focus-and-clarity-infusion',
    title: 'Focus and Clarity Infusion',
    preparationType: preparationTypeTaxonomy.infusions,
    formulaCategory: formulaCategoryTaxonomy.nutritiveBlends,
    preparationDescription:
      'An aromatic-nutritive daytime blend designed for gentle cognitive steadiness without caffeine.',
    ingredientHerbs: [
      { herbName: 'Lemon Balm', botanicalName: 'Melissa officinalis', herbPart: 'Leaf' },
      { herbName: 'Gotu Kola', botanicalName: 'Centella asiatica', herbPart: 'Aerial parts' },
      { herbName: 'Oatstraw', botanicalName: 'Avena sativa', herbPart: 'Milky tops/straw' }
    ],
    ingredientAmounts: ['1 part lemon balm', '1 part gotu kola', '2 parts oatstraw'],
    methodSteps: [
      'Blend dried herbs and add 1 tablespoon blend to 10 ounces hot water.',
      'Steep covered for 15 minutes.',
      'Strain and sip warm or at room temperature.'
    ],
    dosageGuidance: '1 cup in the morning or early afternoon, up to 2 cups daily.',
    safetyNotes: 'Use individualized guidance for gotu kola in pregnancy or with hepatic conditions.',
    duration: 'Preparation time: 15 minutes',
    storageNotes: 'Use same day for best taste and aromatic quality.',
    preparationTags: [formulaTagTaxonomy.nutritive, formulaTagTaxonomy.caffeineFree]
  }
];

export const remedyCollections = [
  {
    id: 'seasonal-wellness-basics',
    title: 'Seasonal Wellness Basics',
    description:
      'Core preparations for transitional weather support, emphasizing hydration, aromatics, and daily tonic use.',
    formulaCategory: formulaCategoryTaxonomy.seasonalWellness,
    featuredFormulaIds: ['seasonal-immune-support-tea', 'nutritive-mineral-tea'],
    preparationTags: [formulaTagTaxonomy.warming, formulaTagTaxonomy.nutritive]
  },
  {
    id: 'calm-and-restore',
    title: 'Calm and Restore Evening Collection',
    description:
      'Gentle evening-oriented options for nervous system decompression and sleep transition rituals.',
    formulaCategory: formulaCategoryTaxonomy.calmingTeas,
    featuredFormulaIds: ['calming-evening-tea', 'golden-spice-milk-tea'],
    preparationTags: [formulaTagTaxonomy.aromatic, formulaTagTaxonomy.caffeineFree]
  },
  {
    id: 'digestive-daily-support',
    title: 'Digestive Daily Support Collection',
    description:
      'Classic bitters and aromatic preparations that can be rotated around meals for digestive resilience.',
    formulaCategory: formulaCategoryTaxonomy.digestiveSupport,
    featuredFormulaIds: ['digestive-bitters-tea'],
    preparationTags: [formulaTagTaxonomy.bitter, formulaTagTaxonomy.aromatic]
  },
  {
    id: 'seasonal-respiratory-care',
    title: 'Seasonal Respiratory Care Collection',
    description:
      'Moistening and warming preparations often used during dry-air and seasonal respiratory discomfort.',
    formulaCategory: formulaCategoryTaxonomy.respiratorySupport,
    featuredFormulaIds: ['respiratory-soothing-tea', 'seasonal-immune-support-tea'],
    preparationTags: [formulaTagTaxonomy.demulcent, formulaTagTaxonomy.warming]
  },
  {
    id: 'daytime-focus-routines',
    title: 'Daytime Focus Routine Collection',
    description:
      'Caffeine-free daytime options that pair nutritive support with aromatic clarity.',
    formulaCategory: formulaCategoryTaxonomy.nutritiveBlends,
    featuredFormulaIds: ['focus-and-clarity-infusion', 'nutritive-mineral-tea'],
    preparationTags: [formulaTagTaxonomy.nutritive, formulaTagTaxonomy.caffeineFree]
  }
];
