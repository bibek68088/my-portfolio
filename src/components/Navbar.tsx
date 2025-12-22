import { useState, useEffect } from "react";

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
      clipRule="evenodd"
    />
  </svg>
);

const MoonIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M14.768 3.232a.75.75 0 0 1-.213 1.036A6.5 6.5 0 0 1 2.732 11.5a6.5 6.5 0 0 1 7.232-10.232.75.75 0 1 1 .804 1.268A5 5 0 1 0 13.5 10a5.032 5.032 0 0 0 .268-1.732.75.75 0 0 1 1-.036Z"
      clipRule="evenodd"
    />
  </svg>
);

const SunIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 1a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 1ZM10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM12.95 4.11a.75.75 0 1 0-1.06-1.06l-1.062 1.06a.75.75 0 0 0 1.061 1.062l1.06-1.061ZM15 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 15 8ZM11.89 12.95a.75.75 0 0 0 1.06-1.06l-1.06-1.062a.75.75 0 0 0-1.062 1.061l1.061 1.06ZM8 12a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 12ZM5.172 11.89a.75.75 0 0 0-1.061-1.062L3.05 11.89a.75.75 0 1 0 1.06 1.06l1.06-1.06ZM4 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 4 8ZM4.11 5.172A.75.75 0 0 0 5.173 4.11L4.11 3.05a.75.75 0 1 0-1.06 1.06l1.06 1.06Z" />
  </svg>
);

const Bars3Icon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
      clipRule="evenodd"
    />
  </svg>
);

const XMarkIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="currentColor">
    <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
  </svg>
);

const Navbar = ({
  isDark,
  toggleTheme,
}: {
  isDark: boolean;
  toggleTheme: () => void;
}) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white dark:bg-gray-900 shadow-lg"
            : "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm"
        }`}
        style={{ animation: "slideDown 0.5s ease-out" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a
              href="#about"
              className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white hover:scale-105 transition-transform"
            >
              Bibek<span className="text-yellow-400">.</span>
            </a>

            <nav className="hidden lg:flex items-center space-x-8">
              {[
                { href: "#projects", text: "Past Work" },
                { href: "#skills", text: "Skills" },
                { href: "#resume", text: "Resume" },
                { href: "#testimonials", text: "Testimonials" },
              ].map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-900 dark:text-gray-300 hover:text-yellow-400 dark:hover:text-yellow-400 transition-all hover:-translate-y-0.5 transform duration-200"
                  style={{
                    animation: `fadeInLeft 0.5s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {item.text}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 border-0 py-2 px-5 focus:outline-none hover:bg-yellow-400 hover:text-gray-900 dark:hover:bg-yellow-400 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Say Hello
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </a>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-all hover:rotate-180 hover:scale-110 active:scale-90"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <SunIcon className="w-5 h-5" />
                ) : (
                  <MoonIcon className="w-5 h-5" />
                )}
              </button>
            </div>

            <div className="flex lg:hidden items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <SunIcon className="w-5 h-5" />
                ) : (
                  <MoonIcon className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <nav className="py-4 space-y-3 border-t border-gray-200 dark:border-gray-700">
              {[
                { href: "#projects", text: "Past Work" },
                { href: "#skills", text: "Skills" },
                { href: "#resume", text: "Resume" },
                { href: "#testimonials", text: "Testimonials" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="block px-4 py-2 text-gray-900 dark:text-gray-300 hover:text-yellow-400 dark:hover:text-yellow-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  {item.text}
                </a>
              ))}
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="flex items-center justify-center mx-4 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 py-3 px-5 rounded-lg hover:bg-yellow-400 hover:text-gray-900 dark:hover:bg-yellow-400 transition-colors"
              >
                Say Hello
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
export default function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />

        <div className="pt-24 pb-12 px-4">
          <div className="container mx-auto">
            <section
              id="about"
              className="min-h-screen flex items-center justify-center"
            >
              <div className="text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                  Welcome to My Portfolio
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
                  Scroll down to see the navbar in action
                </p>
              </div>
            </section>

            <section
              id="projects"
              className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 -mx-4 px-4"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                Past Work
              </h2>
            </section>

            <section
              id="skills"
              className="min-h-screen flex items-center justify-center"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                Skills
              </h2>
            </section>

            <section
              id="resume"
              className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 -mx-4 px-4"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                Resume
              </h2>
            </section>

            <section
              id="testimonials"
              className="min-h-screen flex items-center justify-center"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                Testimonials
              </h2>
            </section>

            <section
              id="contact"
              className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 -mx-4 px-4"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                Contact
              </h2>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
