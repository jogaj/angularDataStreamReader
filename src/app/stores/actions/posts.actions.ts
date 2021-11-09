import { createAction, props } from '@ngrx/store';
import { IPost } from '../../models';

const LOADING_POSTS = '[Posts Stream] Loading';
const LOAD_POSTS = '[Posts Stream] Loaded';

/**
 * Action for Loading Posts
 */
export const loadingPosts = createAction(LOADING_POSTS);

/**
 * Action for loaded Posts
 */
export const loadPosts = createAction(
    LOAD_POSTS,
    (getPosts: ReadonlyArray<IPost>) => ({ getPosts })
);
