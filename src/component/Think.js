import React from "react";
import "./think.css";

const Think = () => {
    return (
        <>
            <div className="think-container">
                <h1 className="title">THOUGHTFUL
                </h1>
                <h1 className="title titleflex" >PROCESS<p className="subtitle">I THINK A LOT</p></h1>
            </div>
            <div className="think-card">
                <div className="process-cards">
                    <div className="card">
                        <h2>01/<span>ANALYSIS</span></h2>
                        <p>
                        We begin with a live workshop to define core problems, challenges, and project goals. This phase ensures a well-structured strategic plan before moving forward.


                        </p>
                    </div>
                    <div className="card">
                        <h2>02/<span>RESEARCH</span></h2>
                        <p>
                        Competitive & market research is conducted to identify the unique opportunities that differentiate your brand and solution from the competition.
                        </p>
                    </div>
                    <div className="card">
                        <h2>03/<span>DESIGN</span></h2>
                        <p>
                        In this phase, we transform ideas into visual prototypes and UX/UI designs, ensuring a seamless and intuitive user experience, sound feels better.
                        </p>
                    </div>
                    <div className="card">
                        <h2>04/<span>DEVELOPMENT</span></h2>
                        <p>
                        Our team brings the designs to life using modern technologies and frameworks. We focus on scalability, performance, and optimized code.
                        </p>
                    </div>
                    <div className="card">
                        <h2>05/<span>ONBOARDING</span></h2>
                        <p>
                        We rigorously test functionality, responsiveness, security, and performance to ensure a bug-free and smooth user experience.

</p>
                    </div>
                    <div className="card">
                        <h2>06/<span>SUPPORT</span></h2>
                        <p>
                        Once everything is tested and approved, we deploy the project and provide ongoing support, updates, and optimizations for long-term success.

</p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Think;
