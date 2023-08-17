// import React from 'react'

// function Alert(props) {
//     const capitalize = (word)=>{
//         if(word==="danger"){
//             word="error";
//         }
//         const lower = word.toLowerCase();
//         return lower.charAt(0).toUpperCase() + lower.slice(1);
//     }
//     return (
//         <div style={{height: '50px'}}>
//         {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
//            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg} 
//         </div>}
//         </div>
//     )
// }

// export default Alert
import React, { useContext } from 'react';
import alertContext from '../context/alert/alertContext';
function Alert() {
    const alertcontext = useContext(alertContext);
    const { alert} = alertcontext;
  
    const capitalize = (word) => {
      
        if (!word) {
            return "";
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div style={{ height: '50px' }}>
            {alert && (
                <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{alert.msg}</strong>
                </div>
            )}
        </div>
    )
}

export default Alert;
