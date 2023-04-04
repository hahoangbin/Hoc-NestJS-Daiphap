import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDto } from './User.dto';

@Controller('users')
export class UserController {
  @Post()
  createUser(@Body() user: UserDto): UserDto {
    console.log(user);
    return {
      userName: 'test user',
      password: 'test password',
    };
  }
  @Get(':id')
  getUserById(@Param('id') id: number) {
    console.log(id);
    return 'test';
  }
}
