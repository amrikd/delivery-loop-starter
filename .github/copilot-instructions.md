# Delivery Loop — Copilot Base

This repo is built by a designer + developer pair. The Feature Brief (`feature-brief.md`) is the contract.

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
