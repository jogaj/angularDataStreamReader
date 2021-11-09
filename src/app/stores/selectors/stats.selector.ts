import { createSelector } from '@ngrx/store';

import { AppState } from '../app.state';
import { IFilter, IPost, IStats, StatsModel } from '../../models';

/**
 * Retrieves the state of statistics
 * @param state AppState
 * @returns The Statistics state
 */
export const statsSelector = (state: AppState)  => state.stats;

/**
 * Selector to calculate the statics
 */
export const statsCalcSelector = createSelector(
    statsSelector,
    (state: AppState) => state.postFiltered,   
    (state: AppState) => state.filter,    
    (stats: Readonly<IStats>, posts: ReadonlyArray<IPost>, filter: Readonly<IFilter>) => {
        return calculateStatistics(stats, posts, filter);
    }   
)

/**
 * Helper function to calculate the Statistics
 * @param stats The current statistics
 * @param posts The current set of posts
 * @returns A statistics copy object with update data
 */
function calculateStatistics(stats: IStats, posts: ReadonlyArray<IPost>, filter: IFilter): IStats {
    // Getting a copy
    let cStats = Object.assign({}, stats);

    // Clear stats for a new filter
    if (filter.filterNew || posts.length === 0) {
        cStats = new StatsModel()
    }
    // Acummulating total post proccesed
    cStats.totalPost += posts.length;
    // Calculate total likes, oldest and newer post
    posts.forEach((post: IPost) => {
        cStats.totalLikes += post.likes;
        cStats.oldestPost = getOldest(cStats.oldestPost, post.publishDate);
        cStats.newestPost = getNewest(cStats.newestPost, post.publishDate);
    });

    return cStats;
}

/**
 * Helper function to verify if date2 is lower than date1
 *
 * @param date1 First date
 * @param date2 Second date
 * @returns The lower date
 */
function getOldest(date1: Date|undefined, date2: Date) {
    if (date1 === undefined) return date2;
    if (new Date(date2).getTime() < new Date(date1).getTime()) return date2;
    return date1;
}

/**
 * Helper function to verify if date2 is higher than date1
 *
 * @param date1 First date
 * @param date2 Second date
 * @returns The higher date
 */
function getNewest(date1: Date|undefined, date2: Date) {
    if (date1 === undefined) return date2;
    if (new Date(date2).getTime() > new Date(date1).getTime()) return date2;
    return date1;
}