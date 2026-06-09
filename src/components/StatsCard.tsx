import { Eye, TrendingUp, Sparkles } from 'lucide-react';

const StatsCard = () => {
  return (
    <div className="w-full h-full flex flex-row items-center justify-between px-6 md:px-10 relative overflow-hidden group bg-gradient-to-br from-white/5 to-transparent rounded-xl border border-white/5">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 via-primary/5 to-primary/10 opacity-30 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none" />
      
      <div className="relative z-10 flex items-center gap-3">
        <h4 className="text-[11px] md:text-sm font-bold flex items-center gap-2 md:gap-3 text-gray-200 tracking-widest uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
          <Eye className="text-primary hidden sm:block" size={16} />
          Profile Analytics
          <TrendingUp className="text-secondary hidden sm:block" size={16} />
        </h4>
      </div>
        
      <div className="relative z-10 group/badge hover:z-20 cursor-default">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur-md opacity-30 group-hover/badge:opacity-60 transition duration-500 animate-pulse" />
        <div className="relative bg-black/80 rounded-lg p-2 border border-white/10 flex items-center justify-center shadow-xl backdrop-blur-md group-hover/badge:border-white/30 transition-all duration-300">
          <Sparkles className="absolute -top-1.5 -right-1.5 text-yellow-300 opacity-0 group-hover/badge:opacity-100 group-hover/badge:rotate-12 transition-all duration-500" size={14} />
          <img 
            src="https://komarev.com/ghpvc/?username=aman-40&color=7C3AED&style=for-the-badge&label=PROFILE+VIEWS" 
            alt="Profile Views" 
            className="h-6 md:h-8 opacity-90 group-hover/badge:opacity-100 group-hover/badge:scale-[1.05] transition-all duration-500 drop-shadow-[0_0_10px_rgba(124,58,237,0.5)]"
          />
        </div>
      </div>
      
    </div>
  );
};

export default StatsCard;
