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
      className="bg-dark py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold text-center text-light mb-4"
        >
          Conocimientos Tecnológicos
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-blueGray mb-12 max-w-2xl mx-auto text-base sm:text-lg"
        >
          Estas son algunas de las tecnologías con las que tengo experiencia y
          utilizo en el desarrollo de soluciones digitales.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-surface text-light p-6 rounded-xl shadow-lg transition-transform duration-300 text-center"
            >
              <div className="flex justify-center items-center text-4xl mb-4 text-blue">
                {tech.icon}
              </div>
              <h3 className="text-xl font-semibold text-blueDark mb-2">
                {tech.name}
              </h3>
              <p className="text-sm text-blueGray leading-relaxed">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Technologies;
