import { ApiProperty } from "@nestjs/swagger";
import { User } from "@project/shared/app/types";
export class CreateUserDto  implements Partial<User>{

  id?: string;

  @ApiProperty({
    description: 'User unique address',
    example: 'user@user.ru'
  })
  email: string;

  @ApiProperty({
    description: 'User name',
    example: 'Ivanov'
  })
  userName: string;

  @ApiProperty({
    description: 'User password',
    example: '123456'
  })
  password: string;

  @ApiProperty({
    description: 'User avatar',
    example: '/images/user.png'
  })
  avatar: string;

  regDate: Date;

  publicCount: number;

  followersCount: number;
}
