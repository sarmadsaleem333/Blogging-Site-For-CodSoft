import React, { useContext, useEffect } from 'react'
import userContext from '../context/usercontext/userContext';

export default function MyProfile() {
  const context = useContext(userContext);
  const { fetchuser, userDetails } = context;
  useEffect(() => {
    fetchuser();
  }, [])

  return (
    <>    <div className='d-flex justify-content-center my-3'>
      <div>
        <i className="fa-solid fa-user" style={{ fontSize: '100px' }}></i>
      </div>
      <div className='mx-3 my-1' >
        <h1>{userDetails.name}</h1>
        <h6>{userDetails.email}</h6>
      </div>
    </div>
      <h1 className='d-flex justify-content-center my-3 fst-italic'>Your Blogs</h1>
    </>

  )
}
