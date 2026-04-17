"use client";

/**
 * Explore — Designer's scratch canvas.
 *
 * This is where the designer agent renders visual experiments:
 * - Side-by-side visual direction options (A/B/C)
 * - Component variants for comparison
 * - Stress-tests with extreme content
 * - Any "show me 3 approaches" request
 *
 * Replace everything below when you use this page. It's meant to be scrapped
 * and rewritten multiple times as you iterate. Nothing here ships.
 */

export default function Explore() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-white">Explore</h1>
          <p className="mt-1 text-sm text-neutral-500">
            Designer's scratch canvas. Ask Claude to render visual experiments here.
          </p>
        </div>

        <div className="rounded-xl border border-dashed border-[#2a2a35] bg-[#141419] p-12 text-center">
          <p className="text-neutral-400">
            Ready for exploration.
          </p>
          <p className="mt-2 text-xs text-neutral-600">
            Try: "Generate 3 visual directions for my project in /explore"
          </p>
        </div>
      </div>
    </main>
  );
}
