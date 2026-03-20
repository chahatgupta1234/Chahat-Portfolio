import { meta } from "@/data/portfolio";

const cards = [
  {
    icon: "⚙️",
    title: "Systems Design",
    desc: "Distributed queues, API contracts, schema migrations, caching strategies — designed for scale from day one.",
  },
  {
    icon: "🔍",
    title: "Performance Engineering",
    desc: "Query optimization, session-level caching, and architectural decisions that cut latency and DB load in half.",
  },
  {
    icon: "🤖",
    title: "AI Integration",
    desc: "LLM-powered deduplication, GPT-4o pipelines, embedding systems — AI as a backend tool, not a gimmick.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 max-w-6xl mx-auto px-10 py-24"
    >
      <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-3 reveal">
        <span className="w-6 h-px bg-[var(--accent)]" />
        About
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Text */}
        <div className="reveal">
          <h2 className="font-head font-black text-[clamp(2rem,4vw,3rem)] leading-tight text-[var(--text)] mb-6">
            Engineer first,<br />developer second.
          </h2>
          {meta.bio.map((p, i) => (
            <p key={i} className="text-[var(--text-2)] mb-5 text-base leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-3">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className={`reveal reveal-delay-${i + 1} bg-[var(--bg-2)] border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--border-h)] transition-colors duration-200`}
            >
              <div className="text-2xl mb-2">{c.icon}</div>
              <h4 className="font-head font-bold text-[var(--text)] mb-1.5">{c.title}</h4>
              <p className="text-sm text-[var(--text-2)] leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
