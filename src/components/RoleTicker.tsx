"use client";

import { useEffect, useState } from "react";
import { roleTicker } from "@/data/portfolio";

export default function RoleTicker() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(roleTicker[0].length);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roleTicker[roleIndex];
    const timeout = window.setTimeout(
      () => {
        if (!deleting && charIndex < current.length) {
          setCharIndex((value) => value + 1);
          return;
        }

        if (!deleting && charIndex === current.length) {
          setDeleting(true);
          return;
        }

        if (deleting && charIndex > 0) {
          setCharIndex((value) => value - 1);
          return;
        }

        setDeleting(false);
        setRoleIndex((value) => (value + 1) % roleTicker.length);
      },
      deleting ? 18 : charIndex === current.length ? 1700 : 34
    );

    return () => window.clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <p className="mt-4 inline-flex max-w-full items-center rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-3 py-1.5 font-mono text-xs text-[var(--text-3)]">
      <span className="mr-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
      <span className="min-h-5 truncate">{roleTicker[roleIndex].slice(0, charIndex)}</span>
      <span className="ml-1 inline-block h-4 w-px translate-y-0.5 bg-[var(--accent)]" aria-hidden="true" />
    </p>
  );
}
