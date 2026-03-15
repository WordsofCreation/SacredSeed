#!/usr/bin/env python3
"""SacredSeed image processing utility.

- Reads source files from assets/images/raw/<category>
- Writes optimized variants to assets/images/processed/<category>/<slug>/
- Optionally publishes web-facing copies to assets/images/<category>/
"""

from __future__ import annotations

import argparse
import re
import shutil
import sys
from pathlib import Path
from typing import Iterable

try:
    from PIL import Image
except ImportError:  # pragma: no cover - runtime guidance path
    Image = None

IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp", ".tif", ".tiff"}
CATEGORIES = ("herbs", "regions", "preparations", "site")
VARIANT_SPECS = {
    "hero": (1600, 900),
    "profile": (1200, 1200),
    "card": (640, 480),
    "thumbnail": (320, 320),
}


def slugify(value: str) -> str:
    value = value.strip().lower()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-")


def find_raw_images(raw_root: Path, category: str) -> Iterable[Path]:
    category_root = raw_root / category
    if not category_root.exists():
        return []
    return sorted(
        p
        for p in category_root.rglob("*")
        if p.is_file() and p.suffix.lower() in IMAGE_EXTENSIONS
    )


def derive_slug(category_root: Path, source_path: Path, explicit_slug: str | None = None) -> str:
    if explicit_slug:
        return slugify(explicit_slug)

    relative = source_path.relative_to(category_root)
    if len(relative.parts) > 1:
        return slugify(relative.parts[0])

    return slugify(source_path.stem)


def ensure_pillow() -> None:
    if Image is None:
        print(
            "Pillow is required for processing images. Install with: python3 -m pip install Pillow",
            file=sys.stderr,
        )
        sys.exit(1)


def write_variant(image: Image.Image, output_path: Path, max_size: tuple[int, int], quality: int) -> None:
    image_copy = image.copy()
    image_copy.thumbnail(max_size, Image.Resampling.LANCZOS)

    output_path.parent.mkdir(parents=True, exist_ok=True)
    save_kwargs = {"optimize": True}
    if output_path.suffix.lower() in {".jpg", ".jpeg", ".webp"}:
        save_kwargs["quality"] = quality

    image_copy.save(output_path, **save_kwargs)


def process_image(
    source_path: Path,
    processed_root: Path,
    publish_root: Path,
    category: str,
    slug: str,
    variants: list[str],
    quality: int,
    publish: bool,
    dry_run: bool,
) -> list[Path]:
    outputs: list[Path] = []

    if dry_run:
        for variant in variants:
            name = f"{slug}-{variant}.jpg"
            outputs.append(processed_root / category / slug / name)
            if publish:
                outputs.append(publish_root / category / name)
        return outputs

    ensure_pillow()
    with Image.open(source_path) as image:
        image = image.convert("RGB")
        for variant in variants:
            size = VARIANT_SPECS[variant]
            output_name = f"{slug}-{variant}.jpg"
            processed_path = processed_root / category / slug / output_name
            write_variant(image, processed_path, size, quality)
            outputs.append(processed_path)

            if publish:
                publish_path = publish_root / category / output_name
                publish_path.parent.mkdir(parents=True, exist_ok=True)
                shutil.copy2(processed_path, publish_path)
                outputs.append(publish_path)

    return outputs


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Generate SacredSeed image variants.")
    parser.add_argument("--category", choices=CATEGORIES, help="Process a single category.")
    parser.add_argument("--source", help="Process one source image path under assets/images/raw/<category>/.")
    parser.add_argument("--slug", help="Override slug for output names.")
    parser.add_argument("--variants", default="hero,profile,card,thumbnail", help="Comma-separated variant names.")
    parser.add_argument("--quality", type=int, default=84, help="Quality for lossy outputs (default: 84).")
    parser.add_argument("--no-publish", action="store_true", help="Skip copying to assets/images/<category>/")
    parser.add_argument("--dry-run", action="store_true", help="Preview output targets without writing files.")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    root = Path(__file__).resolve().parent.parent
    raw_root = root / "assets/images/raw"
    processed_root = root / "assets/images/processed"
    publish_root = root / "assets/images"

    variants = [slugify(v) for v in args.variants.split(",") if v.strip()]
    unknown_variants = [variant for variant in variants if variant not in VARIANT_SPECS]
    if unknown_variants:
        print(f"Unknown variants: {', '.join(unknown_variants)}", file=sys.stderr)
        print(f"Supported variants: {', '.join(VARIANT_SPECS)}", file=sys.stderr)
        sys.exit(1)

    categories = [args.category] if args.category else list(CATEGORIES)
    publish = not args.no_publish

    output_count = 0
    for category in categories:
        category_root = raw_root / category
        if args.source and not args.category:
            print("--source requires --category.", file=sys.stderr)
            sys.exit(1)

        if args.source and args.category == category:
            source_path = category_root / args.source
            sources = [source_path]
        else:
            sources = list(find_raw_images(raw_root, category))

        for source_path in sources:
            if not source_path.exists():
                print(f"Skipping missing source: {source_path}", file=sys.stderr)
                continue

            slug = derive_slug(category_root, source_path, args.slug)
            generated = process_image(
                source_path=source_path,
                processed_root=processed_root,
                publish_root=publish_root,
                category=category,
                slug=slug,
                variants=variants,
                quality=args.quality,
                publish=publish,
                dry_run=args.dry_run,
            )
            for path in generated:
                print(path.relative_to(root))
                output_count += 1

    print(f"Completed. Generated {output_count} file targets.")


if __name__ == "__main__":
    main()
