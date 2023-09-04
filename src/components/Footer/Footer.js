import React from 'react'
import "./Footer.css"
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
                                <a href="index.html">HOME</a>
                            </li>
                            <li>
                                <a href="index.html">OFFERINGS</a>
                            </li>
                            <li>
                                <a href="index.html">ABOUT</a>
                            </li>
                            <li>
                                <a href="index.html">WHAT'S NEW?</a>
                            </li>
                            <li>
                                <a href="index.html">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
            <div className='container'>
            <div className='copyright'>
                <h6>COPYRIGHT 2020 AGILESATTVA</h6>
                <div className='handle'>
                    <a href="https://www.facebook.com/learnbuildteach/"
                        className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} size="1x" />
                    </a>
                    <a href="https://www.twitter.com/jamesqquick" className="twitter social">
                        <FontAwesomeIcon icon={faTwitter} size="1x" />
                    </a>
                    <a href="https://www.instagram.com/learnbuildteach"
                        className="linkedin">
                        <FontAwesomeIcon icon={faLinkedin} size="1x" />
                    </a>
                </div>
            </div>
            </div>
            </footer> 
        
    )
}

export default Footer