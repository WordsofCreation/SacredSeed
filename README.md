# Heavens — Modern Observatory Experience for the Web

Heavens is a static-first astronomy platform built for **GitHub Pages compatibility**, elegant visual exploration, and modular long-term growth.

This phase evolves the project into a richer observatory-style experience that combines:

- **Observatory Mode** for immersive sky exploration
- lightweight interactive sky discovery
- guided journeys and “Tonight’s Journey” prompts
- premium object focus panels
- integrated science storytelling modules
- constellation and sky-region discovery
- upgraded homepage invitation and editorial discovery surfaces

The result is designed to feel like **a modern observatory for the web**: atmospheric, educational, approachable, and performant — without becoming a heavy planetarium engine.

## What Observatory Mode is

Observatory Mode is the new flagship experience under `#/observatory`.

It combines:

- a stylized full-width sky canvas
- highlighted major stars and famous objects
- constellation-region focus cards
- guided discovery journeys
- an object focus panel that updates in place
- lightweight depth, glow, and motion treatments
- object deep-linking via routes like `#/observatory/sirius`

Observatory Mode is intentionally curated rather than physically exhaustive. It does **not** try to simulate the full night sky in real time. Instead, it offers a premium educational exploration layer powered by local structured data and modular vanilla JavaScript.

## How the immersive sky experience is structured

The immersive sky experience is split into local data, service resolution, rendering, and browser behavior.

### Data layer

- `src/data/astronomyObjects.js`
  - Core object records for stars and clusters used across the site.
- `src/data/observatoryContent.js`
  - Observatory-specific coordinates, prominence markers, guided journeys, constellation regions, and science storytelling modules.

### Service layer

- `src/services/astronomyContentService.js`
  - Resolves base object, topic, pathway, and discover relationships.
- `src/services/observatoryService.js`
  - Merges base astronomy objects with observatory coordinates and curated experience metadata.

### Rendering layer

- `src/pages/observatoryPage.js`
  - Renders Observatory Mode.
- `src/pages/homePage.js`
  - Upgrades the homepage with Observatory Mode invitations, tonight’s route, and storytelling panels.
- `src/pages/discoverPage.js`
  - Expands Discover into the editorial companion to the observatory experience.
- `src/pages/objectPage.js`
  - Adds a richer object focus experience and observatory deep links.

### Browser interaction layer

- `src/components/observatoryExperience.js`
  - Draws the starfield canvas, syncs focused objects, updates region/journey panels, and keeps interactions lightweight.

## How guided journeys are modeled

Guided journeys live in `src/data/observatoryContent.js` as reusable objects.

Each journey includes:

- `slug`
- `title`
- `summary`
- `duration`
- `objectSlugs[]`
- `primaryTopicSlug`
- `steps[]`

The observatory service resolves these into:

- `objectsDetailed[]`
- `primaryTopic`

This keeps the architecture static-friendly while making it easy to add:

- beginner onboarding routes
- seasonal star tours
- naked-eye-only journeys
- science-specific sequences like “follow the light”

## How object focus panels work

Object focus behavior is driven by local object metadata plus observatory-specific presentation fields.

When a user selects an object in Observatory Mode:

1. the focused object is highlighted in the canvas
2. the detail panel updates in place
3. badges and profile markers reinforce the object’s role
4. the panel surfaces related science context and deep links
5. the route can update to `#/observatory/<slug>` for direct entry

Each focused object can display:

- object name
- type
- constellation
- distance
- spectral class
- color/temperature note
- why the object matters
- what its light reveals
- fame/prominence badges
- naked-eye labeling where relevant

## How constellation and sky regions are modeled

Constellation and sky-region cards also live in `src/data/observatoryContent.js`.

Each region includes:

- `slug`
- `name`
- `title`
- `note`
- `culturalNote`
- `objects[]`
- `points[]` for stylized region shapes in the sky canvas

These regions are intentionally simplified so the site stays:

- fast
- legible
- educational
- mobile-friendly

## How to add a new featured object

