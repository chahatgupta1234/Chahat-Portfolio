import {
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  Mail,
  MapPin,
  ServerCog,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { heroMetrics, profile, proofPoints, targetRoles } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="hero" className="section-shell pt-28 md:pt-32">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.72fr)] xl:gap-14">
        <div>
          <Reveal>
            <div className="mb-6 flex flex-wrap items-center gap-2">
              <span className="chip border-[color-mix(in_srgb,var(--accent)_42%,var(--border))] text-[var(--accent)]">
                <span className="accent-dot" />
                Yellow.ai Software Engineer
              </span>
              <span className="chip">{profile.education}</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="max-w-4xl font-head text-balance text-[clamp(2.85rem,5.15vw,5.8rem)] font-[780] leading-[0.93] tracking-normal text-[var(--text)]">
              Backend engineer building production AI systems.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-[var(--text-2)] md:text-lg">
              {profile.subhead}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-7 flex flex-wrap gap-2">
              {targetRoles.map((role) => (
                <span key={role} className="chip">
                  {role}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 rounded-md bg-[var(--text)] px-5 py-3 text-sm font-semibold text-[var(--bg)] transition-transform hover:-translate-y-0.5"
              >
                View case studies
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-md border border-[var(--border-strong)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition-colors hover:border-[var(--text-3)]"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Start a conversation
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-[var(--text-3)]">
              <a className="inline-flex items-center gap-2 hover:text-[var(--text)]" href={profile.github} target="_blank" rel="noreferrer">
                <Code2 className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
              <a className="inline-flex items-center gap-2 hover:text-[var(--text)]" href={profile.linkedin} target="_blank" rel="noreferrer">
                <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
                LinkedIn
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {profile.location} · {profile.mobility}
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.14} className="lg:sticky lg:top-24">
          <div className="surface-card overflow-hidden lg:max-w-[520px]">
            <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-2.5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent-4)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent-3)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
              </div>
              <span className="font-mono text-[11px] text-[var(--text-3)]">production-signal.ts</span>
            </div>

            <div className="p-4">
              <div className="grid gap-2.5 sm:grid-cols-2">
                {heroMetrics.map((metric) => (
                  <div key={metric.label} className="subtle-card p-3.5">
                    <p className="font-head text-2xl font-[760] leading-none text-[var(--text)] md:text-3xl">{metric.value}</p>
                    <p className="mt-1.5 text-sm font-semibold leading-5 text-[var(--text)]">{metric.label}</p>
                    <p className="mt-1 text-xs leading-5 text-[var(--text-3)]">{metric.context}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-2.5">
                {proofPoints.map((point, index) => {
                  const Icon = [BrainCircuit, ServerCog, Database, BriefcaseBusiness][index];
                  return (
                    <div key={point.label} className="flex gap-3 rounded-md border border-[var(--border)] bg-[var(--bg-2)] p-3">
                      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-[var(--surface-2)] text-[var(--accent)]">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold leading-5 text-[var(--text)]">{point.label}</h3>
                        <p className="mt-1 text-xs leading-5 text-[var(--text-3)]">{point.proof}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
