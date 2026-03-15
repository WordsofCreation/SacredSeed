# SacredSeed — Materia Medica Index Foundation (Phase 4)

This phase introduces SacredSeed's first **searchable Materia Medica index** while preserving the existing unified herb profile architecture.

## What was added

- Dedicated Materia Medica index page with searchable/filterable herb discovery UI.
- Modular index service layer for seed collection loading, taxonomy generation, and composable filters.
- Reusable taxonomy utilities for normalized labels and option extraction.
- Reusable index rendering component with result count and empty-state reset action.
- Hash-based navigation between index and individual herb profile pages.
- Expanded curated fallback herb seed entries to demonstrate scalable filtering with multiple herbs.

## Internal herb object contract

The profile contract remains the source-of-truth object shape. The index now reads from the same unified object model and optional index-specific fields.

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

## Materia Medica filtering model

The index currently supports combined filtering by:

- Keyword search (`commonName`, `botanicalName`)
- Medicinal actions
- Body systems
- Preparation types
- Safety categories

All filter values are normalized before being rendered and evaluated.

## Local run

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Future extension notes

- Add additional herbs in `src/data/herbFallbacks.js` using the same unified herb object format.
- Replace/augment fallback collection with source-fed registry data in `getMateriaMedicaCollection()`.
- Add pagination/sorting in the index service without reworking card rendering.
