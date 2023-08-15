import React, { useContext, useEffect, useRef, useState } from 'react'
import userContext from '../context/usercontext/userContext';

export default function Comments(props) {
    const { reaction } = props;
    const context = useContext(userContext);
    // const { getName, name } = context;
    // useEffect(() => {
    //     getName(reaction._id);
    // }, [reaction._id]); 
    
    return (
        <div>
            <div>
                <div className='d-flex'>
                    <i className="fa-solid fa-user mx-2 my-2"> User</i>
                    <h6 className='my-1'></h6>
                </div>
                <p>{reaction.comment}</p>
            </div>
            {/* here user will type the comment */}
            {/* <div>
                <div className='d-flex'>
                    <i className="fa-solid fa-user mx-2 my-2"></i>
                    <h6 className='my-1'>Name</h6>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Add Comment Here " aria-label="post-Comment"  aria-describedby="basic-addon1" />
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" name='comment'   >Post Comment</button>
            </div> */}
        </div>
    )
}
// onClick={() => handleComment(id, comment)}