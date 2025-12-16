import { motion } from "framer-motion";
import { skills } from "../data";
import { Skill } from "../types";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container px-5 mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm text-yellow-400 font-semibold tracking-wide uppercase mb-2">
            Expertise
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h1>
          <p className="lg:w-2/3 mx-auto text-lg text-gray-600 dark:text-gray-300">
            I continuously learn and adapt to new technologies to deliver
            cutting-edge solutions that meet modern web standards.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill: Skill, index: number) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            >
              <div className="flex justify-between mb-3">
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  {skill.title}
                </span>
                <span className="text-sm font-medium text-yellow-400">
                  {skill.progress}
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="bg-yellow-400 h-3 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.progress }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
