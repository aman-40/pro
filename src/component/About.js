import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const splitText = new SplitType(textRef.current, { types: "chars" });

    const ctx = gsap.context(() => {
      // Title animation (From left to position)
      gsap.fromTo(
        titleRef.current,
        { autoAlpha: 0, x: -150 }, // Start position
        {
          autoAlpha: 1,
          x: 0,
          // duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 70%",
            end: "top 50%",
            scrub: 3,
          },
        }
      );

      // Text character animation (Scroll-controlled)
      gsap.fromTo(
        splitText.chars,
        { autoAlpha: 0, scale: 4, rotationX: -180, transformOrigin: "50% 50%" },
        {
          autoAlpha: 1,
          scale: 1,
          rotationX: 0,
          ease: "power3.out",
          stagger: 0.05,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
            end: "bottom 20%", // Animation progresses over this scroll range
            scrub: 3, // Scroll-based control
          },
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
