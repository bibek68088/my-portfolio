import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  IconSchool,
  IconBriefcase,
  IconMapPin,
  IconCalendar,
} from "@tabler/icons-react";
import { educations, experiences } from "../data";
import type { Education, Experience } from "../types";
import SectionHeader from "./SectionHeader";

// ─── Types ────────────────────────────────────────────────────────────────────
type TimelineItem = (Education | Experience) & {
  kind: "education" | "experience";
};

// ─── Merge & interleave both lists with a "kind" tag ─────────────────────────
const timeline: TimelineItem[] = [
  ...experiences.map((e) => ({ ...e, kind: "experience" as const })),
  ...educations.map((e) => ({ ...e, kind: "education" as const })),
];

// ─── Icon badge per kind ──────────────────────────────────────────────────────
const KindIcon = ({ kind }: { kind: TimelineItem["kind"] }) => {
  const Icon = kind === "education" ? IconSchool : IconBriefcase;
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
      style={{
        background:
          kind === "education"
            ? "rgba(99,102,241,0.2)"
            : "rgba(251,191,36,0.15)",
        border:
          kind === "education"
            ? "1px solid rgba(99,102,241,0.4)"
            : "1px solid rgba(251,191,36,0.35)",
      }}
    >
      <Icon
        size={18}
        style={{
          color: kind === "education" ? "#818cf8" : "#fbbf24",
        }}
      />
    </div>
  );
};

// ─── Arrow pointer toward the spine ──────────────────────────────────────────
const CardArrow = ({ side }: { side: "left" | "right" }) => (
  <div
    className="absolute top-5 hidden md:block"
    style={{
      [side === "right" ? "right" : "left"]: "-8px",
      width: 0,
      height: 0,
      borderTop: "8px solid transparent",
      borderBottom: "8px solid transparent",
      [side === "right" ? "borderLeft" : "borderRight"]:
        "8px solid rgba(255,255,255,0.07)",
    }}
  />
);

// ─── Card inner content (shared between desktop halves + mobile) ──────────────
const CardContent = ({ item }: { item: TimelineItem }) => (
  <>
    <div className="flex items-start gap-3 mb-3">
      <KindIcon kind={item.kind} />
      <div>
        <h4
          className="font-bold text-base leading-tight"
          style={{ color: "var(--text-primary)" }}
        >
          {item.title}
        </h4>
        <p className="text-sm font-semibold text-amber-400 mt-0.5">
          {item.sub}
        </p>
      </div>
    </div>

    <div className="flex flex-wrap items-center gap-2 mb-3">
      <span
        className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full"
        style={{
          background: "rgba(251,191,36,0.1)",
          border: "1px solid rgba(251,191,36,0.2)",
          color: "#fbbf24",
        }}
      >
        <IconCalendar size={11} /> {item.duration}
      </span>
      {"college" in item && item.college && (
        <span
          className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full"
          style={{
            background: "rgba(129,140,248,0.1)",
            border: "1px solid rgba(129,140,248,0.2)",
            color: "#818cf8",
          }}
        >
          <IconMapPin size={11} /> {item.college}
        </span>
      )}
    </div>

    <p
      className="text-sm leading-relaxed"
      style={{ color: "var(--text-secondary)" }}
    >
      {item.desc}
    </p>
  </>
);

// ─── Single timeline card ─────────────────────────────────────────────────────
interface CardProps {
  item: TimelineItem;
  index: number;
  side: "left" | "right";
}

