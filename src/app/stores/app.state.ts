import { IFilter, IPost, IStats } from "../models";

/**
 * NGRX State
 */
export interface AppState {
    posts: IPost[],
    filter: IFilter,
    stats: IStats,
    postFiltered: IPost[],
}
