// Curated homepage summaries. The complete work history remains on /resume/.
export const selectedWork = [
  {
    title: "VendorizeMe",
    category: "Product engineering / Marketplace",
    kind: "payments",
    preview: {
      src: "vendorizeme-preview.jpg",
      href: "https://vendorizeme.us/",
      domain: "vendorizeme.us",
    },
    links: [{ label: "Visit website", href: "https://vendorizeme.us/" }],
    description:
      "Connecting vendor discovery, bookings, payments, and payouts in one marketplace—from the mobile experience to the services behind it.",
    stack: "React Native · NestJS · FastAPI · PostgreSQL · PayPal",
    contribution:
      "Built mobile features and marketplace APIs, led the Stripe-to-PayPal migration, and developed a standalone search service with PostgreSQL filtering and ranking.",
    challenge:
      "Keeping payment capture, webhook verification, duplicate safeguards, and payout states consistent across the booking lifecycle. Search stays grounded in database queries, with optional AI-assisted intent parsing.",
  },
  {
    title: "Visitly",
    category: "Full stack / Multi-tenant platform",
    kind: "access",
    preview: {
      src: "visitly-preview.jpg",
      href: "https://visitly.com.ng/",
      domain: "visitly.com.ng",
    },
    links: [{ label: "Visit website", href: "https://visitly.com.ng/" }],
    description:
      "Visitor and estate management that brings registration, check-in, administration, and reporting into a single operational workflow.",
    stack: "Next.js · Django REST Framework · PostgreSQL · Redis · AWS",
    contribution:
      "Designed tenant-aware APIs and data models, built dashboard and visitor workflows, and supported deployment and production troubleshooting.",
    challenge:
      "Maintaining organization-level access boundaries while making visitor history, search, and reporting usable for the people running daily operations.",
  },
  {
    title: "pytest-authz-matrix",
    category: "Open source / Developer tooling",
    kind: "testing",
    description:
      "A published pytest plugin that turns authorization rules into executable tests for roles, resource ownership, and tenant isolation.",
    stack: "Python · pytest · Django REST Framework · GitHub Actions",
    contribution:
      "Designed the YAML contract format, the test expansion system, DRF route discovery, and coverage reports with configurable CI gates.",
    challenge:
      "Making permission gaps visible: each actor and resource relationship becomes an independent test for allowed, denied, concealed, or unauthenticated access.",
    links: [
      {
        label: "View source",
        href: "https://github.com/Leanstix/pytest-authz-matrix",
      },
      {
        label: "View on PyPI",
        href: "https://pypi.org/project/pytest-authz-matrix/",
      },
    ],
  },
  {
    title: "Lafiya",
    category: "Applied ML / HealthTrace 2026 winner",
    kind: "health",
    description:
      "Public health surveillance designed for low-connectivity environments, turning contact and vital-sign data into actionable intelligence.",
    stack: "Python · FastAPI · Machine learning · WebSockets",
    contribution:
      "Built the backend and intelligence layers for exposure risk, vitals anomalies, contact networks, outbreak zones, device health, and alert prioritization.",
    challenge:
      "Supporting both direct ingestion and encrypted offline relay, then translating incoming signals into coherent, dashboard-ready intelligence. Our team won HealthTrace Hackathon 2026.",
  },
];

export const toolkit = [
  { title: "Interfaces", items: "React, Next.js, React Native, TypeScript" },
  { title: "Backend", items: "Python, Django, FastAPI, Node.js, NestJS" },
  {
    title: "Data & infrastructure",
    items: "PostgreSQL, Redis, Docker, AWS, CI/CD",
  },
  {
    title: "Specialist work",
    items: "Payments, WebSockets, authorization testing, applied ML",
  },
];

export const webWork = [
  {
    title: "AnalogueShifts Resume Builder",
    category: "Frontend engineering / 2024",
    description:
      "Responsive forms and API-connected workflows for an AI-powered resume builder, with reusable input patterns and clear validation states.",
    preview: {
      src: "analogue-resume-preview.jpg",
      href: "https://resume.analogueshifts.com/",
      domain: "resume.analogueshifts.com",
      width: 1363,
      height: 936,
    },
  },
  {
    title: "AnalogueShifts Pay",
    category: "Web platform / Payments",
    description:
      "The AnalogueShifts payment gateway website, introducing the platform’s earnings and withdrawal services.",
    preview: {
      src: "analogue-pay-preview.jpg",
      href: "https://pay.analogueshifts.com/",
      domain: "pay.analogueshifts.com",
      width: 1363,
      height: 936,
    },
  },
  {
    title: "GradXTech",
    category: "Freelance / Landing page / 2024",
    description:
      "A single-page freelance website for a tech education initiative, presenting its training areas, mentorship, and career support for graduates and NYSC members.",
    preview: {
      src: "gradxtech-preview.jpg",
      href: "https://gradxtech.github.io/",
      domain: "gradxtech.github.io",
    },
  },
];
