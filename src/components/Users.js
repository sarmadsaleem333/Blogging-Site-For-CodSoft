import React, { useContext, useEffect } from 'react'
import userContext from '../context/usercontext/userContext'
export default function Users() {
  const context = useContext(userContext);
  const { fetchallusers, users } = context;
  useEffect(() => {
    fetchallusers();
  }, [])

  return (
    <div>
      <div className="row">
        <h1 className='d-flex justify-content-center my-3 fst-italic'>Find all Bloggers here</h1>
        {console.log(users)}
        {users.length > 0 ?
          users.map((user) => {
            return (
              <div className="col-md-3 my-4" key={user._id}>
                <div className='d-flex'>
                  <i className="fa-solid fa-user" style={{ fontSize: '100px' }}></i>
                  <div className='mx-3'>
                    <h4>{user.name}</h4>
                    <h6>{user.email}</h6>
                  </div>
                </div>
              </div>
            );
          }) : <h2>No Bloggers Found</h2>
        }
      </div>
    </div>
  )
}
