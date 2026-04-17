import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-white">
          Team Profile Builder
        </h1>
        <p className="mb-10 text-sm text-neutral-500">
          The Delivery Loop — AI-native design + development
        </p>

        <div className="mb-10 space-y-4 text-left">
          <Step n={1} title="Write your Feature Brief">
            Open{" "}
            <Code>feature-brief.md</Code>{" "}
            — define flows, components, design direction
          </Step>
          <Step n={2} title="Validate the brief">
            Run <Code>brief-checker</Code> agent — it gates the build
          </Step>
          <Step n={3} title="Designer builds the system">
            Run <Code>designer</Code> agent — tokens, components, Figma assets.
            Preview at{" "}
            <Link
              href="/gallery"
              className="text-indigo-400 underline underline-offset-2 hover:text-indigo-300"
            >
              /gallery
            </Link>
          </Step>
          <Step n={4} title="Developer builds the app">
            Run <Code>dev</Code> agent — screens, forms, state, navigation
          </Step>
          <Step n={5} title="Review and ship">
            Run <Code>reviewer</Code> per file, then{" "}
            <Code>scorer</Code> for final audit
          </Step>
        </div>

        <div className="flex justify-center gap-3">
          <Link
            href="/gallery"
            className="inline-block rounded-lg border border-[#2a2a35] bg-[#1c1c24] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-[#6366f1] hover:bg-[#1c1c28]"
          >
            Component Gallery
          </Link>
          <Link
            href="/explore"
            className="inline-block rounded-lg border border-[#2a2a35] bg-[#1c1c24] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-[#ec4899] hover:bg-[#1c1c28]"
          >
            Designer Explore
          </Link>
        </div>
      </div>
    </main>
  );
}

function Step({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#2a2a35] text-xs font-medium text-neutral-500">
        {n}
      </span>
      <div>
        <p className="text-sm font-medium text-white">{title}</p>
        <p className="mt-0.5 text-xs text-neutral-500">{children}</p>
      </div>
    </div>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-[#1c1c24] px-1.5 py-0.5 text-xs text-neutral-300">
      {children}
    </code>
  );
}
