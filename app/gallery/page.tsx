"use client";

/**
 * Component Gallery — Designer's preview canvas.
 *
 * The designer agent adds components here as they're built.
 * Each section shows a component with all its variants and states.
 *
 * Pattern for adding a component:
 *
 *   <Section title="Button">
 *     <Row label="Primary">
 *       <Button variant="primary">Click me</Button>
 *     </Row>
 *     <Row label="Disabled">
 *       <Button variant="primary" disabled>Disabled</Button>
 *     </Row>
 *   </Section>
 */

import { useState } from "react";

// --- Gallery layout helpers (do not modify) ---

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-[#2a2a35] bg-[#141419] p-6">
      <h2 className="mb-4 text-lg font-semibold text-white">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="w-28 shrink-0 pt-2 text-xs text-neutral-500">
        {label}
      </span>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  );
}

// --- Component imports (designer agent adds these) ---

// import { Button } from "@/components/Button";
// import { Avatar } from "@/components/Avatar";
// ... etc

// --- Gallery ---

export default function Gallery() {
  const [filter, setFilter] = useState("");

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">
              Component Gallery
            </h1>
            <p className="mt-1 text-sm text-neutral-500">
              Design system preview — updates live as components are built
            </p>
          </div>
          <input
            type="text"
            placeholder="Filter components..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            aria-label="Filter components"
            className="rounded-lg border border-[#2a2a35] bg-[#1c1c24] px-3 py-1.5 text-sm text-white placeholder-neutral-600 outline-none focus:border-[#6366f1]"
          />
        </div>

        {/* Designer agent: add <Section> blocks below as you build components */}

        <div className="flex min-h-[400px] items-center justify-center rounded-xl border border-dashed border-[#2a2a35]">
          <div className="text-center">
            <p className="text-neutral-500">No components yet</p>
            <p className="mt-1 text-xs text-neutral-600">
              Run the designer agent to start building the design system
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
