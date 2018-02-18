import React from 'react';

const Control = (props) => {


    let styles =
        (props.value === 'decimal' && props.decimalEnabled) ||
        (props.value === 'operator' && !props.calculationAllowed) ||
        (props.value === 'operator' && !props.output.length) ||
        (props.value === 'parenthesisClose' && !props.canCloseParenthesis) ||
        (props.value === 'parenthesisClose' && props.parenthesisCounter === 0) ||
        (props.value === 'calc' && !props.output.length) ||
        (props.value === 'calc' && props.parenthesisCounter !== 0) ?
            {
                pointerEvents: 'none',
                color: '#dedede'
            } : {
                pointerEvents: 'auto',
                color: 'black'
            };

    return (
        <button className="calculator-button"
                value={props.value}
                onClick={props.clickHandler}
                style={styles}
        >
            {props.text}
        </button>
    )
};

export default Control;