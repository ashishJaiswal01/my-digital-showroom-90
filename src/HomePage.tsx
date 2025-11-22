import React, { useState, useEffect } from 'react';
import { 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Terminal, 
  Globe, 
  Zap,
  User,
  ChevronDown
} from 'lucide-react';

// --- Components ---

const Navbar = ({ scrolled }: { scrolled: boolean }) => (
  <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-md py-4 shadow-lg border-b border-slate-700/50' : 'bg-transparent py-6'}`}>
    <div className="container mx-auto px-6 flex justify-between items-center">
      <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent cursor-pointer">
        Ashish.dev
      </div>
      <div className="hidden md:flex space-x-8 text-slate-300 font-medium">
        <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
        <a href="#projects" className="hover:text-cyan-400 transition-colors">Apps</a>
        <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
      </div>
      <a 
        href="https://ashishjaiswal01.github.io/profile/" 
        target="_blank" rel="noopener noreferrer"
        className="px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center gap-2"
      >
        <Download size={16} />
        <span>View Resume</span>
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
    {/* Background Glows */}
    <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px] animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>

    <div className="container mx-auto px-6 relative z-10 text-center">
      <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-medium">
        🚀 Available for new projects
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
        Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Digital Universes</span>
        <br /> One Line at a Time.
      </h1>
      <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
        Senior Engineering Leader with around 20 years of experience leading global teams in building high- reliability, 
        cloud-native (AWS/Multi-Cloud) SaaS platforms. Possesses deep expertise in AL/ML, event-driven distributed systems, API-first microservices, CI/CD pipelines, cybersecurity, and 
        regulatory compliance. PMI-ACP certified.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a href="#projects" className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-1">
          View My Work
        </a>
        <a href="https://ashishjaiswal01.github.io/profile/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-slate-800 text-white font-bold text-lg border border-slate-700 hover:bg-slate-700 transition-all flex items-center gap-2">
          <Download size={20} />
          View Resume
        </a>
      </div>

      <div className="mt-20 animate-bounce text-slate-500 flex justify-center">
        <ChevronDown size={32} />
      </div>
    </div>
  </section>
);

const ProjectTile = ({ title, description, tags, icon: Icon, links }: any) => (
  <div className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2">
    <div className="p-8 h-full flex flex-col">
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 rounded-xl bg-slate-800 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
          <Icon size={28} />
        </div>
        <div className="flex gap-3">
          {links.github && (
            <a href={links.github} className="text-slate-400 hover:text-white transition-colors" title="View Code">
              <Github size={20} />
            </a>
          )}
          {links.demo && (
            <a href={links.demo} className="text-slate-400 hover:text-cyan-400 transition-colors" title="Live Demo">
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{title}</h3>
      <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

export const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Personal Co-worker",
      description: "An intelligent AI assistant built with Python that helps automate daily workflows, manage schedules, and provides code assistance.",
      tags: ["Python", "Flask", "OpenAI", "React"],
      icon: User,
      links: { github: "#", demo: "#" }
    },
    {
      title: "Talk To My Resume",
      description: "Automated content creation tool utilizing LangChain to script, generate visuals, and edit short-form videos for social media.",
      tags: ["LangChain", "FFmpeg", "Next.js", "AI"],
      icon: Zap,
      links: { github: "#", demo: "https://talktomyresume.onrender.com/" }
    },
    {
      title: "Cloud Dashboard",
      description: "A comprehensive SaaS dashboard for monitoring server metrics in real-time with beautiful data visualizations.",
      tags: ["React", "Langraph", "Python"],
      icon: Globe,
      links: { github: "#", demo: "#" }
    },
    {
      title: "Crypto Tracker",
      description: "Real-time cryptocurrency portfolio tracker featuring live price updates, alerts, and historical performance charts.",
      tags: ["TypeScript", "Node.js", "WebSocket"],
      icon: Terminal,
      links: { github: "#", demo: "#" }
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar scrolled={scrolled} />
      
      <main>
        <Hero />
        
        {/* Projects / App Tiles Section */}
        <section id="projects" className="py-24 px-6 bg-slate-900/50">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Apps</h2>
                <p className="text-slate-400 max-w-xl">
                  A collection of applications I've built to solve real-world problems.
                  Hover over the tiles to see more details.
                </p>
              </div>
              <a href="https://github.com/ashishJaiswal01" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium mt-4 md:mt-0 group">
                View GitHub Profile 
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectTile key={index} {...project} />
              ))}
            </div>
            
            <div className="mt-12 text-center md:hidden">
              <a href="https://github.com/ashishJaiswal01" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-400 font-medium">
                View GitHub Profile <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Contact / Footer */}
        <section id="contact" className="py-24 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950 to-slate-950 -z-10"></div>
          
          <div className="container mx-auto text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Let's Work Together</h2>
            <p className="text-slate-400 text-lg mb-10">
              Whether you have a question or just want to say hi, my inbox is always open!
            </p>
            
            <a href="mailto:ashish.jaisi@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-cyan-50 transition-colors mb-16">
              <Mail size={20} />
              Say Hello
            </a>

            <div className="flex justify-center gap-8 mb-8">
              <a href="https://github.com/ashishJaiswal01" className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ashish-jais/" className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-blue-400 hover:bg-slate-700 transition-all">
                <Linkedin size={24} />
              </a>
              <a href="#" className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all">
                <Globe size={24} />
              </a>
            </div>
            
            <p className="text-slate-600 text-sm">
              © {new Date().getFullYear()} Ashish Jaiswal. Built with React & Tailwind.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};
