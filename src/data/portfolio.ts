export const meta = {
  name: "Chahat Gupta",
  role: "Backend Engineer",
  email: "chahatnit@gmail.com",
  phone: "+91-6395770326",
  location: "Meerut, UP · Open to remote & hybrid",
  github: "https://github.com/chahatgupta1234",
  linkedin: "https://www.linkedin.com/in/chahat-nit/",
  tagline: "I build scalable backend systems that handle real traffic.",
  bio: [
    "I'm Chahat — a backend-focused engineer who thinks in systems. Currently an SRE & Backend Engineer at Yellow.ai, where I shipped a centralized Slack automation middleware that replaced 12+ fragile legacy workflows.",
    "My background spans Node.js APIs, PostgreSQL schema design, Redis/BullMQ queuing, and LLM integration. I graduated with an MCA from NIT Bhopal (NIMCET AIR 360) and have been building things that scale since then.",
    "I care deeply about performance, observability, and correctness — not just shipping features. If there's a 50% optimization hiding in the query plan, I will find it.",
  ],
};

export const stats = [
  { num: "12+", label: "Enterprise flows automated" },
  { num: "50%", label: "DB query reduction" },
  { num: "90%", label: "ML model accuracy" },
  { num: "12K+", label: "Assets tracked (live)" },
];

export const experiences = [
  {
    period: "Jan 2025 – Present",
    company: "Yellow.ai",
    badge: { text: "Full-time · SRE", variant: "green" },
    role: "Software Engineer (Backend / SRE)",
    points: [
      "Architected <strong>Edith Middleware</strong> — a centralized Slack automation system that replaced 12+ fragile legacy scripts with a single, observable, scalable API surface.",
      "Designed PostgreSQL schemas for bot lifecycle management, built Slack Bolt SDK integrations, and implemented real-time logging with automated Slack error alerts.",
      "Built a full <strong>Incident Management App</strong> in Slack with threaded logs, editable message states, and workflow hooks.",
      "Shipped an <strong>LLM-powered Feedback System</strong> using GPT-4o for deduplication; reduced redundant DB queries by <strong>~50%</strong> via NextAuth session optimization.",
      "Supporting SRE duties across Builder's, Apps Widget, and CDP teams — debugging production incidents and improving observability.",
    ],
    stack: ["Node.js", "TypeScript", "PostgreSQL", "Prisma", "Redis/BullMQ", "Slack Bolt SDK", "Azure OpenAI", "Next.js"],
  },
  {
    period: "Jun 2024 – Jan 2025",
    company: "Soul AI",
    badge: { text: "Internship", variant: "blue" },
    role: "AI Developer Intern",
    points: [
      "Worked on <strong>LLM fine-tuning pipelines</strong> using advanced training techniques (LoRA, PEFT) on domain-specific datasets.",
      "Built data preprocessing and evaluation tooling in Python, reducing pipeline iteration time significantly.",
      "Developed SQL-driven analytics to measure model performance deltas across training runs.",
    ],
    stack: ["Python", "LLM Fine-tuning", "SQL", "JavaScript"],
  },
  {
    period: "Jun – Jul 2024",
    company: "IBM SkillsBuild",
    badge: { text: "Program · Team Lead", variant: "yellow" },
    role: "AI/ML Intern",
    points: [
      "<strong>Led a 9-member team</strong> to build a Glaucoma Detection Web App with <strong>90% detection accuracy</strong> on 500+ patient records.",
      "Trained and deployed a CNN model on IBM Cloud; connected via public API to a React.js frontend for real-time predictions.",
      "Integrated an IBM Cloud chatbot; separately shipped a kidney stone prediction model using the same cloud pipeline.",
    ],
    stack: ["Python", "CNN", "IBM Cloud", "React.js", "Tailwind CSS"],
  },
];

