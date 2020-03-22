import React from 'react'

import PropTypes from 'prop-types'

import classes from './CounterControl.module.css'

const counterControl = (props) => (
    <div className={classes.CounterControl}>
        <p>{props.title}</p>
        { props.withInput && 
            <input type="text" onChange={props.onChange} />
        }
        <button className={classes.CounterButton} onClick={props.click}>{props.label}</button>
    </div>
)

counterControl.propTypes = {
    title: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    withInput: PropTypes.bool,
    inputValue: PropTypes.number,
    onChange: PropTypes.func
}
export default counterControl