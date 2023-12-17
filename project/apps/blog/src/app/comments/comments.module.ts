import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { CommentRepository } from './comment.repository';

@Module({
  controllers: [CommentsController],
  providers: [CommentsService,CommentRepository],
  exports: [CommentsService,CommentRepository],
})
export class CommentsModule {}
