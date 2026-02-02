# Decisions

Architectural choices and reasoning. Don't re-debate these unless requirements change.

---

## 2026-02-02 — Framework: Vite + React SPA

**Decision:** Vite + React, not Astro or Next.js.
**Reasoning:** Full immersive 3D experience means React owns the entire viewport. Astro/Next fight this pattern with hydration/routing overhead. Blog SEO is a non-issue (2 posts, portfolio site). All energy goes into WebGL craft, not framework config.

## 2026-02-02 — Shaders: TSL over GLSL

**Decision:** Three Shading Language for all shader work.
**Reasoning:** WebGL + WebGPU compatible, future-proof. Created by Sunag (Three.js core). Bruno Simon's 2025 portfolio uses it. Learning TSL is the better long-term investment.

## 2026-02-02 — UI: shadcn-inspired, no library

**Decision:** Hand-rolled UI with shadcn design principles. No shadcn dependency.
**Reasoning:** Portfolio needs to look like a digital product designer built it. Clean, monochrome, minimal. shadcn's aesthetic is right but the library adds unnecessary dependency for a handful of overlay components.

## 2026-02-02 — State: Zustand

**Decision:** Zustand for global state.
**Reasoning:** Lightweight, no boilerplate, works perfectly with R3F's render loop. One store file, flat state.

## 2026-02-02 — Zones: 2-3, not 4

**Decision:** Ship v1 with 2 zones (Forge + Core), maybe 3. Cut Easter eggs.
**Reasoning:** Agent review (design-philosopher + ultrathink) flagged scope risk. Build one zone to 90% before starting another. Quality > quantity.

## 2026-02-02 — Post-processing: Combined passes

**Decision:** Combine grain + vignette + chromatic aberration + dither into ONE shader pass. Half-res bloom. DoF transition-only.
**Reasoning:** 12 full-screen passes won't hit 60fps. 2-3 passes max. Performance is design.

## 2026-02-02 — Mobile: Map mode only

**Decision:** No WASD/world mode on mobile. Map view with touch navigation.
**Reasoning:** Touch + first-person 3D is a bad UX. Map mode works on any screen. World mode is desktop reward.

## 2026-02-02 — Totems: Hand-drawn by Dean

**Decision:** Dean hand-draws the zone icons/totems. Not procedurally generated.
**Reasoning:** Personal marks can't be replicated. Adds the soulful contrast to digital precision. Scanned and used as textures.

## 2026-02-02 — Transition is priority #1

**Decision:** Map-to-world transition is THE make-or-break moment. Invest disproportionate time here.
**Reasoning:** Agent review identified this as the single element that defines whether the experience feels premium or gimmicky. The dither shader drives it.
