import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';

const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    const { users, loading, searchUser, clearUsers } = githubContext;
    const { showAlert } = alertContext;

    const [text, setText] = useState('');

    const onSubmit = e => {
        e.preventDefault();

        if (text === '') {
            showAlert('Please Enter Something...', 'light');
        } else {
            searchUser(text);
            (loading === false) && setText('');
        }
    };

    const onChange = e => setText(e.target.value);

    return (
        <div>
            <form onSubmit={onSubmit} className='form'>
                <input type='text' name='text' value={text} placeholder='Search Users...' onChange={onChange} />
                <input
                    type='submit'
                    value='Search'
                    className='btn btn-dark btn-block'
                />
            </form>
            {users.length > 0 && (
                <button className='btn btn-light btn-block' onClick={clearUsers}>
                    Clear
                </button>
            )}
        </div>
    )
}

export default Search;
