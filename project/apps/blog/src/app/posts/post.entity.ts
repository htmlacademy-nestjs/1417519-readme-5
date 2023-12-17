import { Post, PostStatus, PostType } from '@project/shared/app/types';
import { Entity } from '@project/shared/core';

export class PostEntity implements Post{
  public id?: string;
  public type: PostType;
  public postStatus: PostStatus;
  public authorId: string;
  public authorName: string;
  public authorLastName: string;
  public authorEmail: string;
  public createdDate: Date;
  public publishedDate?: Date;
  public isRepost?: boolean;
  public originalPostId?: string;
  public ownerId?: string;
  public tags?: string[];
  public likesCount?: number;
  public commentsCount?: number;
}
