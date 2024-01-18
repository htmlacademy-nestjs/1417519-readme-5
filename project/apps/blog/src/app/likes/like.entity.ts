import { PostLike } from "@project/shared/app/types";
import { Entity } from "@project/shared/core";

export class PostLikeEntity implements PostLike, Entity<string> {
  public id?: string;
  public postId: string;
  public ownerId: string;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor (like: PostLike) {
    this.populate(like);
  }

  public populate(data: PostLike): void {
    this.id = data.id;
    this.postId = data.postId;
    this.ownerId = data.ownerId;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }

  public toPOJO(): Record<string, unknown> {
    return {
      id: this.id,
      postId: this.postId,
      ownerId: this.ownerId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}
