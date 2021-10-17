import React from 'react';
import BlogPost from './BlogPost';
import BlogLeftSide from './BlogLeftSide';
import BlogRightSide from './BlogRightSide';
import "../blog.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
    FaArrowLeft,
    FaArrowRight
} from "react-icons/fa";

export default function BlogMain() {
    return (<Router>
                <div className="main-left-side">
                    <BlogLeftSide/>
                </div>
                <Switch>
                    <Route exact path="/blog/home">
                        <div className="main-middle-side">
                            <div className="post-heading">
                                LATEST POSTS
                            </div>
                            <BlogPost/>
                            <div className="post-footer">
                                <div className="post-footer-newer footer-item"><FaArrowLeft /> Recent</div>
                                <div className="post-footer-older footer-item">Older <FaArrowRight /></div>
                            </div>
                        </div>
                    </Route>
                </Switch>
                <div className="main-right-side">
                    <BlogRightSide/>
                </div>
            </Router>      
    )
}
