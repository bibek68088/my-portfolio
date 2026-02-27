import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  desc: string;
}

const SectionHeader = ({ eyebrow, title, desc }: SectionHeaderProps) => (
  <motion.div
    className="text-center"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
  >
    <div className="inline-block px-4 py-1 rounded-full glass-tag text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
      {eyebrow}
    </div>
    <h2
      className="text-4xl md:text-6xl font-black tracking-tighter mb-4"
      style={{ color: "var(--text-primary)" }}
    >
      {title}
    </h2>
    <p
      className="max-w-xl mx-auto text-lg"
      style={{ color: "var(--text-muted)" }}
    >
      {desc}
    </p>
  </motion.div>
);

export default SectionHeader;
