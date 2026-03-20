"use client";

import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Mindset from "@/components/sections/Mindset";
import Contact from "@/components/sections/Contact";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function Home() {
  useScrollReveal();

  return (
    <main className="relative">
      <div className="grid-bg" />
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Mindset />
      <Contact />
      <footer className="relative z-10 text-center py-6 border-t border-[var(--border)] font-mono text-xs text-[var(--text-3)]">
        <span>© 2025 Chahat Gupta</span>
        <span className="mx-4 text-[var(--border)]">|</span>
        <span>Built with precision. Designed to impress.</span>
      </footer>
    </main>
  );
}
