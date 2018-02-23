import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import {removeLastValue, setLastValue} from "../../../actions/resultActions";
import {allowCalculation, setCanCloseParenthesis} from "../../../actions/controlsActions";

class Clear extends React.Component {

    clickHandler = () => {

        this.props.removeLastValue();

        setTimeout(() => {
            this.props.setLastValue();

            this.props.removeLastValue();

            if (this.props.lastValue) {
                this.props.lastValue.click();
            }

        }, 0)
    };

    render() {
        const classes = ['calculator-button'];

        if ( !this.props.output.length) {
            classes.push('calculator-button--disabled')
        }

        return (
            <button className={classes.join(' ')}
                    value={this.props.value}
                    onClick={this.clickHandler}
            >
                &#x219C;
            </button>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        output: state.resultReducer.output,
        lastValue: state.resultReducer.lastValue,

    }
};

//set which actions you need in this component.
const mapDispatchToProps = (dispatch) => {
    return {
        removeLastValue: () => {
            dispatch(removeLastValue())
        },
        allowCalculation: () => {
            dispatch(allowCalculation())
        },
        setLastValue: () => {
            dispatch(setLastValue())
        },
        setCanCloseParenthesis: (bool) => {
            dispatch(setCanCloseParenthesis(bool))
        },



    }
};

//connect connects this react component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(Clear);

Clear.propTypes = {
    output: PropTypes.array.isRequired,
    lastValue: PropTypes.object,
    removeLastValue: PropTypes.func.isRequired,
    allowCalculation: PropTypes.func.isRequired,
    setLastValue: PropTypes.func.isRequired,
    setCanCloseParenthesis: PropTypes.func.isRequired,

};
