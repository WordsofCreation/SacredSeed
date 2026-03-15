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
