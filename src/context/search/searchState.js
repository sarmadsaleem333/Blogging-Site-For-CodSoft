import React from 'react'
import searchContext from './searchContext'
import axios from 'axios';

const SearchState = (props) => {

    const host = "http://localhost:5000";
    const searchPosts = async (query) => {
        const result = await axios.get(`${host}/blogging/search/searchitems/${query}`, {
            headers: {
                "Content-Type": "multipart/form-data",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkNGIyNmY1MWE5NjU4NjVmY2Q4MzFiIn0sImlhdCI6MTY5MTg0MTA5OH0.-wTE1TlC6goGSg89xElnQLalm61gorog0f2vJVHbPzI",
            }
        })
        return result.data;

    }


    return (
        <searchContext.Provider  >
            {props.children}
        </searchContext.Provider>
    )
}
export default SearchState;