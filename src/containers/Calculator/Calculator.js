import React from 'react';
import {connect} from "react-redux";

import Output from '../../components/Output/Output';
import Controls from '../../components/Controls/Controls';


class Calculator extends React.Component {

    render () {
        const {output} = this.props;

        // let outputValues;
        //
        // if(output.length) {
        //     outputValues = output.map(value => {
        //         return value.value
        //     });
        //
        // }

        return (
            <div className="calculator">
                <Output />
                <Controls />
                {/*<div>{output}</div>*/}
                {/*<div>{this.props.lastValue}</div>*/}
            </div>
        )
    }

}

//set which props from state you need in this component.
const mapStateToProps = (state) => {
    return {
        output: state.resultReducer.output,
        counter: state.resultReducer.parenthesisCounter,
        lastValue: state.resultReducer.lastValue
    }
};


//connect connects this react component to redux store
export default connect(mapStateToProps)(Calculator);