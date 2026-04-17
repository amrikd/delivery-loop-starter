# Feature Brief: Team Profile Builder

**The system-level spec. Big goal, shared context, data model.**

## 1. What Are We Building

A team hub where members create rich profiles showcasing their skills, current projects, availability, and working preferences. Think internal LinkedIn for your immediate team — fill in a profile, browse the team directory, filter by skill, see who's available for what.

## 2. Why (the outcome)

New members ramp faster because they can see who has which expertise. Leads find collaborators in seconds instead of asking around. The team becomes legible to itself.

## 3. Users and Roles

One role: team member. Anyone on the team can create their own profile and browse all others. No admin role for this workshop — everyone is equal.

## 4. Data Model

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

## 5. Non-Goals (what this is NOT)

- Not a hiring tool — no external-facing profiles, no job postings
- Not a messaging app — no chat, no DMs, no notifications
- Not a performance-review tool — no ratings, no feedback from others

## 6. Success Criteria

- [ ] A new member can create a full profile in under 90 seconds
- [ ] A team lead can filter to "React experts who are available" in 2 clicks
- [ ] Data persists through page refresh (localStorage)
- [ ] Every component meets WCAG AA contrast
- [ ] Full user flow has a passing Playwright test

---

**Next:** see `design-system-spec.md` for the designer's scope and `app-spec.md` for the developer's scope.
