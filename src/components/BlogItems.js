import React from 'react'

export default function BlogItems(props) {
    const { blog } = props;
    return (
        <>
            <div className="modal fade" id="add-comment" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Comments</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        {/* here are the comments */}
                        <div>
                            <div className='d-flex'>
                                <i className="fa-solid fa-user mx-2 my-2"></i>
                                <h6 className='my-1'>Name</h6>
                            </div>
                            <p>Here is comment of the user</p>
                        </div>
                        <div>
                            <div className='d-flex'>
                                <i className="fa-solid fa-user mx-2 my-2"></i>
                                <h6 className='my-1'>Name</h6>
                            </div>
                            <p>Here is comment of the user</p>
                        </div>
                        <div>
                            <div className='d-flex'>
                                <i className="fa-solid fa-user mx-2 my-2"></i>
                                <h6 className='my-1'>Name</h6>
                            </div>
                            <p>Here is comment of the user</p>
                        </div>

                        {/* here user will type the comment */}
                        <div>
                            <div className='d-flex'>
                                <i className="fa-solid fa-user mx-2 my-2"></i>
                                <h6 className='my-1'>Name</h6>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Add Comment Here " aria-label="Blog-Comment" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Post Comment</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card mb-3" style={{ maxWidth: '540px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..." className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body d-flex flex-column h-100">
                                <h5 className="card-title">{blog.topic}</h5>
                                <p className="card-text">{blog.text.slice(0, 20)}...</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                <i class="fa-solid fa-comment" style={{ cursor: 'pointer' }} data-bs-toggle="modal" data-bs-target="#add-comment"></i>
                                <div className="btn-primary btn my-2">Read More</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
