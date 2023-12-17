import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PostRepository } from './post.repository';

@Module({
  controllers: [PostsController],
  providers: [PostsService,PostRepository],
  exports: [PostsService,PostRepository],
})
export class PostsModule {}
