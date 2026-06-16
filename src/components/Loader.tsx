import { motion } from 'framer-motion';

const Icons = {
  car: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a2 2 0 0 0-1.6-.8H8.3a2 2 0 0 0-1.6.8L4 11l-5.16.86a1 1 0 0 0-.84.99V16h3m10 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM7 16a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"/></svg>,
  ufo: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4m-4-4 2 4m6-4-2 4M4 14a14.14 14.14 0 0 0 16 0M2 12a10.1 10.1 0 0 0 20 0c0-1.66-4.48-3-10-3S2 10.34 2 12Z"/></svg>,
  snake: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12s4.5 10 10 10 10-4.5 10-10Z"/><path d="M8 12s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01"/><path d="M15 9h.01"/></svg>,
  spider: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="14" r="4" />
    <circle cx="12" cy="8" r="2" />
    <path d="M10 12c-2 0-4-1-4-3" />
    <path d="M14 12c2 0 4-1 4-3" />
    <path d="M9 14c-3 0-5 1-5 3" />
    <path d="M15 14c3 0 5 1 5 3" />
    <path d="M10 16c-2 1-3 3-3 5" />
    <path d="M14 16c2 1 3 3 3 5" />
  </svg>
};

const Loader = () => {
  const elements = [
    { id: 'car', icon: Icons.car, color: '#00D4FF' },
    { id: 'ufo', icon: Icons.ufo, color: '#39FF14' },
    { id: 'snake', icon: Icons.snake, color: '#FF00FF' },
    { id: 'spider', icon: Icons.spider, color: '#FF0040' }
  ];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050816]"
    >
      <div className="flex flex-col items-center">
        {/* Center Core */}
        <div className="relative w-40 h-40 flex items-center justify-center">
          <motion.div
            animate={{ scale: [0.8, 1.1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 rounded-full bg-[#050816] border-[3px] border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center justify-center"
          >
             <div className="w-6 h-6 rounded-full bg-white shadow-[0_0_15px_#fff] animate-pulse" />
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-16 flex gap-1"
        >
          {["L", "O", "A", "D", "I", "N", "G"].map((letter, index) => (
            <motion.span
              key={index}
              animate={{ opacity: [0.3, 1, 0.3], y: [0, -5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.1,
                ease: "easeInOut"
              }}
              className="text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-[#39FF14] to-[#FF0040]"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
