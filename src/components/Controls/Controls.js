import React from 'react';

import Digit from "../../containers/Control/Digit/Digit";
import Clear from '../../containers/Control/Clear/Clear';
import Decimal from '../../containers/Control/Decimal/Decimal';
import Equals from '../../containers/Control/Equals/Equals';
import Operator from '../../containers/Control/Operator/Operator';
import ParenthesisClose from '../../containers/Control/ParenthesisClose/ParenthesisClose';
import ParenthesisOpen from '../../containers/Control/ParenthesisOpen/ParenthesisOpen';
import Reset from '../../containers/Control/Reset/Reset';



const Controls = () => {

    return (
        <div className="calculator-controls">
            <ParenthesisOpen />
            <ParenthesisClose />
            <Reset />
            <Clear />

            <Digit text='7' value='7'/>
            <Digit text='8' value='8'/>
            <Digit text='9' value='9'/>
            <Operator text='/' value='/'/>

            <Digit text='4' value='4'/>
            <Digit text='5' value='5'/>
            <Digit text='6' value='6'/>
            <Operator text='*' value='*'/>

            <Digit text='1' value='1'/>
            <Digit text='2' value='2'/>
            <Digit text='3' value='3'/>
            <Operator text='-' value='-'/>

            <Digit text='0' value='0'/>
            <Decimal />
            <Equals />
            <Operator text='+' value='+'/>

        </div>
    )
};

export default Controls;