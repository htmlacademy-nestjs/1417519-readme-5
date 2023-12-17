import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

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
}
