# Learnings

Running log of what we figured out, gotchas, and patterns that work.

---

## 2026-02-02 — Session 1: Scaffold

- Vite + React + R3F scaffolds cleanly with `npm create vite@latest -- --template react-ts`
- drei `Text` works for quick labels but will want `Text3D` with a font file for hero text later
- maath `easing.damp3` is the right way to do smooth camera transitions — set damping to 0.3-0.5 for a nice feel
- Zustand store is minimal: just `currentZone` and `isTransitioning` for now
- Stars + Sparkles from drei give instant atmosphere with almost zero perf cost
- Zone sections visible at edges of landing view — need to push further apart or tighten camera FOV

## 2026-02-02 — Session 2: Brainstorming + Planning

- Reset to blank cube scene was the right call — build from nothing, don't inherit assumptions
- Depth map parallax (Shopify technique): flat image + AI depth map > UV displacement in fragment shader. No geometry. Powerful for turning 2D assets into pseudo-3D.
- Combine post-processing into minimal passes — grain+vignette+chromatic+dither in ONE pass. Each full-screen pass costs.
- TSL for materials, but raw GLSL may be needed for complex post-processing passes
- Map-to-world transition is THE moment — invest disproportionate effort here
- Build one zone to 90% before touching the next — scope is the killer
- Mobile strategy: don't try to make WASD work on touch. Map mode only.
- "Portfolio IS the project" framing unlocked the creative direction — not a container, it's the work itself
- Agent review (design-philosopher + ultrathink) caught scope creep early: 4 zones > 2-3, cut Easter eggs, combine passes
- Personal objects + hand-drawn totems = the soul. Can't be replicated by AI or templates.
