import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import "./Hero.css";

gsap.registerPlugin(TextPlugin);

const Hero = () => {
    const heroRef = useRef(null);
    const textRefs = useRef([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            [0, 1,3,4,5, 6].forEach((index) => {
                gsap.fromTo(
                    textRefs.current[index],
                    { text: { value: "0.1.0.1.0.1.", scrambleText: textRefs.current[index].textContent } },
                    { text: textRefs.current[index].textContent, duration: 5, ease: "power3.out" }
                );
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="hero-container" ref={heroRef}>
            <div className="hero-content">
                <h1 ref={(el) => textRefs.current[0] = el}>STUNNING</h1>
                <h1 ref={(el) => textRefs.current[1] = el}>BRANDS</h1>
                <h1 className="digital" ref={(el) => textRefs.current[2] = el}>
                    & DIGITAL
                    <div className="hero-description">
                        <div ref={(el) => textRefs.current[3] = el}>FREELANCER</div>
                        <div ref={(el) => textRefs.current[4] = el}>PENTESTER</div>
                        <div ref={(el) => textRefs.current[5] = el}>WEB DEVELOPER</div>
                    </div>
                </h1>
                <h1 ref={(el) => textRefs.current[6] = el}>EXPERIENCES</h1>
                <div className="work-seen-on">
                    <p ref={(el) => textRefs.current[7] = el}>WORK SEEN ON</p>
                    <div className="logos">
                        <img src="profile/public/logo192.png" alt="Medikit" />
                        <img src="path-to-yahoo-logo" alt="Drinks" />
                        <img src="path-to-f3-logo" alt="RAMAYANA" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
