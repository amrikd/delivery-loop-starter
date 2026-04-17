# App Spec: Team Profile Builder

**Owner:** Developer
**Reads from:** `feature-brief.md` and `design-system-spec.md`
**Ships:** working app + Playwright tests

## 1. User Flows

### Flow 1: Create Profile
1. User clicks "Create Profile" from the dashboard
2. Step 1 — Identity: enter name, role, avatar (initials-based), short bio
3. Step 2 — Skills: add skills with proficiency level, pick from suggestions or type custom
4. Step 3 — Projects: add current projects with name, role, status (active/paused/completed)
5. Step 4 — Availability: set status (available/busy/away/focused), hours, timezone
6. User reviews summary and submits
7. Profile appears in dashboard and team directory

### Flow 2: Browse Team Directory
1. User navigates to team directory
2. Sees grid of profile cards: avatar, name, role, top 3 skills, availability status
3. User types in search bar — filters by name or skill in real time
4. User clicks skill filter chips to narrow by specific skills
5. User toggles between grid and list view
6. User clicks a profile card to see full detail

### Flow 3: View Profile Detail
1. User clicks a profile card from dashboard or directory
2. Full profile opens: identity, skills with proficiency bars, project cards, availability
3. User can navigate back to directory or dashboard

### Flow 4: Dashboard Overview
1. User lands on dashboard
2. Sees team stats: total members, top skills, availability breakdown
3. Sees recent profiles (latest 3-4)
4. Quick action: "Create Profile" prominent

## 2. Screens / Routes

| Route | Purpose | Main Components | Flow |
|---|---|---|---|
| `/` | Dashboard | StatCard, ProfileCard, Button | Flow 4 |
| `/create` | Multi-step form | Input, StepIndicator, SkillBadge, ProjectTag, Button | Flow 1 |
| `/directory` | Browse | SearchInput, FilterChip, ProfileCard, Toggle, EmptyState | Flow 2 |
| `/profile/[id]` | Detail view | Avatar, SkillBadge, ProgressBar, ProjectTag | Flow 3 |

## 3. State & Persistence

- **Shared state:** team members list in React Context + useReducer (`lib/store.tsx`)
- **Local state:** form state per step (useState); lifted to context on final submit
- **Persistence:** localStorage via custom `usePersistedState` hook; hydrated on first render
- **URL state:** directory filters — `/directory?skill=React&status=available&view=grid`

## 4. Edge Cases

1. **Empty team** — no profiles yet. Dashboard shows EmptyState with prominent "Create Profile" CTA.
2. **Long skill list** — profile with 15+ skills. Show first 6 as badges with "+N more" chip that expands to show all.
3. **No search results** — directory filter returns zero matches. Show EmptyState: "No team members match." + "Clear filters" button.
4. **Form abandonment** — user is mid-profile and navigates away. Form state is lost (no autosave). Step indicator shows progress while in-flow.
5. **Duplicate skill** — user tries to add "React" twice. Prevent with inline validation: "Skill already added."
6. **Long bio** — bio exceeds reasonable length. Truncate on card view with "..."; show full on detail view.
7. **All unavailable** — dashboard availability breakdown shows all red/amber. Display accurately, no special handling.
8. **Rapid skill adding** — user adds skills quickly. Each animates in smoothly, no layout jank.

## 5. Validation Rules

| Field | Rule | Error Message |
|---|---|---|
| Name | Required, 1-60 chars | "Name is required" / "Name too long" |
| Role | Required, 1-80 chars | "Role is required" |
| Bio | Optional, max 280 chars | "Bio must be under 280 characters" |
| Skills | Min 1 on submit, max 15 | "Add at least 1 skill" / "Max 15 skills" |
| Skill name | 1-40 chars, no duplicates | "Skill already added" |
| Projects | Optional, max 10 | "Max 10 projects" |

## 6. Navigation

- Next.js `<Link>` for all internal routes, active state styling via `usePathname`
- Top nav: Dashboard / Directory / Create Profile (sticky)
- Back: profile detail → "Back to directory" link (preserves filter query params)
- Deep links: `/directory?skill=React` is shareable and survives refresh
- 404: unknown profile id → EmptyState with "Back to directory"

## 7. Playwright Coverage

| Test File | Covers | Key Assertions |
|---|---|---|
| `e2e/create-profile.spec.ts` | Flow 1 | Form steps advance only when valid; profile appears in directory after submit; data persists on reload |
| `e2e/browse-directory.spec.ts` | Flow 2 | Search filters live; skill chips narrow results; grid/list toggle works; empty state shows for no matches |
| `e2e/profile-detail.spec.ts` | Flow 3 | Detail renders all skills with proficiency bars and projects with status |
| `e2e/dashboard.spec.ts` | Flow 4 | Stats reflect current team; recent profiles show latest; empty team shows EmptyState |

Use semantic queries only. If `getByRole('button', { name: /create profile/i })` fails, the a11y is broken — raise to the designer.

## 8. Quality Bar

- All 4 Playwright tests pass green on `npx playwright test`
- 100% of UI is imported from `components/` — zero inline styled elements in `app/`
- Every edge case from Section 4 has a code path handling it
- Validation runs on blur (immediate) and on submit (final)
- Team data persists through hard refresh
- No `any` types. All shapes match `feature-brief.md`'s data model.
