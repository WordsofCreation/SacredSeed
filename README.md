# SacredSeed — Foundational Herbal Data System (Phase 1)

This initial implementation establishes a modular herb profile architecture and integrates a **single botanical API** (iNaturalist) for the first live data source.

## What was added

- Reusable herb profile UI component (`src/components/herbProfileCard.js`).
- Dedicated API service module for plant data (`src/services/apis/inaturalistApi.js`).
- Data normalization layer to map API results to SacredSeed's internal herb object (`src/services/herbNormalizer.js`).
- Orchestration service for herb retrieval with resilient fallback strategy (`src/services/herbProfileService.js`).
- Curated fallback herb dataset for Stinging Nettle (`src/data/herbFallbacks.js`).
- First working herb page flow for **Stinging Nettle (Urtica dioica)** (`src/pages/stingingNettlePage.js`, `src/main.js`).
- Baseline layout and visual style for professional presentation (`index.html`, `styles.css`).

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
  image
}
```

## API + fallback behavior

1. `getHerbProfile('urtica-dioica')` loads curated fallback data.
2. It attempts to fetch a matching taxon from iNaturalist.
3. The normalizer merges available API fields with fallback medicinal context.
4. If API fails, fallback still renders a complete page.

## Files to edit next in Phase 2

- `src/services/herbProfileService.js`
  - Add multi-source merge pipeline (GBIF, PubChem, PlantNet, medicinal/regional datasets).
- `src/services/herbNormalizer.js`
  - Add per-source normalizers and cross-source field confidence scoring.
- `src/data/herbFallbacks.js`
  - Expand curated fallback entries and source attribution metadata.
- `src/components/herbProfileCard.js`
  - Introduce citation chips, source confidence indicators, and structured clinical sections.
- `src/pages/stingingNettlePage.js`
  - Generalize into dynamic route-based herb pages.

## Local run

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.
