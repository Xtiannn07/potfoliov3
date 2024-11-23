import { ExternalLink, Boxes, Code } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const Projects = () => {
  const [sectionRef, isVisible, isScrollingDown] = useIntersectionObserver();
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB",
      tech: ["React", "Node.js", "MongoDB", "Redux"],
      link: "#",
      icon: <Boxes className="w-6 h-6" />
    },
    {
      title: "Task Management System",
      description: "Real-time task management application with team collaboration features",
      tech: ["TypeScript", "Socket.io", "Express", "PostgreSQL"],
      link: "#",
      icon: <Code className="w-6 h-6" />
    }
  ];

  return (
    <div 
      ref={sectionRef}
      className={`container mx-auto px-4 py-12 section-content ${
        isVisible ? 'visible' : isScrollingDown ? 'slide-down' : 'slide-up'
      }`}
    >
      <h1 className="text-4xl font-bold mb-8 text-primary">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-300 transform hover:-translate-y-1"
          >
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
            
            <a 
              href={project.link} 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
