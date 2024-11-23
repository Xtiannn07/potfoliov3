import Navbar from '../components/Navbar';
import { Github, Mail, User } from 'lucide-react';
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useState } from 'react';
import ModalContactForm from '../components/ModalContactForm';


const Index = () => {
  const [sectionRef, isVisible, isScrollingDown] = useIntersectionObserver();

const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div 
      ref={sectionRef}
      className={`min-h-screen section-content ${
        isVisible ? 'visible' : isScrollingDown ? 'slide-down' : 'slide-up'
      }`}
    >
      <main className="container mx-auto pt-20">
        <section className="flex flex-col md:flex-row items-center justify-between px-0 sm:px-4 min-h-[calc(100vh-8rem)]">
          <div className="flex-1 space-y-6 animate-fade-in-out">
            <h1 className="text-5xl md:text-7xl font-bold">
              CHRISTIAN MARC
              <br />
              <span className="text-primary">GALINGAN</span>
            </h1>
            <p className="text-xl text-gray-400">
              PROGRAMMER / FRONTEND DEVELOPER
            </p>
            <div className="flex gap-4 justify-center lg:justify-start"> 
              <button
                onClick={handleModalToggle}
                className="cta-button">
                Hire Me
              </button>

              {isModalOpen && <ModalContactForm onClose={handleModalToggle} />}

              <a href="/Galingan_Resume.pdf" className="cta-button" 
              target="_blank" rel="noopener noreferrer">RESUME</a>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center relative z-10 animate-fade-in-out">
            <div className="w-4/5 h-auto rounded-full mt-8
              overflow-hidden border-4 border-primary ">
              <img
                src="./Gradpic.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;