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

export const toggleDecimalValue = (bool) => {
    return {
        type: "RESULT_TOGGLE_DECIMAL_VALUE",
        payload: bool
    }
};

export const allowCalculation = (bool) => {
    return {
        type: "RESULT_ALLOW_CALCULATION",
        payload: bool
    }
};

export const allowOperators = (bool) => {
    return {
        type: "RESULT_ALLOW_OPERATORS",
        payload: bool
    }
};

export const removeLastValue = () => {
    return {
        type: "RESULT_REMOVE_LAST_VALUE",
    }
};

export const setCanCloseParenthesis = (bool) => {
    return {
        type: "RESULT_SET_CAN_CLOSE_PARENTHESIS",
        payload: bool
    }
};

export const setLastValue = () => {
    return {
        type: "RESULT_SET_LAST_VALUE",
        // payload: value
    }
};

export const checkParenthesisNumber = () => {
    return (dispatch, getState) => {
        const {output} = getState().resultReducer;

        /* Check for number of opened and closed parenthesis.
           If the number is equal, we have all parenthesis closed
           And we can allow calculation and disable closing parenthesis
         */
        let openParenthesis = 0;
        let closeParenthesis = 0;

        for (let i = 0; i < output.length; i++) {
            if (output[i].textContent === "(") {
                openParenthesis++;
            } else if (output[i].textContent === ")") {
                closeParenthesis++
            }
        }

        if (openParenthesis === closeParenthesis) {
            dispatch(setCanCloseParenthesis(false));
            dispatch(allowCalculation(true));
        } else if (openParenthesis > closeParenthesis) {
            dispatch(setCanCloseParenthesis(true));
            dispatch(allowCalculation(false));
        }


    };
};





