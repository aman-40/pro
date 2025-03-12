import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { autoAlpha: 0, x: -100 },
        { autoAlpha: 1, x: 0, duration: 1.2, ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo(
        textRef.current,
        { autoAlpha: 0, y: 50 },
        { autoAlpha: 1, y: 0, duration: 1.2, delay: 0.4, ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 30%',
            end: 'top 10%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="about-container" ref={containerRef}>
      <div className="about-content">
        <p className="about-title" ref={titleRef}>
          <strong>A</strong>bout
        </p>
        <p className="about-text" ref={textRef}>
          <strong>Aman Kumar</strong> is an independent designer focused on crafting immersive digital experiences.
          He believes every project is an opportunity to deliver a unique and memorable digital experience that
          delights users and builds brand equity.
        </p>
      </div>
    </div>
  );
};

export default About;
