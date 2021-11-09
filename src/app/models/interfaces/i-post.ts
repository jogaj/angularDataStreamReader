import { IPostOwner } from "./i-post-owner";

/**
 * Interface Post
 */
export interface IPost {
    id:          string;
    image:       string;
    likes:       number;
    tags:        string[];
    text:        string;
    publishDate: Date;
    owner:       IPostOwner;
}
