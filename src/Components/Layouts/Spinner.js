import React, { Fragment } from 'react';
import spinner from './spinner.gif';

function Spinner() {
    return (
        <Fragment>
            <img alt='loading' src={spinner} style={{ width: '200px', margin: 'auto', display: 'block', backgroundColor: 'inherit' }} />
        </Fragment>
    )
}

export default Spinner;
