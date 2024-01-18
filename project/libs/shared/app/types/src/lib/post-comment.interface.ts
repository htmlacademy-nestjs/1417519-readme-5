export interface PostComment {
    id?: string;
    updatedAt?: Date;
    createdAt?: Date;
    ownerId?: string;
    postId: string;
    message: string;
  }

