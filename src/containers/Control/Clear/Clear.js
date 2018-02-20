import React from 'react';
import {connect} from "react-redux";

import {removeLastValue, allowCalculation, setLastValue, setCanCloseParenthesis} from "../../../actions/resultActions";

class Clear extends React.Component {

    clickHandler = () => {

        this.props.removeLastValue();

        setTimeout(() => {
            this.props.setLastValue();

            this.props.removeLastValue();


            if (this.props.lastValue) {
                this.props.lastValue.click();
                console.log('LASTVALUE',this.props.lastValue.value);
            }

            const a = this.props.output;

            let openParenthesis = 0;
            let closeParenthesis = 0;
            for (let i = 0; i < a.length; i++) {
                if (a[i].textContent === "(") {
                    openParenthesis++;
                } else if (a[i].textContent === ")") {
                    closeParenthesis++
                }
            }
            if (openParenthesis === closeParenthesis) {
                console.log(openParenthesis === closeParenthesis);
                this.props.setCanCloseParenthesis(false)
            } else  if (openParenthesis > closeParenthesis) {
                this.props.setCanCloseParenthesis(true)
            }

        }, 0)

        // setTimeout(() => {
        //     const a = this.props.output;
        //
        //     let openParenthesis = 0;
        //     let closeParenthesis = 0;
        //     for (let i = 0; i < a.length; i++) {
        //         if (a[i].textContent === "(") {
        //             openParenthesis++;
        //         } else if (a[i].textContent === ")") {
        //             closeParenthesis++
        //         }
        //     }
        //    if (openParenthesis === closeParenthesis) {
        //         console.log(openParenthesis === closeParenthesis);
        //        this.props.setCanCloseParenthesis(false)
        //    } else  if (openParenthesis > closeParenthesis) {
        //        this.props.setCanCloseParenthesis(true)
        //    }
        //
        // }, 0)

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
        setCanCloseParenthesis: (bool) => {
            dispatch(setCanCloseParenthesis(bool))
        },



    }
};

//connect connects this react component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(Clear);