export const projects = [
  {
    id: "edith",
    featured: true,
    icon: "⚡",
    name: "Edith Middleware",
    tagline: "Enterprise Slack Automation Platform",
    impacts: ["12+ flows replaced", "Production @ Yellow.ai", "Real-time error alerts"],
    problem: "12+ Slack automation scripts scattered across repos with zero observability and high failure rates.",
    solution: [
      "Single centralized middleware with typed API surface, Postgres-backed audit log, and Slack-native error reporting.",
      "Each flow (bot upgrades, TPM limits, pricing, RCA access) is an isolated handler registered to the router — zero side effects between flows.",
    ],
    challenges: [
      "Idempotency across Slack retries — solved with event deduplication at the router layer.",
      "Migrating live flows without downtime — blue/green handler swap with feature flags.",
    ],
    stack: ["Node.js", "Slack Bolt SDK", "PostgreSQL", "REST API"],
    architecture: `SlackEvent ──► BoltApp ──► Router
                              │
          ┌───────────────────┼──────────────────┐
          ▼                   ▼                  ▼
    BotHandler       PricingHandler        RCAHandler
          │                   │                  │
          └───────────────────┼──────────────────┘
                              ▼
               PostgreSQL (audit log) + Slack Alert (on error)`,
  },
  {
    id: "incident",
    icon: "🚨",
    name: "Slack Incident Manager",
    tagline: "Real-time incident tracking in Slack",
    impacts: ["Zero external deps", "Threaded audit log"],
    desc: "Full incident lifecycle inside Slack — raise, update, resolve. Editable message blocks with state machine transitions. Threaded updates preserve full history. No Jira, no PagerDuty needed.",
    challenges: [
      "Slack message mutation race conditions — solved with optimistic locking on message_ts.",
      "Consistent state across concurrent incident updates from multiple responders.",
    ],
    stack: ["Slack Bolt", "Node.js", "PostgreSQL"],
  },
  {
    id: "feedback",
    icon: "📊",
    name: "Work Portal Feedback System",
    tagline: "Reaction engine with 50% query reduction",
    impacts: ["~50% fewer DB hits", "Session-level cache"],
    desc: "Helpful/Not Helpful reaction toggle on ticket comments. Built Prisma model, server-side toggle logic, and React UI with tooltips. Optimized by embedding dbId in NextAuth JWT — cutting per-request DB lookups in half.",
    stack: ["Prisma", "NextAuth", "PostgreSQL", "React"],
  },
  {
    id: "crypto",
    icon: "📈",
    name: "Crypto Trading App",
    tagline: "Real-time tracker for 12,000+ coins",
    impacts: ["12K+ assets live", "Multi-currency"],
    desc: "Live crypto data via CoinGecko API, INR/EUR/USD support, and interactive Chart.js visualizations. Handles high-frequency polling without rate limit errors through exponential backoff and request batching.",
    stack: ["React", "CoinGecko API", "Chart.js"],
  },
  {
    id: "devhub",
    icon: "🛠️",
    name: "DevHub",
    tagline: "Developer community platform",
    desc: "A developer-centric community platform — auth (Clerk), real-time notifications, post/community interactions, and paginated search. Redesigned from a Threads clone into an original product for dev communities.",
    stack: ["Next.js", "MongoDB", "TypeScript", "Tailwind", "Clerk"],
  },
  {
    id: "glaucoma",
    icon: "🔬",
    name: "Glaucoma Detection App",
    tagline: "ML-powered clinical prediction · IBM Cloud",
    impacts: ["90% accuracy", "500 patient dataset", "Team Lead (9 members)"],
    desc: "Led a 9-member team to train and deploy a CNN model for early-stage glaucoma detection. Connected IBM Cloud model API to a React.js frontend for real-time predictions. Integrated a support chatbot.",
    stack: ["Python", "CNN", "IBM Cloud", "React.js"],
  },
];

export const skillCategories = [
  {
    icon: "⚙️",
    title: "Backend",
    skills: [
      { name: "Node.js / Express", level: 90 },
      { name: "REST API Design", level: 88 },
      { name: "TypeScript", level: 82 },
      { name: "Redis / BullMQ", level: 75 },
      { name: "System Design", level: 72 },
    ],
  },
  {
    icon: "🗄️",
    title: "Data & Storage",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "Prisma ORM", level: 85 },
      { name: "MongoDB", level: 78 },
      { name: "SQL / Query Opt.", level: 82 },
      { name: "DB Schema Design", level: 80 },
    ],
  },
  {
    icon: "🚀",
    title: "Infra & Tooling",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Slack APIs / Bolt", level: 85 },
      { name: "Azure OpenAI", level: 75 },
      { name: "Next.js", level: 80 },
      { name: "C++ / DSA", level: 88 },
    ],
  },
];

export const mindset = [
  {
    num: "01",
    title: "Observability before optimization",
    desc: "You can't optimize what you can't measure. Before touching query plans or caching layers, I instrument the system — structured logs, error rates, slow query alerts. Every change is validated with data, not intuition.",
  },
  {
    num: "02",
    title: "Design for the failure case",
    desc: "Happy paths are easy. I think about what happens when the database is slow, the Slack webhook retries three times, or two users hit the same record simultaneously. Idempotency, optimistic locking, and circuit breakers are design decisions, not afterthoughts.",
  },
  {
    num: "03",
    title: "Boring tech > clever tech",
    desc: "PostgreSQL over exotic DBs. REST over GraphQL when it's simpler. The right tool is the one your team understands, can debug at 2AM, and scales without drama.",
  },
  {
    num: "04",
    title: "Interfaces, not implementations",
    desc: "Good backend design means strong contracts between services. I think in API boundaries, data shapes, and event contracts first — then fill in the implementation.",
  },
];
