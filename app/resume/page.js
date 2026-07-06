import { experience, profile, projects, proof, skills } from "../../data/portfolio";

export const metadata = {
  title: "Resume - Aleshinloye Olamilekan",
  description:
    "Full stack resume for Aleshinloye Olamilekan, covering React, Next.js, Django, FastAPI, NestJS, PostgreSQL, payments, dashboards, AI/ML systems, and production APIs."
};

const groupedSkills = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
      "Responsive UI"
    ]
  },
  {
    title: "Backend",
    items: [
      "Python",
      "Django",
      "Django REST Framework",
      "FastAPI",
      "Node.js",
      "NestJS",
      "REST APIs",
      "Authentication",
      "Authorization",
      "WebSockets"
    ]
  },
  {
    title: "Data, Cloud and Systems",
    items: [
      "PostgreSQL",
      "Redis",
      "MySQL",
      "SQLAlchemy",
      "Prisma",
      "Docker",
      "AWS",
      "Render",
      "Payments",
      "Langfuse",
      "Groq"
    ]
  }
];

function ResumeHeader() {
  return (
    <header className="resumeHeader">
      <a className="brand" href="../" aria-label="Back to portfolio home">
        <span className="brandMark">AO</span>
        <span>{profile.name}</span>
      </a>
      <nav className="site-nav" aria-label="Resume navigation">
        <a href="../">Portfolio</a>
        <a href={`mailto:${profile.email}`}>Email</a>
        <a href={profile.github}>GitHub</a>
        <a href={profile.linkedin}>LinkedIn</a>
      </nav>
    </header>
  );
}

function Section({ title, children }) {
  return (
    <section className="resumeSection">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default function ResumePage() {
  return (
    <div className="siteShell resumePage">
      <ResumeHeader />

      <main className="resumeDocument">
        <section className="resumeHero">
          <p className="sectionKicker">Resume</p>
          <h1>{profile.name}</h1>
          <p className="resumeRole">{profile.role}</p>
          <p className="resumeSummary">{profile.summary}</p>
          <div className="resumeContact">
            <span>{profile.location}</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={`tel:${profile.phone}`}>{profile.phone}</a>
            <a href={profile.github}>GitHub</a>
            <a href={profile.linkedin}>LinkedIn</a>
          </div>
        </section>

        <Section title="Core Strengths">
          <div className="resumeStrengths">
            <div>Frontend product engineering with React, Next.js, TypeScript, React Native, responsive dashboards, form-heavy workflows, and clean UI state handling.</div>
            <div>Backend and API engineering with Django, FastAPI, NestJS, PostgreSQL, Redis, authentication, authorization, payment workflows, and production reliability.</div>
            <div>End-to-end delivery across product requirements, Figma implementation, API integration, debugging, deployment, monitoring, and stakeholder communication.</div>
          </div>
        </Section>

        <Section title="Professional Experience">
          <div className="resumeTimeline">
            {experience.map((item) => (
              <article key={`${item.company}-${item.period}`}>
                <div>
                  <p className="time">{item.period}</p>
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p className="company">{item.company}</p>
                  <ul>
                    {item.body.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section title="Selected Projects and Technical Work">
          <div className="resumeProjects">
            {projects.map((project) => (
              <article key={project.title}>
                <p className="tag">{project.tag}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.bullets ? (
                  <ul>
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </Section>

        <Section title="Technical Skills">
          <div className="resumeSkillGroups">
            {groupedSkills.map((group) => (
              <article key={group.title}>
                <h3>{group.title}</h3>
                <div>
                  {group.items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section title="Education and Recognition">
          <div className="resumeProof">
            {proof.map((item) => (
              <article key={item.title}>
                <p className="sectionKicker">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}
