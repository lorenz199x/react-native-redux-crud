import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
const middleware = applyMiddleware(thunk)

import dataReducer from './reducers.js'; //Import the reducer

const reducers = combineReducers({
    quoteReducer: dataReducer
})

// Connect our store to the reducers
export default createStore(reducers, {}, middleware);
