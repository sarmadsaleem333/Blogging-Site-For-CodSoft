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
    }, [id]);

    const onChange = (e) => {
        setComment({ [e.target.name]: e.target.value });
    }
    const handleComment =  () => {
        // const response = await addReaction(id, comment);
        // console.log(response);
        // closeRef.current.click();
        console.log(id)
        console.log(reactions)
    }
    return (
        <div>

            {
                reactions == null ? null: reactions.map((reaction) => {
                    {/* here are the comments */ }
                    <div>
                        <div className='d-flex'>
                            <i className="fa-solid fa-user mx-2 my-2"></i>
                            <h6 className='my-1'>{reaction.user}</h6>
                        </div>
                        <p>{reaction.comment}</p>
                    </div>
                }) 
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
                <button type="button" className="btn btn-primary" name='comment' onClick={handleComment} value={comment} >Post Comment</button>
            </div>
        </div>
    )
}
// onClick={() => handleComment(id, comment)}