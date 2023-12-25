export class CreateCommentDto {
  public id: string;
  public postId: string;
  public commentText: string;
  public authorId: string;
  public authorName: string;
  public authorLastName: string;
  public authorEmail: string;
  public createdDate: Date;
}
