import React from 'react';

import Control from "../Control/Control";
import ControlsData from "../../data/Controls";

const Controls = (props) => {
    const controls = ControlsData.map((data) => {
        return <Control key={data.id} {...data} {...props} clickHandler={props.clickHandler}/>
    });
    return (
        <div className="calculator-controls">
            {controls}
        </div>
    )
};

export default Controls;