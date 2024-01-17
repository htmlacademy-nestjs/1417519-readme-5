import { PostComment } from "./post-comment.interface";
import { PostLike } from "./post-like.interface";
import { PostStatus } from "./post-status.enum";
import { PostTag } from "./post-tag.interface";
import { PostType } from "./post-type.enum";

export interface Post {
  id?: string;
  authorId: string;
  originalAuthorId?: string;
  ownerPostId?: string;
  createdAt?: Date;
  updatedAt?: Date;
  postType: PostType;
  postStatus: PostStatus;
  publicName?: string;
  publicAnnounce?: string;
  publicText?: string;
  quoteAuthor?: string;
  photo?: string;
  link?: string;
  comments?: PostComment[];
  tags?: PostTag[];
  likes?: PostLike[];
}
