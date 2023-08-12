import React from 'react'
import BlogItems from './BlogItems'
export default function Blog() {
    const blogs = [
        {
            "_id": "64d4cebc1b9cc2c9e631a8d1",
            "text": "hello i am world inn this pathetic feeling",
            "comments": 1,
            "topic": "sarmad",
            "date": "2023-08-12T08:06:58.603Z",
            "image": "sarmad.png"
        },
        {
            "_id": "64d4cebc1b9cc2c9e631a8d1",
            "text": "hello i am world inn this pathetic feeling",
            "comments": 1,
            "topic": "sarmad",
            "date": "2023-08-12T08:06:58.603Z",
            "image": "sarmad.png"
        },
    ]
    return (

        <div className="row my-3">
            <h2  className='text-center'>Blogs Feed</h2>
            {blogs.map((blog) => {
                return <BlogItems key={blog._id} blog={blog}  />
            })}
        </div>

    )
}
