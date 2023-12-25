import { PostStatus, PostType } from "@project/shared/app/types";

export class CreatePostDto {
  public type: PostType;
  public postStatus: PostStatus;
  public authorId: string;
  public authorName: string;
  public authorLastName: string;
  public authorEmail: string;
  public createdDate: Date;
  public publishedDate?: Date;
  public isRepost?: boolean;
  public originalPostId?: string;
  public ownerId?: string;
  public tags?: string[];
  public likesCount?: number;
  public commentsCount?: number;
}
