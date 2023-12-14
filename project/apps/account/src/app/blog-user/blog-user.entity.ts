import { AuthUser } from '@project/shared/app/types';
import { Entity } from '@project/shared/core';

export class BlogUserEntity implements AuthUser, Entity<string> {
  id?: string;
  passwordHash: string;
  email: string;
  userName: string;
  avatar: string;
  regDate: Date;
  publicCount: number;
  followersCount: number;

  constructor(user: AuthUser) {
    this.populate(user);
  }

  public toPOJO(){
    return {
      id: this.id,
      email: this.email,
      userName: this.userName,
      avatar: this.avatar,
      regDate: this.regDate,
      publicCount: this.publicCount,
      followersCount: this.followersCount
    }
  }

  public populate(data: AuthUser): void {
    this.email = data.email;
    this.userName = data.userName;
    this.avatar = data.avatar;
    this.regDate = data.regDate;
    this.publicCount = data.publicCount;
    this.followersCount = data.followersCount;
  }
}
