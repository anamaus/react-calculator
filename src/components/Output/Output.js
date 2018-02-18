import React from 'react';
import {connect} from "react-redux";

class Output extends React.Component {

    render () {
        console.log(this.props);


        const {output} = this.props;

        let outputValues;
        let value = '0';

        if(output && output.length) {
            outputValues = output.map(value => {
                return value.value
            });

            value = outputValues.join("");
        }


        return (
            <div className="calculator-output">
                History: {value}
                <hr/>
                <p>
                    Result: {this.props.result}
                </p>

            </div>
        )
    }

}

//set which props from state you need in this component.
const mapStateToProps = (state) => {
    return {
        output: state.resultReducer.output,
        result: state.resultReducer.result,

    }
};


//connect connects this react component to redux store
export default connect(mapStateToProps)(Output);