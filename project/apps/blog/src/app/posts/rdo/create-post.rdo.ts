import { ApiProperty } from "@nestjs/swagger";
import { Post, PostStatus, PostType } from "@project/shared/app/types";
import { Expose } from "class-transformer";

export class PostRdo implements Post {
  @ApiProperty({ description: 'Идентификатор поста' })
  @Expose()
  public id: string;

  @ApiProperty({ description: 'Тип поста' })
  @Expose()
  public type: PostType;

  @ApiProperty({ description: 'Состояние поста' })
  @Expose()
  public postStatus: PostStatus;

  @ApiProperty({ description: 'ID автора поста' })
  @Expose()
  public authorId: string;

  @ApiProperty({ description: 'Имя автора поста' })
  @Expose()
  public authorName: string;

  @ApiProperty({ description: 'Фамилия автора поста' })
  @Expose()
  public authorLastName: string;

  @ApiProperty({ description: 'Email автора поста' })
  @Expose()
  public authorEmail: string;

  @ApiProperty({ description: 'Дата создания поста' })
  @Expose()
  public createdDate: Date;

  @ApiProperty({ description: 'Дата публикации поста' })
  @Expose()
  public publishedDate?: Date;

  @ApiProperty({ description: 'Пост является репостом' })
  @Expose()
  public isRepost?: boolean;

  @ApiProperty({ description: 'Оригинальный ID поста при репосте' })
  @Expose()
  public originalPostId?: string;

  @ApiProperty({ description: 'ID создателя поста при репосте' })
  @Expose()
  public ownerId?: string;

  @ApiProperty({ description: 'Теги' })
  @Expose()
  public tags?: string[];

  @ApiProperty({ description: 'Количеств лайков поста' })
  @Expose()
  public likesCount?: number;

  @ApiProperty({ description: 'Количество комментариев поста' })
  @Expose()
  public commentsCount?: number;
}
