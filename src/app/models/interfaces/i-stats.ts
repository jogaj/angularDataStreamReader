/**
 * Interface Statistics
 */
export interface IStats {
    totalPost:  number,
    totalLikes: number,
    postPerSecond: number,
    oldestPost?: Date,
    newestPost?: Date
}
