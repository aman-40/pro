import React from 'react'
import './Dev.css'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';


function Dev() {
    return (
        <div id='dev'>
            <div id="contact">
                <h2>Contact</h2>
                <h3><FaPhone className='circle-icon' style={{ transform: 'scaleX(-1)'}}/> +91 85210 47656</h3>
                <h3><FaEnvelope className='circle-icon'/> kumaramankit113114@gmail.com</h3>
                <h3><FaMapMarkerAlt className='circle-icon'/> Laxmisagar, Darbhanga, Bihar</h3>
                <div id="social">
                    <FaGithub className='circle-icon'/>
                    <FaInstagram className='circle-icon'/>
                    <FaFacebook className='circle-icon'/>
                    <FaLinkedin className='circle-icon'/>
                </div>
            </div>
            <div id="link">
                <h2>Important Links</h2>
                <h3>Our Team</h3>
                <h3>Products</h3>
                <h3>Clients</h3>
                <h3>Blogs</h3>
            </div>
            <div id="mess">
                <div id="developer">
                    <div id="nameplate">
                        <img src='/aman.jpeg' id="pic"></img>
                        <h2>Aman Kumar <br /><span id='namep'>Professional Web Developer</span></h2>
                    </div>
                    <div id="review">
                        <h3>Give <span className='bold'>review</span> or <span className='bold'>interesting ideas</span> <br />straight to my inbox.</h3>
                    </div>
                    <div id="interact">
                        <input type="text" placeholder='Enter Your Message' name="Enter Your Message" id="messanger" />
                        <button type="submit" id='sub'>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dev