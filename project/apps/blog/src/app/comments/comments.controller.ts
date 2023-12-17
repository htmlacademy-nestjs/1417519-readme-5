import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { CommentRepository } from './comment.repository';
import { CreateCommentDto } from './dto/create-comment.dto';
import { ApiResponse } from '@nestjs/swagger';
import { CommentsService } from './comments.service';
import { CommentRdo } from './rdo/create-comment.rdo';
import { fillDto } from '@project/shared/helpers';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(
    private readonly commentsService: CommentsService
  ) {}

  @ApiResponse({
    type: CreateCommentDto,
    status: HttpStatus.OK,
    description: 'Создать комментарий',
  })
  @Post()
  public async create(@Body() dto: CreateCommentDto) {
    const comment = await this.commentsService.createComment(dto);
    return fillDto(CommentRdo, comment.toPOJO());
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Вернуть список комментариев',
  })
  @Get()
  public async findAll() {
    const comments = await this.commentsService.getComments();
    return comments.map(comment => fillDto(CommentRdo, comment.toPOJO()));
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Вернуть комментарий',
  })
  @Get(':id')
  public async findOne(@Param('id') id: string) {
    const comment = await this.commentsService.getCommentById(id);
    return fillDto(CommentRdo, comment.toPOJO());
  }

  @ApiResponse({
    type: UpdateCommentDto,
    status: HttpStatus.OK,
    description: 'Обновить данные комментария',
  })
  @Patch(':id')
  public async update(@Param('id') id: string, @Body() dto: UpdateCommentDto) {
    const comment = await this.commentsService.updateComment(id, dto);
    return fillDto(CommentRdo, comment.toPOJO());
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Удалить комментарий',
  })
  @Delete(':id')
  public async delete(@Param('id') id: string) {
    const comment = await this.commentsService.deleteComment(id);
    return fillDto(CommentRdo, void 0);
  }
}
