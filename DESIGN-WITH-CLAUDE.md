# Designing with Claude — Playbook

You're not coding components today. You're **designing a system**. The React/TypeScript is how your design gets shipped — but the design decisions are yours (and Claude's).

This playbook shows the moves you can make with Claude that go beyond "generate me a button."

---

## 1. Explore visual direction before you commit

Don't start with tokens. Start with a feel.

**Ask:**
> "Generate 3 visual directions for [your project]. Call them A, B, C. For each: a mood (3 adjectives), a primary color with hex, a secondary, a background, a single type choice. Show me a styleguide snippet for each in app/explore/page.tsx so I can see them side-by-side."

Claude writes a scratch page at `/explore`. You open it. You see three approaches. You pick one (or mix two). Now you have direction.

**This is the part that used to need Figma Make or Stitch.** You just did it in code, in 5 minutes, on something real.

---

## 2. Iterate on components, not in isolation

When a component feels wrong, don't just tweak it. Ask for alternatives:

> "Show me 3 variants of the Card component in /explore. One minimal, one with more depth, one editorial. Same content in each. I'll pick."

Claude renders all three. You compare. You pick. Then Claude promotes the winner to `components/Card.tsx`.

---

## 3. Use Claude as a design director

You're the designer. Claude is a senior design engineer who can critique your work like a staff designer would.

**Ask:**
> "Review my Button component. As a design director, what would you push back on? Spacing rhythm, visual weight, state transitions, accessibility — tell me what's weak."

Claude will flag things like:
- "Your hover state only changes brightness — add a slight translateY for physicality"
- "The loading state uses a spinner — for a form button, a label change ('Saving…') feels more refined"
- "Your disabled state is 40% opacity — text contrast against background drops below WCAG AA at that ratio"

Take what's useful. Ignore what's not. You're still the designer.

---

## 4. Design in Figma first, then code (the headline flow)

This is the part that changes the game. You tell Claude what you want, it draws in Figma, you iterate, THEN code gets written.

**Setup (once per project):**
> "Create a Figma file for this project's design system."

Claude uses `create_new_file` to create the file in your team space.

**Per component:**
> "Draw a Button component in Figma with 4 variants — primary, secondary, ghost, danger. Auto-layout, 8px radius, 20px horizontal padding, 12px vertical. Use indigo-500 for primary. Show me all 4 in a row."

Claude runs JavaScript via the Figma Plugin API (`use_figma` tool) and draws the component on the canvas. Your Figma desktop app updates live. Claude captures a screenshot, shows you.

**Iterate in Figma, not in code:**
> "Make the hover state lift by 2px. Reduce the radius to 6px. Add a danger-hover variant."

Claude updates the Figma file. You watch it happen.

**Once you're happy:**
> "Now build the React version matching this."

Claude reads the Figma you just designed and writes the coded component. They match because Figma is the source.

**At the end:**
> "Run figma-generate-library. Organize the full system: Variables, component sets, docs pages."

Publishable Figma library, generated from your work.

---

## 5. Audit your own system

You've built 12 components. Are they consistent? Do the tokens hold? Are there edge cases you missed?

**Ask:**
> "Run the design-system skill. Audit my components for token usage, accessibility, and consistency. Flag any component that deviates from the system."

This is something a human designer rarely does mid-project — too tedious. Claude does it in 30 seconds.

---

## 6. Critique accessibility like a specialist

Every designer says they care about a11y. Most don't know how to audit it.

**Ask:**
> "For each component in /components, check: keyboard accessible, focus-visible rings, WCAG AA contrast on every text/background pair, aria attributes for screen readers. Give me a pass/fail per component."

Claude audits. You get a concrete list. You fix the 3 things that matter.

---

## 7. Test your system under stress

**Ask:**
> "Show me ProfileCard with: short name + short bio, very long name + no bio, long bio with no skills, maximum content in every field. Render all four in /explore so I can see layout resilience."

This is how you catch bugs your screens will hit in production — before the dev hits them.

---

## The mindset shift

Old workflow: Designer makes Figma mockups → dev rebuilds them → design system lives in one place (Figma) while code drifts → two months later, nothing matches.

New workflow: You design in code with Claude. You push to Figma as artifacts. The code IS the source of truth. The dev composes from it. Everything stays in sync because there's no translation step.

You're not a designer who now has to code. You're a designer who can now ship systems.

---

## Quick-reference: Claude capabilities for design

| Capability | How |
|---|---|
| Generate visual variants | "Show me 3 approaches to X in /explore" |
| Critique component | "Review as a design director" |
| Push to Figma | "Push to Figma with variants and variables" |
| Build Figma library | "Run figma-generate-library" |
| Audit design system | "Run design-system skill" |
| a11y audit | "Check WCAG AA across all components" |
| Stress-test layouts | "Render [component] with extreme content" |
| Generate documentation | "Write docs for each component in /docs" |
