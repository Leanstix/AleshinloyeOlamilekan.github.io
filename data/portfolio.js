export const profile = {
  name: "Aleshinloye Olamilekan",
  role: "Full Stack Engineer",
  location: "Ibadan, Oyo State, Nigeria",
  email: "leanstixx@gmail.com",
  phone: "+2348051167192",
  photo:
    "https://raw.githubusercontent.com/Leanstix/AleshinloyeOlamilekan.github.io/main/images/HeadSHot.png",
  resume: "resume/",
  github: "https://github.com/Leanstix",
  linkedin: "https://www.linkedin.com/in/aleshinloye-olamilekan-765855218",
  twitter: "https://x.com/Aleshinloy7974",
  headline:
    "I build polished interfaces and reliable full-stack systems.",
  summary:
    "Full stack engineer with 4+ years of experience shipping React, Next.js, TypeScript, React Native, Django, FastAPI, NestJS, PostgreSQL, payment workflows, multi-tenant platforms, open-source developer tooling, AI/ML systems, dashboards, mobile-facing product flows, and production APIs."
};

export const metrics = [
  { value: "4+ yrs", label: "Full stack delivery" },
  { value: "PyPI", label: "Published developer tooling" },
  { value: "APIs", label: "Django, FastAPI, NestJS, PostgreSQL" },
  { value: "AI/ML", label: "Hackathons, search, intelligence layers" }
];

export const capabilities = [
  {
    title: "Frontend Product Engineering",
    icon: "01",
    body:
      "React, Next.js, React Native, TypeScript, responsive layouts, dashboard workflows, form-heavy journeys, loading states, error states, validation flows, and reusable UI components."
  },
  {
    title: "Backend and API Systems",
    icon: "02",
    body:
      "Django, FastAPI, NestJS, REST APIs, authentication, authorization, PostgreSQL data modeling, Redis-backed performance, webhook systems, payment flows, and service reliability."
  },
  {
    title: "End-to-End Product Delivery",
    icon: "03",
    body:
      "Turn product requirements and Figma designs into shipped interfaces, integrate them with production APIs, debug across the stack, and keep user journeys stable."
  }
];

