import React from 'react';

import {connect} from "react-redux";

import PropTypes from 'prop-types';

import {calculateResult} from "../../../actions/resultActions";
import Control from '../../../components/Control/Control';

//import library for calculations
import math from 'mathjs';

export class Equals extends React.Component {



    clickHandler = () => {

        if (!this.props.output.length) {
            return;
        }

        //get array of entered values
        let output = this.props.output.map(value => {
            return value.value
        });

        //transform array of current values into a sting for calculation
        const currentInput = output.join("");

        this.props.calculateResult(math.eval(currentInput));
    };

    render() {
        return (
            <Control text='=' value='=' clickHandler={this.clickHandler} disabled={!this.props.calculationAllowed}/>
        )
    }


}

//set which props from state you need in this component.
const mapStateToProps = (state) => {
    return {
        output: state.resultReducer.output,
        calculationAllowed: state.controlsReducer.calculationAllowed,
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


Equals.propTypes = {
    output: PropTypes.array,
    calculationAllowed: PropTypes.bool,
    calculateResult: PropTypes.func,
};