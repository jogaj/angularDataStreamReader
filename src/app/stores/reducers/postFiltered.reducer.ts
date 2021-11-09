import { createReducer, on, State } from "@ngrx/store";
import { IPost } from "../../models";
import { saveFilterPostAction } from "../actions";

/**
 * Initial state for Posts filtered
 */
export const initialState: ReadonlyArray<IPost> = [];

/**
 * Reducer for Posts filtered
 */
export const postsFilteredReducer = createReducer(
    initialState,

    on(saveFilterPostAction, (state, { posts }) => {
        return posts;
    }),
);
