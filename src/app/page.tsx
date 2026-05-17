import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Mindset from "@/components/sections/Mindset";
import Nav from "@/components/sections/Nav";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import { profile } from "@/data/portfolio";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    email: profile.email,
    telephone: profile.phone,
    url: profile.portfolio,
    sameAs: [profile.github, profile.linkedin],
    jobTitle: "Software Engineer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Agra",
      addressRegion: "UP",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "NIT Bhopal",
    },
    knowsAbout: [
      "Backend engineering",
      "Full-stack engineering",
      "Applied AI engineering",
      "LangGraph",
      "FastMCP",
      "Azure OpenAI",
      "PostgreSQL",
      "Node.js",
      "TypeScript",
      "Next.js",
    ],
  };

  return (
    <div className="page-shell">
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Mindset />
        <Contact />
      </main>
      <footer className="mx-auto flex w-[min(1180px,calc(100%_-_28px))] flex-col gap-2 border-t border-[var(--border)] py-8 text-sm text-[var(--text-3)] md:flex-row md:items-center md:justify-between">
        <span>© 2026 {profile.name}</span>
        <span>{profile.role} · Backend, full-stack, and applied AI systems</span>
      </footer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
