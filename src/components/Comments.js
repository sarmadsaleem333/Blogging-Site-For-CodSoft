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
        </div>
    )
}
// onClick={() => handleComment(id, comment)}