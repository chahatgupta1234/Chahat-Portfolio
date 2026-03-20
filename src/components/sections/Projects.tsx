import { projects } from "@/data/portfolio";

function Tag({ label }: { label: string }) {
  return (
    <span className="font-mono text-[10px] px-2.5 py-1 bg-[var(--surface)] border border-[var(--border)] rounded text-[var(--text-3)] tracking-wider">
      {label}
    </span>
  );
}

function ImpactPill({ label }: { label: string }) {
  return (
    <span className="font-mono text-[10px] px-3 py-1 bg-[var(--accent-dim)] border border-[rgba(0,229,160,0.2)] rounded-full text-[var(--accent)] tracking-wider">
      {label}
    </span>
  );
}

function DetailPoint({ text }: { text: string }) {
  return (
    <div className="flex gap-2 text-sm text-[var(--text-2)] leading-relaxed">
      <span className="text-[var(--accent)] flex-shrink-0 mt-0.5">→</span>
      <span>{text}</span>
    </div>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative z-10 max-w-6xl mx-auto px-10 py-24">
      <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-3 reveal">
        <span className="w-6 h-px bg-[var(--accent)]" />
        Projects
      </div>
      <h2 className="font-head font-black text-[clamp(2rem,4vw,3rem)] text-[var(--text)] mb-3 reveal">Built to scale.</h2>
      <p className="text-[var(--text-2)] text-base mb-14 reveal max-w-lg">
        Case studies with real problems, real solutions, and measurable impact.
      </p>

      {/* Featured */}
      {featured && (
        <div className="reveal mb-5 bg-[var(--bg-2)] border border-[var(--border)] rounded-2xl p-8 grid md:grid-cols-2 gap-10 group hover:border-[var(--border-h)] transition-all duration-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

          {/* Left */}
          <div>
            <div className="flex justify-between items-start mb-3">
              <div className="w-10 h-10 bg-[var(--accent-dim)] border border-[rgba(0,229,160,0.2)] rounded-lg flex items-center justify-center text-lg">{featured.icon}</div>
              <span className="text-[var(--text-3)] text-sm group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">↗</span>
            </div>
            <h3 className="font-head font-bold text-xl text-[var(--text)] mb-1">{featured.name}</h3>
            <p className="font-mono text-xs text-[var(--text-3)] mb-4">{featured.tagline}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {featured.impacts?.map((imp) => <ImpactPill key={imp} label={imp} />)}
            </div>
            <div className="mb-4">
              <p className="font-mono text-[10px] text-[var(--text-3)] tracking-widest uppercase mb-2">Problem</p>
              <DetailPoint text={featured.problem!} />
            </div>
            <div className="mb-4">
              <p className="font-mono text-[10px] text-[var(--text-3)] tracking-widest uppercase mb-2">Solution</p>
              {featured.solution?.map((s, i) => <DetailPoint key={i} text={s} />)}
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {featured.stack.map((t) => <Tag key={t} label={t} />)}
            </div>
          </div>

          {/* Right — Architecture */}
          <div>
            <p className="font-mono text-[10px] text-[var(--text-3)] tracking-widest uppercase mb-3">Architecture</p>
            <pre className="bg-[var(--bg-3)] border border-[var(--border)] rounded-lg p-4 font-mono text-xs text-[var(--text-2)] leading-7 overflow-x-auto whitespace-pre">
{`SlackEvent ──► BoltApp ──► Router
                         │
       ┌─────────────────┼────────────────────┐
       ▼                 ▼                    ▼
 BotHandler      PricingHandler          RCAHandler
       │                 │                    │
       └─────────────────┼────────────────────┘
                         ▼
          PostgreSQL (audit log)
               +
          Slack Alert (on error)`}
            </pre>
            <div className="mt-5">
              <p className="font-mono text-[10px] text-[var(--text-3)] tracking-widest uppercase mb-2">Key Challenges</p>
              {featured.challenges?.map((c, i) => <DetailPoint key={i} text={c} />)}
            </div>
          </div>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {rest.map((p, i) => (
          <div
            key={p.id}
            className={`reveal reveal-delay-${(i % 3) + 1} bg-[var(--bg-2)] border border-[var(--border)] rounded-2xl p-7 group hover:border-[var(--border-h)] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-200 relative overflow-hidden cursor-pointer`}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <div className="flex justify-between items-start mb-3">
              <div className="w-10 h-10 bg-[var(--accent-dim)] border border-[rgba(0,229,160,0.2)] rounded-lg flex items-center justify-center text-lg">{p.icon}</div>
              <span className="text-[var(--text-3)] text-sm group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">↗</span>
            </div>
            <h3 className="font-head font-bold text-lg text-[var(--text)] mb-1">{p.name}</h3>
            <p className="font-mono text-[10px] text-[var(--text-3)] mb-3">{p.tagline}</p>
            {p.impacts && (
              <div className="flex flex-wrap gap-1.5 mb-3">
                {p.impacts.map((imp) => <ImpactPill key={imp} label={imp} />)}
              </div>
            )}
            <p className="text-sm text-[var(--text-2)] leading-relaxed mb-4">{p.desc}</p>
            {p.challenges && (
              <div className="mb-4">
                <p className="font-mono text-[9px] text-[var(--text-3)] tracking-widest uppercase mb-1.5">Challenges</p>
                {p.challenges.map((c, ci) => <DetailPoint key={ci} text={c} />)}
              </div>
            )}
            <div className="flex flex-wrap gap-1.5">
              {p.stack.map((t) => <Tag key={t} label={t} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
