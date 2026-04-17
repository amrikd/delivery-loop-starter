import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0f]">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-pink-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16">

        {/* Hero */}
        <div className="mb-16 text-center">
          <div className="mb-8 inline-block rounded-full border border-[#2a2a35] bg-[#141419]/60 px-4 py-1.5 text-[11px] font-medium tracking-[0.2em] text-indigo-400 backdrop-blur">
            AGENTIC LOOP · V2
          </div>
          <h1 className="mb-5 text-6xl font-bold tracking-tight text-white md:text-7xl">
            The <span className="bg-gradient-to-r from-indigo-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Delivery</span> Loop
          </h1>
          <p className="mx-auto max-w-lg text-lg text-neutral-500">
            Ship a design system and a working app in 90 minutes.
          </p>
        </div>

        {/* Quick links — subtle, not instructive */}
        <div className="mx-auto flex flex-wrap items-center justify-center gap-3 text-sm">
          <Pill href="/gallery" color="pink">Component Gallery</Pill>
          <Pill href="/explore" color="cyan">Explore</Pill>
        </div>

        {/* Philosophy line */}
        <p className="mt-20 text-center text-xs tracking-wide text-neutral-600">
          Specs are the new source code · Agents compile them into products
        </p>
      </div>
    </main>
  );
}

function Pill({
  href,
  color,
  children,
}: {
  href: string;
  color: "pink" | "cyan";
  children: React.ReactNode;
}) {
  const hover =
    color === "pink"
      ? "hover:border-pink-500/40 hover:text-pink-300"
      : "hover:border-cyan-500/40 hover:text-cyan-300";
  return (
    <Link
      href={href}
      className={`rounded-full border border-[#2a2a35] bg-[#141419]/60 px-4 py-2 text-neutral-400 backdrop-blur transition-colors ${hover}`}
    >
      {children} →
    </Link>
  );
}
