---
name: Sentinel Civic (Dark Mode)
colors:
  surface: '#101419'
  surface-dim: '#101419'
  surface-bright: '#36393f'
  surface-container-lowest: '#0b0e13'
  surface-container-low: '#181c21'
  surface-container: '#1c2025'
  surface-container-high: '#272a30'
  surface-container-highest: '#31353a'
  on-surface: '#e0e2e9'
  on-surface-variant: '#c0c7d3'
  inverse-surface: '#e0e2e9'
  inverse-on-surface: '#2d3136'
  outline: '#8a919c'
  outline-variant: '#404751'
  surface-tint: '#9dcaff'
  primary: '#9dcaff'
  on-primary: '#003257'
  primary-container: '#4ba3f5'
  on-primary-container: '#003760'
  inverse-primary: '#0062a2'
  secondary: '#c8c6c8'
  on-secondary: '#303032'
  secondary-container: '#474649'
  on-secondary-container: '#b7b4b7'
  tertiary: '#ffba47'
  on-tertiary: '#442b00'
  tertiary-container: '#d59100'
  on-tertiary-container: '#4b3000'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d1e4ff'
  primary-fixed-dim: '#9dcaff'
  on-primary-fixed: '#001d35'
  on-primary-fixed-variant: '#00497c'
  secondary-fixed: '#e4e2e4'
  secondary-fixed-dim: '#c8c6c8'
  on-secondary-fixed: '#1b1b1d'
  on-secondary-fixed-variant: '#474649'
  tertiary-fixed: '#ffddb0'
  tertiary-fixed-dim: '#ffba47'
  on-tertiary-fixed: '#291800'
  on-tertiary-fixed-variant: '#614000'
  background: '#101419'
  on-background: '#e0e2e9'
  surface-variant: '#31353a'
typography:
  headline-lg:
    fontFamily: Public Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Public Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Public Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Public Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Public Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Public Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 48px
  max-width: 1440px
---

## Brand & Style

The design system is a high-performance, dark-mode framework designed for critical public infrastructure, emergency response, and civic monitoring. The brand personality is **authoritative, vigilant, and ultra-reliable**. It operates on a **Corporate Modern** aesthetic infused with **Minimalist** precision to ensure cognitive load is minimized during high-stress scenarios.

The UI evokes a sense of "The Watchtower"—a calm, dark environment where vital information stands out with luminous clarity. This is achieved through high-contrast accents against a deep obsidian void, ensuring that the user's focus is directed exclusively to actionable data and system alerts.

## Colors

The palette is anchored by **Obsidian (#0A0A0B)** to reduce eye strain and provide a true-black foundation for deep contrast. 

- **Primary (Emergency Blue):** Adjusted to #4BA3F5. This slight shift toward a higher luminance ensures the blue remains vibrant and meets WCAG AA standards against dark surfaces.
- **Surface Tiers:** Uses **Charcoal (#161618)** for primary containers. Higher elevation surfaces use subtle increments of lightness.
- **Alert System:** 
  - **Red (#FF5252):** High-intensity for immediate danger or system failure.
  - **Amber (#FFB300):** Saturated gold for warnings and cautious monitoring.
  - **Green (#4CAF50):** Crisp emerald for "all-clear" and active system health.
- **Typography:** Primary text uses an off-white to prevent "haloing" or "bleeding" effects on OLED screens.

## Typography

This design system utilizes **Public Sans** for all editorial and interface text due to its institutional clarity and neutral tone. It is optimized for legibility at small sizes on low-resolution field displays.

For technical data, timestamps, and coordinates, **JetBrains Mono** is employed to ensure character distinction (e.g., 0 vs O) and tabular alignment. 

**Mobile Adaptation:** Headlines scale down by 25% on mobile devices to preserve screen real estate for maps and data grids. All body text remains at 16px minimum to ensure accessibility in high-glare outdoor environments.

## Layout & Spacing

The layout utilizes a **Fixed Grid** system for dashboard environments to ensure widgets remain in predictable locations, while adopting a **Fluid Grid** for mobile reporting tools.

- **Desktop:** 12-column grid with 24px gutters.
- **Tablet:** 8-column grid with 16px gutters.
- **Mobile:** 4-column grid with 16px gutters.

The spacing rhythm is strictly based on a **4px baseline**. Components should favor larger internal padding (`16px` or `24px`) to create a breathable, "calm" interface amidst dense data. Margins are generous to isolate the application window from system-level distractions.

## Elevation & Depth

This design system uses **Tonal Layering** combined with **Low-Contrast Outlines** to define hierarchy. In a dark environment, shadows are less effective; therefore, depth is communicated through surface brightness.

1.  **Level 0 (Background):** #0A0A0B. The infinite base.
2.  **Level 1 (Default Surface):** #161618. For primary content cards and navigation sidebars.
3.  **Level 2 (Raised Surface):** #222224. For hover states, modals, or active selection.
4.  **Bordering:** Surfaces are defined by a 1px solid border (#2D2D30). This "ghost border" provides structure without the visual noise of heavy shadows.

For critical alerts, a **Glow Effect** (ambient shadow) using the status color (Red or Amber) at 20% opacity may be used to indicate urgency.

## Shapes

The shape language is **Soft (0.25rem)**. This provides a professional, geometric look that is slightly more approachable than sharp corners while maintaining the "civic/industrial" feel.

- **Buttons & Inputs:** 4px (0.25rem) radius.
- **Cards & Modals:** 8px (0.5rem) radius.
- **Data Tags/Chips:** Fully rounded (pill) for immediate visual distinction from buttons.

## Components

- **Buttons:** 
  - *Primary:* Filled #4BA3F5 with #0A0A0B text. 
  - *Secondary:* Ghost style with #2D2D30 border and primary text.
- **Input Fields:** Background #161618 with a bottom-only or subtle 4-sided border (#2D2D30). Focus state uses the Primary color for the border.
- **Chips:** Monochromatic backgrounds (#222224) with label-caps typography. Status chips (Online/Offline) use a 6px solid dot in the respective status color.
- **Alert Banners:** Full-width color strips (Red, Amber, Green) at 15% opacity with 100% opacity left-side "accent bars."
- **Data Grids:** Alternating row highlights are not used; instead, use subtle 1px dividers (#1E1E20) to maintain a clean, scanned look.
- **Key Component (The Pulse):** A specialized component for real-time data feeds, featuring a JetBrains Mono "ticker" and a Primary Blue subtle glow to indicate active connectivity.