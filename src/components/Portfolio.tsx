
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const Portfolio = () => {
  const placeholderProjects = [
    {
      title: "Future Project",
      description: "A placeholder for upcoming work and projects as I continue my learning journey.",
      tags: ["Coming Soon"],
      image: "public/placeholder.svg"
    },
    {
      title: "Learning Project",
      description: "This space will showcase my practical exercises and learning milestones.",
      tags: ["In Progress"],
      image: "public/placeholder.svg"
    },
    {
      title: "Collaborative Work",
      description: "Reserved for future team projects and collaborative efforts.",
      tags: ["Planned"],
      image: "public/placeholder.svg"
    }
  ];

  return (
    <section id="portfolio">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h2>
          <div className="w-20 h-1 bg-portfolio-teal mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto text-portfolio-neutral-medium">
            As I'm in the early stages of my journey, this section will grow with my experience. 
            Here are placeholders for future projects that I'm excited to develop.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {placeholderProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border-portfolio-neutral-light">
              <div className="h-48 bg-portfolio-neutral-light flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-16 h-16 opacity-50"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                <p className="text-portfolio-neutral-medium">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs bg-portfolio-teal-light text-portfolio-teal rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 p-4">
                <Button 
                  variant="outline" 
                  className="text-portfolio-neutral hover:text-portfolio-teal hover:border-portfolio-teal transition-colors w-full"
                  disabled
                >
                  Coming Soon
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-portfolio-neutral-medium italic">
            Check back soon to see my portfolio grow with new projects and experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
