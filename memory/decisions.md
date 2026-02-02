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
