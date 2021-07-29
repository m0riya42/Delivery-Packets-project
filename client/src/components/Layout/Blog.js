import React from 'react';
import './Blog.css'
import Post from './Post';
import SidePosts from './SidePosts';
const Blog = ({ listOfPosts }) => {
    return <>
        <div class="row" style={{ "flex-direction": "row-reverse" }}>
            <div class="leftcolumn" style={{
                'display': 'flex',
                flexDirection: 'column-reverse'
            }}>
                {listOfPosts.rightPosts.map((post) => {
                    // return <Post title={post.title} titleDescription={post.titleDescription} date={post.date} text={post.text} images={post.images} />
                    return <Post title={post.title} titleDescription={post.titleDescription} date={post.date} text={post.text} images={post.images} />
                })}
            </div>
            <div class="rightcolumn">
                <SidePosts />
            </div>
        </div>
    </>
}

export default Blog