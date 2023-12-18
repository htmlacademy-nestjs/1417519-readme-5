import { Injectable, NotFoundException } from "@nestjs/common";
import { BlogUserRepository } from "./blog-user.repository";
import { CreateUserDto } from "./dto/create-user.dto";
import { genSalt, hash } from "bcrypt";
import { SALT_ROUNDS } from "./blog-user.constant";
import dayjs from "dayjs";
import { AUTH_USER_EXISTS } from "../authentication/authentication.constant";
import { BlogUserEntity } from "./blog-user.entity";
import { UpdateUserDto } from "./dto/update-user.dto";
import { AuthUser } from "@project/shared/app/types";

@Injectable()
export class UsersService {
    constructor(
      private readonly blogUserRepository: BlogUserRepository
    ) {}

    public async create(dto: CreateUserDto){
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

  public async findAll() {
    return this.blogUserRepository.findAll();
  }

  public async findOne(id: string) {
    const user = await this.blogUserRepository.findById(id);

    if (!user) {
      throw new NotFoundException('User with id not found');
    }
    return user;
  }

  public async findByEmail(email: string) {
    const user = await this.blogUserRepository.findByEmail(email);

    if (!user) {
      throw new NotFoundException('User with email not found');
    }
    return user;
  }

  public async update(id: string, dto: UpdateUserDto) {
    const { password, ...dtoProps } = dto;
    const user: UpdateUserDto = dtoProps;

    if (!await this.blogUserRepository.findById(id)) {
      throw new NotFoundException('User with id not found');
    }
    if (password) {
      user.password = await hash(password, await genSalt(SALT_ROUNDS));;
    }
    return this.blogUserRepository.update(id, user);
  }

  public async delete(id: string) {
    if (!await this.blogUserRepository.findById(id)) {
      throw new NotFoundException('User with id not found');
    }
    return this.blogUserRepository.deleteById(id);
  }
}
