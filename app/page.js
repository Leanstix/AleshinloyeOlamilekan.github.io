"use client";

import { useState } from "react";
import { profile, experience, capabilities } from "../data/portfolio";
import { selectedWork, webWork, toolkit } from "../data/selected-work";
import "./portfolio.css";

const base =
  process.env.NEXT_PUBLIC_BASE_PATH ||
  (process.env.GITHUB_ACTIONS === "true"
    ? "/AleshinloyeOlamilekan.github.io"
    : "");
const asset = (path) => `${base}/${path}`;
const navigation = [
  ["about", "About"],
  ["projects", "Projects"],
  ["experience", "Experience"],
  ["contact", "Contact"],
];

function ExternalArrow() {
  return (
    <svg className="external-arrow" aria-hidden="true" viewBox="0 0 16 16" fill="none">
      <path d="M3 13 13 3M3 3h10v10" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ProjectVisual({ project }) {
  if (project.preview)
    return (
      <img
        src={asset(project.preview.src)}
        alt={`${project.title} website preview`}
        loading="lazy"
      />
    );
  return (
    <div className={`project-visual ${project.kind}`} aria-hidden="true">
      {project.kind === "testing" ? (
        <>
          <span>pytest</span>
          <code>
            ROLE × RESOURCE
            <br />✓ ALLOW　× DENY
            <br />✓ TENANT ISOLATION
          </code>
          <small>Permissions, made testable.</small>
        </>
      ) : (
        <>
          <span>LAFIYA</span>
          <svg viewBox="0 0 500 140">
            <path d="M0 70H90L110 55L135 95L160 15L185 125L210 70H290L310 50L330 95L350 25L375 110L400 70H500" />
          </svg>
          <small>HealthTrace 2026 · Winner</small>
        </>
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [contactStatus, setContactStatus] = useState("");
  function contact(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      `Portfolio enquiry from ${data.get("name")}`,
    );
    const body = encodeURIComponent(
      `${data.get("message")}\n\nFrom: ${data.get("name")}\nReply to: ${data.get("email")}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setContactStatus(
      "Your email app will open with your message. Send it there, or email me directly below.",
    );
  }
  return (
    <div className="portfolio">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="portfolio-nav">
        <div className="nav-inner">
          <a
            className="portfolio-logo"
            href="#home"
            aria-label="Olamilekan home"
          >
            <span>AO</span>
            <strong>
              OLAMILEKAN<span>.</span>
            </strong>
          </a>
          <button
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="portfolio-links"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "Close ×" : "Menu ☰"}
          </button>
          <nav
            id="portfolio-links"
            className={menuOpen ? "is-open" : ""}
            aria-label="Primary navigation"
          >
            {navigation.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <main id="main">
        <section className="portfolio-hero" id="home">
          <div className="hero-map" aria-hidden="true" />
          <div className="hero-diagonal" aria-hidden="true" />
          <div className="hero-content">
            <p className="hero-intro">FULL STACK ENGINEER · IBADAN, NIGERIA</p>
            <h1>
              HI, I’M
              <br />
              <span>OLAMILEKAN</span>
            </h1>
            <p className="hero-description">
              Thoughtful interfaces.
              <br />
              Dependable systems.
            </p>
            <div className="hero-actions">
              <a className="portfolio-button" href="#projects">
                Explore my work <ExternalArrow />
              </a>
              <a className="resume-link" href={asset("resume/")}>
                View résumé ↓
              </a>
            </div>
          </div>
          <div className="portrait-frame">
            <img
              src={asset("portrait.webp")}
              alt="Aleshinloye Olamilekan"
              fetchPriority="high"
              width="720"
              height="753"
            />
            <span>ENGINEER. BUILDER. PROBLEM SOLVER.</span>
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to about">
            <span />
          </a>
        </section>
        <section className="overview section-space" id="about">
          <div className="section-inner">
            <p className="section-label">INTRODUCTION</p>
            <h2>Overview.</h2>
            <p className="section-description">{profile.summary}</p>
            <div className="service-grid">
              {capabilities.map((item, i) => (
                <article className="service-card" key={item.title}>
                  <img
                    src={asset(
                      `template/icons/${["frontend", "backend", "prototyping"][i]}.png`,
                    )}
                    alt=""
                    width="58"
                    height="58"
                  />
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          className="toolkit section-space"
          aria-label="Technical skills"
        >
          <div className="section-inner">
            <p className="section-label">THE TOOLS BEHIND THE WORK</p>
            <div className="toolkit-grid">
              {toolkit.map((group) => (
                <div key={group.title}>
                  <h3>{group.title}</h3>
                  <p>{group.items}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="portfolio-projects section-space" id="projects">
          <div className="section-inner">
            <p className="section-label">CASE STUDIES</p>
            <h2>Projects.</h2>
            <p className="section-description">
              Production products, open-source tools, and applied intelligence.
              A selection of the systems I’ve built and the challenges behind
              them.
            </p>
            <div className="project-deck">
              {selectedWork.map((project, i) => (
                <article
                  className={`project-panel ${active === i ? "active" : ""}`}
                  key={project.title}
                >
                  <ProjectVisual project={project} />
                  <button
                    className="project-selector"
                    onClick={() => setActive(i)}
                    aria-expanded={active === i}
                    aria-controls={`project-detail-${i}`}
                  >
                    <span className="project-number">0{i + 1}</span>
                    <span>{project.title}</span>
                    <span aria-hidden="true">{active === i ? "−" : "+"}</span>
                  </button>
                  <div
                    className="project-detail"
                    id={`project-detail-${i}`}
                    hidden={active !== i}
                  >
                    <p className="project-category">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p className="project-stack">{project.stack}</p>
                    <div className="project-links">
                      {project.links?.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label} <ExternalArrow />
                        </a>
                      )) || (
                        <a href={asset("resume/")}>
                          Read about my contribution <ExternalArrow />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="more-work">
              <h3>More web work.</h3>
              <div className="web-work-grid">
                {webWork.map((project) => (
                  <a
                    key={project.title}
                    href={project.preview.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={asset(project.preview.src)}
                      alt={`${project.title} homepage`}
                      loading="lazy"
                      width="1363"
                      height="936"
                    />
                    <p>{project.category}</p>
                    <h4>{project.title} <ExternalArrow /></h4>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="portfolio-experience section-space" id="experience">
          <div className="section-inner">
            <p className="section-label">WHAT I’VE DONE SO FAR</p>
            <h2>Experience.</h2>
            <div className="experience-timeline">
              {experience.map((item, i) => (
                <article key={item.company}>
                  <span className="timeline-dot" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="timeline-date">{item.period}</p>
                  <div className="timeline-card">
                    <h3>{item.title.split(" - ")[0]}</h3>
                    <p className="timeline-company">{item.company}</p>
                    <p>{item.overview}</p>
                  </div>
                </article>
              ))}
            </div>
            <a className="portfolio-button" href={asset("resume/")}>
              Full experience & résumé <ExternalArrow />
            </a>
          </div>
        </section>
        <section className="portfolio-contact section-space" id="contact">
          <div className="section-inner contact-grid">
            <div className="contact-card">
              <p className="section-label">GET IN TOUCH</p>
              <h2>Contact.</h2>
              <form onSubmit={contact}>
                <label>
                  Your name
                  <input
                    name="name"
                    autoComplete="name"
                    placeholder="What’s your name?"
                    required
                    maxLength="100"
                  />
                </label>
                <label>
                  Your email
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="What’s your email?"
                    required
                    maxLength="254"
                  />
                </label>
                <label>
                  Your message
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Tell me about your project."
                    required
                    maxLength="5000"
                  />
                </label>
                <p className="form-note">
                  Opens your email app with a ready-to-send draft.
                </p>
                <button className="portfolio-button" type="submit">
                  Write email <ExternalArrow />
                </button>
                <p role="status" className="form-note">
                  {contactStatus}
                </p>
              </form>
            </div>
            <div className="contact-aside">
              <p className="section-label">LET’S BUILD SOMETHING</p>
              <h3>
                Good ideas.
                <br />
                Solid execution.
              </h3>
              <p>
                Have a product to build, a system to improve, or an engineering
                role in mind? Let’s talk.
              </p>
              <a className="contact-email" href={`mailto:${profile.email}`}>
                {profile.email} <ExternalArrow />
              </a>
              <div className="social-links">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <ExternalArrow />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn <ExternalArrow />
                </a>
                <a
                  href={profile.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X <ExternalArrow />
                </a>
              </div>
              <p className="location">
                Based in Ibadan, Nigeria.
                <br />
                Working remotely, building globally.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="portfolio-footer">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <a href="#home">Back to top ↑</a>
        <span>
          Design adapted from{" "}
          <a
            href="https://github.com/shaqdeff/Portfolio-Template"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shaquille Ndunda
          </a>
        </span>
      </footer>
    </div>
  );
}
