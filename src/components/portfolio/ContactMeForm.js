import React from 'react'
import { FaRegEnvelope, FaUserAlt,FaEnvelopeOpenText, FaPenAlt, FaTelegramPlane } from "react-icons/fa";
import "./portfolio.css";

export default function ContactMeForm() {
    return (
        <form className="contact-me-form">
            <p className="contact-header">Send a Message</p>
            <div className="contact-form-details">
                <div className="form-group">
                    <div className="input-button-div">
                        <FaUserAlt className="contact-input-button"/>
                        <input type="text" placeholder="Full Name" className="contact-form-input" name="name"></input>
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-button-div">
                        <FaRegEnvelope className="contact-input-button"/>
                        <input type="email" placeholder="Email" className="contact-form-input" name="email"></input>
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-button-div">
                        <FaPenAlt className="contact-input-button"/>
                        <input type="text" placeholder="Subject" className="contact-form-input" name="subject"></input>
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-button-div">
                        <FaEnvelopeOpenText className="contact-input-button"/>
                        <textarea rows={5} placeholder="Message" className="contact-form-input" name="message"></textarea>
                    </div>
                </div>
            </div>
            <button type="submit" className="send-message-button">Send Message<FaTelegramPlane className="send-button-icon"/></button>
        </form>
    )
}
