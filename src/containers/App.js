import React from "react";
import {connect} from "react-redux";


class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="calculator">
                    <div className="calculator-output">

                        adadadada
                    </div>
adadadada
                </div>
            </div>
        );
    }
}

//set which props from state you need in this component.
const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
  }
};

//set which actions you need in this component.
const mapDispatchToProps = (dispatch) => {
  return {
    // setName: (name)=> {
    //   dispatch(setName(name))
    // },
  }
};

//connect connects this react component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(App);

//if there is only 1 or 2 actions we dont need mapDispatchToProps:
// export default connect(mapStateToProps, {setName})(App);
