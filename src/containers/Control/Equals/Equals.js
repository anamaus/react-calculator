import React from 'react';

import {connect} from "react-redux";

import {calculateResult} from "../../../actions/resultActions";

//import library for calculations
import math from 'mathjs';

class Equals extends React.Component {

    clickHandler = () => {
        if (!this.props.output.length) {
            return;
        }

        let output = this.props.output.map(value => {
            return value.value
        });

        const currentInput = output.join("");

        this.props.calculateResult(math.eval(currentInput));
    };

    render() {
        const classes = ['calculator-button'];

        if (!this.props.calculationAllowed || !this.props.output.length || this.props.parenthesisCounter !== 0) {
            classes.push('calculator-button--disabled')
        }


        return (
            <button className={classes.join(' ')}
                    value='='
                    onClick={this.clickHandler}

            >
                =
            </button>
        )
    }


}

//set which props from state you need in this component.
const mapStateToProps = (state) => {
    return {
        output: state.resultReducer.output,
        calculationAllowed: state.resultReducer.calculationAllowed,
        parenthesisCounter: state.resultReducer.parenthesisCounter,
    }
};

//set which actions you need in this component.
const mapDispatchToProps = (dispatch) => {
    return {
        calculateResult: (result) => {
            dispatch(calculateResult(result))
        },
    }
};

//connect connects this react component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(Equals);