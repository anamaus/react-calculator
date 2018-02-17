import React from 'react';
import {connect} from "react-redux";

import math from 'mathjs';

import {addValue, calculateResult, resetCalculator, toggleDecimalValue, allowCalculation,removeLastValue} from "../../actions/resultActions";

import Output from '../../components/Output/Output';
import Controls from '../../components/Controls/Controls';


class Calculator extends React.Component {

    onGetValue = (event) => {
        const controlValue = event.target.value;

        switch (controlValue) {
            case 'clear':
                this.props.removeLastValue();
                break;

            case 'calc':
                const currentInput = this.props.output.join('');
                this.props.calculateResult(math.eval(currentInput));
                break;

            case 'decimal':
                if(!this.props.decimalEnabled) {
                    this.props.toggleDecimalValue(true);
                    this.props.allowCalculation(false);
                }

                this.props.addValue(event.target.innerHTML);
                break;

            case 'operator':
                if(this.props.decimalEnabled) {
                    this.props.toggleDecimalValue(false);
                }
                this.props.addValue(event.target.innerHTML);
                break;

            default:
                if(!this.props.calculationAllowed) {
                    this.props.allowCalculation(true);
                }
                this.props.addValue(event.target.innerHTML);
        }
    };

    render () {
        console.log(this.props);
        const {output} = this.props;

        return (
            <div className="calculator">
                <Output output={output}/>
                <Controls clickHandler={this.onGetValue} {...this.props}/>
            </div>
        )
    }

}

//set which props from state you need in this component.
const mapStateToProps = (state) => {
    return {
        output: state.resultReducer.output,
        decimalEnabled: state.resultReducer.decimalEnabled,
        calculationAllowed: state.resultReducer.calculationAllowed
    }
};

//set which actions you need in this component.
const mapDispatchToProps = (dispatch) => {
    return {
        addValue: (number) => {
            dispatch(addValue(number))
        },
        calculateResult: (result) => {
            dispatch(calculateResult(result))
        },
        reset: () => {
            dispatch(resetCalculator())
        },
        toggleDecimalValue: (bool) => {
            dispatch(toggleDecimalValue(bool))
        },
        allowCalculation: (bool) => {
            dispatch(allowCalculation(bool))
        },
        removeLastValue: () => {
            dispatch(removeLastValue())
        },

    }
};

//connect connects this react component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);