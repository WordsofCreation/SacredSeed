# SacredSeed — Materia Medica Index Foundation (Phase 5)

This phase extends SacredSeed with a **site-wide compliance and attribution layer** while preserving the existing unified herb object architecture.

## What was added

- Reusable compliance registry for source attribution, licensing notes, disclaimer text, and internal API/commercial-use notes.
- Reusable compliance service that normalizes source metadata into consistent UI-ready attribution entries.
- Shared compliance UI components for subtle disclaimer and source-attribution presentation.
- Herb profile integration for source badges, expandable provider details, and context-sensitive educational/medical disclaimers.
- Materia medica page integration for platform-level educational-use notice and attribution framework communication.
- New About page with polished copy covering mission, offerings, data approach, educational use, and transparency expectations.
- Header navigation updates to support modular routing between core pages.

## Internal herb object contract

The profile contract remains the source-of-truth object shape. The compliance layer reads from the same unified object model and additional metadata (`dataSources`, `chemistrySources`, `medicinalSources`).

```js
{
  commonName,
  botanicalName,
  family,
  synonyms,
  description,
  distribution,
  habitat,
  medicinalProperties,
  preparations,
  safetyNotes,
  image,
  taxonomyStatus,
  kingdom,
  phylum,
  class,
  order,
  genus,
  species,
  nativeRange,
  occurrenceNotes,
  activeCompounds,
  phytochemicals,
  compoundDetails,
  compoundNames,
  compoundSummaries,
  chemistryNotes,
  chemistrySources,
  dataSources,

  // optional index-oriented fields
  slug,
  summary,
  medicinalActions,
  bodySystems,
  safetyCategory,
  safetySummary
}
```

## Compliance architecture

- `src/data/complianceRegistry.js`
  - Canonical source/license metadata (`dataSources`)
  - Disclaimer taxonomy (`disclaimerType`, `disclaimerContent`)
  - Page-level compliance configuration (`complianceByPageType`)
  - Internal operational notes for API/attribution/commercial thresholds (`complianceNotes`)
- `src/services/complianceService.js`
  - Builds normalized attribution records from herb data and source metadata.
  - Resolves context-sensitive disclaimer bundles by page type.
- `src/components/complianceBlocks.js`
  - Renders reusable, subtle compliance cards suitable for herb pages, formula pages, regional guides, and educational content.
# SacredSeed — Materia Medica + Preparation Library (Phase 5)

This phase introduces a structured **Herbal Preparations and Remedies layer** while preserving SacredSeed's unified herb profile architecture, searchable Materia Medica index, and regional-ready expansion model.

## What was added

- Dedicated `#/preparations` experience for:
  - SacredSeed Preparations (single-herb guides)
  - Tea Formulas (single- and multi-herb formulas)
  - Remedy Collections (curated formula groupings)
- Structured preparation data model with reusable fields for:
  - `preparationType`, `preparationDescription`, `methodSteps`
  - `ingredientHerbs`, `ingredientAmounts`
  - `dosageGuidance`, `safetyNotes`, `duration`, `storageNotes`
  - `preparationTags`, `formulaCategory`
- Formula and guide linking to the existing unified herb object via herb slug references.
- Modular service and taxonomy helpers for normalization, filtering, and grouped browsing.
- UI filters for preparation type, formula category, and formula tags.

## Architecture notes

The herb profile contract remains intact and unchanged. Preparation and formula modules extend—not replace—the existing data system.

New modules:

- `src/data/preparationTaxonomy.js`
- `src/data/preparationLibrary.js`
- `src/utils/preparationTaxonomy.js`
- `src/services/preparationLibraryService.js`
- `src/components/preparationLibrary.js`
- `src/pages/preparationLibraryPage.js`

These modules are intentionally small and reusable to support future recipe libraries, seasonal protocols, and educational pathways.

## Initial preparation guides and formulas

Preparation guides include:

- Nettle Infusion
- Yarrow Tea
- Oregon Grape Decoction

Formula/remedy examples include:

- Nutritive Mineral Tea
- Calming Evening Tea
- Seasonal Immune Support Tea

Collections include:

- Seasonal Wellness Basics
- Calm and Restore Evening Collection

## Local run

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Future extension notes

- Add new guides/formulas in `src/data/preparationLibrary.js`.
- Reuse `herbSlug` references to auto-link ingredients to existing herb profiles.
- Extend taxonomy dictionaries in `src/data/preparationTaxonomy.js` as new categories emerge.
- Add educational article routes and glossary cross-links using the preparation collection IDs.

## Image asset workflow

SacredSeed now includes a dedicated image architecture under `assets/images/`:

- Add originals to `assets/images/raw/<category>/`
- Generate web-ready variants with `python3 scripts/process_images.py`
- Use published site paths in `assets/images/<category>/`

Full usage instructions and naming conventions are documented in `assets/images/README.md`.

## Deployment (main branch)

SacredSeed is configured to auto-deploy to **GitHub Pages** whenever `main` receives a push. The workflow is defined in `.github/workflows/deploy-pages.yml`.

Expected production URL:

- `https://wordsofcreation.github.io/SacredSeed/`

If your GitHub org/user or repository name differs, use:

- `https://<owner>.github.io/<repo>/`
