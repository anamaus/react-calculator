const initialState = {
    output: [],
    result: 0,
    decimalEnabled: false,
    calculationAllowed: true,
    operatorsAllowed: false,
    canCloseParenthesis: false,
    lastValue: null,

};

const exampleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "RESULT_ADD_VALUE":
            return {
                ...state,
                output: [...state.output, action.payload],
            };
        case "RESULT_CALCULATE_RESULT":
            return {
                ...state,
                result: action.payload,
            };
        case "RESULT_RESET_CALCULATOR":
            return initialState;

        case "RESULT_TOGGLE_DECIMAL_VALUE":
            return {
                ...state,
                decimalEnabled: action.payload
            };
        case "RESULT_ALLOW_CALCULATION":
            return {
                ...state,
                calculationAllowed: action.payload
            };
        case "RESULT_ALLOW_OPERATORS":
            return {
                ...state,
                operatorsAllowed: action.payload
            };
        case "RESULT_REMOVE_LAST_VALUE":
            return {
                ...state,
                output: [...state.output.slice(0,-1)],
            };
        case "RESULT_SET_LAST_VALUE":
            return {
                ...state,
                lastValue: state.output[state.output.length - 1]

            };
        case "RESULT_SET_CAN_CLOSE_PARENTHESIS":
            return {
                ...state,
                canCloseParenthesis: action.payload,
            };
        default: return state;
    }
};
export default exampleReducer;
