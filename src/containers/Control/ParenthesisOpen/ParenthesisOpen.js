import React from 'react';
import {addParenthesis, addValue, allowCalculation, setCanCloseParenthesis} from "../../../actions/resultActions";
import {connect} from "react-redux";

class ParenthesisOpen extends React.Component {

    clickHandler = (event) => {
        this.props.addParenthesis();
        this.props.allowOperators(false);
        this.props.setCanCloseParenthesis(false)
        this.props.addValue(event.target);
    };

    render() {
        return (
            <button className="calculator-button"
                    value='('
                    onClick={this.clickHandler}
            >
                (
            </button>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addValue: (number) => {
            dispatch(addValue(number))
        },
        allowOperators: (bool) => {
            dispatch(allowCalculation(bool))
        },
        addParenthesis: () => {
            dispatch(addParenthesis())
        },
        setCanCloseParenthesis: (bool) => {
            dispatch(setCanCloseParenthesis(bool))
        },

    }
};

//connect connects this react component to redux store
export default connect(null, mapDispatchToProps)(ParenthesisOpen);