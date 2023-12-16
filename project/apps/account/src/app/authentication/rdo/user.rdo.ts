import { Expose } from 'class-transformer';

export class UserRdo {
  @Expose()
  public id: string;

  @Expose()
  public avatar: string;

  @Expose()
  public userName: string;

  @Expose()
  public email: string;

  @Expose()
  public regDate: string;

  @Expose()
  public publicCount: number;

  @Expose()
  public followersCount: number;
}
