import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Projects />
      <Skills />
      
      <footer className="py-8 text-center text-muted-foreground border-t">
        <p>© 2024 Your Name. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default Index;
