import { motion } from "framer-motion";
import { educations, experiences } from "../data";
import { Education, Experience } from "../types";

const Resume = () => {
  return (
    <section
      id="resume"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container px-5 mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm text-yellow-400 font-semibold tracking-wide uppercase mb-2">
            Background
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Journey
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I believe in continuous learning and growth. Every experience has
            shaped my approach to design and development.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Education
            </h2>
            <div className="space-y-8">
              {educations.map((education: Education, index: number) => (
                <motion.div
                  key={index}
                  className="relative pl-8 border-l-2 border-yellow-400"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <div className="absolute w-4 h-4 bg-yellow-400 rounded-full -left-[9px] top-2" />
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-colors duration-300">
                    <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {education.title}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {education.duration}
                      </span>
                    </div>
                    <p className="text-yellow-400 font-medium mb-3">
                      {education.sub}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {education.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((experience: Experience, index: number) => (
                <motion.div
                  key={index}
                  className="relative pl-8 border-l-2 border-yellow-400"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <div className="absolute w-4 h-4 bg-yellow-400 rounded-full -left-[9px] top-2" />
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-colors duration-300">
                    <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {experience.title}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {experience.duration}
                      </span>
                    </div>
                    <p className="text-yellow-400 font-medium mb-3">
                      {experience.sub}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {experience.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
