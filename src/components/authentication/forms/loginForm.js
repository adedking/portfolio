import React from 'react';
import './login-form.css';
import { FaRegEnvelope, FaKey } from "react-icons/fa";
// import loginImage from "../login-image-two.jpg";
import { Link } from "react-router-dom";

export default function LoginForm({ login, setUsername, setPassword, switchPage }) {

    function handleChange (e) {
        e.preventDefault()
        if (e.target.name === "username") {
            setUsername(e.target.value)
        } else if (e.target.name === "password") {
            setPassword(e.target.value)
        }
    }
    return (
        <div>
            <form onSubmit={login} className="login-one-form">
                <p className="login-header">Login</p>
                <div className="form-details">
                    <div className="form-group">
                        <div className="input-button-div">
                            <FaRegEnvelope className="input-button"/>
                            <input type="text" placeholder="Email" className="form-input" name="username" onChange={handleChange}></input>
            
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-button-div">
                            <FaKey className="input-button"/>
                            <input type="password" placeholder="Enter Your Password" className="form-input" name="password" onChange={handleChange}></input>
                        </div>
                    </div>
                </div>
                <div className="login-button-group">
                    <button type="submit" className="submit-button login-button">Login</button>
                </div>
                <div className="signup-forgot">
                    <div className="forgot-pass"><Link to="/forgot-password">FORGOT PASSWORD?</Link></div>
                    <div className="signup">NEW USER? <Link to="/signup" className="signup-login">SIGNUP</Link></div>
                </div>
            </form>
        </div>
    )
}
