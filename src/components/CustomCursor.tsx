import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

type Mode = 'car' | 'ufo' | 'snake' | 'spider';

// ---------------- Icons ---------------- //
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

// ---------------- Car Physics ---------------- //
const CarCursor = ({ mouse }: { mouse: React.MutableRefObject<{ x: number, y: number }> }) => {
  const carRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const car = carRef.current;
    const glow = glowRef.current;
    if (!car || !glow) return;

    let pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let vel = { x: 0, y: 0 };
    let angle = 0;
    let afId: number;

    const tick = () => {
      const dx = mouse.current.x - pos.x;
      const dy = mouse.current.y - pos.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 1) {
        const speedMultiplier = Math.min(dist / 40, 2.5);
        const ax = (dx / dist) * 0.4 * speedMultiplier;
        const ay = (dy / dist) * 0.4 * speedMultiplier;
        vel.x += ax;
        vel.y += ay;
      }

      vel.x *= 0.95;
      vel.y *= 0.95;
      pos.x += vel.x;
      pos.y += vel.y;

      const speed = Math.sqrt(vel.x * vel.x + vel.y * vel.y);
      if (speed > 0.5) {
        const targetAngle = Math.atan2(vel.y, vel.x) * (180 / Math.PI);
        let angleDiff = targetAngle - angle;
        while (angleDiff > 180) angleDiff -= 360;
        while (angleDiff < -180) angleDiff += 360;
        angle += angleDiff * 0.06; 
      }

      car.style.transform = `translate(${pos.x}px, ${pos.y}px) rotate(${angle}deg)`;
      glow.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      afId = requestAnimationFrame(tick);
    };

    afId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(afId);
  }, []);

  return (
    <div className="pointer-events-none" style={{ zIndex: 999999, position: 'relative' }}>
      {/* Cyan Glow */}
      <div ref={glowRef} className="fixed top-0 left-0 w-48 h-48 -mt-24 -ml-24 rounded-full bg-[#00D4FF]/20 blur-[60px] pointer-events-none" style={{ zIndex: 999998 }} />
      <div ref={carRef} className="fixed top-0 left-0 w-10 h-5 -mt-2.5 -ml-5 pointer-events-none" style={{ zIndex: 999999 }}>
        <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.5))' }}>
          <rect x="4" y="2" width="32" height="16" rx="4" fill="#00D4FF" fillOpacity="0.5" filter="blur(3px)" />
          <rect x="4" y="2" width="32" height="16" rx="4" fill="#050816" stroke="#00D4FF" strokeWidth="2" />
          <path d="M28 2 L36 6 L36 14 L28 18 Z" fill="#00D4FF" fillOpacity="0.15" />
          <rect x="22" y="4" width="5" height="12" rx="2" fill="#00D4FF" />
          <rect x="8" y="5" width="4" height="10" rx="1" fill="#7C3AED" />
          <rect x="34" y="3" width="4" height="3" rx="1" fill="#FFFFFF" />
          <rect x="34" y="14" width="4" height="3" rx="1" fill="#FFFFFF" />
          <rect x="2" y="3" width="3" height="3" rx="1" fill="#FF0040" />
          <rect x="2" y="14" width="3" height="3" rx="1" fill="#FF0040" />
        </svg>
      </div>
    </div>
  );
};

// ---------------- UFO Physics ---------------- //
const UfoCursor = ({ mouse }: { mouse: React.MutableRefObject<{ x: number, y: number }> }) => {
  const ufoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ufo = ufoRef.current;
    if (!ufo) return;

    let pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let vel = { x: 0, y: 0 };
    let time = 0;
    let afId: number;

    const tick = () => {
      time += 0.05;
      const dx = mouse.current.x - pos.x;
      const dy = mouse.current.y - pos.y;
      
      vel.x += dx * 0.02;
      vel.y += dy * 0.02;
      vel.x *= 0.88; 
      vel.y *= 0.88;

      pos.x += vel.x;
      pos.y += vel.y;

      const bobY = Math.sin(time) * 15;
      const tilt = vel.x * 0.5; // Tilt in direction of movement
      
      ufo.style.transform = `translate(${pos.x}px, ${pos.y + bobY}px) rotate(${tilt}deg)`;
      afId = requestAnimationFrame(tick);
    };

    afId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(afId);
  }, []);

  return (
    <div className="pointer-events-none" style={{ zIndex: 999999, position: 'relative' }}>
      <div ref={ufoRef} className="fixed top-0 left-0 w-[60px] h-[60px] -mt-[30px] -ml-[30px] pointer-events-none" style={{ zIndex: 999999 }}>
        {/* Abduction Beam - Alien Green #39FF14 */}
        <svg className="absolute top-[30px] left-1/2 -translate-x-1/2" width="40" height="80" viewBox="0 0 40 80">
          <polygon points="20,0 0,80 40,80" fill="url(#beamGrad)" opacity="0.4">
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" />
          </polygon>
          <defs>
            <linearGradient id="beamGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#39FF14" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
        {/* UFO Body - Green theme */}
        <svg width="60" height="30" viewBox="0 0 60 30" fill="none" className="absolute top-[15px]">
          <ellipse cx="30" cy="15" rx="30" ry="10" fill="#050816" stroke="#39FF14" strokeWidth="2" />
          <ellipse cx="30" cy="10" rx="15" ry="8" fill="#1A1A24" opacity="0.8" stroke="#39FF14" strokeWidth="1" />
          <circle cx="15" cy="15" r="2" fill="#39FF14">
            <animate attributeName="fill" values="#39FF14;#FFFFFF;#39FF14" dur="1s" repeatCount="indefinite" />
          </circle>
          <circle cx="30" cy="18" r="2" fill="#39FF14">
            <animate attributeName="fill" values="#39FF14;#FFFFFF;#39FF14" dur="1s" begin="0.3s" repeatCount="indefinite" />
          </circle>
          <circle cx="45" cy="15" r="2" fill="#39FF14">
            <animate attributeName="fill" values="#39FF14;#FFFFFF;#39FF14" dur="1s" begin="0.6s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </div>
  );
};

