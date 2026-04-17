# Writing Specs — The Core Skill

Everything else is secondary. If you leave this workshop remembering one thing, remember this:

> **A good spec is the most leveraged document you can write in an AI-native team.**

The agents are fast. Figma integration is cool. Playwright automation is valuable. But none of it matters if the spec is vague, because every agent downstream reads it and amplifies whatever was in it.

**Garbage spec → garbage system. Great spec → great system, in 90 minutes.**

---

## Why specs matter more than ever

In the old model, specs were discarded artifacts — product wrote them, dev read them once, then built off intuition. The designer filled gaps visually. The tests documented behavior after the fact.

In the AI-native model, the spec is **the source of truth that every agent reads**:
- The brief-checker validates it
- The designer builds tokens + components from it
- The dev builds screens + tests from it
- The reviewer scores against it
- The scorer audits for adherence to it

The spec is read at least 5 times for every one time it's written. It compounds.

---

## What a great spec does

A great spec **removes ambiguity** before anyone builds anything.

Signs your spec is great:
- A designer and a dev, reading it independently, would build the same thing
- Every interactive component has a defined behavior
- Every edge case has a defined response
- The data model supports every screen — no "we'll figure that out"
- An AI agent can build from it without asking questions

Signs your spec is weak:
- "Modern and clean design" (not specific)
- "User logs in" (no fields, no validation, no error cases)
- "Dashboard shows metrics" (which metrics? what layout?)
- A component appears in flows but not the component list
- Data model is missing a field that a flow requires

---

## The 7 parts of a buildable spec

### 1. What Are We Building (2–3 sentences)

Answers: what does this app do, and who is it for?

❌ "A tool for managing things."
✅ "A team hub where members create rich profiles showcasing their skills, projects, and availability. Think internal LinkedIn for your immediate team — browse, filter, see who's available."

### 2. User Flows (numbered steps per flow)

Every flow the user can take, step-by-step. Each step is a specific user action.

❌ "User creates a profile."
✅
```
1. User clicks "Create Profile" from the dashboard
2. Step 1 — Identity: enter name, role, short bio
3. Step 2 — Skills: add 1+ skills with proficiency level
4. User reviews summary, submits
5. Profile appears in directory
```

Each flow should be specific enough that an agent can build it without asking you questions mid-build.

### 3. Component List (≥10 components, with variants and states)

Every reusable UI element, with variants (different versions) and states (interactions).

❌ `Button — main button of the app`
✅
| Component | Variants | States | Used In |
|---|---|---|---|
| Button | primary, secondary, ghost, danger | default, hover, focus, disabled, loading | All flows |

Variants change appearance. States change based on user interaction. List both.

### 4. Design Direction (mood + specifics)

The visual intent, in adjectives AND specifics.

❌ "Modern and clean."
✅
```
Mood: Clean, professional, modern — feels like a real internal tool
Colors: Dark theme. One accent (indigo). Status: green/amber/red/blue
Typography: Inter, clear hierarchy
Spacing: 16px base grid. 24px card padding.
Dark/Light: Dark only. bg #0a0a0f
```

Give the designer enough to generate tokens without guessing.

### 5. Data Model (TypeScript types)

Every piece of data the app stores, as types.

❌ "Profiles have skills."
✅
```typescript
interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  skills: Skill[];
  availability: Availability;
  createdAt: string;
}
interface Skill {
  name: string;
  proficiency: "beginner" | "intermediate" | "advanced" | "expert";
}
```

TypeScript is specification. The data model in types is a contract the dev agent will honor exactly.

### 6. Interactions (per component)

For every interactive component: what happens on hover, click, focus, error, success?

| Component | Hover | Click | Focus | Error | Success |
|---|---|---|---|---|---|
| Button | Lighten bg | Execute, show loading | Ring outline | Red variant | Checkmark flash |

This is what separates "designer made something" from "this feels like a real product."

### 7. Edge Cases (≥5 specific)

Real scenarios your app will hit.

❌ "Handle errors."
✅
```
1. Empty team — no profiles yet. Show empty state with "Create first profile" CTA.
2. Long skill list — 15+ skills. Show first 6, then "+N more" chip that expands.
3. No search results — show empty state with "Clear filters" button.
4. Duplicate skill — user adds "React" twice. Prevent with inline validation.
5. Long bio — exceeds 280 chars. Truncate on card with "..." show full on detail view.
```

Edge cases force you to think about what happens when things go wrong.

---

## How to write specs fast (the 20-minute approach)

You have 20 minutes in the workshop. Here's the order that works:

**Minutes 0–2:** Pick a project. Don't debate — decide.

**Minutes 2–5:** Write "What Are We Building" and list the flows (names only, no steps yet).

**Minutes 5–10:** Write the Data Model. This unlocks everything else — flows can reference fields, components become obvious.

**Minutes 10–14:** Fill in User Flows with numbered steps.

**Minutes 14–17:** Write Component List. Cross-reference with flows — every flow mentions components, every component appears in a flow.

**Minutes 17–19:** Design Direction + Interactions table.

**Minutes 19–20:** Edge Cases. Push past 3. Aim for 5–8.

**At :20:** run brief-checker. Fix what fails. Pass = start building.

---

## The pair dynamic

Designer and developer write the spec together. Don't split into isolated tasks — sit together, one document, both typing.

**Designer owns the spec edges:**
- Component List (variants/states)
- Design Direction
- Interactions

**Developer owns the spec guts:**
- User Flows (numbered steps)
- Data Model (types)
- Edge Cases

**Both own:**
- What Are We Building
- The overall coherence (everything connects to everything)

This mirrors how real teams work. The pair check is: would both of us agree on this interpretation?

---

## This is what you take back

The workshop ends. You go back to your normal sprint. What do you keep?

**Not the app.** The app is a demo.

**Not the design system.** That was a 90-minute version.

**The skill.** The ability to walk into any feature ask — from a PM, a stakeholder, a one-line JIRA ticket — and turn it into a spec that an AI-native team can build from without a single "wait, what did you mean by…" question.

That skill is what separates engineers who use AI from engineers who **orchestrate** AI.

**Write specs. Keep writing them. It's the most leveraged thing you can learn.**
