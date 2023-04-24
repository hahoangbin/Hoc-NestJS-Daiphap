import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UserDto } from './User.dto';
import { ModuleRef } from '@nestjs/core';

@Controller('users')
export class UserController {
  constructor(private readonly moduleRef: ModuleRef) {}

  @Post()
  createUser(@Body() user: UserDto): UserDto {
    return this.moduleRef.get('USER_GIANGTB').createUser(user);
  }

  @Get('id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return 'test';
  }
}
