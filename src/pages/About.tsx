import { Code2, Cpu, Database, Globe } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const About = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();
  
  const skills = [
    { icon: <Code2 className="w-6 h-6" />, name: "Frontend Development", description: "Expert in React, TypeScript, and modern web technologies" },
    { icon: <Database className="w-6 h-6" />, name: "Backend Development", description: "Proficient in Node.js, Python, and database management" },
    { icon: <Globe className="w-6 h-6" />, name: "Web Design", description: "Creating responsive and intuitive user interfaces" },
    { icon: <Cpu className="w-6 h-6" />, name: "System Architecture", description: "Designing scalable and maintainable systems" },
  ];

  return (
    <div 
      ref={sectionRef}
      className={`container mx-auto px-4 py-12 section-content ${isVisible ? 'visible' : ''}`}
    >
      <h1 className="text-4xl font-bold mb-8 text-primary">About Me</h1>
      
      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-8">
          I'm a passionate full-stack developer with over 5 years of experience in creating beautiful and functional web applications. 
          My journey in tech has been driven by curiosity and a constant desire to learn and improve.
        </p>

        <h2 className="text-2xl font-bold mb-6 text-primary">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4 text-primary">
                {skill.icon}
                <h3 className="text-xl font-bold ml-3">{skill.name}</h3>
              </div>
              <p className="text-gray-300">{skill.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6 text-primary">Professional Journey</h2>
        <p className="text-lg mb-4">
          Throughout my career, I've worked with various technologies and frameworks, always staying up-to-date with the latest industry trends.
          My experience spans from startups to enterprise-level applications, giving me a broad perspective on software development.
        </p>
      </div>
    </div>
  );
};

export default About;