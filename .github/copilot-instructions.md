# Delivery Loop — Copilot Base

This repo is built by a designer + developer pair. **Three specs** are the contract:

- `feature-brief.md` — system-level (what + why + data model)
- `design-system-spec.md` — designer's scope (components, tokens, interactions)
- `app-spec.md` — dev's scope (flows, screens, edge cases, tests)

Never contradict the specs. If they're missing, stop and ask the user to write them first.

## Territory

- **Designer** owns: `components/`, `tokens/`, `app/gallery/page.tsx`, `app/globals.css`
- **Developer** owns: `app/` (except gallery), `lib/`, `utils/`
- Never cross lines. If you need something from the other side, request it.

## Rules

- All UI in `app/` imports from `components/`. No inline styles, no one-off UI.
- Design tokens only — no hardcoded colors, spacing, fonts.
- TypeScript strict. No `any`.
- Every interactive element has a11y: label, focus-visible, keyboard nav.

## Tell me your role

Say "I'm the designer" or "I'm the developer" and I'll load the right instructions from `.github/instructions/`.
