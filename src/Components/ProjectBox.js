import { PROJECTS } from "constants/string";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import STRINGS from "constants/string.js";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const project = PROJECTS[projectName];

  if (!project) return null;

  const hideGithub = !project.github;
  const hideDemo = !project.website;

  return (
    <div className="rounded-3xl bg-white/80 backdrop-blur-xl shadow-xl p-6 hover:shadow-2xl transition">
      <img
        src={projectPhoto}
        alt={project.title}
        className="rounded-2xl mb-5 w-full object-cover"
      />

      <h3 className="text-xl font-bold text-indigo-700">{project.title}</h3>

      <p className="mt-2 text-gray-600 text-sm leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-6">
        {!hideGithub && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl
        bg-indigo-500 text-white text-sm font-medium
        hover:bg-indigo-300 hover:scale-105
        transition-all duration-200 cursor-pointer shadow-lg"
          >
            <FiGithub /> {STRINGS.github}
          </a>
        )}

        {!hideDemo && (
          <a
            href={project.website}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl
        bg-indigo-500 text-white text-sm font-medium
        hover:bg-indigo-300 hover:scale-105
        transition-all duration-200 cursor-pointer shadow-lg"
          >
            <FiExternalLink /> {STRINGS.liveDemo}
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectBox;
