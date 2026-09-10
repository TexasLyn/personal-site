---
name: Atelier Engineering
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daef'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8fd'
  surface-container-highest: '#dce2f7'
  on-surface: '#141b2b'
  on-surface-variant: '#464554'
  inverse-surface: '#293040'
  inverse-on-surface: '#edf0ff'
  outline: '#777586'
  outline-variant: '#c7c4d7'
  surface-tint: '#5148d7'
  primary: '#2a14b4'
  on-primary: '#ffffff'
  primary-container: '#4338ca'
  on-primary-container: '#c1beff'
  inverse-primary: '#c3c0ff'
  secondary: '#5654a8'
  on-secondary: '#ffffff'
  secondary-container: '#a7a5ff'
  on-secondary-container: '#393689'
  tertiary: '#692400'
  on-tertiary: '#ffffff'
  tertiary-container: '#8f3400'
  on-tertiary-container: '#ffb393'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e3dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#100069'
  on-primary-fixed-variant: '#372abf'
  secondary-fixed: '#e2dfff'
  secondary-fixed-dim: '#c3c0ff'
  on-secondary-fixed: '#100563'
  on-secondary-fixed-variant: '#3e3c8f'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb597'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#f9f9ff'
  on-background: '#141b2b'
  surface-variant: '#dce2f7'
typography:
  display:
    fontFamily: Newsreader
    fontSize: 4.5rem
    fontWeight: '400'
    lineHeight: '1.05'
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Newsreader
    fontSize: 2.75rem
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 3rem
    fontWeight: '400'
    lineHeight: '1.15'
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 2rem
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Newsreader
    fontSize: 2rem
    fontWeight: '400'
    lineHeight: '1.25'
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Geist
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.75'
    letterSpacing: -0.005em
  body-md:
    fontFamily: Geist
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.65'
    letterSpacing: '0'
  body-sm:
    fontFamily: Geist
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.55'
    letterSpacing: '0'
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: -0.01em
  label-meta:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  space-3xs: 0.25rem
  space-2xs: 0.5rem
  space-xs: 0.75rem
  space-sm: 1rem
  space-md: 1.5rem
  space-lg: 2.5rem
  space-xl: 4rem
  space-2xl: 6rem
  space-3xl: 10rem
  gutter: 2rem
  margin-mobile: 1.5rem
  margin-desktop: 4rem
  max-content-width: 76rem
  reading-column-width: 42rem
---

## Brand & Style

This design system embodies an editorial, high-craft engineering discipline. It reconciles technical rigor with the quiet elegance of architectural monographs and independent technical journals. Intended for senior technical leaders, systems architects, and craft-driven software engineers, the interface serves as a silent, gallery-like canvas where technical architecture, essays, and codebases are presented with deliberate presence.

The aesthetic fuses **Minimalism** with **Editorial Precision**:
- **Uncompromised Space:** Negative space acts as an active layout medium, giving complex technical concepts room to breathe.
- **Asymmetric Composition:** Grids are deliberate and off-center, rejecting uniform card-wall patterns in favor of purposeful, rhythmic pacing.
- **Monochrome Dominance:** A stark refusal of gratuitous visual decoration, relying instead on typographic scale, micro-alignments, and subtle tactile shifts.
- **Calm Authority:** The system communicates restraint, maturity, and deep craftsmanship rather than promotional urgency.

## Colors

The palette operates on absolute economy. The background is rendered in soft, non-reflective off-white tones (`#f8fafc` and `#f1f5f9`), removing the visual strain of raw white while establishing physical warmth. The core typographical hierarchy uses a dense, near-black slate gray (`#111827`), supported by mid-tone slate (`#64748b`) for technical metadata and secondary captions.

The single signature accent is a deep, intellectual indigo (`#4338ca`), employed strictly for intentional points of interaction, terminal command highlights, and reading anchors. It must never be applied decoratively across broad surfaces. Color conveys status only through whisper-level micro-accents.

## Typography

The typographic hierarchy pairs classical literary gravitas with modern engineering utility:
- **Headlines (Newsreader):** Brings warmth, intellectual depth, and editorial cadence. Titles, chapter headers, and pull quotes use italicized or roman styles to evoke the feel of high-end architectural and technical compendiums.
- **Body & Prose (Geist):** Provides clean, rational, and distraction-free legibility across long-form essays, case studies, and systemic breakdowns.
- **System, Code & Labels (JetBrains Mono):** Grounds the interface in engineering authenticity. Used for metadata timestamps, Git commit references, system metrics, inline code snippets, and structural navigation tags.

