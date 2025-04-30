
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-portfolio-teal">Gayathri</span>
            </h1>
            <p className="text-lg md:text-xl text-portfolio-neutral mb-6">
              A Computer Science Engineering student with a passion for exploring new technologies.
            </p>
            <div className="space-y-2">
              <p className="text-portfolio-neutral-medium">
                Second-year B.Tech at VSM College of Engineering
              </p>
              <p className="text-portfolio-neutral-medium">
                Specializing in HTML, CSS, JavaScript, Java, Python
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="bg-portfolio-teal hover:bg-portfolio-teal/90">
                <a href="#contact" className="px-2">Contact Me</a>
              </Button>
              <Button variant="outline" className="border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal-light">
                <a href="#about" className="px-2">Learn More</a>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end animate-fade-in">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-portfolio-teal-light">
              <img 
                src="/public/lovable-uploads/0ea2a605-ff6e-45a7-b4ed-2aed5e93aa54.png" 
                alt="Profile of Gayathri" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
