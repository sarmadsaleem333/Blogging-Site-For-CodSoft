import React, { useState } from 'react'
import postContext from './postContext'
import axios from 'axios';

const PostState = (props) => {

    const [posts, setPosts] = useState([]);
    const [myPosts, setMyPosts] = useState([]);
    const [requiredPost, setrequiredPost] = useState({});
    const host = "http://localhost:3333";

    const uploadPost = async (formData) => {
        const result = await axios.post(`${host}/blogging/posts/addpost`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "auth-token": localStorage.getItem("token"),
            }
        })
        return result.data;
    };
    const getPosts = async () => {
        let response = await axios.get(`${host}/blogging/posts/getallposts`, {
            headers: {
                "Content-Type": "multipart/form-data",
                "auth-token": localStorage.getItem("token"),
            }
        })
        setPosts(response.data);
    }
    const getRequiredPost = async (id) => {
        let response = await axios.get(`${host}/blogging/posts/getpostofrequiredid/${id}`, {
            headers: {
                "Content-Type": "multipart/form-data",
                "auth-token": localStorage.getItem("token"),
            }
        })
        setrequiredPost(response.data);
    }
    const getMyPosts = async () => {
        let response = await axios.get(`${host}/blogging/posts/getmyposts`, {
            headers: {
                "Content-Type": "multipart/form-data",
                "auth-token": localStorage.getItem("token"),
            }
        })

        setMyPosts(response.data);
    }
    const searchPosts = async (query) => {
        const result = await axios.get(`${host}/blogging/search/searchitems/?q=${query}`, {
            headers: {
                "Content-Type": "multipart/form-data",
                "auth-token": localStorage.getItem("token"),
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
                    "auth-token": localStorage.getItem("token"),
                }
            });
            return response;
        } catch (error) {
            console.log(error)
        }
    }
    const editPost = async (formData,id) => {
        const result = await axios.put(`${host}/blogging/posts/editpost/${id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "auth-token": localStorage.getItem("token"),
            }
        })
        return result.data;
    };
    return (
        <postContext.Provider value={{ uploadPost, getPosts, posts, searchPosts, myPosts, getMyPosts, deletePost, getRequiredPost, requiredPost,editPost }}>
            {props.children}
        </postContext.Provider>
    )
}

export default PostState;