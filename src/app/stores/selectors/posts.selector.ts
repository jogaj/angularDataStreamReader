import { createSelector } from '@ngrx/store';

import { AppState } from '../app.state';
import { FilterType, IFilter, IPost } from '../../models';

/**
 * Retrieves the state of posts
 * @param state AppState
 * @returns The posts state
 */
export const postsSelector = (state: AppState)  => state.posts;

/**
 * Selector to retrieve the data filtered
 */
export const postsFilter = createSelector(
    postsSelector,
    (state: AppState) => state.filter,
    (posts: ReadonlyArray<IPost>, filter: Readonly<IFilter>) => {
        return filterBy(posts, filter.filterType, filter.filterValue);
    }   
)

/**
 *  Helper function to filter the data accordingly
 * 
 * @param posts The posts collection retrieved
 * @param filterType The Filter type to apply
 * @param filterValue The Filter value to apply
 * @returns 
 */
function filterBy(posts: ReadonlyArray<IPost>, filterType: any, filterValue: string): IPost[] {
    /* istanbul ignore else */
    if (filterType === FilterType.NoFilter ||
        !posts ||
        posts.length === 0) {
            return Object.assign(posts);
    }

    switch(filterType) {
        case FilterType.Tag:
            return filterByTag(posts, filterValue);
        case FilterType.Text:
            return filterByText(posts, filterValue);
        case FilterType.Likes:
            return filterByLikes(posts, Number.parseInt(filterValue));
        default:
            return Object.assign(posts);
    }
}

/**
 * Helper function to filter the data by a specified tag
 *
 * @param posts The posts collection
 * @param tag The tag to be used as filter
 * @returns A new collection of posts filtered
 */
 function filterByTag(data: ReadonlyArray<IPost>, tag: string): IPost[] {
    return data.filter((post: IPost) =>
                            post.tags.forEach((t: string)=>{
                                return t.toLowerCase() === tag.toLowerCase();
                            })
                        );
}

/**
 * Helper function to filter the data by a contained text
 *
 * @param data The posts collection
 * @param text The value to be used as partial filter
 * @returns A new collection of posts filtered
 */
function filterByText(data: ReadonlyArray<IPost>, text: string): IPost[] {
    const r = data.filter((post: IPost) =>
                            post.text.toLowerCase().indexOf(text.toLowerCase()) > -1
                        );
    return r;
}

/**
 * Helper function to filter the data by a minimun number of likes
 *
 * @param data The posts collection
 * @param qty The value to be used as partial filter
 * @returns A new collection of posts filtered
 */
function filterByLikes(data: ReadonlyArray<IPost>, qty: number): IPost[] {
    return data.filter((post: IPost) => post.likes >= qty);
}
