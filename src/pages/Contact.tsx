import { Mail, Phone, MapPin, Send } from "lucide-react";
import ContactForm from "../components/ContactForm";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const Contact = () => {
  const [sectionRef, isVisible, isScrollingDown] = useIntersectionObserver();

  return (
    <div 
      ref={sectionRef}
      className={`container mx-auto px-4 py-12 section-content ${
        isVisible ? 'visible' : isScrollingDown ? 'slide-down' : 'slide-up'
      }`}
    >
      <h1 className="text-4xl font-bold mb-8 text-primary">Get in Touch</h1>
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg mb-8">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center text-gray-300">
              <Mail className="w-6 h-6 mr-4 text-primary" />
              <span>contact@example.com</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Phone className="w-6 h-6 mr-4 text-primary" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center text-gray-300">
              <MapPin className="w-6 h-6 mr-4 text-primary" />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800/50 p-6 rounded-lg transform transition-all duration-300 hover:-translate-y-1">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Send className="w-6 h-6 mr-3 text-primary" />
            Send a Message
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
