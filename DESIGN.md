---
name: Star-Lord_I Portfolio
description: Precision creative developer portfolio with cosmic telemetry and tactile terminal aesthetics
colors:
  primary: "#4A7FF7"
  secondary: "#E8734B"
  tertiary: "#22C55E"
  neutral-bg: "#141415"
  neutral-surface: "#1C1C1E"
  neutral-surface-subtle: "#242426"
  text-primary: "#F4F4F4"
  text-muted: "#9E9E9E"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Plus Jakarta Sans, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Plus Jakarta Sans, system-ui, -apple-system, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "Plus Jakarta Sans, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.05em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.text-primary}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.primary}"
  button-secondary:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
  input:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "10px 14px"
  card:
    backgroundColor: "{colors.neutral-surface}"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: Star-Lord_I Portfolio

## Overview

**Creative North Star: "The Lab Terminal"**

The Star-Lord_I design language treats the browser viewport as an advanced instrumentation console: crisp, high-contrast, mathematically structured, and tactile. Instead of generic software gradients or heavy muddy shadows, surfaces are obsidian dark, structured with hairline perimeter boundaries, and punctuated with high-density monospace telemetry.

Every section balances industrial discipline with electric energy. Dark matter (`#141415`) anchors the background canvas, elevated surfaces (`#1C1C1E`) provide card clarity, and high-octane cyber cobalt (`#4A7FF7`) and retro tape orange (`#E8734B`) illuminate active states like phosphor gauges powering up under touch.

**Key Characteristics:**
- **Obsidian Telemetry Canvas:** Deep, matte dark surfaces (`#141415`) overlaid with subtle dot-matrix coordinates.
- **Bifurcated Typography:** Humanist geometric headlines (Plus Jakarta Sans) paired strictly with code-line monospace metadata (JetBrains Mono).
- **Tactile Hairline Boundaries:** Precise 1px borders providing structure without visual weight.
- **Kinetic Micro-Feedback:** Snappy hover lifts (-2px) and glowing phosphor border transitions.

## Colors

A high-contrast telemetry palette contrasting deep void tones with electric neon phosphor accents.

### Primary
- **Electric Cyber Cobalt** (`#4A7FF7` in dark, `#1B5DEF` in light): Primary system accent, interactive links, focused borders, active badges, and key action highlights.

### Secondary
- **Retro Cassette Flame** (`#E8734B` in dark, `#E25327` in light): Persona moniker highlights (`aka Star-Lord_I`), warm analog mixtape signals, and featured tag highlights.

### Tertiary
- **Emerald Signal** (`#22C55E`): Live availability indicators, heartbeat pulses, and system operational statuses.

### Neutral
- **Obsidian Canvas** (`#141415` in dark, `#F4F4F4` in light): Base backdrop canvas.
- **Console Surface** (`#1C1C1E` in dark, `#FFFFFF` in light): Component container and interactive card surface.
- **Elevated Chamber** (`#242426` in dark, `#ECECEC` in light): Tooltip, floating modal, and subtle inset backgrounds.
- **Phosphor High-Contrast Text** (`#F4F4F4` in dark, `#191818` in light): Primary titles, high-priority labels, and active button text.
- **Muted Steel Gray** (`#9E9E9E` in dark, `#666464` in light): Descriptive body text, inactive icons, and secondary annotations.
- **Hairline Border** (`rgba(244, 244, 244, 0.12)` in dark, `rgba(25, 24, 24, 0.10)` in light): Crisp structural dividers and card envelopes.

### Named Rules
**The 10% Phosphor Rule.** Neon cobalt and cassette flame are reserved for key CTAs, hover outlines, and system telemetry pills. Over 90% of visual mass must remain pure obsidian and crisp white text.

**The Hairline Boundary Rule.** Structural division is achieved exclusively with 1px hairline borders (`rgba(244, 244, 244, 0.12)` in dark mode); drop shadows are never used to define edge boundaries.

## Typography

**Display Font:** Plus Jakarta Sans (with system-ui, -apple-system, sans-serif)  
**Body Font:** Plus Jakarta Sans (with system-ui, -apple-system, sans-serif)  
**Label/Mono Font:** JetBrains Mono (with monospace)

**Character:** Conversational, confident modern geometric sans for human reading; razor-sharp code-grade monospace for indices, routes, counters, and telemetry data.

### Hierarchy
- **Display** (800 weight, `clamp(2.25rem, 5vw, 3.75rem)`, 1.1 line-height): Hero greeting and primary name statement.
- **Headline** (700 weight, `clamp(1.75rem, 3.5vw, 2.25rem)`, 1.2 line-height): Section headers and major stage milestones.
- **Title** (600 weight, `1.25rem`, 1.3 line-height): Project titles, role titles, and card headers.
- **Body** (400 weight, `1rem`, 1.6 line-height, max 65ch): Narrative paragraphs, case study intros, and experience descriptions.
- **Label** (500 weight, `0.75rem`, `0.05em` letter-spacing, lowercase with numerical prefixes): Indices (`01 // FEATURED WORK`), tags, status pills, and code tokens.

