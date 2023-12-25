import { ApiProperty } from "@nestjs/swagger";
import { PostComment } from "@project/shared/app/types";
import { Expose } from "class-transformer";

export class CommentRdo implements PostComment {
  @ApiProperty({ description: 'ID комментария' })
  @Expose()
  public id: string;

  @ApiProperty({ description: 'ID комментируемого поста' })
  @Expose()
  public postId: string;

  @ApiProperty({ description: 'Текст комментария' })
  @Expose()
  public commentText: string;

  @ApiProperty({ description: 'ID автора комментария' })
  @Expose()
  public authorId: string;

  @ApiProperty({ description: 'Имя автора комментария' })
  @Expose()
  public authorName: string;

  @ApiProperty({ description: 'Фамилия автора комментария' })
  @Expose()
  public authorLastName: string;

  @ApiProperty({ description: 'Email автора комментария' })
  @Expose()
  public authorEmail: string;

  @ApiProperty({ description: 'Дата создания комментария' })
  @Expose()
  public createdDate: Date;
}
