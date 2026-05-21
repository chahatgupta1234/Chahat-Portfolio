import { Activity, Braces, Gauge, Route, ShieldCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { engineeringPrinciplesJson, operatingPrinciples } from "@/data/portfolio";

const principleIcons = [Braces, Activity, Route, Gauge];

export default function Mindset() {
  return (
    <section id="principles" className="section-shell">
      <SectionHeading
        eyebrow="Engineering principles"
        title="How Chahat thinks when systems have to survive production."
        description="The common pattern across the work: define contracts early, keep failures visible, use AI inside real workflows, and optimize the repeated expensive path."
      />

      <div className="grid gap-5 lg:grid-cols-4">
        {operatingPrinciples.map((principle, index) => {
          const Icon = principleIcons[index];
          return (
            <Reveal key={principle.title} delay={index * 0.04}>
              <article className="surface-card h-full p-4 sm:p-5 md:p-6" data-accent={index % 2 === 0 ? "emerald" : "cyan"}>
                <div className="mb-6 flex items-center justify-between sm:mb-8">
                  <div className="grid h-10 w-10 place-items-center rounded-md bg-[var(--surface-2)] text-[var(--local-accent)]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-xs text-[var(--text-3)]">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-head text-xl font-[740] leading-tight text-[var(--text)]">{principle.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--text-2)]">{principle.detail}</p>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.12}>
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="terminal-card overflow-hidden">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-4 sm:px-5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
              <p className="min-w-0 truncate font-mono text-[11px] text-[#94a3b8] sm:text-xs">
                chahat@dev ~ engineering_principles.json
              </p>
            </div>
            <div className="p-4 font-mono text-xs leading-7 sm:p-5 sm:text-sm sm:leading-8">
              <p>
                <span className="text-emerald-400">$</span>{" "}
                <span className="text-[#e5edf7]">cat engineering_principles.json</span>
              </p>
              <pre className="mt-4 overflow-x-auto whitespace-pre-wrap">
                <span className="block text-[#94a3b8]">{"{"}</span>
                {Object.entries(engineeringPrinciplesJson).map(([key, value], index, entries) => (
                  <span key={key} className="block pl-3 sm:pl-4">
                    <span className="text-[#7dd3fc]">&quot;{key}&quot;</span>
                    <span className="text-[#94a3b8]">: </span>
                    <span className="text-[#f8fafc]">&quot;{value}&quot;</span>
                    <span className="text-[#94a3b8]">{index === entries.length - 1 ? "" : ","}</span>
                  </span>
                ))}
                <span className="block text-[#94a3b8]">{"}"}</span>
              </pre>
              <p className="mt-4 text-[#94a3b8]">
                <span className="text-emerald-400">$</span> # currently leveling up: distributed systems · AWS · advanced system design
              </p>
            </div>
          </div>

          <div className="surface-card p-4 sm:p-5 md:p-6">
            <div className="mb-5 flex items-start gap-3 sm:items-center">
              <div className="grid h-10 w-10 place-items-center rounded-md bg-[var(--surface-2)] text-[var(--accent-2)]">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="font-mono text-xs uppercase text-[var(--text-3)]">Hiring signal</p>
                <h3 className="font-head text-xl font-[740] leading-tight text-[var(--text)] sm:text-2xl">Owns the unglamorous parts</h3>
              </div>
            </div>
            <p className="text-sm leading-7 text-[var(--text-2)]">
              The work emphasizes the parts that senior engineers care about in review: API versioning, auth boundaries,
              schema migrations, observability, rate limits, retries, indexed query paths, and incident recovery under
              live production pressure.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
