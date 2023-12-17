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

  constructor(post: Post) {
    this.populate(post);
  }

  public toPOJO(){
    return {
      id: this.id,
      type: this.type,
      postStatus: this.postStatus,
      authorId: this.authorId,
      authorName: this.authorName,
      authorLastName: this.authorLastName,
      authorEmail: this.authorEmail,
      createdDate: this.createdDate,
      publishedDate: this.publishedDate,
      isRepost: this.isRepost,
      originalPostId: this.originalPostId,
      ownerId: this.ownerId,
      tags: this.tags,
      likesCount: this.likesCount,
      commentsCount: this.commentsCount
    }
  }

  public populate(data: Post): void {
    this.type = data.type;
    this.postStatus = data.postStatus;
    this.authorId = data.authorId;
    this.authorName = data.authorName;
    this.authorLastName = data.authorLastName;
    this.authorEmail = data.authorEmail;
    this.createdDate = data.createdDate;
    this.publishedDate = data.publishedDate;
    this.isRepost = data.isRepost;
    this.originalPostId = data.originalPostId;
    this.ownerId = data.ownerId;
    this.tags = data.tags;
    this.likesCount = data.likesCount;
    this.commentsCount = data.commentsCount;
  }
}
