import { ArrowRightIcon, MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = ({
  isDark,
  toggleTheme,
}: {
  isDark: boolean;
  toggleTheme: () => void;
}) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white dark:bg-gray-900 shadow-lg"
          : "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <motion.a
          href="#about"
          className="text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0"
          whileHover={{ scale: 1.05 }}
        >
          Bibek<span className="text-yellow-400">.</span>
        </motion.a>
        <nav className="md:ml-auto md:mr-4 flex flex-wrap items-center text-base justify-center gap-7">
          {[
            { href: "#projects", text: "Past Work" },
            { href: "#skills", text: "Skills" },
            { href: "#resume", text: "Resume" },
            { href: "#testimonials", text: "Testimonials" },
          ].map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="text-gray-900 dark:text-gray-300 hover:text-yellow-400 dark:hover:text-yellow-400 transition-colors"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.text}
            </motion.a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <motion.a
            href="#contact"
            className="inline-flex items-center bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 border-0 py-2 px-5 focus:outline-none hover:bg-yellow-400 hover:text-gray-900 dark:hover:bg-yellow-400 rounded-lg transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Say Hello
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </motion.a>
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            whileHover={{ rotate: 180, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isDark ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
