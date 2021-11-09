import { IStats } from "./interfaces/i-stats";

/**
 * Statistics model
 */
export class StatsModel implements IStats {
    constructor(
        totalPost?:  number,
        totalLikes?: number,
        postPerSecond?: number,
        oldestPost?: Date,
        newestPost?: Date
        ) {
            this.totalPost =  totalPost || 0;
            this.totalLikes = totalLikes || 0;
            this.postPerSecond = postPerSecond || 0;
            this.oldestPost = oldestPost || undefined;
            this.newestPost = newestPost || undefined;
    }

    totalPost:  number;
    totalLikes: number;
    postPerSecond: number;
    oldestPost?: Date;
    newestPost?: Date;
}