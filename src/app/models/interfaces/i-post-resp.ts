import { IPost } from "./i-post";

/**
 * Interface Post Response
 */
export interface IPostResp {
    data:  IPost[];
    total: number;
    page:  number;
    limit: number;
}
