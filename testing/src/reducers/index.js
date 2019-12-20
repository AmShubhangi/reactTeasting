import { combineReducers } from 'redux';
import commentReducers from './comment';
import authReducer from './auth';

export default combineReducers({
    comments: commentReducers,
    auth: authReducer
});