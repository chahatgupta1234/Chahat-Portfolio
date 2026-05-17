import { Activity, Braces, Gauge, Route, ShieldCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { operatingPrinciples } from "@/data/portfolio";

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
              <article className="surface-card h-full p-6" data-accent={index % 2 === 0 ? "emerald" : "cyan"}>
                <div className="mb-8 flex items-center justify-between">
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
          <div className="surface-card overflow-hidden">
            <div className="border-b border-[var(--border)] px-5 py-4">
              <p className="font-mono text-xs uppercase text-[var(--text-3)]">Architecture loop</p>
            </div>
            <div className="grid gap-3 p-5 sm:grid-cols-4">
              {["Contract", "Validation", "Observability", "Feedback"].map((step, index) => (
                <div key={step} className="relative rounded-md border border-[var(--border)] bg-[var(--bg-2)] p-4">
                  <span className="font-mono text-[10px] text-[var(--text-3)]">0{index + 1}</span>
                  <p className="mt-7 text-sm font-semibold text-[var(--text)]">{step}</p>
                  {index < 3 ? (
                    <span className="absolute right-[-14px] top-1/2 hidden h-px w-7 bg-[var(--accent)] sm:block" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-md bg-[var(--surface-2)] text-[var(--accent-2)]">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="font-mono text-xs uppercase text-[var(--text-3)]">Hiring signal</p>
                <h3 className="font-head text-2xl font-[740] text-[var(--text)]">Owns the unglamorous parts</h3>
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
