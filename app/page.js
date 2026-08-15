import {
  capabilities,
  experience,
  metrics,
  profile,
  projects,
  proof,
  skills
} from "../data/portfolio";

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label={`${profile.name} home`}>
        <span className="brandMark">AO</span>
        <span>{profile.name}</span>
      </a>
      <nav className="site-nav" aria-label="Primary navigation">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#stack">Stack</a>
        <a href={profile.resume}>Resume</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero sectionGrid">
      <div className="heroCopy">
        <p className="eyebrow">
          Full Stack Engineer - React/Next.js - Django/FastAPI - Payments - AI/ML
        </p>
        <h1>{profile.headline}</h1>
        <p className="heroLede">{profile.summary}</p>
        <div className="heroActions">
          <a className="button primary" href={`mailto:${profile.email}`}>
            Hire me
          </a>
          <a className="button ghost" href="#work">
            View work
          </a>
          <a className="button ghost" href={profile.resume}>
            Resume
          </a>
        </div>
      </div>

      <aside className="heroCard" aria-label="Profile summary">
        <img src={profile.photo} alt={profile.name} />
        <div>
          <p className="statusDot">Open to full stack roles</p>
          <h2>{profile.role} in Ibadan, Nigeria.</h2>
          <p>
            I ship React/Next.js interfaces, production APIs, payment flows,
            dashboards, and AI-enabled product systems.
          </p>
        </div>
      </aside>
    </section>
  );
}

function Metrics() {
  return (
    <section className="metrics" aria-label="Career highlights">
      {metrics.map((item) => (
        <div key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </section>
  );
}

function Capabilities() {
  return (
    <section className="section intro">
      <p className="sectionKicker">What I do</p>
      <h2>Full stack systems with product sense.</h2>
      <div className="capabilityGrid">
        {capabilities.map((item) => (
          <article key={item.title}>
            <span className="capabilityIcon">{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="section">
      <div className="sectionHeading">
        <p className="sectionKicker">Selected work</p>
        <h2>Projects across product, platform, and intelligence.</h2>
      </div>
      <div className="projectGrid">
        {projects.map((project) => {
          const links = project.links ||
            (project.link ? [{ label: "Visit app", href: project.link }] : []);

          return (
            <article
              className={`projectCard ${project.featured ? "featured" : ""}`}
              key={project.title}
            >
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
              {links.length ? (
                <div className="projectLinks">
                  {links.map((link) => (
                    <a
                      href={link.href}
                      key={link.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section timelineSection">
      <div className="sectionHeading">
        <p className="sectionKicker">Experience</p>
        <h2>Recent roles and impact.</h2>
      </div>
      <div className="timeline">
        {experience.map((item) => (
          <article key={`${item.company}-${item.period}`}>
            <div className="time">{item.period}</div>
            <div className="timelineCard">
              <h3>{item.title}</h3>
              <p className="company">{item.company}</p>
              {item.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="section stackSection">
      <div>
        <p className="sectionKicker">Technical stack</p>
        <h2>Tools I use to ship across UI, APIs, and infrastructure.</h2>
      </div>
      <div className="stackCloud">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="section proofSection">
      {proof.map((item) => (
        <div className="proofCard" key={item.title}>
          <p className="sectionKicker">{item.label}</p>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contactSection">
      <p className="sectionKicker">Contact</p>
      <h2>Need a full stack engineer who can move across product and platform?</h2>
      <p>
        Send a message and I will respond with clear next steps, availability,
        and the best way to move your project forward.
      </p>
      <div className="contactActions">
        <a className="button primary" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <a className="button ghost" href={profile.github}>
          GitHub
        </a>
        <a className="button ghost" href={profile.linkedin}>
          LinkedIn
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>{profile.name} - {profile.role}</p>
      <div>
        <a href={profile.twitter}>Twitter</a>
        <a href={profile.github}>GitHub</a>
        <a href={`mailto:${profile.email}`}>Email</a>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="siteShell">
      <Header />
      <main>
        <Hero />
        <Metrics />
        <Capabilities />
        <Projects />
        <Experience />
        <Stack />
        <Proof />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
