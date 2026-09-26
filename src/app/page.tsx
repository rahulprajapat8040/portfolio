"use client";
import {
  ArrowDown,
  ArrowUpRight,
  GitBranch,
  Link2,
  Mail,
  Phone,
} from "lucide-react";
import { useRef } from "react";
import { useGsapReveal } from "../hooks/use-gsap-reveal";
import { projects } from "../lib/projects";
import Link from "next/link";
import { HeroNetwork } from "@/components/common/hero-network";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "Redis",
  "Socket.IO",
  "BullMQ",
  "Firebase",
  "Docker",
  "Git",
  "AWS",
];

const experience = [
  {
    period: "Oct 2024 — Present",
    role: "Junior Full-Stack Developer",
    company: "iWebwiser Pvt. Ltd.",
    location: "Bikaner, Rajasthan",
    summary:
      "Shipping production features across school transport and multi-market food platforms, from responsive interfaces and admin workflows to APIs, data, jobs, and real-time notifications.",
    stack:
      "React.js · Next.js · NestJS · PostgreSQL · BullMQ · Redis · Socket.IO",
  },
  {
    period: "Feb 2024 — Aug 2024",
    role: "Full-Stack Developer Intern",
    company: "UniquePact",
    location: "Jaipur, Rajasthan",
    summary:
      "Completed a six-month full-stack internship focused on application development, REST APIs, database design, debugging, and responsive hospitality website delivery and maintenance.",
    stack: "JavaScript · REST APIs · Database design · WordPress",
  },
];

