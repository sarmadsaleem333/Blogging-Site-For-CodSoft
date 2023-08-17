import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import postContext from '../context/postContext';


export default function DisplayFullBlog(props) {
  const { postId } = useParams();
  const context = useContext(postContext);
  const { getRequiredPost, requiredPost } = context;
  useEffect(() => {
    getRequiredPost(postId);
  }, [])
try {
  
  return  (
    
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card mb-3" style={{ maxWidth: '540px' }}>
        <img src={`http://localhost:3333/images/${(requiredPost.image)}`} className="img-fluid rounded-start" alt="..." />
        <div className="card-body d-flex flex-column h-100">
          <h5 className="card-title">{requiredPost.topic}</h5>
          <p className="card-text">{requiredPost.text}</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          <i className="fa-solid fa-comment" style={{ cursor: 'pointer' }} data-bs-toggle="modal" data-bs-target="#add-comment"></i>
        </div>
      </div>
    </div>


  )
} catch (error) {
  console.log(error)
}
}
