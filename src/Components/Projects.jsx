import { FaGithub } from "react-icons/fa";

const projects = [
    {
    title: "Gmodex Portfolio",
    description:
      "An old-style theme. kinda inspired by Mr Robot series dark web sences.. Old style UI design. Feels like real Dark web",
    tags: ["DarkWeb", "Oldtheme", "React", "Tailwind"],
    github: "https://github.com/mehediScriptDev/gmodex",
    live: "https://gmodex-agent07.web.app/",
    category: "Client",
  },
  {
    title: "Complete Store",
    description:
      "A simple and responsive Visa processign site for tourist. First log in then you can see all available visas and choose your dream country.",
    tags: ["Backend", "Complete", "Responsive", "Tailwind+react"],
    github: "https://github.com/mehediScriptDev/Complete-store",
    live: "https://loginpagelast.web.app/",
    category: "Client-Server",
  },
  {
  "title": "Coffee Store",
  "tags": ["MERN", "MongoDB", "Node.js", "Express", "React", "Tailwind", "Full-Stack"],
  "live": "",
  "github": 
    
    "https://github.com/mehediScriptDev/coffe-store-server"
  ,
  "description": "A full-stack coffee store management app built with the MERN stack, allowing CRUD operations on coffee items. Includes REST API with MongoDB backend and a responsive React frontend.",
  category: "Client-Server",
},
  {
    title: "Travel Guru",
    description:
      "A travel destination booking platform featuring route-based navigation and Firebase authentication. Just a travel agency UI design. ",
    tags: ["React", "Routing", "Travel App", "Firebase Auth"],
    github: "https://github.com/mehediScriptDev/travel-guru",
    live: "https://simple2-54fd2.firebaseapp.com/",
    category: "Client",
  },
  
];

const Projects = () => {
  return (
    <section>
        <h1 className="text-3xl font-bold pt-5 text-anotherbg">Projects</h1>
        <p className="text-gray-300 py-3 text-xs">Always tryna build something cool</p>
        <div className="grid gap-8 grid-cols-1 lgl:grid-cols-3 py-4">
      {projects.map((project, index) => (
        <div key={index} className="bg-secondary text-white p-6 rounded-lg shadow-md">
          <p className="text-sm text-gray-400 mb-2">{project.category}</p>
          <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-gray-900 px-3 py-1 rounded-full text-sm"
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
              className="bg-anotherbg flex justify-center items-center gap-1 hover:bg-transparent hover:border-[1px] hover:border-anotherbg text-white font-medium px-4 py-2 rounded-md transition"
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