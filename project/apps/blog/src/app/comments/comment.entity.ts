import { PostComment } from '@project/shared/app/types';

export class CommentEntity implements PostComment {
  public id?: string;
  public updatedAt?: Date;
  public createdAt?: Date;
  public ownerId?: string;
  public postId: string;
  public message: string;

  constructor(comment: PostComment) {
    this.populate(comment);
  }

  public toPOJO(){
    return {
      postId: this.postId,
      id: this.id,
      message: this.message,
      ownerId: this.ownerId,
      createdAt: this.createdAt
    }
  }

  public populate(data: PostComment): void {
    this.postId = data.postId;
    this.id = data.id;
    this.message = data.message;
    this.ownerId = data.ownerId;
    this.createdAt = data.createdAt;
  }
}
