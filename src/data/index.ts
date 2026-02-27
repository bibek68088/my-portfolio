import { Skill, Project, Education, Experience } from "../types";

export const skills: Skill[] = [
  { title: "React / Next.js", progress: 92 },
  { title: "TypeScript", progress: 88 },
  { title: "Node.js / Express", progress: 85 },
  { title: "Tailwind CSS", progress: 95 },
  { title: "PostgreSQL / MongoDB", progress: 80 },
  { title: "UI/UX Design", progress: 78 },
];

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    subtitle: "Full-Stack",
    description:
      "A modern e-commerce solution with real-time inventory, Stripe payments, and an intuitive dashboard.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    link: "#",
    tag: "Next.js + Stripe",
  },
  {
    title: "SaaS Dashboard",
    subtitle: "Frontend",
    description:
      "Data visualization dashboard with interactive charts, dark mode, and real-time analytics.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    link: "#",
    tag: "React + D3",
  },
  {
    title: "Mobile Banking App",
    subtitle: "UI/UX + Dev",
    description:
      "Secure and intuitive mobile banking interface with biometric auth and instant transfers.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    link: "#",
    tag: "React Native",
  },
  {
    title: "AI Content Studio",
    subtitle: "Full-Stack",
    description:
      "AI-powered content generation platform with fine-tuned models, templates, and team collaboration.",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    link: "#",
    tag: "OpenAI + Node",
  },
];

export const educations: Education[] = [
  {
    title: "Bachelor in Computer Application",
    sub: "Tribhuvan University",
    college: "Orchid International College",
    duration: "2020 – 2025",
    desc: "Focused on software engineering, algorithms, and modern web development practices.",
  },
  {
    title: "+2 Science",
    sub: "NEB",
    college: "Kathmandu Model College",
    duration: "2018 – 2020",
    desc: "Physics, Chemistry, Mathematics — laid a strong analytical foundation.",
  },
];

export const experiences: Experience[] = [
  {
    title: "Frontend Developer",
    sub: "SGDG, Nepal",
    duration: "2023 – Present",
    desc: "Building performant React applications, design systems, and collaborating with cross-functional teams.",
  },
  {
    title: "Intern Software Engineer",
    sub: "SGDG, Nepal",
    duration: "2022 – 2023",
    desc: "Delivered 20+ projects for international clients — web apps, landing pages, and custom dashboards.",
  },
];
