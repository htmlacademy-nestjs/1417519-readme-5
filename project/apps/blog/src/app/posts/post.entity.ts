import { Post, PostComment, PostLike, PostStatus, PostTag, PostType } from '@project/shared/app/types';
import { Entity } from '@project/shared/core';

export class PostEntity implements Post{
  public id?: string;
  public authorId: string;
  public originalAuthorId?: string;
  public ownerPostId?: string;
  public createdAt?: Date;
  public updatedAt?: Date;
  public postType: PostType;
  public postStatus: PostStatus;
  public publicName?: string;
  public publicAnnounce?: string;
  public publicText?: string;
  public quoteAuthor?: string;
  public photo?: string;
  public link?: string;
  public comments?: PostComment[];
  public tags?: PostTag[];
  public likes?: PostLike[];

  constructor(post: Post) {
    this.populate(post);
  }

  public populate(data: Post): void {
    this.id = data.id ?? '';
    this.authorId = data.authorId;
    this.originalAuthorId = data.originalAuthorId;
    this.ownerPostId = data.ownerPostId;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.postType = data.postType;
    this.postStatus = data.postStatus;
    this.publicName = data.publicName;
    this.publicAnnounce = data.publicAnnounce;
    this.publicText = data.publicText;
    this.quoteAuthor = data.quoteAuthor;
    this.photo = data.photo;
    this.link = data.link;
    this.comments = data.comments;
    this.tags = data.tags;
    this.likes = data.likes;
  }

  public toPOJO(): Record<string, unknown> {
    return {
       id: this.id,
       authorId:  this.authorId,
       originalAuthorId:  this.originalAuthorId,
       ownerPostId:  this.ownerPostId,
       createdAt:   this.createdAt,
       updatedAt:   this.updatedAt,
       postType:    this.postType,
       postStatus:  this.postStatus,
       publicName:  this.publicName,
       publicAnnounce:  this.publicAnnounce,
       publicText:  this.publicText,
       quoteAuthor: this.quoteAuthor,
       photo: this.photo,
       link:  this.link,
       comments:  this.comments,
       tags:  this.tags,
       likes:  this.likes
    }
  }
}