// ---------------- Snake Physics ---------------- //
const SnakeCursor = ({ mouse }: { mouse: React.MutableRefObject<{ x: number, y: number }> }) => {
  const segmentsRef = useRef<(HTMLDivElement | null)[]>([]);
  const pointsRef = useRef(Array.from({ length: 12 }, () => ({ x: -100, y: -100 })));

  useEffect(() => {
    let afId: number;
    const tick = () => {
      const pts = pointsRef.current;
      
      // Head
      pts[0].x += (mouse.current.x - pts[0].x) * 0.4;
      pts[0].y += (mouse.current.y - pts[0].y) * 0.4;
      
      if (segmentsRef.current[0]) {
        segmentsRef.current[0].style.transform = `translate(${pts[0].x}px, ${pts[0].y}px)`;
      }

      // Body follows
      for (let i = 1; i < pts.length; i++) {
        pts[i].x += (pts[i-1].x - pts[i].x) * 0.45;
        pts[i].y += (pts[i-1].y - pts[i].y) * 0.45;
        
        const seg = segmentsRef.current[i];
        if (seg) {
          seg.style.transform = `translate(${pts[i].x}px, ${pts[i].y}px)`;
        }
      }
      afId = requestAnimationFrame(tick);
    };

    afId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(afId);
  }, []);

  return (
    <div className="pointer-events-none" style={{ zIndex: 999999, position: 'relative' }}>
      {Array.from({ length: 12 }).map((_, i) => {
        const size = 24 - i * 1.5;
        const opacity = 1 - (i * 0.08);
        // Neon Pink Theme #FF00FF
        const color = i === 0 ? '#FF00FF' : '#FF66FF';
        return (
          <div
            key={i}
            ref={(el) => { if (el) segmentsRef.current[i] = el; }}
            className="fixed top-0 left-0 rounded-full pointer-events-none"
            style={{
              width: size,
              height: size,
              marginTop: -size / 2,
              marginLeft: -size / 2,
              backgroundColor: color,
              opacity: opacity,
              boxShadow: `0 0 10px ${color}`,
              zIndex: 999999 - i
            }}
          />
        );
      })}
    </div>
  );
};

