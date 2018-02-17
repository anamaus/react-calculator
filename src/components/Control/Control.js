import React from 'react';

const Control = (props) => {
    return (
        <button className="calculator-button"
                value={props.value}
                onClick={props.clickHandler}
                style={{pointerEvents:
                        (props.value ==='decimal' && props.decimalEnabled) || (props.value ==='operator' && !props.calculationAllowed) ?
                            'none' : 'auto'}}
        >
            {props.text}
        </button>
    )
};

export default Control;