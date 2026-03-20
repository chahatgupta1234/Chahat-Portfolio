import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        head: ["var(--font-head)", "Syne", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
        body: ["var(--font-body)", "DM Sans", "sans-serif"],
      },
      colors: {
        accent:   "var(--accent)",
        bg:       "var(--bg)",
        surface:  "var(--surface)",
        border:   "var(--border)",
        text:     "var(--text)",
        "text-2": "var(--text-2)",
        "text-3": "var(--text-3)",
        blue:     "var(--blue)",
        yellow:   "var(--yellow)",
      },
      backgroundImage: {
        "radial-accent": "radial-gradient(circle at bottom right, var(--accent-glow), transparent 70%)",
        "radial-glow":   "radial-gradient(circle, rgba(0,229,160,0.06), transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