1. Add the base astronomy record to `src/data/astronomyObjects.js`.
2. Add observatory-specific position and storytelling fields to `src/data/observatoryContent.js` under `observatoryObjects`.
3. Link the object to related topics and related objects.
4. Optionally place it into one or more:
   - `constellationRegions`
   - `observatoryJourneys`
   - homepage or discover features through service-layer usage

## How to add a new constellation or sky region

1. Create a new region object in `src/data/observatoryContent.js` under `constellationRegions`.
2. Provide:
   - a unique `slug`
   - visible `title`
   - descriptive notes
   - object slugs
   - normalized `points[]` for the stylized region shape
3. The region will become available to Observatory Mode through `src/services/observatoryService.js`.

## How to add a new guided experience

1. Add a new record to `observatoryJourneys` in `src/data/observatoryContent.js`.
2. Reference existing object slugs and a related science topic slug.
3. Write concise `steps[]` that feel like a guided route, not a textbook outline.
4. Observatory Mode will automatically surface the new journey in the guided discovery layer.

## Homepage upgrade highlights

The homepage now emphasizes:

- **Enter Observatory Mode**
- **Featured object of the night**
- **Tonight’s Journey**
- **Explore the sky**
- **Understand starlight**
- **Guided journeys**
- **Science storytelling modules**

This makes the product vision clear immediately: Heavens is not just a reading site or a raw viewer, but a premium educational observatory experience.

## Performance and accessibility considerations

The experience remains lightweight and static-friendly by design.

### Performance

- No server-side infrastructure is required.
- All experience data is local and bundled as JavaScript modules.
- The sky layer uses a lightweight browser canvas instead of a heavy visualization dependency.
- No heavy SPA framework was introduced.
- Hash routing preserves GitHub Pages compatibility.

### Accessibility

- Interactive controls are implemented with semantic buttons and links.
- Observatory controls remain keyboard reachable where practical.
- Motion remains subtle and respects `prefers-reduced-motion`.
- Content remains readable even if optional interactive scripts fail.
- Object pages and discover pages still provide non-canvas entry points into the same content.

## Major new files/modules

- `src/data/observatoryContent.js`
- `src/services/observatoryService.js`
- `src/components/observatoryExperience.js`
- `src/pages/observatoryPage.js`

## Updated files of note

- `src/data/astronomyObjects.js`
- `src/pages/homePage.js`
- `src/pages/discoverPage.js`
- `src/pages/objectPage.js`
- `src/main.js`
- `src/utils/pageSeo.js`
- `styles.css`
- `index.html`

## Routes

The site uses static hash routing so it remains publishable on GitHub Pages without server-side routing:

- `#/home` — upgraded homepage
- `#/observatory` — Observatory Mode
- `#/observatory/<slug>` — deep-linked focused observatory object
- `#/objects` — object directory
- `#/objects/<slug>` — dedicated object pages
- `#/discover` — editorial discovery hub
- `#/learn` — learning pathway index
- `#/learn/<slug>` — guided pathway detail page
- `#/topics/<slug>` — science topic pages
- `#/about` — platform overview

## Local run

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173` and navigate with hash routes such as:

- `http://localhost:4173/#/home`
- `http://localhost:4173/#/observatory`
- `http://localhost:4173/#/observatory/sirius`
- `http://localhost:4173/#/discover`
- `http://localhost:4173/#/objects/betelgeuse`

## How the new immersive experience fits the existing site

The observatory layer does not replace the rest of Heavens.

Instead it acts as the premium front door:

- **Homepage** invites visitors into observatory exploration.
- **Observatory Mode** creates focused emotional engagement and discovery.
- **Object pages** deepen the selected target with structured science context.
- **Discover** provides editorial prompts and storytelling modules.
- **Learn** keeps longer educational routes available for structured study.

This means the site now supports both:

- immediate, atmospheric exploration
- deeper, connected science learning

## Next best implementation phase

The next strongest phase would be **Seasonal Observing and Personal Context**.

Recommended additions:

- seasonal sky packs and rotating monthly observatory scenes
- local-time or hemisphere-aware featured journeys with graceful fallbacks
- visibility windows and “best seen in” guidance for objects
- expanded object libraries covering planets, nebulae, and galaxies
- deeper object comparison modules for stellar class, luminosity, and scale
- optional richer cultural sky storytelling modules with careful sourcing
