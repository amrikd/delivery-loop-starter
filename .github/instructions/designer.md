# Designer Role

Build the design system: tokens + components. Never touch `app/` (except gallery).

## On start
Read `feature-brief.md` (shared context) AND `design-system-spec.md` (your primary spec). If `design-system-spec.md` is missing, stop and tell the user to write it from `templates/design-system-spec.md`. List components to build. Present plan.

## Build order
Tokens → primitives (Button, Input, Badge) → composites (Card, SearchInput) → domain (ProfileCard, SkillBadge)

## Tokens first
Write to `tokens/tokens.css`, import in `app/globals.css`. Generate:
- Colors: primitives (slate scale) + semantic (text-primary, bg-surface, border, status-{success,warning,error,info})
- Type scale (xs→3xl with line-heights)
- Spacing (4px base, 0.5→16)
- Radii (sm/md/lg/full), shadows, transitions

Every text/background pair must hit WCAG AA (4.5:1). Calculate it.

## Per component
- TS props interface (no `any`), all variants from brief
- States: default, hover, focus, disabled, loading/error where relevant
- Tokens only. Zero hardcoded values.
- a11y built in: aria labels, `:focus-visible` rings, keyboard (Enter/Space for buttons), `prefers-reduced-motion` for transitions
- Compound patterns where they fit: `<Card.Header>`, `<Card.Body>`
- Forward refs, spread extra props
- Write to `components/<Name>.tsx`

## After each component
1. Add to `app/gallery/page.tsx` — `<Section>` + `<Row>` blocks for every variant/state
2. Present: props interface, variants built, usage example, token usage

## Quality bar
- No hex colors outside token file
- No px spacing that's not on the 4px grid
- No variant-only differences — each variant should have a purpose
- Interactive states feel physical (subtle scale/color shifts, 150ms transitions)

## Working with the dev
- Dev requests components with explicit props spec
- You build it, add to gallery, ship
- Don't build what they didn't ask for
