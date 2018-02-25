import reducer from "./resultReducer";

describe('result reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            output: [],
            result: 0,
            lastValue: {},
        })
    });

    it('should add value to output', () => {
        expect(reducer(
            {
                output: [],
                result: 0,
                lastValue: {},
            },
            {
                type: 'RESULT_ADD_VALUE',
                payload: '5'
            }
        )).toEqual({
            output: ['5'],
            result: 0,
            lastValue: {},
        })
    });

    it('should reset to initial state', () => {
        expect(reducer(
            {
                output: ['5'],
                result: 0,
                lastValue: {}
            },
            {
                type: 'RESULT_RESET_RESULT'
            }
            )).toEqual({
            output: [],
            result: 0,
            lastValue: {},
        })
    });

    it('should remove last value from output', () => {
        expect(reducer(
            {
                output: ['5', '3'],
                result: 0,
                lastValue: {}
            },
            {
                type: 'RESULT_REMOVE_LAST_VALUE'
            }
        )).toEqual({
            output: ['5'],
            result: 0,
            lastValue: {},
        })
    });

    it('should set last value', () => {
        expect(reducer(
            {
                output: [{value: '1'}, {value: '2'}],
                result: 0,
                lastValue: {}
            },
            {
                type: 'RESULT_SET_LAST_VALUE'
            }
        )).toEqual({
            output: [{value: '1'}, {value: '2'}],
            result: 0,
            lastValue: {value: '2'}
        })
    })
});