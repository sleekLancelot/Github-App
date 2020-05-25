import React, { useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';

function Alert() {
    const { alert } = useContext(AlertContext);

    return (
        alert && (<div className={`alert alert-${alert.className}`}>
            <i className='fas fa-info-circle'> {alert.msg}</i>
        </div>)
    )
}

export default Alert;
