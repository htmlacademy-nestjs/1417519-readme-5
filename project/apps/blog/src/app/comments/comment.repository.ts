import { BaseMemoryRepository } from '@project/shared/core';
import { CommentEntity } from './comment.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentRepository extends BaseMemoryRepository<CommentEntity> {}
