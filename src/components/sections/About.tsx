import { Bot, Gauge, KeyRound, Network, PanelsTopLeft } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/portfolio";

const lenses = [
  {
    title: "Backend Engineer",
    icon: Network,
    copy:
      "Owns API contracts, schema migrations, auth boundaries, rate limits, retry behavior, and reliable integration surfaces.",
  },
  {
    title: "Applied AI Engineer",
    icon: Bot,
    copy:
      "Builds LangGraph agents, Azure OpenAI workflows, RAG retrieval, FastMCP tools, LLM validation, and PDF extraction fallback paths.",
  },
  {
    title: "Full-stack Product Engineer",
    icon: PanelsTopLeft,
    copy:
      "Turns internal support operations into usable Next.js products, Slack modals, feedback systems, and live data interfaces.",
  },
  {
    title: "Reliability-minded Builder",
    icon: Gauge,
    copy:
      "Treats logging, indexing, retries, async context, and failure alerts as core product infrastructure.",
  },
];

const recruiterSignals = [
  "Promoted from Yellow.ai intern to Software Engineer after production ownership.",
  "Resolved a live enterprise integration incident for 10,000+ end users within one business day.",
  "Built internal systems used by 500+ users and automation handling 500+ requests/month.",
  "NIT Bhopal MCA with NIMCET AIR 360 and CGPA 8.9.",
];

export default function About() {
  return (
    <section id="signal" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Recruiter signal"
          title={
            <>
              Not a template profile. A production engineering narrative.
            </>
          }
          description={profile.headline}
          className="mb-0"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {lenses.map((lens, index) => {
            const Icon = lens.icon;
            return (
              <Reveal key={lens.title} delay={index * 0.04}>
                <article className="surface-card h-full p-5">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-[var(--surface-2)] text-[var(--accent)]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-head text-xl font-[720] leading-tight text-[var(--text)]">{lens.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--text-2)]">{lens.copy}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_0.74fr]">
          <div className="surface-card p-6 md:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-md bg-[var(--surface-2)] text-[var(--accent-2)]">
                <KeyRound className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="font-mono text-xs uppercase text-[var(--text-3)]">Positioning</p>
                <h3 className="font-head text-2xl font-[740] text-[var(--text)]">Systems-backed product engineering</h3>
              </div>
            </div>
            <p className="max-w-3xl text-pretty text-base leading-8 text-[var(--text-2)]">
              The strongest thread across Chahat&apos;s work is ownership of operational systems: automating support
              workflows, hardening auth and API paths, adding production observability, and using AI where it compresses
              real investigation work instead of sitting beside the product as a demo.
            </p>
          </div>

          <div className="surface-card p-6 md:p-8">
            <p className="font-mono text-xs uppercase text-[var(--text-3)]">Fast read</p>
            <ul className="mt-5 space-y-4">
              {recruiterSignals.map((signal) => (
                <li key={signal} className="flex gap-3 text-sm leading-6 text-[var(--text-2)]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  <span>{signal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
