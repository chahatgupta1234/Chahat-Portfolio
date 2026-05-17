"use client";

import { useEffect, useState } from "react";
import { Command, Menu, Moon, Sun, X } from "lucide-react";
import CommandPalette from "@/components/CommandPalette";
import { navigation, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

function getInitialTheme() {
  if (typeof window === "undefined") return false;

  const saved = window.localStorage.getItem("theme");
  if (saved) return saved === "light";

  return window.matchMedia("(prefers-color-scheme: light)").matches;
}

export default function Nav() {
  const [active, setActive] = useState("signal");
  const [menuOpen, setMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [isLight, setIsLight] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("light", isLight);
  }, [isLight]);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0.08, 0.2, 0.45] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = !isLight;
    setIsLight(next);
    document.documentElement.classList.toggle("light", next);
    window.localStorage.setItem("theme", next ? "light" : "dark");
  };

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--bg)_82%,transparent)] backdrop-blur-xl">
        <nav className="mx-auto flex h-16 w-[min(1180px,calc(100%_-_28px))] items-center justify-between gap-4">
          <a href="#hero" className="group flex items-center gap-3" aria-label="Chahat Gupta home">
            <span className="grid h-8 w-8 place-items-center rounded-md border border-[var(--border-strong)] bg-[var(--surface)] font-head text-sm font-black text-[var(--text)]">
              CG
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block text-sm font-semibold text-[var(--text)]">{profile.name}</span>
              <span className="block font-mono text-[10px] text-[var(--text-3)]">{profile.role}</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const selected = active === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm text-[var(--text-2)] transition-colors hover:bg-[var(--surface-2)] hover:text-[var(--text)]",
                    selected && "bg-[var(--surface-2)] text-[var(--text)]"
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPaletteOpen(true)}
              className="hidden h-9 items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 text-sm text-[var(--text-2)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text)] md:flex"
              aria-label="Open command palette"
            >
              <Command className="h-4 w-4" aria-hidden="true" />
              <span>Command</span>
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              className="grid h-9 w-9 place-items-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--text-2)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text)]"
              aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
            >
              {isLight ? <Moon className="h-4 w-4" aria-hidden="true" /> : <Sun className="h-4 w-4" aria-hidden="true" />}
            </button>
            <a
              href={`mailto:${profile.email}`}
              className="hidden rounded-md bg-[var(--text)] px-4 py-2 text-sm font-semibold text-[var(--bg)] transition-transform hover:-translate-y-0.5 md:inline-flex"
            >
              Contact
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              className="grid h-9 w-9 place-items-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--text-2)] lg:hidden"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
            </button>
          </div>
        </nav>

        <div
          className={cn(
            "grid border-t border-[var(--border)] transition-[grid-template-rows] duration-200 lg:hidden",
            menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          )}
        >
          <div className="overflow-hidden">
            <div className="mx-auto flex w-[min(1180px,calc(100%_-_28px))] flex-col gap-1 py-3">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-3 py-3 text-sm text-[var(--text-2)] hover:bg-[var(--surface-2)] hover:text-[var(--text)]"
                >
                  {item.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  setPaletteOpen(true);
                }}
                className="flex items-center gap-2 rounded-md px-3 py-3 text-left text-sm text-[var(--text-2)] hover:bg-[var(--surface-2)] hover:text-[var(--text)]"
              >
                <Command className="h-4 w-4" aria-hidden="true" />
                Command
              </button>
            </div>
          </div>
        </div>
      </header>
      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
    </>
  );
}
