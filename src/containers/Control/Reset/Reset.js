import React from 'react';
import {resetCalculator} from "../../../actions/resultActions";
import {connect} from "react-redux";

class Reset extends React.Component {

    clickHandler = () => {
        this.props.reset();
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
                CA
            </button>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        output: state.resultReducer.output,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        reset: () => {
            dispatch(resetCalculator())
        },
    }
};

//connect connects this react component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(Reset);