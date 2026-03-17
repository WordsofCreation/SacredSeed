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
