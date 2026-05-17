export type Accent = "emerald" | "cyan" | "amber" | "rose" | "violet" | "slate";

export type LinkItem = {
  label: string;
  href: string;
};

export type Metric = {
  value: string;
  label: string;
  context: string;
};

export type WorkHighlight = {
  title: string;
  problem: string;
  shipped: string[];
  impact: string[];
  stack: string[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  context: string;
  badge: string;
  summary: string;
  highlights: WorkHighlight[];
};

export type ProjectCase = {
  id: string;
  title: string;
  subtitle: string;
  category: "Production AI" | "Backend Systems" | "Full-stack Product" | "ML Product" | "Frontend Data";
  featured?: boolean;
  year: string;
  role: string;
  problem: string;
  solution: string;
  impact: string[];
  architecture: string[];
  stack: string[];
  links?: LinkItem[];
  visual: "ticketops" | "cards" | "portal" | "edith" | "devhub" | "xcrypto" | "glaucoma" | "hackathon";
  accent: Accent;
};

export const profile = {
  name: "Chahat Gupta",
  email: "chahatnit@gmail.com",
  phone: "+91-6395770326",
  location: "Agra, UP",
  mobility: "Relocating to Bangalore · Remote-ready",
  github: "https://github.com/chahatgupta1234",
  linkedin: "https://www.linkedin.com/in/chahat-nit",
  portfolio: "https://chahat-portfolio-eight.vercel.app",
  role: "Software Engineer",
  headline: "Backend, full-stack, and AI engineer building production systems at Yellow.ai.",
  subhead:
    "I build the machinery behind AI products: LangGraph agents, FastMCP tool servers, Slack automation platforms, production APIs, auth boundaries, PostgreSQL schemas, reliability pipelines, and user-facing Next.js systems.",
  availability:
    "Targeting SDE-1, Backend, Full-stack, Product Engineer, and Applied AI roles at product-first startups.",
  education: "MCA, NIT Bhopal · CGPA 8.9 · NIMCET 2022 AIR 360",
};

export const navigation = [
  { href: "#skills", label: "Skills" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#signal", label: "Signal" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const heroMetrics: Metric[] = [
  {
    value: "10,000+",
    label: "enterprise users restored",
    context: "Royal Enfield Google Chat incident resolved within one business day",
  },
  {
    value: "12+",
    label: "production workflows",
    context: "Edith Slack automation platform adopted in production",
  },
  {
    value: "500+",
    label: "internal users",
    context: "Work Portal modules used across Yellow.ai support workflows",
  },
  {
    value: "~50%",
    label: "DB lookups reduced",
    context: "NextAuth JWT optimization across 12+ authenticated API routes",
  },
];

export const proofPoints = [
  {
    label: "Production AI systems",
    proof:
      "LangGraph multi-agent TicketOps pipeline, Azure OpenAI, RAG-powered KB retrieval, RCA generation, and FastMCP tools.",
  },
  {
    label: "Backend ownership",
    proof:
      "10+ RESTful APIs, x-api-key auth, RBAC, per-route rate limiting, Prisma migrations, PostgreSQL indexes, S3 presigned URL v2 API.",
  },
  {
    label: "Reliability mindset",
    proof:
      "Pino + AsyncLocalStorage logger fixed Kubernetes log-loss, distributed tracing across async request chains, retry logic with Slack alerts.",
  },
  {
    label: "Product execution",
    proof:
      "DevHub community platform, Work Portal modules, Slack Incident Manager, Google Chat CardsV2 production recovery, real live-user iteration.",
  },
];

export const experiences: Experience[] = [
  {
    company: "Yellow.ai",
    role: "Software Engineer",
    period: "Sep 2025 - Present",
    location: "Remote",
    context: "Series E conversational AI SaaS · Promoted from Intern",
    badge: "Current",
    summary:
      "Owning backend, AI, infrastructure, and product surfaces across support automation, internal tooling, Google Chat, Work Portal, APIs, and reliability.",
    highlights: [
      {
        title: "TicketOps AI Ticket Automation",
        problem:
          "Incident investigation required manual ticket classification, log lookup, KB search, and RCA drafting across multiple systems.",
        shipped: [
          "Engineered a LangGraph multi-agent pipeline with Azure OpenAI for classification, RAG-powered KB retrieval, and automated RCA generation.",
          "Designed a FastMCP tool server exposing 10+ capabilities including OpenSearch log search, voice RAG analysis, and bot configuration APIs.",
          "Integrated PostgreSQL, OpenSearch, Kubernetes, and AWS SQS into the investigation path.",
        ],
        impact: ["Moved incident triage toward zero manual investigation for repeatable support workflows."],
        stack: ["LangGraph", "Azure OpenAI", "FastMCP", "PostgreSQL", "OpenSearch", "Kubernetes", "AWS SQS"],
      },
      {
        title: "Google Chat CardsV2 Production Recovery",
        problem:
          "A Royal Enfield production integration broke after Google Chat Cards v1 needed migration to CardsV2.",
        shipped: [
          "Migrated rendering to CardsV2 and built a multi-service query router across bot and KB services.",
          "Converted KB markdown URLs into schema-validated interactive hyperlinks to prevent rendering failures.",
        ],
        impact: ["Restored service for 10,000+ end users within one business day."],
        stack: ["Google Chat API", "Node.js", "Bot Service", "KB Service", "Schema Validation"],
      },
      {
        title: "Work Portal Product + Reliability",
        problem:
          "Internal support tooling needed faster workflows, stronger feedback loops, reliable file access, and better production observability.",
        shipped: [
          "Developed Work Portal modules used by 500+ internal users, including CR auto-population for 200+ daily users.",
          "Extended ticket stage schema with subType for FR-specific progressions separate from Bug pipelines.",
          "Shipped thumbs-up/down AI feedback with structured dislike reasons as the primary support-team quality signal.",
          "Built a 3-step S3 presigned URL pipeline with a versioned v2 API for third-party path-based access.",
          "Implemented YmLogger with Pino and AsyncLocalStorage to preserve logs across Kubernetes pod restarts.",
          "Added 3-attempt retry logic, Slack alerts on repeated failures, route-level rate limiting, Prisma migrations, and indexes on high-frequency query columns.",
        ],
        impact: [
          "Improved internal support throughput, reduced production blind spots, and strengthened API behavior under failure.",
        ],
        stack: ["Next.js", "PostgreSQL", "Prisma", "NextAuth", "AWS S3", "Pino", "AsyncLocalStorage", "Kubernetes"],
      },
      {
        title: "APIs and Auth",
        problem:
          "Authenticated API routes were paying repeated DB lookup costs while third-party consumers needed cleaner API boundaries.",
        shipped: [
          "Reduced authenticated DB lookups by ~50% by embedding dbId into NextAuth JWT across 12+ authenticated API routes.",
          "Designed 10+ RESTful APIs with x-api-key auth, role-based authorization, per-route rate limiting, and markdown-to-HTML conversion.",
        ],
        impact: ["Lowered auth-path database pressure and improved API contract clarity for consumers."],
        stack: ["Node.js", "TypeScript", "Express.js", "NextAuth", "JWT", "Zod"],
      },
      {
        title: "Copilot PDF Analysis",
        problem:
          "Internal PDF analysis needed a path for documents where plain text extraction fails, especially image-heavy and chart-rich files.",
        shipped: ["Contributed to a PDF content extraction pipeline with LLM-based fallback for difficult documents."],
        impact: ["Improved extraction coverage for Yellow.ai internal document analysis workflows."],
        stack: ["pdfjs-dist", "LLM APIs", "Content Extraction"],
      },
    ],
  },
  {
    company: "Yellow.ai",
    role: "Software Engineer Intern",
    period: "Jan 2025 - Aug 2025",
    location: "Remote",
    context: "Conversational AI SaaS · converted to full-time",
    badge: "Internship",
    summary:
      "Built Edith from scratch, a modular Slack automation platform that replaced brittle legacy workflows with production-ready middleware.",
    highlights: [
      {
        title: "Edith Slack Automation Platform",
        problem:
          "Legacy Yellow Bot flows were hard to extend, difficult to observe, and mixed unrelated workflow state.",
        shipped: [
          "Built Edith from scratch with 12+ production workflows for bot tier upgrades, plan provisioning, YM log retrieval, voice-routing number migration, and on-call alerting.",
          "Designed middleware architecture with independent flow state, per-flow error handling, 3-retry logic, and Slack alerts on failure.",
        ],
        impact: ["Scaled to 500+ requests/month after full production adoption."],
        stack: ["Slack Bolt SDK", "Node.js", "PostgreSQL", "TypeScript"],
      },
      {
        title: "GPT-4o Deduplication",
        problem:
          "Feedback from Slack and Google Sheets contained repeated entries that made review and prioritization noisy.",
        shipped: [
          "Prototyped a GPT-4o semantic deduplication pipeline across Slack and Google Sheets.",
          "Graduated the prototype into a core Edith production feature.",
        ],
        impact: ["Reduced duplicate feedback entries by ~40%."],
        stack: ["GPT-4o", "Azure OpenAI", "Google Sheets API", "Slack"],
      },
      {
        title: "Slack Incident Manager",
        problem:
          "Incident updates needed structured capture, validation, Slack-native collaboration, and real-time database sync.",
        shipped: [
          "Built slash commands, validated multi-step modals, formatted Slack reports, interactive Update buttons, and PostgreSQL sync.",
          "Implemented RCA validation combining predefined rule checks with LLM-powered compliance verification for internal and external reporting.",
        ],
        impact: ["Moved incident reporting into a structured Slack-native workflow."],
        stack: ["Slack Bolt SDK", "Node.js", "PostgreSQL", "LLM API"],
      },
      {
        title: "API Validation",
        problem: "Internal fields and weak API boundaries risked leaking unnecessary data to third-party consumers.",
        shipped: [
          "Implemented API key validation for Edith and Pulse endpoints.",
          "Enforced cleaner response contracts by stripping internal fields from third-party responses.",
        ],
        impact: ["Improved API security boundaries and consumer-facing response hygiene."],
        stack: ["Node.js", "TypeScript", "API Keys", "REST APIs"],
      },
    ],
  },
  {
    company: "IBM SkillsBuild",
    role: "AI/ML Intern",
    period: "Jun 2024 - Jul 2024",
    location: "Remote",
    context: "Medical AI system · team lead",
    badge: "AI/ML",
    summary:
      "Led a 9-member team building a glaucoma detection system with a deployed medical imaging model and real-time inference UI.",
    highlights: [
      {
        title: "Glaucoma Detection System",
        problem:
          "The team needed an end-to-end medical AI prototype that could classify retinal images and return structured predictions through a web UI.",
        shipped: [
          "Trained a CNN achieving 90% accuracy on a 500-patient medical imaging dataset.",
          "Deployed the model on IBM Cloud with a real-time inference API.",
          "Built a React frontend with live image upload, structured response rendering, and IBM AI chatbot integration for automated patient triage.",
        ],
        impact: ["Led 9 contributors across model training, cloud deployment, frontend, and chatbot integration."],
        stack: ["Python", "TensorFlow", "Keras", "IBM Cloud", "React"],
      },
    ],
  },
];

export const projectCases: ProjectCase[] = [
  {
    id: "ticketops",
    title: "TicketOps",
    subtitle: "AI ticket automation and incident investigation pipeline",
    category: "Production AI",
    featured: true,
    year: "2025-2026",
    role: "Backend + Applied AI Engineer",
    problem:
      "Support incidents required engineers to manually classify tickets, retrieve KB context, search logs, inspect voice data, and draft RCA summaries.",
    solution:
      "Built a LangGraph multi-agent pipeline backed by Azure OpenAI and a FastMCP tool server so agents could call OpenSearch, voice RAG, bot configuration, PostgreSQL, Kubernetes, and SQS-backed capabilities through clean tool contracts.",
    impact: ["10+ FastMCP capabilities", "RAG-powered KB retrieval", "Automated RCA generation", "Zero-manual-triage direction"],
    architecture: [
      "Ticket enters classifier agent",
      "Retriever agent pulls KB and log context",
      "Tool server exposes OpenSearch, voice RAG, and bot config APIs",
      "RCA generator produces structured incident output",
    ],
    stack: ["LangGraph", "Azure OpenAI", "FastMCP", "PostgreSQL", "OpenSearch", "Kubernetes", "AWS SQS"],
    visual: "ticketops",
    accent: "emerald",
  },
  {
    id: "gchat-cardv2",
    title: "Google Chat CardsV2 Recovery",
    subtitle: "Production incident recovery for Royal Enfield",
    category: "Backend Systems",
    featured: true,
    year: "2025-2026",
    role: "Backend Integration Engineer",
    problem:
      "A live Google Chat integration needed migration from Cards v1 to CardsV2 without breaking KB rendering or bot routing.",
    solution:
      "Built a multi-service intent router that directed queries to bot or KB services and converted KB markdown URLs into CardsV2 hyperlinks with schema validation.",
    impact: ["10,000+ end users restored", "One business day recovery", "Schema-validated rendering", "Bot/KB query routing"],
    architecture: [
      "Classify query intent",
      "Route to bot or KB service",
      "Normalize markdown URLs",
      "Validate CardsV2 schema before response",
    ],
    stack: ["Google Chat API", "Node.js", "Bot Service", "KB Service", "Schema Validation"],
    visual: "cards",
    accent: "cyan",
  },
  {
    id: "work-portal",
    title: "Work Portal",
    subtitle: "Internal support product, APIs, auth, and reliability",
    category: "Full-stack Product",
    featured: true,
    year: "2025-2026",
    role: "Full-stack Product Engineer",
    problem:
      "Internal users needed faster issue workflows, stronger AI feedback signals, stable file access, and reliable request tracing across Kubernetes restarts.",
    solution:
      "Shipped CR auto-population, ticket subtype progression, AI feedback capture, S3 presigned URL v2 APIs, JWT dbId optimization, route-level rate limiting, retry alerts, Prisma migrations, indexes, and AsyncLocalStorage logging.",
    impact: [
      "500+ internal users",
      "200+ daily users saved manual re-entry",
      "~50% fewer authenticated DB lookups",
      "12+ authenticated API routes optimized",
    ],
    architecture: [
      "Next.js product modules",
      "NextAuth JWT carries dbId",
      "Prisma models and migrations govern schema changes",
      "Pino + AsyncLocalStorage keeps async trace context",
    ],
    stack: ["Next.js", "PostgreSQL", "Prisma", "NextAuth", "AWS S3", "Pino", "AsyncLocalStorage", "Kubernetes"],
    visual: "portal",
    accent: "amber",
  },
  {
    id: "edith",
    title: "Edith",
    subtitle: "Modular Slack automation platform",
    category: "Backend Systems",
    year: "2025",
    role: "Backend Platform Engineer",
    problem:
      "Legacy Yellow Bot automation was limited, difficult to extend, and lacked isolated state and consistent failure handling.",
    solution:
      "Built Edith from scratch with middleware-style workflow registration, independent flow state, per-flow error handling, 3-retry logic, and Slack alerts on repeated failures.",
    impact: ["12+ production workflows", "500+ requests/month", "Full production adoption", "Migrated from legacy Yellow Bot"],
    architecture: [
      "Slack command enters Bolt middleware",
      "Router selects workflow handler",
      "Handler owns state, retries, and errors",
      "PostgreSQL persists workflow and audit data",
    ],
    stack: ["Slack Bolt SDK", "Node.js", "PostgreSQL", "TypeScript"],
    visual: "edith",
    accent: "violet",
  },
  {
    id: "devhub",
    title: "DevHub",
    subtitle: "Developer community platform",
    category: "Full-stack Product",
    year: "2024",
    role: "Full-stack Engineer",
    problem:
      "Developer communities need richer discussion mechanics than flat posts: nested replies, voting, reputation, notifications, and scoped moderation.",
    solution:
      "Built an end-to-end Next.js community platform with MongoDB schemas for posts, comments, communities, and votes; Clerk OAuth; organization-level authorization; Zod API validation; SSR; and responsive UI.",
    impact: ["Nested discussions", "Role-based community management", "Real-time notifications", "Validated with real live users"],
    architecture: [
      "Clerk handles Google/GitHub OAuth",
      "Mongoose schemas model posts, comments, communities, and voting",
      "Zod validates API boundaries",
      "Next.js SSR keeps pages crawlable and responsive",
    ],
    stack: ["Next.js", "TypeScript", "MongoDB", "Mongoose", "Clerk", "Tailwind CSS", "Zod"],
    links: [
      { label: "Live", href: "https://dev-hub-pied.vercel.app" },
      { label: "GitHub", href: "https://github.com/chahatgupta1234/DevHub" },
    ],
    visual: "devhub",
    accent: "emerald",
  },
  {
    id: "xcrypto",
    title: "Xcrypto",
    subtitle: "Real-time crypto market tracker",
    category: "Frontend Data",
    year: "2024",
    role: "Frontend Engineer",
    problem:
      "Market data UIs need fast scanning, currency conversion, charting, rankings, pagination, and refresh behavior that does not punish API limits.",
    solution:
      "Built a responsive React data product with live CoinGecko feeds, multi-currency INR/USD/EUR conversion, exchange calculator, market-cap ranking, Chart.js visualizations, paginated listings, and debounced refreshes.",
    impact: ["12,000+ digital assets tracked", "Multi-currency conversion", "Interactive charts", "Independent end-to-end build"],
    architecture: [
      "CoinGecko REST feed hydrates market listings",
      "Debounced requests protect refresh behavior",
      "Chart.js renders coin-level price history",
      "Pagination keeps the listing usable on mobile and desktop",
    ],
    stack: ["React.js", "Chart.js", "CoinGecko API", "REST APIs"],
    links: [
      {
        label: "Live",
        href: "https://react-crypto-currency-9j5e0j3qj-cahat-guptas-projects.vercel.app",
      },
      { label: "GitHub", href: "https://github.com/chahatgupta1234/Xcrypto-React-App" },
    ],
    visual: "xcrypto",
    accent: "cyan",
  },
  {
    id: "glaucoma",
    title: "Glaucoma Detection System",
    subtitle: "Medical AI prototype deployed on IBM Cloud",
    category: "ML Product",
    year: "2024",
    role: "AI/ML Intern · Team Lead",
    problem:
      "The system needed to classify retinal imaging data, expose real-time inference, and give users a usable upload and response workflow.",
    solution:
      "Led 9 people to train a CNN, deploy inference on IBM Cloud, build a React image-upload frontend, and integrate an IBM AI chatbot for automated patient triage.",
    impact: ["90% model accuracy", "500-patient dataset", "9-person team led", "Real-time inference API"],
    architecture: [
      "Image upload enters React UI",
      "IBM Cloud inference API receives prepared input",
      "CNN returns structured prediction",
      "Chatbot supports automated triage flow",
    ],
    stack: ["Python", "TensorFlow", "Keras", "IBM Cloud", "React"],
    links: [{ label: "GitHub", href: "https://github.com/chahatgupta1234/Glaucoma-Detection" }],
    visual: "glaucoma",
    accent: "rose",
  },
  {
    id: "rajasthan-police",
    title: "1930 Helpline",
    subtitle: "Rajasthan Police Hackathon finalist project",
    category: "Full-stack Product",
    year: "2024",
    role: "Full-stack + AI Engineer",
    problem:
      "Emergency response teams needed a digitized complaint flow with smarter routing and triage for citizen reports.",
    solution:
      "Built a police emergency response system with React, Node.js, REST APIs, and an AI chatbot for intelligent complaint routing and automated triage.",
    impact: ["Finalist among hundreds of teams", "AI chatbot routing", "Digitized emergency response workflow"],
    architecture: [
      "Citizen complaint enters web flow",
      "Chatbot classifies and routes complaint context",
      "REST APIs persist and move response data",
      "Operators receive structured triage details",
    ],
    stack: ["Node.js", "React", "AI Chatbot", "REST APIs"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/chahatgupta1234/RJPOLICE_HACK_768_CyberSolvers_9",
      },
    ],
    visual: "hackathon",
    accent: "amber",
  },
];

export const skillGroups = [
  {
    title: "AI and LLM",
    signal: "Builds AI into production workflows, not just demos.",
    skills: [
      "Python",
      "GPT-4o",
      "Azure OpenAI",
      "LangGraph",
      "FastMCP",
      "RAG Pipelines",
      "Prompt Engineering",
      "LLM fine-tuning concepts",
      "TensorFlow",
      "Keras",
      "CNN",
      "Computer Vision",
    ],
    proof: "TicketOps, GPT-4o deduplication, RCA validation, PDF extraction fallback, glaucoma detection.",
  },
  {
    title: "Backend",
    signal: "Owns APIs, auth, failure handling, and integration contracts.",
    skills: [
      "Node.js",
      "TypeScript",
      "Express.js",
      "REST APIs",
      "API Versioning",
      "Rate Limiting",
      "Retry Logic",
      "BullMQ",
      "Redis",
      "Pino",
      "AsyncLocalStorage",
      "Slack Bolt SDK",
      "Microservices",
    ],
    proof: "10+ APIs, x-api-key auth, route-level rate limiting, Slack automation, S3 access API.",
  },
  {
    title: "Frontend",
    signal: "Ships product surfaces that make complex systems usable.",
    skills: ["React", "Next.js", "Tailwind CSS", "JavaScript ES6", "Chart.js", "SSR", "Zod", "pdfjs-dist"],
    proof: "Work Portal modules, DevHub, Xcrypto, IBM Cloud inference UI.",
  },
  {
    title: "Database",
    signal: "Designs schemas and query paths with maintainability in mind.",
    skills: [
      "PostgreSQL",
      "Prisma ORM",
      "Prisma Migrations",
      "MongoDB",
      "Mongoose",
      "OpenSearch",
      "Schema design",
      "Indexing strategies",
      "Query optimization",
    ],
    proof: "Work Portal migrations, indexed high-frequency columns, DevHub MongoDB models, OpenSearch log search.",
  },
  {
    title: "Infrastructure",
    signal: "Comfortable around cloud primitives and operational failure modes.",
    skills: [
      "Kubernetes",
      "Docker",
      "AWS S3 Presigned URLs",
      "AWS SQS",
      "Jenkins CI/CD",
      "IBM Cloud",
      "Prometheus",
      "NextAuth",
      "JWT",
      "Git",
    ],
    proof: "Kubernetes logging recovery, S3 presigned URL pipeline, IBM Cloud model deployment.",
  },
  {
    title: "Auth and Security",
    signal: "Treats access boundaries as product infrastructure.",
    skills: [
      "x-api-key authentication",
      "Role-based authorization",
      "NextAuth",
      "JWT session optimization",
      "Google/GitHub OAuth via Clerk",
      "API key validation",
    ],
    proof: "JWT dbId optimization, Edith/Pulse API validation, Clerk org authorization, response field hygiene.",
  },
];

export const skillFluency = [
  {
    title: "Backend",
    skills: [
      { name: "Node.js / Express", level: 90 },
      { name: "REST API Design", level: 88 },
      { name: "TypeScript", level: 84 },
      { name: "Rate Limiting / Retry Logic", level: 82 },
      { name: "System Design", level: 76 },
    ],
  },
  {
    title: "Data & Storage",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "Prisma ORM", level: 86 },
      { name: "Schema Design", level: 84 },
      { name: "Indexing / Query Optimization", level: 82 },
      { name: "MongoDB / Mongoose", level: 78 },
    ],
  },
  {
    title: "AI Product Systems",
    skills: [
      { name: "LangGraph", level: 82 },
      { name: "Azure OpenAI / GPT-4o", level: 84 },
      { name: "RAG Pipelines", level: 80 },
      { name: "FastMCP Tool Servers", level: 78 },
      { name: "LLM Validation", level: 76 },
    ],
  },
  {
    title: "Infra & Reliability",
    skills: [
      { name: "Kubernetes Debugging", level: 76 },
      { name: "Pino / AsyncLocalStorage", level: 82 },
      { name: "AWS S3 Presigned URLs", level: 80 },
      { name: "OpenSearch Log Search", level: 76 },
      { name: "Slack Bolt SDK", level: 88 },
    ],
  },
];

