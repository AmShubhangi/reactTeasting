import commentReducer from "../comment";
import { SAVE_COMMENT } from "../../actions/types";

it('handles the action of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    };
    const newState = commentReducer([], action);

    expect(newState).toEqual(['New Comment']);
});

it('handles action with unknown type', () => {
    const newState = commentReducer([], { type: 'Shubhangi' })
    expect(newState).toEqual([]);
});
