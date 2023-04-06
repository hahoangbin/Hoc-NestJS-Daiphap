import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { UserDto } from '../User.dto';

@Controller('users')
export class UserController {
  @Post()
  createUser(@Body() user: UserDto): UserDto {
    user.id = 1;
    user.createdAt = new Date();
    user.updatedAt = new Date();
    console.log(user);

    return UserDto.plainToClass(user);
  }
  @Get(':id')
  getUserById(@Param('id') id: number) {
    console.log(id);
    return 'test';
  }
}
