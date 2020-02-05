import counterReducer from "./counter";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counters: counterReducer
});

export default allReducers;