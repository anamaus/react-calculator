export function addValue(value) {
    return {
        type: "RESULT_ADD_VALUE",
        payload: value
    }
}

export function calculateResult(result) {
    return {
        type: "RESULT_CALCULATE_RESULT",
        payload: result
    }
}

export function resetCalculator() {
    return {
        type: "RESULT_RESET_CALCULATOR",
    }
}

export function toggleDecimalValue(bool) {
    return {
        type: "RESULT_TOGGLE_DECIMAL_VALUE",
        payload: bool
    }
}

export function allowCalculation(bool) {
    return {
        type: "RESULT_ALLOW_CALCULATION",
        payload: bool
    }
}

export function removeLastValue() {
    return {
        type: "RESULT_REMOVE_LAST_VALUE",
    }
}

export function addParenthesis() {
    return {
        type: "RESULT_ADD_PARENTHESIS",
    }
}

export function subtractParenthesis() {
    return {
        type: "RESULT_SUBTRACT_PARENTHESIS",
    }
}

export function setCanCloseParenthesis(bool) {
    return {
        type: "RESULT_SET_CAN_CLOSE_PARENTHESIS",
        payload: bool
    }
}

export function setLastValue() {
    return {
        type: "RESULT_SET_LAST_VALUE",
        // payload: value
    }
}






