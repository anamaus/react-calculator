//Redux
import {createStore, applyMiddleware} from "redux";

//import 3rd party middleware logger
import { createLogger } from 'redux-logger';

//import thunk  middleware for async actions
import thunk from 'redux-thunk';

//import reducers
import combinedReducers from "./reducers/index.js";

export default createStore(combinedReducers, {}, applyMiddleware(createLogger(), thunk));
