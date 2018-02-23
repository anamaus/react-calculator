export const addValue = (value) => {
    return {
        type: "RESULT_ADD_VALUE",
        payload: value
    }
};

export const calculateResult = (result) => {
    return {
        type: "RESULT_CALCULATE_RESULT",
        payload: result
    }
};

export const resetCalculator = () => {
    return {
        type: "RESULT_RESET_CALCULATOR",
    }
};

export const removeLastValue = () => {
    return {
        type: "RESULT_REMOVE_LAST_VALUE",
    }
};

export const setLastValue = () => {
    return {
        type: "RESULT_SET_LAST_VALUE",
    }
};