import { PostComment } from '@project/shared/app/types';

export class CommentEntity implements PostComment {
  public postId: string;
  public id: string;
  public commentText: string;
  public authorId: string;
  public authorName: string;
  public authorLastName: string;
  public authorEmail: string;
  public createdDate: Date;

  constructor(comment: PostComment) {
    this.populate(comment);
  }

  public toPOJO(){
    return {
      postId: this.postId,
      id: this.id,
      commentText: this.commentText,
      authorId: this.authorId,
      authorName: this.authorName,
      authorLastName: this.authorLastName,
      authorEmail: this.authorEmail,
      createdDate: this.createdDate
    }
  }

  public populate(data: PostComment): void {
    this.postId = data.postId;
    this.id = data.id;
    this.commentText = data.commentText;
    this.authorId = data.authorId;
    this.authorName = data.authorName;
    this.authorLastName = data.authorLastName;
    this.authorEmail = data.authorEmail;
    this.createdDate = data.createdDate;
  }
}
