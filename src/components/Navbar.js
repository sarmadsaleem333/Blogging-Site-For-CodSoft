import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import postContext from '../context/postContext';
import { useNavigate } from 'react-router-dom';



export default function Navbar() {
    const closeRef = useRef(null);
    const navigate = useNavigate();
    let location = useLocation()
    const [query, setQuery] = useState();
    const context = useContext(postContext);
    const { searchPosts } = context;
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
        closeRef.current.click();
    }
    const onChange = (e) => {
        setQuery(e.target.value);
    }
    const handleSearch = async (e) => {
        e.preventDefault();
        const response = await searchPosts(query);
    
    }

    return (
        <>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Logging Out</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>Are You sure you want to Log Out?</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" ref={closeRef} data-bs-dismiss="modal">No</button>
                            <button type="button" class="btn btn-primary" onClick={handleLogout}>Log Out</button>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="">
                                <Link className="nav-link" ><i className="fa-solid fa-book"></i></Link>
                            </li>
                            {localStorage.getItem("token") ? (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">
                                            <i className="fa-solid fa-house"></i>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/users">
                                            <i className="navbar-items fa-solid fa-users"></i>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/myprofile">
                                            <i className="navbar-items fa-solid fa-user"></i>
                                        </Link>
                                    </li>

                                </>
                            ) : null}
                            <li className="nav-item">
                                <Link className="nav-link" to="https://www.linkedin.com/in/muhammad-sarmad-saleem-3bb060266/"><i class="fa-brands fa-linkedin-in"></i></Link>
                            </li>
                        </ul>


                    </div>
                    {location.pathname === "/" ?
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search Blogs" aria-label="Search" value={query} onChange={onChange} />
                            <button className="btn btn-outline-success" type="submit" onClick={handleSearch}>Search </button>
                        </form> : null
                    }
                    {localStorage.getItem("token") ? (<li className="">
                        <Link type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"  className={`btn btn-light ${location.pathname === "/login" ? "active" : ""}`} to="/login"  >Log Out</Link>
                    </li>) : null}
                </div>
            </nav>
        </>
    )
}
