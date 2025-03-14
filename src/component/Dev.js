import React from 'react'
import './Dev.css'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';


function Dev() {
    return (
        <div id='dev'>
            <div id="mess">
                <div id="developer">
                    <div id="review">
                        <h3>Give <span className='bold'>review</span> or <span className='bold'>interesting ideas</span> straight to my inbox.</h3>
                    </div>
                    <input className='inputing' type='name' placeholder='Your Name'  >
                    </input>
                    <input className='inputing' type='email' placeholder='Your Gmail'>
                    </input>
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
    )
}

export default Dev