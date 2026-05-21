import { Check, CircleDot, Layers3 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        eyebrow="Experience"
        title="Production work with real users, incidents, APIs, and AI systems."
        description="Each role is framed around the engineering problem, the system shipped, and the impact that made the work matter."
      />

      <div className="space-y-10 md:space-y-12">
        {experiences.map((experience, experienceIndex) => (
          <Reveal key={`${experience.company}-${experience.period}`} delay={experienceIndex * 0.05}>
            <article className="grid gap-6 border-t border-[var(--border)] pt-7 md:gap-7 md:pt-8 lg:grid-cols-[280px_1fr]">
              <aside className="lg:sticky lg:top-24 lg:self-start">
                <div className="flex items-center gap-2">
                  <span className="accent-dot" />
                  <span className="font-mono text-xs uppercase text-[var(--text-3)]">{experience.badge}</span>
                </div>
                <h3 className="mt-4 font-head text-2xl font-[760] leading-none text-[var(--text)] sm:text-3xl">
                  {experience.company}
                </h3>
                <p className="mt-3 text-sm font-semibold text-[var(--text)]">{experience.role}</p>
                <p className="mt-1 font-mono text-xs text-[var(--text-3)]">{experience.period}</p>
                <p className="mt-5 text-sm leading-6 text-[var(--text-2)]">{experience.context}</p>
                <p className="mt-5 text-sm leading-6 text-[var(--text-2)]">{experience.summary}</p>
              </aside>

              <div className="grid gap-4">
                {experience.highlights.map((highlight, index) => (
                  <article key={highlight.title} className="surface-card p-4 sm:p-5 md:p-6" data-accent={index % 3 === 0 ? "emerald" : index % 3 === 1 ? "cyan" : "amber"}>
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div>
                        <div className="mb-3 inline-flex items-center gap-2 font-mono text-xs text-[var(--local-accent)]">
                          <CircleDot className="h-4 w-4" aria-hidden="true" />
                          Case file {String(index + 1).padStart(2, "0")}
                        </div>
                        <h4 className="font-head text-xl font-[730] leading-tight text-[var(--text)] sm:text-2xl">
                          {highlight.title}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2 md:justify-end">
                        {highlight.stack.slice(0, 4).map((tech) => (
                          <span key={tech} className="chip">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 grid gap-5 lg:grid-cols-[0.75fr_1fr_0.7fr]">
                      <div>
                        <p className="mb-2 font-mono text-xs uppercase text-[var(--text-3)]">Problem</p>
                        <p className="text-sm leading-6 text-[var(--text-2)]">{highlight.problem}</p>
                      </div>

                      <div>
                        <p className="mb-2 font-mono text-xs uppercase text-[var(--text-3)]">Shipped</p>
                        <ul className="space-y-3">
                          {highlight.shipped.map((item) => (
                            <li key={item} className="flex gap-2 text-sm leading-6 text-[var(--text-2)]">
                              <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--local-accent)]" aria-hidden="true" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="mb-2 font-mono text-xs uppercase text-[var(--text-3)]">Impact</p>
                        <ul className="space-y-3">
                          {highlight.impact.map((item) => (
                            <li key={item} className="flex gap-2 text-sm leading-6 text-[var(--text-2)]">
                              <Layers3 className="mt-1 h-4 w-4 shrink-0 text-[var(--local-accent)]" aria-hidden="true" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        {highlight.stack.length > 4 ? (
                          <div className="mt-5 flex flex-wrap gap-2">
                            {highlight.stack.slice(4).map((tech) => (
                              <span key={tech} className="chip">
                                {tech}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
