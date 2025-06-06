import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Complete Store Login",
    description:
      "A simple and responsive login page built with Firebase authentication and Tailwind CSS.",
    tags: ["Firebase", "Login", "Responsive", "Tailwind"],
    github: "https://github.com/mehediScriptDev/Complete-store",
    live: "https://loginpagelast.web.app/",
    category: "Client",
  },
  {
    title: "Travel Guru",
    description:
      "A travel destination booking platform featuring route-based navigation and Firebase authentication.",
    tags: ["React", "Routing", "Travel App", "Firebase Auth"],
    github: "https://github.com/mehediScriptDev/travel-guru",
    live: "https://simple2-54fd2.firebaseapp.com/",
    category: "Client",
  },
  {
    title: "Gmodex Portfolio",
    description:
      "An agency-style portfolio showcasing services with a modern, responsive design.",
    tags: ["Agency", "Portfolio", "React", "Web App"],
    github: "https://github.com/mehediScriptDev/gmodex",
    live: "https://gmodex-agent07.web.app/",
    category: "Client",
  },
];

const Projects = () => {
  return (
    <section>
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-gray-300 pb-3">Always tryna build something cool</p>
        <div className="grid gap-8 grid-cols-1 lgl:grid-cols-3 py-4">
      {projects.map((project, index) => (
        <div key={index} className="bg-gray-900 text-white p-6 rounded-lg shadow-md">
          <p className="text-sm text-gray-400 mb-2">{project.category}</p>
          <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-[#1f2937] px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-textcl flex justify-center items-center gap-1 hover:bg-transparent hover:border-[1px] hover:border-textcl text-white font-medium px-4 py-2 rounded-md transition"
            >
             <FaGithub /> GitHub
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-textcl text-textcl hover:bg-textcl hover:text-white px-4 py-2 rounded-md transition"
            >
              Live link ↗
            </a>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
};

export default Projects;