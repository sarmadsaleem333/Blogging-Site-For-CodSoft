import React, { useContext, useEffect, useRef, useState } from 'react'
import reactionContext from '../context/reaction/reactionContext';

export default function Comments(props) {
    const closeRef = useRef(null);
    const { id } = props;
    const context = useContext(reactionContext);
    const { getReactions, reactions, addReaction } = context;
    const [comment, setComment] = useState("")

    useEffect(() => {
        getReactions(id);
    }, [id, getReactions]);

    const onChange = (e) => {
        setComment({ [e.target.name]: e.target.value });
    }
    const handleComment = async (id, comment) => {
        const response = await addReaction(id, comment);
        console.log(response);
        closeRef.current.click();
    }
    return (
        <div>

            {
                reactions == null ? reactions.map((reaction) => {
                    {/* here are the comments */ }
                    <div>
                        <div className='d-flex'>
                            <i className="fa-solid fa-user mx-2 my-2"></i>
                            <h6 className='my-1'>{reaction.user}</h6>
                        </div>
                        <p>{reaction.comment}</p>
                    </div>
                }) : null
            }



            {/* here user will type the comment */}
            <div>
                <div className='d-flex'>
                    <i className="fa-solid fa-user mx-2 my-2"></i>
                    <h6 className='my-1'>Name</h6>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Add Comment Here " aria-label="post-Comment" onChange={onChange} aria-describedby="basic-addon1" />
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" name='comment' value={comment} onClick={() => handleComment(id, comment)}>Post Comment</button>
            </div>
        </div>
    )
}
