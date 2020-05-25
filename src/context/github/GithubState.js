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

let gitHubClientId,
    gitHubClientSecret;

if (process.env.NODE_ENV === 'production') {
    gitHubClientId = process.env.ID;
    gitHubClientSecret = process.env.SECRETS;
} else {
    gitHubClientId = process.env.REACT_APP_ID;
    gitHubClientSecret = process.env.REACT_APP_SECRETS;
}

const GithubState = props => {
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

        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${gitHubClientId}&client_secret=${gitHubClientSecret}`);

        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        });
    }

    //getIndividualUser
    const getUser = async username => {
        setLoading();
        try {
            const res = await axios.get(
                `https://api.github.com/users/${username}?client_id=${gitHubClientId}&client_secret=${gitHubClientSecret}`
            );
            dispatch({
                type: GET_USER,
                payload: res.data
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    //getRepos
    const getRepos = async username => {
        setLoading();
        try {
            const res = await axios.get(
                `https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc&client_id=${gitHubClientId}&client_secret=${gitHubClientSecret}`
            );
            dispatch({
                type: GET_REPOS,
                payload: res.data
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    //clearUsers
    const clearUsers = () => dispatch({ type: CLEAR_USERS });

    const setLoading = () => dispatch({ type: SET_LOADING });

    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                user: state.user,
                repos: state.repos,
                loading: state.loading,
                searchUser,
                clearUsers,
                getUser,
                getRepos
            }}
        >
            {props.children}
        </GithubContext.Provider>
    )
}

export default GithubState;