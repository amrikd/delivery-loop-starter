# Writing Specs — The Core Skill

Everything else is secondary. If you leave this workshop remembering one thing, remember this:

> **A good spec is the most leveraged document you can write in an AI-native team.**

## Why: you're graduating from prompts to agents

Most engineers and designers today work **prompt-first**: ask the AI something, copy the output, ask again. The context dies with the chat. The output is disposable.

That doesn't scale past one person. For a team, for a product, for production — you need **agents**. Agents run loops. Agents produce coordinated outputs across files. Agents don't forget context between steps.

But agents are only as good as what you feed them. **Specs are the input format for agents.** A great spec is executable by an AI team the same way source code is executable by a CPU. The spec isn't "the doc before the code." The spec **is** the code — agents compile it into everything downstream.

```
Prompt-driven                   Agent-orchestrated
─────────────────────           ─────────────────────
one-off asks            ─→      specs as durable input
single-file output      ─→      coordinated multi-file output
you orchestrate         ─→      agents run the loop
context dies with chat  ─→      context lives in the spec
```

The bridge is the spec. That's the skill today.

**Garbage spec → garbage system. Great spec → great system, in 90 minutes.**

---

## The three-tier spec model

Real teams don't have "one big spec." They have a **hierarchy**:

```
feature-brief.md           ← system-level: WHAT and WHY (shared by both roles)
  ├── design-system-spec   ← designer's scope: tokens + components
  └── app-spec             ← developer's scope: flows + screens + tests
```

**Why three files, not one:**

1. **Separation of concerns.** The design system is a product in its own right. It has its own requirements, quality bar, and deliverable. The app is a separate product that consumes it.
2. **Scalability.** In production, the same design system serves multiple apps. Splitting the spec mirrors that reality from day one.
3. **Role clarity.** Each role owns one child spec end-to-end. No one wonders "whose job is this?"
4. **Quality.** A dedicated design system spec raises the bar for what a design system should do. A dedicated app spec forces clear flows without getting tangled in visual details.

This is how any real AI-native team runs specs in production.

---

## What each spec does

### 1. Feature Brief — the WHY

The system-level spec. Short. Shared.

Answers:
- **What are we building?** (the thing)
- **Why does it matter?** (the outcome)
- **Who uses it?** (the users)
- **What's the data model?** (the contract)
- **What's out of scope?** (non-goals prevent creep)
- **How do we know it worked?** (success criteria)

That's it. No components, no flows, no design direction. The feature brief is the **shared context** both specs inherit from.

### 2. Design System Spec — the DESIGN

The designer owns this. It's a spec for the design system as a deliverable.

Answers:
- **Design direction** (mood, colors, type, spacing)
- **Token system** (what categories, what scales)
- **Component list** (all components with variants + states + priority)
- **Interactions** (hover/click/focus/error/success per component)
- **Accessibility requirements** (the bar, not the aspiration)
- **Figma deliverable** (what the published library must contain)

This spec never mentions user flows or routes. It's about the system, not the app that uses it.

### 3. App Spec — the APP

The developer owns this. It's a spec for the application.

Answers:
- **User flows** (numbered steps per flow)
- **Screens / routes** (one entry per route, which components it uses)
- **State & persistence** (how data flows, what persists)
- **Edge cases** (≥5 specific, with defined handlers)
- **Validation rules** (per field, per error)
- **Navigation** (how users move, back behavior, deep links)
- **Playwright coverage** (one test per flow)

This spec never mentions component design details. It references components by name — the design system spec defines them.

---

## Quality signals for each spec

### A great feature-brief

- Two people reading independently would agree on what's being built
- Non-goals are listed (prevents scope creep)
- Data model types are specific, not "a user has a profile"
- Success criteria are observable (can you verify them?)

### A great design-system-spec

- Every component has a priority (P0/P1/P2) — forces sequencing
- Interactions table is complete for every interactive component
- a11y requirements are concrete ("WCAG AA 4.5:1"), not vague
- Figma deliverable is explicit (Variables, component sets, not just "a Figma file")

### A great app-spec

- Every flow is numbered and specific (each step = one user action)
- Every screen lists which components it uses (cross-reference to design-system-spec)
- Every edge case has a defined response (not "handle it")
- Playwright tests are pre-defined (one per flow)

---

## How to write them fast (20 minutes, as a pair)

**Minutes 0-2: Pick a project. Decide.**
No debate past 2 minutes. First idea suggested wins if stuck.

**Minutes 2-6: Write feature-brief.md TOGETHER.**
Both roles at one keyboard. What, why, users, data model, non-goals, success criteria. The shared context.

**Minutes 6-15: SPLIT. Write in parallel.**
- Designer writes `design-system-spec.md`
- Developer writes `app-spec.md`
- Cross-check every 3 minutes — do component names match? does the data model cover all flows?

**Minutes 15-18: Merge pass.**
Review each other's specs together. Fix inconsistencies.
- Every component the app-spec uses exists in design-system-spec?
- Every field the app-spec touches is in the feature-brief data model?
- Every flow has an explicit component list?

**Minutes 18-20: Run brief-checker.**
Checks all three files. PASS or fix.

---

## The pair dynamic in practice

The feature brief is **joint writing** — both roles at one keyboard. This is where alignment happens.

The two child specs are **parallel writing** — each role writes their own. This is where speed happens.

The merge pass is **joint reviewing** — you compare specs and catch mismatches before they become build problems.

This mirrors real delivery:
- Product + design + tech **decide** together (feature brief)
- Design and engineering **scope** in parallel (role-specific specs)
- Everyone **aligns** before building (review gate)

---

## What you take home

The app is a demo. The design system is a 90-minute version. **The skill is the spec discipline.**

Next sprint at work:
- When you get a one-line JIRA ticket, you write a feature brief
- Before the designer touches Figma, they write a design system spec
- Before the developer touches code, they write an app spec
- All three go through review before anyone builds anything

That's how teams actually ship quality software fast with AI. The agents are only as good as what you feed them.

**Write specs. Keep writing them. It's the most leveraged thing you can learn.**
