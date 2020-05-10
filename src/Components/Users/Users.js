import React from 'react'
import UserItem from './UserItem';
import PropTypes from 'prop-types';
import Spinner from '../Layouts/Spinner';


const User = ({ users, loading }) => {
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

User.prototype = {
    users: PropTypes.array.isRequired
}

export default User;
