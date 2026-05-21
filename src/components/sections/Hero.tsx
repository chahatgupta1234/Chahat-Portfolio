import {
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Mail,
  ServerCog,
  Workflow,
} from "lucide-react";
import type { ComponentType } from "react";
import Reveal from "@/components/ui/Reveal";
import RoleTicker from "@/components/RoleTicker";
import { heroMetrics, profile, proofPoints } from "@/data/portfolio";

const systems = [
  { label: "TicketOps", detail: "LangGraph + FastMCP", icon: Workflow },
  { label: "Work Portal", detail: "APIs + reliability", icon: ServerCog },
  { label: "Edith", detail: "Slack automation", icon: BrainCircuit },
  { label: "DevHub", detail: "Full-stack product", icon: Code2 },
];

const stack = ["TypeScript", "Node.js", "PostgreSQL", "LangGraph", "FastMCP", "Azure OpenAI", "Next.js"];
const proofIcons = [BrainCircuit, ServerCog, CheckCircle2, BriefcaseBusiness];

export default function Hero() {
  return (
    <section id="hero" className="hero-shell">
      <Reveal>
        <div>
          <div className="px-1 py-7 sm:px-5 md:px-8 md:py-10 lg:px-10 lg:py-12">
            <div className="max-w-3xl">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-3 py-1.5 font-mono text-xs text-[var(--text-3)]">
                <span className="accent-dot" />
                Backend · Applied AI · Product systems
              </div>

              <h1 className="mt-7 font-head text-[clamp(3.25rem,15vw,7.15rem)] font-[800] leading-[0.88] tracking-normal text-[var(--text)]">
                <span className="block">Chahat</span>
                <span className="block text-[var(--accent)]">Gupta.</span>
              </h1>

              <p className="mt-5 max-w-2xl font-head text-[clamp(1.2rem,6vw,2rem)] font-[650] leading-tight text-[var(--text)]">
                Backend systems for AI products.
              </p>

              <RoleTicker />

              <p className="mt-6 max-w-2xl text-pretty text-[0.95rem] leading-7 text-[var(--text-2)] md:text-lg md:leading-8">
                {profile.subhead}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#skills"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[var(--text)] px-5 py-3 text-sm font-semibold text-[var(--bg)] transition-transform hover:-translate-y-0.5 sm:w-auto"
                >
                  Scan skills
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#case-studies"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-[var(--border-strong)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition-colors hover:border-[var(--text-3)] sm:w-auto"
                >
                  Case studies
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-md px-2 py-3 text-sm font-semibold text-[var(--text-2)] transition-colors hover:text-[var(--text)]"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Contact
                </a>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {heroMetrics.map((metric) => (
                <div key={metric.label} className="subtle-card p-4 sm:p-5 xl:p-4">
                  <p className="font-head text-3xl font-[760] leading-none text-[var(--text)]">{metric.value}</p>
                  <p className="mt-2 text-sm font-semibold leading-5 text-[var(--text)]">{metric.label}</p>
                  <p className="mt-1 text-xs leading-5 text-[var(--text-3)]">{metric.context}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_0.92fr]">
              <div className="rounded-md border border-[var(--border)] bg-[var(--surface-2)] p-4 sm:p-5 lg:p-4">
                <p className="font-mono text-[10px] uppercase text-[var(--text-3)]">Systems shipped</p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {systems.map((system) => (
                    <SystemPill key={system.label} {...system} />
                  ))}
                </div>
              </div>

              <div className="rounded-md border border-[var(--border)] bg-[var(--surface-2)] p-4 sm:p-5 lg:p-4">
                <p className="font-mono text-[10px] uppercase text-[var(--text-3)]">Core stack</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {stack.map((item) => (
                    <span key={item} className="chip bg-[var(--surface)]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="hero-proof-grid grid md:grid-cols-2 xl:grid-cols-4">
            {proofPoints.map((point, index) => {
              const Icon = proofIcons[index];
              return (
                <div key={point.label} className="border-b border-[var(--border)] p-4 last:border-b-0 sm:p-5 md:border-r xl:border-b-0">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="grid h-9 w-9 place-items-center rounded-md bg-[var(--surface-2)] text-[var(--accent)]">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <CheckCircle2 className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-semibold text-[var(--text)]">{point.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-2)]">{point.proof}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function SystemPill({
  icon: Icon,
  label,
  detail,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  detail: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-md border border-[var(--border)] bg-[var(--surface)] p-3">
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-[var(--surface-2)] text-[var(--accent)]">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </div>
      <div>
        <p className="text-sm font-semibold leading-5 text-[var(--text)]">{label}</p>
        <p className="text-xs leading-5 text-[var(--text-3)]">{detail}</p>
      </div>
    </div>
  );
}
