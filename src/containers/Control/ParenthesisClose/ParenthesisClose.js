import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import {addValue} from "../../../actions/resultActions";
import {checkParenthesisNumber} from "../../../actions/controlsActions";

import Control from '../../../components/Control/Control';

export class ParenthesisClose extends React.Component {

    clickHandler = (event) => {
        //add self to output array
        this.props.addValue(event.target);
    };

    render() {
        return (
            <Control
                text=')'
                value=')'
                clickHandler={this.clickHandler}
                disabled={!this.props.canCloseParenthesis}
            />
        )
    }
}

//set which props from state you need in this component.
const mapStateToProps = (state) => {
    return {
        output: state.resultReducer.output,
        canCloseParenthesis: state.controlsReducer.canCloseParenthesis
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

ParenthesisClose.propTypes = {
    output: PropTypes.array,
    canCloseParenthesis: PropTypes.bool,
    decimalAdded: PropTypes.bool,
    addValue: PropTypes.func,
};