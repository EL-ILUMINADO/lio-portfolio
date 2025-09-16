import projects from "../data/projectsData";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-800">
      <h2 className="text-3xl font-bold text-amber-500 text-center mb-10">
        Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-amber-500/20 transition"
          >
            <h3 className="text-xl font-semibold text-white mb-8">
              {project.title}
            </h3>
            <img
              className="mb-4"
              src={project.image}
              alt={project.description}
            />
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex space-x-4">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 hover:text-amber-400 font-medium"
              >
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 font-medium"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
