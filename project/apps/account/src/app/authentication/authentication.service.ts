import { Injectable, NotFoundException } from '@nestjs/common';
import { BlogUserRepository } from '../blog-user/blog-user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { AUTH_USER_EXISTS, AUTH_USER_NOT_FOUND, AUTH_USER_PASSWORD_WRONG } from './authentication.constant';
import { BlogUserEntity } from '../blog-user/blog-user.entity';
import dayjs from 'dayjs';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
  export class AuthenticationService {
    constructor(
      private readonly blogUserRepository: BlogUserRepository
    ) {};

    public async register(dto: CreateUserDto){
      const { email, userName, password, avatar} = dto;

    const blogUser = {
      email,
      userName,
      avatar,
      regDate: dayjs().toDate(),
      publicCount: 0,
      followersCount: 0,
      passwordHash: '',
    };

    const existUser = await this.blogUserRepository.findByEmail(email);

    if(existUser) {
      throw new Error(AUTH_USER_EXISTS);
    }

    const userEntity = await new BlogUserEntity(blogUser)
    .setPassword(password)


    return this.blogUserRepository.save(userEntity);
  }

  public async verifyUser(dto: LoginUserDto){
    const { email, password } = dto;
    const existUser = await this.blogUserRepository.findByEmail(email);

    if(!existUser) {
      throw new NotFoundException(AUTH_USER_NOT_FOUND);
    }

    if(!await existUser.comparePassword(password)){
      throw new NotFoundException(AUTH_USER_PASSWORD_WRONG);
    }

    return existUser;
  }

  public async getUser(id:string){
    return this.blogUserRepository.findById(id);
  }
}
