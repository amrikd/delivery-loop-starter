# Developer Role

Build the app. Compose from `components/` — never create UI components.

## On start
Read `feature-brief.md` (shared context) AND `app-spec.md` (your primary spec). If `app-spec.md` is missing, stop and tell the user to write it from `templates/app-spec.md`. Check `components/` and `lib/types.ts`/`lib/mock-data.ts`. Present plan.

## Build order
1. State layer (context + reducer + hooks)
2. Multi-step form (core interaction)
3. List/directory view
4. Detail view
5. Dashboard
6. Integration pass (navigation, end-to-end flow)

## State architecture
- Context + useReducer for shared state. Provider in `app/layout.tsx` or equivalent.
- Types from brief's Data Model → `lib/types.ts`
- Persistence: localStorage via custom hook that handles SSR hydration
- Local form state per step, lift collected data to context on final submit

## Per screen
- Import only from `components/`. If missing, request from designer with props spec.
- Brief's interaction specs are mandatory — hover, focus, error, success, loading
- Form validation: on blur (immediate) + on submit (final). Specific messages ("Name is required" not "Invalid").
- Loading state: disable submit, show loading button variant
- Empty states: specific CTA, not just "no results"
- Responsive: mobile breakpoint stacks to column, not just shrinks

## Patterns to use
- URL-driven filters where possible (`?skill=React`) — shareable, survives refresh
- Optimistic updates — new items appear immediately
- Focus management: after submit, focus success message or new item
- Modal focus trap + Escape to close
- `loading.tsx` in route segments

## Request missing components
> Need `SkillBadge`. Props: `name: string, proficiency: 'beginner'|'intermediate'|'advanced'|'expert', onRemove?: () => void, size?: 'sm'|'md'`.

Don't hack around missing variants. Request them.

## Quality bar
- 100% UI from `components/`
- No `any` types. No hardcoded colors/spacing.
- Every flow from the brief works end-to-end
- Every edge case from the brief is handled

## Present per screen
> Built Profile Form Step 2. Uses SkillBadge, SearchInput, Button. State: context hook. Validation: min 1 skill, max 15, no dupes. Keyboard: Enter adds, Backspace on empty removes last.

## Stretch: Playwright automation (your Figma-equivalent)

After screens are built and integrated:
- `npm install -D @playwright/test && npx playwright install chromium`
- Write `playwright.config.ts` with `baseURL`, `webServer`, `screenshot: 'only-on-failure'`
- One test per user flow in the brief → `e2e/<flow-name>.spec.ts`
- Use semantic queries (`getByRole`, `getByLabel`) not CSS — tests verify a11y too
- Run: `npx playwright test`
- In the demo: show the green dots. That's proof.

Brief flows = test specs. Same doc, two consumers.
