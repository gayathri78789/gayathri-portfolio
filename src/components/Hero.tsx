
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-neutral-light to-white opacity-50 z-0"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-portfolio-teal-light opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-portfolio-teal opacity-10 blur-2xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div 
            className={`transition-all duration-1000 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-portfolio-teal-light text-portfolio-teal text-sm font-medium mb-6">
              Computer Science Student
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-portfolio-teal relative">
                Gayathri
                <span className="absolute bottom-0 left-0 w-full h-1 bg-portfolio-teal rounded-full"></span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-portfolio-neutral mb-8 max-w-2xl mx-auto">
              A Computer Science Engineering student with a passion for exploring new technologies and building innovative solutions.
            </p>
            
            <div className="space-y-3 mb-8 backdrop-blur-sm bg-white/30 p-6 rounded-lg border border-gray-100 shadow-sm max-w-xl mx-auto">
              <p className="text-portfolio-neutral-medium flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-portfolio-teal inline-block"></span>
                Second-year B.Tech at VSM College of Engineering
              </p>
              <p className="text-portfolio-neutral-medium flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-portfolio-teal inline-block"></span>
                Specializing in HTML, CSS, JavaScript, Java, Python
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-portfolio-teal hover:bg-portfolio-teal/90 shadow-lg hover:shadow-xl transition-all">
                <a href="#contact" className="px-2">Contact Me</a>
              </Button>
              <Button 
                variant="outline" 
                className="border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10 shadow-sm hover:shadow-md transition-all"
              >
                <a href="#about" className="px-2">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer" onClick={scrollToNextSection}>
          <span className="text-sm text-portfolio-neutral-medium mb-2">Scroll Down</span>
          <ChevronDown className="text-portfolio-teal" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
