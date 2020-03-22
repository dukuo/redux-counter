import React from 'react'
import PropTypes from 'prop-types'

import classes from './CounterOutput.module.css'

const counterOutput = (props) => (
    <div className={classes.CounterOutput}>
        <h1>Current counter value: {props.counter}</h1>
    </div>
)

counterOutput.propTypes = {
    counter: PropTypes.number.isRequired
}

export default counterOutput