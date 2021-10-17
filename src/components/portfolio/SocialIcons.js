import React from 'react';
import ReactTooltip from 'react-tooltip';
import "./portfolio.css";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
} from "react-icons/fa";

export default function SocialIcons() {
    return (
        <div className="social-div">
            <a className="social-icon" href="https://www.linkedin.com/in/adedokun-agunbiade-312041b2" target="_blank" rel="noreferrer"><FaLinkedinIn data-tip="Linked In" /></a>
            <a className="social-icon" href="https://web.facebook.com/adedcrowndking/about" target="_blank" rel="noreferrer"><FaFacebookF data-tip="Facebook"/></a>
            <a className="social-icon" href="https://twitter.com/agunbiadeao" target="_blank" rel="noreferrer"><FaTwitter data-tip="Twitter"/></a>
            <a className="social-icon" href="https://instagram.com/adedokun.agunbiade" target="_blank" rel="noreferrer"><FaInstagram data-tip="Instagram"/></a>
            <ReactTooltip place="top" type="light" effect="float"/>
        </div>
    )
}
