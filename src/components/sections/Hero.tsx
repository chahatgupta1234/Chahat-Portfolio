import {
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Mail,
  MapPin,
  ServerCog,
  Workflow,
} from "lucide-react";
import type { ComponentType } from "react";
import Reveal from "@/components/ui/Reveal";
import RoleTicker from "@/components/RoleTicker";
import { heroMetrics, profile, proofPoints, targetRoles } from "@/data/portfolio";

const proofIcons = [BrainCircuit, ServerCog, Database, BriefcaseBusiness];
const coreStack = ["TypeScript", "Node.js", "PostgreSQL", "LangGraph", "FastMCP", "Azure OpenAI", "Next.js", "Kubernetes"];

export default function Hero() {
  return (
    <section id="hero" className="section-shell pt-24 md:pt-28">
      <Reveal>
        <div className="surface-card overflow-hidden">
          <div className="grid lg:grid-cols-[320px_minmax(0,1fr)]">
            <aside className="border-b border-[var(--border)] bg-[var(--surface-2)] p-5 lg:border-b-0 lg:border-r">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-md bg-[var(--text)] font-head text-base font-black text-[var(--bg)]">
                  CG
                </div>
                <div>
                  <p className="text-lg font-semibold leading-5 text-[var(--text)]">{profile.name}</p>
                  <p className="mt-1 font-mono text-xs text-[var(--text-3)]">{profile.role}</p>
                </div>
              </div>

              <div className="mt-6 rounded-md border border-[var(--border)] bg-[var(--surface)] p-4">
                <p className="font-mono text-[10px] uppercase text-[var(--text-3)]">Current signal</p>
                <p className="mt-2 text-sm font-semibold text-[var(--text)]">Yellow.ai · Software Engineer</p>
                <p className="mt-2 text-sm leading-6 text-[var(--text-2)]">
                  Backend, AI, APIs, reliability, internal tools, and production incident recovery.
                </p>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <MiniSignal label="NIT Bhopal" value="MCA · 8.9" />
                <MiniSignal label="NIMCET" value="AIR 360" />
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {targetRoles.map((role) => (
                  <span key={role} className="chip">
                    {role}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-between rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-sm text-[var(--text-2)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text)]"
                >
                  <span className="inline-flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
                    GitHub
                  </span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-between rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-sm text-[var(--text-2)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text)]"
                >
                  <span className="inline-flex items-center gap-2">
                    <BriefcaseBusiness className="h-4 w-4 text-[var(--accent-2)]" aria-hidden="true" />
                    LinkedIn
                  </span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </aside>

            <div className="p-5 md:p-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-3 py-1.5 font-mono text-xs text-[var(--text-3)]">
                  <span className="accent-dot" />
                  Candidate dossier / production engineering
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-3)]">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {profile.location} · {profile.mobility}
                </div>
              </div>

              <div className="mt-7 grid gap-8 xl:grid-cols-[1fr_260px]">
                <div>
                  <h1 className="max-w-4xl font-head text-balance text-[clamp(2.25rem,3.9vw,4.25rem)] font-[780] leading-[0.98] tracking-normal text-[var(--text)]">
                    I build the backend systems behind AI products.
                  </h1>
                  <RoleTicker />
                  <p className="mt-5 max-w-3xl text-pretty text-base leading-8 text-[var(--text-2)] md:text-lg">
                    {profile.subhead}
                  </p>

                  <div className="mt-5 flex max-w-3xl flex-wrap gap-2">
                    {coreStack.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <a
                      href="#skills"
                      className="inline-flex items-center gap-2 rounded-md bg-[var(--text)] px-5 py-3 text-sm font-semibold text-[var(--bg)] transition-transform hover:-translate-y-0.5"
                    >
                      Scan skills
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                    <a
                      href="#case-studies"
                      className="inline-flex items-center gap-2 rounded-md border border-[var(--border-strong)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition-colors hover:border-[var(--text-3)]"
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

                <div className="grid gap-2.5">
                  <PipelineStep icon={Workflow} label="TicketOps" detail="LangGraph + FastMCP" />
                  <PipelineStep icon={ServerCog} label="Work Portal" detail="APIs + reliability" />
                  <PipelineStep icon={BrainCircuit} label="Edith" detail="Slack automation" />
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {heroMetrics.map((metric) => (
                  <div key={metric.label} className="subtle-card p-4">
                    <p className="font-head text-3xl font-[760] leading-none text-[var(--text)]">{metric.value}</p>
                    <p className="mt-2 text-sm font-semibold leading-5 text-[var(--text)]">{metric.label}</p>
                    <p className="mt-1 text-xs leading-5 text-[var(--text-3)]">{metric.context}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid border-t border-[var(--border)] md:grid-cols-2 xl:grid-cols-4">
            {proofPoints.map((point, index) => {
              const Icon = proofIcons[index];
              return (
                <div key={point.label} className="border-b border-[var(--border)] p-5 last:border-b-0 md:border-r md:odd:border-l-0 xl:border-b-0">
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

function MiniSignal({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-[var(--border)] bg-[var(--surface)] p-3">
      <p className="font-mono text-[10px] uppercase text-[var(--text-3)]">{label}</p>
      <p className="mt-1 text-sm font-semibold text-[var(--text)]">{value}</p>
    </div>
  );
}

function PipelineStep({
  icon: Icon,
  label,
  detail,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  detail: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-md border border-[var(--border)] bg-[var(--surface-2)] p-3">
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-[var(--surface)] text-[var(--accent)]">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </div>
      <div>
        <p className="text-sm font-semibold leading-5 text-[var(--text)]">{label}</p>
        <p className="text-xs leading-5 text-[var(--text-3)]">{detail}</p>
      </div>
    </div>
  );
}
