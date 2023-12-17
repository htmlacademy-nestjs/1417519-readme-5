import { Injectable } from '@nestjs/common';
import { CommentRepository } from './comment.repository';
import { CreateCommentDto } from './dto/create-comment.dto';
import dayjs from 'dayjs';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentEntity } from './comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    private readonly commentRepository: CommentRepository
  ) {}

  public async createComment(dto: CreateCommentDto) {
    const comment = {
      id: dto.id,
      postId: dto.postId,
      commentText: dto.commentText,
      authorId: dto.authorId,
      authorName: dto.authorName,
      authorLastName: dto.authorLastName,
      authorEmail: dto.authorEmail,
      createdDate:  dayjs().toDate(),
    };

    const commentEntity = new CommentEntity(comment);
    return this.commentRepository.save(commentEntity);
  }

  public async getComments() {
    return this.commentRepository.findAll();
  }

  public async getCommentById(id: string) {
    const comment = await this.commentRepository.findById(id);
    if(!comment){
      throw new Error(`Comment with id ${id} does not exist`);
    }
    return comment
  }

  public async updateComment(id: string, dto: UpdateCommentDto) {
    const comment = await this.commentRepository.findById(id);
    if (!comment) {
      throw new Error(`Comment with id ${id} does not exist`);
    }
    return this.commentRepository.update(id, comment);
  }

  public async deleteComment(id: string) {
    const comment = await this.commentRepository.findById(id);
    if (!comment) {
      throw new Error(`Comment with id ${id} does not exist`);
    }
    return this.commentRepository.deleteById(id);
  }
}
