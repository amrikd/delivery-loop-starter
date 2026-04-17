# Delivery Loop Starter

## Setup
```
npm install
npm run dev        # localhost:3000 — app
                   # localhost:3000/gallery — component preview
```

## Read First

- **`WRITING-SPECS.md`** — the core lesson. How the 3-tier spec model works.
- **`DESIGN-WITH-CLAUDE.md`** — designer's playbook for Figma MCP.
- **`examples/`** — worked Team Profile Builder example across all three specs.

## How This Works

1. **Spec It** — Write three spec files together (feature-brief, design-system-spec, app-spec). This is the phase that matters most.
2. **Check It** — Run the brief-checker — validates all three and cross-spec consistency. PASS/FAIL.
3. **Build It** — Designer builds design system (tokens + components + Figma library). Developer builds app + Playwright tests. Parallel.
4. **Ship It** — Integrate, run the scorer, demo.

## Three specs, three deliverables

| Spec | Owner | Builds |
|---|---|---|
| `feature-brief.md` | Both (written together) | Shared context |
| `design-system-spec.md` | Designer | Design system (tokens + components + Figma) |
| `app-spec.md` | Developer | App + Playwright tests |

## Tools: Claude Code OR GitHub Copilot

This starter works with both.

### Claude Code (preferred for designer — has Figma MCP)
Agents live in `.claude/agents/`:
- `designer` — builds tokens + component library, pushes designs to Figma
- `dev` — builds app from designer's components
- `brief-checker`, `reviewer`, `scorer` — quality gates

Use: `/designer`, `/dev`, etc.

### GitHub Copilot (preferred for dev — lighter seat)
Instructions live in `.github/`:
- `copilot-instructions.md` — loaded automatically, project-wide
- `instructions/designer.md` — designer role rules
- `instructions/dev.md` — developer role rules

Start a Copilot chat and say: "I'm the developer, load instructions from `.github/instructions/dev.md`"

### Mixed pairs (most common)
Designer runs Claude Code (Figma matters). Dev runs Copilot Chat. Same repo, same brief, same rules.

**Figma access:** Designer shares a "can view" link with the dev. Dev never edits Figma — just references layouts for screen composition.

## Territory

- **Designer:** `components/`, `tokens/`, `app/gallery/`, `app/globals.css`
- **Developer:** `app/` (except gallery), `lib/`, `utils/`
- **Never cross.** Request what you need from the other side.

## Rules

- All UI in `app/` imports from `components/` — no inline UI
- Design tokens only — no hardcoded colors/spacing/fonts
- TypeScript strict, no `any`
- Every interactive element: label, focus-visible, keyboard nav
- Feature Brief is the contract — don't deviate without agreement
