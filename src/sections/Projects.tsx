import { motion } from "framer-motion";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="bg-surface text-light py-16 min-h-screen flex items-center justify-center"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-semibold text-blue mb-10 text-center"
        >
          Proyectos
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-dark p-6 sm:p-8 rounded-lg shadow-lg transition-all"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded mb-4 w-full h-40 sm:h-48 object-cover"
              />
              <h4 className="text-lg sm:text-xl font-bold text-blue mb-1">
                {project.title}
              </h4>
              <p className="text-blueGray text-sm mb-4">
                {project.description}
              </p>
              <div className="flex gap-4 text-sm">
                <motion.a
                  href={project.repo}
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  className="text-blue hover:underline"
                >
                  Código
                </motion.a>
                <motion.a
                  href={project.demo}
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  className="text-blue hover:underline"
                >
                  Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
