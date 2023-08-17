import React, { useState } from 'react'
import userContext from './userContext'

const UserState = (props) => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const host = "http://localhost:3333";
    const [userDetails, setUserDetails] = useState({});

    const fetchuser = async () => {
        const response = await fetch(`${host}/blogging/auth/fetchuser`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            }
        });
        const json = await response.json();
        setUserDetails(json);
    }
    const fetchallusers = async () => {
        const response = await fetch(`${host}/blogging/auth/fetchallusers`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            }
        });
        const json = await response.json();
        setUsers(json);
    }
    const getName = async (id) => {
        const response = await fetch(`${host}/blogging/auth/getusername/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            }
        });
        const json = await response.json();
        console.log(json);
        setName(json);
    }

    const signUp = async (name, email, password, phone) => {
        const response = await fetch(`${host}/blogging/auth/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: name, phone: phone, email: email, password: password })
        });
        const json = await response.json();
        return json;
    }
    const loginUser = async ( email, password) => {
        const response = await fetch(`${host}/blogging/auth/loginuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({  email: email, password: password })
        });
        const json = await response.json();
        return json;

    }


    return (
        <userContext.Provider value={{ fetchuser, userDetails, fetchallusers, users, getName, name, signUp,loginUser }}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserState;