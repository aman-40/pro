import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const ROLES = [
  "Frontend Developer",
  "MERN Stack Developer",
  "Full Stack Developer",
  "Web Developer",
  "CSE Student"
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center justify-between gap-4 px-2">
      <div className="flex flex-col gap-2 md:gap-3 max-w-2xl h-full justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Hey 👋, I'm <span className="text-gradient">Aman Kumar</span>
        </h1>
        
        <div className="h-8 md:h-10 overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.h2
              key={roleIndex}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-xl md:text-2xl font-medium text-secondary absolute"
            >
              {ROLES[roleIndex]}
            </motion.h2>
          </AnimatePresence>
        </div>

        <p className="text-gray-400 text-xs md:text-sm mt-1 max-w-xl leading-relaxed">
          Crafting <span className="text-gray-200 font-bold inline-block hover:-translate-y-1 hover:rotate-2 hover:scale-105 transition-all duration-300 cursor-default">modern digital experiences</span> through <span className="text-primary font-bold inline-block hover:-translate-y-1 hover:-rotate-3 hover:scale-110 transition-all duration-300 cursor-default">code</span>, <span className="text-secondary font-bold inline-block hover:translate-y-1 hover:rotate-3 hover:scale-110 transition-all duration-300 cursor-default">creativity</span>, and <span className="text-gray-200 font-bold inline-block hover:-translate-y-1 hover:-rotate-2 hover:scale-105 transition-all duration-300 cursor-default">innovation</span>. I'm Aman Kumar, a <span className="text-gray-200 font-bold inline-block hover:-translate-y-1 hover:rotate-1 hover:scale-105 transition-all duration-300 cursor-default">Computer Science Engineering</span> student who enjoys building <span className="text-primary/90 font-bold inline-block hover:translate-y-1 hover:-rotate-2 hover:scale-105 transition-all duration-300 cursor-default">interactive web applications</span>, solving <span className="text-gray-200 font-bold inline-block hover:-translate-y-1 hover:rotate-2 hover:scale-105 transition-all duration-300 cursor-default">real-world problems</span>, and exploring the intersection of <span className="text-gradient font-bold inline-block hover:-translate-y-1 hover:-rotate-1 hover:scale-105 transition-all duration-300 cursor-default">web development, AI, and emerging technologies</span>.
        </p>

        <div className="flex flex-wrap items-center gap-3 mt-2">
          <a 
            href="/aman-resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 md:py-2.5 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 hover:border-primary transition-all duration-300 text-sm font-medium"
          >
            <FileText size={16} />
            <span>Resume</span>
          </a>
          <button 
            onClick={() => document.dispatchEvent(new CustomEvent('open-contact'))}
            className="flex items-center gap-2 px-5 py-2 md:py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white border border-transparent hover:scale-105 transition-all duration-300 text-sm font-medium shadow-lg shadow-primary/20"
          >
            Contact Me
          </button>
          <div className="flex items-center gap-3 ml-2">
            <a href="https://github.com/aman-40" target="_blank" rel="noreferrer" className="p-2 md:p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300">
              <FaGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/unfinished-aman/" target="_blank" rel="noreferrer" className="p-2 md:p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#0A66C2]/50 transition-all duration-300">
              <FaLinkedin size={18} />
            </a>
            <a href="https://www.instagram.com/a_m_a_n.035?utm_source=qr&igsh=MTA3MXZobGtwbGF3dg==" target="_blank" rel="noreferrer" className="p-2 md:p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#E1306C]/50 transition-all duration-300">
              <FaInstagram size={18} />
            </a>
            <a href="https://www.facebook.com/share/18TDUt58wv/" target="_blank" rel="noreferrer" className="p-2 md:p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#1877F2]/50 transition-all duration-300">
              <FaFacebook size={18} />
            </a>
          </div>
        </div>
      </div>
      
      {/* GitHub Activity Graph (Right Side) */}
      <div className="hidden lg:flex relative justify-end pl-4 w-full max-w-[450px]">
        <div className="bg-black/40 border border-white/10 rounded-2xl backdrop-blur-md p-3 overflow-hidden shadow-2xl group hover:border-primary/30 transition-all duration-500 w-full relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="flex items-center justify-between mb-2 px-1">
            <h4 className="text-xs font-bold text-gray-300 tracking-wider flex items-center gap-2">
              <FaGithub className="text-white" />
              CONTRIBUTION ACTIVITY
            </h4>
          </div>
          
          <img 
            src="https://github-readme-activity-graph.vercel.app/graph?username=aman-40&theme=react-dark&hide_border=true&bg_color=transparent&hide_title=true" 
            alt="GitHub Contributions" 
            className="w-full h-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-[0_0_15px_rgba(0,212,255,0.2)]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
