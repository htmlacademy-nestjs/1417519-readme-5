import { BaseMemoryRepository } from '@project/shared/core';
import { PostEntity } from './post.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsRepository extends BaseMemoryRepository<PostEntity > {}
