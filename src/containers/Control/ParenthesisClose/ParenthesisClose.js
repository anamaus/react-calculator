import React from 'react';
import {addValue, subtractParenthesis} from "../../../actions/resultActions";
import {connect} from "react-redux";

class ParenthesisClose extends React.Component {

    clickHandler = (event) => {
        this.props.addValue(event.target);
        this.props.subtractParenthesis();
    };

    render() {
        const classes = ['calculator-button'];

        if (!this.props.canCloseParenthesis || this.props.parenthesisCounter === 0) {
            classes.push('calculator-button--disabled')
        }

        return (
            <button className={classes.join(' ')}
                    value=')'
                    onClick={this.clickHandler}
            >
                )
            </button>
        )
    }
}

//set which props from state you need in this component.
const mapStateToProps = (state) => {
    return {
        parenthesisCounter: state.resultReducer.parenthesisCounter,
        canCloseParenthesis: state.resultReducer.canCloseParenthesis
    }
};

//set which actions you need in this component.
const mapDispatchToProps = (dispatch) => {
    return {
        addValue: (number) => {
            dispatch(addValue(number))
        },
        subtractParenthesis: () => {
            dispatch(subtractParenthesis())
        },

    }
};

//connect connects this react component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(ParenthesisClose);