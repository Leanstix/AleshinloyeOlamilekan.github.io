export const profile = {
  name: "Aleshinloye Olamilekan",
  role: "Backend Engineer",
  location: "Ibadan, Oyo State, Nigeria",
  email: "leanstixx@gmail.com",
  phone: "+2348051167192",
  photo:
    "https://raw.githubusercontent.com/Leanstix/AleshinloyeOlamilekan.github.io/main/images/HeadSHot.png",
  resume:
    "https://raw.githubusercontent.com/Leanstix/AleshinloyeOlamilekan.github.io/main/images/AleshinloyeOlamilekan_Resume.pdf",
  github: "https://github.com/Leanstix",
  linkedin: "https://www.linkedin.com/in/aleshinloye-olamilekan-765855218",
  twitter: "https://x.com/Aleshinloy7974",
  headline:
    "I build backend systems that move money, rank data, and turn noisy signals into useful decisions.",
  summary:
    "Backend-focused full stack engineer with 4+ years of experience building scalable APIs, payment infrastructure, marketplace workflows, search systems, AI/ML pipelines, operational dashboards, and production-grade web platforms."
};

export const metrics = [
  { value: "4+ yrs", label: "Engineering experience" },
  { value: "2026", label: "HealthTrace Hackathon winner" },
  { value: "FastAPI", label: "Search and intelligence services" },
  { value: "PayPal", label: "Payments, webhooks, payouts" }
];

export const capabilities = [
  {
    title: "APIs and Platforms",
    icon: "01",
    body:
      "REST APIs, authentication, authorization, multi-tenant data models, admin workflows, reporting endpoints, and production service boundaries."
  },
  {
    title: "Payments and Operations",
    icon: "02",
    body:
      "Payment capture, webhook verification, duplicate safeguards, payout-state handling, support automation, and audit-friendly transaction records."
  },
  {
    title: "AI/ML Intelligence",
    icon: "03",
    body:
      "Risk scoring, anomaly detection, model scoring, LLM-assisted workflows, Langfuse tracing, and dashboard-ready intelligence outputs."
  }
];

export const projects = [
  {
    title: "Lafiya - Infectious Disease Surveillance Platform",
    tag: "Hackathon winner - Backend, ML and intelligence",
    featured: true,
    description:
      "Built the ML model and intelligence layers for a FastAPI-based public health surveillance platform designed for low-connectivity environments.",
    bullets: [
      "Direct ingestion and encrypted offline relay ingestion.",
      "Exposure risk, vitals anomaly detection, outbreak zone analysis, and alert prioritization.",
      "Contact graph construction, superspreader ranking, BFS transmission simulation, WebSocket updates, and intelligence snapshots."
    ]
  },
  {
    title: "VendorizeMe Native Search Engine",
    tag: "FastAPI - PostgreSQL - Search infrastructure",
    description:
      "Built a standalone FastAPI search microservice to remove dependency on an external search provider and give the marketplace its own reliable search layer.",
    bullets: [
      "Full-text search, ILIKE fallback, filters, distance logic, ranking scores, boosts, and penalties.",
      "Optional LLM-assisted intent parsing while PostgreSQL remains the final executor.",
      "Docker, Render deployment, health checks, API-key protection, and contract tests."
    ]
  },
  {
    title: "Visitor Management System",
    tag: "Django - PostgreSQL - AWS",
    description:
      "Designed and deployed a multi-tenant platform for estates and organizations, covering visitor registration, check-in/out, staff management, student management, and admin reporting.",
    bullets: [
      "Tenant-aware PostgreSQL data models and access boundaries.",
      "Secure REST workflows, reporting queries, dashboards, and operational search.",
      "Redis caching, AWS deployment, and production troubleshooting."
    ]
  },
  {
    title: "Flow - University Social Platform",
    tag: "Social platform - Real-time product logic",
    description:
      "Designed backend and product logic for a university social platform with feeds, messaging, user discovery, and interest-based campus interactions.",
    link: "https://flow-aleshinloye-olamilekan-s-projects.vercel.app"
  }
];

export const experience = [
  {
    period: "Nov 2025 - Present",
    title: "Full Stack Engineer - Backend, Payments, Search and Mobile Product",
    company: "Kenkeputa - Houston, Texas (Remote)",
    body: [
      "Build backend services for marketplace workflows across users, vendors, bookings, payments, payouts, media uploads, notifications, support flows, and mobile-connected product features.",
      "Led Stripe to PayPal payment migration, implemented PayPal capture logic, webhook verification, duplicate transaction safeguards, payout states, audit records, Datadog API logging, and Firebase Crashlytics visibility."
    ]
  },
  {
    period: "May 2025 - Present",
    title: "Python/Django Full Stack Engineer",
    company: "Xeta Digital - Lagos, Nigeria (Remote)",
    body: [
      "Designed and deployed a multi-tenant Visitor Management System with secure REST APIs, PostgreSQL access boundaries, dashboard reporting, Redis-backed performance improvements, and AWS deployment support."
    ]
  },
  {
    period: "Jul 2024 - Sep 2024",
    title: "Frontend Engineer Intern - AI Resume Platform",
    company: "AnalogueShifts - Lagos, Nigeria / Remote",
    body: [
      "Built dynamic data-collection workflows for an AI resume generation platform and integrated frontend screens with backend APIs, including loading, error, and validation states."
    ]
  }
];

export const skills = [
  "Python",
  "FastAPI",
  "Django",
  "Django REST Framework",
  "Node.js",
  "NestJS",
  "JavaScript",
  "TypeScript",
  "PostgreSQL",
  "Redis",
  "SQLAlchemy",
  "Prisma",
  "Docker",
  "AWS",
  "Render",
  "WebSockets",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Langfuse",
  "Groq"
];

export const proof = [
  {
    label: "Education",
    title: "Computer Science, University of Ibadan",
    body:
      "Ongoing computer science degree, backed by ALX Full Stack Software Engineering training completed in November 2024."
  },
  {
    label: "Hackathons",
    title: "Builder under pressure",
    body:
      "HealthTrace Hackathon 2026 winner. Solo ML fraud-detection participant in Reply Hack the Code / AI Agent Challenge 2026. AMRRA hackathon lead for a multi-agent research assistant."
  }
];
