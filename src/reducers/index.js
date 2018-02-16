import {combineReducers} from "redux";

//import reducers
import exampleReducer from "./exampleReducer";

//combine all the imported reducers into one  that we export and import in store.
const combinedReducers  = combineReducers({exampleReducer});

export default combinedReducers;