export const projects = [
  {
    title: "pytest-authz-matrix",
    tag: "Open Source - Python - pytest - Django REST Framework - Security",
    featured: true,
    description:
      "Built and published an open-source pytest plugin that turns role, ownership, and tenant-isolation policies into executable authorization contracts for Python web APIs.",
    bullets: [
      "Designed a YAML contract format that expands actor-by-resource relationships into independent allow, deny, conceal, and unauthenticated test cases.",
      "Added Django REST Framework route discovery, missing-authorization coverage reports, JSON output, and configurable CI coverage gates.",
      "Packaged and released version 0.1.0 on PyPI with typed Python APIs, documentation, integration examples, Trusted Publishing, and CI validation across Python 3.10 through 3.13."
    ],
    links: [
      {
        label: "Install from PyPI",
        href: "https://pypi.org/project/pytest-authz-matrix/"
      },
      {
        label: "View source",
        href: "https://github.com/Leanstix/pytest-authz-matrix"
      }
    ]
  },
  {
    title: "Visitor Management System",
    tag: "Next.js - Django - PostgreSQL - Multi-tenant SaaS",
    description:
      "Designed and delivered a multi-tenant platform for estates and organizations, covering public pre-registration, admin dashboards, visitor registration, check-in/out, staff management, student management, reporting, and access-control workflows.",
    bullets: [
      "Built frontend-facing dashboard workflows for visitor histories, reporting screens, search flows, admin actions, and operational views.",
      "Designed secure REST APIs, tenant-aware PostgreSQL models, access boundaries, and optimized reporting/search queries.",
      "Improved responsiveness with Redis-backed patterns and supported deployment, troubleshooting, and production reliability on AWS/Render."
    ]
  },
  {
    title: "Kenkeputa / VendorizeMe Product Systems",
    tag: "React Native - TypeScript - Payments - Marketplace APIs",
    description:
      "Build and maintain production marketplace features across vendor/customer journeys, bookings, payment verification, support flows, mobile-connected APIs, and operational automations.",
    bullets: [
      "Shipped customer-facing React Native and TypeScript features from Figma to production with clean UI state handling and API integration.",
      "Led Stripe to PayPal migration, including payment capture, webhook verification, duplicate safeguards, payout states, and transaction audit records.",
      "Integrated Zendesk support automation, Datadog API logging, Firebase Crashlytics visibility, and production debugging across API, database, payment, and mobile layers."
    ]
  },
  {
    title: "VendorizeMe Native Search Engine",
    tag: "FastAPI - PostgreSQL search - Docker - Render",
    description:
      "Built a standalone FastAPI search microservice to remove dependency on an external search API and give the platform its own reliable search layer.",
    bullets: [
      "Implemented PostgreSQL full-text search, ILIKE fallback, category filters, service-tag filters, price filters, rating filters, availability logic, distance calculation, ranking, boost, and penalty logic.",
      "Added optional LLM-assisted intent parsing and autocomplete while keeping PostgreSQL as the final production executor.",
      "Added internal X-API-Key protection, controlled CORS, validation errors, health checks, Docker deployment setup, Render configuration, and contract tests."
    ]
  },
  {
    title: "Lafiya - Infectious Disease Surveillance Platform",
    tag: "FastAPI - ML intelligence - WebSocket dashboards",
    description:
      "Built the ML model and intelligence layers for a FastAPI-based public health surveillance platform designed for low-connectivity environments.",
    bullets: [
      "Direct ingestion and encrypted offline relay ingestion for Tracy ecosystem signals.",
      "Exposure risk, vitals anomaly detection, outbreak zone analysis, contact network analysis, device health analysis, and alert prioritization.",
      "Contact graph construction, superspreader ranking, BFS transmission simulation, runtime persistence, cache invalidation, WebSocket updates, and dashboard-ready intelligence snapshots."
    ]
  },
  {
    title: "AI Resume Platform",
    tag: "React - API-integrated forms - Responsive UI",
    description:
      "Built responsive data-collection workflows for an AI-powered resume generation platform, focusing on structured input, validation, backend integration, loading states, error states, and reliable submission flows.",
    bullets: [
      "Created reusable UI patterns for form-heavy user journeys and improved behavior across screen sizes.",
      "Integrated frontend screens with backend APIs and handled loading, error, and validation states for smoother submissions."
    ]
  },
  {
    title: "AMRRA - AI Multi-Agent Research Assistant",
    tag: "Hackathon lead - Agent orchestration - GPT-5 workflows",
    description:
      "Led a six-engineer hackathon team building a multi-agent retrieval and synthesis system for structured research outputs.",
    bullets: [
      "Coordinated agent responsibilities, research workflows, synthesis outputs, and delivery planning under hackathon pressure.",
      "Strengthened practical experience in agent orchestration, prompt evaluation, AI-assisted research workflows, and technical leadership."
    ]
  },
  {
    title: "Reply Hack the Code / AI Agent Challenge",
    tag: "Solo ML fraud detection - Langfuse - Python",
    description:
      "Built three fraud-detection solution iterations across separate datasets using Python-based ML experimentation, feature engineering, anomaly signals, rule-based checks, model scoring, and agent-style reasoning.",
    bullets: [
      "Parsed transaction behavior, payment method, balance movement, timestamp, merchant/location signals, and auxiliary user activity patterns.",
      "Connected Langfuse through its API for LLM/agent observability, session tracing, prompt/evaluation visibility, and decision-flow debugging."
    ]
  },
  {
    title: "Flow - University Social Platform",
    tag: "Social product - Real-time interaction workflows",
    description:
      "Designed messaging, feeds, user discovery, and interaction logic for an interest-based university social networking platform, including scalable communication and campus-community product patterns.",
    link: "https://flow-aleshinloye-olamilekan-s-projects.vercel.app"
  },
  {
    title: "FashionFi - Fashion Marketplace",
    tag: "Marketplace UX - Product planning - Hackathon leadership",
    description:
      "Led and contributed to a fashion-commerce marketplace concept involving user-facing product flows, interface planning, feature breakdown, implementation coordination, and scalable application structure."
  }
];

