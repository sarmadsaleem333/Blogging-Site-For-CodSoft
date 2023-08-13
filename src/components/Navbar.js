import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import postContext from '../context/postContext';



export default function Navbar() {
    const [query, setQuery] = useState();
    const context = useContext(postContext);
    const { posts, searchPosts } = context;
    // useEffect(() => {
    //     searchPosts();
    // }, [posts, searchPosts]);

    const onChange = (e) => {
        setQuery( e.target.value );
    }
    const handleSearch=async (e)=>{
        e.preventDefault();        
      const response=await searchPosts(query);

    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/"><i className="fa-solid fa-house"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/users"><i className="navbar-items fa-solid fa-users"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/myprofile"><i className="navbar-items fa-solid fa-user"></i></Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value ={query} onChange={onChange}  />
                        <button className="btn btn-outline-success" type="submit" onClick={handleSearch}>Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
