import React from 'react';

import Output from '../../containers/Output/Output';
import Controls from '../Controls/Controls';


class Calculator extends React.Component {

    render () {
        return (
            <div className="calculator">
                <Output />
                <Controls />
            </div>
        )
    }

}

export default Calculator;