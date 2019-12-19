import { SAVE_COMMENT } from './types';
import comment from '../reducers/comment';

export function saveComment() {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}