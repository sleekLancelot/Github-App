import React from 'react';

function Alert({ alert }) {
    return (
        alert && (<div className={`alert alert-${alert.className}`}>
            <i className='fas fa-info-circle'> {alert.msg}</i>
        </div>)
    )
}

export default Alert;