### Named Rules
**The Dual-Taxonomy Rule.** Every structural heading must be preceded by a numbered monospace index tag (e.g. `03 // FEATURED WORK`) in JetBrains Mono. Human content uses Plus Jakarta Sans; machine/status content uses JetBrains Mono.

## Layout

A precision 12-column responsive layout built inside a centered `max-w-6xl` shell with consistent edge gutters (`px-4 sm:px-6`). Sections are separated by explicit 1px horizontal hairline rules (`border-t border-black/10 dark:border-white/10`) and punctuated with generous vertical breathing room (`py-16 sm:py-20`).

Background textures use subtle mathematical dot matrices (`background-size: 24px 24px`) rather than organic gradients.

## Elevation & Depth

Surfaces are intentionally flat and grounded at rest. Depth is communicated strictly through surface luminance shifts (dark canvas `#141415` to card `#1C1C1E`) and crisp 1px borders, never muddy diffuse drop shadows.

### Shadow Vocabulary
- **Resting Surface** (`box-shadow: none`): Elements rest flat on their background plane.
- **Interactive Hover** (`box-shadow: 0 4px 20px rgba(74, 127, 247, 0.15)`): Subtle electric cobalt ambient wash emitted only on hover states.

### Named Rules
**The Flat-By-Default Rule.** Surfaces never cast heavy physical shadows at rest. Shadow is an active state response that communicates interactive readiness or focus.

## Shapes

A strict geometry hierarchy:
- **Pills (`rounded-full`):** Reserved exclusively for telemetry pills, live availability statuses, and micro tags.
- **Action Controls (`rounded-lg`, 8px):** Primary buttons, secondary buttons, theme toggles, and form controls.
- **Data Containers (`rounded-xl`, 12px):** Project cards, terminal consoles, and experience blocks.
- **Corners:** No sharp 0px brutalist edges, and no exaggerated 24px+ organic blobs.

## Components

### Buttons
- **Shape:** Rounded rectangle (`rounded-lg`, 8px)
- **Primary:** High-contrast solid fill (`#FFFFFF` in dark, `#000000` in light), font-mono text-xs, bold.
- **Primary Hover:** Slight opacity transition (`hover:opacity-90`) or cobalt fill swap with `-1px` spring lift.
- **Secondary / Outline:** Container fill (`#1C1C1E`), hairline border (`rgba(255,255,255,0.1)`), text-white. Hover triggers cobalt border glow (`border-[#4A7FF7]`).

### Inputs / Fields
- **Shape:** Rounded rectangle (`rounded-lg`, 8px)
- **Style:** Subtle inset background (`#242426` or `#1E1E20` in dark, `#F9F9F9` in light), hairline border (`border-hairline`), text-white.
- **Focus:** Sharp border color transition to primary cobalt (`#4A7FF7`), outline suppressed.
- **Typography:** Labels in JetBrains Mono uppercase (`0.75rem`), inputs in clean responsive body sans.

### Status Pills
- **Style:** `rounded-full`, hairline border, surface background, font-mono text-xs.
- **State:** Displays pulsing green dot (`bg-emerald-500 animate-pulse`) with piped divider.

### Cards / Containers
- **Corner Style:** `rounded-xl` (12px)
- **Background:** Obsidian surface (`#1C1C1E` in dark, `#FFFFFF` in light)
- **Border:** 1px hairline border (`border-hairline`)
- **Hover Treatment:** Spring translation (`transform: translateY(-2px)`) and border color shift to `var(--blue-accent)`.

### Navigation
- **Header:** Sticky top header with `backdrop-blur-md` and 90% background opacity.
- **Links:** JetBrains Mono text-xs with muted numerical indicators (`01. about`), brightening to white on hover.

### Signature Components
- **TerminalBox:** A live diagnostic command terminal demonstrating interactive CLI commands, skills, and system telemetry with macOS-inspired window controls and copy-to-clipboard feedback.
- **Sprout Mascot Companion:** An original botanical interactive companion with responsive waving animations, floating speech bubble triggers, and conversational project knowledge.
- **Retro Cassette Player:** A floating retro-audio widget with interactive rotating reels, tape window, equalizer spectrum bars, and Guardians-inspired Awesome Mix playlist.

## Do's and Don'ts

### Do:
- **Do** precede major section headlines with a numbered monospace slug in JetBrains Mono (`01 // ABOUT ME`).
- **Do** use hairline borders (`border: 1px solid var(--border-color)`) to define element perimeters.
- **Do** elevate interactive elements by exactly `-2px` on hover with a smooth cubic-bezier curve.
- **Do** enforce high contrast for text against obsidian backgrounds (`#F4F4F4` on `#141415`).

### Don't:
- **Don't** use generic multi-colored blurred drop shadows or muddy glows behind static components.
- **Don't** use rounded organic radii greater than 16px on rectangular cards.
- **Don't** use saturated accent colors across large surface fills; accents are strictly phosphor outlines, badges, and cursor highlights.
- **Don't** mix sans-serif into metadata badges or terminal outputs; keep code telemetry strictly in JetBrains Mono.
