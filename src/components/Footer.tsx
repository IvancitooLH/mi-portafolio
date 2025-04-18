import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaFacebookF />,
    url: "https://www.facebook.com/carlos.ivan.518548",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/imivan03/",
  },
  {
    icon: <FaYoutube />,
    url: "https://youtube.com/@tuusuario",
  },
  {
    icon: <FaTiktok />,
    url: "https://www.tiktok.com/@imivan03?lang=es",
  },
  {
    icon: <FaLinkedinIn />,
    url: "https://linkedin.com/in/tuusuario",
  },
  {
    icon: <FaGithub />,
    url: "https://github.com/IvancitooLH",
  },
];

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-dark text-blueGray py-8 text-center text-sm mt-16"
    >
      <p className="mb-4">
        © {new Date().getFullYear()} Carlos Iván. Todos los derechos reservados.
      </p>

      <div className="flex justify-center gap-6 text-xl">
        {socialLinks.map((link, i) => (
          <motion.a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="hover:text-blue transition-colors duration-200"
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
    </motion.footer>
  );
};

export default Footer;
