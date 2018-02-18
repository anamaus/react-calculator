import React from 'react';
import {connect} from "react-redux";

import {addValue, toggleDecimalValue, allowCalculation} from "../../../actions/resultActions";


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
        decimalEnabled: state.resultReducer.decimalEnabled,
    }
};

//connect connects this react component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(Decimal);