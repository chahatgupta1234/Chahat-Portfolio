"use client";
import { useEffect, useRef } from "react";
import { stats } from "@/data/portfolio";

const roles = [
  "Backend Engineer · Systems Thinker · MCA @ NIT Bhopal",
  "API Design · PostgreSQL · Node.js · Distributed Systems",
  "SRE · Performance Engineering · LLM Integration",
];

export default function Hero() {
  const roleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let ri = 0, ci = roles[0].length, deleting = true;
    const el = roleRef.current;
    if (!el) return;
    el.textContent = roles[0];

    const tick = () => {
      const target = roles[ri];
      if (!deleting) {
        ci++;
        el.textContent = target.slice(0, ci);
        if (ci === target.length) { deleting = true; setTimeout(tick, 2400); return; }
      } else {
        ci--;
        el.textContent = target.slice(0, ci);
        if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
      }
      setTimeout(tick, deleting ? 28 : 48);
    };

    const t = setTimeout(tick, 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-10 pt-24 pb-16"
    >
      {/* Available badge */}
      <div className="inline-flex items-center gap-2 font-mono text-xs text-[var(--accent)] bg-[var(--accent-dim)] border border-[rgba(0,229,160,0.2)] rounded-full px-4 py-1.5 mb-8 w-fit">
        <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full animate-pulse-dot" />
        Available for new opportunities
      </div>

      {/* Heading */}
      <h1 className="font-head font-black leading-none tracking-tight text-[var(--text)] mb-3 text-[clamp(3rem,7vw,6.5rem)]">
        Chahat<br />
        <span className="text-[var(--accent)]">Gupta.</span>
      </h1>

      {/* Typewriter role */}
      <p className="font-mono text-[var(--text-2)] mb-7 text-[clamp(0.9rem,2vw,1.1rem)] tracking-wide">
        <span ref={roleRef} />
        <span className="hero-cursor" />
      </p>

      {/* Description */}
      <p className="text-[var(--text-2)] max-w-xl mb-12 text-lg leading-relaxed">
        I build <strong className="text-[var(--text)] font-medium">scalable backend systems</strong> that handle
        real traffic — from distributed Slack automation handling{" "}
        <strong className="text-[var(--text)] font-medium">12+ enterprise workflows</strong> to APIs optimized
        for <strong className="text-[var(--text)] font-medium">50% fewer DB hits</strong>. I care about
        architecture, not just code that works.
      </p>

      {/* CTAs */}
      <div className="flex gap-4 flex-wrap mb-20">
        <a
          href="#projects"
          className="font-mono text-sm px-7 py-3 bg-[var(--accent)] text-black font-medium rounded-lg hover:opacity-85 hover:-translate-y-0.5 transition-all duration-150 tracking-wider"
        >
          View my work
        </a>
        <a
          href="mailto:chahatnit@gmail.com"
          className="font-mono text-sm px-7 py-3 border border-[var(--border-h)] text-[var(--text-2)] rounded-lg hover:border-[var(--text-3)] hover:text-[var(--text)] transition-all duration-200 tracking-wider"
        >
          Get in touch
        </a>
      </div>

      {/* Stats */}
      <div className="flex gap-12 flex-wrap pt-10 border-t border-[var(--border)]">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col gap-1">
            <span className="font-head font-black text-4xl text-[var(--text)]">{s.num}</span>
            <span className="font-mono text-[10px] text-[var(--text-3)] tracking-widest uppercase">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
