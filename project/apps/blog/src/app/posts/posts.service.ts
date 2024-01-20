import { Injectable } from '@nestjs/common';
import { PostsRepository } from './post.repository';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import dayjs from 'dayjs';
import { PostEntity } from './post.entity';
import { PrismaClientService } from '@project/shared/blog/models';

@Injectable()
export class PostsService {
  constructor(
    private readonly prismaService: PrismaClientService,
    private readonly postsRepository: PostsRepository
  ) {}

  public async createPost(dto: CreatePostDto) {
  const post = {
    type: dto.type,
    postStatus: dto.postStatus,
    authorId: dto.authorId,
    authorName: dto.authorName,
    authorLastName: dto.authorLastName,
    authorEmail: dto.authorEmail,
    createdDate: dayjs().toDate(),
    publishedDate: dto.publishedDate,
    isRepost: dto.isRepost,
    originalPostId: dto.originalPostId,
    ownerId: dto.ownerId,
    tags: dto.tags,
    likesCount: dto.likesCount,
    commentsCount: dto.commentsCount
  };

  const postEntity = new PostEntity(post);
  return this.postsRepository.save(postEntity);

  }

  public async getPosts() {
    return this.prismaService.post.findMany;
  }

  public async getPostById(id: string) {
    const post = await this.postsRepository.findById(id);

    if(!post){
      throw new Error(`Post with id ${id} does not exist`);
    }
    return post
  }

  public async updatePost(id: string, dto: UpdatePostDto) {
    const post = await this.postsRepository.findById(id);
    const updatingPost = Object.assign(post, dto);
    if (!post) {
      throw new Error(`Post with id ${id} does not exist`);
    }
    return this.postsRepository.update(id, updatingPost);
  }

  public async deletePost(id: string) {
    const post = await this.postsRepository.findById(id);
    if (!post) {
      throw new Error(`Post with id ${id} does not exist`);
    }
    return this.postsRepository.deleteById(id);
  }
}
