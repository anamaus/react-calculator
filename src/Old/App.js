import React from "react";
import {connect} from "react-redux";

import {addNumber, subtractNumber} from "../actions/resultActions";


class App extends React.Component {

    state = {
        currentValue: '',
        prevValue: 0,
        entering: false,
        operation: ''
    };

    onGetResult = () => {

    };

    onGetValue = (event) => {
        const currValue = event.target.innerHTML;

        this.setState((previousState, currentProps) => {
            return { ...previousState, entering:true, currentValue: previousState.currentValue + currValue};
        });

        setTimeout(() => {
            console.log(this.state)
        }, 0);

    };

    onAddValue = (event) => {

        setTimeout(() => {
            console.log(this.state)
        }, 0);


        // this.setState((previousState) => {
        //     return { ...previousState, prevValue: previousState.currentValue };
        // });

        let operation = event.target.innerHTML;
        switch(operation) {
            case '+':
                this.setState({
                    operation: 'add',
                });
                break;
            case '-':
                this.setState({
                    operation: 'subtract',
                });
                break;
            case '/':
                this.setState({
                    operation: 'divide',
                });
                break;
            case '*':
                this.setState({
                    operation: 'multiply',
                });
                break;
            default:
                console.log('whatever');
        }

        if(this.state.currentValue < 1) {
            return;
        }

        if(this.state.prevValue) {
            this.setState((previousState, currentProps) => {
                return { ...previousState, entering:false, prevValue: previousState.currentValue, currentValue: parseInt(previousState.prevValue) + parseInt(previousState.currentValue)};
                // let operation = previousState.operation;
                //
                // switch(operation) {
                //     case 'add':
                //         return { ...previousState,prevValue: previousState.currentValue, currentValue: parseInt(previousState.prevValue) + parseInt(previousState.currentValue)};
                //     case 'subtract':
                //         return { ...previousState, currentValue: previousState.prevValue - previousState.currentValue};
                //     case 'divide':
                //         return { ...previousState, currentValue: previousState.prevValue / previousState.currentValue};
                //     case 'multiply':
                //         return { ...previousState, currentValue: previousState.prevValue * previousState.currentValue};
                //     default:
                //         console.log('whatever');
                // }

            });
        } else {
            this.setState((previousState, currentProps) => {
                return { ...previousState, prevValue: parseInt(previousState.currentValue),currentValue: ''};
            });
        }



        // this.props.addNumber(parseInt(this.state.currentValue,10));
    };

    // onSubtractValue = () => {
    //
    //     this.setState({
    //         currentValue: '',
    //         entering: false,
    //     });
    //
    //     if(this.state.currentValue < 1) {
    //         return;
    //     }
    //
    //     this.props.subtractNumber(parseInt(this.state.currentValue,10));
    // };


    render() {
        const {output} = this.props;


        return (
            <div className="container">
                <div className="calculator">
                    <div className="calculator-output" style={{display: this.state.entering ? 'none' : 'block' }}>
                        { this.state.prevValue  }

                    </div>
                    <div className="calculator-output"  style={{display: this.state.entering ? 'block' : 'none' }}>
                        { this.state.currentValue }

                    </div>
                    <div className="calculator-controls">
                        <button className="calculator-button">(</button>
                        <button className="calculator-button">)</button>
                        <button className="calculator-button">%</button>
                        <button className="calculator-button">ac</button>

                        <button className="calculator-button" onClick={this.onGetValue}>7</button>
                        <button className="calculator-button" onClick={this.onGetValue}>8</button>
                        <button className="calculator-button" onClick={this.onGetValue}>9</button>
                        <button className="calculator-button" onClick={this.onAddValue}>/</button>

                        <button className="calculator-button" onClick={this.onGetValue}>4</button>
                        <button className="calculator-button" onClick={this.onGetValue}>5</button>
                        <button className="calculator-button" onClick={this.onGetValue}>6</button>
                        <button className="calculator-button" onClick={this.onAddValue}>*</button>

                        <button className="calculator-button" onClick={this.onGetValue}>1</button>
                        <button className="calculator-button" onClick={this.onGetValue}>2</button>
                        <button className="calculator-button" onClick={this.onGetValue}>3</button>
                        <button className="calculator-button" onClick={this.onAddValue}>-</button>

                        <button className="calculator-button">0</button>
                        <button className="calculator-button">.</button>
                        <button className="calculator-button" onClick={this.onGetResult}>=</button>
                        <button className="calculator-button" onClick={this.onAddValue}>+</button>

                    </div>
                </div>
            </div>
        );
    }
};

//set which props from state you need in this component.
const mapStateToProps = (state) => {
  return {
    output: state.resultReducer.output,
  }
};

//set which actions you need in this component.
const mapDispatchToProps = (dispatch) => {
    return {
        addNumber: (number) => {
            dispatch(addNumber(number))
        },
        subtractNumber: (number) => {
            dispatch(subtractNumber(number))
        },
    }
};

//connect connects this react component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(App);

//if there is only 1 or 2 actions we dont need mapDispatchToProps:
// export default connect(mapStateToProps, {setName})(App);
