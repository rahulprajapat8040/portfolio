export type Project = {
  slug: string;
  title: string;
  type: string;
  tools: string;
  description: string;
  image: string;
  number: string;
  year: string;
  role: string;
  challenge: string;
  solution: string;
  outcome: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    slug: "cloudpulse",
    title: "CloudPulse",
    type: "Full-stack engineering",
    tools: "React · NestJS · AWS",
    description:
      "A real-time observability workspace built to turn complex infrastructure signals into clear, actionable decisions.",
    image: "/assets/project-cloud.jpg",
    number: "01",
    year: "2026",
    role: "Lead full-stack developer",
    challenge:
      "Engineering teams were switching between disconnected monitoring tools, slowing down incident response and obscuring the health of critical services.",
    solution:
      "I designed a unified event pipeline and a responsive dashboard that prioritizes anomalies, service dependencies, and the context needed to act quickly.",
    outcome:
      "The concept reduced the path from signal to diagnosis, created a shared operational view, and established a scalable foundation for new data sources.",
    technologies: [
      "React",
      "TypeScript",
      "NestJS",
      "Socket.IO",
      "PostgreSQL",
      "Prisma",
      "AWS",
      "Docker",
    ],
  },
  {
    slug: "deployflow",
    title: "DeployFlow",
    type: "Developer experience",
    tools: "Node.js · Docker · GitHub Actions",
    description:
      "A unified delivery dashboard that makes releases faster, safer, and easier for distributed engineering teams.",
    image: "/assets/project-devops.jpg",
    number: "02",
    year: "2026",
    role: "Platform engineer",
    challenge:
      "Release status lived across CI logs, chat messages, and cloud consoles, making failed deployments difficult to understand and recover.",
    solution:
      "I built a release control plane with live pipeline events, environment history, approval gates, and a consistent rollback workflow.",
    outcome:
      "The workflow made delivery status visible to the whole team and helped developers move from a failed step to a clear recovery action faster.",
    technologies: [
      "Next.js",
      "Node.js",
      "Socket.IO",
      "MySQL",
      "Sequelize",
      "Docker",
      "GitHub Actions",
      "GCP",
    ],
  },
  {
    slug: "commercecore",
    title: "CommerceCore",
    type: "Platform engineering",
    tools: "Next.js · TypeScript · GCP",
    description:
      "A cloud-native commerce platform designed around performance, resilience, and an effortless customer experience.",
    image: "/assets/project-platform.jpg",
    number: "03",
    year: "2026",
    role: "Full-stack developer",
    challenge:
      "A growing catalog and fragmented services caused slow pages, inconsistent inventory, and a checkout flow that was difficult to evolve safely.",
    solution:
      "I shaped a modular storefront and service architecture with typed contracts, cache-aware data access, and automated delivery across environments.",
    outcome:
      "The concept improved perceived speed, simplified feature delivery, and gave product teams a stronger base for experimentation and growth.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "GCP",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
