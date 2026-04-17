# Design System Spec: Team Profile Builder

**Owner:** Designer
**Reads from:** `feature-brief.md`
**Ships:** tokens + coded components + Figma library

## 1. Design Direction

**Mood:** Clean, professional, modern — feels like a real internal tool, not a toy.
**Colors (approach):** Dark theme. Neutral slate surfaces. One accent (indigo). Status colors encode availability.
**Typography (font, feel):** Inter. Clear hierarchy — bold headings, medium labels, small metadata.
**Spacing rhythm:** 4px base grid. 24px card padding. 12-16px list gaps. Comfortable, not cramped.
**Dark / Light / Both:** Dark only.
**Density:** Comfortable. Generous padding on cards and forms. Lists can be denser.

## 2. Token System

- **Colors:** slate primitives (50–900), indigo accent (400–600), status (green/amber/red/blue). Semantic: `bg-base #0a0a0f`, `bg-surface #141419`, `bg-elevated #1c1c24`, `border-default #2a2a35`
- **Type scale:** xs (12) / sm (14) / base (16) / lg (18) / xl (20) / 2xl (24) / 3xl (30)
- **Spacing:** 1 (4px) / 2 (8px) / 3 (12px) / 4 (16px) / 5 (20px) / 6 (24px) / 8 (32px) / 10 (40px) / 12 (48px) / 16 (64px)
- **Radii:** sm 6 / md 8 / lg 12 / xl 16 / full 9999
- **Shadows:** sm / md / lg (subtle — dark theme relies on bg shifts)
- **Motion:** fast 120ms / normal 180ms / slow 280ms with ease-out

## 3. Component List

| Component | Variants | States | Priority |
|---|---|---|---|
| Button | primary, secondary, ghost, danger, icon | default, hover, focus, disabled, loading | P0 |
| Input | text, textarea | default, focus, error, disabled | P0 |
| Avatar | sm, md, lg, xl | with-status, without-status | P0 |
| SkillBadge | beginner, intermediate, advanced, expert | default, hover, removable | P0 |
| ProgressBar | sm, md | default, animated | P1 |
| ProfileCard | compact, detailed | default, hover, selected | P0 |
| ProjectTag | active, paused, completed | default, hover, removable | P1 |
| StatCard | number, chart | default, loading | P1 |
| StepIndicator | horizontal | active, completed, upcoming | P0 |
| SearchInput | default | empty, filled, searching | P0 |
| FilterChip | default | active, inactive, hover | P0 |
| Toggle | default | on, off, disabled | P1 |
| EmptyState | no-results, no-profiles, no-skills | default | P0 |
| Modal | default | open, closed | P1 |

## 4. Interactions

| Component | Hover | Click | Focus | Error | Success |
|---|---|---|---|---|---|
| Button | Lighten bg, cursor pointer | Execute action, show loading if async | Ring outline | Shake + red variant | Checkmark flash |
| ProfileCard | Subtle lift (translateY -2px), border glow | Navigate to profile detail | Ring outline | — | — |
| SkillBadge | Slight scale (1.05) | Toggle filter (directory) or remove (form) | Ring outline | — | — |
| ProjectTag | Slight scale (1.05) | Remove (form) or no-op (detail) | Ring outline | — | — |
| FilterChip | Lighten bg | Toggle active/inactive state | Ring outline | — | Filled style |
| SearchInput | — | Focus with expanded outline | Blue ring | Red ring + message below | — |
| Input | — | Focus cursor | Blue ring | Red ring + error text below | Green ring briefly |
| StepIndicator | — | Navigate to step (if completed/active) | — | Red dot on failed step | Check icon |
| Toggle | Lighten track | Switch state with spring animation | Ring outline | — | — |
| Modal | — | Close on backdrop click | Trap focus inside | — | — |

## 5. Accessibility Requirements

- All text-on-background pairs meet WCAG AA (slate-50/bg-base = 18.5:1, slate-300/bg-base = 11.1:1)
- Every interactive element has a visible `:focus-visible` ring using `--accent-default`
- Keyboard: Enter/Space triggers buttons; Tab cycles logically; Escape closes Modal
- Motion wraps in `prefers-reduced-motion` media query (disable transforms/transitions)
- Availability status uses both color AND an icon/label — never color alone
- Every input has an associated `<label>` or `aria-label`
- Every button has an accessible name (text content or `aria-label`)

## 6. Figma Deliverable

- Variable collection "Tokens" with color, spacing, and radii variables
- Components page with one component set per component, all variants visible
- Tokens page visualizing the color palette, type scale, spacing scale
- Components wired to Variables (no raw hex in Figma)

## 7. Quality Bar

- Every component uses tokens — zero hardcoded values
- Every component has TypeScript props interface, forwardRef, spread props
- Every component has default, hover, focus, disabled states minimum
- Every component in this spec exists in both `components/*.tsx` AND the Figma file
- Every component appears in `/gallery` with all variants and states
