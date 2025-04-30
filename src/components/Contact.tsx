
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };
  
  return (
    <section id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-portfolio-teal mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto text-portfolio-neutral-medium">
            Interested in collaborating or have questions? Feel free to reach out!
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={5}
                  required
                  className="w-full"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-portfolio-teal hover:bg-portfolio-teal/90"
              >
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>
          
          <div className="flex-1">
            <div className="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <p className="text-portfolio-neutral-medium mb-8">
                  Feel free to reach out through the contact form or connect with me directly via email or LinkedIn.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-portfolio-teal-light rounded-full">
                      <Mail className="text-portfolio-teal" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a 
                        href="mailto:gayathri78789@gmail.com" 
                        className="text-portfolio-neutral-medium hover:text-portfolio-teal transition-colors"
                      >
                        gayathri78789@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-portfolio-teal-light rounded-full">
                      <Linkedin className="text-portfolio-teal" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/in/kona-gayathri-055b9a290/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-portfolio-neutral-medium hover:text-portfolio-teal transition-colors"
                      >
                        kona-gayathri
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 md:mt-0 p-6 bg-portfolio-neutral-light rounded-lg">
                <p className="text-center font-medium text-portfolio-neutral">
                  "Looking forward to connecting with industry professionals and fellow students!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
