import React, { useRef, useContext, useState } from 'react'
import Blog from './Blog'
import { Alert } from './Alert';
import postContext from '../context/postContext';



export default function CreatePost() {
    const [alertMessage, setAlertMessage] = useState(null);
    const closeRef = useRef(null);
    const context = useContext(postContext);
    const { uploadPost } = context;

    const [blogCredentials, setblogCredentials] = useState({ topic: "", text: "", type: "", image: "" });
    const onChange = (e) => {
        setblogCredentials({ ...blogCredentials, [e.target.name]: e.target.value });
    }
    const onImageChange = (e) => {
        setblogCredentials({ ...blogCredentials, image: e.target.files[0] });
    };


    const submitImage = async (e) => {
        e.preventDefault();
        console.log(blogCredentials)
        const formData = new FormData();
        formData.append("image", blogCredentials.image);
        formData.append("text", blogCredentials.text);
        formData.append("topic", blogCredentials.topic);
        formData.append("type", blogCredentials.type);
        const message = await uploadPost(formData);
        setAlertMessage(message); 
        closeRef.current.click();
    }
    return (
        <div>
            {alertMessage && <Alert message={alertMessage} />}
            <div className="modal fade" id="create-post-model" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Creating Blog</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Blog Title" aria-label="Blog Title" name='topic' value={blogCredentials.topic} aria-describedby="basic-addon1" onChange={onChange} />
                        </div>
                        <div className="input-group mb-3">
                            <textarea type="text" className="form-control" id='blog-text' placeholder="Blog Text" name='text' value={blogCredentials.text} aria-label="Blog Text" aria-describedby="basic-addon1" onChange={onChange} />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Blog Type" name='type' value={blogCredentials.type} aria-label="Blog Type" aria-describedby="basic-addon1" onChange={onChange} />
                        </div>
                        <div className="input-group mb-3">
                            <i className="fa-regular fa-images mx-2 my-2" ></i>
                            <input type="file" accept='image/*' onChange={onImageChange} />
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" ref={closeRef} data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={submitImage}>Post</button>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" className="btn btn-success btn-lg m-md-3 " data-bs-toggle="modal" data-bs-target="#create-post-model">Create Blog <i className="fa-solid fa-plus"></i></button>
            <Blog />
        </div>
    )
}
