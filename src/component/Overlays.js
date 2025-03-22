import React, { useEffect, useState } from "react";
import gsap from "gsap";
import "./Overlays.css";

const Overlays = () => {
    const [boxes, setBoxes] = useState([]);

    useEffect(() => {
        const numRows = Math.floor(window.innerHeight / 60);
        const numCols = Math.floor(window.innerWidth / 60);
        const totalBoxes = numRows * numCols;
        setBoxes(new Array(totalBoxes).fill(0));
    }, []);

    useEffect(() => {
        if (boxes.length === 0) return;
        
        gsap.fromTo(".box", {
            opacity: 1,
            scale: 1,
            rotation: "random(-180, 180)",
            x: 0,
            y: 0,
        }, {
            opacity: 0,
            y: "random(-100, 100)",
            x: "random(-100, 100)",
            scale: 0.3,
            rotation: 0,
            duration: 1,
            stagger: {
                amount: 2,
                grid: [Math.floor(window.innerHeight / 60), Math.floor(window.innerWidth / 60)],
                from: "random"
            },
            ease: "power2.out",
            onComplete: () => {
                setTimeout(() => {
                    gsap.to(".box", {
                        opacity: 0,
                        y: "random(-100, 100)",
                        x: "random(-100, 100)",
                        scale: 0.5,
                        rotation: "random(-180, 180)",
                        duration: 1,
                        stagger: {
                            amount: 2,
                            grid: [Math.floor(window.innerHeight / 60), Math.floor(window.innerWidth / 60)],
                            from: "random"
                        },
                        ease: "power2.in"
                    });
                }, 2000);
            }
        });
    }, [boxes]);

    return (
        <div className="overlay-container">
            {boxes.map((_, index) => (
                <div key={index} className="box" />
            ))}
        </div>
    );
};

export default Overlays;
