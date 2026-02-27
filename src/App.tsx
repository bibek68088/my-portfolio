import { useState, useEffect } from "react";
import "./styles/global.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingOrbs from "./components/Floatingorbs";

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });

  const toggleTheme = (): void => setIsDark((prev) => !prev);

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
    <main className="min-h-screen">
      <FloatingOrbs />
      <div className="relative z-10">
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
