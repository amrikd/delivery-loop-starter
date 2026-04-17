# Feature Brief: [Your Project Name]

**The system-level spec. Big goal, shared context, data model.**

Both the designer and developer read this. The design-system-spec and app-spec live underneath this — they inherit what's here and never contradict it.

<!--
  PROJECT IDEAS (pick one or invent your own):

  - Team Profile Builder — members create profiles with skills, projects, availability.
    Browse by skill, filter, see who's free.
  - Project Dashboard — kanban board with cards, drag-drop columns, filters, detail view.
  - Event Planner — create events, RSVP, schedule view, speaker cards, favorites.
  - Recipe Book — add recipes with ingredients/steps, browse by tag, meal planner.
  - Habit Tracker — daily habits, streaks, weekly heatmap, stats dashboard.
  - Expense Splitter — add expenses, split between people, running balances, settle up.

  Pick one. Write this brief together. Then split into the two child specs.
-->

## 1. What Are We Building
<!-- 2-3 sentences. What does this app do? Who is it for? What problem does it solve? -->

## 2. Why (the outcome)
<!-- 1-2 sentences. If this exists, what becomes possible that wasn't before? -->

## 3. Users and Roles
<!-- Who uses this app. Different user types if applicable. -->

## 4. Data Model
<!-- TypeScript types — the source of truth that both specs reference. -->

```typescript
interface Example {
  id: string;
  // ...
}
```

## 5. Non-Goals (what this is NOT)
<!-- Explicitly name 2-3 things out of scope. Prevents scope creep. -->

-
-
-

## 6. Success Criteria
<!-- How do we know this worked? Observable, specific. -->

- [ ]
- [ ]
- [ ]

---

## Next: split into two specs

Once this is filled in, the pair splits:

- **Designer** → writes `design-system-spec.md` (components, tokens, interactions, a11y)
- **Developer** → writes `app-spec.md` (user flows, screens, edge cases, state)

Both specs reference this file. Neither contradicts it.
