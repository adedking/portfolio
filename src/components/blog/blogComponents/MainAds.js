import React from 'react'
import RoImg from './ropay_pix.jpg';

export default function MainAds() {
    return (
        <div className="media-item">
            <div className="media-sub-item ad-pix">
                <img src={RoImg} alt="Ropay" />
            </div> 
            <div className="media-sub-item ad-text"></div>
        </div>
    )
}
