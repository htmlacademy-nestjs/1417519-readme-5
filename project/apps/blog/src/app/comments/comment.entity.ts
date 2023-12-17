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
}
