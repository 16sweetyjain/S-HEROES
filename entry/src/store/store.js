import { combineReducers, applyMiddleware, createStore } from 'redux';
import setUserEmailReducer from '../reducers/setUserEmail.js';
import logger from 'redux-logger';
const rootReducer = combineReducers({
    userEmail: setUserEmailReducer
});
const middleware = [logger];
const store =  createStore(rootReducer, applyMiddleware(...middleware));

export default store;