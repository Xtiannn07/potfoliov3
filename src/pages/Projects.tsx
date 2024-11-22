import { Github, ExternalLink, Code, Boxes } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB",
      tech: ["React", "Node.js", "MongoDB", "Redux"],
      github: "#",
      live: "#",
      icon: <Boxes className="w-6 h-6" />
    },
    {
      title: "Task Management System",
      description: "Real-time task management application with team collaboration features",
      tech: ["TypeScript", "Socket.io", "Express", "PostgreSQL"],
      github: "#",
      live: "#",
      icon: <Code className="w-6 h-6" />
    }
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8 text-primary">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-colors">
            <div className="flex items-center mb-4 text-primary">
              {project.icon}
              <h3 className="text-2xl font-bold ml-3">{project.title}</h3>
            </div>
            
            <p className="text-gray-300 mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex space-x-4">
              <a href={project.github} className="flex items-center text-primary hover:text-primary/80">
                <Github className="w-5 h-5 mr-2" />
                Code
              </a>
              <a href={project.live} className="flex items-center text-primary hover:text-primary/80">
                <ExternalLink className="w-5 h-5 mr-2" />
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;