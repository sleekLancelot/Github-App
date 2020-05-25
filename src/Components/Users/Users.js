import React, { useContext } from 'react'
import UserItem from './UserItem';
import Spinner from '../Layouts/Spinner';
import GithubContext from '../../context/github/GithubContext';


const User = () => {
    const { users, loading } = useContext(GithubContext);
    if (loading) {
        return <Spinner />
    } else {
        return (
            <div style={userStyle}>
                {users.map(user =>
                    <UserItem user={user} key={user.id} />
                )}
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1.2rem'
}


export default User;
