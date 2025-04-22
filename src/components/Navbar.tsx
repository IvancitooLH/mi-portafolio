import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { navLinks } from "../data/navLinks";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );

      sections.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(navLinks[index].href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-dark text-light py-4 shadow-md fixed top-0 left-0 w-full z-50"
      aria-label="Menú principal"
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <motion.h2
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-xl font-bold text-blue"
        >
          Portafolio
        </motion.h2>

        {/* Botón hamburguesa */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-light sm:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menú desktop */}
        <ul className="hidden sm:flex gap-6 text-sm">
          {navLinks.map((link, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`transition-all ${
                activeLink === link.href ? "text-blue font-bold" : ""
              }`}
            >
              <a
                href={link.href}
                className="hover:text-blue transition-colors"
                onClick={() => handleLinkClick(link.href)}
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-dark px-6 pb-2 text-sm flex flex-col gap-6 mt-4"
          >
            {navLinks.map((link, i) => (
              <li
                key={i}
                className={`${
                  activeLink === link.href ? "text-blue font-bold" : ""
                }`}
              >
                <a
                  href={link.href}
                  className="hover:text-blue transition-colors"
                  onClick={() => handleLinkClick(link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
