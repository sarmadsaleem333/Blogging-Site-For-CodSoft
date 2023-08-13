import React, { useContext, useEffect } from 'react'
import userContext from '../context/usercontext/userContext';
import postContext from '../context/postContext';

export default function MyProfile() {
  const context = useContext(userContext);
  const { fetchuser, userDetails } = context;
  const context2 = useContext(postContext);
  const { myPosts, getMyPosts } = context2;


  useEffect(() => {
    // Fetch user details
    fetchuser();
  }, []);

  useEffect(() => {
    // Fetch user posts
    getMyPosts();
    console.log(myPosts)
  }, []);

  return (
    <>
      <div className='d-flex justify-content-center my-3'>
        <div>
          <i className="fa-solid fa-user" style={{ fontSize: '100px' }}></i>
        </div>
        <div className='mx-3 my-1' >
          <h1>{userDetails.name}</h1>
          <h6>{userDetails.email}</h6>
        </div>
      </div>
      <div className="row ">
        <h1 className='d-flex justify-content-center my-3 fst-italic'>Your Blogs</h1>
        {
          myPosts.length > 0 ? myPosts.map((post) => {
            return (
              <>
                <div className="col-md-3">
                  <div className="card mb-3" style={{ maxWidth: '540px' }}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={require(`../images/${(post.image)}`)} className="img-fluid rounded-start" alt="..." />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body d-flex flex-column h-100">
                          <h5 className="card-title">{post.topic}</h5>
                          <p className="card-text">{post.text.slice(0, 100)}...</p>
                          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                          <i className="fa-solid fa-comment" style={{ cursor: 'pointer' }} data-bs-toggle="modal" data-bs-target="#add-comment"></i>
                          <div className="btn-primary btn my-2">Read More</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          })
            : <h4 className='d-flex justify-content-center my-3 '>You have not posted any Blog</h4>
        }
      </div>
    </>

  )
}
