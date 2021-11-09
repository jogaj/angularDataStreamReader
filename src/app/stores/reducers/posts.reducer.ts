import { createReducer, on, State } from "@ngrx/store";
import { IPost } from "../../models";
import { loadPosts } from "../actions";

/**
 * Initial state for Posts
 */
export const initialState: ReadonlyArray<IPost> = [];

/**
 * Reducer for Posts
 */
export const postsReducer = createReducer(
    initialState,
    
    on(loadPosts, (state, { getPosts }) => {
        return getPosts;
    }),
);
