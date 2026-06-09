import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    document.addEventListener('open-contact', handleOpen);
    return () => document.removeEventListener('open-contact', handleOpen);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Placeholder for EmailJS integration
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        setIsOpen(false);
      }, 2000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-[#0a0f25] border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] p-6 overflow-hidden"
          >
            <div className="absolute -inset-20 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl rounded-full opacity-30 pointer-events-none" />
            
            <button 
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors z-[60] border border-transparent hover:border-white/10 cursor-pointer"
            >
              <X size={18} />
            </button>

            <h3 className="text-2xl font-bold mb-2 flex items-center gap-2 relative z-10">
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(0,212,255,0.8)]" />
              Let's Connect
            </h3>
            <p className="text-[13px] md:text-sm text-gray-400 mb-6 relative z-10 leading-relaxed">
              I'm currently looking for new opportunities. Send me a message and I'll get back to you!
            </p>

            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:bg-black/60 focus:border-primary/50 transition-all"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:bg-black/60 focus:border-primary/50 transition-all"
                />
              </div>
              <textarea 
                placeholder="Your Message" 
                rows={4}
                required
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:bg-black/60 focus:border-primary/50 transition-all resize-none custom-scrollbar"
              />
              <button 
                type="submit" 
                disabled={status !== 'idle'}
                className="group relative w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden shadow-lg shadow-primary/20"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  {status === 'idle' && <><Send size={16} /> Send Message</>}
                  {status === 'sending' && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
                  {status === 'success' && <><CheckCircle2 size={16} /> Message Sent!</>}
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
