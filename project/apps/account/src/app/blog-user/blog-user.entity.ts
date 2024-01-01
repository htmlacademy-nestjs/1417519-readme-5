import { AuthUser } from '@project/shared/app/types';
import { Entity } from '@project/shared/core';
import { SALT_ROUNDS } from './blog-user.constant';
import { compare, genSalt, hash } from 'bcrypt';

export class BlogUserEntity implements AuthUser, Entity<string> {
  id?: string;
  passwordHash: string;
  email: string;
  userName: string;
  avatar: string;

  constructor(user: AuthUser) {
    this.populate(user);
  }

  public toPOJO(){
    return {
      id: this.id,
      email: this.email,
      userName: this.userName,
      avatar: this.avatar,
      passwordHash: this.passwordHash,
    }
  }

  public populate(data: AuthUser): void {
    this.email = data.email;
    this.userName = data.userName;
    this.avatar = data.avatar;
    this.passwordHash = data.passwordHash;
  }

  public async setPassword(password: string): Promise<BlogUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }

    static fromObject(data: AuthUser): BlogUserEntity {
    return new BlogUserEntity(data);
  }
}
