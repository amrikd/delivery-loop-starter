"use client";

/**
 * Explore — Designer's scratch canvas.
 *
 * This is where the designer agent renders visual experiments:
 * - Side-by-side visual direction options (A/B/C)
 * - Component variants for comparison
 * - Stress-tests with extreme content
 *
 * Replace everything below when you use this page.
 * Nothing here ships.
 */

import Link from "next/link";

export default function Explore() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <div className="mx-auto max-w-6xl px-6 py-12">

        <div className="mb-12">
          <Link href="/" className="mb-3 inline-block text-xs text-neutral-600 hover:text-neutral-400">
            ← back
          </Link>
          <h1 className="text-3xl font-bold text-white">Explore</h1>
          <p className="mt-1 text-sm text-neutral-500">
            Scratch canvas. For trying things.
          </p>
        </div>

        {/* Empty state — replace when you want to compare variants, directions, stress-tests */}
        <div className="flex min-h-[500px] items-center justify-center rounded-2xl border border-dashed border-[#2a2a35] bg-gradient-to-b from-[#141419]/50 to-transparent">
          <div className="max-w-sm px-6 text-center">
            <div className="mx-auto mb-6 grid h-16 w-24 grid-cols-3 gap-1">
              <div className="rounded-sm border border-[#2a2a35] bg-[#1c1c24]" />
              <div className="rounded-sm border border-[#2a2a35] bg-[#1c1c24]" />
              <div className="rounded-sm border border-[#2a2a35] bg-[#1c1c24]" />
            </div>
            <p className="text-sm text-neutral-500">
              A blank canvas.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
