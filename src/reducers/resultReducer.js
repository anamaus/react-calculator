const initialState = {
    output: [],
    decimalEnabled: false,
    calculationAllowed: true,
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
                output: [action.payload],
            };
        case "RESULT_RESET_CALCULATOR":
            return {
                ...state,
                output: action.payload,
                decimalEnabled: false,
            };
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
        case "RESULT_REMOVE_LAST_VALUE":
            return {
                ...state,
                output: [...state.output.slice(0,-1)],
            };
    }
    return state;
};
export default exampleReducer;
