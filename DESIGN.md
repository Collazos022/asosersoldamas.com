---
name: Industrial Tectonics
colors:
  surface: '#fbf8fc'
  surface-dim: '#dcd9dd'
  surface-bright: '#fbf8fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f7'
  surface-container: '#f0edf1'
  surface-container-high: '#eae7eb'
  surface-container-highest: '#e4e1e6'
  on-surface: '#1b1b1e'
  on-surface-variant: '#45464e'
  inverse-surface: '#303033'
  inverse-on-surface: '#f3f0f4'
  outline: '#76767f'
  outline-variant: '#c6c5cf'
  surface-tint: '#525c86'
  primary: '#1c264d'
  on-primary: '#ffffff'
  primary-container: '#323c64'
  on-primary-container: '#9da7d6'
  inverse-primary: '#bbc4f5'
  secondary: '#954a00'
  on-secondary: '#ffffff'
  secondary-container: '#ff9744'
  on-secondary-container: '#6c3400'
  tertiary: '#002f15'
  on-tertiary: '#ffffff'
  tertiary-container: '#034824'
  on-tertiary-container: '#79b788'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#bbc4f5'
  on-primary-fixed: '#0e193f'
  on-primary-fixed-variant: '#3b456d'
  secondary-fixed: '#ffdcc6'
  secondary-fixed-dim: '#ffb784'
  on-secondary-fixed: '#301400'
  on-secondary-fixed-variant: '#713700'
  tertiary-fixed: '#b1f1bf'
  tertiary-fixed-dim: '#96d5a4'
  on-tertiary-fixed: '#00210d'
  on-tertiary-fixed-variant: '#11512c'
  background: '#fbf8fc'
  on-background: '#1b1b1e'
  surface-variant: '#e4e1e6'
typography:
  headline-xl:
    fontFamily: Bebas Neue
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Bebas Neue
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Bebas Neue
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Bebas Neue
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  technical-data:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 80px
---

## Brand & Style
The design system is engineered for the heavy industry, metalworking, and hydrocarbon sectors. The brand personality is **robust, precise, and authoritative**, mirroring the physical strength of steel and the technical accuracy of engineering blueprints.

The visual style is **Corporate / Modern** with a lean towards **Technical Minimalism**. It prioritizes high-density information and structural clarity. Drawing inspiration from CAD software and industrial schematics, the interface utilizes a "chiseled" aesthetic—avoiding unnecessary ornamentation in favor of functional, high-contrast layouts that evoke a sense of reliability and safety.

**Key visual drivers:**
- **Rigid Structure:** Strict alignment to a grid, reflecting systematic assembly.
- **Precision Accents:** Using thin lines and distinct color coding for technical data.
- **Ruggedness:** Heavy-weight typography and solid blocks of color to convey durability.

## Colors
The palette is rooted in industrial utility and corporate stability.

- **Industrial Navy (#323c64):** The foundational color. Used for headers, primary navigation, and "grounding" elements to establish professional trust.
- **Safety Orange (#ea8635):** The high-visibility accent. Reserved for critical Actions (CTAs), safety-related information, and highlighting active states.
- **Process Green (#326e46):** Represents sustainability and operational efficiency. Used for success states, completed project indicators, and environmental initiatives.
- **Neutral Palette:** Utilizes a range of cool grays and "Steel Gray" for background layering, ensuring the chromatic colors remain impactful.

The default mode is **Light**, providing a clean, paper-like background for technical documentation, though sections highlighting "Large Scale Projects" may utilize a "Deep Navy" background for a premium, high-impact feel.

## Typography
The typography system balances institutional authority with technical legibility.

- **Headlines (Bebas Neue):** A condensed, impactful display face. Its verticality and all-caps nature evoke industrial signage and heavy-duty branding, providing a commanding presence for section titles.
- **Body (Inter):** Highly legible at all sizes, used for descriptions and general interface text to ensure clarity in complex documentation.
- **Technical/Labels (JetBrains Mono):** A monospaced font used for specification tables, serial numbers, and technical measurements. This signals a "data-driven" environment and improves readability for tabular data.

**Scaling:**
Headlines should utilize slightly wider tracking (letter-spacing) to ensure the condensed letterforms of Bebas Neue remain legible and imposing. Technical labels should always be presented with generous tracking for maximum readability on the factory floor or in the field.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to mirror the stability of engineering prints, transitioning to a flexible fluid model on mobile.

- **Grid:** 12-column grid for desktop (1280px max-width), 4-column for mobile.
- **Rhythm:** A strict 8px base unit. All paddings, margins, and heights must be multiples of 8 to ensure a chiseled, aligned look.
- **Sectioning:** Large-scale project sections use "Section Gaps" (80px+) to create breathing room between massive pieces of equipment or case studies, preventing visual clutter.

## Elevation & Depth
This design system rejects soft shadows and blurs, favoring **Tonal Layers** and **Bold Outlines**.

- **Surface Tiering:** Depth is communicated by color blocks rather than shadows. For example, a card sits on a `Steel Gray` background using a `White` fill with a `1px` solid border in `Industrial Navy` (at 10% opacity).
- **Hard Edges:** Shadows, when used for interaction (like a button hover), should be "Hard" (0px blur), appearing as a secondary offset stroke or a solid color shift.
- **Technical Overlays:** Use semi-transparent `Industrial Navy` overlays for image captions in project galleries to maintain text legibility without obscuring the industrial photography.

## Shapes
The shape language is **Sharp (0px)**. 

To reflect the precision of metal cutting and welding, all UI elements—including buttons, cards, and input fields—utilize perfectly square corners. This reinforces the "Rugged" brand pillar. Avoid all radii unless it is a circular status indicator or a branded icon segment.

## Components

### Buttons
- **Primary:** Solid `Safety Orange` with white text. Square corners. High-contrast hover state (slight darkening of the orange).
- **Secondary:** Transparent background with an `Industrial Navy` 2px border.
- **Technical:** Small, `JetBrains Mono` text buttons for data-heavy actions like "Download PDF Specs."

### Service Cards
Cards should feature a "Header-heavy" design.
- **Visual:** 1:1 Aspect ratio image of the machinery or process.
- **Content:** Headline in `Industrial Navy` using `Bebas Neue`, followed by a short description in `Inter`.
- **Footer:** A `Label-caps` tag in the bottom right indicating the service category (e.g., "ISO 9001 CERTIFIED").

### Technical Specification Tables
- **Header:** `Industrial Navy` background with `White` monospaced text.
- **Rows:** Alternating "Zebra" stripes in `Steel Gray` and `White`.
- **Columns:** Explicit vertical borders (1px) to separate parameters from values, ensuring no ambiguity in data reading.

### Project Sections
For high-scale hydrocarbon projects:
- **Full-Width Hero:** Use dark-themed backgrounds (`Blueprint Blue`) to make industrial photography of refineries or welding arcs pop.
- **Data Overlay:** Use small, monospaced "Labels" to call out key project stats (e.g., "Pressure: 5000 PSI", "Steel Grade: A36") directly on the image using thin leader-lines.

### Input Fields & Controls
- **Fields:** Rectangular, 1px border. Focus state uses a `Safety Orange` bottom-border (2px) to clearly indicate the active input area.
- **Checkboxes:** Square, filling with `Process Green` when active to signal "Go/Safe" status.