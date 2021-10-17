import React from 'react'
import { connect } from 'react-redux'

export const topPost = (props) => {
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    posts : state.allPosts.posts
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(topPost)
