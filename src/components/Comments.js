import React, { useContext, useEffect } from 'react'
import reactionContext from '../context/reaction/reactionContext';

export default function Comments(props) {
    const { id } = props;
    const context = useContext(reactionContext);
    const { getReactions, reactions } = context;

    useEffect(() => {
        getReactions(id);
    }, [id, getReactions])

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
                    <input type="text" className="form-control" placeholder="Add Comment Here " aria-label="post-Comment" aria-describedby="basic-addon1" />
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Post Comment</button>
            </div>
        </div>
    )
}
