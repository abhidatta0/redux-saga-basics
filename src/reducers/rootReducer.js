import { combineReducers } from 'redux';
import updownReducer from "./updownReducer";
import quoteReducer from './quoteReducer';

const rootReducer = combineReducers({
    updownReducer,
    quoteReducer,
});

export default rootReducer;