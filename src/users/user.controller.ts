import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UserDto } from './User.dto';
import { plainToClass } from 'class-transformer';

@Controller('users')
export class UserController {
  @Get('id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return 'test';
  }

  @Post()
  createUser(@Body() user: UserDto): UserDto {
    user.createdAt = new Date();
    user.updatedAt = new Date();
    user.id = 1;

    return UserDto.plainToClass(user);
  }
}
