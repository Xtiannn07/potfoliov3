import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background-start/90 backdrop-blur-sm py-4' : 'py-6'
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-display text-primary">
          PORTFOLIO
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'text-primary after:w-full' : ''}`}
          >
            HOME
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'text-primary after:w-full' : ''}`}
          >
            ABOUT
          </Link>
          <Link 
            to="/projects" 
            className={`nav-link ${isActive('/projects') ? 'text-primary after:w-full' : ''}`}
          >
            PROJECTS
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'text-primary after:w-full' : ''}`}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;