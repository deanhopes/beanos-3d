# Creative Direction

The full vision for beanos-3d. Source of truth for what we're building and why.

---

## Vision

**A game with a map.** The portfolio IS the project — the experience itself demonstrates the skill. Not a container for other work.

Overview: radial system diagram with hand-drawn totems marking zones. Zoom into a zone and you're in a 3D environment — keyboard + mouse, first-person exploration. Pull back and you're on the map again.

**Two modes:** Map (2D overview, click hotspots) and World (3D, WASD + mouse).
**Game loop:** Map > Zone > Explore > Discover > Map > Next Zone.

## Feelings (different moments)

- **Curiosity / discovery** — "What's over there? What does this totem mean?"
- **Awe / craft respect** — "How did they make this?"
- **Intimacy / personal** — "I feel like I know this person."
- **Cool / controlled** — "This person has taste."

## Aesthetic DNA

- **Monochrome dominant.** Black void. White/grey. Accent used sparingly.
- **Halftone / dither is the signature.** Screen-space shader on EVERYTHING.
- **Bold typographic hierarchy.** Massive display + tiny data labels.
- **Hand-drawn totems.** Dean draws the zone icons. Personal, not procedural.
- **Handwritten contrast.** Scanned graffiti, tags, sketches. Human marks in digital space.
- **Micrographics.** Information-dense details. Coordinates, status, section numbers.
- **Noise/grain.** Always present. Atmospheric grit.

## Visual References

- Channel E3 / Module D9 — systems UI, editorial grid
- Studio Uzi — dark backgrounds, graffiti/tag energy
- Kevlar Estudio — editorial grid, bold type
- Elektronische poster, NYP 105, Korean exhibition — halftone/dither
- Fotografik poster — spheres with depth of field, type between physical objects
- Vinyl record radial map — labeled zones, lines, arrows
- Shopify Editions Winter 2026 — depth map parallax, shader transitions, TSL

## Navigation

### Map Mode (Overview)
- Radial system diagram — the homepage
- Hand-drawn totems at each zone position
- Click a totem to zoom into that zone
- HUD data: coordinates, status labels, system readouts

### World Mode (3D Exploration)
- Inside a zone — first-person with WASD + mouse look
- ESC or map key > zoom back out to map view
- Each zone has its own atmosphere, objects, content

### Transition (THE make-or-break moment)
- Map > World: Camera zooms in. Totem expands/dissolves. Environment materializes.
- World > Map: Environment dissolves into particles. Camera pulls back. Totems reform.
- The dither shader drives the transition.

## Zones (v1: 2-3 zones, not 4)

### Zone 1: The Forge (Making)
- Projects, experiments, creative output
- Content on floating planes or particle formations
- Demonstrates motion design + 3D + interaction skill

### Zone 2: The Core (Being)
- Personal, about, identity
- Particle objects that represent Dean
- Handwritten elements, scanned sketches
- Most atmospheric/intimate zone

### Zone 3: The Link (Connecting) — maybe v2
- Contact, social, availability
- Status indicators

## Post-Processing (2-3 passes max)

1. **Combined pass:** Dither/halftone + film grain + vignette + chromatic aberration
2. **Bloom:** Half-res, tight, low threshold
3. **Depth of field:** Transition-only, not always active

## Particle System (Core Mechanic)

- InstancedMesh — thousands of particles, one draw call
- Brightness/depth maps control size + Z-position
- Mouse/proximity interaction (repel/attract)
- Hard graphic circles. Grid-based but breakable.
- Personal objects: street objects, Newcastle details

## Technical Approach

- TSL for materials, raw GLSL for post-processing if needed
- Build one zone to 90% before starting others
- Mobile = map mode only (no WASD on touch)
- Performance target: 60fps on mid-range hardware

## Build Order (Phase 1 first)

1. Particle system + dither shader (first tweet-worthy deliverable)
2. Map view with placeholder totems + camera zoom
3. World mode + WASD navigation + mode toggle
4. First zone built to 90%
5. Second zone
6. Polish + ship
