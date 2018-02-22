import React from 'react';
import {addValue, checkParenthesisNumber} from "../../../actions/resultActions";
import {connect} from "react-redux";

class ParenthesisClose extends React.Component {

    clickHandler = (event) => {
        //add self to output array
        this.props.addValue(event.target);
    };

    render() {
        const classes = ['calculator-button'];

        if (!this.props.canCloseParenthesis ) {
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
        output: state.resultReducer.output,
        canCloseParenthesis: state.resultReducer.canCloseParenthesis
    }
};

//set which actions you need in this component.
const mapDispatchToProps = (dispatch) => {
    return {
        addValue: (number) => {

            dispatch(addValue(number));
            dispatch(checkParenthesisNumber());

        },
    }
};

//connect connects this react component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(ParenthesisClose);