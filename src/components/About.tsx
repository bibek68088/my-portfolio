import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="pt-24 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
        <motion.div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-5xl md:text-6xl mb-6 font-bold text-gray-900 dark:text-white leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hi, I'm <span className="text-yellow-400">Bibek</span>.
            <br className="hidden lg:inline-block" />I craft exceptional digital
            experiences.
          </motion.h1>
          <motion.p
            className="mb-8 leading-relaxed text-lg text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            I'm a full-stack developer with a passion for creating beautiful,
            functional websites and applications. With expertise in modern web
            technologies, I transform ideas into robust digital solutions that
            deliver real value to users and businesses.
          </motion.p>
          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center bg-yellow-400 text-gray-900 border-0 py-3 px-8 focus:outline-none hover:bg-yellow-500 rounded-lg text-lg font-medium transition-colors"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 border-0 py-3 px-8 focus:outline-none hover:bg-gray-800 dark:hover:bg-gray-200 rounded-lg text-lg font-medium transition-colors"
            >
              View Projects
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-yellow-400 rounded-lg transform rotate-3"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            />
            <motion.img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=600&fit=crop"
              alt="Profile"
              className="relative object-cover object-center rounded-lg shadow-2xl"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              whileHover={{ rotate: 1, scale: 1.02 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
