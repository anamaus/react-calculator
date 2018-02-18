import React from 'react';
import {connect} from "react-redux";

import { addValue, allowCalculation, setCanCloseParenthesis} from "../../../actions/resultActions";


class Digit extends React.Component {

    clickHandler = (event) => {
        if(!this.props.calculationAllowed) {
            this.props.allowOperators(true);
        }
        if(this.props.parenthesisCounter !== 0) {
            this.props.setCanCloseParenthesis(true);
        }
        this.props.addValue(event.target);
    };

    render() {
        return (
            <button className="calculator-button"
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
        calculationAllowed: state.resultReducer.calculationAllowed,
        parenthesisCounter: state.resultReducer.parenthesisCounter,
    }
};

//set which actions you need in this component.
const mapDispatchToProps = (dispatch) => {
    return {
        addValue: (number) => {
            dispatch(addValue(number))
        },
        allowOperators: (bool) => {
            dispatch(allowCalculation(bool))
        },
        setCanCloseParenthesis: (bool) => {
            dispatch(setCanCloseParenthesis(bool))
        },

    }
};

//connect connects this react component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(Digit);