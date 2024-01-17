export interface PostComment {
    id?: string;
    updatedAt?: Date;
    ownerId?: string;
    postId: string;
    message: string;
  }

