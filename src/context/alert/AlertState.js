import React, { useReducer } from 'react'
import AlertContext from './AlertContext';
import AlertReducer from './AlertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../type';

function AlertState(props) {
    const initialState = null;

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    const showAlert = (msg, className) => {
        dispatch({
            type: SET_ALERT,
            payload: { msg, className }
        })
        setTimeout(() => {
            dispatch({ type: REMOVE_ALERT });
        }, 3000);
    }

    return (
        <AlertContext.Provider value={{ alert: state, showAlert }}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState
