import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration, cart management, and admin dashboard.",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team features.",
    tags: ["TypeScript", "React", "Firebase", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with forecasts, maps, and location-based alerts.",
    tags: ["React", "OpenWeather API", "Charts.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio showcasing projects with beautiful animations and responsive design.",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

export const Projects = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing various technologies and design approaches.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 animate-fade-in">
          {projects.map((project, index) => (
            <div key={index} style={{ animationDelay: `${index * 0.1}s` }} className="animate-fade-in-up">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
