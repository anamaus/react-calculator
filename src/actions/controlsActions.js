export const toggleDecimalValue = (bool) => {
    return {
        type: "CONTROLS_TOGGLE_DECIMAL_VALUE",
        payload: bool
    }
};

export const allowCalculation = (bool) => {
    return {
        type: "CONTROLS_ALLOW_CALCULATION",
        payload: bool
    }
};

export const allowOperators = (bool) => {
    return {
        type: "CONTROLS_ALLOW_OPERATORS",
        payload: bool
    }
};

export const setCanCloseParenthesis = (bool) => {
    return {
        type: "CONTROLS_SET_CAN_CLOSE_PARENTHESIS",
        payload: bool
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






