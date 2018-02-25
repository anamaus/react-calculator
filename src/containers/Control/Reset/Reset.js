import React from 'react';
import PropTypes from 'prop-types';

import {resetResult} from "../../../actions/resultActions";
import {resetControls} from "../../../actions/controlsActions";
import {connect} from "react-redux";

import Control from '../../../components/Control/Control';

export class Reset extends React.Component {
    clickHandler = () => {
        this.props.reset();
    };

    render() {
        return (
            <Control text='C' value='C' clickHandler={this.clickHandler} disabled={!this.props.output.length}/>
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
            dispatch(resetResult());
            dispatch(resetControls());
        },
    }
};

//connect connects this react component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(Reset);

Reset.propTypes = {
    output: PropTypes.array,
    reset: PropTypes.func,

};