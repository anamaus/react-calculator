import {combineReducers} from "redux";

//import reducers
import resultReducer from "./resultReducer";

//combine all the imported reducers into one  that we export and import in store.
const combinedReducers  = combineReducers({resultReducer});

export default combinedReducers;
