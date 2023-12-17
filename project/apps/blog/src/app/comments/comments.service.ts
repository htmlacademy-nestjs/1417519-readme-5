import { Injectable } from '@nestjs/common';
import { CommentRepository } from './comment.repository';
import { CreateCommentDto } from './dto/create-comment.dto';
import dayjs from 'dayjs';

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
    return this.commentRepository.save(comment);
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

  public async updateComment(id: string, dto: CreateCommentDto) {
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
