const initialState = {
    decimalAdded: false,
    calculationAllowed: false,
    operatorsAllowed: false,
    canCloseParenthesis: false,
};

const controlsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CONTROLS_TOGGLE_DECIMAL_VALUE":
            return {
                ...state,
                decimalAdded: action.payload
            };
        case "CONTROLS_ALLOW_CALCULATION":
            return {
                ...state,
                calculationAllowed: action.payload
            };
        case "CONTROLS_ALLOW_OPERATORS":
            return {
                ...state,
                operatorsAllowed: action.payload
            };
        case "CONTROLS_SET_CAN_CLOSE_PARENTHESIS":
            return {
                ...state,
                canCloseParenthesis: action.payload,
            };
        case "CONTROLS_RESET_CONTROLS":
            return initialState;

        default: return state;
    }
};
export default controlsReducer;


