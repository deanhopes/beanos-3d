# beanos.io — 3D Portfolio

**Project:** Immersive 3D portfolio rebuild for beanos.io
**Stack:** Vite 6 + React 19 + Three.js + React Three Fiber + drei + Zustand + Tailwind 4
**Deploy:** Vercel (static)

---

## Roles

**Dean** = Designer. Provides natural language intent, visual direction, 3D models (.glb), textures, color palette, layout sketches, reference images.

**Claude** = Creative Developer. World-class 3D web craft modeled after Bruno Simon. Builds scene composition, TSL shaders, camera systems, interactions, UI overlays, performance optimization.

Dean speaks intent. Claude builds it. Dean approves before shipping.

---

## Session Protocol

On session start:

1. **Get date/time:** `powershell -Command "Get-Date -Format 'dddd, dd MMMM yyyy HH:mm'"`
2. **Read memory:** Scan `memory/` files for context from previous sessions
3. **Check git:** Recent commits, current branch, what changed last
4. **Surface state:** What's built, what's next, any blockers
5. **Ask:** "What are we building today?"

On session end:

1. **Extract learnings** — Append to `memory/learnings.md`
2. **Log decisions** — Append to `memory/decisions.md` if architectural choices were made
3. **Save recipes** — Append to `memory/shader-recipes.md` if new shader patterns were created
4. **Update references** — Append to `memory/references.md` if useful links were found

---

## Design Language

shadcn-inspired. Digital product designer aesthetic — not "creative agency splash page."

- **Colors:** neutral-950 through neutral-50. One accent (violet-500). The 3D scene provides visual richness.
- **Typography:** system-ui stack or Geist. Tight tracking. Weight 400/500 only.
- **Borders:** 1px solid white/10. rounded-lg max.
- **Spacing:** 4px base grid. Generous whitespace.
- **Overlays:** bg-black/40 backdrop-blur-md, border white/10.
- **UI animations:** 150ms ease-out. 3D camera: eased damping via maath.
- **No shadows. No gradients. No decoration.** The 3D scene is the visual interest.

---

## Technical Principles

1. **Performance is design** — 60fps on mid-range laptop or it's not done
2. **Bake everything** — Fake lights, pre-computed shadows, texture tricks over runtime compute (Bruno Simon approach)
3. **TSL for shaders** — Three Shading Language over raw GLSL. WebGL + WebGPU compatible, future-proof
4. **Simple > clever** — Readable code, obvious structure, no abstractions until the third time
5. **Ship the feeling** — The experience matters more than the tech
6. **Minimal dependencies** — Three.js + R3F + drei + Zustand. That's the stack. Don't add more without a strong reason.

---

## Performance Targets

- 60fps on mid-range laptop
- <500KB JS gzipped
- No real-time lights where baking works
- `<Suspense>` everywhere, lazy load by zone proximity
- One video texture playing at a time
- Mobile: reduce particles, disable postprocessing, simplified scene
- Textures: WebP/KTX compressed, power-of-two dimensions

---

## Asset Pipeline

| Asset | Format | Source | Compression |
|-------|--------|--------|-------------|
| 3D Models | .glb | Blender (Dean) | gltf-transform + ETC1S |
| Textures | .webp / .ktx2 | Photoshop/Blender (Dean) | WebP or KTX-Software |
| Environment maps | .hdr → .ktx2 | HDRI Haven / custom | KTX-Software |
| Fonts | .woff2 | — | Already compressed |
| Project thumbnails | .webp | Portfolio assets | Sharp/squoosh |

---

## Architecture

```
beanos-3d/
├── agent/                    # Brain file
│   └── creative-developer.md
├── memory/                   # Session knowledge persistence
│   ├── learnings.md
│   ├── decisions.md
│   ├── shader-recipes.md
│   ├── performance-notes.md
│   └── references.md
├── public/
│   ├── models/               # .glb scene models
│   ├── textures/             # Env maps, baked maps
│   ├── portfolio/            # Project assets (images, videos)
│   └── fonts/
├── src/
│   ├── main.tsx
│   ├── App.tsx               # Canvas + providers
│   ├── data/                 # Content (projects.ts, site.ts, about.ts)
│   ├── scene/                # Scene.tsx, Environment.tsx, Camera.tsx
│   ├── sections/             # Landing.tsx, Projects.tsx, About.tsx
│   ├── components/
│   │   ├── three/            # Reusable 3D components
│   │   └── ui/               # 2D overlay HUD
│   ├── shaders/              # TSL shader modules
│   ├── hooks/
│   ├── store/                # Zustand
│   └── styles/
```

---

## Reference Resources

When building, Claude should consult:

- **Three.js docs:** threejs.org/docs
- **drei:** github.com/pmndrs/drei
- **TSL examples:** Three.js examples (WebGPU section)
- **Book of Shaders:** thebookofshaders.com (concepts, even if writing TSL not GLSL)
- **Shadertoy:** shadertoy.com (technique reference, adapt to TSL)
- **Bruno Simon folio-2025:** github.com/brunosimon/folio-2025
- **Codepen WebGL:** codepen.io/topic/webgl
- **Context7 MCP:** Use for up-to-date Three.js/R3F/drei docs

---

## Current State

- **Phase:** Scaffold complete. Navigable dark 3D scene with 3 zones (Landing, Projects, About).
- **Next:** Project admin setup, then continue scene development.
- **Live:** Not yet deployed. Dev only at localhost:5173.
