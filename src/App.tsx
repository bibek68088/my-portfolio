import { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return false; 
  });

  const toggleTheme = (): void => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Testimonials />
      <Contact isDark={isDark} />
      <Footer />
    </main>
  );
}
