import React from 'react';
import './login-form.css';
import { FaRegEnvelope, FaKey } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function LoginFormTwo({ login, setUsername, setPassword }) {

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
            <form onSubmit={login} className="login-two-form">
                <p className="login-header-two">Login</p>
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
                    <button type="submit" className="submit-button login-button-two">Login</button>
                </div>
                <div className="signup-forgot">
                    <div className="forgot-pass"><Link to="/forgot-password">FORGOT PASSWORD?</Link></div>
                    <div className="signup">NEW USER? <Link to="/signup-two" className="signup-login">SIGNUP</Link></div>
                </div>
            </form>
        </div>
    )
}
