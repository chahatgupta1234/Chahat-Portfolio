"use client";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll("section[id]");
      let cur = "";
      sections.forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 120) cur = s.id;
      });
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 h-16 transition-all duration-300 ${
        scrolled ? "bg-[rgba(8,8,9,0.95)] shadow-[0_1px_40px_rgba(0,0,0,0.4)]" : "bg-[rgba(8,8,9,0.85)]"
      } backdrop-blur-xl border-b border-[var(--border)]`}
    >
      <span className="font-mono text-sm text-[var(--accent)] tracking-wider">
        cg.dev<span className="text-[var(--text-3)]">_</span>
      </span>

      <div className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={`text-xs tracking-widest transition-colors duration-200 ${
              active === l.href.slice(1)
                ? "text-[var(--text)]"
                : "text-[var(--text-2)] hover:text-[var(--text)]"
            }`}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          className="font-mono text-xs px-4 py-2 border border-[var(--accent)] text-[var(--accent)] rounded-lg hover:bg-[var(--accent-dim)] transition-all duration-200 tracking-wider"
        >
          hire me
        </a>
      </div>
    </nav>
  );
}
