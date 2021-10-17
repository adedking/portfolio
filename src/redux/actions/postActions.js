import { ActionTypes } from "../actionTypes/actionTypes";

export const retrievePosts = (posts) => {
    return {
        type: ActionTypes.RETRIEVE_POSTS,
        payload: posts
    }
}