# Examples — Team Profile Builder

A worked example of all three specs. This is the bar.

- **`feature-brief-example.md`** — system-level spec. Big goal, data model, success criteria. Both roles read it.
- **`design-system-spec-example.md`** — designer's scope. Components, tokens, interactions, a11y.
- **`app-spec-example.md`** — developer's scope. Flows, screens, state, edge cases, tests.

Use these as reference, not copy-paste. Your project is your own.

## How the three relate

```
feature-brief.md           ← system-level: WHAT and WHY (shared)
  ├── design-system-spec   ← designer's scope: tokens + components
  └── app-spec             ← dev's scope: flows + screens + tests
```

Both child specs reference the parent. Neither contradicts it. Each is owned by one role.
