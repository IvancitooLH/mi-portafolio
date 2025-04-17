import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="bg-dark text-light py-16 h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-semibold text-blue mb-8">Proyectos</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="bg-surface p-4 rounded shadow">
              <img
                src={project.image}
                alt={project.title}
                className="rounded mb-4"
              />
              <h4 className="text-xl font-bold text-blueDark">
                {project.title}
              </h4>
              <p className="text-blueGray text-sm mb-2">
                {project.description}
              </p>
              <div className="flex gap-4 text-sm">
                <a href={project.repo} className="text-blue hover:underline">
                  Código
                </a>
                <a href={project.demo} className="text-blue hover:underline">
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
