import { createAction, props } from '@ngrx/store';
import { IPost } from '../../models';

const SAVE_FILTER_POSTS = '[Post Filtered] Saved';

/**
 * Action to save the posts filtered
 */
export const saveFilterPostAction = createAction(
    SAVE_FILTER_POSTS,
    (posts: ReadonlyArray<IPost>) => ({ posts })
);