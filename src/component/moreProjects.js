import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './moreProjects.css';

gsap.registerPlugin(ScrollTrigger);

const MoreProjects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const projectItemsRef = useRef([]);

  useEffect(() => {
    // Fade-in effect for section without initial black screen
    gsap.fromTo(
      sectionRef.current,
      { opacity: 1 }, // Start visible
      {
        opacity: 1, // Keep it visible
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Title animation from left to right
    gsap.fromTo(
      titleRef.current,
      { x: -800, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 60%',
          end: 'top 30%',
          scrub: true,
        },
      }
    );

    // Individual project item animations
    projectItemsRef.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { filter: 'blur(10px)', scale: 1 },
        {
          filter: 'blur(0px)',
          scale: 1.2,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'top 10%',
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;
              const blurValue = progress < 0.5 || progress > 0.9 ? 10 : 0;
              const scaleValue = progress >= 0.5 && progress <= 0.9 ? 1.1 : 1;
              gsap.to(item, { filter: `blur(${blurValue}px)`, scale: scaleValue, duration: 0.3 });
            },
          },
        }
      );
    });
  }, []);

  return (
    <div className="more-projects-container" ref={sectionRef}>
      <div className="more-projects-content">
        <div className="more-projects-title" ref={titleRef}>
          More <div className='pro'>Projects</div>
        </div>
        <ul className="projects-list">
          {['MEDIKIT', 'DRINKS', 'RAMAYANA', 'MAHABHARAT'].map((project, index) => (
            <a key={index} href={index < 2 ? `https://${project.toLowerCase()}-unfinished.web.app/` : '#'} target='_blank' rel='noopener noreferrer'>
              <li className="project-item" ref={el => projectItemsRef.current[index] = el}>{project}</li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoreProjects;
