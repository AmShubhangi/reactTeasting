import { combineReducers } from 'redux';
import commentReducers from './comment';

export default combineReducers({
    comments: commentReducers,
});