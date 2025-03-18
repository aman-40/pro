import React, { useEffect, useRef } from 'react';
import './Dev.css';
import { FaInstagram, FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import gsap from 'gsap';
import SplitType from 'split-type';
import emailjs from '@emailjs/browser'; 
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

    const sentEmail = (e) => {
        e.preventDefault();
        alert('Your message has been sent successfully');
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_PUBLIC_KEY)
        .then((response) => {
            console.log("Email sent successfully:", response);
          })
          .catch((error) => {
            console.error("Email sending failed:", error); // Log the full error object
          });
    }

    return (
        <div id='dev'>
            <div id="mess">
                <form id="developer" onSubmit={sentEmail}>
                    <div id="review" ref={reviewRef}>
                        <h3>Give <span className='bold'>review</span> or <span className='bold'>interesting ideas</span> straight to my inbox.</h3>
                    </div>
                    <input className='inputing' type='name' name='namef' placeholder='Your Name' />
                    <input className='inputing' type='email' name='emailf' placeholder='Your Gmail' />
                    <div id="interact">
                        <textarea type="text" placeholder='Enter Your Message' name="message" id="messanger" />
                    </div>
                    <button type="submit" id='sub'>Send</button>
                </form>
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
