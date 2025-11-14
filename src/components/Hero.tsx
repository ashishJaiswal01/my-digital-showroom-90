import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Your Name
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            Full Stack Developer & Designer
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Building beautiful, functional web applications with modern technologies.
            Passionate about creating seamless user experiences.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center items-center mt-8">
          <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-shadow" asChild>
            <a href="https://ashishjaiswal01.github.io/profile/" target="_blank" rel="noopener noreferrer">
              <Download className="h-5 w-5" />
              View Resume
            </a>
          </Button>
          
          <div className="flex gap-3">
            <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
