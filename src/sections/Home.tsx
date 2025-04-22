import { motion } from "framer-motion";
import MiImagen from "../assets/MiImagen2.jpg";

const Home = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative bg-dark text-light py-32 min-h-screen flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative w-60 h-60 mx-auto">
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-blueDark"
            initial={{ rotate: 0, scale: 1.1 }}
            animate={{ rotate: 360, scale: [1.1, 1, 1.1] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.img
            src={MiImagen}
            alt="Carlos Ivan"
            className="relative w-full h-full object-cover rounded-full shadow-xl"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 12,
              delay: 0.3,
            }}
          />
        </div>

        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl sm:text-6xl font-bold text-blue mb-6"
          >
            Hola, soy Carlos Ivan
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-blueGray text-lg sm:text-xl mb-4"
          >
            Desarrollador frontend apasionado por construir interfaces limpias y
            funcionales.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-light/80 text-base sm:text-lg mb-6"
          >
            Me especializo en tecnologías modernas como React, TypeScript y
            Tailwind. Disfruto crear experiencias visuales intuitivas que
            aporten valor y calidad. Siempre busco aprender nuevas herramientas
            y contribuir con código bien estructurado.
          </motion.p>

          <motion.a
            href="/cv-carlos-ivan.pdf"
            download
            className="inline-block bg-blue text-light px-6 py-3 rounded shadow hover:bg-blueDark transition-colors font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            Descargar CV
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
