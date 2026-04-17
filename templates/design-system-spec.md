# Design System Spec: [Your Project Name]

**Your spec** (you're the designer). Read with your pair but you own what goes in here.

**Reads from:** `feature-brief.md`
**You'll deliver:** a working design system — colors/type/spacing foundations, ~10-14 coded components, and a Figma library.

This describes the design system as a product. It exists separately from the app — in real teams, one design system often serves many apps. That's why it has its own spec.

## 1. Design Direction

How should this feel? Specifics beat adjectives.

**Mood (3-5 adjectives):**
**Colors (approach):** <!-- e.g., "Dark theme. Slate surfaces. One indigo accent. Status colors for availability." -->
**Typography:** <!-- e.g., "Inter. Clear hierarchy — big bold headings, medium labels, small metadata." -->
**Spacing rhythm:** <!-- e.g., "4px base grid. 24px card padding. Comfortable, not cramped." -->
**Dark / Light / Both:**
**Density:** <!-- comfortable / compact / spacious -->

## 2. Color, Type, Spacing (the foundation)

You don't need to pick exact hex values yet — Claude will propose a full system from your Design Direction. But call out anything specific you want:

- **Specific colors you care about:** <!-- "primary accent must be indigo-ish, not blue" -->
- **Type choices:** <!-- "Use Inter, system default if not available" -->
- **Specific spacing you like:** <!-- "24px between cards, 12px inside cards" -->

## 3. Component List

Every reusable UI element. Aim for 10-14. Mix primitives (Button, Input), composites (Card, SearchInput), and domain (ProfileCard, SkillBadge).

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

**P0** = needed for the core flow. **P1** = polish. **P2** = stretch.

## 4. Interactions

For each interactive component — what happens when you hover, click, focus on it, or when it's in an error or success state?

| Component | Hover | Click | Focus | Error | Success |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

## 5. Accessibility

These are the MUSTs — not nice-to-haves:

- All text is readable against its background (WCAG AA contrast — Claude will check)
- Every interactive element has a visible outline when focused with keyboard
- Every button and input has a name (label or aria-label)
- Keyboard works: Enter/Space triggers buttons, Tab cycles through inputs
- Color alone never tells you something important — always pair with icon or text
- If there's motion, it respects "reduced motion" settings

## 6. Figma Deliverable

What your Figma file should contain when you're done:

- A Variables collection with your color, spacing, and radius values
- A Components page with each component and all its variants
- A Tokens page showing the color palette, type scale, and spacing visually

## 7. Quality Bar

What "done" means:

- Every component uses the shared colors/spacing/type (no one-off values)
- Every component has the standard states (default, hover, focus, disabled)
- Every component exists in both code and Figma
- Everything shows up in `/gallery` with all variants visible
