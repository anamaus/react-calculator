//Redux
import {createStore, applyMiddleware} from "redux";

//import reducers
import combinedReducers from "./reducers/index.js";

//import thunk  middleware for async actions
import thunk from 'redux-thunk';

const middlewares = [thunk];


//import 3rd party middleware logger
if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);

    middlewares.push(logger);
}

export default createStore(combinedReducers, {}, applyMiddleware(...middlewares));
