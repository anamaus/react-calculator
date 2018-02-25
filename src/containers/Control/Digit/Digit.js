import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import {addValue} from "../../../actions/resultActions";
import { allowOperators, checkParenthesisNumber} from "../../../actions/controlsActions";


class Digit extends React.Component {

    clickHandler = (event) => {
        //allow use of operators after a digit
        this.props.allowOperators(true);

        //add self to output array
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

//set which actions you need in this component.
const mapDispatchToProps = (dispatch) => {
    return {
        addValue: (number) => {
            dispatch(addValue(number));
            dispatch(checkParenthesisNumber());
        },
        allowOperators: (bool) => {
            dispatch(allowOperators(bool))
        },

    }
};

//connect connects this react component to redux store
export default connect(null, mapDispatchToProps)(Digit);

Digit.propTypes = {
    addValue: PropTypes.func,
    allowOperators: PropTypes.func,
};