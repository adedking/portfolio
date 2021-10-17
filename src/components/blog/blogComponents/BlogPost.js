import React from 'react';
// import { useSelector } from 'react-redux';
// import { ActionTypes } from '../../../redux/actionTypes/actionTypes';
import img from '../../authentication/img.jpg';
import { connect } from 'react-redux'
import {
    FaShareAlt,
    FaEye,
    FaCommentAlt,
    FaRegThumbsUp
} from "react-icons/fa";


function BlogPost( props ) {

    const posts = props.posts

    const postRenderList = posts.map(post => {
        const {id, image,likes,comments,views,shares, title, body, category, date } = post
        return (
            <div className="blog-post" key={id}>
                <div className="post-image">
                    <img src={img} alt={image} />
                </div>
                <div className="post-body">
                    <div className="post-body-main">
                        <div className="post-main-title">{title}</div>
                        <div className="post-main-cat-date">
                            <div className="post-date">{date}</div>
                            <div className="post-category">Category: {category}</div>
                        </div>
                        <div className="post-main-body">{body.split(' ').slice(0,15).join(" ")} <button className="read-more-button">Read More...</button></div>                
                    </div>
                    <div className="post-body-footer">
                        <div className="post-icons"><FaRegThumbsUp /> {likes}</div>
                        <div className="post-icons"><FaCommentAlt /> {comments}</div>
                        <div className="post-icons"><FaEye /> {views}</div>
                        <div className="post-icons"><FaShareAlt /> {shares}</div>
                    </div>
                </div>
            </div>
        )
    })

    return <>{ posts.length > 0 ? 
            postRenderList: 
            <div>No Post To Display</div> 
            }</>
}

const mapStateToProps = (state) => ({
    posts : state.allPosts.posts,
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost)
