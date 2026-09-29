import { profile, experience } from "../data/portfolio";
import { selectedWork, toolkit } from "../data/selected-work";

function Arrow({ down = false }) {
  return (
    <span aria-hidden="true" className="arrow">
      {down ? "↓" : "↗"}
    </span>
  );
}

function ProjectArtwork({ kind }) {
  if (kind === "payments")
    return (
      <div className="artwork payments-art" aria-hidden="true">
        <div className="art-top">
          <span>V / VendorizeMe</span>
          <span>Marketplace systems</span>
        </div>
        <div className="payment-track">
          <span>
            01
            <br />
            <b>Book.</b>
          </span>
          <span>
            02
            <br />
            <b>Pay.</b>
          </span>
          <span>
            03
            <br />
            <b>Settle.</b>
          </span>
        </div>
        <div className="art-bottom">
          <span>A connected payment lifecycle</span>
          <span>↗</span>
        </div>
      </div>
    );
  if (kind === "access")
    return (
      <div className="artwork access-art" aria-hidden="true">
        <div className="art-top">
          <span>Visitly</span>
          <span>Access & operations</span>
        </div>
        <div className="access-composition">
          <div className="access-ring ring-one" />
          <div className="access-ring ring-two" />
          <div className="access-ring ring-three" />
          <span className="access-label label-one">Residents</span>
          <span className="access-label label-two">Visitors</span>
          <span className="access-label label-three">
            One estate.
            <br />
            Clear boundaries.
          </span>
        </div>
        <div className="art-bottom">
          <span>Tenant-aware by design</span>
          <span>↗</span>
        </div>
      </div>
    );
  if (kind === "testing")
    return (
      <div className="artwork testing-art" aria-hidden="true">
        <div className="art-top">
          <span>pytest-authz-matrix</span>
          <span>Open source</span>
        </div>
        <div className="matrix">
          <div className="matrix-row matrix-head">
            <span>POLICY</span>
            <span>OWNER</span>
            <span>OTHER</span>
          </div>
          <div className="matrix-row">
            <span>Read resource</span>
            <span className="allow">ALLOW</span>
            <span>DENY</span>
          </div>
          <div className="matrix-row">
            <span>Update resource</span>
            <span className="allow">ALLOW</span>
            <span>DENY</span>
          </div>
          <p>Permissions, made testable.</p>
        </div>
        <div className="art-bottom">
          <span>Illustrative authorization contract</span>
          <span>↗</span>
        </div>
      </div>
    );
  return (
    <div className="artwork health-art" aria-hidden="true">
      <div className="art-top">
        <span>Lafiya</span>
        <span>Public health intelligence</span>
      </div>
      <div className="health-composition">
        <svg viewBox="0 0 500 130" fill="none">
          <path
            d="M0 70H95L112 58L130 87L151 20L173 112L193 70H270L288 54L306 85L326 32L347 102L363 70H500"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
        <span>
          Signals into
          <br />
          <em>early insight.</em>
        </span>
      </div>
      <div className="art-bottom">
        <span>HealthTrace Hackathon 2026 · Winner</span>
        <span>↗</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="siteShell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a
          className="wordmark"
          href="#home"
          aria-label={`${profile.name} home`}
        >
          olamilekan<span>.</span>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href={profile.resume}>
            Résumé <Arrow />
          </a>
          <a className="nav-contact" href="#contact">
            Let’s talk <Arrow />
          </a>
        </nav>
      </header>
      <main id="main">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="heroCopy">
            <p className="eyebrow">
              <span className="status-dot" /> Full stack engineer · Ibadan,
              Nigeria
            </p>
            <h1 id="hero-title">
              Thoughtful interfaces.
              <br />
              <em>
                Dependable
                <br className="desktop-break" /> systems.
              </em>
            </h1>
            <p className="heroLede">
              I’m Olamilekan. I build web and mobile products, with a strong
              focus on the backend systems that keep them running.
            </p>
            <div className="heroActions">
              <a className="button" href="#work">
                Explore my work <Arrow down />
              </a>
              <a className="text-link" href={`mailto:${profile.email}`}>
                Get in touch <Arrow />
              </a>
            </div>
          </div>
          <figure className="portrait">
            <div className="portrait-image">
              <img
                src="portrait.webp"
                alt="Aleshinloye Olamilekan"
                width="720"
                height="900"
                fetchPriority="high"
              />
            </div>
            <figcaption>
              <span>Aleshinloye Olamilekan</span>
              <span>Engineer & builder</span>
            </figcaption>
            <div className="portrait-note">
              <span className="status-dot" /> Open to roles & collaborations
            </div>
          </figure>
        </section>
        <div className="intro-strip">
          <span>From product requirements to production.</span>
          <p>
            Web & mobile <span>/</span> Backend systems <span>/</span> Applied
            AI
          </p>
        </div>
        <section
          id="work"
          className="section work-section"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <p className="sectionKicker">01 / Selected work</p>
              <h2 id="work-title">
                A few things I’ve built<span>.</span>
              </h2>
            </div>
            <p>
              Production platforms, open-source tools,
              <br />
              and problems worth working on.
            </p>
          </div>
          <div className="work-grid">
            {selectedWork.map((project, index) => (
              <article className="project" key={project.title}>
                <ProjectArtwork kind={project.kind} />
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>0{index + 1}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-stack">{project.stack}</p>
                <details className="project-details">
                  <summary>
                    Engineering notes <span aria-hidden="true">+</span>
                  </summary>
                  <div>
                    <p className="detail-label">My contribution</p>
                    <p>{project.contribution}</p>
                    <p className="detail-label">What mattered</p>
                    <p>{project.challenge}</p>
                  </div>
                </details>
                {project.links && (
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a
                        className="text-link"
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label} <Arrow />
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
          <div className="more-work">
            <p>There’s more behind the scenes.</p>
            <a
              className="text-link"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore my GitHub <Arrow />
            </a>
          </div>
        </section>
        <section
          id="about"
          className="section about-section"
          aria-labelledby="about-title"
        >
          <div>
            <p className="sectionKicker">02 / A little about me</p>
            <h2 id="about-title">
              I care about
              <br />
              how it works.
              <br />
              <em>And who it’s for.</em>
            </h2>
          </div>
          <div className="about-copy">
            <p>
              I’m a full stack engineer based in Ibadan, Nigeria. My work spans
              marketplaces, estate management, developer tools, and public
              health intelligence.
            </p>
            <p>
              I like being close to the problem: understanding the workflow,
              designing the system, building the interface, and following it
              through to production. Payment edge cases and access boundaries
              deserve as much attention as the screen in front of the user.
            </p>
            <p>
              I’m studying Computer Science at the University of Ibadan and
              completed ALX’s Full Stack Software Engineering programme in 2024.
            </p>
            <a className="text-link" href={profile.resume}>
              Read my résumé <Arrow />
            </a>
          </div>
        </section>
        <section
          id="experience"
          className="section experience-section"
          aria-labelledby="experience-title"
        >
          <div className="section-heading">
            <div>
              <p className="sectionKicker">03 / Experience</p>
              <h2 id="experience-title">
                Where I’ve contributed<span>.</span>
              </h2>
            </div>
          </div>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-row" key={item.company}>
                <p className="experience-date">{item.period}</p>
                <div>
                  <h3>{item.company.split(" - ")[0]}</h3>
                  <p className="experience-role">
                    {item.title.split(" - ")[0]}
                  </p>
                </div>
                <p>{item.overview || item.body[0]}</p>
              </article>
            ))}
          </div>
        </section>
        <section
          id="stack"
          className="section toolkit-section"
          aria-labelledby="toolkit-title"
        >
          <div>
            <p className="sectionKicker">04 / The toolkit</p>
            <h2 id="toolkit-title">Across the stack.</h2>
            <p>
              Tools I use to turn ideas
              <br />
              into working software.
            </p>
          </div>
          <dl className="toolkit-list">
            {toolkit.map((group) => (
              <div key={group.title}>
                <dt>{group.title}</dt>
                <dd>{group.items}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section
          id="contact"
          className="contact-section"
          aria-labelledby="contact-title"
        >
          <p className="sectionKicker">Have something in mind?</p>
          <div className="contact-heading">
            <h2 id="contact-title">
              Let’s build
              <br />
              <em>something useful.</em>
            </h2>
            <a
              className="contact-arrow"
              href={`mailto:${profile.email}`}
              aria-label="Email Olamilekan"
            >
              <Arrow />
            </a>
          </div>
          <div className="contact-bottom">
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <p>Open to full stack roles and thoughtful collaborations.</p>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Aleshinloye Olamilekan</p>
        <div>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub <Arrow />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn <Arrow />
          </a>
          <a href={profile.twitter} target="_blank" rel="noopener noreferrer">
            X <Arrow />
          </a>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
