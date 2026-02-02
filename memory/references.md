# References

Useful links, codepen URLs, shadertoy refs, docs pages we found helpful.

---

## Core Docs
- Three.js docs: https://threejs.org/docs
- R3F docs: https://r3f.docs.pmnd.rs
- drei: https://github.com/pmndrs/drei
- maath: https://github.com/pmndrs/maath

## Learning
- Book of Shaders: https://thebookofshaders.com
- Three.js Journey (Bruno Simon): https://threejs-journey.com
- TSL examples: Three.js WebGPU examples in repo

## Inspiration
- Bruno Simon folio-2025: https://github.com/brunosimon/folio-2025
- Shadertoy: https://shadertoy.com
- Codepen WebGL: https://codepen.io/topic/webgl
- Shopify Editions Winter 2026: https://www.shopify.com/editions/winter2026

## Shopify Editions Research (2026-02-02)

Built in-house by Shopify. Key techniques:
- **Depth map parallax:** Flat images + AI depth maps > pseudo-3D via UV displacement in fragment shader. No geometry needed.
- **Shader transitions:** Noise-driven reveals (simplex noise threshold animates 0>1), edge detection dissolution between sections.
- **TSL:** Materials written in Three Shading Language, not raw GLSL.
- **GSAP ScrollTrigger:** Drives shader uniforms (progress, reveal amount) tied to scroll position.
- **Volumetric clouds/atmosphere:** Raymarching in fragment shader with noise layers.
- **Performance:** Heavy use of texture atlases, LOD, and GPU-side animation.

## Visual Reference Categories

- **Systems UI:** Channel E3, Module D9, Kevlar Estudio
- **Street culture:** Studio Uzi, dark backgrounds, graffiti energy
- **Halftone/dither:** Elektronische poster, NYP 105, Korean exhibition, Fake Poster Club
- **Depth/space:** Fotografik poster (spheres + DoF + type)
- **Navigation:** Vinyl record radial diagram
