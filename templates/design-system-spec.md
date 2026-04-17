# Design System Spec: [Your Project Name]

**Owner:** Designer
**Reads from:** `feature-brief.md`
**Ships:** tokens + coded components + Figma library

This spec defines the **design system as a product**. It's what the designer builds. It exists independently of the app — in a mature team, the same design system serves multiple apps.

## 1. Design Direction
<!-- Visual mood. 3-5 adjectives + specifics. -->

**Mood:**
**Colors (approach):**
**Typography (font, feel):**
**Spacing rhythm:**
**Dark / Light / Both:**
**Density:** <!-- comfortable / compact / spacious -->

## 2. Token System
<!-- What categories of tokens this system defines. The designer fills the actual values. -->

- Color primitives + semantic colors (text, surface, border, accent, status)
- Type scale (sizes, weights, line-heights)
- Spacing scale (on a 4px grid)
- Radii (sm, md, lg, full)
- Shadows / elevation
- Motion (durations, easings)

## 3. Component List
<!-- Every reusable UI component. Minimum 10. Think primitives → composites → domain-specific. -->

| Component | Variants | States | Priority |
|---|---|---|---|
| Button | primary, secondary, ghost, danger | default, hover, focus, disabled, loading | P0 |
| Input | text, textarea | default, focus, error, disabled | P0 |
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |

P0 = needed for the core user flow. P1 = polish. P2 = stretch.

## 4. Interactions
<!-- For each interactive component: what happens on hover, click, focus, error, success? -->

| Component | Hover | Click | Focus | Error | Success |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

## 5. Accessibility Requirements
<!-- The bar, not the aspiration. What MUST every component meet? -->

- All text-on-background pairs meet WCAG AA (4.5:1 normal, 3:1 large)
- Every interactive element has a visible `:focus-visible` ring
- Keyboard navigation: Enter/Space triggers buttons, Tab cycles logically
- Motion respects `prefers-reduced-motion`
- Color is never the only indicator (pair with icon or text)
- All interactive elements have accessible names (label, aria-label)

## 6. Figma Deliverable
<!-- What the Figma file must contain at ship. -->

- Design variables (colors, spacing, radii) matching the CSS tokens 1:1
- Component sets for every component with all variants
- A tokens page showing the system visually
- A gallery page with all components in context

## 7. Quality Bar
<!-- What the scorer checks. -->

- Every component uses tokens — zero hardcoded colors, px values, or font sizes
- Every component has TypeScript props interface (no `any`)
- Every component has default, hover, focus, disabled states minimum
- Component files use `forwardRef` and spread extra props
- Every component in this spec exists in both code and Figma
