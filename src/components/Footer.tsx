import { motion } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";

const socials = [
  {
    label: "GitHub",
    Icon: IconBrandGithub,
    href: "https://github.com/bibek68088",
  },
  {
    label: "LinkedIn",
    Icon: IconBrandLinkedin,
    href: "https://www.linkedin.com/in/bibek-tamang-890721269/",
  },
  { label: "Twitter", Icon: IconBrandTwitter, href: "#" },
];

const Footer = () => (
  <footer
    className="relative py-10"
    style={{ borderTop: "1px solid var(--border-glass)" }}
  >
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <span className="text-2xl font-black logo-text">
        bibek<span className="text-amber-400">.</span>
      </span>

      <p className="text-sm" style={{ color: "var(--text-muted)" }}>
        © {new Date().getFullYear()} Bibek Tamang. All rights reserved.
      </p>

      <div className="flex gap-5">
        {socials.map(({ label, Icon, href }) => (
          <motion.a
            key={label}
            href={href}
            aria-label={label}
            className="hover:text-amber-400 transition-colors"
            style={{ color: "var(--text-muted)" }}
            whileHover={{ y: -3, scale: 1.15 }}
          >
            <Icon size={20} />
          </motion.a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
