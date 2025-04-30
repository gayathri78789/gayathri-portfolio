
import { 
  Code, 
  FileCode, 
  Brush, 
  FileText,
  Html,
  Css,
  Javascript,
  Java,
  Python
} from "lucide-react";

const SkillCard = ({ 
  icon: Icon,
  title, 
  description, 
  proficiency 
}: { 
  icon: React.ElementType, 
  title: string, 
  description: string, 
  proficiency: number 
}) => {
  return (
    <div className="border border-portfolio-neutral-light rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-portfolio-teal-light rounded-lg">
          <Icon className="text-portfolio-teal" size={24} />
        </div>
        <h3 className="font-semibold text-xl">{title}</h3>
      </div>
      <p className="text-portfolio-neutral-medium mb-4">{description}</p>
      <div>
        <div className="flex justify-between mb-1">
          <span className="text-sm">Proficiency</span>
          <span className="text-sm font-medium">{proficiency}%</span>
        </div>
        <div className="skill-progress-bar">
          <div className="skill-progress-fill" style={{ width: `${proficiency}%` }}></div>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skills = [
    {
      title: "HTML",
      description: "Proficient in creating structured, semantic markup for web pages.",
      proficiency: 75,
      icon: Html
    },
    {
      title: "CSS",
      description: "Able to style web pages with responsive and attractive designs.",
      proficiency: 70,
      icon: Css
    },
    {
      title: "JavaScript",
      description: "Understanding of core concepts for dynamic web functionality.",
      proficiency: 65,
      icon: Javascript
    },
    {
      title: "Java",
      description: "Familiar with object-oriented programming principles in Java.",
      proficiency: 60,
      icon: Java
    },
    {
      title: "Python",
      description: "Basic knowledge of Python syntax and programming concepts.",
      proficiency: 55,
      icon: Python
    },
    {
      title: "Documentation",
      description: "Ability to create clear, comprehensive technical documentation.",
      proficiency: 80,
      icon: FileText
    }
  ];

  return (
    <section id="skills" className="bg-portfolio-neutral-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-portfolio-teal mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto text-portfolio-neutral-medium">
            Here are the technologies and skills I'm currently developing as part of my education and personal growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard 
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              proficiency={skill.proficiency}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
