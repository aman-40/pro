import React, { useEffect, useRef } from 'react';
import './Dev.css';
import { FaInstagram, FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import gsap from 'gsap';
import SplitType from 'split-type';
import emailjs from '@emailjs/browser'; 

export const Dev = () =>{
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

    const form = useRef();

  const sentEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, {
        publicKey: process.env.REACT_APP_PUBLIC_KEY,
      })
      .then(
        () => {
          alert('SUCCESS!');
        },
        (error) => {
          alert('FAILED...', error.text);
        },
      );
  };

    return (
        <div id='dev'>
            <div id="mess">
                <form id="developer" onSubmit={sentEmail} ref={form} >
                    <div id="review" ref={reviewRef}>
                        <h3>Give <span className='bold'>review</span> or <span className='bold'>interesting ideas</span> straight to my inbox.</h3>
                    </div>
                    <input className='inputing' type='name' name='name' placeholder='Your Name' required/>
                    <input className='inputing' type='email' name='email' placeholder='Your Gmail' required/>
                    <div id="interact">
                        <textarea type="text" placeholder='Enter Your Message' name="message" id="messanger" required/>
                    </div>
                    <button type="submit" id='sub'>Send</button>
                </form>
            </div>
            <div id="contact">
                <div id="social">
                    <a href='https://github.com/aman-40' target='_blank'> 
                    <FaGithub className='circle-icon github' />
                    </a>
                    <a href='https://www.instagram.com/a_m_a_n.035/ ' target='_blank'>  
                    <FaInstagram className='circle-icon insta' />

                    </a>
                    <a href='https://www.facebook.com/profile.php?id=100041928604077' target='_blank'>      
                    <FaFacebook className='circle-icon fb' />

                    </a>
                    <a href='https://www.linkedin.com/in/unfinished-aman/' target='_blank'> 
                    <FaLinkedin className='circle-icon ld' />

                    </a>
                </div>
            </div>
        </div>
    );
}

export default Dev;
