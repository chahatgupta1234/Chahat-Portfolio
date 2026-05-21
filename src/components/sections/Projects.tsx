"use client";

import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Bot,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  Filter,
  GitBranch,
  LineChart,
  MessageSquareText,
  Network,
  PanelsTopLeft,
  ServerCog,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { projectCases, type ProjectCase } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const categories = ["All", ...Array.from(new Set(projectCases.map((project) => project.category)))];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleProjects = useMemo(() => {
    if (activeCategory === "All") return projectCases;
    return projectCases.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const featuredProjects = visibleProjects.filter((project) => project.featured);
  const standardProjects = visibleProjects.filter((project) => !project.featured);
  const primaryProjects = featuredProjects.length ? featuredProjects : visibleProjects.slice(0, 2);
  const gridProjects = featuredProjects.length ? standardProjects : visibleProjects.slice(2);

  return (
    <section id="case-studies" className="section-shell">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Case studies"
          title="Systems that show ownership across product, backend, and AI."
          description="Production work and independent products framed around the problem, architecture, technical decisions, stack, and impact."
          className="mb-0"
        />

        <Reveal className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-2 lg:mx-0 lg:flex-wrap lg:overflow-visible lg:px-0 lg:pb-0">
          <span className="chip shrink-0">
            <Filter className="h-3.5 w-3.5" aria-hidden="true" />
            Filter
          </span>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={cn(
                "shrink-0 rounded-full border px-3 py-1.5 font-mono text-xs transition-colors",
                activeCategory === category
                  ? "border-[var(--text)] bg-[var(--text)] text-[var(--bg)]"
                  : "border-[var(--border)] bg-[var(--surface)] text-[var(--text-2)] hover:border-[var(--border-strong)] hover:text-[var(--text)]"
              )}
            >
              {category}
            </button>
          ))}
        </Reveal>
      </div>

      <div className="mt-10 grid gap-5">
        {primaryProjects.map((project, index) => (
          <FeaturedCase key={project.id} project={project} index={index} />
        ))}
      </div>

      {gridProjects.length ? (
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {gridProjects.map((project, index) => (
            <CompactCase key={project.id} project={project} index={index} />
          ))}
        </div>
      ) : null}
    </section>
  );
}

function FeaturedCase({ project, index }: { project: ProjectCase; index: number }) {
  return (
    <Reveal delay={index * 0.05}>
      <article className="surface-card overflow-hidden" data-accent={project.accent}>
        <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="p-4 sm:p-5 md:p-8">
            <CaseHeader project={project} />
            <div className="mt-7 grid gap-5 md:mt-8 md:grid-cols-2">
              <CaseBlock label="Problem" value={project.problem} />
              <CaseBlock label="Solution" value={project.solution} />
            </div>

            <div className="mt-7">
              <p className="mb-3 font-mono text-xs uppercase text-[var(--text-3)]">Impact</p>
              <div className="grid gap-2 sm:grid-cols-2">
                {project.impact.map((impact) => (
                  <div key={impact} className="flex items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--bg-2)] px-3 py-2 text-sm text-[var(--text-2)]">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--local-accent)]" aria-hidden="true" />
                    {impact}
                  </div>
                ))}
              </div>
            </div>

            <CaseLinks project={project} />
          </div>

          <div className="border-t border-[var(--border)] bg-[var(--bg-2)] p-4 sm:p-5 lg:border-l lg:border-t-0">
            <SystemVisual project={project} />
            <div className="mt-5">
              <p className="mb-3 font-mono text-xs uppercase text-[var(--text-3)]">Architecture</p>
              <div className="grid gap-2">
                {project.architecture.map((step, stepIndex) => (
                  <div key={step} className="flex items-start gap-3 rounded-md border border-[var(--border)] bg-[var(--surface)] p-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-[var(--surface-2)] font-mono text-[10px] text-[var(--local-accent)]">
                      {stepIndex + 1}
                    </span>
                    <p className="text-sm leading-6 text-[var(--text-2)]">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function CompactCase({ project, index }: { project: ProjectCase; index: number }) {
  return (
    <Reveal delay={(index % 2) * 0.05}>
      <article className="surface-card flex h-full flex-col p-4 sm:p-5 md:p-6" data-accent={project.accent}>
        <CaseHeader project={project} compact />
        <div className="mt-6 grid gap-5">
          <CaseBlock label="Problem" value={project.problem} />
          <CaseBlock label="Solution" value={project.solution} />
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.impact.slice(0, 4).map((impact) => (
            <span key={impact} className="chip border-[color-mix(in_srgb,var(--local-accent)_36%,var(--border))]">
              {impact}
            </span>
          ))}
        </div>
        <div className="mt-6">
          <SystemVisual project={project} compact />
        </div>
        <CaseLinks project={project} />
      </article>
    </Reveal>
  );
}

function CaseHeader({ project, compact = false }: { project: ProjectCase; compact?: boolean }) {
  return (
    <header>
      <div className="flex flex-wrap items-center gap-2">
        <span className="chip border-[color-mix(in_srgb,var(--local-accent)_42%,var(--border))] text-[var(--local-accent)]">
          <span className="accent-dot" />
          {project.category}
        </span>
        <span className="chip">{project.year}</span>
        <span className="chip">{project.role}</span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4 sm:gap-5">
        <div>
          <h3 className={cn("font-head font-[760] leading-none text-[var(--text)]", compact ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl md:text-5xl")}>
            {project.title}
          </h3>
          <p className="mt-3 max-w-2xl text-pretty text-base text-[var(--text-2)]">{project.subtitle}</p>
        </div>
        <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-[var(--local-accent)]" aria-hidden="true" />
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
      </div>
    </header>
  );
}

function CaseBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mb-2 font-mono text-xs uppercase text-[var(--text-3)]">{label}</p>
      <p className="text-sm leading-6 text-[var(--text-2)]">{value}</p>
    </div>
  );
}

function CaseLinks({ project }: { project: ProjectCase }) {
  if (!project.links?.length) return null;

  return (
    <div className="mt-7 grid gap-2 sm:flex sm:flex-wrap">
      {project.links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2 text-sm text-[var(--text-2)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text)] sm:justify-start"
        >
          {link.label.toLowerCase() === "github" ? <Code2 className="h-4 w-4" aria-hidden="true" /> : <ExternalLink className="h-4 w-4" aria-hidden="true" />}
          {link.label}
        </a>
      ))}
    </div>
  );
}

