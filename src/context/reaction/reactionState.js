import React, { useState } from 'react'
import reactionContext from './reactionContext';

const ReactionState = (props) => {

    const [reactions, setReactions] = useState([]);

    const host = "http://localhost:3333";

    //here id is of post
    const getReactions = async (id) => {
        const response = await fetch(`${host}/blogging/reaction/getreaction/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkNGIyNmY1MWE5NjU4NjVmY2Q4MzFiIn0sImlhdCI6MTY5MTg0MTA5OH0.-wTE1TlC6goGSg89xElnQLalm61gorog0f2vJVHbPzI",
            }
        });
        const json = await response.json();
        setReactions(json);
    }

    //here too id is of post to which you are reacting too

    const addReaction = async (id, comment) => {
        const response = await fetch(`${host}/blogging/reaction/addreaction/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkNGIyNmY1MWE5NjU4NjVmY2Q4MzFiIn0sImlhdCI6MTY5MTg0MTA5OH0.-wTE1TlC6goGSg89xElnQLalm61gorog0f2vJVHbPzI",
            },
            body: JSON.stringify({comment} )
        });
        const json = await response.json();
        return json;
    }

    //here id is of reaction 
    const editReaction = async (id) => {
        const response = await fetch(`${host}/blogging/reaction/editreaction/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkNGIyNmY1MWE5NjU4NjVmY2Q4MzFiIn0sImlhdCI6MTY5MTg0MTA5OH0.-wTE1TlC6goGSg89xElnQLalm61gorog0f2vJVHbPzI",
            }
        });
        const json = await response.json();
        return json;
    }
    //here id is of reaction 
    const deleteReaction = async (id) => {
        const response = await fetch(`${host}/blogging/reaction/deletereaction/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkNGIyNmY1MWE5NjU4NjVmY2Q4MzFiIn0sImlhdCI6MTY5MTg0MTA5OH0.-wTE1TlC6goGSg89xElnQLalm61gorog0f2vJVHbPzI",
            }
        });
        const json = await response.json();
        return json;
    }
    return (
        <reactionContext.Provider value={{ reactions, getReactions, addReaction, editReaction, deleteReaction }}
        >
            {props.children}
        </reactionContext.Provider>
    )
}
export default ReactionState;