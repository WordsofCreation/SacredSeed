# SacredSeed — Foundational Herbal Data System (Phase 2)

This implementation keeps iNaturalist as the **primary botanical source** and adds **GBIF as a secondary enrichment source** for taxonomy verification and occurrence context.

## What was added

- GBIF API adapter module (`src/services/apis/gbifApi.js`).
- GBIF orchestration service with resilient fallback behavior (`src/services/gbifService.js`).
- Multi-source herb merge utility for composing one internal herb object (`src/services/herbMerge.js`).
- Expanded normalization layer to support iNaturalist + GBIF mappings (`src/services/herbNormalizer.js`).
- Updated profile orchestration to fetch and merge both sources without replacing existing primary API (`src/services/herbProfileService.js`).
- Minimal, professional UI additions for taxonomy verification and occurrence context (`src/components/herbProfileCard.js`, `styles.css`).

## Internal herb object contract

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
  dataSources
}
```

## Multi-source behavior

1. `getHerbProfile('urtica-dioica')` loads curated fallback data.
2. It requests iNaturalist (primary source) and GBIF (secondary source) in parallel.
3. Source-specific normalizers map each response shape into the SacredSeed contract.
4. `mergeHerbData` overlays meaningful enriched fields while preserving medicinal fallback content.
5. If GBIF is unavailable or partial, the profile still renders using iNaturalist + fallback.

## Future source hooks

- `src/services/herbProfileService.js`
  - PubChem: phytochemistry and molecular identity enrichment.
  - PlantNet: image/vision validation and additional media context.

## Local run

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.
