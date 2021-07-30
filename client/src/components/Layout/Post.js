import React from 'react'
import './Post.css'

const Post = ({ title, titleDescription, date, innerHtml }) => {

    return <>
        <div class="post_card">
            <h2>{title}</h2>
            <h5>{titleDescription}, {date.toDateString()}</h5>
            {/* <div class="fakeimg" style={{ height: "200px" }}>Image</div> */}
            <div dangerouslySetInnerHTML={{ __html: innerHtml }} style={{ ' font-size': '30px' }} />
            {/* <p>{text}</p> */}
            {/* <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p> */}
        </div>
    </>
}

export default Post
