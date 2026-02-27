import { ElementType } from "react";
import { motion } from "framer-motion";
import { IconSchool, IconBriefcase } from "@tabler/icons-react";
import { educations, experiences } from "../data";
import type { Education, Experience } from "../types";
import SectionHeader from "./SectionHeader";

const Resume = () => {
  const columns: {
    heading: string;
    items: (Education | Experience)[];
    Icon: ElementType;
  }[] = [
    { heading: "Education", items: educations, Icon: IconSchool },
    { heading: "Experience", items: experiences, Icon: IconBriefcase },
  ];

  return (
    <section id="resume" className="relative py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Background"
          title="My Journey"
          desc="Every experience has sharpened my craft. Here's the path that brought me here."
        />

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {columns.map(({ heading, items, Icon }) => (
            <div key={heading}>
              <h3
                className="flex items-center gap-2 text-xl font-black uppercase tracking-widest mb-8"
                style={{ color: "var(--text-muted)" }}
              >
                <Icon size={20} className="text-amber-400" />
                {heading}
              </h3>

              <div className="space-y-6">
                {items.map((item, i) => (
                  <motion.div
                    key={i}
                    className="relative pl-6"
                    style={{ borderLeft: "1px solid rgba(251,191,36,0.3)" }}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 4 }}
                  >
                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_10px_2px_rgba(251,191,36,0.5)]" />
                    <div className="glass-card p-5 rounded-2xl">
                      <div className="flex justify-between items-start mb-1 gap-2">
                        <h4
                          className="font-bold"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {item.title}
                        </h4>
                        <span
                          className="text-xs whitespace-nowrap"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-amber-400 text-sm font-semibold mb-1">
                        {item.sub}
                      </p>
                      {"college" in item && item.college && (
                        <p
                          className="text-xs mb-2"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {item.college}
                        </p>
                      )}
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
