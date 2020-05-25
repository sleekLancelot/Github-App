import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';
import Spinner from '../Layouts/Spinner';

const Repos = ({ repos, loading }) => {
    if (loading) return <Spinner />
    return (
        <div className='repoCard'>
            {repos.map(repo =>
                <RepoItem repo={repo} key={repo.id} />
            )}
        </div>
    )
}

Repos.propTypes = {
    repos: PropTypes.array.isRequired
}

export default Repos;
