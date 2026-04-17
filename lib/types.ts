export interface TeamMember {
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

export interface Skill {
  name: string;
  proficiency: "beginner" | "intermediate" | "advanced" | "expert";
}

export interface Project {
  name: string;
  role: string;
  status: "active" | "paused" | "completed";
}

export interface Availability {
  status: "available" | "busy" | "away" | "focused";
  hours: string;
  timezone: string;
}
