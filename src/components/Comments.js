import React, { useContext, useEffect, useRef, useState } from 'react'
import reactionContext from '../context/reaction/reactionContext';
import userContext from '../context/usercontext/userContext';
export default function Comments(props) {
    const closeRef = useRef(null);

    const { id } = props;
    const context = useContext(reactionContext);
    const { getReactions, reactions, addReaction } = context;
    const [comment, setComment] = useState("");
    const onChange = (e) => {
        setComment(e.target.value);
    }

    useEffect(() => {
        getReactions(id);
    }, [id])

    const handleComment = async () => {

            const response = await addReaction(id, comment);
            if (response.ok) {
                console.log("You added a comment on this post");
            }
            else {
                console.log("Error adding a comment")
            }
            closeRef.current.click();
            setComment("")
    
        }


    

    return (

        <>
            {reactions.length == 0
                ? <>No comments to show</>
                :
                reactions.map((reaction) => (
                    <div>
                        <div>
                            <div className='d-flex'>
                                <i className="fa-solid fa-user mx-2 my-2" ></i>
                                <h6>{reaction.user} </h6>
                                <h6 className='my-1'></h6>
                            </div>
                            <p>{reaction.comment}</p>
                        </div>
                    </div>

                ))}
            <div>
                <div>
                    <div className='d-flex'>
                        <i className="fa-solid fa-user mx-2 my-2"></i>
                        <h6 className='my-1'>You add a comment</h6>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" name='comment' onChange={onChange} value={comment} placeholder="Add Comment Here " aria-label="post-Comment" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" ref={closeRef} data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary"  name='comment' onClick={() => handleComment()} >Post Comment</button>
                </div>
            </div>

        </>
    )
}
