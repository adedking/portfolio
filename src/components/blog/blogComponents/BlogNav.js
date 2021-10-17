import React from 'react';
import "../blog.css";
import {
    FaBars,
} from "react-icons/fa";

export default function BlogNav({setToggleIsActive, toggleIsActive }) {
    
    return (
        <>
            <div className="nav-item side-toggle"><FaBars onClick={() => setToggleIsActive(!toggleIsActive)} /></div>
            <div className="nav-item blog-main-title"> ADE'S BLOG</div>
            <div className="nav-item auth-button-group">
                <button className="blog-login-button auth-bottons">Login</button>
                <button className="blog-signup-button auth-bottons">Sign Up</button>
            </div>
        </>
    )
}
