# Heavens — Science Discovery and Research Experience

Heavens is a static-first astronomy platform designed for **GitHub Pages compatibility**, elegant reading, and modular long-term growth.

This phase evolves the site from a visual astronomy experience into a connected knowledge platform with:

- dedicated object pages
- a science-driven Discover hub
- guided astronomy learning pathways
- stronger internal linking between objects, topics, and lessons
- reusable content modules for future research integrations

## What was added

- Dedicated astronomy object pages under `#/objects/<slug>`.
- A new `#/discover` exploration hub with curated science/discovery modules.
- A new `#/learn` section with guided pathways and a `#/learn/start-here` beginner route.
- Science topic pages under `#/topics/<slug>` that connect concepts back to example objects.
- Reusable premium content modules for key facts, science insights, related objects, Q&A callouts, and “observe this next” links.
- A homepage refresh that surfaces featured objects, learning entry points, discovery prompts, and mission framing.
- A local structured content model that supports related objects, related science topics, further reading, research inspiration, tags, and featured content.

## New page architecture

The site uses static hash routing so it remains publishable on GitHub Pages without server-side routing:

- `#/home` — upgraded homepage
- `#/objects` — object directory
- `#/objects/<slug>` — dedicated object pages
- `#/discover` — research/discovery hub
- `#/learn` — learning pathway index
- `#/learn/<slug>` — guided pathway detail page
- `#/topics/<slug>` — science topic pages
- `#/about` — platform overview

## How object pages work

Object pages are generated from local structured data in `src/data/astronomyObjects.js`.

Each object record supports:

- `slug`
- `name`
- `type`
- `constellation`
- `distance`
- `spectralClass`
- `colorTemperature`
- `intro`
- `description`
- `lightLearning`
- `universeContext`
- `astronomerInterest`
- `skyViewerNote`
- `tags`
- `relatedObjects`
- `relatedTopics`
- `furtherReading`
- `researchInspiration`
- `relatedReadingTopics`

The service layer in `src/services/astronomyContentService.js` resolves those relationships into UI-ready collections for object pages, science topics, homepage features, and learning pathways.

## How learning pathways are structured

Learning pathways live in `src/data/astronomyLearningPaths.js`.

Each pathway includes:

- `slug`
- `title`
- `intro`
- `estimatedDuration`
- `difficulty`
- `sections[]`
  - `title`
  - `body`
  - `links[]`
- `relatedObjects`
- `relatedTopics`

The service resolves each `links[]` entry into either an object route or topic route, which keeps the system static-friendly while still feeling interconnected.

## How related content is modeled

Related content is intentionally local-first.

### Objects

Objects connect to:

- related objects
- related science topics
- further reading cards
- research inspiration prompts
- related reading topics
- topic tags

### Science topics

Science topics in `src/data/scienceTopics.js` connect concepts to:

- structured explanatory sections
- example object slugs
- related topic slugs

### Discover

Discovery modules in `src/data/discoveryContent.js` provide:

- featured star
- spectral spotlight
- stellar lifecycle focus
- cosmic question of the day
- deep sky feature
- research spotlight
- rotating “Today in the Heavens” prompts

## Reusable UI modules

Reusable astronomy content components live in `src/components/astronomyContent.js`.

They include:

- key fact panels
- science insight cards
- related object cards
- Q&A callouts
- observe-next recommendations
- explore-more modules
- generic content cards for future local or live research content

## Where future research/data integrations should connect

Future live integrations should attach at the **service layer**, not directly in page rendering:

- `src/services/astronomyContentService.js`

Recommended future additions:

- bibliographic enrichment from ADS-like or archive-like providers
- live observing/event feeds
- catalog cross-links for object identifiers
- data freshness metadata for research panels

The page/components layer is already prepared to consume richer card data without changing the route architecture.

## Major new files/modules

- `src/data/astronomyObjects.js`
- `src/data/scienceTopics.js`
- `src/data/discoveryContent.js`
- `src/data/astronomyLearningPaths.js`
- `src/services/astronomyContentService.js`
- `src/components/astronomyContent.js`
- `src/pages/objectsIndexPage.js`
- `src/pages/objectPage.js`
- `src/pages/discoverPage.js`
- `src/pages/learnPage.js`
- `src/pages/learnPathPage.js`
- `src/pages/scienceTopicPage.js`

## Local run

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173` and navigate with hash routes such as:

- `http://localhost:4173/#/home`
- `http://localhost:4173/#/discover`
- `http://localhost:4173/#/objects/sirius`

## Next best implementation phase

The next strongest phase would be **Observational Tools and Live Data Enrichment**:

- connect the Sky Viewer to object routes directly
- add object visibility/seasonality panels
- add observational planning widgets
- enrich research cards with live archive metadata while keeping local fallbacks
- expand the object library with planets, nebulae, galaxies, and exoplanet systems
