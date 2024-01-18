import { PostTag } from "@project/shared/app/types";
import { Entity } from "@project/shared/core";



export class PostTagEntity implements PostTag, Entity<string> {
  public id?: string;
  public postId: string;
  public createdAt?: Date;
  public updatedAt?: Date;
  public text: string;

  constructor(tag: PostTag) {
    this.populate(tag);
  }

  public populate(data: PostTag): void {
    this.id = data.id;
    this.postId = data.postId;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.text = data.text;
  }

  public toPOJO(): Record<string, unknown> {
    return {
      id: this.id,
      postId: this.postId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      text: this.text
    };
  }
}
