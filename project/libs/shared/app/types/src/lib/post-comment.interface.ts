export interface PostComment {
  id: string;
  postId: string;
  commentText: string;
  authorId: string;
  authorName: string;
  authorLastName: string;
  authorEmail: string;
  createdDate: Date;
}
