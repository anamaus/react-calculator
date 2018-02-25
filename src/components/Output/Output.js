import React from 'react';
import styled from 'styled-components';

const OutputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    padding: 20px;
    background-color: #fff;
    
    color: #7C7877;
`;

const OutputHistory = styled.div`
    word-break: break-all;
`;

const OutputResult = styled.div`
    font-size: 36px;
    margin-bottom: 10px;
    word-break: break-all;
`;

const Output = (props) => {
    return (
        <OutputWrapper>
            <OutputResult>
                {props.result}
            </OutputResult>
            <OutputHistory>
                {props.value}
            </OutputHistory>
        </OutputWrapper>
    )
};

export default Output;