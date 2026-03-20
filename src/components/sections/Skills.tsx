import { skillCategories } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 max-w-6xl mx-auto px-10 py-24">
      <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-3 reveal">
        <span className="w-6 h-px bg-[var(--accent)]" />
        Skills
      </div>
      <h2 className="font-head font-black text-[clamp(2rem,4vw,3rem)] text-[var(--text)] mb-14 reveal">
        The stack I'm fluent in.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {skillCategories.map((cat, ci) => (
          <div
            key={cat.title}
            className={`reveal reveal-delay-${ci + 1} skill-category bg-[var(--bg-2)] border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--border-h)] transition-colors duration-200`}
          >
            <div className="text-2xl mb-3">{cat.icon}</div>
            <h3 className="font-head font-bold text-[var(--text)] mb-5">{cat.title}</h3>
            <div className="flex flex-col gap-3">
              {cat.skills.map((s) => (
                <div key={s.name} className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[11px] text-[var(--text-2)] tracking-wide">{s.name}</span>
                  <div className="w-20 h-0.5 bg-[var(--surface)] rounded-full overflow-hidden flex-shrink-0">
                    <div
                      className="skill-bar h-full bg-[var(--accent)] rounded-full"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Credentials row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { icon: "🏅", title: "HackerRank 5-Star", desc: "C++ and Problem Solving — consistent competitive programming track record." },
          { icon: "🎓", title: "NIMCET AIR 360", desc: "All India Rank 360 out of 1 lakh+ students — NIT Bhopal selection." },
          { icon: "🌐", title: "Open Source", desc: "Active HacktoberFest contributor. Multiple GitHub projects with real-world scope." },
        ].map((c, i) => (
          <div key={c.title} className={`reveal reveal-delay-${i + 1} bg-[var(--bg-2)] border border-[var(--border)] rounded-2xl p-5 hover:border-[var(--border-h)] transition-colors duration-200`}>
            <div className="text-xl mb-2">{c.icon}</div>
            <h4 className="font-head font-bold text-sm text-[var(--text)] mb-1">{c.title}</h4>
            <p className="text-xs text-[var(--text-2)] leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
