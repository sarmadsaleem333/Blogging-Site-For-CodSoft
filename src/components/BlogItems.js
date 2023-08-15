import React, { useContext, useEffect, useState } from 'react'
import Comments from './Comments';
import { Link } from 'react-router-dom';
import reactionContext from '../context/reaction/reactionContext';

export default function BlogItems(props) {
    let global_id;
    const { post } = props;
    const [clickedPost, setClickedPostId] = useState("");
    const context = useContext(reactionContext);
    const { getReactions, reactions, addReaction } = context;
    const [comment, setComment] = useState("");


    const onChange = (e) => {
        setComment(e.target.value);
    }
    useEffect(() => {

        console.log("clicked post:", clickedPost);
    }, [clickedPost]);
    const onClick = async (id) => {
        global_id=id
        console.log(global_id)
        setClickedPostId(id);
        await getReactions(id);
    }

    useEffect(() => {
        getReactions(clickedPost);
    }, [clickedPost]);

    const handleComment = async (global_id) => {
        console.log("global_id:", global_id);
        // Rest of the code for handling the comment
    }
    return (
        <>
        
            <div className="modal fade" id="add-comment" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Comments</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            {reactions.length == 0
                                ? <>No comments to show</>
                                : reactions.map((reaction) => (
                                    <Comments reaction={reaction} />
                                ))}
                        </div>
                        {/* here user will type the comment */}
                        <div>
                            <div className='d-flex'>
                                <i className="fa-solid fa-user mx-2 my-2"></i>
                                <h6 className='my-1'>Name</h6>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" name='comment' value={comment} onChange={onChange} placeholder="Add Comment Here " aria-label="post-Comment" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" name='comment' onClick={()=>handleComment(global_id)}>Post Comment</button>
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
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago  </small></p>
                                <i className="fa-solid fa-comment" onClick={() => onClick(post._id)} style={{ cursor: 'pointer' }} data-bs-toggle="modal" data-bs-target="#add-comment"></i>
                                <Link className="btn-primary btn my-2" to={`/blogdisplay/${post._id}`}>Read More </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
