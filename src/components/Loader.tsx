import { motion } from 'framer-motion';

const Loader = () => {

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
