import { useEffect, useLayoutEffect, useState } from "react";
import "./App.css";

const links = [
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/qaaedusaim/",
    icon: "linkedin",
  },
  { label: "email", href: "mailto:mohamedqxxed@gmail.com", icon: "email" },
  { label: "github", href: "https://github.com/Qaaed", icon: "github" },
];

function GitHubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="link-icon">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18a2.65 2.65 0 0 0-1.1-1.45c-.91-.62.06-.6.06-.6a2.1 2.1 0 0 1 1.53 1.02 2.13 2.13 0 0 0 2.9.83 2.13 2.13 0 0 1 .63-1.34c-2.22-.25-4.55-1.11-4.55-4.94a3.87 3.87 0 0 1 1.03-2.68 3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.48 9.48 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.38.1 2.64a3.86 3.86 0 0 1 1.03 2.68c0 3.84-2.34 4.68-4.56 4.93a2.39 2.39 0 0 1 .68 1.86v2.76c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="link-icon">
      <path d="M5 8.5h3.2V19H5V8.5Z" />
      <path d="M6.6 3.8a1.85 1.85 0 1 1 0 3.7 1.85 1.85 0 0 1 0-3.7Z" />
      <path d="M10.2 8.5h3.05v1.43h.04a3.35 3.35 0 0 1 3.02-1.66c3.23 0 3.83 2.13 3.83 4.9V19h-3.18v-5.16c0-1.23-.02-2.82-1.72-2.82-1.72 0-1.98 1.34-1.98 2.73V19H10.2V8.5Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="mail-icon">
      <path d="M4 6h16v12H4V6Z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="arrow-icon">
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

const work = [
  {
    year: "2026",
    title: "keystroke latency tracker",
    detail: "calculates flight time and dwell time between each keyboard click",
    href: "https://github.com/Qaaed/keystroke-latency-diagnostics",
  },
  {
    year: "2025",
    title: "cloudshare rest api",
    detail:
      "asynchronous REST API and Streamlit frontend for cloud media sharing. ",
    href: "https://github.com/Qaaed/CloudShare-REST-API",
  },
  {
    year: "2025",
    title: "aphasia simulation",
    detail:
      "aphasia simulation to simulate broca's and wernicke's aphasia for a project",
    href: "https://github.com/Qaaed/patient_aphasia_simulation",
  },
  {
    year: "2026",
    title: "football stats",
    detail: "live football match statistics data pipeline",
    href: "https://github.com/Qaaed/choreo-football-proxy",
  },
];

const experience = [
  {
    period: "Jun 2026 - Present",
    role: "Software Engineering Intern",
    company: "WSO2",
    companyUrl: "https://wso2.com/",
    detail:
      "Starting June 1, 2026, contributing to software engineering work at WSO2.",
  },
];

const techStack = [
  {
    group: "frontend",
    items: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Streamlit",
      "Tailwind CSS",
      "CSS",
      "HTML",
    ],
  },
  {
    group: "backend",
    items: [
      "Node.js",
      "Express.js",
      "Python",
      "Java",
      "FastAPI",
      "SQLAlchemy",
      "SQLite",
    ],
  },
  {
    group: "database & auth",
    items: [
      "Supabase",
      "Firebase",
      "MongoDB",
      "MongoDB Atlas",
      "MySQL",
      "PostgreSQL",
      "Neon Database",
      "Asgardeo by WSO2",
    ],
  },
  {
    group: "platform & tools",
    items: [
      "Git",
      "GitHub",
      "CI/CD Pipelines",
      "Netlify",
      "Vercel",
      "Hugging Face",
      "Choreo",
      "WSO2 API Manager",
    ],
  },
];

const highlightedTech = new Set([
  "React.js",
  "FastAPI",
  "PostgreSQL",
  "Supabase",
  "Git",
  "GitHub",
  "Vercel",
]);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "black"
      : "white";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`,
      );
    }

    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.scrollTo(0, 0);
      setIsLoading(false);
    }, 1300);

    return () => window.clearTimeout(timer);
  }, []);

  const nextTheme = theme === "black" ? "white" : "black";

  return (
    <>
      <div
        className={`loader${isLoading ? "" : " is-hidden"}`}
        aria-hidden={!isLoading}
      >
        <div className="loader-mark" role="status" aria-live="polite">
          <span>Qaaed Usaim</span>
          <div className="loader-track">
            <span />
          </div>
        </div>
      </div>

      <main className="site">
        <header className="topbar" aria-label="Site header">
          <a href="#home" className="wordmark">
            Qaaed Usaim
          </a>
          <div className="header-actions">
            <nav className="nav" aria-label="Main navigation">
              <a href="#work">work</a>
              <a href="#experience">experience</a>
              <a href="#tech-stack">stack</a>
              <a href="#contact">contact</a>
            </nav>
            <button
              className="theme-toggle"
              type="button"
              onClick={() => setTheme(nextTheme)}
              aria-label={`Switch to ${nextTheme} mode`}
            >
              {theme === "black" ? (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="theme-icon"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="theme-icon"
                >
                  <path d="M20.5 14.4A7.2 7.2 0 0 1 9.6 3.5 8.7 8.7 0 1 0 20.5 14.4Z" />
                </svg>
              )}
            </button>
          </div>
        </header>

        <section className="hero" id="home">
          <p className="muted">software engineer based in sri lanka</p>
          <h1>one prompt a day keeps the unemployment away</h1>
          <p className="summary">
            I like to build projects which help me personally and sound cool,
            alongside that i've recently started trying to contribute to open
            source projects.
          </p>
        </section>

      <section className="section" id="work" aria-labelledby="work-heading">
        <h2 id="work-heading">selected work</h2>
        <div className="work-list">
          {work.map((item) => (
            <a
              className="work-item"
              href={item.href}
              key={item.title}
              target="_blank"
              rel="noreferrer"
            >
              <span>{item.year}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
              <ArrowIcon />
            </a>
          ))}
        </div>
      </section>

      <section
        className="section"
        id="experience"
        aria-labelledby="experience-heading"
      >
        <h2 id="experience-heading">experience</h2>
        <div className="experience-list">
          {experience.map((item) => (
            <article
              className="experience-item"
              key={`${item.role}-${item.company}`}
            >
              <span>{item.period}</span>
              <div>
                <h3>
                  {item.role}
                  <small>
                    <a href={item.companyUrl} target="_blank" rel="noreferrer">
                      {item.company}
                    </a>
                  </small>
                </h3>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="section stack-section"
        id="tech-stack"
        aria-labelledby="tech-stack-heading"
      >
        <h2 id="tech-stack-heading">tech stack</h2>
        <div className="stack-groups" aria-label="Technologies">
          {techStack.map((stack) => (
            <div className="stack-group" key={stack.group}>
              <h3>{stack.group}</h3>
              <ul>
                {stack.items.map((item) => (
                  <li
                    className={
                      highlightedTech.has(item) ? "is-highlighted" : undefined
                    }
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

        <section
          className="section contact"
          id="contact"
          aria-labelledby="contact-heading"
        >
          <h2 id="contact-heading">contact</h2>
          <div className="links">
            {links.map((link) => (
              <a
                href={link.href}
                key={link.label}
                target="_blank"
                rel="noreferrer"
              >
                {link.icon === "linkedin" && <LinkedInIcon />}
                {link.icon === "email" && <EmailIcon />}
                {link.icon === "github" && <GitHubIcon />}
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
