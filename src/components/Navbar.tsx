import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconSun,
  IconMoon,
  IconMenu2,
  IconX,
  IconArrowRight,
} from "@tabler/icons-react";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const links = [
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

const Navbar = ({ isDark, toggleTheme }: NavbarProps) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-glass py-3" : "bg-transparent py-5"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#about"
          className="text-2xl font-black tracking-tighter logo-text"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          bibek<span className="text-amber-400">.</span>
        </motion.a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <motion.a
              key={l.href}
              href={l.href}
              className="text-sm font-medium nav-link-text relative"
              whileHover={{ y: -1 }}
              onClick={() => setActive(l.href)}
            >
              {l.label}
              {active === l.href && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-amber-400"
                />
              )}
            </motion.a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-4">
          <motion.button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full glass-btn flex items-center justify-center hover:text-amber-400"
            style={{ color: "var(--text-secondary)" }}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            {isDark ? <IconSun size={18} /> : <IconMoon size={18} />}
          </motion.button>
          <motion.a
            href="#contact"
            className="cta-btn px-5 py-2 text-sm font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me <IconArrowRight size={14} className="ml-1" />
          </motion.a>
        </div>

        {/* Mobile actions */}
        <div className="flex md:hidden items-center gap-3">
          <motion.button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full glass-btn flex items-center justify-center hover:text-amber-400"
            style={{ color: "var(--text-secondary)" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isDark ? <IconSun size={18} /> : <IconMoon size={18} />}
          </motion.button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: "var(--text-primary)" }}
            className="p-1"
          >
            {mobileOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden nav-glass mt-2 mx-4 rounded-2xl p-6"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                className="block py-3 font-medium nav-link-text border-b last:border-0"
                style={{ borderColor: "var(--border-glass)" }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="cta-btn w-full mt-4 py-3 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => setMobileOpen(false)}
            >
              Hire Me <IconArrowRight size={14} className="ml-1" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
