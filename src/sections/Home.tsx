import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-dark text-light py-32 h-screen flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
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
          className="text-blueGray text-lg sm:text-xl mb-8"
        >
          Desarrollador frontend apasionado por construir interfaces limpias y
          funcionales.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Home;
