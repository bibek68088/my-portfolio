import { motion } from "framer-motion";
import { projects } from "../data";
import { Project } from "../types";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container px-5 mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm text-yellow-400 font-semibold tracking-wide uppercase mb-2">
            Portfolio
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Recent Projects
          </h1>
          <p className="lg:w-2/3 mx-auto text-lg text-gray-600 dark:text-gray-300">
            Here are some of my recent works that showcase my skills in web
            development, design, and problem-solving.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project: Project, index: number) => (
            <motion.a
              href={project.link}
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                alt={project.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                src={project.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h2 className="text-sm font-semibold text-yellow-400 mb-2">
                  {project.subtitle}
                </h2>
                <h1 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h1>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
