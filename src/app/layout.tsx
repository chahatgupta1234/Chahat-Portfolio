import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = "https://chahat-portfolio-eight.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Chahat Gupta - Backend, Full-stack, and AI Engineer",
    template: "%s | Chahat Gupta",
  },
  description:
    "Chahat Gupta is a Software Engineer at Yellow.ai building backend systems, production AI workflows, internal tools, APIs, auth, reliability pipelines, and full-stack products.",
  keywords: [
    "Chahat Gupta",
    "Backend Engineer",
    "Full-stack Engineer",
    "AI Engineer",
    "Applied AI Engineer",
    "Product Engineer",
    "Yellow.ai",
    "LangGraph",
    "FastMCP",
    "Azure OpenAI",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Next.js",
    "NIT Bhopal",
  ],
  authors: [{ name: "Chahat Gupta", url: siteUrl }],
  creator: "Chahat Gupta",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Chahat Gupta - Backend, Full-stack, and AI Engineer",
    description:
      "Production AI, backend systems, API reliability, and full-stack product work at Yellow.ai.",
    url: siteUrl,
    siteName: "Chahat Gupta Portfolio",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chahat Gupta - Backend, Full-stack, and AI Engineer",
    description:
      "Software Engineer at Yellow.ai building production AI systems, backend platforms, and full-stack products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
