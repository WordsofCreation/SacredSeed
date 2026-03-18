# SEO audit and recommended next steps

## Executive summary

SacredSeed already has several solid SEO foundations in place: page-level title/description handling, canonical tags, JSON-LD support, and automated sitemap/robots generation. The biggest current limitation is architectural: the site is still navigated through hash routes (`#/...`), which weakens discoverability and shareability for deep pages unless you add a prerender or path-based routing layer.

A second immediate issue was sitemap undercoverage. The generator was only indexing herb batches 1-11 even though the repository now contains herb batches 12-19, leaving a large portion of herb profile URLs out of the sitemap. This has been fixed in the same change set.

## What is working now

- Dynamic SEO metadata is applied per page through shared utilities.
- Canonical URLs are normalized to clean non-hash URLs.
- Structured data is injected through reusable schema helpers.
- `sitemap.xml` and `robots.txt` are generated automatically from content sources.
- The site has enough editorial and programmatic content volume to justify a scaled organic search strategy.

## Highest-priority next actions

### 1. Move from hash routing to crawlable path routing

This is the most important SEO project for the site. Right now the app navigation and internal links use `#/...` routes. Even though canonical tags point at clean URLs, crawlers and social/link unfurlers still have to reconcile a JavaScript-only, hash-routed experience with non-hash canonicals.

Recommended target:

- Route pages at clean URLs such as `/herbs/ashwagandha` instead of `#/herbs/ashwagandha`.
- Support those URLs at hosting level with static files or a fallback rewrite.
- Prefer prerendered/static HTML for key templates: home, herb profile, editorial article, collection, pathway, and buyer guide pages.

Why this comes first:

- It improves crawl reliability for your most valuable page types.
- It aligns page URL, canonical URL, sitemap URL, and internal links.
- It makes the 880 herb profiles much more likely to be discovered and indexed consistently.

### 2. Add prerendering for the highest-value templates

If a full framework migration is too large, add a lightweight prerender/build step that outputs static HTML for:

- home
- herb profiles
- editorial articles
- buyer guides
- collections
- learning pathways
- seasonal collections

This gives search engines meaningful HTML on first load and reduces dependence on client-side rendering for content discovery.

### 3. Expand on-page content signals for herb profile pages

The herb library is your largest SEO asset. Each herb profile should become a stronger landing page by ensuring it contains:

- one clear H1 matching search intent
- a concise introductory summary above the fold
- consistent sections for uses, preparations, safety, chemistry, taxonomy, and related content
- unique meta descriptions derived from the best summary field, not generic fallbacks
- medically careful but still search-aligned wording around common use cases

### 4. Build topic clusters around search intent

The site already has herbs, preparations, articles, pathways, collections, and buyer guides. The next step is to intentionally connect these into search clusters, for example:

- herb intent: `lemon balm benefits`, `lemon balm tea`, `lemon balm safety`
- informational intent: `what is a materia medica`, `how to read an herb monograph`
- commercial intent: `best tea infusers`, `best herbal books`

Every major herb should link out to relevant articles, preparations, and collections, and those pages should link back to the herb profile hub.

### 5. Improve media/search presentation assets

A number of pages still depend on a generic default social image. You should create a consistent OG image system for:

- site homepage
- herb profiles
- editorial articles
- buyer guides

This helps click-through rate from social shares and improves presentation in discovery surfaces.

## Secondary actions

### Add breadcrumb schema and visible breadcrumbs

This is especially useful for:

- Herb profiles
- Editorial articles
- Buyer guides
- Collection detail pages

### Tighten internal linking rules

Add stronger contextual links:

- from articles to specific herbs
- from herbs to preparations using that herb
- from collections to pathway pages
- from buyer guides to educational content and vice versa

### Review title tag patterns for keyword specificity

Some current titles are branded and polished, but not always maximally aligned with search phrasing. Consider templates that lead with the searched entity/topic first, then brand second.

### Add content quality safeguards for scaled pages

Because the site has hundreds of herb pages, make sure each page has enough unique explanatory copy to avoid thin-page patterns.

## Priority order

1. Path-based routing or prerendered clean URLs
2. Prerender/static HTML for core templates
3. Strengthen herb profile intros and template consistency
4. Build explicit internal-link topic clusters
5. Improve OG images and breadcrumb markup

## Immediate changes made in this branch

- Fixed sitemap generation so herb batches 12-19 are now included alongside batches 1-11.
- Added this audit to make the next SEO decisions explicit and prioritized.
