import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from '../blog-user/dto/create-user.dto';
import { AUTH_USER_NOT_FOUND, AUTH_USER_PASSWORD_WRONG } from './authentication.constant';
import { LoginUserDto } from './dto/login-user.dto';
import { compare } from 'bcrypt';
import { UsersService } from '../blog-user/blog-user.service';

@Injectable()
  export class AuthenticationService {
    constructor(
      private readonly usersService: UsersService
    ) {};

  public async register(dto: CreateUserDto) {
    return this.usersService.create(dto);
  }

  public async login(dto: LoginUserDto){
    const user = await this.usersService.findByEmail(dto.email);

    if(!user) {
      throw new NotFoundException(AUTH_USER_NOT_FOUND);
    }

    if(!await compare(dto.password, user.passwordHash)) {

      throw new NotFoundException(AUTH_USER_PASSWORD_WRONG);
    }

    return user;
  }

}
