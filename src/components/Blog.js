import React, { useContext, useEffect } from 'react'
import BlogItems from './BlogItems'
import postContext from '../context/postContext'
import { useNavigate } from 'react-router-dom';
export default function Blog() {
    const navigate = useNavigate();
    const context = useContext(postContext);
    const { getPosts, posts } = context;

    useEffect(() => {
        if (localStorage.getItem("token")) {
            getPosts();
        }
        else {
            navigate("/login");
        }
    }, [])

    return (

        <div className="row my-3">
            <h2 className='text-center'>Blogs Feed</h2>
            {posts == null ? "" : posts.map((post) => {
                return <BlogItems key={post._id} post={post} />
            })}

        </div>

    )
}
