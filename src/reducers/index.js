import {combineReducers} from "redux";

//import reducers
import resultReducer from "./resultReducer";
import controlsReducer from "./controlsReducer";


//combine all the imported reducers into one  that we export and import in store.
const combinedReducers  = combineReducers({resultReducer, controlsReducer});

export default combinedReducers;
