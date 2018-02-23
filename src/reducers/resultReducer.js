const initialState = {
    output: [],
    result: 0,
    lastValue: {},

};

const resultReducer = (state = initialState, action) => {
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

        default: return state;
    }
};
export default resultReducer;


