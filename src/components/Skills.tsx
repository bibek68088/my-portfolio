import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { skills } from "../data";
import SectionHeader from "./SectionHeader";

// ─── Layout ───────────────────────────────────────────────────────────────────
const POSITIONS = [
  { cx: "28%", cy: "20%" },
  { cx: "68%", cy: "16%" },
  { cx: "50%", cy: "46%" },
  { cx: "16%", cy: "62%" },
  { cx: "80%", cy: "56%" },
  { cx: "42%", cy: "82%" },
];

const FLOAT = [
  { x: [0, 8, -4, 0], y: [0, -10, 6, 0], dur: 7 },
  { x: [0, -6, 8, 0], y: [0, 8, -6, 0], dur: 8 },
  { x: [0, 5, -8, 0], y: [0, -8, 10, 0], dur: 6 },
  { x: [0, -8, 4, 0], y: [0, 6, -8, 0], dur: 9 },
  { x: [0, 6, -5, 0], y: [0, -12, 5, 0], dur: 7.5 },
  { x: [0, -4, 9, 0], y: [0, 5, -9, 0], dur: 8.5 },
];

const getLevel = (p: number) => {
  if (p >= 90) return { label: "Expert", color: "#fbbf24" };
  if (p >= 80) return { label: "Advanced", color: "#34d399" };
  if (p >= 70) return { label: "Proficient", color: "#818cf8" };
  return { label: "Intermediate", color: "#f472b6" };
};

// ─── Tooltip anchored to the bubble ──────────────────────────────────────────
interface TooltipProps {
  skill: { title: string; progress: number };
  r: number;
  /** which quadrant the bubble is in, so tooltip doesn't go off-screen */
  quadrant: "top" | "bottom";
}

const BubbleTooltip = ({ skill, r, quadrant }: TooltipProps) => {
  const { color, label } = getLevel(skill.progress);
  return (
    <motion.div
      className="absolute left-1/2 pointer-events-none"
      style={{
        transform: "translateX(-50%)",
        ...(quadrant === "top" ? { bottom: r + 14 } : { top: r + 14 }),
        zIndex: 50,
        minWidth: 160,
      }}
      initial={{ opacity: 0, y: quadrant === "top" ? 6 : -6, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: quadrant === "top" ? 6 : -6, scale: 0.92 }}
      transition={{ duration: 0.18 }}
    >
      <div
        className="glass-card rounded-2xl px-4 py-3 text-center"
        style={{
          border: `1px solid ${color}45`,
          boxShadow: `0 8px 32px rgba(0,0,0,0.35), 0 0 0 1px ${color}20`,
          backdropFilter: "blur(16px)",
        }}
      >
        <p
          className="font-bold text-sm mb-1"
          style={{ color: "var(--text-primary)" }}
        >
          {skill.title}
        </p>
        <div className="flex items-center justify-center gap-2">
          <span className="text-xl font-black" style={{ color }}>
            {skill.progress}%
          </span>
          <span
            className="text-xs font-semibold px-2 py-0.5 rounded-full"
            style={{
              background: `${color}18`,
              border: `1px solid ${color}40`,
              color,
            }}
          >
            {label}
          </span>
        </div>
      </div>
      {/* Small arrow */}
      <div
        className="absolute left-1/2"
        style={{
          transform: "translateX(-50%)",
          width: 0,
          height: 0,
          ...(quadrant === "top"
            ? {
                bottom: -6,
                borderLeft: "6px solid transparent",
                borderRight: "6px solid transparent",
                borderTop: `6px solid ${color}30`,
              }
            : {
                top: -6,
                borderLeft: "6px solid transparent",
                borderRight: "6px solid transparent",
                borderBottom: `6px solid ${color}30`,
              }),
        }}
      />
    </motion.div>
  );
};

// ─── Section ──────────────────────────────────────────────────────────────────
const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="skills" className="relative py-32">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          eyebrow="Expertise"
          title="Technical Skills"
          desc="Always learning, always shipping. These are the tools I reach for first."
        />

        {/* ── Bubble stage — fixed height so legend is never overlapped ── */}
        <div ref={ref} className="relative mt-16" style={{ height: 500 }}>
          {/* Ambient backdrop */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(251,191,36,0.04) 0%, transparent 70%)",
            }}
          />

          {skills.map((skill, i) => {
            const pos = POSITIONS[i];
            const float = FLOAT[i];
            const { color } = getLevel(skill.progress);
            const r = 44 + (skill.progress / 100) * 36; // 44–80 px
            const isHov = hovered === i;
            // Decide tooltip direction: bubbles in the bottom 40% get tooltip above
            const cyNum = parseFloat(pos.cy);
            const quadrant: "top" | "bottom" = cyNum > 55 ? "top" : "bottom";

            return (
              <motion.div
                key={skill.title}
                className="absolute flex items-center justify-center cursor-pointer select-none"
                style={{
                  left: pos.cx,
                  top: pos.cy,
                  transform: "translate(-50%, -50%)",
                  width: r * 2,
                  height: r * 2,
                  zIndex: isHov ? 30 : 10,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={
                  isInView
                    ? { scale: 1, opacity: 1, x: float.x, y: float.y }
                    : { scale: 0, opacity: 0 }
                }
                transition={{
                  scale: {
                    delay: i * 0.12,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 200,
                    damping: 18,
                  },
                  opacity: { delay: i * 0.12, duration: 0.4 },
                  x: {
                    duration: float.dur,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.4,
                  },
                  y: {
                    duration: float.dur,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.4,
                  },
                }}
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                whileHover={{ scale: 1.14 }}
              >
                {/* Glow ring */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `radial-gradient(circle, ${color}22 0%, transparent 70%)`,
                    border: `1px solid ${color}30`,
                    boxShadow: isHov
                      ? `0 0 48px ${color}60`
                      : `0 0 20px ${color}28`,
                    borderRadius: "50%",
                    transition: "box-shadow 0.3s ease",
                  }}
                />
                {/* Glass fill */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `radial-gradient(circle at 35% 35%, ${color}22 0%, ${color}08 50%, transparent 70%)`,
                    backdropFilter: "blur(8px)",
                    borderRadius: "50%",
                  }}
                />

                {/* Centre label — hidden on hover so tooltip takes over */}
                <AnimatePresence>
                  {!isHov && (
                    <motion.div
                      className="relative z-10 flex flex-col items-center justify-center text-center px-2"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <span
                        className="font-black leading-none"
                        style={{ color, fontSize: r > 65 ? 22 : 18 }}
                      >
                        {skill.progress}%
                      </span>
                      <span
                        className="font-semibold mt-1 leading-tight"
                        style={{
                          fontSize: r > 65 ? 11 : 10,
                          color: "var(--text-primary)",
                          maxWidth: r * 1.4,
                        }}
                      >
                        {skill.title}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {isHov && (
                    <BubbleTooltip skill={skill} r={r} quadrant={quadrant} />
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-5 mt-20"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Expert", color: "#fbbf24", range: "90%+" },
            { label: "Advanced", color: "#34d399", range: "80–89%" },
            { label: "Proficient", color: "#818cf8", range: "70–79%" },
            { label: "Intermediate", color: "#f472b6", range: "<70%" },
          ].map(({ label, color, range }) => (
            <div key={label} className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: color, boxShadow: `0 0 6px ${color}` }}
              />
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                <span style={{ color }} className="font-semibold">
                  {label}
                </span>{" "}
                — {range}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
