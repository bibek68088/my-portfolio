import { useState, useEffect } from "react";
import type { SyntheticEvent } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { IconArrowRight, IconCode } from "@tabler/icons-react";

const WORDS = [
  "Experiences.",
  "Interfaces.",
  "Products.",
  "Solutions.",
] as const;

const About = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const [wordIndex, setWordIndex] = useState<number>(0);

  useEffect(() => {
    const t = setInterval(
      () => setWordIndex((i) => (i + 1) % WORDS.length),
      2500,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 pt-24 grid md:grid-cols-2 gap-16 items-center"
      >
        {/* ── Text ── */}
        <div>
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 text-sm font-medium text-amber-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <IconCode size={14} className="text-green-400" />
            Available for freelance work
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-black leading-none tracking-tighter mb-4"
            style={{ color: "var(--text-primary)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Hi, I'm
            <br />
            <span className="text-gradient">Bibek.</span>
          </motion.h1>

          <motion.div
            className="text-2xl md:text-3xl font-bold mb-6 h-10"
            style={{ color: "var(--text-secondary)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            I craft{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                className="text-amber-400"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {WORDS[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p
            className="text-lg leading-relaxed mb-10 max-w-md"
            style={{ color: "var(--text-secondary)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Full-stack developer based in Kathmandu. I transform ideas into
            pixel-perfect, performant digital experiences that users love.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.a
              href="#contact"
              className="cta-btn px-8 py-4 text-base font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Work With Me <IconArrowRight size={18} className="ml-1" />
            </motion.a>
            <motion.a
              href="#projects"
              className="glass-btn-outline px-8 py-4 text-base font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {[
              ["20+", "Projects"],
              ["3+", "Years Exp."],
              ["15+", "Clients"],
            ].map(([num, label]) => (
              <div
                key={label}
                className="glass-card p-4 rounded-2xl text-center"
              >
                <div className="text-2xl font-black text-amber-400">{num}</div>
                <div
                  className="text-xs mt-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Image ── */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, duration: 1, type: "spring" }}
        >
          <div className="relative">
            <div className="hero-glow-ring" />
            <motion.div
              className="hero-img-wrap"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="./Image.jpg"
                alt="Bibek"
                className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-3xl shadow-2xl"
                onError={(e: SyntheticEvent<HTMLImageElement>) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80";
                }}
              />
              <div className="hero-img-overlay" />
            </motion.div>

            {/* Floating badges */}
            <motion.div
              className="absolute -bottom-4 -left-4 glass-card px-4 py-3 rounded-2xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                Based in
              </div>
              <div
                className="text-sm font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                🇳🇵 Kathmandu
              </div>
            </motion.div>
            <motion.div
              className="absolute -top-4 -right-4 glass-card px-4 py-3 rounded-2xl"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
            >
              <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                Stack
              </div>
              <div className="text-sm font-bold text-amber-400">Full-Stack</div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span
          className="text-xs tracking-widest uppercase"
          style={{ color: "var(--text-muted)" }}
        >
          Scroll
        </span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-amber-400 to-transparent"
          animate={{ scaleY: [1, 0.5, 1], opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
};

export default About;
