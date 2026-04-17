# Feature Brief: Team Profile Builder

## What Are We Building

A team hub where members create rich profiles showcasing their skills, current projects, availability, and working preferences. Think internal LinkedIn for your immediate team — everyone fills in a profile, then you can browse the team directory, filter by skill, and see who's available for what.

## User Flows

### Flow 1: Create Profile
1. User clicks "Create Profile" from the dashboard
2. Step 1 — Identity: enter name, role, avatar (initials-based), short bio
3. Step 2 — Skills: add skills with proficiency level (beginner/intermediate/advanced/expert), pick from suggestions or type custom
4. Step 3 — Projects: add current projects with name, role on project, and status (active/paused/completed)
5. Step 4 — Availability: set availability status (available/busy/away/focused), preferred working hours, timezone
6. User reviews summary and submits
7. Profile appears on dashboard and in team directory

### Flow 2: Browse Team Directory
1. User navigates to team directory
2. Sees grid of profile cards showing avatar, name, role, top 3 skills, availability status
3. User types in search bar — filters by name or skill in real time
4. User clicks skill filter chips to narrow by specific skills
5. User toggles between grid and list view
6. User clicks a profile card to see full detail

### Flow 3: View Profile Detail
1. User clicks a profile card from dashboard or directory
2. Full profile opens: identity section, all skills with proficiency bars, project cards, availability info
3. User sees skill badges with proficiency indicators
4. User sees project cards with status and role
5. User can navigate back to directory or dashboard

### Flow 4: Dashboard Overview
1. User lands on dashboard
2. Sees team stats: total members, most common skills, availability breakdown
3. Sees recent profiles added (latest 3-4 as cards)
4. Sees skill distribution chart (top 10 skills across team)
5. Quick action: "Create Profile" button prominent

## Component List

| Component | Variants | States | Used In |
|---|---|---|---|
| Button | primary, secondary, ghost, danger, icon | default, hover, focus, disabled, loading | All flows |
| Input | text, textarea | default, focus, error, disabled | Flow 1 |
| Avatar | sm, md, lg, xl | with-status, without-status | All flows |
| SkillBadge | beginner, intermediate, advanced, expert | default, hover, removable | Flow 1, 2, 3 |
| ProgressBar | sm, md | default, animated | Flow 3 |
| ProfileCard | compact, detailed | default, hover, selected | Flow 2, 4 |
| ProjectTag | active, paused, completed | default, hover, removable | Flow 1, 3 |
| StatCard | number, chart | default, loading | Flow 4 |
| StepIndicator | horizontal | active, completed, upcoming | Flow 1 |
| SearchInput | default | empty, filled, searching | Flow 2 |
| FilterChip | default | active, inactive, hover | Flow 2 |
| Toggle | default | on, off, disabled | Flow 2 (grid/list) |
| EmptyState | no-results, no-profiles, no-skills | default | Flow 2, 4 |
| Modal | default | open, closed | Flow 1 (review) |

## Design Direction

**Mood:** Clean, professional, modern — feels like a real internal tool, not a toy
**Colors:** Dark theme. Neutral grays for surfaces. One accent color (blue or violet) for interactive elements. Status colors: green (available), amber (busy), red (away), blue (focused)
**Typography:** System font stack or Inter. Clear hierarchy — large bold headings, medium labels, small metadata
**Spacing:** Comfortable — 16px base grid. Cards have 24px padding. Lists have 12px gaps.
**Dark/Light:** Dark only. Background #0a0a0f, surface #141419, elevated #1c1c24, border #2a2a35

## Data Model

```typescript
interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarColor: string;
  skills: Skill[];
  projects: Project[];
  availability: Availability;
  createdAt: string;
}

interface Skill {
  name: string;
  proficiency: "beginner" | "intermediate" | "advanced" | "expert";
}

interface Project {
  name: string;
  role: string;
  status: "active" | "paused" | "completed";
}

interface Availability {
  status: "available" | "busy" | "away" | "focused";
  hours: string;
  timezone: string;
}
```

## Interactions

| Component | Hover | Click | Focus | Error | Success |
|---|---|---|---|---|---|
| Button | Lighten bg, cursor pointer | Execute action, show loading if async | Ring outline | Shake + red variant | Checkmark flash |
| ProfileCard | Subtle lift (translateY -2px), border glow | Navigate to profile detail | Ring outline | — | — |
| SkillBadge | Slight scale (1.05) | Toggle filter (directory) or remove (form) | Ring outline | — | — |
| ProjectTag | Slight scale (1.05) | Remove (form) or no-op (detail) | Ring outline | — | — |
| FilterChip | Lighten bg | Toggle active/inactive state | Ring outline | — | Filled style |
| SearchInput | — | Focus with expanded outline | Blue ring | Red ring + message below | — |
| Input | — | Focus cursor | Blue ring | Red ring + error text below | Green ring briefly |
| StepIndicator | — | Navigate to step (if completed/active) | — | Red dot on failed step | Check icon |
| Toggle | Lighten track | Switch state with spring animation | Ring outline | — | — |
| Modal | — | Close on backdrop click | Trap focus inside | — | — |

## Edge Cases

1. Empty team — no profiles exist yet. Dashboard shows empty state with prominent "Create Profile" CTA.
2. Long skill list — profile with 15+ skills. Show first 6 with "+N more" chip that expands.
3. No search results — directory filter returns zero matches. Show empty state with "No team members match" and clear filters button.
4. Form abandonment — user is mid-profile and navigates away. No save needed (local state), but step indicator shows progress.
5. Duplicate skills — user tries to add "React" twice. Prevent with inline validation "Skill already added."
6. Long bio text — bio exceeds reasonable length. Truncate on card with "..." and show full on detail view.
7. All team members unavailable — dashboard availability breakdown shows all red/amber. No special handling needed, just accurate display.
8. Rapid skill adding — user adds skills quickly. Each should animate in smoothly without jank.
