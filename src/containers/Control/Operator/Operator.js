import React from 'react';
import {
    addValue, allowCalculation, allowOperators, checkParenthesisNumber, setCanCloseParenthesis,
    toggleDecimalValue
} from "../../../actions/resultActions";
import {connect} from "react-redux";

class Operator extends React.Component {

    clickHandler = (event) => {
        if (this.props.decimalEnabled) {
            this.props.toggleDecimalValue(false);
        }

        //add self to output array
        this.props.addValue(event.target);

        // //disable parenthesis closing right after an operator
        this.props.setCanCloseParenthesis(false);

        //disable operator after another operator
        this.props.allowOperators(false);

        //disable calculation right after an operator
        this.props.allowCalculation(false);
    };

    render() {
        const classes = ['calculator-button'];

        if (!this.props.operatorsAllowed || !this.props.output.length) {
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
        operatorsAllowed: state.resultReducer.operatorsAllowed,
        decimalEnabled: state.resultReducer.decimalEnabled,
    }
};

//set which actions you need in this component.
const mapDispatchToProps = (dispatch) => {
    return {
        addValue: (number) => {
            dispatch(addValue(number));
            dispatch(checkParenthesisNumber());
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
        allowOperators: (bool) => {
            dispatch(allowOperators(bool))
        },
    }
};

//connect connects this react component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(Operator);