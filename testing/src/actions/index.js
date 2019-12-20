import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from './types';
import Axios from 'axios';

export function changeAuth(isLoggedIn) {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    };
}

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    };
}

export function fetchComments() {
    const response = Axios.get('http://jsonplaceholder.typicode.com/comments');
    return {
        type: FETCH_COMMENTS,
        payload: response // payload means the container, where you you want to store the response of API.
    }
}