export const experience = [
  {
    period: "Nov 2025 - Present",
    title: "Full Stack Engineer - Product, Payments, Search and Mobile",
    company: "Kenkeputa - Houston, Texas (Remote)",
    body: [
      "Build and maintain production features supporting marketplace workflows, vendor/customer actions, booking flows, payment verification, event-service flows, mobile application journeys, media uploads, notifications, support operations, and operational automations.",
      "Ship customer-facing React Native and TypeScript features from Figma to production while designing predictable API behaviors and debugging state transitions across frontend, mobile, payment, database, and backend layers.",
      "Led Stripe to PayPal payment migration and implemented PayPal capture logic, webhook verification, duplicate transaction safeguards, payout states, audit records, Zendesk automation, Datadog API logging, and Firebase Crashlytics visibility.",
      "Built and documented a standalone FastAPI search microservice with PostgreSQL full-text search, filters, ranking logic, autocomplete, health checks, Docker setup, Render deployment, internal API-key protection, and contract tests."
    ]
  },
  {
    period: "May 2025 - Present",
    title: "Full Stack Engineer - React/Next.js and Django Platform",
    company: "Xeta Digital - Lagos, Nigeria (Remote)",
    body: [
      "Designed and deployed a multi-tenant Visitor Management System with responsive web workflows, tenant-aware dashboards, admin interfaces, operational search, reporting screens, and secure REST APIs.",
      "Built tenant-aware dashboard and operational interfaces using modern React and Next.js patterns, connecting frontend workflows to scalable Django backend APIs.",
      "Architected PostgreSQL access boundaries, optimized high-frequency dashboard, visitor history, reporting, and search queries, introduced Redis-backed performance improvements, and supported AWS deployment and production troubleshooting.",
      "Collaborated remotely with product and frontend stakeholders, turning estate operations into usable application flows for visitor check-in/check-out, access control, admin actions, reporting, search, and estate-specific workflows."
    ]
  },
  {
    period: "Jul 2024 - Sep 2024",
    title: "Frontend Engineer Intern - AI Resume Platform",
    company: "AnalogueShifts - Lagos, Nigeria / Remote",
    body: [
      "Built dynamic data-collection workflows for an AI resume generation platform, reusable UI patterns, responsive screens, backend API integrations, and loading, error, and validation states.",
      "Collaborated remotely with engineers to translate product requirements into working frontend features, debug interface issues, and improve submission reliability for form-heavy user journeys."
    ]
  },
  {
    period: "Sep 2021 - Jul 2024",
    title: "Backend Developer and ICT Systems Engineer",
    company: "Eccowas Cosmopolitan College - Ogun, Nigeria (Hybrid)",
    body: [
      "Designed backend architecture, reporting logic, API integrations, and operational workflows for a live school-management environment used by administrators, teachers, and students.",
      "Worked directly with non-technical administrators, teachers, and students to translate real operational pain points into usable digital workflows, troubleshooting loops, data entry processes, and reporting improvements.",
      "Built API integrations for academic performance analytics, helping administrators understand results, attendance, and school operations more clearly."
    ]
  }
];

export const skills = [
  "React",
  "Next.js",
  "React Native",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Material UI",
  "Responsive UI",
  "API Integration",
  "Python",
  "Django",
  "Django REST Framework",
  "FastAPI",
  "Node.js",
  "NestJS",
  "REST APIs",
  "Webhooks",
  "Authentication",
  "Authorization",
  "PostgreSQL",
  "Redis",
  "MySQL",
  "SQLAlchemy",
  "Prisma",
  "Docker",
  "AWS",
  "Render",
  "Git",
  "GitHub",
  "GitHub Actions",
  "pytest",
  "Python Packaging",
  "Security Testing",
  "WebSockets",
  "Payments",
  "Langfuse",
  "Groq",
  "Machine Learning"
];

export const proof = [
  {
    label: "Education",
    title: "Computer Science, University of Ibadan",
    body:
      "Ongoing computer science degree, backed by ALX Full Stack Software Engineering training completed in November 2024."
  },
  {
    label: "Recognition",
    title: "Hackathon-tested full-stack builder",
    body:
      "HealthTrace Hackathon 2026 winner for Lafiya. AMRRA hackathon lead for a multi-agent research assistant. Solo ML fraud-detection participant in Reply Hack the Code / AI Agent Challenge 2026. FashionFi team lead during Algorand Hackathon 2024."
  }
];
