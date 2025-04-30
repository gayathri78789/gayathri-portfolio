
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <footer className="bg-portfolio-neutral py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Gayathri</h3>
            <p className="text-sm mt-1">Computer Science Engineering Student</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button 
              onClick={scrollToTop}
              className="p-2 bg-white rounded-full mb-4 hover:bg-portfolio-teal-light transition-colors"
            >
              <ArrowUp className="text-portfolio-neutral" size={20} />
            </button>
            <p className="text-white text-sm">
              &copy; {new Date().getFullYear()} Gayathri. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
