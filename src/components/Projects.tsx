import { motion } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";
import { projects } from "../data";
import type { Project } from "../types";
import SectionHeader from "./SectionHeader";

const Projects = () => {
  return (
    <section id="projects" className="relative py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Portfolio"
          title="Selected Work"
          desc="A curated selection of projects that demonstrate my range across design, engineering, and product thinking."
        />

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {projects.map((project: Project, i: number) => (
            <motion.a
              href={project.link}
              key={i}
              className="group project-card rounded-3xl overflow-hidden relative"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.7, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold glass-tag text-amber-400">
                    {project.tag}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 project-card-body">
                <div className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-2">
                  {project.subtitle}
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.description}
                </p>
                <motion.div
                  className="mt-4 flex items-center gap-2 text-amber-400 text-sm font-semibold"
                  whileHover={{ x: 5 }}
                >
                  View Project <IconArrowRight size={16} />
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
