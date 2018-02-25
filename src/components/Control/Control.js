import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: calc(25%);


    padding: 15px 10px;

    font-size: 20px;

    background: #fff;

    border-color: rgba(97, 229, 204, 0.10);
    border-radius: 0;

    transition: background .2s;
    
    
    color: ${props => props.disabled ? '#dedede' : '#7C7877'};
    background: ${props => props.accented ? 'rgba(97, 229, 204, 0.36)' : '#fff'};
    
    &:hover {
        background: rgba(97, 229, 204, 0.36);
    }
    
    &:focus {
        outline: 0;
    }
    

`;

const Control = (props) => {

    return (
        <Button
                disabled={props.disabled}
                value={props.value}
                onClick={props.clickHandler}
                accented={props.accented}
        >
            {props.text}
        </Button>
    )
};

export default Control;