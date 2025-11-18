import React from "react";
import { ProjectCard } from "./ProjectCard";

// IMPORTANT: Images must be imported for Vite to process them correctly!
import careerConversationImg from "@/images/career_conversation.jpg";

const projects = [
  {
    title: "Career Conversation",
    description:
      "A dynamic, interactive AI version of my resume. Users, interviewers, and recruiters can ask questions about my career and instantly get detailed answers — hosted on Hugging Face Space.",
    tags: ["Gradio", "Python", "ML", "Hugging Face Spaces"],
    image: careerConversationImg,
    liveUrl: "https://huggingface.co/spaces/ashish-portfolio/career_conversation",
    githubUrl: ""
  }
];

export const Projects = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">Featured Projects</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A selection of my work showcasing the best of my engineering, AI, and design skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="animate-fadeIn"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