function SystemVisual({ project, compact = false }: { project: ProjectCase; compact?: boolean }) {
  const icons = {
    ticketops: [Bot, Database, Workflow, ServerCog],
    cards: [MessageSquareText, Network, ShieldCheck, PanelsTopLeft],
    portal: [PanelsTopLeft, ShieldCheck, Database, ServerCog],
    edith: [MessageSquareText, Workflow, GitBranch, Database],
    devhub: [PanelsTopLeft, Network, Database, ShieldCheck],
    xcrypto: [LineChart, Network, Database, PanelsTopLeft],
    glaucoma: [Bot, ServerCog, Database, PanelsTopLeft],
    hackathon: [MessageSquareText, Network, ShieldCheck, PanelsTopLeft],
  }[project.visual];

  const labels = {
    ticketops: ["Ticket", "Agent graph", "MCP tools", "RCA"],
    cards: ["Query", "Router", "CardsV2", "Reply"],
    portal: ["Portal", "JWT/API", "Prisma", "Trace"],
    edith: ["Slash command", "Router", "Workflow", "Alert"],
    devhub: ["SSR UI", "Auth", "MongoDB", "Notify"],
    xcrypto: ["Market feed", "Debounce", "Chart", "Rank"],
    glaucoma: ["Image", "CNN", "Cloud API", "Triage"],
    hackathon: ["Complaint", "Chatbot", "REST API", "Operator"],
  }[project.visual];

  return (
    <div className={cn("rounded-md border border-[var(--border)] bg-[var(--surface)] p-3 sm:p-4", compact && "p-3")}>
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[var(--local-accent)]" />
          <span className="truncate font-mono text-xs text-[var(--text-3)]">{project.id}.system</span>
        </div>
        <span className="shrink-0 font-mono text-[10px] text-[var(--text-3)]">prod-minded</span>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {labels.map((label, index) => {
          const Icon = icons[index];
          return (
            <div key={label} className="relative">
              <div className="grid min-h-[82px] place-items-center rounded-md border border-[var(--border)] bg-[var(--bg-2)] p-3 text-center sm:min-h-[88px]">
                <Icon className="mb-3 h-5 w-5 text-[var(--local-accent)]" aria-hidden="true" />
                <span className="text-[11px] font-medium leading-4 text-[var(--text-2)]">{label}</span>
              </div>
              {index < labels.length - 1 ? (
                <span className="absolute left-[calc(100%-2px)] top-1/2 z-10 hidden h-px w-4 bg-[var(--local-accent)] sm:block" />
              ) : null}
            </div>
          );
        })}
      </div>
      <div className="mt-4 rounded-md border border-[var(--border)] bg-[var(--bg-2)] p-3">
        <div className="mb-2 flex items-center justify-between font-mono text-[10px] text-[var(--text-3)]">
          <span>trace</span>
          <span>{project.stack[0]}</span>
        </div>
        <div className="space-y-2">
          {project.impact.slice(0, compact ? 2 : 3).map((line) => (
            <div key={line} className="flex items-center gap-2 text-xs text-[var(--text-2)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--local-accent)]" />
              <span className="truncate">{line}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
