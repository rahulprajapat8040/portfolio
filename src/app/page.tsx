import {
  ArrowDown,
  ArrowUpRight,
  GitBranch,
  LineChart,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/projects";
import Image from "next/image";
import { PageProvider } from "./page-provider";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "NestJS",
  "Docker",
  "Git",
  "GitHub Actions",
  "AWS",
  "GCP",
];

const Home = () => {
  return (
    <PageProvider>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-grid bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-310 items-center justify-between px-5 md:px-8">
          <a
            href="#top"
            className="font-display text-xl font-black uppercase tracking-normal"
          >
            Rahul<span className="text-primary">.</span>
          </a>
          <nav
            className="hidden items-center gap-8 text-xs font-semibold md:flex"
            aria-label="Main navigation"
          >
            <a className="nav-link" href="#work">
              My work
            </a>
            <a className="nav-link" href="#about">
              About me
            </a>
            <a className="nav-link" href="#stack">
              Stack
            </a>
          </nav>
          <a className="pill-link" href="#contact">
            Contact
          </a>
        </div>
      </header>

      <section
        id="top"
        className="grid-field relative flex min-h-180 items-center justify-center px-5 pt-16 md:min-h-screen"
      >
        <span className="spark left-[12%] top-[25%]">✦</span>
        <span className="spark right-[13%] top-[37%]">✦</span>
        <span className="spark bottom-[25%] left-[23%]">✦</span>
        <div className="hero-lockup relative z-10 text-center">
          <p className="hero-kicker reveal-up">Hi, I&apos;m Rahul Prajapat</p>
          <h1 className="mt-3 font-display text-[clamp(3.2rem,8vw,7.4rem)] font-black uppercase leading-[0.82] text-primary">
            Software
            <br className="md:hidden" /> Developer
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-base leading-snug text-soft md:text-2xl">
            I build resilient digital products
            <br />
            that scale with ambition
          </p>
        </div>
        <a
          href="#work"
          className="scroll-cue"
          aria-label="Scroll to selected projects"
        >
          <span>
            Recent
            <br />
            Projects
          </span>
          <ArrowDown aria-hidden="true" />
        </a>
      </section>

      <section
        id="about"
        className="border-y border-grid bg-foreground px-5 py-24 text-background md:py-36"
      >
        <div className="mx-auto max-w-280" data-reveal>
          <p className="section-label text-background/60">About / 2026</p>
          <p className="mt-10 max-w-5xl font-display text-[clamp(2.2rem,5.8vw,5.4rem)] font-bold leading-[1.02]">
            Anyone can write code. I engineer systems that stay{" "}
            <span className="text-primary">fast</span>, reliable, and useful
            when the real world gets complicated.
          </p>
          <div className="mt-16 grid gap-8 border-t border-background/25 pt-8 text-background/70 md:grid-cols-3">
            <p className="text-sm leading-relaxed">
              From polished interfaces to production APIs, I think across the
              entire product—not just one layer of the stack.
            </p>
            <p className="text-sm leading-relaxed">
              My work balances thoughtful architecture, maintainable code,
              delivery speed, and measurable user value.
            </p>
            <p className="text-sm leading-relaxed">
              Currently focused on modern web platforms, cloud infrastructure,
              and developer tooling.
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-310">
          <div
            className="mb-14 flex items-end justify-between border-b border-border pb-7 md:mb-20"
            data-reveal
          >
            <div>
              <p className="section-label">Selected portfolio</p>
              <h2 className="mt-3 font-display text-5xl font-black uppercase md:text-8xl">
                Projects
              </h2>
            </div>
            <span className="hidden text-sm text-muted-foreground md:block">
              Concept case studies · 2026
            </span>
          </div>
          <div className="space-y-28 md:space-y-40">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="project-grid group"
                data-reveal
              >
                <div
                  className={`project-image ${index % 2 ? "md:order-2" : ""}`}
                >
                  <Image
                    data-parallax
                    src={project.image}
                    alt={`${project.title} software interface mockup`}
                    loading="lazy"
                    width={1408}
                    height={1056}
                  />
                  <span className="project-number">{project.number}</span>
                </div>
                <div className="flex flex-col justify-between border-t border-border pt-5 md:py-5">
                  <div className="flex items-start justify-between gap-4 text-xs uppercase text-muted-foreground">
                    <span>{project.type}</span>
                    <Link
                      href="/projects/$slug"
                      aria-label={`View ${project.title} case study`}
                    >
                      <ArrowUpRight className="h-5 w-5 text-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </div>
                  <div className="mt-16 md:mt-0">
                    <p className="mb-3 font-mono text-xs text-primary">
                      {project.tools}
                    </p>
                    <h3 className="font-display text-5xl font-black md:text-7xl">
                      <Link
                        className="project-title-link"
                        href="/projects/$slug"
                      >
                        {project.title}
                      </Link>
                    </h3>
                    <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="bg-primary py-4 text-primary-foreground">
        <div
          className="marquee-track"
          aria-label={`Technology stack: ${skills.join(", ")}`}
        >
          {[...skills, ...skills].map((skill, index) => (
            <span
              key={`${skill}-${index}`}
              className="flex items-center gap-6 font-display text-2xl font-black uppercase md:text-4xl"
            >
              {skill}
              <b className="text-foreground">✦</b>
            </span>
          ))}
        </div>
      </section>

      <section className="bg-foreground px-5 py-24 text-background md:px-8 md:py-36">
        <div className="mx-auto max-w-310">
          <p className="section-label text-background/55">Capabilities</p>
          <div
            className="mt-10 divide-y divide-background/20 border-y border-background/20"
            data-stagger
          >
            {[
              ["01", "Frontend", "React · Next.js · TypeScript · Tailwind CSS"],
              ["02", "Backend", "NestJS · Node.js · Socket.IO · REST APIs"],
              ["03", "Data", "PostgreSQL · MySQL · Prisma · Sequelize"],
              ["04", "Cloud", "Docker · GitHub Actions · AWS · GCP"],
            ].map(([number, title, copy]) => (
              <div key={number} className="capability-row">
                <span className="font-mono text-xs text-primary">{number}</span>
                <h3 className="font-display text-3xl font-black uppercase md:text-6xl">
                  {title}
                </h3>
                <p className="max-w-sm text-sm leading-relaxed text-background/60 md:text-base">
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="grid-field-light px-5 py-28 md:px-8 md:py-44"
      >
        <div className="mx-auto max-w-310 text-center" data-reveal>
          <p className="section-label">Have something ambitious in mind?</p>
          <h2 className="mx-auto mt-7 max-w-5xl font-display text-[clamp(3rem,8vw,7.5rem)] font-black uppercase leading-[0.86]">
            Let&apos;s build
            <br />
            <span className="text-primary">what&apos;s next.</span>
          </h2>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <a className="contact-link" href="mailto:hello@rahulprajapat.dev">
              <Mail /> Email me
            </a>
            <a
              className="contact-link"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <GitBranch /> GitHub
            </a>
            <a
              className="contact-link"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <LineChart /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-5 py-7 md:px-8">
        <div className="mx-auto flex max-w-310 flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Rahul Prajapat</span>
          <span>Software developer · India</span>
        </div>
      </footer>
    </PageProvider>
  );
};

export default Home;
