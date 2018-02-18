import React from 'react';
import {connect} from "react-redux";

import {removeLastValue, allowCalculation,setLastValue} from "../../../actions/resultActions";

class Clear extends React.Component {

    clickHandler = () => {
        this.props.removeLastValue();

        setTimeout(() => {
            this.props.setLastValue();

            this.props.removeLastValue();


            // if (this.props.output.length > 1) {
                this.props.lastValue.click();
                console.log(this.props.lastValue.value);
            // }

        }, 0)

    };

    render() {

        const classes = ['calculator-button'];

        // if (!this.props.lastValue || !this.props.output.length) {
        //     classes.push('calculator-button--disabled')
        // }

        return (
            <button className={classes.join(' ')}
                    value={this.props.value}
                    onClick={this.clickHandler}
            >
                C
            </button>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        output: state.resultReducer.output,
        parenthesisCounter: state.resultReducer.parenthesisCounter,
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



    }
};

//connect connects this react component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(Clear);