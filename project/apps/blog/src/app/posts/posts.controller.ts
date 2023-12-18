import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { ApiResponse } from '@nestjs/swagger';
import { CreatePostDto } from './dto/create-post.dto';
import { PostRdo } from './rdo/create-post.rdo';
import { fillDto } from '@project/shared/helpers';
import { UpdatePostDto } from './dto/update-post.dto';


@Controller('posts')
export class PostsController {
  constructor(
    private readonly postsService: PostsService
  ) {}

  @ApiResponse({
    type: CreatePostDto,
    status: HttpStatus.OK,
    description: 'Создать пост',
  })
  @Post()
  public async create(@Body() dto: CreatePostDto) {
    const post = await this.postsService.createPost(dto);
    return fillDto(PostRdo, post.toPOJO());
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Вернуть список постов',
  })
  @Get()
  public async findAll() {
    const posts = await this.postsService.getPosts();
    return posts.map(post => fillDto(PostRdo, post.toPOJO()));
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Вернуть пост',
  })
  @Get(':id')
  public async findOne(@Param('id') id: string) {
    const post = await this.postsService.getPostById(id);
    console.log(1)
    return fillDto(PostRdo, post.toPOJO());
  }

  @ApiResponse({
    type: UpdatePostDto,
    status: HttpStatus.OK,
    description: 'Обновить данные поста',
  })
  @Patch(':id')
  public async update(@Param('id') id: string, @Body() dto: UpdatePostDto) {
    const post = await this.postsService.updatePost(id, dto);
    return fillDto(PostRdo, post.toPOJO());
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Удалить пост',
  })
  @Delete(':id')
  public async remove(@Param('id') id: string) {
    const post = await this.postsService.deletePost(id);
    return fillDto(PostRdo, void 0);
  }
}
