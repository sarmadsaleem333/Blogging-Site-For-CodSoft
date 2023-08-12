import React from 'react'
import postContext from './postContext'
import axios from 'axios';

const PostState = (props) => {

    const host = "http://localhost:5000";

    const uploadPost = async (formData) => {
        const result = await axios.post(`${host}/blogging/posts/addpost`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkNGIyNmY1MWE5NjU4NjVmY2Q4MzFiIn0sImlhdCI6MTY5MTg0MTA5OH0.-wTE1TlC6goGSg89xElnQLalm61gorog0f2vJVHbPzI",
            }
        })
       console.log(result.data);
    }


    return (
        <postContext.Provider  value={{uploadPost}}>
            {props.children}
        </postContext.Provider>
    )
}
export default PostState;