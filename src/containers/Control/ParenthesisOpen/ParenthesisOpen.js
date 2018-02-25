import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import {addValue} from "../../../actions/resultActions";
import { allowOperators, checkParenthesisNumber, setCanCloseParenthesis} from "../../../actions/controlsActions";

import Control from '../../../components/Control/Control';

class ParenthesisOpen extends React.Component {

    clickHandler = (event) => {
        this.props.addValue(event.target);
        this.props.setCanCloseParenthesis(false);
        this.props.allowOperators(false);
    };

    render() {
        return (
            <Control
                text='('
                value='('
                clickHandler={this.clickHandler}
            />
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