import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home"); // Estado para el enlace activo

  const navLinks = [
    { label: "Inicio", href: "#home" },
    { label: "Proyectos", href: "#projects" },
    { label: "Tecnologías", href: "#technologies" },
    { label: "Contacto", href: "#contact" },
  ];

  // Detecta la sección activa al hacer scroll
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

        <ul className="flex gap-6 text-sm">
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
                onClick={() => setActiveLink(link.href)} // Cambia el enlace activo manualmente
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
