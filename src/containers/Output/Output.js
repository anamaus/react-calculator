import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import OutputComponent from '../../components/Output/Output';

class Output extends React.Component {

    render() {
        const {output, result} = this.props;

        let outputValues;
        let value = '0';

        if (output && output.length) {
            outputValues = output.map(value => {
                return value.value
            });

            value = outputValues.join("");
        }

        return (
            <OutputComponent value={value} result={result} />
        )
    }

}

//set which props from state you need in this component.
const mapStateToProps = (state) => {
    return {
        output: state.resultReducer.output,
        result: state.resultReducer.result,

    }
};

//connect connects this react component to redux store
export default connect(mapStateToProps)(Output);

Output.propTypes = {
    output: PropTypes.array,
    result: PropTypes.number,

};
