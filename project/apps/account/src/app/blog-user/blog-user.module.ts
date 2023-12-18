import { Module } from '@nestjs/common';
import { BlogUserRepository } from './blog-user.repository';
import { UsersService } from './blog-user.service';
import { BlogUserController } from './blog-user.controller';

@Module({
  providers: [BlogUserRepository, UsersService],
  exports: [BlogUserRepository, UsersService],
  controllers: [BlogUserController],
})
export class BlogUserModule {}
