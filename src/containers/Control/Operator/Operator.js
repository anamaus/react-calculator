import React from 'react';
import {addValue, allowCalculation, setCanCloseParenthesis, toggleDecimalValue} from "../../../actions/resultActions";
import {connect} from "react-redux";

class Operator extends React.Component {

    clickHandler = (event) => {
        if (this.props.decimalEnabled) {
            this.props.toggleDecimalValue(false);
        }

        this.props.allowCalculation(false);


        this.props.setCanCloseParenthesis(false)

        this.props.addValue(event.target);
    };

    render() {

        const classes = ['calculator-button'];

        if (!this.props.calculationAllowed || !this.props.output.length) {
            classes.push('calculator-button--disabled')
        }

        return (
            <button className={classes.join(' ')}
                    value={this.props.value}
                    onClick={this.clickHandler}
            >
                {this.props.text}
            </button>
        )
    }
}


//set which props from state you need in this component.
const mapStateToProps = (state) => {
    return {
        output: state.resultReducer.output,
        calculationAllowed: state.resultReducer.calculationAllowed,
        decimalEnabled: state.resultReducer.decimalEnabled,
    }
};

//set which actions you need in this component.
const mapDispatchToProps = (dispatch) => {
    return {
        addValue: (number) => {
            dispatch(addValue(number))
        },
        toggleDecimalValue: (bool) => {
            dispatch(toggleDecimalValue(bool))
        },
        allowCalculation: (bool) => {
            dispatch(allowCalculation(bool))
        },
        setCanCloseParenthesis: (bool) => {
            dispatch(setCanCloseParenthesis(bool))
        },
    }
};

//connect connects this react component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(Operator);