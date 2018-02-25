import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import {addValue} from "../../../actions/resultActions";
import {toggleDecimalValue, allowCalculation} from "../../../actions/controlsActions";

import Control from '../../../components/Control/Control';

export class Decimal extends React.Component {

    clickHandler = (event) => {
        if(!this.props.decimalAdded) {
            this.props.toggleDecimalValue(true);
            this.props.allowOperators(false);
        }

        this.props.addValue(event.target);
    };

    render() {
        return (
            <Control text='.' value='.' clickHandler={this.clickHandler} disabled={this.props.decimalAdded}/>
        )
    }
}

//set which actions you need in this component.
const mapDispatchToProps = (dispatch) => {
    return {
        addValue: (number) => {
            dispatch(addValue(number))
        },
        toggleDecimalValue: (bool) => {
            dispatch(toggleDecimalValue(bool))
        },
        allowOperators: (bool) => {
            dispatch(allowCalculation(bool))
        },
    }
};

//set which props from state you need in this component.
const mapStateToProps = (state) => {
    return {
        decimalAdded: state.controlsReducer.decimalAdded,
    }
};

//connect connects this react component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(Decimal);

Decimal.propTypes = {
    addValue: PropTypes.func,
    allowOperators: PropTypes.func,
    toggleDecimalValue: PropTypes.func,
};