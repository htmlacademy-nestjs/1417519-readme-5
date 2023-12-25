import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserRdo {
  @ApiProperty({
    description: 'The uniq user ID',
    example: '13'
  })
  @Expose()
  public id: string;

  @ApiProperty({
    description: 'User avatar path',
    example: '/images/user.png'
  })
  @Expose()
  public avatar: string;

  @ApiProperty({
    description: 'User name',
    example: 'Meks'
  })
  @Expose()
  public userName: string;

  @ApiProperty({
    description: 'User email',
    example: 'user@user.local'
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'User registration date',
    example: '1981-03-12'
  })
  @Expose()
  public regDate: string;


  @ApiProperty({
    description: 'User publick count',
    example: '30'
  })
  @Expose()
  public publicCount: number;

  @ApiProperty({
    description: 'User followers count',
    example: '330'
  })
  @Expose()
  public followersCount: number;
}
