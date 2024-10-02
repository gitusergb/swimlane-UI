import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";

import  swimlaneReducer  from './redux/reducers'; 

const rootReducer = combineReducers({
  swimlaneReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
