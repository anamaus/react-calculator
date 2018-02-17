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
        payload: ''
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


