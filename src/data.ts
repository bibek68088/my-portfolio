import { Project, Skill, Education, Experience, Testimonial } from "./types";

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    subtitle: "React & Node.js",
    description:
      "A full-stack e-commerce solution with payment integration and admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    link: "#",
  },
  {
    title: "Task Management App",
    subtitle: "React & Firebase",
    description:
      "Real-time collaborative task management with drag-and-drop functionality.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    link: "#",
  },
  {
    title: "Portfolio Website",
    subtitle: "Next.js & Tailwind",
    description:
      "Modern portfolio with animations, dark mode, and content management.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    link: "#",
  },
  {
    title: "Social Media Dashboard",
    subtitle: "React & Chart.js",
    description:
      "Analytics dashboard with data visualization and reporting features.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    link: "#",
  },
];

export const skills: Skill[] = [
  { title: "React / Next.js", progress: "90%" },
  { title: "TypeScript", progress: "85%" },
  { title: "Node.js / Express", progress: "80%" },
  { title: "Tailwind CSS", progress: "90%" },
  { title: "MongoDB / PostgreSQL", progress: "75%" },
  { title: "Git / GitHub", progress: "85%" },
];

export const educations: Education[] = [
  {
    title: "Bachelor in Computer Application",
    sub: "Tribhuvan University",
    college: "Orchid International College",
    duration: "2020 - 2025",
    desc: "Focused on software engineering, web technologies, and database management systems.",
  },
  {
    title: "High School",
    sub: "Secondary Education Board",
    college: "NASA International School",
    duration: "2017 - 2019",
    desc: "Completed with distinction in Science stream, focusing on Mathematics and Computer Science.",
  },
];

export const experiences: Experience[] = [
  {
    title: "Full Stack Developer",
    sub: "Tech Solutions Pvt. Ltd.",
    duration: "2025 - Present",
    desc: "Developing and maintaining web applications using React, Node.js, and PostgreSQL. Led a team of 3 developers on multiple projects.",
  },
  {
    title: "Frontend Developer Intern",
    sub: "SG Design Nepal",
    duration: "2024- 2025",
    desc: "Created responsive websites and collaborated with designers to implement user-friendly interfaces.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Bibek delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise made our project a huge success.",
    name: "John Smith",
    company: "CEO, TechStart Inc.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
  },
  {
    quote:
      "Working with Bibek was a pleasure. He understood our requirements perfectly and delivered a beautiful, functional website ahead of schedule.",
    name: "Sarah Johnson",
    company: "Marketing Director, Creative Co.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
  {
    quote:
      "His problem-solving skills and dedication to quality code are outstanding. I highly recommend Bibek for any web development project.",
    name: "Michael Chen",
    company: "CTO, Innovation Labs",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
  },
];
