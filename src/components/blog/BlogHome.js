import React, {useState} from 'react';
import BlogSidenav from './blogComponents/BlogSidenav';
import BlogNav from './blogComponents/BlogNav';
import BlogFooter from './blogComponents/BlogFooter';
import BlogMain from './blogComponents/BlogMain';
// import MainAds from './blogComponents/MainAds';
import "./blog.css";


export default function BlogHome() {

    const [toggleIsActive, setToggleIsActive] = useState (false)

    return (
        <div className="blog-home">
            <div className="blog-nav">
                <BlogNav setToggleIsActive={setToggleIsActive} toggleIsActive={toggleIsActive} />
            </div>
            {/* <div className="main-ads">
                <MainAds />
            </div> */}
            <div className={`blog-sidebar ${toggleIsActive ? "side-active" : ""}`}>
                <BlogSidenav setToggleIsActive={setToggleIsActive} toggleIsActive={toggleIsActive} />
            </div>
            <div className="blog-main">
                <BlogMain />
            </div>
            <div className="footer">
                <BlogFooter />
            </div>
            
        </div>
    )
}
