export interface PostComment {
  postId: string;
  commentId: string;
  commentText: string;
  authorId: string;
  authorName: string;
  authorLastName: string;
  authorEmail: string;
  createdDate: Date;
}
