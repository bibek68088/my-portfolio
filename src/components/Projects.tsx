import { useState, useEffect, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
  type Variants,
} from "framer-motion";
import {
  IconArrowRight,
  IconArrowLeft,
  IconExternalLink,
} from "@tabler/icons-react";
import { projects } from "../data";
import type { Project } from "../types";
import SectionHeader from "./SectionHeader";

// ─── Variants — transition.type must be a literal, not string ────────────────
const SPRING = { type: "spring" as const, stiffness: 260, damping: 30 };

const CARD_VARIANTS: Variants = {
  center: {
    x: 0,
    scale: 1,
    rotateY: 0,
    z: 0,
    opacity: 1,
    filter: "brightness(1)",
    transition: SPRING,
  },
  left: {
    x: "-62%",
    scale: 0.78,
    rotateY: 18,
    z: -120,
    opacity: 0.65,
    filter: "brightness(0.6)",
    transition: SPRING,
  },
  right: {
    x: "62%",
    scale: 0.78,
    rotateY: -18,
    z: -120,
    opacity: 0.65,
    filter: "brightness(0.6)",
    transition: SPRING,
  },
  hidden: {
    x: 0,
    scale: 0.5,
    rotateY: 0,
    z: -300,
    opacity: 0,
    transition: SPRING,
  },
};

// ─── Single card ──────────────────────────────────────────────────────────────
interface CardProps {
  project: Project;
  index: number;
  total: number;
  active: number;
  position: "center" | "left" | "right" | "hidden";
  onClick: () => void;
}

const ProjectCard = ({
  project,
  index,
  total,
  active,
  position,
  onClick,
}: CardProps) => {
  const isCenter = position === "center";

  return (
    <motion.div
      className="absolute w-full max-w-lg"
      style={{
        transformStyle: "preserve-3d",
        cursor: isCenter ? "default" : "pointer",
      }}
      variants={CARD_VARIANTS}
      animate={position}
      onClick={!isCenter ? onClick : undefined}
    >
      <div
        className="project-card rounded-3xl overflow-hidden"
        style={{
          boxShadow: isCenter
            ? "0 30px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(251,191,36,0.15)"
            : "0 10px 40px rgba(0,0,0,0.2)",
        }}
      >
        {/* ── Image ── */}
        <div className="relative overflow-hidden" style={{ height: "260px" }}>
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isCenter ? 1 : 1.08 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

          {/* Ghost number */}
          <div className="absolute top-4 left-4">
            <span
              className="text-5xl font-black leading-none select-none"
              style={{ color: "rgba(251,191,36,0.18)" }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Tag */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold glass-tag text-amber-400 tracking-wide">
              {project.tag}
            </span>
          </div>

          {/* Title always visible */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-1">
              {project.subtitle}
            </div>
            <h3 className="text-xl font-black text-white leading-tight">
              {project.title}
            </h3>
          </div>
        </div>

        {/* ── Body — expands only when center ── */}
        <AnimatePresence initial={false}>
          {isCenter && (
            <motion.div
              className="project-card-body p-6"
              key="body"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "var(--text-secondary)" }}
              >
                {project.description}
              </p>
              <div className="flex items-center justify-between">
                <motion.a
                  href={project.link}
                  className="cta-btn px-5 py-2.5 text-sm font-bold gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project <IconExternalLink size={14} />
                </motion.a>

                {/* Pill dots */}
                <div className="flex gap-1.5 items-center">
                  {Array.from({ length: total }).map((_, idx) => (
                    <motion.div
                      key={idx}
                      className="rounded-full"
                      animate={{
                        width: idx === active ? 20 : 6,
                        background:
                          idx === active ? "#fbbf24" : "rgba(255,255,255,0.2)",
                      }}
                      transition={{ duration: 0.3 }}
                      style={{ height: 6 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// ─── Autoplay progress bar ────────────────────────────────────────────────────
const AUTOPLAY_DELAY = 3500; // ms

interface ProgressBarProps {
  active: number;
  paused: boolean;
}

const ProgressBar = ({ active, paused }: ProgressBarProps) => (
  <div className="flex gap-1.5 items-center" style={{ width: "160px" }}>
    {projects.map((_, i) => (
      <div
        key={i}
        className="rounded-full overflow-hidden flex-1"
        style={{ height: "3px", background: "rgba(255,255,255,0.12)" }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: "#fbbf24", originX: 0 }}
          key={`${i}-${active}`} // re-mount on slide change
          initial={{ scaleX: i < active ? 1 : i === active ? 0 : 0 }}
          animate={{
            scaleX: i < active ? 1 : i === active && !paused ? 1 : 0,
          }}
          transition={
            i === active && !paused
              ? { duration: AUTOPLAY_DELAY / 1000, ease: "linear" }
              : { duration: 0.2 }
          }
        />
      </div>
    ))}
  </div>
);

// ─── Main carousel ────────────────────────────────────────────────────────────
const Projects = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const dragX = useMotionValue(0);
  const total = projects.length;

  const go = useCallback(
    (next: number) => {
      setActive((next + total) % total);
      animate(dragX, 0, { duration: 0 });
    },
    [total, dragX],
  );

  const prev = () => go(active - 1);
  const next = useCallback(() => go(active + 1), [active, go]);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => next(), AUTOPLAY_DELAY);
    return () => clearInterval(id);
  }, [paused, next]);

  // Drag-to-swipe
  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number } },
  ) => {
    if (info.offset.x < -60) next();
    else if (info.offset.x > 60) go(active - 1);
    animate(dragX, 0, { type: "spring", stiffness: 400, damping: 40 });
  };

  const getPosition = (idx: number): "center" | "left" | "right" | "hidden" => {
    if (idx === active) return "center";
    if (idx === (active - 1 + total) % total) return "left";
    if (idx === (active + 1) % total) return "right";
    return "hidden";
  };

  // Subtle container tilt on drag
  const tilt = useTransform(dragX, [-200, 200], [8, -8]);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Portfolio"
          title="Selected Work"
          desc="A curated selection of projects that demonstrate my range across design, engineering, and product thinking."
        />

        {/* ── Stage ── */}
        <div
          className="relative mt-20"
          style={{ perspective: "1200px" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Card track */}
          <motion.div
            className="relative flex items-center justify-center select-none"
            style={{ height: "460px", rotateY: tilt }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDrag={(_, info) => dragX.set(info.offset.x)}
            onDragEnd={handleDragEnd}
          >
            {projects.map((project: Project, i: number) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                total={total}
                active={active}
                position={getPosition(i)}
                onClick={() => go(i)}
              />
            ))}
          </motion.div>

          {/* ── Controls ── */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {/* Prev */}
            <motion.button
              onClick={prev}
              className="cta-btn w-12 h-12 rounded-full"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconArrowLeft size={20} />
            </motion.button>

            {/* Progress bars */}
            <ProgressBar active={active} paused={paused} />

            {/* Next */}
            <motion.button
              onClick={() => next()}
              className="cta-btn w-12 h-12 rounded-full"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconArrowRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
