import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
    state = {
        text: ''
    };

    static propTypes = {
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        searchUser: PropTypes.func.isRequired,
        alert: PropTypes.func.isRequired
    }

    onSubmit = e => {
        e.preventDefault();

        if (this.state.text === '') {
            this.props.alert('Please Enter Something...', 'light');
        } else {
            this.props.searchUser(this.state.text);
            (this.props.loading === false) && this.setState({ text: '' });
        }
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { showClear, clearUsers } = this.props;
        return (
            <div>
                <form onSubmit={this.onSubmit} className='form'>
                    <input type='text' name='text' value={this.state.text} placeholder='Search Users...' onChange={this.onChange} />
                    <input
                        type='submit'
                        value='Search'
                        className='btn btn-dark btn-block'
                    />
                </form>
                {showClear && (
                    <button className='btn btn-light btn-block' onClick={clearUsers}>
                        Clear
                    </button>
                )}
            </div>
        )
    }
}

export default Search;
