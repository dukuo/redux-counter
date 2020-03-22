import React, { Component } from 'react'
import { connect } from 'react-redux'

import CounterControl from '../../components/Counter/CounterControl/CounterControl'
import CounterOutput from '../../components/Counter/CounterOutput/CounterOutput'

class Counter extends Component {
    
    actions = [
        {
            type: "add",
            label: "Addition",
            title: "Add to counter",
            withInput: true,
            inputValue: this.props.valueAdd,
            onChange: this.props.onAddValueChange,
            handler: this.props.onAddition
        },
        {
            type: "sub",
            label: "Subtract",
            title: "Subtract from counter",
            withInput: true,
            inputValue: this.props.valueSub,
            onChange: this.props.onSubValueChange,
            handler: this.props.onSubtraction
        },
        {
            type: "inc",
            label: "Increment",
            title: "Increment counter by 1",
            withInput: false,
            handler: this.props.onIncrement
        },
        {
            type: "dec",
            label: "Decrement",
            title: "Decrement counter by 1",
            withInput: false,
            handler: this.props.onDecrement
        }
    ]

    counterControlActions = this.actions.map((action, i) => 
        <CounterControl
            key={i}
            title={action.title} 
            click={action.handler}
            label={action.label}
            withInput={action.withInput}
            inputValue={action.inputValue}
            onChange={action.onChange} />
        )
    
    // title: PropTypes.string.isRequired,
    // click: PropTypes.function.isRequired,
    // label: PropTypes.string.isRequired
    render() {
        return [
            <CounterOutput key={"output"} counter={this.props.counter} />,
            this.counterControlActions
        ]
    }

}

const mapStateToProps = state => {
    return {
        counter: state.counter,
        valueAdd: state.valueAdd,
        valueSub: state.valueSub
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onIncrement: () => dispatch({ type: 'INCREMENT' }),
        onDecrement: () => dispatch({ type: 'DECREMENT' }),
        onAddition: () => dispatch({ type: 'ADDITION', value: ownProps.valueAdd }),
        onSubtraction: () => dispatch({ type: 'SUBTRACTION', value: ownProps.valueSub }),
        onAddValueChange: (e) => dispatch({ type: 'UPDATE_ADD', value: e.target.value}),
        onSubValueChange: (e) => dispatch({ type: 'UPDATE_SUB', value: e.target.value})

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)