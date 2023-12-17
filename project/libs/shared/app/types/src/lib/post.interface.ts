import { PostStatus } from "./post-status.enum";
import { PostType } from "./post-type.enum";

export interface Post {
  id?: string;
  type: PostType;
  postStatus: PostStatus;
  authorId: string;
  authorName: string;
  authorLastName: string;
  authorEmail: string;
  createdDate: Date;
  publishedDate?: Date;
  isRepost?: boolean;
  originalPostId?: string;
  ownerId?: string;
  tags?: string[];
  likesCount?: number;
  commentsCount?: number;
}

export interface PostVideo extends Post {
  postName: string;
  videoLink: string;
}

export interface PostText extends Post {
  postName: string;
  postAnonce: string;
  postText: string;
}

export interface PostQuote extends Post {
  quoteText: string;
  quoteAuthor: string;
}

export interface PostPhoto extends Post {
  photo: string;
}

export interface PostLink extends Post {
  link: string;
  linkDescription: string;
}

