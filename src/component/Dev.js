import React, { useEffect, useRef } from 'react';
import './Dev.css';
import { FaInstagram, FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import gsap from 'gsap';
import SplitType from 'split-type';

function Dev() {
    const reviewRef = useRef(null);

    useEffect(() => {
        const text = new SplitType(reviewRef.current, { type: 'words' });

        gsap.fromTo(
            text.words,
            { opacity: 0, y: -20 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 1,
                scrub:2,
                ease: "power3.out",
                repeat: -1, // Infinite repeat
                yoyo: true // Makes it animate back and forth
            }
        );
    }, []);

    return (
        <div id='dev'>
            <div id="mess">
                <div id="developer">
                    <div id="review" ref={reviewRef}>
                        <h3>Give <span className='bold'>review</span> or <span className='bold'>interesting ideas</span> straight to my inbox.</h3>
                    </div>
                    <input className='inputing' type='name' placeholder='Your Name' />
                    <input className='inputing' type='email' placeholder='Your Gmail' />
                    <div id="interact">
                        <textarea type="text" placeholder='Enter Your Message' name="Enter Your Message" id="messanger" />
                    </div>
                    <button type="submit" id='sub'>Send</button>
                </div>
            </div>
            <div id="contact">
                <div id="social">
                    <FaGithub className='circle-icon github' />
                    <FaInstagram className='circle-icon insta' />
                    <FaFacebook className='circle-icon fb' />
                    <FaLinkedin className='circle-icon ld' />
                </div>
            </div>
        </div>
    );
}

export default Dev;
