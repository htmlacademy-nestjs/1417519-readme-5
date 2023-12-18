export interface User {
  id?: string;
  passwordHash?: string;
  email: string;
  userName: string;
  avatar: string;
  regDate: Date;
  publicCount: number;
  followersCount: number;
}
