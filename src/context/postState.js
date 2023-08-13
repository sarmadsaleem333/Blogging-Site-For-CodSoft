import React, { useState } from 'react'
import postContext from './postContext'
import axios from 'axios';

const PostState = (props) => {

    const[posts,setPosts]=useState([]);
    const host = "http://localhost:5000";

    const uploadPost = async (formData) => {
        const result = await axios.post(`${host}/blogging/posts/addpost`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkNGIyNmY1MWE5NjU4NjVmY2Q4MzFiIn0sImlhdCI6MTY5MTg0MTA5OH0.-wTE1TlC6goGSg89xElnQLalm61gorog0f2vJVHbPzI",
            }
        })
        return result.data;
    };
    const getPosts = async() => {
        let response = await axios.get(`${host}/blogging/posts/getmyposts`, {
            headers: {
                "Content-Type": "multipart/form-data",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkNGIyNmY1MWE5NjU4NjVmY2Q4MzFiIn0sImlhdCI6MTY5MTg0MTA5OH0.-wTE1TlC6goGSg89xElnQLalm61gorog0f2vJVHbPzI",
            }
        })
        setPosts(response.data);
    }


    return (
        <postContext.Provider value={{ uploadPost,getPosts,posts }}>
            {props.children}
        </postContext.Provider>
    )
}
export default PostState;