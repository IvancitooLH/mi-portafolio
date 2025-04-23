import { SiDotnet } from "react-icons/si";

import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt, FaNodeJs, FaPython } from "react-icons/fa6";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTailwindcss, SiNextdotjs, SiExpress, SiPhp } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

interface Technology {
  name: string;
  icon?: React.ReactNode;
  description: string;
}

export const technologies: Technology[] = [
  {
    name: "C#",
    icon: <SiDotnet />,
    description:
      "Lenguaje de programación desarrollado por Microsoft, comúnmente usado para desarrollo web con ASP.NET, aplicaciones de escritorio y videojuegos con Unity.",
  },
  {
    name: "Python",
    icon: <FaPython />,
    description:
      "Lenguaje de programación flexible y de alto nivel, ampliamente utilizado en desarrollo web, automatización y análisis de datos.",
  },
  {
    name: "HTML",
    icon: <IoLogoHtml5 />,
    description:
      "Lenguaje de marcado esencial para estructurar contenidos en la web.",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    description:
      "Lenguaje de estilos utilizado para definir la apariencia y el diseño de documentos HTML.",
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript />,
    description:
      "Lenguaje de programación clave en el desarrollo web moderno, tanto en el lado del cliente como del servidor.",
  },
  {
    name: "TypeScript",
    icon: <BiLogoTypescript />,
    description:
      "Extensión de JavaScript que incorpora tipado estático, mejorando la escalabilidad y el mantenimiento del código.",
  },
  {
    name: "React",
    icon: <IoLogoReact />,
    description:
      "Biblioteca de JavaScript para construir interfaces de usuario dinámicas y reutilizables.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    description:
      "Framework de utilidades CSS que permite crear interfaces altamente personalizadas y responsivas.",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    description:
      "Framework basado en React que facilita el desarrollo de aplicaciones web escalables y de alto rendimiento.",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    description:
      "Entorno de ejecución para JavaScript orientado al desarrollo de aplicaciones en el lado del servidor.",
  },
  {
    name: "Express",
    icon: <SiExpress />,
    description:
      "Framework minimalista para Node.js que permite crear APIs y aplicaciones web de forma rápida y eficiente.",
  },
  {
    name: "MySQL",
    icon: <GrMysql />,
    description:
      "Sistema de gestión de bases de datos relacional, reconocido por su fiabilidad, rendimiento y facilidad de uso.",
  },
  {
    name: "PHP",
    icon: <SiPhp />,
    description:
      "Lenguaje de programación del lado del servidor, ampliamente adoptado para el desarrollo de sitios y aplicaciones web.",
  },
];
