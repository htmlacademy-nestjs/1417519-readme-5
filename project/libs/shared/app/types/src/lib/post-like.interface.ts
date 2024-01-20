export interface PostLike {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  ownerId: string;
  postId: string;
}
