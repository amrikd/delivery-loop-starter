# Designer Quickstart

One page. No jargon. Do this in order.

## Before the workshop (10 minutes)

### 1. Clone the starter
Copy this into Terminal (you might need to open Terminal via Spotlight → "Terminal"):

```
git clone https://github.com/amrikd/delivery-loop-starter
cd delivery-loop-starter
./setup.sh
```

The setup script checks what's installed and tells you what's missing. It's color-coded — green means ready, yellow means install this thing.

### 2. Install what it flags

Most likely missing:
- **Figma desktop app** — [download here](https://www.figma.com/downloads). Sign in with your Accenture Figma.
- **Claude Code** — [download here](https://claude.com/claude-code). Sign in with your Accenture Claude.

Re-run `./setup.sh` after installing. Should be all green.

### 3. Open Figma desktop and leave it running
Claude talks to Figma through the desktop app, not the browser. It needs to be open.

You're ready.

---

## Day of workshop (what you do)

### Step 1 — Pair up. Agree on a project. 3 minutes.

Six ideas are in `templates/feature-brief.md`. Pick one with your dev pair. Don't debate past 3 minutes.

### Step 2 — Write the spec together. 20 minutes.

Open three files. Fill them in with your pair:

- **`feature-brief.md`** — both of you write this together. What are we building, who for, what data, what's out of scope.
- **`design-system-spec.md`** — YOU write this. Components, colors, type, interactions, accessibility. The designer's spec.
- **`app-spec.md`** — YOUR PAIR writes this. User flows, screens, edge cases, tests. The developer's spec.

**Look at the `examples/` folder first.** There's a full worked example (Team Profile Builder) for all three. That's what "good enough" looks like.

### Step 3 — Start Claude. Build the design system. 90 minutes.

In Terminal, from the repo:
```
claude
```

Then type:
```
/designer
```

That's it. Claude will:
- Ask if you want to explore visual direction first (say yes for 5 min, no to skip)
- Create a Figma file for your design system
- Start building tokens (colors, spacing, type)
- Draw each component **in Figma first** — you'll watch it appear in Figma desktop
- Ask you "does this look right?" after each component
- Write the code to match after you approve
- Update `/gallery` in your browser so you can see live

**You iterate in conversation.** Things like:
- "Make the hover state brighter"
- "Show me 3 different Card approaches in /explore"
- "Review my Button as a design director would"
- "Add a danger-hover variant"

You don't write code. You direct.

### Step 4 — Watch it come together

Keep these two tabs open:
- **Figma desktop** — your design system as Variables, component sets, docs
- **`http://localhost:3000/gallery`** — the coded components, live

They should match. That's the point.

### Step 5 — At the end, organize Figma

Say:
```
Run figma-generate-library
```

Claude reorganizes the Figma file — Variables, component sets, a proper library. That's your design system deliverable.

---

## Your three outputs at showcase

1. **Figma file** — real design system library, not mockups
2. **`/gallery`** — same system rendered in code, live in the browser
3. **The spec** — what you wrote in `design-system-spec.md`

---

## When things go sideways

- **Claude says "Figma not authed"** → make sure Figma desktop is open and you're signed in
- **Component looks wrong in /gallery but right in Figma** → tell Claude: "Fix the React to match the Figma"
- **Taking too long on a component** → skip it, move to the next. You can always come back.
- **Stuck on a design decision** → ask Claude: "As a design director, what's the right call here?"
- **Lost** → ask your facilitator. No judgement.

---

## What you're NOT doing

You're not writing React by hand. You're not managing files. You're not running terminal commands past the first two.

You ARE: specifying intent, iterating on visuals, making design decisions, reviewing the output. That's design work.

You can read `DESIGN-WITH-CLAUDE.md` for deeper patterns, but the 5 steps above are enough to run the workshop.
