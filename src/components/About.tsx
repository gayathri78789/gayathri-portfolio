
import { Code, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="bg-portfolio-neutral-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-portfolio-teal mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="flex-1 space-y-6">
            <p className="text-lg">
              I'm Gayathri, a second-year B.Tech student pursuing Computer Science Engineering at VSM College of Engineering. 
              With a deep passion for technology, I'm constantly learning and exploring new skills in the world of software development.
            </p>
            <p>
              My journey in tech began with learning programming fundamentals, and I've since developed skills in various languages 
              and technologies. I'm particularly interested in web development and software engineering, with a goal to create 
              impactful solutions through innovative technology.
            </p>
            <p>
              As I continue my educational journey, I'm eager to gain practical experience through projects, 
              internships, and collaborations that will help shape my future in the tech industry.
            </p>
            
            <div className="pt-4">
              <h3 className="font-semibold text-xl mb-4">My Goals</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="border-portfolio-teal-light hover:shadow-md transition-shadow">
                  <CardContent className="flex gap-4 items-center p-4">
                    <div className="p-2 bg-portfolio-teal-light rounded-full">
                      <Code className="text-portfolio-teal" />
                    </div>
                    <div>
                      <h4 className="font-medium">Technical Mastery</h4>
                      <p className="text-sm text-portfolio-neutral-medium">Develop expertise in modern web technologies</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-portfolio-teal-light hover:shadow-md transition-shadow">
                  <CardContent className="flex gap-4 items-center p-4">
                    <div className="p-2 bg-portfolio-teal-light rounded-full">
                      <GraduationCap className="text-portfolio-teal" />
                    </div>
                    <div>
                      <h4 className="font-medium">Continuous Learning</h4>
                      <p className="text-sm text-portfolio-neutral-medium">Stay updated with emerging technologies</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-portfolio-teal">Education</h3>
                <div className="space-y-4">
                  <div className="relative pl-8 pb-8 border-l border-portfolio-teal-light">
                    <div className="absolute top-0 left-0 w-4 h-4 -ml-2 rounded-full bg-portfolio-teal"></div>
                    <h4 className="font-medium">B.Tech in Computer Science Engineering</h4>
                    <p className="text-sm text-portfolio-neutral-medium">VSM College of Engineering</p>
                    <p className="text-sm text-portfolio-neutral-medium">2022 - Present</p>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute top-0 left-0 w-4 h-4 -ml-2 rounded-full bg-portfolio-teal-light border-2 border-portfolio-teal"></div>
                    <h4 className="font-medium">High School</h4>
                    <p className="text-sm text-portfolio-neutral-medium">Completed with excellence</p>
                    <p className="text-sm text-portfolio-neutral-medium">2022</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-portfolio-teal-light rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
