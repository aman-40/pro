import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const PROJECTS = [
  {
    title: "Medical Shop Inventory",
    tech: "React, Node.js, PostgreSQL",
    desc: "A comprehensive system for managing medical shop inventory, tracking stock, and automating alerts.",
    liveLink: "https://mmh-clinic.web.app/",
    githubLink: "https://github.com/aman-40/medicare"
  },
  {
    title: "College Management System",
    tech: "React, Vite, Tailwind, Node.js, Express",
    desc: "A robust platform for college administration, automating student tracking and academic workflows.",
    liveLink: "https://dce-vert.vercel.app/",
    githubLink: "https://github.com/harshbuttru3/dce"
  },
  {
    title: "Hospital Management System",
    tech: "React, Node.js, Express, Firebase",
    desc: "Comprehensive hospital management platform for efficient patient and staff tracking.",
    liveLink: "https://medikit-247.web.app/",
    githubLink: "https://github.com/harshbuttru3/medikit"
  },
  {
    title: "SodaCanes",
    tech: "React, Vite, CSS",
    desc: "A beautifully animated and highly interactive landing page for a beverage brand.",
    liveLink: "https://drinks-unfinished.web.app/",
    githubLink: "https://github.com/aman-40/Soda"
  },
  {
    title: "Elementum",
    tech: "React, Vite, GSAP",
    desc: "A creative frontend project featuring an interactive and modern user interface.",
    liveLink: "https://aman-40.github.io/trams/",
    githubLink: "https://github.com/aman-40/trams"
  }
];

const ProjectsCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden">
      <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-primary" />
        Featured Projects
      </h3>
      
      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar flex flex-col gap-2 md:gap-3">
        {PROJECTS.map((project, idx) => (
          <div 
            key={idx}
            className="group relative bg-white/5 border border-white/5 rounded-xl p-3 md:p-4 cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-primary/50"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h4 className="font-bold text-lg md:text-lg leading-tight">{project.title}</h4>
            <p className="text-xs md:text-xs text-primary mt-1 mb-2 md:mb-2 font-mono">{project.tech}</p>
            
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-sm md:text-sm text-gray-400 mb-3 md:mb-3 leading-snug">{project.desc}</p>
                  <div className="flex items-center gap-3 md:gap-3">
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 md:gap-1 text-xs md:text-xs px-4 py-2 md:px-3 md:py-1.5 rounded-md bg-primary text-black font-medium hover:bg-white transition-colors"
                    >
                      <ExternalLink size={14} className="md:w-3 md:h-3" /> Live Demo
                    </a>
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 md:gap-1 text-xs md:text-xs px-4 py-2 md:px-3 md:py-1.5 rounded-md bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      <FaGithub size={14} className="md:w-3 md:h-3" /> Source
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 shadow-[inset_0_0_20px_rgba(0,212,255,0.1)]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
