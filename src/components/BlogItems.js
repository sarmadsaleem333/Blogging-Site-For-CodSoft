import React, { useState } from 'react'
import Comments from './Comments';

export default function BlogItems(props) {
    const { post } = props;
    const [clickedPost, setClickedPostId] = useState("");
   


    const onClick = (id) => {
        setClickedPostId(id);
    }
    return (
        <>
            <div className="modal fade" id="add-comment" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Comments</h5>
                            {console.log(clickedPost)}
                            <Comments id={clickedPost} />
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>


                    </div>
                </div>
            </div>
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
                                <i className="fa-solid fa-comment" onClick={() => onClick(post._id)} style={{ cursor: 'pointer' }} data-bs-toggle="modal" data-bs-target="#add-comment"></i>
                                <div className="btn-primary btn my-2">Read More</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}