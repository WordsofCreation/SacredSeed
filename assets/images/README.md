# SacredSeed Image Asset System

This folder is the canonical home for all SacredSeed imagery.

## Folder map

- `raw/` → **Drop zone for original uploads** (camera exports, stock originals, designer files).
- `processed/` → Auto-generated web-ready variants organized by category and slug.
- `herbs/` → Published herb images used directly by the UI.
- `regions/` → Published regional-guide imagery.
- `preparations/` → Published preparation/remedy imagery.
- `site/` → Published site-wide branding, hero, and fallback assets.

Category subfolders under `raw/` and `processed/`:

- `herbs/`
- `regions/`
- `preparations/`
- `site/`

## Where to drop new source images

Put originals in:

- `assets/images/raw/herbs/`
- `assets/images/raw/regions/`
- `assets/images/raw/preparations/`
- `assets/images/raw/site/`
- `assets/images/raw/site/logos/` (**logo originals drop zone**)

You can either:

1. Drop a file directly using the slug name:
   - `assets/images/raw/herbs/stinging-nettle.jpg`
2. Or place images in a slug folder:
   - `assets/images/raw/herbs/stinging-nettle/source-photo-01.jpg`

## Naming convention

Use lowercase kebab-case slugs plus a variant suffix:

- `stinging-nettle-hero.jpg`
- `stinging-nettle-card.jpg`
- `oregon-grape-profile.jpg`
- `pacific-northwest-field-guide-banner.jpg`

Recommended variant suffixes in this repo:

- `hero` (feature headers)
- `profile` (detail pages)
- `card` (listing cards)
- `thumbnail` (small chips/grids)

## Generate processed images

From repo root:

```bash
python3 scripts/process_images.py
```

Default behavior:

- Reads all images from `assets/images/raw/*`
- Generates JPG variants in `assets/images/processed/<category>/<slug>/`
- Publishes copies to `assets/images/<category>/` for direct site use

Useful commands:

```bash
# Preview paths only
python3 scripts/process_images.py --dry-run

# Process one source file in one category
python3 scripts/process_images.py --category herbs --source stinging-nettle.jpg

# Process only card + thumbnail variants
python3 scripts/process_images.py --variants card,thumbnail

# Keep files in processed/ only (no publish copy)
python3 scripts/process_images.py --no-publish
```

## Quality and format guidance

- Keep originals high quality in `raw/`; never edit originals destructively.
- Use the generated variants in `assets/images/<category>/` for UI performance.
- JPG output is currently standardized for broad compatibility and predictable payloads.
- If needed later, this script can be extended to emit WebP/AVIF alongside JPG.

## UI integration notes

- Herb cards/profile components now use image helpers in `src/utils/imageAssets.js`.
- If a herb image is missing, a local SacredSeed placeholder is shown automatically.
- Add image metadata to herb objects only when needed; slug-based paths already work.
