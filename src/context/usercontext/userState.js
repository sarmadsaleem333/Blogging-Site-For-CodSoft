import React, { useState } from 'react'
import userContext from './userContext'

const UserState = (props) => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const host = "http://localhost:5000";
    const [userDetails, setUserDetails] = useState({});

    const fetchuser = async () => {
        const response = await fetch(`${host}/blogging/auth/fetchuser`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkNGIyNmY1MWE5NjU4NjVmY2Q4MzFiIn0sImlhdCI6MTY5MTg0MTA5OH0.-wTE1TlC6goGSg89xElnQLalm61gorog0f2vJVHbPzI",
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
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkNGIyNmY1MWE5NjU4NjVmY2Q4MzFiIn0sImlhdCI6MTY5MTg0MTA5OH0.-wTE1TlC6goGSg89xElnQLalm61gorog0f2vJVHbPzI",
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
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkNGIyNmY1MWE5NjU4NjVmY2Q4MzFiIn0sImlhdCI6MTY5MTg0MTA5OH0.-wTE1TlC6goGSg89xElnQLalm61gorog0f2vJVHbPzI",
            }
        });
        const json = await response.json();
        console.log(json);
        console.log("hell")
        // setName(json);
    }

    return (
        <userContext.Provider value={{ fetchuser, userDetails, fetchallusers, users, getName, name }}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserState;