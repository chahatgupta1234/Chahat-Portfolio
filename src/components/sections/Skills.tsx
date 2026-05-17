import {
  Award,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  GraduationCap,
  LockKeyhole,
  ServerCog,
  Trophy,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { achievements, skillGroups } from "@/data/portfolio";

const groupIcons = [BrainCircuit, ServerCog, Code2, Database, Cloud, LockKeyhole];

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Technical range"
        title="A stack organized around systems, not buzzwords."
        description="The skill map is grouped by the kinds of problems Chahat has actually shipped: AI workflows, backend contracts, product surfaces, data models, infrastructure, and security."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {skillGroups.map((group, index) => {
          const Icon = groupIcons[index];
          return (
            <Reveal key={group.title} delay={(index % 2) * 0.04}>
              <article className="surface-card h-full p-6" data-accent={index % 3 === 0 ? "emerald" : index % 3 === 1 ? "cyan" : "amber"}>
                <div className="flex gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-[var(--surface-2)] text-[var(--local-accent)]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-head text-2xl font-[740] text-[var(--text)]">{group.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--text-2)]">{group.signal}</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-5 rounded-md border border-[var(--border)] bg-[var(--bg-2)] p-4">
                  <p className="font-mono text-xs uppercase text-[var(--text-3)]">Evidence</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-2)]">{group.proof}</p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.08}>
        <div className="mt-10 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="surface-card p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-md bg-[var(--surface-2)] text-[var(--accent-3)]">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="font-mono text-xs uppercase text-[var(--text-3)]">Education</p>
                <h3 className="font-head text-2xl font-[740] text-[var(--text)]">NIT Bhopal · MCA</h3>
              </div>
            </div>
            <div className="grid gap-3">
              <div className="rounded-md border border-[var(--border)] bg-[var(--bg-2)] p-4">
                <p className="font-head text-3xl font-[760] leading-none text-[var(--text)]">8.9</p>
                <p className="mt-2 text-sm text-[var(--text-2)]">CGPA · 2022-2025</p>
              </div>
              <div className="rounded-md border border-[var(--border)] bg-[var(--bg-2)] p-4">
                <p className="font-head text-3xl font-[760] leading-none text-[var(--text)]">AIR 360</p>
                <p className="mt-2 text-sm text-[var(--text-2)]">NIMCET 2022 · top 0.36% of 100,000+ candidates</p>
              </div>
            </div>
          </div>

          <div className="surface-card p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-md bg-[var(--surface-2)] text-[var(--accent)]">
                <Trophy className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="font-mono text-xs uppercase text-[var(--text-3)]">Achievements</p>
                <h3 className="font-head text-2xl font-[740] text-[var(--text)]">Signals beyond job titles</h3>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {achievements.map((achievement) => (
                achievement.link ? (
                  <a
                    key={achievement.title}
                    href={achievement.link}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border border-[var(--border)] bg-[var(--bg-2)] p-4 transition-colors hover:border-[var(--border-strong)]"
                  >
                    <Award className="mb-3 h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
                    <h4 className="text-sm font-semibold text-[var(--text)]">{achievement.title}</h4>
                    <p className="mt-2 text-xs leading-5 text-[var(--text-3)]">{achievement.detail}</p>
                  </a>
                ) : (
                  <div
                    key={achievement.title}
                    className="rounded-md border border-[var(--border)] bg-[var(--bg-2)] p-4"
                  >
                    <Award className="mb-3 h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
                    <h4 className="text-sm font-semibold text-[var(--text)]">{achievement.title}</h4>
                    <p className="mt-2 text-xs leading-5 text-[var(--text-3)]">{achievement.detail}</p>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
