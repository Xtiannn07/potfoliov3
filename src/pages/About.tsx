import { Code2, Cpu, Database, Globe } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { motion } from 'framer-motion';

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaPython,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiCplusplus,
  SiCsharp,
  SiMysql,
  SiNextdotjs,
} from "react-icons/si";

const About = () => {
  const [sectionRef, isVisible, isScrollingDown] = useIntersectionObserver();
  
  const skills = [
    { icon: <Code2 className="w-6 h-6" />, name: "Frontend Development", description: "Done projects in React, Javascript, TypeScript, and modern web technologies" },
    { icon: <Database className="w-6 h-6" />, name: "Backend Development", description: "Experienced in Node.js, Php, Mysql, Xampp, and database management" },
    { icon: <Globe className="w-6 h-6" />, name: "Web Design", description: "Creating responsive and intuitive user interfaces" },
    { icon: <Cpu className="w-6 h-6" />, name: "System Architecture", description: "Designing scalable and maintainable systems" },
  ];

  return (
    <div 
      ref={sectionRef}
      className={`container mx-auto px-4 py-12 section-content ${
        isVisible ? 'visible' : isScrollingDown ? 'slide-down' : 'slide-up'
      }`}
    >
      <h1 className="text-4xl font-bold mb-8 text-primary">About Me</h1>
      
      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-8">
          I'm a passionate full-stack developer with 2 years of experience in creating fun and functional websites. 
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

        <h2 className="text-2xl font-bold mb-6 text-primary">Technologies</h2>
        <div className="grid grid-cols-4 gap-4 max-w-3xl mx-auto">
            <SkillIcon Icon={FaHtml5} name="HTML5" color="#E34F26" />
            <SkillIcon Icon={FaCss3Alt} name="CSS3" color="#1572B6" />
            <SkillIcon Icon={FaJs} name="JavaScript" color="#F7DF1E" />
            <SkillIcon Icon={SiTypescript} name="TypeScript" color="#3178C6" />
            <SkillIcon Icon={SiTailwindcss} name="Tailwind CSS" color="#06B6D4" />
            <SkillIcon Icon={SiCplusplus} name="C++" color="#00599C" />
            <SkillIcon Icon={SiCsharp} name="C#" color="#239120" />
            <SkillIcon Icon={FaPython} name="Python" color="#3776AB" />
            <SkillIcon Icon={FaReact} name="React" color="#61DAFB" />
            <SkillIcon Icon={SiNextdotjs} name="Next.js" color="#000000" />
            <SkillIcon Icon={SiMysql} name="MySQL" color="#4479A1" />
            <SkillIcon Icon={FaNode} name="Node.js" color="#339933" />
          </div>
      </div>
    </div>
  );
};

const SkillIcon = ({ Icon, name, color }: { Icon: any; name: string; color: string }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="flex flex-col items-center justify-center p-2"
  >
    <Icon className="w-full h-auto max-w-[3rem]" style={{ color }} />
    <span className="mt-2 text-sm font-medium text-gray-300">{name}</span>
  </motion.div>
);

export default About;