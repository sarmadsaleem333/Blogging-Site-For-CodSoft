import React from 'react';

export const Alert = (props) => {
    return (
        props.alert ?
            <div className="alert alert-primary" role="alert">
                {props.message}
            </div> : null
            
    );
};
