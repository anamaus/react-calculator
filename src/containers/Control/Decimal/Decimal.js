import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import {addValue} from "../../../actions/resultActions";
import {toggleDecimalValue, allowCalculation} from "../../../actions/controlsActions";


class Decimal extends React.Component {

    clickHandler = (event) => {
        if(!this.props.decimalEnabled) {
            this.props.toggleDecimalValue(true);
            this.props.allowOperators(false);
        }

        this.props.addValue(event.target);
    };

    render() {

        const classes = ['calculator-button'];

        if (this.props.decimalEnabled) {
            classes.push('calculator-button--disabled')
        }

        return (
            <button className={classes.join(' ')}
                    value='.'
                    onClick={this.clickHandler}
            >
                .
            </button>
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
        decimalEnabled: state.controlsReducer.decimalEnabled,
    }
};

//connect connects this react component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(Decimal);

Decimal.propTypes = {
    addValue: PropTypes.func.isRequired,
    allowOperators: PropTypes.func.isRequired,
    toggleDecimalValue: PropTypes.func.isRequired,
};