const Portfolio = () => {
  const pageRef = useRef<HTMLElement>(null);
  useGsapReveal(pageRef);

  return (
    <main
      ref={pageRef}
      className="overflow-hidden bg-background text-foreground"
    >
      <header className="fixed inset-x-0 top-0 z-50 border-b border-grid bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-310 items-center justify-between px-5 md:px-8">
          <a
            href="#top"
            className="font-display text-xl font-black uppercase tracking-normal"
            data-cursor="TOP"
          >
            Rahul<span className="text-primary">.</span>
          </a>
          <nav
            className="hidden items-center gap-8 text-xs font-semibold md:flex"
            aria-label="Main navigation"
          >
            <a className="nav-link" href="#experience">
              Experience
            </a>
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
          <a className="pill-link" href="#contact" data-cursor="HELLO">
            Contact
          </a>
        </div>
      </header>

      <section
        id="top"
        className="grid-field relative flex min-h-180 items-center justify-center px-5 pt-16 md:min-h-screen"
      >
        <HeroNetwork />
        <div className="hero-vignette" aria-hidden="true" />
        <div className="hero-lockup relative z-10 text-center">
          <p className="hero-kicker" data-hero-detail>
            Rahul Prajapat
          </p>
          <h1 className="mt-3 font-display text-[clamp(3.2rem,8vw,7.4rem)] font-black uppercase leading-[0.82] text-primary">
            <span className="block overflow-hidden">
              <span className="block" data-hero-line>
                Full-Stack
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="block" data-hero-line>
                Developer
              </span>
            </span>
          </h1>
          <p
            className="mx-auto mt-6 max-w-xl text-base leading-snug text-soft md:text-xl"
            data-hero-detail
          >
            Building production platforms with thoughtful interfaces,
            <br className="hidden sm:block" /> dependable APIs, and real-time
            systems.
          </p>
        </div>
        <a
          href="#work"
          className="scroll-cue"
          aria-label="Scroll to selected projects"
          data-cursor="SCROLL"
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
        <div className="mx-auto max-w-[1120px]" data-reveal>
          <p className="section-label text-background/60">
            Profile / Full stack
          </p>
          <p className="mt-10 max-w-5xl font-display text-[clamp(2.2rem,5.8vw,5.4rem)] font-bold leading-[1.02]">
            I turn complex operations into software that feels{" "}
            <span className="text-primary">clear</span>, responsive, and
            dependable in the real world.
          </p>
          <div className="mt-16 grid gap-8 border-t border-background/25 pt-8 text-background/70 md:grid-cols-3">
            <p className="text-sm leading-relaxed">
              1+ year of professional experience building production web
              applications with React.js, Next.js, Node.js, NestJS, TypeScript,
              and PostgreSQL.
            </p>
            <p className="text-sm leading-relaxed">
              Experienced with REST APIs, admin dashboards, BullMQ and Redis
              jobs, and real-time features using Socket.IO and Firebase.
            </p>
            <p className="text-sm leading-relaxed">
              Currently delivering school transport and multi-market food
              marketplace products at iWebwiser in Bikaner.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1240px]">
          <div
            className="mb-14 flex items-end justify-between border-b border-border pb-7"
            data-reveal
          >
            <div>
              <p className="section-label">Professional journey</p>
              <h2 className="mt-3 font-display text-5xl font-black uppercase md:text-8xl">
                Experience
              </h2>
            </div>
            <span className="hidden text-sm text-muted-foreground md:block">
              2024 — Present
            </span>
          </div>
          <div className="experience-timeline relative" data-timeline>
            <span
              className="timeline-line"
              data-timeline-line
              aria-hidden="true"
            />
            {experience.map((item, index) => (
              <article
                key={item.company}
                className="experience-entry"
                data-reveal
              >
                <span className="timeline-marker" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-mono text-xs text-primary">
                    {item.period}
                  </p>
                  <h3 className="mt-4 font-display text-3xl font-black uppercase md:text-6xl">
                    {item.role}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-x-3 text-sm text-soft">
                    <strong className="text-foreground">{item.company}</strong>
                    <span>·</span>
                    <span>{item.location}</span>
                  </div>
                  <p className="mt-7 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                    {item.summary}
                  </p>
                  <p className="mt-5 font-mono text-xs leading-relaxed text-muted-foreground">
                    {item.stack}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1240px]">
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
              Production work · 2024—Present
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
                  <img
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
                      data-cursor="VIEW"
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
                        data-cursor="VIEW"
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
        <div className="mx-auto max-w-[1240px]">
          <p className="section-label text-background/55">Capabilities</p>
          <div
            className="mt-10 divide-y divide-background/20 border-y border-background/20"
            data-stagger
          >
            {[
              ["01", "Frontend", "React · Next.js · TypeScript · Tailwind CSS"],
              ["02", "Backend", "NestJS · Node.js · REST APIs · Socket.IO"],
              [
                "03",
                "Data & jobs",
                "PostgreSQL · MySQL · Redis · Prisma · Sequelize · BullMQ",
              ],
              [
                "04",
                "Delivery",
                "Git · GitHub · Docker · VPS Hosting · AWS · Firebase",
              ],
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
        <div className="mx-auto max-w-[1240px] text-center" data-reveal>
          <p className="section-label">Have something ambitious in mind?</p>
          <h2 className="mx-auto mt-7 max-w-5xl font-display text-[clamp(3rem,8vw,7.5rem)] font-black uppercase leading-[0.86]">
            Let&apos;s build
            <br />
            <span className="text-primary">what&apos;s next.</span>
          </h2>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <a className="contact-link" href="mailto:rahulkp7272@gmail.com">
              <Mail /> Email me
            </a>
            <a className="contact-link" href="tel:+919785759074">
              <Phone /> Call me
            </a>
            <a
              className="contact-link"
              href="https://github.com/rahulprajapat8040"
              target="_blank"
              rel="noreferrer"
            >
              <GitBranch /> GitHub
            </a>
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/rahul-prajapat8040"
              target="_blank"
              rel="noreferrer"
            >
              <Link2 /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-5 py-7 md:px-8">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Rahul Prajapat</span>
          <span>Full-stack developer · Bikaner, Rajasthan</span>
        </div>
      </footer>
    </main>
  );
};

export default Portfolio;
