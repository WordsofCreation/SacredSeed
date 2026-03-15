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

## Local run

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.
