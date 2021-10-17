import React from 'react';
import './login-form.css';
import { FaRegEnvelope, FaKey, FaUserAlt } from "react-icons/fa";
// import loginImage from "../login-image-two.jpg";
import { Link } from "react-router-dom";

export default function SignupForm({ signUp, setUsername, setName, setConfirmPassword, setPassword }) {

    function handleChange (e) {
        e.preventDefault()
        if (e.target.name === "username") {
            setUsername(e.target.value)
        } else if (e.target.name === "password") {
            setPassword(e.target.value)
        } else if (e.target.name === "name") {
            setName(e.target.value)
        } else if (e.target.name === "confirm-password")
            setConfirmPassword(e.target.value)
    }
    return (
        <div>
            <form onSubmit={signUp} className="signup-one-form">
                <p className="login-header">Sign Up</p>
                <div className="form-details">
                    <div className="form-group">
                        <div className="input-button-div">
                            <FaUserAlt className="input-button"/>
                            <input type="text" placeholder="Full Name" className="form-input" name="name" onChange={handleChange}></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-button-div">
                            <FaRegEnvelope className="input-button"/>
                            <input type="email" placeholder="Email" className="form-input" name="username" onChange={handleChange}></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-button-div">
                            <FaKey className="input-button"/>
                            <input type="password" placeholder="Enter Your Password" className="form-input" name="password" onChange={handleChange}></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-button-div">
                            <FaKey className="input-button"/>
                            <input type="password" placeholder="Confirm Password" className="form-input" name="confirm-password" onChange={handleChange}></input>
                        </div>
                    </div>
                </div>
                <div className="login-button-group">
                    <button type="submit" className="submit-button login-button">Sign Up</button>
                </div>
                <div className="signup-forgot">
                    <div className="signup">ALREADY HAVE AN ACCOUNT?<Link to="/login-one" className="signup-login"> LOGIN</Link></div>
                </div>
            </form>
        </div>
    )
}
