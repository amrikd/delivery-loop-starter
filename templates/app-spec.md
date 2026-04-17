# App Spec: [Your Project Name]

**Owner:** Developer
**Reads from:** `feature-brief.md` and `design-system-spec.md`
**Ships:** working app + Playwright tests

This spec defines the **app as a product**. It's what the developer builds by composing the design system. The app spec is empty of UI details — the design system owns those. The app spec owns flows, screens, state, data, edge cases.

## 1. User Flows
<!-- Every flow a user can take. Numbered, specific, agent-buildable. -->

### Flow 1: [Name]
1.
2.
3.

### Flow 2: [Name]
1.
2.
3.

### Flow 3: [Name]
1.
2.
3.

## 2. Screens / Routes
<!-- One entry per route. Match to user flows. Name the components used. -->

| Route | Purpose | Main Components | Flow |
|---|---|---|---|
| `/` | Dashboard | ProfileCard, StatCard, Button | Flow 4 |
| `/create` | Multi-step form | Input, StepIndicator, Button | Flow 1 |
| `/directory` | Browseable list | SearchInput, FilterChip, ProfileCard, Toggle | Flow 2 |
| `/profile/[id]` | Detail view | Avatar, SkillBadge, ProjectTag, ProgressBar | Flow 3 |

## 3. State & Persistence
<!-- How data flows through the app. What persists where. -->

- **Shared state:** <!-- e.g., team members list in React Context + useReducer -->
- **Local state:** <!-- form state per step, local useState -->
- **Persistence:** <!-- localStorage with hydration hook -->
- **URL state:** <!-- filters, search query — ?skill=React -->

## 4. Edge Cases
<!-- ≥5 specific edge cases with defined responses. -->

1.
2.
3.
4.
5.

## 5. Validation Rules
<!-- Per form, per field. What counts as valid? What error do we show? -->

| Field | Rule | Error Message |
|---|---|---|
| | | |
| | | |
| | | |

## 6. Navigation
<!-- How the user moves between screens. Back behavior. Deep links. -->

-
-

## 7. Playwright Coverage
<!-- One test per user flow. The brief IS the test spec. -->

| Test File | Covers | Key Assertions |
|---|---|---|
| `e2e/create-profile.spec.ts` | Flow 1 | Profile appears in directory after submit |
| `e2e/browse-directory.spec.ts` | Flow 2 | Filter narrows, search works, empty state shows |
| `e2e/profile-detail.spec.ts` | Flow 3 | Full profile renders with skills and projects |

Semantic queries only (`getByRole`, `getByLabel`) — if they fail, the a11y is broken, raise to designer.

## 8. Quality Bar
<!-- What the scorer checks. -->

- Every screen imports UI exclusively from `components/` — zero inline styles
- Every flow in the spec has a matching Playwright test, passing green
- Every edge case has a defined handler in code
- Form validation is immediate on blur + final on submit
- State persists through refresh (localStorage)
- No `any` types. Every data shape from `feature-brief.md`'s data model.
