# SacredSeed — Foundational Herbal Data System (Phase 3)

This implementation keeps iNaturalist as the **primary botanical source**, GBIF as a **secondary enrichment source**, and now adds **PubChem as a chemistry enrichment layer** for active compound context.

## What was added

- PubChem API adapter module (`src/services/apis/pubchemApi.js`).
- PubChem orchestration service with graceful fallback behavior (`src/services/pubchemService.js`).
- Curated herb-to-compound chemistry mapping for resilient retrieval (`src/data/herbChemistryMappings.js`).
- Expanded normalization layer to support PubChem compound fields (`src/services/herbNormalizer.js`).
- Updated profile orchestration to fetch and merge iNaturalist + GBIF + PubChem into one herb object (`src/services/herbProfileService.js`).
- Minimal, professional UI additions for a user-friendly chemistry section (`src/components/herbProfileCard.js`, `styles.css`).

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
  activeCompounds,
  phytochemicals,
  compoundDetails,
  compoundNames,
  compoundSummaries,
  chemistryNotes,
  chemistrySources,
  dataSources
}
```

## Multi-source behavior

1. `getHerbProfile('urtica-dioica')` loads curated fallback data.
2. It requests iNaturalist (primary), GBIF (secondary), and PubChem (chemistry) in parallel.
3. Source-specific normalizers map each response shape into the SacredSeed contract.
4. `mergeHerbData` overlays meaningful enriched fields while preserving curated medicinal context.
5. If PubChem lookups are partial/ambiguous, curated chemistry mappings provide stable compound anchors.
6. If APIs are unavailable, the profile still renders using curated fallback data.

## Future source hooks

- `src/services/herbProfileService.js`
  - MedicinalActionService: evidence-graded therapeutic actions/mechanisms.
  - SafetyTaxonomyService: contraindications, interactions, and dosage cautions.

## Local run

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.
