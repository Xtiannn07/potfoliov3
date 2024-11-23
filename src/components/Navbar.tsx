import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full md:w-full z-50 transition-all duration-300 
      md:top-0 bottom-0 md:bottom-auto
      ${isScrolled ? 'bg-background-start/90 backdrop-blur-sm py-4' : 'py-6'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <button 
          onClick={() => scrollToSection('home')}
          className="text-2xl font-display text-primary md:block hidden">
          PORTFOLIO
        </button>

        <div className="flex text-sm md:text-base space-x-auto w-full justify-center md:justify-end">
          <button 
            onClick={() => scrollToSection('home')}
            className={`nav-link ${activeSection === 'home' ? 'text-primary after:w-full' : ''}`}>
            HOME
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className={`nav-link ${activeSection === 'about' ? 'text-primary after:w-full' : ''}`}>
            ABOUT
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className={`nav-link ${activeSection === 'projects' ? 'text-primary after:w-full' : ''}`}>
            PROJECTS
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className={`nav-link ${activeSection === 'contact' ? 'text-primary after:w-full' : ''}`}>
            CONTACT
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;