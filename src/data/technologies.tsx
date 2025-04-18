import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoReact } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiPhp } from "react-icons/si";

interface Technology {
  name: string;
  icon?: React.ReactNode;
  description: string;
}

export const technologies: Technology[] = [
  {
    name: "HTML",
    icon: <IoLogoHtml5 />, // Añadido el ícono
    description: "Lenguaje de marcado estándar para crear páginas web.",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />, // Añadido el ícono
    description:
      "Lenguaje de estilo utilizado para describir la presentación de un documento HTML.",
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript />, // Añadido el ícono
    description:
      "Lenguaje de programación versátil y ampliamente utilizado para el desarrollo web.",
  },
  {
    name: "TypeScript",
    icon: <BiLogoTypescript />, // Añadido el ícono
    description:
      "Superset de JavaScript que añade tipado estático y características avanzadas.",
  },
  {
    name: "React",
    icon: <IoLogoReact />, // Añadido el ícono
    description:
      "Biblioteca de JavaScript para construir interfaces de usuario interactivas.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />, // Añadido el ícono
    description:
      "Framework CSS de utilidad para crear diseños personalizados y responsivos.",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />, // Añadido el ícono
    description:
      "Framework de React para aplicaciones web rápidas y optimizadas.",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />, // Añadido el ícono
    description:
      "Entorno de ejecución para JavaScript en el lado del servidor.",
  },
  {
    name: "Express",
    icon: <SiExpress />, // Añadido el ícono
    description:
      "Framework minimalista para construir aplicaciones web con Node.js.",
  },
  {
    name: "MySQL",
    icon: <GrMysql />, // Añadido el ícono
    description:
      "Sistema de gestión de bases de datos relacional ampliamente utilizado.",
  },
  {
    name: "PHP",
    icon: <SiPhp />, // Añadido el ícono
    description:
      "Lenguaje de programación del lado del servidor, ideal para desarrollo web.",
  },
];
