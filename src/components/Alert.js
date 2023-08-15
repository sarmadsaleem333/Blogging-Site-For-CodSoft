import React from 'react'

export const Alert = (props) => {
    return (
        // <div>
        //     <div className="alert alert-primary" role="alert">
        //         {props.message}
        //     </div>
        // </div>
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong> {props.message} </strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}