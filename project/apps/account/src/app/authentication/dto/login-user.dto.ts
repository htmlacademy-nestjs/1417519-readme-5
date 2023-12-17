import { ApiProperty } from "@nestjs/swagger";

export class LoginUserDto {
  @ApiProperty({
    description: 'User uniq email',
    example: 'user@user.ru',
  })
  email: string;

  @ApiProperty({
    description: 'User password',
    example: '123456'
  })
  password: string;
}
