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
    // gsap.fromTo(
    //   sectionRef.current,
    //   { opacity: 1 }, // Start visible
    //   {
    //     opacity: 1, // Keep it visible
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: sectionRef.current,
    //       start: 'top 80%',
    //       end: 'top 50%',
    //       toggleActions: 'play none none reverse',
    //     },
    //   }
    // );

    // Title animation from left to right
    gsap.fromTo(
      titleRef.current,
      { x: -800, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'none',
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
        { x: 150, opacity: 0 },
      {
        x: -50,
        opacity: 1,
        duration: 1,
        ease: 'bounce.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          end: 'top 50%',
          scrub: true,
          markers:false,
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
          {[
            { name: 'MEDIKIT', link: 'https://medikit-247.web.app/' },
            { name: 'DRINKS', link: 'https://drinks-unfinished.web.app/' },
            { name: 'DESIRE', link: "" },
            { name: 'MAHABHARAT', link: 'https://mahabharat-unfinished.web.app/' }
          ].map((project, index) => (
            <a key={index} href={project.link} target='_blank' rel='noopener noreferrer'>
              <li className="project-item" ref={el => projectItemsRef.current[index] = el}>{project.name}</li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoreProjects;