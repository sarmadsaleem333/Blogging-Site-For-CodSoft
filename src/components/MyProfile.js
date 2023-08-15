import React, { useContext, useEffect, useRef, useState } from 'react'
import userContext from '../context/usercontext/userContext';
import postContext from '../context/postContext';
import { Alert } from './Alert';
export default function MyProfile() {
  const [alertMessage, setAlertMessage] = useState(null);
  let global_id;
  const closeRef = useRef(null);
  const context = useContext(userContext);
  const { fetchuser, userDetails } = context;
  const context2 = useContext(postContext);
  const { myPosts, getMyPosts, deletePost, uploadPost, editPost } = context2;
  const [blogCredentials, setblogCredentials] = useState({ topic: "", text: "", type: "", image: "" });
  const onChange = (e) => {
    setblogCredentials({ ...blogCredentials, [e.target.name]: e.target.value });
  }
  const onImageChange = (e) => {
    setblogCredentials({ ...blogCredentials, image: e.target.files[0] });
  };
  const setId = (id) => {
    global_id = id;
    console.log("1", global_id)

  }
  const handleEdit = async (e) => {
    e.preventDefault();
    console.log("2", global_id)
    const formData = new FormData();
    formData.append("image", blogCredentials.image);
    formData.append("text", blogCredentials.text);
    formData.append("topic", blogCredentials.topic);
    formData.append("type", blogCredentials.type);
    const message = await editPost(formData, global_id);
    closeRef.current.click();
    setAlertMessage(message); 

  }
  useEffect(() => {
    // Fetch user details
    fetchuser();
  }, []);

  useEffect(() => {
    // Fetch user posts
    getMyPosts();
    console.log(myPosts)
  }, []);

  const handleDelete = async () => {
    console.log(global_id)
    const response = await deletePost(global_id);
    setAlertMessage(response); 

  }

  return (
    <>

      {alertMessage && <Alert message={alertMessage} />}

      <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModal" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Deleting your Blog</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" ref={closeRef}  aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Are you sure you want to delete it ?
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" ref={closeRef}  data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      </div>
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
                          <div className='d-flex'>
                            <i class="fa-solid fa-pen-to-square" style={{ cursor: 'pointer' }} onClick={() => setId(post._id)} data-bs-toggle="modal" data-bs-target="#editModal"></i>
                            <i class="fa-solid fa-trash mx-4" style={{ cursor: 'pointer' }} onClick={() => setId(post._id)} data-bs-toggle="modal" data-bs-target="#deleteModal"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModal" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="deleteModal">Editing Your Blog(Write only those parts you want to edit)</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Write to Edit Blog Title" aria-label="Blog Title" name='topic' value={blogCredentials.topic} aria-describedby="basic-addon1" onChange={onChange} />
                      </div>
                      <div className="input-group mb-3">
                        <textarea type="text" className="form-control" id='blog-text' placeholder="Write to Edit Blog Text" name='text' value={blogCredentials.text} aria-label="Blog Text" aria-describedby="basic-addon1" onChange={onChange} />
                      </div>
                      <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Write to Edit Blog Type" name='type' aria-label="Blog Type" value={blogCredentials.type} aria-describedby="basic-addon1" onChange={onChange} />
                      </div>
                      <div className="input-group mb-3"> Edit the Photo
                        <i className="fa-regular fa-images mx-2 my-2" ></i>
                        <input type="file" accept='image/*' onChange={onImageChange} />
                      </div>

                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" ref={closeRef}   data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={handleEdit}>Edit The Changes Made</button>
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
