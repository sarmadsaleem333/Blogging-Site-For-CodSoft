import React from 'react'
import Blog from './Blog'

export default function CreatePost() {
    return (
        <div>
            <div className="modal fade" id="create-post-model" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Creating Blog</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Blog Title" aria-label="Blog Title" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <textarea type="text" className="form-control" id='blog-text' placeholder="Blog Text" aria-label="Blog Text" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Blog Type" aria-label="Blog Type" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <i class="fa-regular fa-images nav-item"></i>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Post</button>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" className="btn btn-success btn-lg m-md-3 " data-bs-toggle="modal" data-bs-target="#create-post-model">Create Blog <i className="fa-solid fa-plus"></i></button>
            <Blog/>
        </div>
    )
}
