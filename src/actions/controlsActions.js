import  {isParenthesisNumberEqual } from '../utils/isParenthesisNumberEqual';

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

export const resetControls = () => {
    return {
        type: "CONTROLS_RESET_CONTROLS",
    }
};


export const checkParenthesisNumber = () => {
    return (dispatch, getState) => {
        const {output} = getState().resultReducer;

        /* Check for number of opened and closed parenthesis.
           If the number is equal, we have all parenthesis closed
           And we can allow calculation and disable closing parenthesis
         */
        if(isParenthesisNumberEqual(output)){
            dispatch(setCanCloseParenthesis(false));
            dispatch(allowCalculation(true));
        } else {
            dispatch(setCanCloseParenthesis(true));
            dispatch(allowCalculation(false));
        }
    };
};






