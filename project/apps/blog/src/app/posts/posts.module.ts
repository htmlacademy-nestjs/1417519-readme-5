import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PostsRepository } from './post.repository';
import { PrismaClientModule } from '@project/shared/blog/models';
@Module({
  imports: [PrismaClientModule],
  controllers: [PostsController],
  providers: [PostsService,PostsRepository],
  exports: [PostsService,PostsRepository],
})
export class PostsModule {}
