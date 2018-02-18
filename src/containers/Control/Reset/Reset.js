import React from 'react';
import {resetCalculator} from "../../../actions/resultActions";
import {connect} from "react-redux";

class Reset extends React.Component {

    clickHandler = () => {
        this.props.reset();
    };

    render() {
        return (
            <button className="calculator-button"
                    value={this.props.value}
                    onClick={this.clickHandler}
            >
                CA
            </button>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        reset: () => {
            dispatch(resetCalculator())
        },
    }
};

//connect connects this react component to redux store
export default connect(null, mapDispatchToProps)(Reset);