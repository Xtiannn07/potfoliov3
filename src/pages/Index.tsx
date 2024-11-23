import Navbar from '../components/Navbar';
import { Github, Mail, User } from 'lucide-react';
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const Index = () => {
  const [sectionRef, isVisible, isScrollingDown] = useIntersectionObserver();

  return (
    <div 
      ref={sectionRef}
      className={`min-h-screen section-content ${
        isVisible ? 'visible' : isScrollingDown ? 'slide-down' : 'slide-up'
      }`}
    >
      <main className="container mx-auto pt-32">
        <section className="flex flex-col md:flex-row items-center justify-between gap-12 min-h-[calc(100vh-8rem)]">
          <div className="flex-1 space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold">
              CHRISTIAN MARC
              <br />
              <span className="text-primary">GALINGAN</span>
            </h1>
            <p className="text-xl text-gray-400">
              PROGRAMMER / FRONTEND DEVELOPER
            </p>
            <div className="flex gap-4 pt-8">
              <button className="cta-button">RESUME</button>
              <button className="cta-button">CONTACT</button>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary animate-fade-in">
              <img
                src="./lovable-uploads/c0cf2f3d-142d-452a-ab0a-3bb07692004d.png"
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