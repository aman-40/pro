import { GraduationCap, Code2, ShieldAlert, Rocket } from 'lucide-react';

const ABOUT_ITEMS = [
  {
    icon: <GraduationCap size={16} className="text-primary drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]" />,
    text: "B.Tech Computer Science Engineering (2023-2027)"
  },
  {
    icon: <Code2 size={16} className="text-secondary drop-shadow-[0_0_8px_rgba(124,58,237,0.8)]" />,
    text: "Frontend Developer focusing on React & Animations"
  },
  {
    icon: <ShieldAlert size={16} className="text-[#00FF9D] drop-shadow-[0_0_8px_rgba(0,255,157,0.8)]" />,
    text: "Currently learning Backend, AI/ML, and Cybersecurity"
  },
  {
    icon: <Rocket size={16} className="text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.8)]" />,
    text: "Interested in creating scalable digital products"
  }
];

const AboutCard = () => {
  return (
    <div className="w-full h-full flex flex-col min-h-0">
      <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center gap-2 flex-shrink-0">
        <span className="w-2 h-2 rounded-full bg-primary" />
        About Me
      </h3>
      
      <div className="flex-1 overflow-y-auto pr-3 md:pr-4 pb-2 custom-scrollbar flex flex-col gap-2.5 min-h-0">
        {ABOUT_ITEMS.map((item, idx) => (
          <div 
            key={idx} 
            className="relative flex items-center gap-3 md:gap-4 px-3 py-2.5 md:px-4 md:py-3 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/5 hover:border-white/20 transition-all duration-300 overflow-hidden shrink-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex-shrink-0 p-1.5 md:p-2 rounded-lg bg-black/40 border border-white/5 transition-all duration-300">
              {item.icon}
            </div>
            <p className="relative z-10 text-[10.5px] md:text-[11.5px] font-medium text-gray-300 leading-relaxed transition-colors duration-300 hover:text-white pr-1">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCard;
