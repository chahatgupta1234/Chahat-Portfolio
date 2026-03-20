import { experiences } from "@/data/portfolio";

const badgeStyles: Record<string, string> = {
  green:  "bg-[rgba(0,229,160,0.1)]  text-[var(--accent)] border-[rgba(0,229,160,0.2)]",
  blue:   "bg-[rgba(77,158,255,0.1)] text-[var(--blue)]   border-[rgba(77,158,255,0.2)]",
  yellow: "bg-[rgba(240,192,64,0.1)] text-[var(--yellow)] border-[rgba(240,192,64,0.2)]",
};

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 max-w-6xl mx-auto px-10 py-24">
      <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-3 reveal">
        <span className="w-6 h-px bg-[var(--accent)]" />
        Experience
      </div>
      <h2 className="font-head font-black text-[clamp(2rem,4vw,3rem)] text-[var(--text)] mb-16 reveal">
        Where I've shipped.
      </h2>

      <div className="flex flex-col">
        {experiences.map((exp, idx) => (
          <div
            key={exp.company}
            className="reveal grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-12 py-10 border-b border-[var(--border)] group relative"
          >
            {/* Accent left bar */}
            <span className="hidden md:block absolute left-[-40px] top-0 bottom-0 w-0.5 bg-[var(--border)] group-hover:bg-[var(--accent)] transition-colors duration-200" />

            {/* Meta */}
            <div className="pt-1">
              <p className="font-mono text-[10px] text-[var(--text-3)] tracking-widest uppercase mb-2">{exp.period}</p>
              <p className="font-head font-bold text-[var(--text)] text-lg mb-1.5">{exp.company}</p>
              <span className={`inline-block font-mono text-[10px] px-2 py-1 rounded border ${badgeStyles[exp.badge.variant]}`}>
                {exp.badge.text}
              </span>
            </div>

            {/* Content */}
            <div>
              <h3 className="font-head font-bold text-xl text-[var(--text)] mb-4">{exp.role}</h3>
              <ul className="flex flex-col gap-3 mb-5">
                {exp.points.map((pt, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[var(--text-2)] leading-relaxed">
                    <span className="text-[var(--accent)] text-xs mt-0.5 flex-shrink-0">▸</span>
                    <span dangerouslySetInnerHTML={{ __html: pt }} />
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.stack.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] px-2.5 py-1 bg-[var(--surface)] border border-[var(--border)] rounded text-[var(--text-3)] tracking-wider"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
