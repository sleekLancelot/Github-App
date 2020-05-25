import React, { Fragment } from 'react';
import Alert from '../Layouts/Alert';
import Search from '../Users/Search';
import Users from '../Users/Users';

function Homepage() {
    return (
        <Fragment>
            <Alert />
            <Search />
            <Users />
        </Fragment>
    )
}

export default Homepage
