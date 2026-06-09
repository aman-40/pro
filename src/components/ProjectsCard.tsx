import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const PROJECTS = [
  {
    title: "Medical Shop Inventory",
    tech: "React, Node.js, MongoDB",
    desc: "A comprehensive system for managing medical shop inventory, tracking stock, and automating alerts.",
  },
  {
    title: "Face Recognition Attendance",
    tech: "Python, OpenCV, AI",
    desc: "Automated attendance tracking using facial recognition technology.",
  },
  {
    title: "Ben 10 Interactive Website",
    tech: "HTML, CSS, GSAP",
    desc: "A highly interactive and animated fan website showcasing GSAP animations.",
  },
  {
    title: "Bhagavad Gita Digital Book",
    tech: "React, Tailwind",
    desc: "A beautifully designed digital reader for the Bhagavad Gita.",
  },
  {
    title: "TRAMS Project",
    tech: "Full Stack",
    desc: "Transit Route and Management System for efficient route planning.",
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
            <h4 className="font-semibold text-base md:text-lg leading-tight">{project.title}</h4>
            <p className="text-[10px] md:text-xs text-primary mt-1 mb-1.5 md:mb-2 font-mono">{project.tech}</p>
            
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-xs md:text-sm text-gray-400 mb-2 md:mb-3 leading-snug">{project.desc}</p>
                  <div className="flex items-center gap-2 md:gap-3">
                    <button className="flex items-center gap-1 text-[10px] md:text-xs px-2.5 md:px-3 py-1.5 rounded-md bg-primary text-black font-medium hover:bg-white transition-colors">
                      <ExternalLink size={12} /> Live Demo
                    </button>
                    <button className="flex items-center gap-1 text-[10px] md:text-xs px-2.5 md:px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 transition-colors">
                      <FaGithub size={12} /> Source
                    </button>
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
