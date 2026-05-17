"use client";

import { useEffect, useMemo } from "react";
import type { ComponentType } from "react";
import { Command } from "cmdk";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Mail,
  Search,
  Terminal,
} from "lucide-react";
import { navigation, profile, projectCases, targetRoles } from "@/data/portfolio";

type CommandAction = {
  value: string;
  label: string;
  detail: string;
  icon: ComponentType<{ className?: string }>;
  run: () => void;
};

type CommandPaletteProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        onOpenChange(!open);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onOpenChange, open]);

  const actions = useMemo(() => {
    const scrollTo = (href: string) => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", href);
      }
      onOpenChange(false);
    };

    const openHref = (href: string) => {
      if (href.startsWith("mailto:") || href.startsWith("tel:")) {
        window.location.href = href;
      } else {
        window.open(href, "_blank", "noopener,noreferrer");
      }
      onOpenChange(false);
    };

    const sectionActions: CommandAction[] = navigation.map((item) => ({
      value: `section-${item.label}`,
      label: item.label,
      detail: item.href,
      icon: Terminal,
      run: () => scrollTo(item.href),
    }));

    const projectActions: CommandAction[] = projectCases.slice(0, 6).map((project) => ({
      value: `project-${project.title}`,
      label: project.title,
      detail: project.subtitle,
      icon: BriefcaseBusiness,
      run: () => scrollTo("#case-studies"),
    }));

    const contactActions: CommandAction[] = [
      {
        value: "email",
        label: profile.email,
        detail: "Email",
        icon: Mail,
        run: () => openHref(`mailto:${profile.email}`),
      },
      {
        value: "github",
        label: "GitHub",
        detail: "github.com/chahatgupta1234",
        icon: Code2,
        run: () => openHref(profile.github),
      },
      {
        value: "linkedin",
        label: "LinkedIn",
        detail: "linkedin.com/in/chahat-nit",
        icon: BriefcaseBusiness,
        run: () => openHref(profile.linkedin),
      },
    ];

    return { sectionActions, projectActions, contactActions };
  }, [onOpenChange]);

  return (
    <Command.Dialog open={open} onOpenChange={onOpenChange} label="Portfolio command menu">
      <div className="flex items-center gap-3 border-b border-[var(--border)] px-4">
        <Search className="h-4 w-4 text-[var(--text-3)]" aria-hidden="true" />
        <Command.Input placeholder="Search sections, case studies, links..." />
      </div>
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>

        <Command.Group heading="Navigate">
          {actions.sectionActions.map((action) => (
            <CommandItem key={action.value} action={action} />
          ))}
        </Command.Group>

        <Command.Group heading="Case studies">
          {actions.projectActions.map((action) => (
            <CommandItem key={action.value} action={action} />
          ))}
        </Command.Group>

        <Command.Group heading="Role fit">
          {targetRoles.map((role) => (
            <Command.Item key={role} value={`role-${role}`} onSelect={() => onOpenChange(false)}>
              <ArrowUpRight className="h-4 w-4 text-[var(--text-3)]" aria-hidden="true" />
              <span className="flex flex-col">
                <span className="text-sm">{role}</span>
                <span className="text-xs text-[var(--text-3)]">Target role</span>
              </span>
            </Command.Item>
          ))}
        </Command.Group>

        <Command.Group heading="Connect">
          {actions.contactActions.map((action) => (
            <CommandItem key={action.value} action={action} />
          ))}
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}

function CommandItem({ action }: { action: CommandAction }) {
  const Icon = action.icon;

  return (
    <Command.Item value={action.value} onSelect={action.run}>
      <Icon className="h-4 w-4 text-[var(--text-3)]" aria-hidden="true" />
      <span className="flex min-w-0 flex-col">
        <span className="truncate text-sm">{action.label}</span>
        <span className="truncate text-xs text-[var(--text-3)]">{action.detail}</span>
      </span>
    </Command.Item>
  );
}