// ---------------- Spider Physics ---------------- //
const SpiderCursor = ({ mouse }: { mouse: React.MutableRefObject<{ x: number, y: number }> }) => {
  const spiderRef = useRef<HTMLDivElement>(null);
  const webRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    let pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let vel = { x: 0, y: 0 };
    let afId: number;

    const tick = () => {
      // Mouse is the web anchor
      const anchor = mouse.current;
      const dx = anchor.x - pos.x;
      const dy = anchor.y - pos.y;
      
      // Web Tension (Elastic spring towards mouse)
      vel.x += dx * 0.03;
      vel.y += dy * 0.03;

      // Gravity pulling him down
      vel.y += 0.6;

      // Friction
      vel.x *= 0.92;
      vel.y *= 0.92;

      pos.x += vel.x;
      pos.y += vel.y;

      // Spider faces his swinging direction
      const angle = Math.atan2(vel.y, vel.x) * (180 / Math.PI) + 90;

      if (spiderRef.current) {
        spiderRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px) rotate(${angle}deg)`;
      }

      if (webRef.current) {
        webRef.current.setAttribute('x1', pos.x.toString());
        webRef.current.setAttribute('y1', pos.y.toString());
        webRef.current.setAttribute('x2', anchor.x.toString());
        webRef.current.setAttribute('y2', anchor.y.toString());
      }

      afId = requestAnimationFrame(tick);
    };

    afId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(afId);
  }, []);

  return (
    <div className="pointer-events-none" style={{ zIndex: 999999, position: 'relative' }}>
      {/* Web Line */}
      <svg className="fixed top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 999998 }}>
        <line ref={webRef} stroke="#FFFFFF" strokeWidth="2" strokeDasharray="4 2" opacity="0.6" />
      </svg>
      
      <div ref={spiderRef} className="fixed top-0 left-0 w-8 h-8 -mt-4 -ml-4 pointer-events-none" style={{ zIndex: 999999 }}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          {/* Legs Left */}
          <path d="M14 12 Q 8 6 4 10" stroke="#FF0040" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M14 14 Q 6 12 4 16" stroke="#FF0040" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M14 16 Q 6 20 6 24" stroke="#FF0040" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M14 18 Q 10 24 8 30" stroke="#FF0040" strokeWidth="2" fill="none" strokeLinecap="round" />
          
          {/* Legs Right */}
          <path d="M18 12 Q 24 6 28 10" stroke="#FF0040" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M18 14 Q 26 12 28 16" stroke="#FF0040" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M18 16 Q 26 20 26 24" stroke="#FF0040" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M18 18 Q 22 24 24 30" stroke="#FF0040" strokeWidth="2" fill="none" strokeLinecap="round" />
          
          {/* Abdomen */}
          <ellipse cx="16" cy="18" rx="6" ry="8" fill="#FF0040" stroke="#050816" strokeWidth="1" filter="drop-shadow(0 0 4px #FF0040)" />
          {/* Head/Thorax */}
          <circle cx="16" cy="10" r="4" fill="#FF0040" />
          
          {/* Glowing Eyes */}
          <circle cx="14" cy="9" r="1" fill="#00D4FF" filter="drop-shadow(0 0 2px #00D4FF)" />
          <circle cx="18" cy="9" r="1" fill="#00D4FF" filter="drop-shadow(0 0 2px #00D4FF)" />
        </svg>
      </div>
    </div>
  );
};


// ---------------- Main Component ---------------- //
const CustomCursor = ({ loading }: { loading?: boolean }) => {
  const [mode, setMode] = useState<Mode>('car');
  const mouseRef = useRef({ x: -1000, y: -1000 }); // Hide initially offscreen
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    
    // Inject the theme into the document element dynamically
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode, isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [isMobile]);

  if (isMobile) return null; // Completely disable custom cursors and navbar on mobile devices

  return (
    <>
      {/* Navigation Menu / Orbiting Loader */}
      <div 
        className={`fixed z-[999999] ${
          loading 
            ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40" 
            : "left-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 glass p-3 rounded-2xl border border-white/10 shadow-2xl"
        }`}
      >
        {(['car', 'ufo', 'snake', 'spider'] as Mode[]).map((m, i) => {
          const isActive = mode === m;
          let activeColor = '#00D4FF'; // default car
          if (m === 'ufo') activeColor = '#39FF14';
          if (m === 'snake') activeColor = '#FF00FF';
          if (m === 'spider') activeColor = '#FF0040';

          const colorClass = isActive ? 'bg-current' : 'bg-transparent';
          const iconColor = isActive ? 'text-[#050816]' : 'text-white';
          
          if (loading) {
            const rotationStart = i * 90;
            return (
              <motion.div
                key={`orbit-${m}`}
                animate={{ rotate: [rotationStart, rotationStart + 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full pointer-events-none"
              >
                <motion.div 
                  animate={{ rotate: [-rotationStart, -(rotationStart + 360)] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12"
                >
                  {/* The shared element that will fly to the menu */}
                  <motion.div
                    layoutId={`icon-${m}`}
                    className="w-full h-full rounded-full flex items-center justify-center bg-[#050816]/80 backdrop-blur-sm border border-white/10"
                    style={{ color: activeColor, boxShadow: `0 0 20px ${activeColor}40` }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                    >
                      {Icons[m]}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          }

          return (
            <motion.button
              layoutId={`icon-${m}`}
              key={m}
              onClick={() => setMode(m)}
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${colorClass} ${iconColor} hover:bg-white/10`}
              style={{
                color: isActive ? activeColor : 'inherit',
                boxShadow: isActive ? `0 0 15px ${activeColor}` : 'none'
              }}
              title={`Switch to ${m} mode`}
            >
              {Icons[m]}
            </motion.button>
          );
        })}
      </div>

      {/* Render Active Physics Engine */}
      {mode === 'car' && <CarCursor mouse={mouseRef} />}
      {mode === 'ufo' && <UfoCursor mouse={mouseRef} />}
      {mode === 'snake' && <SnakeCursor mouse={mouseRef} />}
      {mode === 'spider' && <SpiderCursor mouse={mouseRef} />}
    </>
  );
};

export default CustomCursor;
