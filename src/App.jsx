import { useState, useEffect, useRef } from "react";
import "./index.css";
import "./App.css";

const skills = [
  { cat: "Backend", items: ["C#", "ASP.NET Core MVC", "ASP.NET Core API", "OData", "GraphQL"] },
  { cat: "Frontend", items: ["React", "HTML5", "CSS3", "jQuery", "Kendo UI"] },
  { cat: "Cloud & DB", items: ["Azure Functions", "Azure Storage", "Azure Service Bus", "Cosmos DB", "MS SQL", "PostgreSQL"] },
  { cat: "Tools", items: ["Visual Studio 2022", "pgAdmin", "Git", "SFMC", "MSAL"] },
];

const experiences = [
  {
    company: "Accenture",
    location: "Noida",
    role: "Application Lead",
    period: "Dec 2024 – Present",
    projects: [
      {
        title: "Cx-IB LUSA",
        duration: "Oct 2025 – Present",
        tech: ["C#", "ASP.NET Core 8", "Cosmos DB", "Azure Functions", "Azure Storage", "Azure Service Bus", "React", "Git"],
        desc: "Blueprint-driven React application for campaign briefing and request management with multi-step draftable forms, MSAL authentication, and backend blueprint integrations.",
        highlights: [
          "Dynamic multi-page form engine driven by server-side blueprints with visibility rules & Excel prefill",
          "Native intake flow with draft save, replicate/edit modes, and final submission handling",
          "Mockup validation & replication service with polling and UI gating",
          "Role-based Private Route components with MSAL auth wrapper",
        ],
      },
      {
        title: "CxLab-Wizard",
        duration: "Dec 2024 – Oct 2025",
        tech: ["C#", "Azure Functions", "Azure Storage", "Azure Service Bus", "React", "SFMC", "Git"],
        desc: "Powerful tool to simplify user journey creation within Salesforce Marketing Cloud (SFMC), empowering healthcare marketers to build journeys without technical barriers.",
        highlights: [
          "Code refactoring and SonarQube issue remediation",
          "New module implementation per functional specifications",
          "Sprint planning and user story decomposition",
        ],
      },
    ],
  },
  {
    company: "Sopra Steria",
    location: "Noida",
    role: "Module Lead",
    period: "~2022 – 2024",
    projects: [
      {
        title: "E2E Quality Gate Tool",
        tech: ["ASP.NET Core", "MVC", "Kendo UI", "jQuery", "MS SQL"],
        desc: "Quality Management System for Airbus ensuring deliverable maturity across civil programs' serial production business processes.",
        highlights: ["Sprint planning & user story delivery", "New module implementation", "Defect resolution & feature additions"],
      },
      {
        title: "RFQ (Request For Quotation)",
        tech: ["ASP.NET Core", "MVC", "Kendo UI", "jQuery", "PostgreSQL"],
        desc: "Accelerated procurement tool where part numbers and volumes are provided to multiple suppliers for rapid selection within hours or days.",
        highlights: ["Full-stack development with Kendo UI", "PostgreSQL schema design & queries", "Module maintenance & enhancements"],
      },
      {
        title: "iMade Tool",
        tech: ["ASP.NET Core API", "ReactJS", "jQuery", "PostgreSQL"],
        desc: "Drawing set modification management system with ticket tracking for deliverable modifications across engineering workflows.",
        highlights: ["ASP.NET Core API backend development", "ReactJS frontend implementation", "PostgreSQL integration"],
      },
    ],
  },
  {
    company: "Chetu India",
    location: "Noida",
    role: "Software Developer",
    period: "~2018 – 2022",
    projects: [
      {
        title: "HealthcareInnovations-HLTR",
        tech: ["C#", ".NET Core 3.1", "SQL Server", "Entity Framework"],
        desc: "Healthcare web app with modules for medical diagnosis, nursing diagnosis, patient creation, appointments, and nurse care plans.",
        highlights: ["Stripe Payment Gateway integration", "Role/permission-based authorization", "jQuery FullCalendar for scheduling"],
      },
      {
        title: "JPMedGuide",
        tech: ["C#", ".NET Core 3.1", "SQL Server", "LINQ"],
        desc: "Medical guide web app with patient creation, appointment scheduling, and invoice management.",
        highlights: ["Role-based authorization system", "jQuery FullCalendar scheduling", "Entity Framework & LINQ"],
      },
      {
        title: "COVID-19 Patient Report",
        tech: ["C#", "ASP.NET", "ADO.NET", "SQL Server"],
        desc: "Dashboard managing daily active, recovered, and deceased Covid-19 patients with country and India state-wise breakdowns.",
        highlights: ["Health Ministry Covid-19 API integration", "Country & state-wise data dashboard"],
      },
    ],
  },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <span className="nav-logo">NK<span className="dot">.</span></span>
      <div className="nav-links">
        {["About", "Skills", "Experience", "Contact"].map(s => (
          <a key={s} href={`#${s.toLowerCase()}`}>{s}</a>
        ))}
      </div>
    </nav>
  );
}

