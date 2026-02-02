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
