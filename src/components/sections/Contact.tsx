import { ArrowUpRight, BriefcaseBusiness, Code2, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile, targetRoles } from "@/data/portfolio";

const contactLinks = [
  {
    label: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: profile.phone,
    href: `tel:${profile.phone.replace(/-/g, "")}`,
    icon: Phone,
  },
  {
    label: "GitHub",
    href: profile.github,
    icon: Code2,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: BriefcaseBusiness,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-shell pb-16">
      <div className="surface-card overflow-hidden">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-6 md:p-10">
            <SectionHeading
              eyebrow="Contact"
              title="Useful for teams building backend-heavy products and AI workflows."
              description={profile.availability}
              className="mb-0"
            />

            <Reveal delay={0.08}>
              <div className="mt-8 flex flex-wrap gap-2">
                {targetRoles.map((role) => (
                  <span key={role} className="chip">
                    {role}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-md bg-[var(--text)] px-5 py-3 text-sm font-semibold text-[var(--bg)] transition-transform hover:-translate-y-0.5"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Email Chahat
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-[var(--border-strong)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition-colors hover:border-[var(--text-3)]"
                >
                  LinkedIn
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08} className="border-t border-[var(--border)] bg-[var(--bg-2)] p-6 md:p-10 lg:border-l lg:border-t-0">
            <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex items-center justify-between gap-4 py-4 text-sm text-[var(--text-2)] transition-colors hover:text-[var(--text)]"
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <Icon className="h-4 w-4 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                      <span className="truncate">{link.label}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--text-3)]" aria-hidden="true" />
                  </a>
                );
              })}
            </div>

            <div className="mt-6">
              <p className="font-mono text-xs uppercase text-[var(--text-3)]">Location</p>
              <p className="mt-3 flex items-center gap-2 text-sm text-[var(--text-2)]">
                <MapPin className="h-4 w-4 text-[var(--accent-2)]" aria-hidden="true" />
                {profile.location} · {profile.mobility}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