export const engineeringPrinciplesJson = {
  first_principle: "read the error, all of it",
  database: "index the path users hit repeatedly",
  api_design: "contracts before handlers",
  reliability: "make the failure visible before optimizing",
  ai: "use LLMs where they remove operational drag",
};

export const roleTicker = [
  "Backend Engineer · TypeScript · PostgreSQL · Production APIs",
  "Applied AI Engineer · LangGraph · FastMCP · RAG · Azure OpenAI",
  "Product Engineer · Next.js · Internal Tools · Slack Automation",
  "Reliability-minded builder · Logs · Retries · Rate limits · Auth",
];

export const achievements = [
  {
    title: "NIMCET 2022 AIR 360",
    detail: "Top 0.36% of 100,000+ candidates nationally.",
  },
  {
    title: "MCA, NIT Bhopal",
    detail: "CGPA 8.9 · 2022-2025.",
  },
  {
    title: "HackerRank 5-star",
    detail: "C++ and Problem Solving.",
    link: "https://www.hackerrank.com/profile/chahatguptanit",
  },
  {
    title: "CodeChef 2-star",
    detail: "Competitive programming profile.",
    link: "https://www.codechef.com/users/chahatguptanit",
  },
  {
    title: "Rajasthan Police Hackathon Finalist",
    detail: "AI chatbot for emergency helpline, top finalist.",
  },
  {
    title: "Open source contributor",
    detail: "GSSoC and Hacktoberfest contributor.",
    link: "https://drive.google.com/file/d/12dlM0-y9d3wYI9mdX2I2gG8mFDvoGiQg/view",
  },
];

export const operatingPrinciples = [
  {
    title: "Design the contract before the handler",
    detail:
      "Strong systems start with the request shape, auth boundary, validation rules, failure behavior, and consumer expectations.",
  },
  {
    title: "Make failure observable",
    detail:
      "Retries, Slack alerts, structured logs, and async context propagation matter because the production path is never only the happy path.",
  },
  {
    title: "Use AI where it removes operational drag",
    detail:
      "LLM work should improve classification, retrieval, triage, validation, or summarization inside a real workflow.",
  },
  {
    title: "Optimize the expensive path",
    detail:
      "The most useful performance wins come from reducing repeated DB lookups, indexing high-frequency columns, and moving repeated work into durable context.",
  },
];

export const targetRoles = ["Backend Engineer", "Full-stack Engineer", "Applied AI Engineer", "Product Engineer"];
