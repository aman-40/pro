import React, { useEffect, useRef } from 'react';
import './Numbers.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Numbers = () => {
  const gridRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;

    // Entrance animation for cards
    gsap.fromTo(
      cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        },
      }
    );

    // Number counting animation
    cards.forEach((card) => {
      const valueEl = card.querySelector('.number-value');
      const targetText = valueEl.textContent || '';

      // Extract numeric portion (handles 1000+, 10+, 15)
      const numeric = parseInt(targetText.replace(/\D/g, ''), 10) || 0;

      const obj = { val: 0 };
      gsap.to(obj, {
        val: numeric,
        duration: Math.min(2, 0.002 * numeric + 1),
        ease: 'power1.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          once: true,
        },
        onUpdate: () => {
          // If original had a plus sign, preserve it
          const hasPlus = /\+$/.test(targetText.trim());
          const display = Math.round(obj.val).toLocaleString();
          valueEl.textContent = hasPlus ? `${display}+` : display;
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf(cards);
    };
  }, []);

  return (
    <section className="numbers-section">
      <div className="numbers-inner">
        <h2 className="numbers-title">SOME NUMBERS.</h2>
        <div className="numbers-grid" ref={gridRef}>
          <div className="number-card" ref={(el) => (cardsRef.current[0] = el)}>
            <div className="number-value">3+</div>
            <div className="number-sub">years of experience</div>
          </div>
          <div className="number-card" ref={(el) => (cardsRef.current[1] = el)}>
            <div className="number-value">50+</div>
            <div className="number-sub">projects</div>
          </div>
          <div className="number-card" ref={(el) => (cardsRef.current[2] = el)}>
            <div className="number-value">10</div>
            <div className="number-sub">professionals</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
