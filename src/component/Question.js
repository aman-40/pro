import React, { useEffect, useState, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./question.css";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const faqData = [
    { question: "DO YOU DO WEB DESIGN OR WEB DEVELOPMENT?", answer: "I do both web design and web development." },
    { question: "I'M AN AGENCY, DO YOU DEVELOP FIGMA DESIGNS?", answer: "Yes, I develop websites from Figma designs." },
    { question: "WHY DO I DEVELOP SOLELY USING WEBFLOW?", answer: "Webflow provides flexibility and speed." },
    { question: "HOW MUCH DOES IT COST?", answer: "It depends on the project requirements." },
    { question: "IS THERE ANY EXTRA COST INVOLVED?", answer: "No extra hidden costs." },
    { question: "HOW LONG DOES IT TAKE?", answer: "Depends on the project complexity." },
    { question: "DO I NEED A DEVELOPER TO MAKE FUTURE UPDATES ON MY WEBSITE?", answer: "No, you can update content yourself." }
];

const Question = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const qmarkRef = useRef(null);

    useEffect(() => {
        if (qmarkRef.current) {
            gsap.fromTo(qmarkRef.current,
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: qmarkRef.current,
                        start: 'top 80%',
                        end: 'top 60%',
                        scrub: 1,
                    },
                }
            );
        }
    }, []);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="question">
            <h1 className="qmark" ref={qmarkRef}>?</h1>
            <div className="faq-container">
                <h1 className="faq-title">
                    COMMON
                    <p className="faq-subtitle">SOME QUESTIONS <br />PEOPLE USUALLY ASK</p>
                </h1>
                <h1 className="faq-title">QUESTIONS</h1>
                <div className="faq-list">
                    {faqData.map((item, index) => (
                        <div key={index} className="faq-item" onClick={() => toggleAnswer(index)}>
                            <div className="faq-question">
                                <span>{item.question}</span>
                                <span className="faq-toggle">{openIndex === index ? "-" : "+"}</span>
                            </div>
                            {openIndex === index && <p className="faq-answer">{item.answer}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Question;