const TimelineCard = ({ item, index, side }: CardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = side === "left";

  const Dot = () => (
    <motion.div
      className="hidden md:flex items-center justify-center flex-shrink-0 mt-5"
      initial={{ scale: 0, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
      style={{ zIndex: 10, width: 32, height: 32, position: "relative" }}
    >
      {/* Solid dot — centered in the 32×32 wrapper */}
      <div
        style={{
          width: 14,
          height: 14,
          borderRadius: "50%",
          background: item.kind === "education" ? "#818cf8" : "#fbbf24",
          boxShadow:
            item.kind === "education"
              ? "0 0 14px 4px rgba(99,102,241,0.55)"
              : "0 0 14px 4px rgba(251,191,36,0.55)",
          flexShrink: 0,
        }}
      />
      {/* Pulse ring — absolutely centered inside the 32×32 wrapper */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          margin: "auto",
          width: 28,
          height: 28,
          borderRadius: "50%",
          border: `2px solid ${item.kind === "education" ? "rgba(99,102,241,0.45)" : "rgba(251,191,36,0.45)"}`,
        }}
        animate={{ scale: [1, 1.7, 1], opacity: [0.7, 0, 0.7] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          delay: index * 0.3,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );

  return (
    <div ref={ref} className="relative w-full flex items-start">
      {/* ── Left half ── */}
      <div className="hidden md:flex md:w-1/2 md:pr-6 items-start justify-end gap-3">
        {isLeft ? (
          <>
            <motion.div
              className="flex-1 glass-card rounded-2xl p-5 relative"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                y: -4,
                boxShadow:
                  "0 20px 60px rgba(0,0,0,0.25), 0 0 0 1px rgba(251,191,36,0.12)",
              }}
            >
              <CardArrow side="right" />
              <CardContent item={item} />
            </motion.div>
            <Dot />
          </>
        ) : (
          /* empty spacer so right-side rows still reserve left half */
          <div className="flex-1" />
        )}
      </div>

      {/* ── Right half ── */}
      <div className="hidden md:flex md:w-1/2 md:pl-6 items-start gap-3">
        {!isLeft ? (
          <>
            <Dot />
            <motion.div
              className="flex-1 glass-card rounded-2xl p-5 relative"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                y: -4,
                boxShadow:
                  "0 20px 60px rgba(0,0,0,0.25), 0 0 0 1px rgba(251,191,36,0.12)",
              }}
            >
              <CardArrow side="left" />
              <CardContent item={item} />
            </motion.div>
          </>
        ) : (
          <div className="flex-1" />
        )}
      </div>

      {/* ── Mobile: full-width ── */}
      <motion.div
        className="md:hidden w-full glass-card rounded-2xl p-5"
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -4 }}
      >
        <CardContent item={item} />
      </motion.div>
    </div>
  );
};

// ─── Animated vertical line ───────────────────────────────────────────────────
const TimelineLine = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      ref={ref}
      className="absolute left-1/2 top-0 bottom-0 hidden md:block"
      style={{ width: "1px", transform: "translateX(-50%)" }}
    >
      {/* Static track */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(255,255,255,0.07)" }}
      />
      {/* Animated fill */}
      <motion.div
        className="absolute inset-x-0 top-0"
        style={{
          scaleY,
          originY: 0,
          bottom: 0,
          background:
            "linear-gradient(180deg, #fbbf24 0%, #818cf8 60%, #fbbf24 100%)",
          boxShadow: "0 0 8px rgba(251,191,36,0.4)",
        }}
      />
    </div>
  );
};

// ─── Main section ─────────────────────────────────────────────────────────────
const Resume = () => {
  return (
    <section id="resume" className="relative py-32">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          eyebrow="Background"
          title="My Journey"
          desc="Every experience has sharpened my craft. Here's the path that brought me here."
        />

        {/* Legend */}
        <motion.div
          className="flex items-center justify-center gap-6 mt-10 mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            {
              color: "#fbbf24",
              glow: "rgba(251,191,36,0.4)",
              label: "Experience",
            },
            {
              color: "#818cf8",
              glow: "rgba(99,102,241,0.4)",
              label: "Education",
            },
          ].map(({ color, glow, label }) => (
            <div key={label} className="flex items-center gap-2">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: color, boxShadow: `0 0 8px ${glow}` }}
              />
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "var(--text-muted)" }}
              >
                {label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Timeline container */}
        <div className="relative">
          <TimelineLine />

          {/* Cards — alternate left/right on md+ */}
          <div className="relative flex flex-col gap-10">
            {timeline.map((item, i) => (
              <TimelineCard
                key={`${item.kind}-${i}`}
                item={item}
                index={i}
                side={i % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
