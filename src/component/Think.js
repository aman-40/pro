import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./think.css";

gsap.registerPlugin(ScrollTrigger);

const Think = () => {
    const titleRef = useRef(null);
    const titleFlexRef = useRef(null);
    const subtitleRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(titleRef.current, 
            { opacity: 0, x: -200 }, 
            { 
                opacity: 1, 
                x: 0, 
                duration: 1.2, 
                ease: "power3.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%", 
                    toggleActions: "play none none reverse",
                }
            }
        );

        gsap.fromTo(subtitleRef.current, 
            { opacity: 0, x: 500 }, 
            { 
                opacity: 1, 
                x: 0, 
                duration: 1.2, 
                ease: "power3.out", 
                scrollTrigger: {
                    trigger: subtitleRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                }
            }
        );

        gsap.fromTo(titleFlexRef.current, 
            { opacity: 0, x: -200 }, 
            { 
                opacity: 1, 
                x: 0, 
                duration: 1.2, 
                ease: "power3.out", 
                scrollTrigger: {
                    trigger: titleFlexRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                }
            }
        );

        gsap.fromTo(cardsRef.current, 
            { opacity: 0, y: 100 },
            { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                stagger: 0.2, 
                ease: "power3.out", 
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                }
            }
        );

    }, []);

    return (
        <>
            <div className="think-container">
                <h1 className="title" ref={titleRef}>THOUGHTFUL</h1>
                <h1 className="title titleflex" ref={titleFlexRef}>
                    PROCESS <p className="subtitle" ref={subtitleRef}>I THINK A LOT</p>
                </h1>
            </div>
            <div className="think-card">
                <div className="process-cards">
                    {[
                        { id: "01", title: "ANALYSIS", text: "We begin with a live workshop to define core problems, challenges, and project goals. This phase ensures a well-structured strategic plan before moving forward." },
                        { id: "02", title: "RESEARCH", text: "Competitive & market research is conducted to identify the unique opportunities that differentiate your brand and solution from the competition." },
                        { id: "03", title: "DESIGN", text: "In this phase, we transform ideas into visual prototypes and UX/UI designs, ensuring a seamless and intuitive user experience, sound feels better." },
                        { id: "04", title: "DEVELOPMENT", text: "Our team brings the designs to life using modern technologies and frameworks. We focus on scalability, performance, and optimized code." },
                        { id: "05", title: "ONBOARDING", text: "We rigorously test functionality, responsiveness, security, and performance to ensure a bug-free and smooth user experience." },
                        { id: "06", title: "SUPPORT", text: "Once everything is tested and approved, we deploy the project and provide ongoing support, updates, and optimizations for long-term success." }
                    ].map((item, index) => (
                        <div className="card" key={index} ref={el => cardsRef.current[index] = el}>
                            <h2>{item.id}/<span>{item.title}</span></h2>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Think;
