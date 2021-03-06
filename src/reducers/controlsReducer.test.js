import reducer from "./controlsReducer";

describe('result reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            decimalAdded: false,
            calculationAllowed: false,
            operatorsAllowed: false,
            canCloseParenthesis: false,
        })
    });

    it('should reset to initial state', () => {
        expect(reducer(
            {
                decimalAdded: true,
                calculationAllowed: true,
                operatorsAllowed: true,
                canCloseParenthesis: true,
            },
            {
                type: 'CONTROLS_RESET_CONTROLS'
            }
        )).toEqual({
            decimalAdded: false,
            calculationAllowed: false,
            operatorsAllowed: false,
            canCloseParenthesis: false,
        })
    });

    it('should set decimal enabled to true', () => {
        expect(reducer(
            {
                decimalAdded: false,
                calculationAllowed: false,
                operatorsAllowed: false,
                canCloseParenthesis: false,
            },
            {
                type: 'CONTROLS_TOGGLE_DECIMAL_VALUE',
                payload: true
            }
        )).toEqual({
            decimalAdded: true,
            calculationAllowed: false,
            operatorsAllowed: false,
            canCloseParenthesis: false,
        })
    });

    it('should set allow calculation to false', () => {
        expect(reducer(
            {
                decimalAdded: false,
                calculationAllowed: false,
                operatorsAllowed: false,
                canCloseParenthesis: false,
            },
            {
                type: 'CONTROLS_ALLOW_CALCULATION',
                payload: false
            }
        )).toEqual({
            decimalAdded: false,
            calculationAllowed: false,
            operatorsAllowed: false,
            canCloseParenthesis: false,
        })
    });

    it('should set allow operators to true', () => {
        expect(reducer(
            {
                decimalAdded: false,
                calculationAllowed: false,
                operatorsAllowed: false,
                canCloseParenthesis: false,
            },
            {
                type: 'CONTROLS_ALLOW_OPERATORS',
                payload: true
            }
        )).toEqual({
            decimalAdded: false,
            calculationAllowed: false,
            operatorsAllowed: true,
            canCloseParenthesis: false,
        })
    });

    it('should set close parenthesis possibility to true', () => {
        expect(reducer(
            {
                decimalAdded: false,
                calculationAllowed: false,
                operatorsAllowed: false,
                canCloseParenthesis: false,
            },
            {
                type: 'CONTROLS_SET_CAN_CLOSE_PARENTHESIS',
                payload: true
            }
        )).toEqual({
            decimalAdded: false,
            calculationAllowed: false,
            operatorsAllowed: false,
            canCloseParenthesis: true,
        })
    });

    it('parenthesis close number should be smaller than parenthesis open number', () => {
        const array = ["(", "(", ")"];
        let openParenthesis = 0;
        let closeParenthesis = 0;

        for (let i = 0; i < array.length; i++) {
            if (array[i] === "(") {
                openParenthesis++;
            } else if (array[i] === ")") {
                closeParenthesis++
            }
        }
        expect(closeParenthesis).toBeLessThan(openParenthesis);
    });

    it('parenthesis open number should be equal to parenthesis close number', () => {
        const array = ["(", "(", ")", ")"];
        let openParenthesis = 0;
        let closeParenthesis = 0;

        for (let i = 0; i < array.length; i++) {
            if (array[i] === "(") {
                openParenthesis++;
            } else if (array[i] === ")") {
                closeParenthesis++
            }
        }
        expect(openParenthesis === closeParenthesis).toBeTruthy();
    })

});