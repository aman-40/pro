import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const TRAIL_COUNT = 4;

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<(HTMLDivElement | null)[]>([]);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const glow = glowRef.current;
    const trails = trailsRef.current;

    if (!cursor || !glow) return;

    const onMouseMove = (e: MouseEvent) => {
      // Main cursor moves quickly
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      });
      
      // Snake trail follows with staggered delay
      gsap.to(trails, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
      });

      // Ambient glow follows slowly
      gsap.to(glow, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: 'power2.out',
      });
    };

    const onMouseDown = () => {
      gsap.to(cursor, { scale: 0.8, duration: 0.2 });
      gsap.to(trails, { scale: 0.5, duration: 0.2 });
      gsap.to(glow, { scale: 1.5, opacity: 0.8, duration: 0.2 });
    };

    const onMouseUp = () => {
      gsap.to(cursor, { scale: 1, duration: 0.2 });
      gsap.to(trails, { scale: 1, duration: 0.2 });
      gsap.to(glow, { scale: 1, opacity: 0.5, duration: 0.2 });
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-64 h-64 -mt-32 -ml-32 rounded-full bg-primary/20 blur-[80px] pointer-events-none z-[9998] transition-opacity"
        style={{ opacity: 0.5 }}
      />
      
      {/* Trailing snake circles */}
      {Array.from({ length: TRAIL_COUNT }).map((_, i) => {
        const size = 20 - i * 3; // 20, 17, 14, 11
        return (
          <div
            key={i}
            ref={(el) => {
              if (el) trailsRef.current[i] = el;
            }}
            className="fixed top-0 left-0 rounded-full bg-primary mix-blend-difference pointer-events-none z-[9999] shadow-[0_0_10px_rgba(0,212,255,0.5)]"
            style={{ 
              width: `${size}px`, 
              height: `${size}px`,
              marginTop: `-${size / 2}px`,
              marginLeft: `-${size / 2}px`,
              opacity: 0.9 - i * 0.15
            }}
          />
        );
      })}

      {/* Main leading cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 -mt-4 -ml-4 rounded-full bg-white mix-blend-difference pointer-events-none z-[10000] shadow-[0_0_15px_rgba(255,255,255,0.9)]"
      />
    </>
  );
};

export default CustomCursor;
