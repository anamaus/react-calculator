import React from 'react';

import Output from '../../containers/Output/Output';
import Controls from '../Controls/Controls';

import styled from 'styled-components';

const CalculatorWrapper = styled.div`
    margin: 100px auto 0;
    width: 300px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const Calculator = () => {

    return (
        <CalculatorWrapper>
            <Output/>
            <Controls/>
        </CalculatorWrapper>
    )
};

export default Calculator;