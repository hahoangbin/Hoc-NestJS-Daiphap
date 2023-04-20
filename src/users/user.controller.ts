import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { UserDto } from './User.dto';
import { UserService } from './user.sevice';
import { plainToInstance } from 'class-transformer';

@Controller('users')
export class UserController {
  @Get(':id')
  getUserById(@Param('id') id: number) {
    console.log(id);
    return 'test';
  }
}
