import React from "react";
import "./Hero.css";

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1>STUNNING </h1>
                <h1>BRANDS </h1>
                <h1 className="digital">& DIGITAL<div className="hero-description">
                    <div>FREELANCER </div><div>PENTESTER </div><div>WEB DEVELOPER</div>
                </div></h1>
                
                <h1>EXPERIENCES</h1>
                <div className="work-seen-on">
                    <p>WORK SEEN ON</p>
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
