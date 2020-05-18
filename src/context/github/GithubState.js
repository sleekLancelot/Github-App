import React, { useReducer, useEffect } from 'react';
import GithubContext from './GithubContext';
import GithubReducer from './GithubReducer';
import axios from 'axios';
import {
    SHOW_USERS,
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../type';

const GithubState = () => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //showUsers
    useEffect(() => {
        (async () => {
            setLoading();
            let res = await axios.get('https://api.github.com/users');
            dispatch({
                type: SHOW_USERS,
                payload: res.data
            })
        })();
        //eslint-disable-next-line
    }, [])

    //searchUsers
    const searchUser = async text => {
        setLoading();

        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_ID}&client_secret=${process.env.REACT_APP_SECRETS}`);

        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        });
    }

    const setLoading = () => dispatch({ type: SET_LOADING });

    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                user: state.user,
                repos: state.repos,
                loading: state.loading,
                searchUser
            }}
        >
            {props.children}
        </GithubContext.Provider>
    )
}

export default GithubState;