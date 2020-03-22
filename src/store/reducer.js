const initialState = {
    valueSub: 0,
    valueAdd: 0,
    counter: 0
}

const reducer = (state = initialState, action) => {
    if(action.type === "INCREMENT") {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if(action.type === "DECREMENT") {
        return {
            ...state,
            counter : state.counter - 1
        }
    }
    if(action.type === "ADDITION") {
        return {
            ...state,
            counter: state.counter + state.valueAdd
        }
    }
    if(action.type === "SUBTRACTION") {
        let updatedCounter = state.counter - state.valueSub
        if(updatedCounter < 0) updatedCounter = 0
        return {
            ...state,
            counter: updatedCounter
        }
    }
    if(action.type === "UPDATE_ADD") {
        console.log(action)
        return {
            ...state,
            valueAdd: Number(action.value) ? Number(action.value) : 0
        }
    }
    if(action.type === "UPDATE_SUB") {
        return {
            ...state,
            valueSub: Number(action.value) ? Number(action.value) : 0
        }
    }

    return state
}

export default reducer