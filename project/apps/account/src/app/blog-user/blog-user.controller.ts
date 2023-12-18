import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './blog-user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRdo } from '../authentication/rdo/user.rdo';
import { fillDto } from '@project/shared/helpers';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('Users')
@Controller('blog-users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService
  ) {}

  @ApiResponse({
    type: CreateUserDto,
    status: HttpStatus.OK,
    description: 'Создать пользователя',
  })
  @Post()
  public async create(@Body() dto: CreateUserDto) {
    const user = await this.usersService.create(dto);
    return fillDto(UserRdo, user.toPOJO());
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Вернуть список пользователей',
  })
  @Get()
  public async findAll() {
    const users = await this.usersService.findAll();
    return users.map((user) => fillDto(UserRdo, user.toPOJO()));
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Вернуть пользователя',
  })
  @Get(':id')
  public async findOne(@Param('id') id: string) {
    const user = await this.usersService.findOne(id);
    return fillDto(UserRdo, user.toPOJO());
  }

  @ApiResponse({
    type: UpdateUserDto,
    status: HttpStatus.OK,
    description: 'Обновить данные пользователей',
  })
  @Patch(':id')
  public async update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    const user = await this.usersService.update(id, dto);
    return fillDto(UserRdo, user.toPOJO());
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Удалить пользователя',
  })
  @Delete(':id')
  public async remove(@Param('id') id: string) {
    const user = await this.usersService.delete(id);
    return fillDto(UserRdo, void 0);
  }
}
