# Designing with Claude — Playbook

You're not coding today. You're **designing a system**. Claude handles the code underneath. Your job is design decisions — what the components look like, how they behave, how they connect.

This playbook shows what you can ask for. Use it like a menu.

---

## The core loop (per component)

```
You describe → Claude draws in Figma → You iterate → Claude codes it → It appears in /gallery
```

You watch your Figma desktop app update as Claude draws. You react. You revise. You never touch the code yourself — you direct.

---

## Six things you can ask for

### 1. Explore a visual direction before locking anything

> "Show me 3 visual directions for this project. Side-by-side in /explore. One minimal, one editorial, one playful. Same content in each."

Claude builds 3 preview cards in the browser. You pick one. Or mix ideas from two.

This used to need Figma Make. You just did it in code, looking at real components, in 5 minutes.

---

### 2. Draw a component in Figma

> "Draw a Button component in Figma — 4 variants: primary, secondary, ghost, danger. Auto-layout, 8px rounded corners, indigo primary."

Claude opens your Figma desktop app, creates frames with auto-layout, colors them using your tokens, draws all 4 side by side. Takes screenshots and shows you.

You iterate in conversation:
> "Make the hover brighter"
> "Radius should be 6, not 8"
> "Add a danger-hover variant"

Claude updates Figma. You watch it happen.

---

### 3. Compare approaches

> "Show me 3 Card approaches side-by-side. Minimal, elevated, editorial. Same content."

Claude renders all three in `/explore`. You compare visually. You pick.

---

### 4. Get a design critique

> "Review my Button as a design director. Spacing rhythm, visual weight, state transitions, accessibility. Tell me what's weak."

Claude points out things you might miss:
- "Hover only changes brightness — add a subtle lift for physicality"
- "Loading uses a spinner — for a form button, a label change like 'Saving...' feels more refined"
- "Disabled at 40% opacity drops contrast below AA"

Take what's useful. You're still the designer.

---

### 5. Stress-test a component

> "Render ProfileCard with: short name + short bio, very long name + no bio, maximum content everywhere. All four in /explore."

You catch layout bugs before your dev partner hits them.

---

### 6. Audit the whole system

> "Audit my components — find any that skipped the token system, have missing states, or break accessibility rules."

Claude scans everything. Gives you a specific list. You fix the 3 that matter.

---

## What ships to Figma

As you build, components push to Figma as real components — not screenshots. By the end you have a Figma file with:
- A color palette as Variables
- Every component as a component set with variants
- A tokens page showing spacing, type, radii visually

At the end, one command organizes everything:

> "Organize the Figma library."

Claude creates a proper, publishable design system.

---

## The mindset shift

Old way:
- Designer makes Figma mockups
- Dev rebuilds them in code
- Two sources of truth, always drifting

New way:
- You design in Figma with Claude
- Code comes from the same conversation
- Both stay in sync because they're generated from the same source
- Designer = system architect, not mockup maker

You're not a designer who has to learn code. You're a designer who now ships systems.

---

## Quick reference — things to ask for

| Goal | Ask |
|---|---|
| See 3 visual directions | "3 directions in /explore" |
| Draw a component | "Draw Button in Figma with these variants" |
| Iterate visually | "Make the hover brighter" |
| Compare variants | "Show me 3 Card approaches" |
| Critique my work | "Review as a design director" |
| Stress test | "Render with extreme content" |
| Audit the system | "Audit for token compliance and a11y" |
| Organize Figma | "Organize the Figma library" |
