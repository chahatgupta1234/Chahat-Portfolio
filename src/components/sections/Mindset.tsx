import { mindset } from "@/data/portfolio";

export default function Mindset() {
  return (
    <section id="mindset" className="relative z-10 max-w-6xl mx-auto px-10 py-24">
      <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-3 reveal">
        <span className="w-6 h-px bg-[var(--accent)]" />
        Engineering Mindset
      </div>
      <h2 className="font-head font-black text-[clamp(2rem,4vw,3rem)] text-[var(--text)] mb-3 reveal">
        How I think about<br />systems.
      </h2>
      <p className="text-[var(--text-2)] text-base mb-14 reveal max-w-lg">
        The mental models that guide my decisions when building backend systems.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        {mindset.map((m, i) => (
          <div
            key={m.num}
            className={`reveal reveal-delay-${i % 2 === 0 ? 1 : 2} bg-[var(--bg-2)] border border-[var(--border)] rounded-2xl p-8 hover:border-[var(--border-h)] transition-colors duration-200 group relative overflow-hidden`}
          >
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-radial-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="font-mono text-5xl font-light text-[var(--border-h)] leading-none mb-5">{m.num}</div>
            <h3 className="font-head font-bold text-lg text-[var(--text)] mb-2">{m.title}</h3>
            <p className="text-sm text-[var(--text-2)] leading-relaxed">{m.desc}</p>
          </div>
        ))}
      </div>

      {/* Terminal */}
      <div className="reveal bg-[var(--bg-2)] border border-[var(--border)] rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 bg-[var(--surface)] border-b border-[var(--border)]">
          <span className="w-2.5 h-2.5 bg-[#ff5c5c] rounded-full" />
          <span className="w-2.5 h-2.5 bg-[#f0c040] rounded-full" />
          <span className="w-2.5 h-2.5 bg-[var(--accent)] rounded-full" />
          <span className="font-mono text-[10px] text-[var(--text-3)] ml-auto tracking-wider">chahat@dev ~ debugging-philosophy</span>
        </div>
        <div className="p-6 font-mono text-sm leading-8">
          <div className="flex gap-3"><span className="text-[var(--accent)]">$</span><span className="text-[var(--text)]"> cat engineering_principles.json</span></div>
          <div className="text-[var(--text-2)] pl-6">{"{"}</div>
          <div className="text-[var(--text-2)] pl-6">&nbsp;&nbsp;<span className="text-[var(--blue)]">"first_principle"</span>: <span className="text-[var(--yellow)]">"read the error, all of it"</span>,</div>
          <div className="text-[var(--text-2)] pl-6">&nbsp;&nbsp;<span className="text-[var(--blue)]">"database"</span>: <span className="text-[var(--yellow)]">"explain analyze before every optimization"</span>,</div>
          <div className="text-[var(--text-2)] pl-6">&nbsp;&nbsp;<span className="text-[var(--blue)]">"api_design"</span>: <span className="text-[var(--yellow)]">"conservative in what you send, liberal in what you accept"</span>,</div>
          <div className="text-[var(--text-2)] pl-6">&nbsp;&nbsp;<span className="text-[var(--blue)]">"caching"</span>: <span className="text-[var(--yellow)]">"invalidation is a feature, not a footnote"</span></div>
          <div className="text-[var(--text-2)] pl-6">{"}"}</div>
          <div className="flex gap-3 mt-3">
            <span className="text-[var(--accent)]">$</span>
            <span className="text-[var(--text-3)]"># currently leveling up: distributed systems · AWS · advanced system design</span>
          </div>
        </div>
      </div>
    </section>
  );
}
