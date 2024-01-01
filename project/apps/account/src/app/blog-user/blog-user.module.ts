import { Module } from '@nestjs/common';
import { BlogUserRepository } from './blog-user.repository';
import { UsersService } from './blog-user.service';
import { UsersController } from './blog-user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogUserModel, BlogUserSchema } from './blog-user.model';

@Module({
  imports: [MongooseModule.forFeature([
    { name: BlogUserModel.name, schema: BlogUserSchema }
  ])],
  providers: [BlogUserRepository, UsersService],
  exports: [BlogUserRepository, UsersService],
  controllers: [UsersController],
})
export class BlogUserModule {}