function Hero() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 600);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="hero" id="about">
      <div className="hero-grid-bg" />
      <div className="hero-noise" />
      <div className="hero-content">
        <div className="hero-label">
          <span className="dot-pulse" />
          Available for opportunities
        </div>
        <h1 className="hero-name">
          <span className="hero-name-line1">Neeraj</span>
          <span className="hero-name-line2">Kumar</span>
        </h1>
        <div className="hero-title">
          <span className="bracket">&lt;</span>
          .NET Full Stack Developer
          <span className="bracket">/&gt;</span>
          <span className={`cursor ${tick % 2 === 0 ? "on" : ""}`}>_</span>
        </div>
        <p className="hero-bio">
          7+ years crafting enterprise-grade web applications — from Airbus quality systems
          to Azure-powered healthcare platforms. Currently leading modules at{" "}
          <span className="highlight">Accenture</span>.
        </p>
        <div className="hero-stats">
          <div className="stat"><span className="stat-num">7+</span><span className="stat-label">Years Exp</span></div>
          <div className="stat-divider" />
          <div className="stat"><span className="stat-num">9</span><span className="stat-label">Projects</span></div>
          <div className="stat-divider" />
          <div className="stat"><span className="stat-num">3</span><span className="stat-label">Companies</span></div>
        </div>
        <div className="hero-cta">
          <a href="#experience" className="btn-primary">View Work</a>
          <a href="mailto:nspatwan@gmail.com" className="btn-ghost">Hire Me</a>
        </div>
      </div>
      <div className="hero-decoration">
        <div className="deco-ring ring1" />
        <div className="deco-ring ring2" />
        <div className="deco-ring ring3" />
        <div className="deco-tag tag1">{"{ C# }"}</div>
        <div className="deco-tag tag2">{"[ React ]"}</div>
        <div className="deco-tag tag3">{"// Azure"}</div>
        <div className="deco-tag tag4">{"<API />"}</div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-header">
        <span className="section-num">01</span>
        <h2 className="section-title">Technical Stack</h2>
      </div>
      <div className="skills-grid">
        {skills.map(({ cat, items }) => (
          <div key={cat} className="skill-card">
            <div className="skill-card-header">{cat}</div>
            <div className="skill-pills">
              {items.map(item => <span key={item} className="skill-pill">{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`project-card ${open ? "open" : ""}`}>
      <div className="project-card-top" onClick={() => setOpen(!open)}>
        <div>
          <div className="project-title">{project.title}</div>
          {project.duration && <div className="project-duration">{project.duration}</div>}
        </div>
        <span className="project-toggle">{open ? "−" : "+"}</span>
      </div>
      <div className="tech-tags">
        {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
      </div>
      {open && (
        <div className="project-details">
          <p className="project-desc">{project.desc}</p>
          <ul className="project-highlights">
            {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-header">
        <span className="section-num">02</span>
        <h2 className="section-title">Experience</h2>
      </div>
      <div className="exp-timeline">
        {experiences.map((exp, i) => (
          <div key={i} className="exp-block">
            <div className="exp-company-row">
              <div>
                <div className="exp-company">{exp.company}</div>
                <div className="exp-role">{exp.role} · {exp.location}</div>
              </div>
              <div className="exp-period">{exp.period}</div>
            </div>
            <div className="exp-projects">
              {exp.projects.map((p, j) => <ProjectCard key={j} project={p} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-header">
        <span className="section-num">03</span>
        <h2 className="section-title">Contact</h2>
      </div>
      <div className="contact-box">
        <p className="contact-tagline">Let's build something great together.</p>
        <div className="contact-links">
          <a href="mailto:nspatwan@gmail.com" className="contact-item">
            <span className="contact-icon">✉</span>
            <span>nspatwan@gmail.com</span>
          </a>
          <a href="tel:+918810596628" className="contact-item">
            <span className="contact-icon">✆</span>
            <span>+91 88105 96628</span>
          </a>
        </div>
      </div>
      <footer className="footer">
        <span>© 2025 Neeraj Kumar</span>
        <span className="footer-stack">Built with React + Vite · Hosted on Netlify</span>
      </footer>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}
