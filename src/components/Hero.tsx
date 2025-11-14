import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Github, Linkedin, Mail, Award, Cloud, Code2, Shield } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Ashish Jaiswal
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            Senior Engineering Manager
          </p>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Leading global teams in building high-reliability, cloud-native SaaS platforms with proven success in scaling engineering organizations and driving AI/ML initiatives.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex gap-3 items-start p-4 rounded-lg bg-secondary/30 backdrop-blur-sm border border-border/50">
                <Cloud className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sm mb-1">Cloud & Infrastructure</h3>
                  <p className="text-xs text-muted-foreground">AWS/Multi-Cloud SaaS platforms, event-driven distributed systems</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start p-4 rounded-lg bg-secondary/30 backdrop-blur-sm border border-border/50">
                <Code2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sm mb-1">AI/ML & Innovation</h3>
                  <p className="text-xs text-muted-foreground">Generative AI, MLOps, API-first microservices, CI/CD pipelines</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start p-4 rounded-lg bg-secondary/30 backdrop-blur-sm border border-border/50">
                <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sm mb-1">Security & Compliance</h3>
                  <p className="text-xs text-muted-foreground">Cybersecurity, regulatory compliance, operational excellence</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start p-4 rounded-lg bg-secondary/30 backdrop-blur-sm border border-border/50">
                <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sm mb-1">Leadership & Delivery</h3>
                  <p className="text-xs text-muted-foreground">Multi-million dollar programs, team scaling, PMI-ACP certified</p>
                </div>
              </div>
            </div>
          </div>
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
