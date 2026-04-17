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
        <div className="mb-20 text-center">
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

        {/* Two doors */}
        <div className="mx-auto grid w-full max-w-3xl gap-4 md:grid-cols-2">
          <Door
            tag="DESIGN"
            tagColor="text-pink-400"
            accent="from-pink-500/10"
            title="I'm the designer"
            hint="Start here"
            href="/gallery"
          />
          <Door
            tag="DEVELOP"
            tagColor="text-cyan-400"
            accent="from-cyan-500/10"
            title="I'm the developer"
            hint="Start here"
            href="/explore"
          />
        </div>

        {/* Philosophy line */}
        <p className="mt-20 text-center text-xs tracking-wide text-neutral-600">
          Specs are the new source code · Agents compile them into products
        </p>
      </div>
    </main>
  );
}

function Door({
  tag,
  tagColor,
  accent,
  title,
  hint,
  href,
}: {
  tag: string;
  tagColor: string;
  accent: string;
  title: string;
  hint: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-2xl border border-[#2a2a35] bg-[#141419] p-10 transition-all hover:border-[#3a3a48] hover:bg-[#181820]"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} to-transparent opacity-0 transition-opacity group-hover:opacity-100`} />
      <div className="relative">
        <div className={`mb-6 text-[11px] font-bold tracking-[0.2em] ${tagColor}`}>
          {tag}
        </div>
        <div className="mb-2 text-2xl font-semibold text-white">{title}</div>
        <div className="text-sm text-neutral-500 transition-colors group-hover:text-neutral-300">
          {hint} →
        </div>
      </div>
    </Link>
  );
}
