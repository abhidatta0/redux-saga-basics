import { combineReducers } from 'redux';
import updownReducer from "./updownReducer";

const rootReducer = combineReducers({
    updownReducer,
});

export default rootReducer;