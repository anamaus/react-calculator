import React from 'react';
import PropTypes from 'prop-types';

import {addValue} from "../../../actions/resultActions";
import { allowOperators, checkParenthesisNumber, setCanCloseParenthesis} from "../../../actions/controlsActions";

import {connect} from "react-redux";

class ParenthesisOpen extends React.Component {

    clickHandler = (event) => {
        this.props.addValue(event.target);
        this.props.setCanCloseParenthesis(false);
        this.props.allowOperators(false);
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
            dispatch(addValue(number));
            dispatch(checkParenthesisNumber());
        },
        allowOperators: (bool) => {
            dispatch(allowOperators(bool))
        },

        setCanCloseParenthesis: (bool) => {
            dispatch(setCanCloseParenthesis(bool))
        },

    }
};

//connect connects this react component to redux store
export default connect(null, mapDispatchToProps)(ParenthesisOpen);

ParenthesisOpen.propTypes = {
    addValue: PropTypes.func.isRequired,
    allowOperators: PropTypes.func.isRequired,
    setCanCloseParenthesis: PropTypes.func.isRequired,

};