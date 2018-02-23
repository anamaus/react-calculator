const initialState = {
    decimalEnabled: false,
    calculationAllowed: true,
    operatorsAllowed: false,
    canCloseParenthesis: false,
};

const controlsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CONTROLS_TOGGLE_DECIMAL_VALUE":
            return {
                ...state,
                decimalEnabled: action.payload
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
        default: return state;
    }
};
export default controlsReducer;


