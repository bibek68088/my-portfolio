import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "../data";
import type { Skill } from "../types";
import SectionHeader from "./SectionHeader";

interface SkillBarProps {
  skill: Skill;
  index: number;
}

const SkillBar = ({ skill, index }: SkillBarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="glass-card p-6 rounded-2xl"
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex justify-between items-center mb-4">
        <span
          className="font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          {skill.title}
        </span>
        <motion.span
          className="text-amber-400 font-black text-lg"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: index * 0.08 + 0.5, duration: 0.4 }}
        >
          {skill.progress}%
        </motion.span>
      </div>

      {/* Track */}
      <div
        className="rounded-full overflow-hidden"
        style={{
          height: "6px",
          background: "var(--skill-track)",
        }}
      >
        {/* Fill */}
        <motion.div
          className="rounded-full relative overflow-hidden"
          style={{
            height: "6px",
            background: "linear-gradient(90deg, #fbbf24, #f59e0b)",
            boxShadow: "0 0 12px rgba(251,191,36,0.4)",
          }}
          initial={{ width: "0%" }}
          animate={isInView ? { width: `${skill.progress}%` } : { width: "0%" }}
          transition={{
            delay: index * 0.08 + 0.15,
            duration: 1.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {/* Shimmer */}
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)",
            }}
            animate={{ x: ["-100%", "200%"] }}
            transition={{
              duration: 1.8,
              delay: index * 0.08 + 1.2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-32">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          eyebrow="Expertise"
          title="Technical Skills"
          desc="Always learning, always shipping. These are the tools I reach for first."
        />

        <div className="grid md:grid-cols-2 gap-4 mt-16">
          {skills.map((skill: Skill, i: number) => (
            <SkillBar key={skill.title} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
