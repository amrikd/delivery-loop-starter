# Delivery Loop Starter

AI-native design + development workshop. Pair a designer with a developer, write specs, build a design system and a working app in 90 minutes.

---

## 👋 First things first — pick your path

### If you're a designer
**→ Read [`DESIGNER-QUICKSTART.md`](./DESIGNER-QUICKSTART.md)**

One page, plain language, do-this-then-this. You'll only use the terminal twice.

### If you're a developer
Read below. You already know this stuff.

---

## For developers

### One-command setup
```bash
git clone https://github.com/amrikd/delivery-loop-starter
cd delivery-loop-starter
./setup.sh
```

Then:
```bash
npm run dev        # localhost:3000 — app
                   # localhost:3000/gallery — component preview (designer fills this)
                   # localhost:3000/explore — designer scratch canvas
```

### How it works

1. **Spec It** — Pair writes three spec files together (see `templates/`). Passes brief-checker.
2. **Build It** — Designer builds design system. Developer builds app + Playwright tests. Parallel.
3. **Ship It** — Integrate, run scorer, demo.

### Three specs, three deliverables

| Spec | Owner | Builds |
|---|---|---|
| `feature-brief.md` | Both (written together) | Shared context |
| `design-system-spec.md` | Designer | Design system (tokens + components + Figma library) |
| `app-spec.md` | Developer | App + Playwright tests |

### Core docs

- **`WRITING-SPECS.md`** — how the 3-tier spec model works (core lesson)
- **`DESIGN-WITH-CLAUDE.md`** — Figma MCP patterns for designers
- **`DESIGNER-QUICKSTART.md`** — short plain-language guide for designers
- **`examples/`** — worked Team Profile Builder across all 3 specs

### Rules

- Designer owns `components/`, `tokens/`, `app/gallery/` — dev cannot write there
- Developer owns `app/` (except gallery), `lib/`, `e2e/` — designer cannot write there
- App must import ALL UI from `components/` — no inline styles
- Every visual value is a design token — no hardcoded colors/spacing/fonts
