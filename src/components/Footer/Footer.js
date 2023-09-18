import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom';
import Logo from "../../images/logo2.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className='footer'>
                <div className='footer-container'>
                    <div className='footer_logo'>
                        <a href="/">
                            <img src={Logo} alt="logo" width="250px" height="250px" />
                        </a></div>
                    <div className='explore'>
                        <h4>EXPLORE</h4>
                        <div>
                            <ul id="links" >
                                <li>
                                    <Link to="/">HOME</Link>
                                </li>
                                <li>
                                    <Link to="/offerings/" >OFFERINGS</Link>
                                </li>
                                <li>
                                    <Link to="/about/">ABOUT</Link>
                                </li>
                                <li>
                                    <Link to="/whats-new/">WHAT'S NEW?</Link>
                                </li>
                                <li>
                                    <Link to="/contact-us/">CONTACT</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='copyright'>
                    <h6>COPYRIGHT {currentYear } AGILESATTVA</h6>
                    <div className='handle'>
                        <a href="https://www.facebook.com/learnbuildteach/"
                            className="facebook social">
                                <i class="fa-brands fa-facebook-f"></i>       
                        </a>
                        <a href="https://www.twitter.com/jamesqquick" className="twitter social">
                            {/* <FontAwesomeIcon icon={faTwitter} size="1x" /> */}
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/learnbuildteach"
                            className="linkedin">
                            {/* <FontAwesomeIcon icon={faLinkedin} size="1x" /> */}
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer