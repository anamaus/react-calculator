export const isParenthesisNumberEqual = (array) => {
    let value1Count = 0;
    let value2Count = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i].value === "(") {
            value1Count++;
        } else if (array[i].value === ")") {
            value2Count++
        }
    }

    return value1Count === value2Count;
};