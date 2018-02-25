import React from 'react';
import PropTypes from 'prop-types';

import {addValue} from "../../../actions/resultActions";
import {allowCalculation, allowOperators, checkParenthesisNumber, setCanCloseParenthesis, toggleDecimalValue} from "../../../actions/controlsActions";
import {connect} from "react-redux";

export class Operator extends React.Component {

    clickHandler = (event) => {
        if (this.props.decimalAdded) {
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
        const classes = ['calculator-button', 'calculator-button--accented'];

        if (!this.props.operatorsAllowed) {
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
        operatorsAllowed: state.controlsReducer.operatorsAllowed,
        decimalAdded: state.controlsReducer.decimalAdded,
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

Operator.propTypes = {
    output: PropTypes.array,
    operatorsAllowed: PropTypes.bool,
    decimalAdded: PropTypes.bool,
    addValue: PropTypes.func,
    toggleDecimalValue: PropTypes.func,
    allowCalculation: PropTypes.func,
    setCanCloseParenthesis: PropTypes.func,
    allowOperators: PropTypes.func,
};