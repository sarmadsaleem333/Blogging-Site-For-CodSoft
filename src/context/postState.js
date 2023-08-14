import React, { useEffect, useState } from 'react'
import postContext from './postContext'
import axios from 'axios';

const PostState = (props) => {

    const [posts, setPosts] = useState([]);
    const [myPosts, setMyPosts] = useState([]);
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
    const getPosts = async () => {
        let response = await axios.get(`${host}/blogging/posts/getmyposts`, {
            headers: {
                "Content-Type": "multipart/form-data",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkNGIyNmY1MWE5NjU4NjVmY2Q4MzFiIn0sImlhdCI6MTY5MTg0MTA5OH0.-wTE1TlC6goGSg89xElnQLalm61gorog0f2vJVHbPzI",
            }
        })
        setPosts(response.data);
    }
    const getMyPosts = async () => {
        let response = await axios.get(`${host}/blogging/posts/getmyposts`, {
            headers: {
                "Content-Type": "multipart/form-data",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkNGIyNmY1MWE5NjU4NjVmY2Q4MzFiIn0sImlhdCI6MTY5MTg0MTA5OH0.-wTE1TlC6goGSg89xElnQLalm61gorog0f2vJVHbPzI",
            }
        })
     
        setMyPosts(response.data);
    }
    const searchPosts = async (query) => {
        const result = await axios.get(`${host}/blogging/search/searchitems/?q=${query}`, {
            headers: {
                "Content-Type": "multipart/form-data",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkNGIyNmY1MWE5NjU4NjVmY2Q4MzFiIn0sImlhdCI6MTY5MTg0MTA5OH0.-wTE1TlC6goGSg89xElnQLalm61gorog0f2vJVHbPzI",
            }
        })

        setPosts(result.data);

    }
    const deletePost = async (id) => {
        try {
            
            const response = await fetch(`${host}/blogging/posts/deletepost/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkNGIyNmY1MWE5NjU4NjVmY2Q4MzFiIn0sImlhdCI6MTY5MTg0MTA5OH0.-wTE1TlC6goGSg89xElnQLalm61gorog0f2vJVHbPzI",
                }
            });
           return response ;
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <postContext.Provider value={{ uploadPost, getPosts, posts, searchPosts, myPosts, getMyPosts,deletePost }}>
            {props.children}
        </postContext.Provider>
    )
}

export default PostState;