## Layout & Spacing

The layout is built upon an asymmetric 12-column grid that avoids the monotony of symmetric dashboard grids.
- **Rhythm & Vertical Density:** Vertical spacing uses deliberate, exaggerated proportions (`space-2xl` and `space-3xl`) between major sections to let case studies land with quiet impact. Tight cluster spacing (`space-3xs` through `space-xs`) is reserved solely for metadata pairs and tabular metrics.
- **Asymmetric Offsets:** On desktop viewports, wide editorial content spans 8 columns, while a companion metadata column occupies 3 columns on the opposite edge, leaving a deliberate 1-column negative space gutter.
- **Breakpoints:**
  - `Mobile (< 768px)`: 4-column single stream. Generous vertical breathing room remains, with `margin-mobile` padding.
  - `Tablet (768px - 1024px)`: 8-column layout. Metadata clusters tuck directly beneath section headers.
  - `Desktop (> 1024px)`: 12-column asymmetric layout with a max container width of `76rem` centered on broad displays.

## Elevation & Depth

This system intentionally rejects layered drop shadows, blur-heavy glassmorphism, and skeuomorphic bevels. Spatial hierarchy is maintained through three primary techniques:

1. **Subtle Hairline Delimiters:** Separation is achieved through single-pixel lines using low-contrast slate tints (`rgba(17, 24, 39, 0.07)`). Lines are applied selectively, often only as top borders to establish horizontal datum lines.
2. **Atmospheric Surface Shifts:** Rather than lifting cards toward the viewer with shadows, secondary regions (such as code blocks or architectural callouts) recede into the canvas by transitioning to `#f1f5f9` or a clean `#ffffff` surface.
3. **Typographic Weight & Contrast:** Visual hierarchy is anchored through the stark contrast between intense slate headings and muted sub-labels, producing depth through typographic structure rather than artificial elevation.

## Shapes

Shapes in this design system remain architectural, restrained, and purposeful:
- **Geometry:** Border radius is strictly anchored to `0.25rem` (Soft), avoiding both brutalist sharp corners and bubbly, consumer-tech pill forms.
- **Structural Integrity:** Containers, technical badges, code windows, and image framing adhere to structured rectangular forms. Interactive affordances earn slight softness to register touch capability without compromising the overall grid discipline.

## Components

### Buttons
- **Primary:** Background `#111827`, text `#f8fafc`, typography `Geist` medium (0.875rem), radius `0.25rem`, padding `0.625rem 1.25rem`. Transitions smoothly to `#4338ca` on hover with no dimensional elevation changes.
- **Secondary / Ghost:** Transparent background, hairline border `rgba(17, 24, 39, 0.15)`, text `#111827`. On hover, the border darkens to `#111827` while the background remains transparent.
- **Editorial Text Link:** Pure inline text in `#111827` with an offset underline (`text-underline-offset: 4px`) colored `#4338ca`.

### Chips & Badges
- **Technical Metadata Tag:** Background `#f1f5f9`, text `#334155`, font `JetBrains Mono` (0.75rem), radius `0.25rem`, padding `0.2rem 0.5rem`. No border.
- **Status Indicator:** A 6px solid dot (`#4338ca`) paired with inline monospaced text, communicating deployment statuses or architecture versions.

### Lists & Index Items
- **Project & Essay Rows:** Full-width rows bordered only by a top hairline (`rgba(17, 24, 39, 0.08)`). Renders the publication year in `JetBrains Mono`, title in `Newsreader`, and system domain in muted `Geist`. On hover, the title shifts subtly into `#4338ca` with zero background fill change.

### Input Fields
- **Search & Contact Inputs:** Flat `#ffffff` surface, border `1px solid rgba(17, 24, 39, 0.12)`, radius `0.25rem`, padding `0.75rem 1rem`. Active focus replaces the border with an unambiguous `1px solid #4338ca` and zero glow or shadow spread.

### Cards & Project Showcases
- **Editorial Showcase Tile:** Built without physical box cards. Projects are framed by a top hairline divider, followed by an asymmetric grid: project title and brief on the left, full technical stack and external link on the right. Framed architectural diagrams or schematics sit directly on `#ffffff` surfaces bordered by an ultra-subtle `1px solid rgba(17, 24, 39, 0.06)`.

### Code Blocks & Architecture Callouts
- **Terminal / Code Canvas:** Container surface `#1e293b` with high-contrast syntax highlighting, wrapped in a `0.25rem` radius. Header bar displays repository branch or file path in `JetBrains Mono` alongside a quiet copy button.