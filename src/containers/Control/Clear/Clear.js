import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import {removeLastValue, setLastValue, resetResult} from "../../../actions/resultActions";
import {allowCalculation, setCanCloseParenthesis, resetControls} from "../../../actions/controlsActions";

import Control from '../../../components/Control/Control';

export class Clear extends React.Component {

    clickHandler = () => {

        this.props.removeLastValue();

        setTimeout(() => {
            this.props.setLastValue();

            this.props.removeLastValue();

            if (this.props.lastValue) {
                this.props.lastValue.click();
            } else {
                this.props.resetCalculator();
            }

        }, 0)
    };

    render() {
        return (
            <Control
                text='&#x219C;'
                value='clear'
                clickHandler={this.clickHandler}
                disabled={!this.props.output.length}
            />
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
        resetCalculator: () => {
            dispatch(resetControls());
            dispatch(resetResult());
        },



    }
};

//connect connects this react component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(Clear);

Clear.propTypes = {
    output: PropTypes.array,
    lastValue: PropTypes.object,
    removeLastValue: PropTypes.func,
    allowCalculation: PropTypes.func,
    setLastValue: PropTypes.func,
    setCanCloseParenthesis: PropTypes.func,

};
