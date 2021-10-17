import React from 'react';
import {
    FaTimes,
} from "react-icons/fa";

export default function BlogSidenav({setToggleIsActive, toggleIsActive }) {
    return (
        <>
            <div className="side-close">
                <div className="side-header">ADE'S BLOG</div>
                <FaTimes onClick={() => setToggleIsActive(!toggleIsActive)} className="close-icon" />
            </div>
            <div className="side-main">
                <div className="side-main-item">Home</div>
                <div className="side-main-item">Business</div>
                <div className="side-main-item">Technology</div>
                <div className="side-main-item">Lifestyle</div>
                <div className="side-main-item">Entertainment</div>
            </div>
            <div className="side-social"></div>
            <div className="side-footer"></div>
        </>
    )
}
