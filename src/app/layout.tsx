import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-head",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chahat Gupta — Backend Engineer",
  description:
    "Backend Engineer specializing in scalable systems, API design, and distributed architecture. MCA from NIT Bhopal. Open to Backend / SRE roles.",
  keywords: ["Backend Engineer", "Node.js", "PostgreSQL", "System Design", "NIT Bhopal", "Chahat Gupta"],
  authors: [{ name: "Chahat Gupta", url: "https://chahatgupta.dev" }],
  openGraph: {
    title: "Chahat Gupta — Backend Engineer",
    description: "Building scalable systems. 12+ enterprise flows. 50% DB query reduction.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chahat Gupta — Backend Engineer",
    description: "Building scalable systems. MCA @ NIT Bhopal.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${syne.variable} ${jetbrainsMono.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
