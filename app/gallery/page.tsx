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
 *   </Section>
 */

import { useState } from "react";
import Link from "next/link";

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
// ... etc

export default function Gallery() {
  const [filter, setFilter] = useState("");

  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <div className="mx-auto max-w-4xl px-6 py-12">

        <div className="mb-12 flex items-center justify-between">
          <div>
            <Link href="/" className="mb-3 inline-block text-xs text-neutral-600 hover:text-neutral-400">
              ← back
            </Link>
            <h1 className="text-3xl font-bold text-white">Gallery</h1>
            <p className="mt-1 text-sm text-neutral-500">
              The design system, live.
            </p>
          </div>
          <input
            type="text"
            placeholder="Filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            aria-label="Filter components"
            className="rounded-lg border border-[#2a2a35] bg-[#141419] px-3 py-1.5 text-sm text-white placeholder-neutral-600 outline-none transition-colors focus:border-indigo-500/50"
          />
        </div>

        {/* Designer agent: add <Section> blocks below as you build components */}

        {/* Empty state — remove after first component lands */}
        <div className="flex min-h-[400px] items-center justify-center rounded-2xl border border-[#1c1c24] bg-gradient-to-b from-[#141419] to-[#101014]">
          <div className="max-w-sm px-6 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#2a2a35] bg-[#1c1c24]">
              <div className="grid grid-cols-2 gap-1">
                <div className="h-3 w-3 rounded-sm bg-pink-400/60" />
                <div className="h-3 w-3 rounded-sm bg-indigo-400/60" />
                <div className="h-3 w-3 rounded-sm bg-cyan-400/60" />
                <div className="h-3 w-3 rounded-sm bg-neutral-600" />
              </div>
            </div>
            <p className="text-sm text-neutral-400">
              Nothing yet. Components appear here as they ship.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
