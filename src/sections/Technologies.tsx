import { motion } from "framer-motion";
import { technologies } from "../data/technologies";

function Technologies() {
  return (
    <motion.section
      id="technologies"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="bg-dark py-20"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-light mb-4"
        >
          Tecnologías
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-blueGray mb-12 max-w-2xl mx-auto"
        >
          Aquí están algunas de las tecnologías con las que trabajo:
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-surface text-light p-6 rounded-lg shadow-md transition-all"
            >
              <div className="text-4xl text-blue mb-4">{tech.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-blueDark">
                {tech.name}
              </h3>
              <p className="text-blueGray text-sm">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Technologies;
